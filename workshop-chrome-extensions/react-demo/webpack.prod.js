const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
});

module.exports = config;
