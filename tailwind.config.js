/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spectacleBlue: "#0d66a7",
        spectacleDarkBlue: "#011b39",
        islandGreen: "#2bae66ff",
      },
    },

  },
  plugins: [],
}