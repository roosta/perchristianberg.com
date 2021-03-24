module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#434343',
    }),
    fontFamily: {
      'display': ['Raleway Bold', 'sans-serif'],
      'menu': ['Raleway Regular', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
