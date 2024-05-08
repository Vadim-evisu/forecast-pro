/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html', './src/**/*.{js,ts,jsx,tsx}' ],
  darkMode: [ 'class' ],
  theme: {
    screens: {
      'sm': '40rem',
      'desktop': '80rem',
    },
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      'primary': 'hsla(var(--color-primary))',
      'white': 'hsla(var(--color-white))',
      'black': 'hsla(var(--color-black))',
      'gray': 'hsla(var(--color-gray))',
    },
    fontFamily: {
      'montserrat': [ 'var(--font-montserrat)' ]
    },
    extend: {},
  },
  plugins: [],
};
