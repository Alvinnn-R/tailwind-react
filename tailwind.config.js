/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      colors: {
        facebook: "#1877F2",
        twitter: "#1DA1F2",
        line: "#00C300",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        // display: ["Imperial Script"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

