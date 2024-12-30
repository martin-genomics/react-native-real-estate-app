/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ["Rubik", "sans-serif"],
        "rubik-bold": ["RubikBold", "sans-serif"],
        "rubik-light": ["RubikLight", "sans-serif"],
        "rubik-medium": ["RubikMedium", "sans-serif"],
        "rubik-extra-bold": ["RubikExtraBold", "sans-serif"],
        "rubik-semi-bold": ["RubikSemiBold", "sans-serif"],
      },
      colors: {
        "primary": {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF2A",
          400: "#0061FF3A",
          500: "#0061FF4A",
          600: "#0061FF5A",
          700: "#0061FF6A",
          800: "#0061FF7A",
          900: "#0061FF8A",
          1000: "#0061FFAA",
          1100: "#0061FFBA",
          1200: "#0061FFCA",
          1300: "#0061FFDA",
          1400: "#0061FFEA",
          1500: "#0061FFFA",
          DEFAULT: "#0061FF",
        },
        "accent": {
          100: "#FBFBFD"
        },
        "black": {
          DEFAULT: "#000000",
          100: "#8C8E98",
          200: "#666876"

        },
        "danger": "F75555"
      },
    },
  },
  plugins: [],
}