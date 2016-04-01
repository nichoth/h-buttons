var csjs = require('csjs')

module.exports = csjs`
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

