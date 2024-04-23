import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        foreground: "rgb(var(--foreground-rgb))",
        background: "rgb(var(--background-end-rgb))",
      },
      keyframes: {
        show: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        show: "show 1s 2s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
