'use strict';
const webpack = require('webpack');
const historyApiFallback = require('connect-history-api-fallback');
module.exports = function (production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
  const webpackConfig = require('./config/webpack.test.config');
  return {
    clean: {
      src: production ? FRP_DEST : null
    },
    style: {
      noGuide: true,
      src: `${FRP_SRC}/assets/sass/style.scss`,
      dest: `${FRP_DEST}/assets/css`
    },
    html: {
      src: `${FRP_SRC}/*.ejs`,
      params: {
        production
      }
    },
    copy: {
      [`${FRP_SRC}/**/*.html`]: `${FRP_DEST}/assets/view`,
      [`${FRP_SRC}/assets/images/**/*`]: `${FRP_DEST}/assets/images`,
      [`${FRP_SRC}/assets/lib/**/*`]: `${FRP_DEST}/assets/lib`
    },
    server: {
      middleware: [ historyApiFallback() ]
    },
    test: {
      plugins: [
        require('karma-jasmine'),
        require('karma-webpack'),
        require('karma-phantomjs-launcher'),
        require('karma-mocha-reporter')
      ],
      files: [
        `${FRP_SRC}/test.ts`
      ],
      preprocessors: {
        '**/*.ts': ['webpack'],
      },
      reporters: ['mocha'],
      webpack: webpackConfig
    },
    script: production ? require('./config/prod/webpack.config') : require('./config/dev/webpack.config')
  }
};
