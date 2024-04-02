/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
       boxShadow:{
        '0xl': '0 0 8px -3px rgba(0,0,0,1)'
       }
      },
    },
    plugins: [],
  }