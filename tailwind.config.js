/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      animation:{
           "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes:{
        "loop-scroll": {
          from:{
            transform:"translateX(0)"
          },
          to:{
            transform:"translateX(-100%)"
          }
        },

      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'20px',
        md:'50px'
      }
    }
  },
  plugins: [],
}




/*
const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function({ addUtilities }){
  addUtilities ({
      '.rotate-y-180': {
        transform:"rotateY(180deg)"
      },
      '.-rotate-y-180': {
        transform:"rotateY(-180deg)"
      }
    })
})

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      animation:{
           "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes:{
        "loop-scroll": {
          from:{
            transform:"translateX(0)"
          },
          to:{
            transform:"translateX(-100%)"
          }
        },

      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'20px',
        md:'50px'
      }
    }
  },
  plugins: [rotateY],
}


*/