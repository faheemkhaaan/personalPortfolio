/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
       boxShadow:{
        '0xl': '0 0 8px -3px rgba(0,0,0,1)'
       },

       keyframes:{
        'slide' : {
          '0%' : {
            transform: 'translateY(200px)',
            opacity: '0'
          },
          '100%' :{
            transform: 'translateY(0px)',
            opacity: '1'
          }
        },
        'slideImg' : {
          '0%' : {
            transform: 'translateX(200px)',
            opacity: '0'
          },
          '100%' :{
            transform: 'translateX(0px)',
            opacity: '1'
          },
        'fadeIn' : {
          '0%' : {
            opacity: '0'
          },
          '100%' :{
            opacity: '1'
          },
        }
       },

       animation : {
        slide: 'slide 1s ease-in-out forwards',
        slideImg: 'slideImg 1s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease-in-out .1s 1 forwards'
       }
      

      },
    },
    plugins: [],
  }
}