'use strict';
const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("../webpack.core");

/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core, {
  devtool: '#source-map',
  entry: {
    app: ['./src/main-aot.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader?aot=true&genDir=src/aot-compiled/src/js/app'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: require('./postcss.config')
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  ]
});
module.exports = webpackConfig;