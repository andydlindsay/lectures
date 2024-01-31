const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    popup: path.resolve('src/popup/popup.js'),
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/manifest.json'),
          to: path.resolve('dist'),
        },
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'React Practice',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
  ]
};

module.exports = config;
