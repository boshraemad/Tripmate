/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sunset: "#FF6500",
        peach: "#FEB47B",
        turquoise: "#4ECDC4",
        darkturquoise:"#006E7F",
        darkslate: "#0B192C", 
      },
    },
  },
  plugins: [],
}

