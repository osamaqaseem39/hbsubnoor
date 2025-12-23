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
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          hero: "var(--bg-hero)",
          "hero-gradient": "var(--bg-hero-gradient)",
          cta: "var(--bg-cta)",
          accent: "var(--bg-accent)",
          "accent-hover": "var(--bg-accent-hover)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          "on-accent": "var(--text-on-accent)",
          heading: "var(--text-heading)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          accent: "var(--border-accent)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
        },
      },
    },
  },
  plugins: [],
};

export default config;

