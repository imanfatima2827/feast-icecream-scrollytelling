"use client";

import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

interface NextFlavorSectionProps {
  currentProduct: Product;
  nextProduct: Product;
  onSelectNext: () => void;
}

export default function NextFlavorSection({
  currentProduct,
  nextProduct,
  onSelectNext,
}: NextFlavorSectionProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#100503] overflow-hidden border-t border-caramel/15">
      {/* Cinematic ambient background glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#3E1B0E]/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-caramel/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/15 border border-caramel/30 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-caramel" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
            The Confectionery Continues
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-cream max-w-3xl mx-auto leading-tight"
        >
          Craving Another Dimension of <span className="text-caramel-gradient">Crunch</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-cream/70 font-light max-w-xl mx-auto"
        >
          Journey next into <strong className="text-cream font-semibold">{nextProduct.name}</strong>. {nextProduct.subName}
        </motion.p>

        {/* Large Slanted-Edge CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={onSelectNext}
            className="slanted-button inline-flex items-center gap-4 px-10 sm:px-14 py-5 bg-gradient-to-r from-caramel via-[#D99B5E] to-caramel text-chocolate-darkest font-extrabold text-sm sm:text-base uppercase tracking-[0.2em] shadow-[0_0_35px_rgba(200,135,74,0.45)] hover:shadow-[0_0_55px_rgba(200,135,74,0.75)] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 group"
          >
            <span>Explore {nextProduct.name}</span>
            <ArrowRight className="w-5 h-5 text-chocolate-darkest transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </motion.div>

        {/* Subtle note */}
        <div className="mt-8 text-xs text-cream/40 uppercase tracking-widest font-mono">
          Switching flavor dynamically updates the 3D canvas experience
        </div>
      </div>
    </section>
  );
}
