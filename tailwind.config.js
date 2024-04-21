/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        arial7: ["Arial7", "sanse-serif"],
        modern: ["Modern", "sanse-serif"],
      },
      colors: {
        text: "#181411",
        background: "#fbf9f9",
        primary: "#65452f",
        secondary: "#d4a687",
        accent: "#c46f36",
        alice: "#f0f8ff",
        subtext: "#DEE2E6",
        button: "",
      },
      padding: {
        navpx: "40px",
        navpy: "20px",
      },
      backgroundImage: {
        sky: "url('../dist/images/sky.jpg')",
      },
    },
  },
  plugins: [require("./tw-plugins/component-loader/index.js")],
};
