/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        animation:{
          slide: 'slide 1s ease-in-out 1 forwards'
        },
        keyframes:{
          slide:{
            '0%' : {transform:'scale(0)'},
            '100%' : {transform: 'scale(1)'}
          }
        },
      },
    },
    plugins: [],
  }