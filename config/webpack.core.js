'use strict';
const path = require('path');
const webpack = require("webpack");
const entries = require("webpack-entries");
/**
 * webpack config
 * url: https://webpack.github.io/docs/configuration.html
 */
const webpackConfig = {
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
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname,'../'),
      manifest: require('../vendor-manifest.json')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.join(__dirname,'../'),
        output: { path :  path.join(__dirname,'../') },
        sassLoader: {
          includePaths: [
            path.join(__dirname,'../node_modules')
          ]
        },
      }
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ]
};
module.exports = webpackConfig;
