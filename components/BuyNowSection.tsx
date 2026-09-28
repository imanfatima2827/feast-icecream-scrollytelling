"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import {
  ShoppingBag,
  Zap,
  ShieldCheck,
  Truck,
  Plus,
  Minus,
  Sparkles,
  Star,
  CheckCircle,
  Package,
} from "lucide-react";

interface BuyNowSectionProps {
  product: Product;
  onAddToCart: (quantity: number, packType: string) => void;
  onInstantBuy: (quantity: number, packType: string) => void;
}

export default function BuyNowSection({
  product,
  onAddToCart,
  onInstantBuy,
}: BuyNowSectionProps) {
  const [quantity, setQuantity] = useState<number>(2);
  const [selectedPack, setSelectedPack] = useState<number>(0);
  const [addedNotice, setAddedNotice] = useState(false);

  // Extract base numerical price
  const basePrice = parseInt(product.price.replace(/[^0-9]/g, "")) || 40;

  const packs = [
    {
      id: "single",
      name: "Solo Indulgence",
      multiplier: 1,
      tag: "Fresh Bar",
      discount: 0,
    },
    {
      id: "box4",
      name: "Crunch Pack (4 Bars)",
      multiplier: 4,
      tag: "Best Seller",
      discount: 0.05,
    },
    {
      id: "box10",
      name: "Party Feast (10 Bars)",
      multiplier: 10,
      tag: "Save 10%",
      discount: 0.1,
    },
  ];

  const currentMultiplier = packs[selectedPack].multiplier;
  const rawTotal = basePrice * quantity * currentMultiplier;
  const finalTotal = Math.round(rawTotal * (1 - packs[selectedPack].discount));

  const handleAdd = () => {
    onAddToCart(quantity * currentMultiplier, packs[selectedPack].name);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleBuy = () => {
    onInstantBuy(quantity * currentMultiplier, packs[selectedPack].name);
  };

  return (
    <section id="order-section" className="relative py-28 lg:py-36 bg-[#160805] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-caramel/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-[#2B1209]/80 via-[#1F0C06]/90 to-[#100503] border border-caramel/25 shadow-[0_25px_60px_rgba(16,5,3,0.95)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Product Identity & Badges */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-caramel/20 border border-caramel/30 text-caramel text-xs font-bold uppercase tracking-widest">
                  Direct From Freezer
                </span>
                <div className="flex items-center gap-1 text-caramel">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-xs text-cream/70 ml-1.5 font-medium">
                    4.9 (2.4k+ reviews)
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-cream">
                  {product.name}
                </h2>
                <p className="mt-2 text-caramel text-base sm:text-lg font-medium">
                  {product.subName}
                </p>
              </div>

              <p className="text-sm text-cream/70 leading-relaxed font-light">
                {product.description}
              </p>

              {/* Processing Params */}
              <div className="flex flex-wrap gap-2 pt-2">
                {product.buyNowSection.processingParams.map((param, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#100503] border border-caramel/20 text-cream/90 text-xs font-medium flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-caramel" />
                    <span>{param}</span>
                  </span>
                ))}
              </div>

              {/* Delivery Guarantee Info */}
              <div className="space-y-3 pt-4 border-t border-caramel/15">
                <div className="flex items-start gap-3 text-xs text-cream/80">
                  <Truck className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                  <span>{product.buyNowSection.deliveryPromise}</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-cream/80">
                  <ShieldCheck className="w-4 h-4 text-caramel shrink-0 mt-0.5" />
                  <span>{product.buyNowSection.returnPolicy}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Purchase Card */}
            <div className="lg:col-span-6 bg-[#160805]/90 rounded-2xl p-6 sm:p-8 border border-caramel/25 shadow-xl space-y-6">
              {/* Pack Selection */}
              <div>
                <label className="text-xs uppercase tracking-widest text-caramel font-bold block mb-3">
                  Select Pack Size
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {packs.map((pack, idx) => (
                    <button
                      key={pack.id}
                      onClick={() => setSelectedPack(idx)}
                      className={`p-3 rounded-xl border text-left transition-all relative ${
                        selectedPack === idx
                          ? "bg-caramel/15 border-caramel shadow-[0_0_15px_rgba(200,135,74,0.3)]"
                          : "bg-chocolate-deep/40 border-caramel/15 text-cream/70 hover:border-caramel/30"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider block text-caramel">
                        {pack.tag}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-cream block mt-0.5 truncate">
                        {pack.multiplier === 1 ? "Single" : `${pack.multiplier} Bars`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Quantity Bar */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-cream">
                      ₹{finalTotal}
                    </span>
                    {packs[selectedPack].discount > 0 && (
                      <span className="text-xs text-cream/40 line-through">
                        ₹{rawTotal}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-caramel/80 font-medium">
                    {packs[selectedPack].name} ({product.buyNowSection.unit})
                  </span>
                </div>

                {/* Quantity Stepper */}
                <div className="flex items-center gap-3 p-1 rounded-xl bg-chocolate-deep/80 border border-caramel/25">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-caramel/10 hover:bg-caramel/25 text-cream flex items-center justify-center transition-colors active:scale-95"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-cream">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-caramel/10 hover:bg-caramel/25 text-cream flex items-center justify-center transition-colors active:scale-95"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleBuy}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-caramel via-[#D99B5E] to-caramel text-chocolate-darkest font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(200,135,74,0.4)] hover:shadow-[0_0_35px_rgba(200,135,74,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Instant Frozen Checkout</span>
                </button>

                <button
                  onClick={handleAdd}
                  className="w-full py-3.5 rounded-xl bg-transparent border border-caramel/40 text-cream font-bold text-xs uppercase tracking-wider hover:bg-caramel/10 hover:border-caramel transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-caramel" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Feedback toast notice */}
              <AnimatePresence>
                {addedNotice && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 rounded-lg bg-caramel/20 border border-caramel/40 text-caramel-light text-xs text-center font-semibold flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-caramel" />
                    <span>Added {quantity * currentMultiplier}x Feast to your cart!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
