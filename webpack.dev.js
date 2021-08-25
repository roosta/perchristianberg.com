const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    open: {
      app: ['google-chrome-unstable', '--force-device-scale-factor=1']
    },
  },
});
// devServer: {
//     static: {
//       directory: path.resolve(__dirname, "dist")
//     },
//     host: '0.0.0.0',
//     open: {
//       app: {
//         name: "google-chrome-unstable",
//         arguments: ["--force-device-scale-factor=1"]
//       }
//     },
//   }
