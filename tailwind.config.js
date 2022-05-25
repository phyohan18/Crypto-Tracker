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
          primary: "#66CC8A",
          "primary-focus": "mediumblue",
        },
    },
    {
      emerald: {
        ...require("daisyui/src/colors/themes")["[data-theme=emerald]"],
        primary: "#82DBD8",
        "primary-focus": "mediumblue",
      }
    }],
  },
}
