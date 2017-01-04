'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("../webpack.core");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core, {
  entry: {
    vendor: ['./src/vendor.ts']
  },
  plugins: [
    new webpack.DllPlugin({
      path: '[name]-manifest.json',
      name: '[name]_library'
    }),
  ]
});
delete webpackConfig.entry.app;
module.exports = webpackConfig;
