import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: "#2F3A3F",
        steel2: "#4B5A64",
        paper: "#FFFFFF",
        cloud: "#F2F4F5",
        ink: "#101418",
        muted: "#5C6972",
      },
    },
  },
  plugins: [],
} satisfies Config;
