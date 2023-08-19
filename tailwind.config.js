/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*.ejs", "./hx/**/*.ejs"],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto']
      }
    },
  },
  plugins: [],
}

