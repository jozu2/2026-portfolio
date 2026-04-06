import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-clash)", "sans-serif"],
      },
      colors: {
        accent: "rgb(var(--accent) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accentPink: "#ff6eb4",
        accentOrange: "#ffb347",
        dark: {
          bg: "#0d0d0f",
          surface: "#131316",
          border: "#1e1e24",
          muted: "#2a2a35",
        },
        light: {
          bg: "#f5f0eb",
          surface: "#ffffff",
          border: "#e2ddd8",
          muted: "#c8c0b8",
        },
      },
      boxShadow: {
        accent: "0 0 15px rgb(var(--accent) / 0.6)",
        secondary: "0 0 15px rgb(var(--secondary) / 0.6)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(100, 255, 218, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
