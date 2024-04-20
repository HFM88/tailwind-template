

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "shadows-light": ["Shadows Into Light", "cursive"],
        baloo: ["Baloo-2", "cursive"],
        roboto: ["Roboto", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryblack: "#1b1b1b",
        secondaryblack: "#212121",
        accent: "#405cf5",
        background: "#141414",
        alice: "#f0f8ff",
        secondary: "#222224",
        text: "",
        subtext: "#DEE2E6",
        button: "",
      },
      padding: {
        navpx: "40px",
        navpy: "20px",
      },
      backgroundImage: {
        logo: "url('path/to/logo')",
      },
    },
  },
  plugins: [],
};
