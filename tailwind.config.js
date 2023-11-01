/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'circle': 'url(../assests/circle-2.svg)'
      },
      fontFamily: {
        display: "Sora, sans-serif"
      }
    },
  },
  plugins: [],
}

