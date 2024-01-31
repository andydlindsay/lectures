const path = require('path');

const config = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  }
};

module.exports = config;
