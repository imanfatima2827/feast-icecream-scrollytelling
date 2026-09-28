"use client";

import React from "react";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { Sparkles, Layers, ShieldCheck, Flame, Compass } from "lucide-react";
import Image from "next/image";

interface ProductDetailsSectionProps {
  product: Product;
}

export default function ProductDetailsSection({ product }: ProductDetailsSectionProps) {
  const detailPoints = [
    {
      title: "Thick Chocolate Shell",
      tag: "Tempered to Snap",
      desc: "An unapologetically thick outer layer of rich chocolate, engineered with precise cocoa butter crystal temper for that unmistakable, satisfying crack on first bite.",
      stat: "3.2mm Shell",
    },
    {
      title: "Roasted Nut Crunch",
      tag: "Evenly Distributed",
      desc: "Slow-roasted golden nut pieces toasted to aromatic perfection, folded abundantly into the chocolate armor to ensure maximum textural contrast in every single bite.",
      stat: "Double Roasted",
    },
    {
      title: "Creamy Chocolate Center",
      tag: "Slow-Churned",
      desc: "Beneath the crunch lies a velvety, melt-in-your-mouth chocolate ice cream crafted with real dairy cream and cocoa liquor for deep, lingering decadence.",
      stat: "-18°C Optimal",
    },
  ];

  return (
    <section id="craftsmanship" className="relative py-28 lg:py-36 bg-[#160805] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-caramel/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6D3B25]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/10 border border-caramel/25 backdrop-blur-md mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-caramel" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-caramel">
              Architectural Anatomy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-cream"
          >
            {product.detailsSection.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-cream/70 font-light leading-relaxed"
          >
            {product.detailsSection.description}
          </motion.p>
        </div>

        {/* 2-Column Showcase: High-Res Macro Shot & Anatomy Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Texture-focused Hero Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#2B1209] to-[#1A0C07] p-1 border border-caramel/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden">
                <Image
                  src="/images/feast-hero.webp"
                  alt={product.detailsSection.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100503] via-transparent to-transparent opacity-80" />

                {/* Bottom floating badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#160805]/80 backdrop-blur-xl border border-caramel/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-caramel font-bold block">
                      The Gold Standard
                    </span>
                    <span className="text-sm font-bold text-cream">
                      Real Dairy & Roasted Nuts
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-caramel/20 flex items-center justify-center text-caramel">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient behind glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-caramel/10 to-[#6D3B25]/20 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity opacity-50" />
          </motion.div>

          {/* Right Column: Layer breakdown details */}
          <div className="lg:col-span-6 space-y-6">
            {detailPoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#2B1209]/60 via-[#1A0C07]/80 to-[#160805] border border-caramel/15 hover:border-caramel/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(200,135,74,0.1)] group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-caramel/15 text-caramel text-[11px] font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-cream/40 group-hover:text-caramel transition-colors">
                    {item.stat}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-cream group-hover:text-caramel-light transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-cream/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            {/* Freshness Commitment note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="p-5 rounded-2xl bg-caramel/10 border border-caramel/25 flex items-start gap-3 text-xs text-cream/80"
            >
              <ShieldCheck className="w-5 h-5 text-caramel shrink-0 mt-0.5" />
              <div>
                <strong className="text-caramel font-semibold block mb-0.5">
                  {product.freshnessSection.title}
                </strong>
                <span>{product.freshnessSection.description}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
