'use strict';
const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("../webpack.core");
const AotPlugin = require('@ngtools/webpack').AotPlugin;

/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core, {
  // devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.ts/,
        exclude: /node_modules/,
        loaders: [
          'angular2-router-loader',
          'angular2-template-loader',
          '@ngtools/webpack'
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
    new AotPlugin({
      tsConfigPath: path.join(__dirname,'../../tsconfig.json'),
      entryModule: path.join(__dirname,'../../src/js/app/app.module#AppModule')
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname,'../../'),
      manifest: require('../../vendor-manifest.json')
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