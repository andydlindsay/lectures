const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    popup: path.resolve('src/popup/index.js'),
    options: path.resolve('src/options/index.js'),
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: '[name]/[name].js',
    path: path.resolve('dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/static'),
          to: path.resolve('dist'),
        },
        {
          from: path.resolve('src/background'),
          to: path.resolve('dist/background'),
        },
      ]
    }),
    new HtmlWebpackPlugin({
      title: 'React Practice - Popup',
      filename: 'popup/popup.html',
      chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
      title: 'React Practice - Options Page',
      filename: 'options/options.html',
      chunks: ['options'],
    }),
  ]
};

module.exports = config;
