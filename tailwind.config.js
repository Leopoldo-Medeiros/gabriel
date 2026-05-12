/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.tsx",
    "./components/*.tsx",
    "./constants.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C2331', // RGB(28, 35, 49)
        'primary-dark': '#0f1620', // Even Darker Navy Blue
        secondary: '#EDF6F9', // Very Light Blue/Grey background
        accent: '#E29578',   // Soft Terra Cotta/Orange - Restored
        dark: '#1C2331',      // RGB(28, 35, 49) for text
        light: '#F8FAFB',     // Off-white background
        muted: '#8D99AE',     // Muted Blue-Grey text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
