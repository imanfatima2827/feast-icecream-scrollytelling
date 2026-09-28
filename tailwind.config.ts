import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#160805",
        foreground: "#FAF3E8",
        chocolate: {
          darkest: "#100503",
          dark: "#160805",
          footer: "#1A0C07",
          deep: "#2B1209",
          rich: "#3E1B0E",
          milk: "#6D3B25",
          light: "#8B4C30",
          warm: "#A55B39",
        },
        caramel: {
          dark: "#8C4F1E",
          DEFAULT: "#C8874A",
          light: "#D99B5E",
          glow: "#E5AB72",
        },
        cream: {
          light: "#FFF8F0",
          DEFAULT: "#FAF3E8",
          warm: "#F3E2C7",
          gold: "#EBD3B0",
          muted: "#B8A392",
        },
        nut: {
          amber: "#B46E28",
          roasted: "#8F4E18",
          hazel: "#65340C",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'chocolate-glow': 'radial-gradient(circle at 50% 50%, rgba(200, 135, 74, 0.15), transparent 70%)',
        'hero-vignette': 'radial-gradient(circle at center, transparent 30%, #160805 100%)',
      },
      boxShadow: {
        'chocolate-sm': '0 4px 20px -2px rgba(43, 18, 9, 0.5)',
        'chocolate-lg': '0 20px 40px -10px rgba(16, 5, 3, 0.8)',
        'caramel-glow': '0 0 30px rgba(200, 135, 74, 0.35)',
        'caramel-glow-lg': '0 0 60px rgba(200, 135, 74, 0.55)',
        'inner-dark': 'inset 0 2px 10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'rotate-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
