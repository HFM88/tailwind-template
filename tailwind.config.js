/** @type {import('tailwindcss').Config} */
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
        primary: "#b72027",
        secondary: "#222224",
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
  plugins: [],
};
