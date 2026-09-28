"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Zap, Heart, Award, ArrowUpRight } from "lucide-react";

export default function IngredientTextureSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const textures = [
    {
      id: "crunch",
      badge: "Texture 01",
      keyword: "CRUNCH",
      title: "Artisanal Roasted Nuts",
      description:
        "Roasted nut pieces embedded abundantly in a rich chocolate shell. Each peanut and hazelnut fragment is toasted at precise heat to seal in natural nutty oils, delivering an unmistakable, explosive crispness in every bite.",
      metrics: [
        { label: "Crunch Index", val: "9.8 / 10" },
        { label: "Roast Profile", val: "Slow Golden" },
        { label: "Bite Sensation", val: "Acoustic Snap" },
      ],
      gradient: "from-[#8C4F1E] via-[#522A19] to-[#160805]",
      accent: "text-caramel border-caramel/40",
      bgPill: "bg-caramel/20 text-caramel",
    },
    {
      id: "chocolate",
      badge: "Texture 02",
      keyword: "CHOCOLATE",
      title: "Thick Indulgent Enrobing",
      description:
        "A thick, indulgent chocolate coating that cracks satisfyingly under your teeth. Formulated with premium cocoa butter for high gloss, rich aroma, and an unmistakable structural snap.",
      metrics: [
        { label: "Shell Temper", val: "Triple-Crystal" },
        { label: "Thickness", val: "Heavy Coat" },
        { label: "Melt Temperature", val: "34°C In-Mouth" },
      ],
      gradient: "from-[#421C0E] via-[#2B1209] to-[#100503]",
      accent: "text-caramel-light border-caramel/40",
      bgPill: "bg-[#6D3B25]/40 text-cream",
    },
    {
      id: "cream",
      badge: "Texture 03",
      keyword: "CREAM",
      title: "Velvety Chocolate Center",
      description:
        "Smooth, creamy chocolate ice cream at the center. Once you shatter through the crunch, pure velvety indulgence greets your palate with a calm, comforting, cool contrast.",
      metrics: [
        { label: "Dairy Source", val: "100% Real Cream" },
        { label: "Churn Rate", val: "Slow-Aged" },
        { label: "Finish", val: "Silk Velvet" },
      ],
      gradient: "from-[#5A2C17] via-[#33150A] to-[#160805]",
      accent: "text-cream border-cream/30",
      bgPill: "bg-cream/15 text-cream",
    },
  ];

  return (
    <section id="textures" className="relative py-28 lg:py-36 bg-[#100503] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-caramel/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-caramel/10 border border-caramel/25 backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-caramel">
              Sensory Trilogy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-cream"
          >
            The Hero Characteristics
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-cream/70 font-light"
          >
            Three distinct dimensions of indulgence orchestrated into one cohesive symphony.
          </motion.p>
        </div>

        {/* 3 Major Texture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {textures.map((tex, index) => (
            <motion.div
              key={tex.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 bg-gradient-to-b ${tex.gradient} border border-caramel/20 hover:border-caramel/50 transition-all duration-500 shadow-[0_20px_40px_rgba(16,5,3,0.9)] flex flex-col justify-between group overflow-hidden`}
            >
              {/* Giant background typography watermark */}
              <div className="absolute -top-6 -right-4 text-7xl sm:text-8xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-caramel/[0.06] transition-colors">
                {tex.keyword}
              </div>

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${tex.bgPill}`}>
                    {tex.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-caramel/20 flex items-center justify-center text-caramel/60 group-hover:text-caramel group-hover:border-caramel transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="text-4xl sm:text-5xl font-black tracking-wider text-cream mb-2 group-hover:text-caramel-light transition-colors">
                  {tex.keyword}
                </div>

                <h3 className="text-lg font-bold text-caramel mb-4">
                  {tex.title}
                </h3>

                <p className="text-sm text-cream/70 leading-relaxed font-light mb-8">
                  {tex.description}
                </p>
              </div>

              {/* Metrics Bar */}
              <div className="pt-6 border-t border-caramel/15 space-y-3">
                {tex.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between text-xs">
                    <span className="text-cream/50 uppercase tracking-wider text-[10px]">
                      {m.label}
                    </span>
                    <span className="font-bold text-cream font-mono">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
