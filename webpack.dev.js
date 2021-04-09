const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: {
      app: ['google-chrome-unstable', '--force-device-scale-factor=1']
    },
  },
});
