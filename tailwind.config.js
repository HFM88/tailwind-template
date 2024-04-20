/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const componentPlugin = require("./tailwind-plugins/componentPlugin");



const buttonModuleExports = {
  primary: {
    base: "text-alice py-3 px-5 bg-accent rounded-sm",
    hover: "bg-blue-600",
  },
  customHeading: {
    base: "text-alice font-bold text-3xl bg-black mx-8 flex justify-center items-center",
  },
};

const textModuleExports = {
  customHeading: {
    base: "text-alice font-bold text-3xl bg-blue-300 mx-8 flex justify-center items-center",
  },
};

const modules = {
  button: buttonModuleExports,
  text: textModuleExports,
};


module.exports = {
  content: [
    "./src/**/*.{html,js}",
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
  plugins: [
    componentPlugin,
  ],
};
