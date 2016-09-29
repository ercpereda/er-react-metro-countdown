var commonConfig = require('./webpack.common');
var webpackMerge = require('webpack-merge');
var path = require('path');

var config = webpackMerge(commonConfig, {
  entry: './src/Countdown.js',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'er-react-metro-countdown.js',
    libraryTarget: 'commonjs'
  },

  target: 'node',

  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'classnames': 'classnames'
  }
});

module.exports = config;
