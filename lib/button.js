var xtend = require('xtend')
var style = require('./button.csjs')

module.exports = renderButton

function renderButton(h, attrs) {

  return h('button', xtend({
      className: style['h-button']
    }, attrs)
  )
}
