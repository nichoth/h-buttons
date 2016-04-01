var csjs = require('csjs')
var xtend = require('xtend')

module.exports = renderButton
var styles = csjs`
  .h-button {
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    background-size: contain;
    padding: 0;
    width: 1em;
    height: 1em;
    border: none;
  }
  .h-button:hover {
    opacity: 0.6;
  }
`
module.exports.style = styles['h-button']
var cls = styles['h-button']

function renderButton(h, attrs) {

  return h('button', xtend({
      className: cls
    }, attrs)
  )
}
