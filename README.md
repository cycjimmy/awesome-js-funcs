# Awesome Js Funcs

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![devDependencies Status][david-dev-image]][david-dev-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/awesome-js-funcs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/awesome-js-funcs
[david-image]: https://img.shields.io/david/cycdpo/awesome-js-funcs.svg?style=flat-square
[david-url]: https://david-dm.org/cycdpo/awesome-js-funcs
[david-dev-image]: https://david-dm.org/cycdpo/awesome-js-funcs/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/cycdpo/awesome-js-funcs?type=dev
[node-image]: https://img.shields.io/badge/node.js-%3E=_6.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/awesome-js-funcs.svg?style=flat-square
[download-url]: https://npmjs.org/package/awesome-js-funcs
[license-image]: https://img.shields.io/npm/l/awesome-js-funcs.svg?style=flat-square

## Install
```shell
# via npm
$ npm install awesome-js-funcs --save

# or via yarn
$ yarn add awesome-js-funcs
```

## Usage. E.g:
```javascript
import {
  isString
} from 'awesome-js-funcs';

console.log(isString('string'));      // true
```

## Function Collection
* judgeBasic
  * `isString`
  * `isObject`
  * `isFunction`
  * `isNodeList`
* string
  * `trim`
  * `firstUpperCase`
  * `midlineToCamel`
* object
  * `entries`
* math
  * `randomInt`
* typeConversion
  * `nodeListToArray`
* dom
  * `siblingFilter`
  * `addStyles`
* event
  * `dispatch`
  * `preventDefault`
* media
  * `isAudioPlaying`
  * `isVideoPlaying`
* handheld
  * `judgeOrientation`
  * `isMobile`
  * `getBrowserInfo`
* designPattern
  * `CreateInstance` (constructor)
* seldom
  * `getUrlRelativeDir`

