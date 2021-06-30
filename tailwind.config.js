const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.hbs',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'title2': ['5.5rem', 0.8],
        'title1': ['4.8rem', 0.8],
        'screen': ['18vw', 0.8]
      },
      screens: {
        '3xl': '1800px'
      },
      inset: {
        '-1.4': '-0.3125rem',
      },
      height: {
        'screen': 'calc(100vh - 6rem)',
        'fixed': '800px'
      },
      gridTemplateColumns: {
        '0.5': '1fr 0.5fr 1fr',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#434343',
    }),
    fontFamily: {
      'display': ['Raleway Bold', ...defaultTheme.fontFamily.sans],
      'menu': ['Raleway Regular', ...defaultTheme.fontFamily.sans],
      'body': ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
