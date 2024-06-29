/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'normalText': '#fff',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}