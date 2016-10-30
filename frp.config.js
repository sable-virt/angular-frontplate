'use strict';
module.exports = function (production) {
  global.FRP_DEST = 'public';
  return {
    script: production ? require('./config/webpack.config.production') : require('./config/webpack.config')
  }
};
