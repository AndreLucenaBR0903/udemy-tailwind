/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        product: {
          primary: "#8284FA",
          primaryDark: "#5E60CE",
          secondary: "#4EA8DE",
          secondaryDark: "#1E6F9F",
          danger: "#E25858",
        },
        base: {
          gray700: "#0D0D0D",
          gray600: "#1A1A1A",
          gray500: "#262626",
          gray400: "#333333",
          gray300: "#808080",
          gray200: "#D9D9D9",
          gray100: "#F2F2F2",
        },
      },
      maxWidth: {
        app: "736px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
