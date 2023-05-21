/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'white-600': '#fcfcfc',
        'black-100': '#bbbbbb',
        'black-300': '#9195a1',
        'black-400': '#2C2E33',
        'primary-purple': '#3b3c98',
        'secondary-orange': '#f79761',

        'primary-purple-100': "rgba(59, 60, 152, 0.1)"
      },
    },
  },
  plugins: [],
}
