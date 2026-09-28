"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Heart, ShieldCheck, Sparkles, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1A0C07] text-cream border-t border-caramel/15 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-caramel/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-caramel/10">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-caramel via-[#6D3B25] to-[#2B1209] p-[1px]">
                <div className="w-full h-full rounded-lg bg-[#160805] flex items-center justify-center">
                  <span className="font-extrabold text-caramel text-base">F</span>
                </div>
              </div>
              <span className="font-extrabold tracking-[0.25em] text-2xl text-cream">
                FEAST
              </span>
            </div>

            <p className="text-caramel/90 text-sm italic tracking-wide max-w-sm">
              &ldquo;Crunch into indulgence.&rdquo;
            </p>

            <p className="text-cream/60 text-xs leading-relaxed max-w-sm">
              Mastering the art of frozen confectionery. Iconic thick chocolate shells,
              artisanally roasted nuts, and velvet-smooth ice cream crafted for pure sensorial delight.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-caramel/80">
              <ShieldCheck className="w-4 h-4 text-caramel" />
              <span>100% Real Chocolate Coating • Artisan Roasted Nuts</span>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-caramel">
              Shop
            </h3>
            <ul className="space-y-2.5 text-xs text-cream/70">
              <li>
                <a
                  href="#experience"
                  className="hover:text-caramel transition-colors flex items-center gap-1.5"
                >
                  <span>Chocolate Ice Cream</span>
                </a>
              </li>
              <li>
                <a
                  href="#textures"
                  className="hover:text-caramel transition-colors flex items-center gap-1.5"
                >
                  <span>Signature Textures</span>
                </a>
              </li>
              <li>
                <a
                  href="#order-section"
                  className="hover:text-caramel transition-colors flex items-center gap-1.5"
                >
                  <span>Order Now</span>
                </a>
              </li>
              <li>
                <a
                  href="#order-section"
                  className="hover:text-caramel transition-colors flex items-center gap-1.5"
                >
                  <span>Party & Bulk Packs</span>
                </a>
              </li>
              <li>
                <a
                  href="#craftsmanship"
                  className="hover:text-caramel transition-colors flex items-center gap-1.5"
                >
                  <span>Nut Selection</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-caramel">
              Support
            </h3>
            <ul className="space-y-2.5 text-xs text-cream/70">
              <li>
                <a href="#order-section" className="hover:text-caramel transition-colors">
                  Contact Concierge
                </a>
              </li>
              <li>
                <a href="#order-section" className="hover:text-caramel transition-colors">
                  Cold-Chain Delivery
                </a>
              </li>
              <li>
                <a href="#order-section" className="hover:text-caramel transition-colors">
                  Freezer Storage FAQs
                </a>
              </li>
              <li>
                <a href="#order-section" className="hover:text-caramel transition-colors">
                  Nutrition & Allergen Info
                </a>
              </li>
              <li>
                <a href="#order-section" className="hover:text-caramel transition-colors">
                  Satisfaction Guarantee
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-caramel flex items-center gap-2">
              <span>Newsletter</span>
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
            </h3>
            <p className="text-xs text-cream/70 leading-relaxed">
              Get the latest drops and indulgent updates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-caramel/10 border border-caramel/30 text-caramel text-xs animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You&apos;re on the VIP list. Stay tuned!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#100503] border border-caramel/25 text-cream placeholder-cream/40 text-xs focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-all"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-md bg-caramel text-chocolate-darkest font-semibold hover:bg-caramel-light transition-colors flex items-center justify-center"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-cream/40 block">
                  Strictly spam-free. Only fresh drops.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-4">
          <p>© {new Date().getFullYear()} Feast Confectionery Co. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#" className="hover:text-caramel transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-caramel transition-colors">
              Terms of Indulgence
            </a>
            <span>•</span>
            <a href="#" className="hover:text-caramel transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
