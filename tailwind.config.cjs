/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': {
        200: '#6360AB',
        100: "#444278"
      },
      'white': {
        200: '#ffff',
        100: '#DCDCE4'
      },
      'black': {
        200: '#000000'
      },
      'red': {
        800: '#FF0000',
        700: '#ED0000',
        600: '#DB0000',
        500: '#FF0000'
      }
    },
  },
  plugins: [require("daisyui")],
}
