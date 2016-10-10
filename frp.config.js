'use strict';
module.exports = function(production) {
    return {
        script: production ? require('./config/webpack.config.production') : require('./config/webpack.config')
    }
};
