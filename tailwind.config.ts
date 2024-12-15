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
      // => @media (min-width: 425px) { ... }
      'tablet': '769px',
      // => @media (min-width: 425px) { ... }
      'laptop': '1025px',
      // => @media (min-width: 425px) { ... }
      'desktop': '1441px',
      // => @media (min-width: 425px) { ... }
    }
  },
  plugins: [],
} satisfies Config;
