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
        primarygray: "#212121",
        accent: "#405cf5",
        background: "#141414",
        alice: "#f0f8ff",
        secondary: "#222224",
        text: "",
        subtext: "#343A40",
        button: "",
      },
      padding: {
        navpx: "40px",
        navpy: "20px",
      },
      backgroundImage: {
        "logo": "url('path/to/logo')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const glassStyles = {
        ".glass": {
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
          "backdrop-filter": "blur(10px)",
          "-webkit-backdrop-filter": "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          "box-shadow": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        },
      };

      addUtilities(glassStyles, ["responsive", "hover"]);
    },
  ],
};
