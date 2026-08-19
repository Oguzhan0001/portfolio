import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        serif: ["'Libre Caslon Text'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        jakarta: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
