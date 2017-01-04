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
    app: ['./src/main.ts']
  },
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
        postcss: require('./postcss.config')
      }
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname,'../../'),
      manifest: require('../../vendor-manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.BannerPlugin({
      banner: 'console.warn("This script is development version.");',
      raw: true
    })
  ]
});
module.exports = webpackConfig;
