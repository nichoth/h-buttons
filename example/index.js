var delButton = require('../lib/delete')
var h = require('bel').createElement
var csjs = require('csjs')

var style = csjs`
  .example extends ${delButton.style} {
    width: 2em;
    height: 2em;
  }
`

var b = delButton(h, {
  className: style.example,
  onclick: function onClick(ev) {
    console.log('delete', ev)
  }
}, [])

document.body.appendChild(b)
