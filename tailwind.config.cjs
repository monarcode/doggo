const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#201E1F",
        light: "#FEEFDD",
        accent: "#FF4000",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Mont", ...defaultTheme.fontFamily.sans],
        serif: ["PP-Hatton", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
