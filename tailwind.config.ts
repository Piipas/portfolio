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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#92d79a",
        secondary: "#101626",
        danger: "#f44a55",
        text: "#ffffff4d",
      },
      lineHeight: {
        sidebar: "1.16",
        title: "50px",
        button: "1.26",
      },
    },
    container: {
      center: true,
      padding: "1.75rem",
    },
  },
  plugins: [],
};
export default config;
