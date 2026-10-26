import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        urban: {
          midnight: "#22223B",
          slate: "#4A4E69",
          blush: "#C9ADA7",
          ivory: "#F2E9E4"
        }
      },
      fontFamily: {
        body: ["DM Sans", "Segoe UI", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      }
    }
  },
  plugins: []
} satisfies Config;
