'use strict';
const path = require('path');
module.exports = {
  context: path.join(__dirname, '../'),
  output: {path: path.join(__dirname, '../')},
  sassLoader: {
    includePaths: [
      path.join(__dirname, '../node_modules')
    ]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
};
