/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      "main-purple": "#381187",
      "medium-gray": "#D4D4D4",
      "light-gray": "#D0DADE",
      "dark-gray": "#B4BBBF",
      "light-skyblue": "#E9F0F8",
      "medium-skyblue": "#0966C2",
      "morado-4": "#2A1D68",
      "morado-3": "#381187",
      "morado-2": "#7837DD",
      "morado-1": "#8F60EA",
      gris: "#B4BBBF",
      "gris-1": "#CAD5DA",
      "gris-2": "#EFF9FE",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
