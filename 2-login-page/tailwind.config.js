/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4C70FF",
        secondary: "#E2F0FF",
        tertiary: "#ECF2F7",
        cta: {
          primary: "#292731",
          secondary: "#455360",
          tertiary: "#66BCE8",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
