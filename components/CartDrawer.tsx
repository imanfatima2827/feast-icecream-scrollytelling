"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { Product } from "@/data/products";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  packType: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 150 ? 0 : 35;
  const grandTotal = subtotal + (items.length > 0 ? deliveryFee : 0);

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      setOrderComplete(true);
    }, 1500);
  };

  const handleReset = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-[#160805] border-l border-caramel/25 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-caramel/15 flex items-center justify-between bg-[#1A0C07]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-caramel/15 text-caramel">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-cream">Your Feast Cart</h2>
                    <span className="text-xs text-caramel">
                      {items.reduce((acc, i) => acc + i.quantity, 0)} items selected
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-cream/70 hover:text-caramel hover:bg-caramel/10 transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List or Checkout Success */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {orderComplete ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-caramel/20 text-caramel flex items-center justify-center mx-auto border border-caramel/40">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-cream">Order Confirmed!</h3>
                    <p className="text-xs text-cream/70 max-w-xs mx-auto leading-relaxed">
                      Your Feast ice cream bars are being packed in dry-ice packaging. Our cold-chain express courier is heading to you.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-6 px-6 py-2.5 rounded-full bg-caramel text-chocolate-darkest font-bold text-xs uppercase tracking-wider hover:bg-caramel-light transition-colors"
                    >
                      Back to Experience
                    </button>
                  </div>
                ) : items.length === 0 ? (
                  <div className="py-20 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#2B1209] flex items-center justify-center mx-auto text-cream/40">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-cream">Your cart is empty</h3>
                    <p className="text-xs text-cream/50 max-w-xs mx-auto">
                      Indulge your craving. Add your favorite Feast chocolate bars to get started.
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-[#200B06] border border-caramel/15 flex items-center justify-between gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-cream truncate">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-caramel block">
                          {item.packType}
                        </span>
                        <span className="text-xs font-semibold text-cream/90 mt-1 block">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 p-1 rounded-lg bg-chocolate-darkest border border-caramel/20">
                        <button
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-6 h-6 rounded text-cream/70 hover:text-cream flex items-center justify-center"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-cream w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded text-cream/70 hover:text-cream flex items-center justify-center"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-cream/40 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary & Checkout */}
              {!orderComplete && items.length > 0 && (
                <div className="p-6 border-t border-caramel/15 bg-[#1A0C07] space-y-4">
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-cream/70">
                      <span>Subtotal</span>
                      <span className="font-semibold text-cream">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-cream/70">
                      <span>Cold-Chain Express Delivery</span>
                      <span className="font-semibold text-cream">
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                      </span>
                    </div>
                    {deliveryFee > 0 && (
                      <div className="text-[10px] text-caramel/80">
                        Add ₹{150 - subtotal} more for FREE frozen delivery
                      </div>
                    )}
                    <div className="pt-2 border-t border-caramel/15 flex justify-between text-sm font-black text-cream">
                      <span>Total Amount</span>
                      <span className="text-caramel">₹{grandTotal}</span>
                    </div>
                  </div>

                  <button
                    disabled={checkingOut}
                    onClick={handleCheckout}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-caramel via-[#D99B5E] to-caramel text-chocolate-darkest font-extrabold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(200,135,74,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {checkingOut ? (
                      <span>Securing Frozen Order...</span>
                    ) : (
                      <>
                        <span>Proceed to Pay • ₹{grandTotal}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-cream/50 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-caramel" />
                    <span>Guaranteed -18°C Frozen Arrival Guarantee</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
