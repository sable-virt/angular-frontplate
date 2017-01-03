'use strict';
module.exports = function (production) {
  global.FRP_DEST = 'public';
  return {
    clean: {
      src: FRP_DEST
    },
    style: {
      noGuide: true
    },
    script: production ? require('./config/prod/webpack.dll.config') : require('./config/dev/webpack.dll.config')
  }
};
