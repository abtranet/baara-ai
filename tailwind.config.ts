import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f1",
          100: "#d7ecdd",
          200: "#b0d9bd",
          300: "#7fc096",
          400: "#4da26e",
          500: "#2c8652",
          600: "#1f6b41",
          700: "#1a5636",
          800: "#16452d",
          900: "#0e3523",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
