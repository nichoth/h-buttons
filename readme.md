# h buttons

Buttons made with a hyperscript style renderer and `csjs`.

## demo

[http://demos.nichoth.com/h-buttons](http://demos.nichoth.com/h-buttons)

## example

```js
var delButton = require('h-buttons/lib/delete')
var h = require('bel').createElement
var defaultStyle = require('h-buttons/lib/delete.csjs')
var csjs = require('csjs')

var style = csjs`
  .example extends ${defaultStyle['h-button-delete']} {
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
```
