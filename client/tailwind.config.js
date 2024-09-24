/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: '#003366',
        teal: '#008080',
        coral: '#FF6F61',
        lightGray: '#F5F5F5',
        charcoal: '#333333',
        offWhite: '#F0F0F0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Roboto', 'serif'],
      },animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 4s infinite',
      }
    },
  },
  plugins: [],
}
