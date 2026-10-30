import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10131A",
        muted: "#697386",
        lime: "#C8F169",
        paper: "#F7F8F5",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 19, 26, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;