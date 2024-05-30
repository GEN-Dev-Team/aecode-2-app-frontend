/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

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
      "morado-claro": "#EAE0FF",
      gris: "#B4BBBF",
      "gris-1": "#CAD5DA",
      "gris-2": "#EEF3F8",
      "celeste-1": "#33A3DC",
      "celeste-2": "#2484C6",
      "celeste-3": "#0066A6",
      "naranja-1": "#E4A025",
      "naranja-2": "#CE7B2D",
      "naranja-3": "#7A3717",
      "verde-1": "#BED747",
      "verde-2": "#8BC751",
      "verde-3": "#3D813F",
      "verde-4": "#115E32",
      "azul-1": "#3659C9",
      "azul-2": "#203AA5",
      "azul-3": "#14257C",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), animations],
};
