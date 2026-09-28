"use client";

import React, { useState } from "react";
import { ShoppingBag, Sparkles, Menu, X, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface NavbarProps {
  product: Product;
  cartCount: number;
  onOpenCart: () => void;
  onOrderNow: () => void;
}

export default function Navbar({
  product,
  cartCount,
  onOpenCart,
  onOrderNow,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "The Crunch", href: "#experience" },
    { label: "Textures", href: "#textures" },
    { label: "Craftsmanship", href: "#craftsmanship" },
    { label: "Order", href: "#order-section" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 py-3 bg-[#160805]/90 backdrop-blur-xl border-b border-caramel/20 shadow-[0_10px_30px_rgba(16,5,3,0.6)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Branding Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Feast Home"
            >
              {/* Stylized Chocolate Shard / Ice Cream Bite Icon */}
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-caramel via-[#6D3B25] to-[#2B1209] p-[1px] shadow-sm transition-transform duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-lg bg-[#160805] flex items-center justify-center relative overflow-hidden">
                  {/* Subtle inner crack highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-caramel/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-caramel transition-transform duration-300 group-hover:rotate-6"
                  >
                    {/* Abstract ice cream bar bite shape */}
                    <path
                      d="M6 3C6 1.89543 6.89543 1 8 1H13C16.866 1 20 4.13401 20 8C20 9.86384 19.2711 11.5583 18.0858 12.8126C18.6749 13.7844 19 14.8872 19 16C19 19.3137 16.3137 22 13 22H8C6.89543 22 6 21.1046 6 20V3Z"
                      fill="currentColor"
                      fillOpacity="0.25"
                    />
                    <path
                      d="M8 2H13C16.3137 2 19 4.68629 19 8C19 9.3 18.5 10.4 17.7 11.2C17.2 9.5 15.7 8.2 13.8 8.2C11.5 8.2 9.7 10 9.7 12.3C9.7 13.4 10.1 14.4 10.8 15.1C9.6 15.6 8.8 16.7 8.8 18V21H8C6.89543 21 6 20.1046 6 19V4C6 2.89543 6.89543 2 8 2Z"
                      fill="currentColor"
                    />
                    <rect x="10.5" y="19" width="3" height="4" rx="1" fill="#FAF3E8" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold tracking-[0.25em] text-xl sm:text-2xl text-cream group-hover:text-caramel-light transition-colors">
                  FEAST
                </span>
                <span className="text-[9px] uppercase tracking-[0.35em] text-caramel/80 -mt-1 font-medium hidden sm:block">
                  Confectionery Co.
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-xs uppercase tracking-[0.2em] font-medium text-cream/70 hover:text-caramel transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-caramel transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action Buttons: Cart & Order Now */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-full bg-[#2B1209]/80 border border-caramel/25 text-cream/90 hover:text-caramel hover:border-caramel transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label={`Open shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-caramel text-chocolate-darkest text-[10px] font-bold flex items-center justify-center shadow-md animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Order Now CTA */}
              <button
                onClick={onOrderNow}
                className="relative group overflow-hidden px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-caramel via-[#D99B5E] to-caramel text-chocolate-darkest font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(200,135,74,0.3)] hover:shadow-[0_0_30px_rgba(200,135,74,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-1.5 font-bold">
                  <span>Order Now</span>
                  <Sparkles className="w-3.5 h-3.5 text-chocolate-darkest transition-transform group-hover:rotate-12" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-cream hover:text-caramel focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A0C07]/95 backdrop-blur-2xl border-b border-caramel/20 px-6 py-6 transition-all duration-300">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm uppercase tracking-[0.2em] font-medium text-cream/90 hover:text-caramel transition-colors flex items-center justify-between py-2 border-b border-caramel/10"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-caramel/60" />
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between text-xs text-caramel/80">
                <span>Active: {product.name}</span>
                <span className="font-bold text-cream">{product.price}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
