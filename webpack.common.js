const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const latestRelease = require("./latest-release.json");

module.exports = {
  entry: {
    index: './src/index.js',
    studio: './src/studio.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
        options: {
          inlineRequires: /\.(png|svg|jpg|jpeg|gif)$/,
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: 'src/index.hbs',
      latestRelease: latestRelease,
    }),
    new HtmlWebpackPlugin({
      chunks: ['studio'],
      template: 'src/studio.hbs',
      filename: 'studio/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
};
