var b = require('./button.js')
var xtend = require('xtend')
var style = require('./delete.csjs')

module.exports = function(h, attrs) {
  return b(h, xtend({
    className: style['h-button-delete']
  }, attrs))
}

