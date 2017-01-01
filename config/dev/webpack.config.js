'use strict';
const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("../webpack.core");

const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
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
        exclude: /node_modules/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-router-loader',
          'angular2-template-loader'
        ]
      }
    ]
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "frp task script",
      suppressSuccess: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.join(__dirname,'../../'),
        output: { path :  path.join(__dirname,'../../') },
        postcss: require('./postcss.config'),
        sassLoader: {
          includePaths: [
            path.join(__dirname,'../../node_modules')
          ]
        },
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
