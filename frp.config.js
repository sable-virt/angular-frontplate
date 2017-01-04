'use strict';
const historyApiFallback = require('connect-history-api-fallback');
const webpack = require('webpack');
const path = require('path');
module.exports = function (production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
  const webpackConfig = require('./config/dev/webpack.config');
  delete webpackConfig.entry;
  delete webpackConfig.output;
  webpackConfig.plugins = [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.join(__dirname,'../'),
        output: { path :  path.join(__dirname,'../') },
        sassLoader: {
          includePaths: [
            path.join(__dirname,'../node_modules')
          ]
        },
        postcss: require('./config/dev/postcss.config')
      }
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
  ];
  return {
    clean: {
      src: null
    },
    style: {
      noGuide: true
    },
    html: {
      src: `${FRP_SRC}/*.ejs`,
      params: {
        production
      }
    },
    copy: {
      [`${FRP_SRC}/js/**/*.html`]: `${FRP_DEST}/assets/view`,
      [`${FRP_SRC}/lib/**/*`]: `${FRP_DEST}/assets/lib`
    },
    server: {
      middleware: [ historyApiFallback() ]
    },
    test: {
      files: [
        `${FRP_SRC}/js/test.ts`
      ],
      preprocessors: {
        '**/*.ts': ['webpack']
      },
      webpack: webpackConfig,
    },
    script: production ? require('./config/prod/webpack.config') : require('./config/dev/webpack.config')
  }
};
