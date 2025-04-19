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
        brandColor: "#53c60b",
      },
      screens: {
        xs: "500px",
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
