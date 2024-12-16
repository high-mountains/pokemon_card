import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'sp': '426px',
      // => @media (min-width: 426px) { ... }
      'tablet': '768px',
      // => @media (min-width: 769px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1025px) { ... }
      'desktop': '1440px',
      // => @media (min-width: 1441px) { ... }
    }
  },
  plugins: [],
} satisfies Config;
