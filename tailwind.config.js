module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ["Raleway", "sans-serif"],
      secondary: ["Playfair Display", "serif"],
    },
    colors: {
      grey: "#e7e7e5",
      green: {
        default: "#b7bda1",
        dark: "#6d7c43",
      },
      black: {
        default: "#212121",
        dark: "#000000",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
