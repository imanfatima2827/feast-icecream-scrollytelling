"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "nut" | "chocolate" | "ember";
  opacity: number;
}

export default function FloatingParticles() {
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: (i * 17) % 100,
      y: (i * 23) % 100,
      size: (i % 3) * 3 + 3,
      duration: 12 + (i % 8) * 3,
      delay: (i % 5) * 1.5,
      type: i % 3 === 0 ? "nut" : i % 3 === 1 ? "chocolate" : "ember",
      opacity: 0.2 + (i % 4) * 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => {
        let bgStyle = "";
        let rounded = "rounded-sm";

        if (p.type === "nut") {
          bgStyle = "bg-[#D99B5E] shadow-[0_0_8px_rgba(217,155,94,0.4)]";
          rounded = "rounded-full rotate-45";
        } else if (p.type === "chocolate") {
          bgStyle = "bg-[#6D3B25] shadow-[0_0_10px_rgba(43,18,9,0.8)]";
          rounded = "rounded-[2px] -rotate-12";
        } else {
          bgStyle = "bg-[#C8874A] shadow-[0_0_12px_rgba(200,135,74,0.6)]";
          rounded = "rounded-full";
        }

        return (
          <motion.div
            key={p.id}
            initial={{
              x: `${p.x}vw`,
              y: `${p.y}vh`,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y: [`${p.y}vh`, `${(p.y - 18 + 100) % 100}vh`],
              x: [`${p.x}vw`, `${(p.x + ((p.id % 2 === 0 ? 1 : -1) * 4) + 100) % 100}vw`],
              opacity: [0, p.opacity, p.opacity, 0],
              rotate: [0, 90, 180, 270],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className={`absolute ${bgStyle} ${rounded} pointer-events-none filter blur-[0.4px]`}
          />
        );
      })}
    </div>
  );
}
