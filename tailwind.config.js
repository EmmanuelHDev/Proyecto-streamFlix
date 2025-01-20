/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        FondoPrincipa: '#222'
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 2s ease-in-out infinite',
      },
      backgroundImage:{
        menu : 'url(/public/asset/svg/menu.svg)',
        home: 'url(/public/asset/svg/home.svg)',
        buscar: 'url(/public/asset/svg/buscar.svg)',
        fav: 'url(/public/asset/svg/fav.svg)',
        cuenta: 'url(/public/asset/svg/cuenta.svg)',
      }
    },
  },
  plugins: [],
}

