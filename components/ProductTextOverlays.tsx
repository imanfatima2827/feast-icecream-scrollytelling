"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Product } from "@/data/products";
import { Sparkles, ShieldCheck, Flame, Compass } from "lucide-react";

interface ProductTextOverlaysProps {
  product: Product;
  scrollYProgress: MotionValue<number>;
  isSequenceReady?: boolean;
}

export default function ProductTextOverlays({
  product,
  scrollYProgress,
  isSequenceReady = true,
}: ProductTextOverlaysProps) {
  // Scene 1: Hero Identity [0.00 -> 0.22]
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.16, 0.22], [1, 1, 0.8, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.05, 0.22], [0, -10, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.05, 0.22], [1, 1, 0.92]);
  const filter1 = useTransform(
    scrollYProgress,
    [0.15, 0.22],
    ["blur(0px)", "blur(8px)"]
  );

  // Scene 2: Shell & Crunch [0.24 -> 0.48]
  const opacity2 = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.42, 0.48],
    [0, 1, 1, 0]
  );
  const y2 = useTransform(scrollYProgress, [0.22, 0.28, 0.48], [40, 0, -40]);
  const scale2 = useTransform(scrollYProgress, [0.22, 0.28, 0.48], [0.95, 1, 0.95]);
  const filter2 = useTransform(
    scrollYProgress,
    [0.22, 0.26, 0.44, 0.48],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(8px)"]
  );

  // Scene 3: Creamy Center [0.50 -> 0.74]
  const opacity3 = useTransform(
    scrollYProgress,
    [0.48, 0.54, 0.68, 0.74],
    [0, 1, 1, 0]
  );
  const y3 = useTransform(scrollYProgress, [0.48, 0.54, 0.74], [40, 0, -40]);
  const scale3 = useTransform(scrollYProgress, [0.48, 0.54, 0.74], [0.95, 1, 0.95]);
  const filter3 = useTransform(
    scrollYProgress,
    [0.48, 0.52, 0.70, 0.74],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(8px)"]
  );

  // Scene 4: Celebration Finale [0.76 -> 1.0]
  const opacity4 = useTransform(
    scrollYProgress,
    [0.74, 0.80, 0.94, 1.0],
    [0, 1, 1, 1]
  );
  const y4 = useTransform(scrollYProgress, [0.74, 0.80, 1.0], [40, 0, 0]);
  const scale4 = useTransform(scrollYProgress, [0.74, 0.80, 1.0], [0.95, 1, 1]);
  const filter4 = useTransform(
    scrollYProgress,
    [0.74, 0.78, 1.0],
    ["blur(6px)", "blur(0px)", "blur(0px)"]
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#160805]/85 to-transparent" />
      {/* SCENE 1: HERO */}
      <motion.div
        style={{
          opacity: opacity1,
          y: y1,
          scale: scale1,
          filter: filter1,
        }}
        className="absolute bottom-16 sm:bottom-24 inset-x-0 mx-auto px-6 max-w-3xl text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/15 border border-caramel/30 backdrop-blur-md mb-4 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-caramel animate-ping" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-caramel-light">
            Feast Masterpiece
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-cream leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
          {product.section1.title.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-3">
              {word.toLowerCase().includes("chocolate") ? (
                <span className="text-caramel-gradient">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        <p className="mt-4 text-base sm:text-xl lg:text-2xl text-cream-warm/90 font-light tracking-wide max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          {product.section1.subtitle}
        </p>

        {/* Scroll indicator prompt */}
        <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-caramel/80">
          <div className="w-5 h-8 rounded-full border border-caramel/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-caramel animate-bounce" />
          </div>
          <span>{isSequenceReady ? "Scroll to uncover the crunch" : "Loading animation…"}</span>
        </div>
      </motion.div>

      {/* SCENE 2: A SHELL MADE TO CRACK */}
      <motion.div
        style={{
          opacity: opacity2,
          y: y2,
          scale: scale2,
          filter: filter2,
        }}
        className="absolute bottom-16 sm:bottom-24 inset-x-0 mx-auto px-6 max-w-2xl text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/15 border border-caramel/30 backdrop-blur-md mb-4 shadow-sm">
          <Flame className="w-3.5 h-3.5 text-caramel" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-caramel-light">
            Signature Shell
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cream leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          {product.section2.title}
        </h2>

        <p className="mt-4 text-sm sm:text-base lg:text-lg text-cream-warm/85 font-light leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          {product.section2.subtitle}
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-caramel">
          <span className="px-3 py-1.5 rounded-lg bg-chocolate-deep/80 border border-caramel/20 backdrop-blur-md">
            Heavy Roasted Nuts
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-chocolate-deep/80 border border-caramel/20 backdrop-blur-md">
            Audible Snap
          </span>
        </div>
      </motion.div>

      {/* SCENE 3: CREAMY CHOCOLATE CENTER */}
      <motion.div
        style={{
          opacity: opacity3,
          y: y3,
          scale: scale3,
          filter: filter3,
        }}
        className="absolute bottom-16 sm:bottom-24 inset-x-0 mx-auto px-6 max-w-2xl text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/15 border border-caramel/30 backdrop-blur-md mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-caramel" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-caramel-light">
            Velvet Heart
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cream leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          {product.section3.title}
        </h2>

        <p className="mt-4 text-sm sm:text-base lg:text-lg text-cream-warm/85 font-light leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          {product.section3.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-medium text-cream/90">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-chocolate-deep/80 border border-caramel/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-caramel" />
            <span>Slow-Churned Cream</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-chocolate-deep/80 border border-caramel/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-caramel" />
            <span>Pure Cocoa Solids</span>
          </div>
        </div>
      </motion.div>

      {/* SCENE 4: EVERY BITE. A LITTLE CELEBRATION */}
      <motion.div
        style={{
          opacity: opacity4,
          y: y4,
          scale: scale4,
          filter: filter4,
        }}
        className="absolute bottom-16 sm:bottom-24 inset-x-0 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/15 border border-caramel/30 backdrop-blur-md mb-4 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-caramel" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-caramel-light">
            Sensorial Perfection
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cream drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          {product.section4.title}
        </h2>

        <p className="mt-3 text-sm sm:text-lg lg:text-xl text-cream-warm/90 font-light max-w-xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          {product.section4.subtitle}
        </p>

        {/* Stats Pill Badges */}
        <div className="mt-8 flex justify-center items-center gap-3 sm:gap-6">
          {product.stats.map((stat, i) => (
            <div
              key={i}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-[#1A0C07]/85 border border-caramel/25 backdrop-blur-xl shadow-lg flex flex-col items-center min-w-[90px] sm:min-w-[120px]"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-caramel font-semibold">
                {stat.label}
              </span>
              <span className="text-base sm:text-xl font-black text-cream">
                {stat.val}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
