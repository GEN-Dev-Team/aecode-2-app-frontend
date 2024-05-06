/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      "main-purple": "#381187",
      "medium-gray": "#D4D4D4",
      "light-gray": "#EEEEEE",
      "medium-gray": "#eef3f8",
      "dark-gray": "#B4BBBF",
      "light-skyblue": "#E9F0F8",
      "medium-skyblue": "#0966C2",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
