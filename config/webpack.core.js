'use strict';
const webpack = require("webpack");
const entries = require("webpack-entries");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = {
  entry: entries('./src/js/!(_*|*-spec).ts', true),
  output: {
    path: FRP_DEST + '/assets/js',
    publicPath: '/assets',
    filename: "[name].js",
    sourceMapFilename: 'maps/[name].map',
    jsonpFunction: 'fr'
  },
  resolve: {
    modules: ['./src/js'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.css$/, loader: 'raw'},
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
  ]
};
module.exports = webpackConfig;
