'use strict';
module.exports = function (production) {
  global.FRP_DEST = 'public';
  return {
    style: {
      noGuide: true
    },
    script: production ? require('./config/prod/webpack.dll.config') : require('./config/dev/webpack.dll.config')
  }
};
