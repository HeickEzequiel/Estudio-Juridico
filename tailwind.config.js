/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}",
    "./index.html"
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
        '75%':'75%'
      },
      screens:{
        'xs':'320px',
      },
    },
    
  },
  variants:{
    borderwidth: ['responsive', 'hover', 'focus']
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

