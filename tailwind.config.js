/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:   '#8E1EA2',
        secondary: '#C654C3',
        soft:      '#ED96D7',
        blush:     '#FFC0DE',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans:  ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
