/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '426px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#14B8A6",
          "primary-focus": "mediumblue",
          "base-100": "#111827"
        },
    },
    {
      emerald: {
        ...require("daisyui/src/colors/themes")["[data-theme=emerald]"],
        primary: "#14B8A6",
        "primary-focus": "mediumblue",
      }
    }],
  },
}