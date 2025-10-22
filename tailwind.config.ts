import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* ---------------------------
       * 🎨 FONT FAMILIES
       * --------------------------- */
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      /* ---------------------------
       * 🌈 COLOR PALETTE
       * --------------------------- */
      colors: {
        // Base Theme
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Gold and Neutrals
        gold: "#d9b666", // Main gold (champagne gold)
        "gold-matte": "#cbb88d", // Softer gold for subtle accents
        "off-white": "#f4f4f4", // Used for light sections
        "charcoal": "#0e0e0e", // Background base
        "dark-gray": "#1a1a1a", // Secondary dark tone
        "warm-black": "#121212", // Rich black with warmth

        // Tailwind theme variable fallback
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      /* ---------------------------
       * 🟣 BORDER RADIUS
       * --------------------------- */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
      },

      /* ---------------------------
       * ✨ BOX SHADOWS & GLOWS
       * --------------------------- */
      boxShadow: {
        "gold-glow": "0 0 30px rgba(217, 182, 102, 0.4)",
        "soft-gold": "0 0 15px rgba(217, 182, 102, 0.25)",
        "white-glow": "0 0 20px rgba(255, 255, 255, 0.2)",
        "black-soft": "0 5px 20px rgba(0,0,0,0.3)",
      },

      /* ---------------------------
       * 🎞️ ANIMATIONS & KEYFRAMES
       * --------------------------- */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // Custom cinematic transitions
        "fade-up-slow": {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "fade-up-slow": "fade-up-slow 1.2s ease-out",
        "fade-in-slow": "fade-in-slow 1.5s ease-in",
        "float": "float 3s ease-in-out infinite",
      },

      /* ---------------------------
       * 🌅 BACKGROUND UTILITIES
       * --------------------------- */
      backgroundImage: {
        "gradient-gold": "linear-gradient(90deg, #d9b666, #cbb88d)",
        "gradient-dark": "linear-gradient(180deg, #0e0e0e, #1a1a1a)",
        "gradient-overlay":
          "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
