/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          100: "#dddddd",
          500: "#535353",
        },
      },
      fontFamily: {
        sans: ["Lexend", "ui-sans-serif", "system-ui"],
        brittany: ["Brittany", "cursive"],
      },
    },
  },
  plugins: [],
};
