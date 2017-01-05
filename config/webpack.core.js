'use strict';
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
    modules: ['./src','./node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        enforce: 'pre'
      },
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
    new webpack.LoaderOptionsPlugin({
      options: require('./loader-options')
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  performance: {
    hints: false
  }
};
module.exports = webpackConfig;
