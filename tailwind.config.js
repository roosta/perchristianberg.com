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
      })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
