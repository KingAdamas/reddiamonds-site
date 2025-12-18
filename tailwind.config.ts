import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "rd-black": "#000000",
        "rd-gray": "#241d20",
        "rd-red": "#d13027",
        "rd-red-dark": "#97261f",
        "rd-gold": "#edc970",
        "rd-gold-dark": "#cea770",
      },
    },
  },
  plugins: [],
};

export default config;
