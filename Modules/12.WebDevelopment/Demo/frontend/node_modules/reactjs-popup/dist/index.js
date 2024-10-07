
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./reactjs-popup.cjs.production.min.js')
} else {
  module.exports = require('./reactjs-popup.cjs.development.js')
}
