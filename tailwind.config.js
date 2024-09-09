/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      colors:{
        dark: '#323536',
        olive: '#6B7254',
        green: '#E6E9D6',
        light: '#F3F6EF',
        terracota: '#DE6F57',
        grey: '#DFDAD4'
      }
    },
  },
  plugins: [],
}

