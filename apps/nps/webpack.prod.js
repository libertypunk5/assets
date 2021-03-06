const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new Dotenv({path: './.env.prod'}),
  ]
});