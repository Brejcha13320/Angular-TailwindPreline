/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "node_modules/preline/dist/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          // Define tus colores oscuros
          background: "#1a202c",
          text: "#cbd5e0",
        },
      },
    },
  },
  plugins: [require("preline/plugin")],
};
