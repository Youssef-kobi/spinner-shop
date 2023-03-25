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
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
        cart: 'transition: left .5s cubic-bezier(0.820, 0.085, 0.395, 0.895);',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
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
