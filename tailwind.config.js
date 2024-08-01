/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      screens: {
        'xs': '460px',
      },
      colors: {
        white: '#ffffff',
        cream: '#F2EAE2',
        'aurometal-saurus': '#6C7289',
        'deep-aquamarine': {
          default: '#3D8168',
          hover: '#1A4032'
        },
        gunmetal: '#1C232B'
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}