/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan["700"],
      },
      animation: {
        grow: "grow 1s ease-out",
      },
      keyframes: {
        grow: {
          from: {
            transform: "scaleY(0)",
            "transform-origin": "bottom",
          },
          to: {
            transform: "scaleY(100%)",
            "transform-origin": "bottom",
          },
        },
      },
    },
  },
  plugins: [],
};
