'use strict';
const historyApiFallback = require('connect-history-api-fallback');

module.exports = function (production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = 'public';
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
    script: production ? require('./config/prod/webpack.config') : require('./config/dev/webpack.config')
  }
};
