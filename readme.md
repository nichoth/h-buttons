# h buttons

Buttons made with a hyperscript style renderer and `csjs`.

## demo

[http://demos.nichoth.com/h-buttons](http://demos.nichoth.com/h-buttons)

## example

```js
var h = require('bel').createElement
var buttonStyle = require('../index.csjs')
var csjs = require('csjs')

var style = csjs`
  .my-button extends ${buttonStyle['h-button-delete']} {
    width: 2em;
    height: 2em;
  }
`

function renderButton() {
  return h('button', {
    className: style['my-button'],
    onclick: console.log.bind(console, 'delete')
  }, [])
}

document.body.appendChild(renderButton())
```
