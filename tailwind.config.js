/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#dadada",
        white: "#fffff",
        black: "#141516",
        pink: "#e31b6d",
        blue: "#17a2b8",
      },
      borderColor(theme) {
        gray: {
          DEFAULT: theme("colors.gray")
        }
      },
    },
  },
  plugins: [],
}
