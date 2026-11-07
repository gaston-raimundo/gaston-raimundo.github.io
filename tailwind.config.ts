import type { Config } from "tailwindcss";

// Tokens de marca: espejo de ../marca/brand.css (fuente de verdad: specs/fase-01 §1.5).
// Contraste: botón accent con texto ink; texto naranja sobre claro en accent-ink.
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0F1F3D", 2: "#13284D", line: "#24406E" },
        accent: { DEFAULT: "#E87722", ink: "#B4560F", soft: "#FDBA74" },
        steel: "#334155",
        muted: "#475569",
        onink: "#CBD5E1",
        line: "#E2E8F0",
        paper: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Cascadia Mono", "monospace"],
      },
      maxWidth: { site: "1200px" },
      borderRadius: { card: "14px", panel: "18px" },
    },
  },
  plugins: [],
};

export default config;
