module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ["Mulish", "sans-serif"],
      },
      colors: {
        lightBlue: "#0277DD",
        orange: "#D94317",
        darkBlue: "#111631",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
