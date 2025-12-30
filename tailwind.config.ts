import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Regarde dans le dossier app (racine)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Regarde dans le dossier components (racine)
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Au cas où
    "./src/**/*.{js,ts,jsx,tsx,mdx}"         // Au cas où vous auriez remis src
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;