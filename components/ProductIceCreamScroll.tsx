"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import NextImage from "next/image";
import { Product } from "@/data/products";
import ProductTextOverlays from "./ProductTextOverlays";
import { Sparkles } from "lucide-react";

interface ProductIceCreamScrollProps {
  product: Product;
  frameCount?: number;
}

// Must match the number of frames actually generated into /public/images/<folder>
// by scripts/prepare-images.mjs (it processes every file found in /icecream).
const FRAME_COUNT = 200;
// Resting scale: the frame is slightly over-scanned (6%) so that when it zooms
// out on scroll-up its edges never go inside the viewport (no visible frame box).
const REST_SCALE = 1.06;
// How much the frame zooms out when scrolling back up (0.05 = 5%).
const ZOOM_OUT_AMOUNT = 0.05; // must keep REST_SCALE * (1 - amount) >= 1
// Scroll-up distance (as a fraction of the section) to reach full zoom-out.
const ZOOM_OUT_DISTANCE = 0.12;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ProductIceCreamScroll({ product, frameCount = FRAME_COUNT }: ProductIceCreamScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>([]);
  const latestScrollYRef = useRef(0);
  const renderedFrameRef = useRef(-1);
  const renderRequestRef = useRef<number | null>(null);
  const resizePendingRef = useRef(false);
  const currentFrameRef = useRef(0);
  const maxProgressRef = useRef(0);
  const requestUpdateRef = useRef<(() => void) | null>(null);
  const [loadedCount, setLoadedCount] = useState(0);
  const [sequenceReady, setSequenceReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  // This MotionValue continues to drive the existing text and opacity effects.
  // The canvas itself is driven only by the single native scroll listener below.
  const scrollYProgress = useMotionValue(0);
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.04, 0.08], [0, 1, 1]);

  // ZOOM-OUT EFFECT (instead of reversing frames): scrollBack is 0..1, how far
  // the user has scrolled UP from their furthest point. The frame zooms out a
  // little from REST_SCALE toward 1, never below 1, so the frame's edges never
  // become visible.
  const scrollBack = useMotionValue(0);
  const scrollBackSmooth = useSpring(scrollBack, { stiffness: 110, damping: 24, mass: 0.6 });
  const canvasScale = useTransform(scrollBackSmooth, (back) => REST_SCALE * (1 - ZOOM_OUT_AMOUNT * back));

  const drawFrame = useCallback((index: number, force = false) => {
    const canvas = canvasRef.current;
    const frame = framesRef.current[index];
    if (!canvas || !frame || !frame.complete || frame.naturalWidth === 0) return;
    if (!force && renderedFrameRef.current === index) return;

    const context = canvas.getContext("2d");
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!context || !width || !height) return;

    // Keep the backing buffer in sync with CSS pixels for sharp retina rendering.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pixelWidth = Math.round(width * dpr);
    const pixelHeight = Math.round(height * dpr);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }

    // Cover-fit: the frame fills the full viewport width/height with no empty
    // space on the left/right (aspect ratio preserved, overflow is cropped).
    const scale = Math.max(width / frame.naturalWidth, height / frame.naturalHeight);
    const drawWidth = frame.naturalWidth * scale;
    const drawHeight = frame.naturalHeight * scale;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, width, height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(frame, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
    renderedFrameRef.current = index;
  }, []);

  // PRELOAD: scrolling is deliberately disabled until every frame settles.
  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    let settled = 0;
    framesRef.current = Array.from({ length: frameCount }, () => null);
    renderedFrameRef.current = -1;
    setLoadedCount(0);
    setSequenceReady(false);
    setLoadFailed(false);

    let failedCount = 0;
    const MAX_RETRIES = 2;

    // Ready once every frame has either loaded or permanently failed.
    // A single flaky request (common with 200 parallel image requests on
    // mobile networks) must never leave the section blank forever.
    const settle = () => {
      settled += 1;
      if (settled === frameCount) {
        setSequenceReady(true);
        if (failedCount > 0) setLoadFailed(true);
      }
    };

    // With 200 frames, calling setState on every single image.onload would
    // trigger ~200 re-renders while the sequence loads. Batch progress
    // updates instead (every 10 frames, plus always on the final one).
    const flushProgress = () => {
      if (!cancelled) setLoadedCount(loaded);
    };

    const preloadFrame = (index: number, attempt = 0) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        if (cancelled) return;
        // onload only guarantees dimensions are known, not that the pixels
        // are decoded. Force a full decode now, while nothing is scrolling,
        // so the first drawImage() for this frame during scroll is instant
        // instead of causing a visible stutter mid-scroll.
        const markLoaded = () => {
          if (cancelled) return;
          framesRef.current[index] = image;
          loaded += 1;
          if (loaded % 10 === 0 || loaded === frameCount) flushProgress();
          // Frame 1 is a stable fallback while the rest of the sequence loads.
          if (index === 0) drawFrame(0, true);
          requestUpdateRef.current?.();
          settle();
        };
        if (typeof image.decode === "function") {
          image.decode().then(markLoaded).catch(markLoaded);
        } else {
          markLoaded();
        }
      };
      image.onerror = () => {
        if (cancelled) return;
        // Transient network blips are common with 200 concurrent requests.
        // Retry a couple of times before giving up on this frame.
        if (attempt < MAX_RETRIES) {
          setTimeout(() => {
            if (!cancelled) preloadFrame(index, attempt + 1);
          }, 300 * (attempt + 1));
          return;
        }
        failedCount += 1;
        console.warn(`Unable to load animation frame ${index + 1} after ${MAX_RETRIES + 1} attempts.`);
        settle();
      };
      image.src = `${product.folderPath}/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;
    };

    preloadFrame(0);
    for (let index = 1; index < frameCount; index += 1) preloadFrame(index);

    return () => { cancelled = true; };
  }, [drawFrame, frameCount, product.folderPath]);

  // SCROLL MAPPING + RENDER LOOP: one passive listener only stores scrollY.
  // Layout reads, progress calculation, and canvas drawing happen in one rAF.
  useEffect(() => {
    const updateInAnimationFrame = () => {
      renderRequestRef.current = null;
      const section = containerRef.current;
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollRange = Math.max(section.offsetHeight - window.innerHeight, 1);
      const rawProgress = clamp((latestScrollYRef.current - sectionTop) / scrollRange, 0, 1);
      // FORWARD-ONLY: progress never decreases, so scrolling back up does not
      // reverse the animation or the text scenes. Frames only move forward.
      maxProgressRef.current = Math.max(maxProgressRef.current, rawProgress);
      const progress = maxProgressRef.current;
      scrollBack.set(clamp((progress - rawProgress) / ZOOM_OUT_DISTANCE, 0, 1));
      scrollYProgress.set(progress);

      // EASED PLAYBACK: the displayed frame glides toward the scroll target
      // instead of jumping. A fast flick (up or down) therefore plays through
      // the in-between frames, and scrolling back to the top always plays the
      // sequence all the way back to frame 1.
      const target = progress * (frameCount - 1);
      const current = currentFrameRef.current;
      const diff = target - current;
      const next = Math.abs(diff) < 0.4 ? target : current + diff * 0.2;
      currentFrameRef.current = next;

      let targetIndex = clamp(Math.round(next), 0, frameCount - 1);
      // If this exact frame isn't loaded, show the nearest one that is.
      if (!framesRef.current[targetIndex]) {
        for (let offset = 1; offset < frameCount; offset += 1) {
          const back = targetIndex - offset;
          const fwd = targetIndex + offset;
          if (back >= 0 && framesRef.current[back]) { targetIndex = back; break; }
          if (fwd < frameCount && framesRef.current[fwd]) { targetIndex = fwd; break; }
        }
      }
      if (targetIndex !== renderedFrameRef.current || resizePendingRef.current) {
        drawFrame(targetIndex, resizePendingRef.current);
        resizePendingRef.current = false;
      }

      // Keep animating until we've caught up with the scroll position.
      if (next !== target) requestUpdate();
    };

    const requestUpdate = () => {
      if (renderRequestRef.current === null) {
        renderRequestRef.current = requestAnimationFrame(updateInAnimationFrame);
      }
    };

    requestUpdateRef.current = requestUpdate;

    const onScroll = () => {
      latestScrollYRef.current = window.scrollY;
      requestUpdate();
    };
    const onResize = () => {
      resizePendingRef.current = true;
      latestScrollYRef.current = window.scrollY;
      requestUpdate();
    };

    // Listener is live immediately; frames not loaded yet fall back to the
    // nearest loaded frame, so scrolling never feels dead while loading.
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      requestUpdateRef.current = null;
      if (renderRequestRef.current !== null) cancelAnimationFrame(renderRequestRef.current);
      renderRequestRef.current = null;
    };
  }, [drawFrame, frameCount, scrollYProgress, scrollBack]);

  return (
    <div
      ref={containerRef}
      id="experience"
      aria-busy={!sequenceReady}
      data-frames-loaded={loadedCount}
      className="relative w-full h-[500vh] bg-chocolate-dark"
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <NextImage src="/images/chocolate-bg.webp" alt="Chocolate Studio Lighting Background" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-hero-vignette opacity-50" />
        </div>
        <div className="absolute w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] rounded-full bg-caramel/10 blur-[140px] pointer-events-none -translate-y-8 animate-pulse-glow z-0" />
        <motion.div style={{ opacity: canvasOpacity, scale: canvasScale }} className="relative z-10 w-full h-full flex items-center justify-center">
          <canvas ref={canvasRef} className="block w-full h-full select-none" />
        </motion.div>
        {sequenceReady && loadFailed && (
          <span className="sr-only" role="status">Some animation frames could not load; showing the nearest available frame.</span>
        )}
        <ProductTextOverlays product={product} scrollYProgress={scrollYProgress} isSequenceReady={sequenceReady} />
        <div className="absolute top-20 right-6 sm:right-10 z-20 hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160805]/80 border border-caramel/25 backdrop-blur-md text-[11px] text-cream/75 tracking-widest uppercase shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-caramel" /><span>Interactive 360° Feast</span>
        </div>
      </div>
    </div>
  );
}
