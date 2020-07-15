'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/dialog.esm-bundler.prod.js');
} else {
  module.exports = require('./lib/dialog.esm-bundler.js');
}
