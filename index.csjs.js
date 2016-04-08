var csjs = require('csjs')
var delImg = 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACoElEQVR4Xt3b61XDMAyG4a8TwCiMABvABJQNYBLYADoJjMAosAFHPVVPcJ1YtiX5kl9Ay+V96iTFiXf4v70COAD4Dr4+y6c3AB4BvHDQblH2DmAP4AfA3YQIFP8J4BrAB4AnamcAjmeP2RCW8dx4RCCAMH42hFj8GYEAaNgTQmwbfSRsxVPvcQTQNiNCMp6OBcuD4EwIovjlQZCH/wwI4vgYwOi7w1b8L4Db8PS+3AWWB8ERR0J2/NoIYIj70xuGq8jpobezQ1F8CoAepx/8BaBnhOJ4CUDvCFXxUoBeEarjcwB6Q1CJzwXoBUEtvgSgNYJqfClAKwT1+BoAbwST+FoALwSzeA0AawTTeC0AKwTzeE0AbQSXeG0ALQS3eAuAWgTXeCuAUgT3eEuAXIQm8dYAUgR6Hl+xoY+XW3QaK3xSzedrU2I1PzP83tSkCj2fLle5x3uMAI7aQohhm7/y/Es9RkAuglu85wiQIrjGtwJYO+DR3+M+2+y9C2zF8yhxRfACSF2uCg+EbggeAKk3ORTf7LqDNUAqnq7V0dbs4oslgCSeb8ZKvVkyu2fJCiAnXnKKNDsmWACUxDdD0AaoiW+CoAmgEe+OoAWgGe+KoAFgEe+GUAtgGe+CUAPgEW+OUArgGW+KUALQIt4MIRegZbwJQg5AD/HqCFIAumeQ7ihvNnsbmTlV+QdKArB116j7HF4AUY2QAug5Xro7PJzmG2LT7+clM7EHR4iXINBzaH0QLZG52Epulm497KOvZOK23lWEGMBIr3yIkboCdTESQoCR44t2B+mSmV6HffXuIFk0NVp81khILZsbNV6MQAB0eqD1tOE2erwE4cC7QIgwS/wWAi0S3y8PgowwW3wM4RhPD4SnwbfTLjHz8nkKf2aVP1lYT0/xwI9yAAAAAElFTkSuQmCC\')'

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
  .h-button-delete extends .h-button {
    background-image: ${delImg};
  }
`

