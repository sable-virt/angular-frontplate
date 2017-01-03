'use strict';
const path = require('path');
const webpack = require("webpack");
const entries = require("webpack-entries");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = {
  entry: {
    app: ['./src/js/app.ts']
  },
  output: {
    path: FRP_DEST + '/assets/js',
    publicPath: '/assets/js/',
    filename: "[name].js",
    sourceMapFilename: 'maps/[name].map',
    jsonpFunction: 'fr',
    library: '[name]_library'
  },
  resolve: {
    modules: ['./src/js'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        loaders: [
          'raw-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader',
        exclude: /\.async\.(html|css)$/
      },
      {
        test: /\.async\.(html|css)$/,
        loaders: ['file-loader?name=[name].[hash].[ext]', 'extract-loader']
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ]
};
module.exports = webpackConfig;
