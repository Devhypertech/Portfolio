import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% -30%, rgba(34,211,238,0.22), transparent 55%), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(167,139,250,0.18), transparent 50%), radial-gradient(ellipse 50% 40% at 0% 20%, rgba(34,211,238,0.08), transparent 45%)",
        "section-fade":
          "linear-gradient(180deg, rgba(11,11,15,0) 0%, rgba(11,11,15,0.85) 100%)",
      },
      keyframes: {
        "mesh-shift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(3%, -2%) scale(1.08)", opacity: "0.75" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        "mesh-shift": "mesh-shift 22s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      boxShadow: {
        card: "0 24px 80px -32px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06) inset",
        "glow-sm": "0 0 40px -12px rgba(34, 211, 238, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
