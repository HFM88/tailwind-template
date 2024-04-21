/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content:  [
    "./views/**/*.ejs",
  ],

  theme: {
    extend: {
      fontFamily: {
        "shadows-light": ["Shadows Into Light", "cursive"],
        baloo: ["Baloo-2", "cursive"],
        roboto: ["Roboto", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "",
        secondary: "",
        text: "",
        subtext: "#343A40",
        button: "",
      },
      padding: {
        navpx: "40px",
        navpy: "20px",
      },
    },
  },

  plugins: [
    require('./tw-plugins/component-loader/index.js'),
  ],

};
