import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        "on-primary": "#ffffff",
        "primary-container": "#ffdbca",
        secondary: "#2d3133",
        "on-secondary": "#ffffff",
        tertiary: "#006398",
        "tertiary-container": "#00a2f4",
        surface: "#f7f9fb",
        "on-surface": "#191c1e",
        "on-surface-variant": "#44474e",
        "surface-container": "#eceef0",
        "surface-container-low": "#f2f4f6",
        "surface-container-lowest": "#ffffff",
        "secondary-fixed-dim": "#bec6e0",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;