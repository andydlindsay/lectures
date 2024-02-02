const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getHtmlPlugins = (chunks) => {
  return chunks.map(chunk => (
    new HtmlWebpackPlugin({
      title: `React Practice - ${chunk}`,
      filename: `${chunk}/${chunk}.html`,
      chunks: [chunk],
    })
  ));
};

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
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        }
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
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
        {
          from: path.resolve('src/contentScript'),
          to: path.resolve('dist/contentScript'),
        },
      ]
    }),
    ...getHtmlPlugins(['popup', 'options']),
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   }
  // }
};

module.exports = config;
