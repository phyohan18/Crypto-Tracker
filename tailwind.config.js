module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
