'use strict';
const webpack = require("webpack");
const merge = require("webpack-merge");
const core = require("./webpack.core");
const AotPlugin = require('@ngtools/webpack').AotPlugin;

/**
 * webpack config for production
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = merge(core,{
  module: {
    rules: [
      {test: /\.ts/, loaders: ['@ngtools/webpack']}
    ]
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: 'src/js/app/app.module#AppModule'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
});
module.exports = webpackConfig;
