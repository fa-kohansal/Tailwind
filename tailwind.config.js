/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      bgImage:{
        'parallax':"url('/src/img/parallax.jpg')"
      }
    },
  },
  plugins: [],
}

