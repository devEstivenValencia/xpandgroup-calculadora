/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#D3FE59",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
