/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}",
    "./index.html",
    "./node_modules/tw-elements/js/**/*.js"
  ],

  theme: {
    
    extend: {
      backgroundImage:{
        'imagen': "url('https://res.cloudinary.com/damoqjwmk/image/upload/v1719593614/Estudio%20Juridico/fondo.jpg')"
      },
      fontFamily:{
        cursiva:["Dancing Script"]
      },

      colors:{
        'pasto':'#a4b284',
        'transparent': 'transparent',
        'current': 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'black':'#000000',
        'naranja':'#E6843D'
      },
      spacing:{
        '95%':'95%',
        '90%':'90%',
        '85%':'85%',
        '80%':'80%',
        '75%':'75%',
        '70%':'70%',
        '65%':'65%',
        '60%':'60%',
        '55%':'55%',
        '50%':'50%',
        '45%':'45%',
        '40%':'40%',
        '35%':'35%',
        '30%':'30%',
        '25%':'25%',
        '20%':'20%',
        '15%':'15%',
        '10%':'10%',
        '5%':'5%'
      },
      screens:{
        'xs':'320px',
      },
      transitionDuration:{
        '2000':'2000ms'
        
      }
    },
    
  },
  variants:{
    borderwidth: ['responsive', 'hover', 'focus']
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-intersect'),
    require("tw-elements/plugin.cjs"),


  ],

  darkMode:"class"

}

