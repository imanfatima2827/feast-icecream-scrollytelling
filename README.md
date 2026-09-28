# Feast — Premium Scrollytelling Confectionery Website

An Awwwards-worthy, interactive, scrollytelling single-page e-commerce website for **Feast** — the iconic chocolate-coated ice cream bar covered with crunchy roasted nuts, with a creamy chocolate ice cream center and wooden stick.

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and a high-performance **HTML5 Canvas** image sequence engine.

---

## 🍫 Key Visual Features

1. **Persistent Chocolate Image Background (`chocolate-bg.webp`)**
   - The entire scrollytelling experience is framed by the authentic dark chocolate studio lighting backdrop with subtle warm caramel glow and edge vignette blending.

2. **First Shot & Hero Headline Display on Load**
   - **Zero Blank Screen**: When the user opens the website, the **First Shot** of the Feast ice cream bar (`feast-hero.webp`) and the **Scene 1 text** (*"Feast Chocolate. Crunch into indulgence."*) are visibly and prominently displayed right away.

3. **Complete Scrollytelling Animation on Scroll**
   - As the user scrolls down, the first shot smoothly crossfades into the **HTML5 Canvas**, which plays the **complete 200-frame animation sequence** from start to finish:
     - Molten chocolate vortex swirl
     - Coating and enrobing the ice cream bar
     - Roasted nut crunch adhering to the shell
     - Ice cream bar rising into the spotlight with "FEAST" etched into the wooden stick
     - 3D camera push-in with floating chocolate shards and roasted nuts
   - Scrolling back to the top seamlessly returns to the pristine first shot.

4. **Editorial Typography & Transform Overlays (`ProductTextOverlays.tsx`)**
   - **Scene 1**: *Feast Chocolate. Crunch into indulgence.*
   - **Scene 2**: *A shell made to crack. A thick, rich chocolate coating packed with crunchy roasted nut pieces...*
   - **Scene 3**: *Creamy chocolate at the center. Break through the crunchy shell and discover a smooth, velvety chocolate ice cream center.*
   - **Scene 4**: *Every bite. A little celebration. Crunchy outside. Creamy inside. Completely indulgent.*
   - Dynamically animated using `useTransform` controlling opacity, vertical movement, scale, and lens blur without obstructing the product hero.

5. **Architectural Product Anatomy (`ProductDetailsSection.tsx`)**
   - Close-up texture macro photography.
   - Detailed breakdown of the **3.2mm tempered chocolate shell**, **double-roasted nut crust**, and **slow-churned chocolate ice cream core**.
   - Confectionery freshness guarantee note.

6. **The Sensory Trilogy (`IngredientTextureSection.tsx`)**
   - Dedicated hero dimension cards for **CRUNCH**, **CHOCOLATE**, and **CREAM**.
   - Crunch index, temper metrics, and churn profiles.

7. **Luxury E-Commerce Purchase Suite (`BuyNowSection.tsx` & `CartDrawer.tsx`)**
   - Price display: **₹40** per bar.
   - Pack selection: *Solo Indulgence (1 bar)*, *Crunch Pack (4 bars)*, *Party Feast (10 bars)*.
   - Interactive quantity stepper and real-time total calculator.
   - Integrated slide-over Cart Drawer with subtotal, cold-chain express delivery calculations, and instant checkout simulation.
   - Guaranteed -18°C frozen cold-chain arrival promise.

8. **Cinematic Next Flavor CTA (`NextFlavorSection.tsx`)**
   - Slanted-edge luxury button triggering product switching.
   - Seamless flavor transition via `AnimatePresence mode="wait"`.

9. **Multi-Flavor Navigation**
   - Desktop fixed left & right navigation buttons with hover tooltips.
   - Bottom-center glass pill menu for instant flavor switching.

10. **Atmospheric Tactile Aesthetics**
   - Floating chocolate shards, nut flakes, and golden amber embers (`FloatingParticles.tsx`).
   - Deep chocolate `#2B1209`, milk chocolate `#6D3B25`, caramel `#C8874A`, and cream `#F3E2C7` palette.
   - Custom chocolate/caramel text selection and scrollbars.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Static Build
```bash
npm run build
```
The optimized production export will be generated into the `out/` directory.

### 4. Preview Static Export Locally
```bash
npm run serve
```
Open [http://localhost:3000](http://localhost:3000) to preview the static export.

### 5. Deploy to Netlify Drop
Simply drag and drop the generated `out/` folder directly onto [Netlify Drop](https://app.netlify.com/drop).
