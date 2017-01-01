'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("../webpack.core");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core, {
  // devtool: '#source-map',
  entry: {
    vendor: ['./src/js/vendor.ts']
  },
  plugins: [
    new webpack.DllPlugin({
      path: '[name]-manifest.json',
      name: '[name]_library'
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
delete webpackConfig.entry.app;
module.exports = webpackConfig;
