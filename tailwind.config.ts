import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black/Yellow (Lime) theme colors
        bg: "#0a0a0a",       // pure black background
        surface: "#1a1a1a",  // card/section surface
        primary: {
          DEFAULT: "#c4f82a", // lime green for buttons/links
          600: "#a8d624",     // hover lime
          foreground: "#0a0a0a",
        },
        accent: {
          DEFAULT: "#c4f82a",   // lime accent for tags/badges
          foreground: "#0a0a0a",
        },
        text: "#ffffff",     // primary text - white
        muted: {
          DEFAULT: "#a1a1a1",    // secondary text - gray
          foreground: "#a1a1a1",
        },
        border: "#2a2a2a",   // borders
        // Legacy mappings for compatibility
        dark: {
          DEFAULT: "#0a0a0a",
          lighter: "#1a1a1a",
          card: "#1a1a1a",
        },
        lime: {
          DEFAULT: "#c4f82a",
          light: "#d4ff4a",
          dark: "#a8d624",
        },
        // Other colors
        cream: "#f8f5ed",
        mint: "#93DECE",
        navy: "#0a0a0a",
        input: "#2a2a2a",
        ring: "#c4f82a",
        background: "#0a0a0a",
        foreground: "#ffffff",
        secondary: {
          DEFAULT: "#1a1a1a",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "#1a1a1a",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#1a1a1a",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
