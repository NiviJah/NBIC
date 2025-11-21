/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C5282', // Deep Coastal Blue
        secondary: '#8BB397', // Sage Green
        accent: '#D99A6C', // Muted Terracotta
        background: '#F7F9FC', // Off-White
        text: '#2D3748', // Dark Charcoal
      },
      fontFamily: {
        sans: ['Open Sans', 'Lato', 'sans-serif'],
        heading: ['Montserrat', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
