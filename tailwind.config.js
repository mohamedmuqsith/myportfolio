/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Sky 500
        secondary: "#14b8a6", // Teal 500
        dark: "#0b1120", // Deep navy
        "dark-light": "#1e293b", // Slate 800
        accent: "#f472b6", // Pink 400
      },
      fontFamily: {
        'hero-font': ['Bebas Neue', 'sans-serif'],
        'body-font': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

