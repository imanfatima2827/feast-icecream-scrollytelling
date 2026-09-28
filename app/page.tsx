"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products as allProducts, Product } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductIceCreamScroll from "@/components/ProductIceCreamScroll";
import ProductDetailsSection from "@/components/ProductDetailsSection";
import IngredientTextureSection from "@/components/IngredientTextureSection";
import BuyNowSection from "@/components/BuyNowSection";
import CartDrawer, { CartItem } from "@/components/CartDrawer";
import FloatingParticles from "@/components/FloatingParticles";

// Only ONE flavor is shown on the site. To show a different one, change this id
// ("feast", "feast-dark-hazelnut" or "feast-salted-caramel").
const ACTIVE_PRODUCT_ID = "feast-salted-caramel";
const products: Product[] = allProducts.filter((p) => p.id === ACTIVE_PRODUCT_ID);

export default function Home() {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "feast-init",
      name: products[0].name,
      price: parseInt(products[0].price.replace(/[^0-9]/g, "")) || 40,
      quantity: 2,
      packType: "Solo Indulgence",
    },
  ]);

  const currentProduct: Product = products[0];

  const scrollToOrder = () => {
    const el = document.getElementById("order-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToCart = (quantity: number, packType: string) => {
    const priceNum = parseInt(currentProduct.price.replace(/[^0-9]/g, "")) || 40;
    const existingIndex = cartItems.findIndex(
      (item) => item.name === currentProduct.name && item.packType === packType
    );

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      setCartItems(updated);
    } else {
      setCartItems([
        ...cartItems,
        {
          id: `${currentProduct.id}-${packType}-${Date.now()}`,
          name: currentProduct.name,
          price: priceNum,
          quantity: quantity,
          packType: packType,
        },
      ]);
    }
  };

  const handleInstantBuy = (quantity: number, packType: string) => {
    handleAddToCart(quantity, packType);
    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="min-h-screen bg-[#160805] text-cream relative selection:bg-caramel selection:text-chocolate-darkest">
      {/* Background Floating Chocolate & Roasted Nut Particles */}
      <FloatingParticles />

      {/* Global Luxury Navigation Bar */}
      <Navbar
        product={currentProduct}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOrderNow={scrollToOrder}
      />

      {/* Product Experience with AnimatePresence for Smooth Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* 1. Hero / Scrollytelling Product Canvas Animation */}
          <ProductIceCreamScroll
            product={currentProduct}
            frameCount={200}
          />

          {/* 2. Product Details: Chocolate Coating, Roasted Nut Crunch, Creamy Center & Story */}
          <ProductDetailsSection product={currentProduct} />

          {/* 3. Ingredient & Texture Section: CRUNCH, CHOCOLATE, CREAM */}
          <IngredientTextureSection />

          {/* 4. Buy Now Section: ₹40, Quantity, Add to Cart, Frozen Delivery Promise */}
          <BuyNowSection
            product={currentProduct}
            onAddToCart={handleAddToCart}
            onInstantBuy={handleInstantBuy}
          />

        </motion.div>
      </AnimatePresence>

      {/* Fixed Bottom-Center Pill Menu Showing Available Feast Flavors */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[92vw]">
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#1A0C07]/85 border border-caramel/30 backdrop-blur-2xl shadow-[0_10px_35px_rgba(16,5,3,0.9)]">
          {products.map((p) => (
            <div
              key={p.id}
              className="px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 whitespace-nowrap bg-caramel text-chocolate-darkest shadow-[0_0_15px_rgba(200,135,74,0.5)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-chocolate-darkest" />
              <span className="truncate max-w-[160px] sm:max-w-none">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      {/* Luxury Chocolate Confectionery Footer */}
      <Footer />
    </main>
  );
}
