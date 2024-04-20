const plugin = require("tailwindcss/plugin");

const modules = {
  button: {
    primary: {
      base: "text-alice py-3 px-5 bg-accent rounded-sm",
      hover: "bg-blue-600",
    },
    customHeading: {
      base: "text-alice font-bold text-3xl bg-black mx-8 flex justify-center items-center",
    },
  },
  text: {
    customHeading: {
      base: "text-alice font-bold text-3xl bg-blue-300 mx-8 flex justify-center items-center",
    },
  },
};

module.exports = plugin(({ addComponents }) => {
  for (let moduleName in modules) {
    const module = modules[moduleName];
    addComponents(
      Object.fromEntries(
        Object.entries(module).flatMap(([className, styles]) =>
          Object.entries(styles).map(([variant, apply]) => {
            let selector = `.${className}`;
            if (variant === "hover") {
              selector += ":hover";
            }
            return [selector, { [`@apply ${apply}`]: {} }];
          })
        )
      ),
      {}
    );
  }
});
