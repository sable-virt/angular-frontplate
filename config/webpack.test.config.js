'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core, {
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.ts/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: require('./dev/postcss.config')
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('test')
      }
    })
  ]
});
delete webpackConfig.output;
module.exports = webpackConfig;
