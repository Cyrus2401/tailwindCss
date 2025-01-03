/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  tailwindcss: {},
  autoprefixer: {},
  theme: { 
    extend : {
      colors : {
        primary : {
          100 : "#F55FFF", 
          200 : "#aa0b0b"
        }
      }
    }
  }
}