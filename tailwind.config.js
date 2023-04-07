/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fill: (theme) => ({
        red: theme('colors.red.primary'),
      }),
      colors: {
        'blue-gem': {
          50: '#f2f2ff',
          100: '#e8e7ff',
          200: '#d3d2ff',
          300: '#b2aeff',
          400: '#8c81ff',
          500: '#664dff',
          600: '#5329fe',
          700: '#4517ea',
          800: '#3913c4',
          900: '#2f119a',
        },
      },
      fontFamily: {
        Public: ['"Public Sans"', 'sans-serif'],
      },
      boxShadow: {
        '005': '0 0 5px',
      },
      variants: {
        display: ['group-hover'],
      },
    },
  },
  plugins: [],
}
