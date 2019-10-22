# Awesome Js Funcs
[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![devDependencies Status][david-dev-image]][david-dev-url]
[![npm download][download-image]][download-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@cycjimmy/awesome-js-funcs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@cycjimmy/awesome-js-funcs
[david-image]: https://img.shields.io/david/cycjimmy/awesome-js-funcs.svg?style=flat-square
[david-url]: https://david-dm.org/cycjimmy/awesome-js-funcs
[david-dev-image]: https://david-dm.org/cycjimmy/awesome-js-funcs/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/cycjimmy/awesome-js-funcs?type=dev
[download-image]: https://img.shields.io/npm/dm/@cycjimmy/awesome-js-funcs.svg?style=flat-square
[download-url]: https://npmjs.org/package/@cycjimmy/awesome-js-funcs
[license-image]: https://img.shields.io/npm/l/@cycjimmy/awesome-js-funcs.svg?style=flat-square

## Install
```shell
# via npm
$ npm install @cycjimmy/awesome-js-funcs --save

# or via yarn
$ yarn add @cycjimmy/awesome-js-funcs
```

## Usage. E.g:
```javascript
import { isString } from '@cycjimmy/awesome-js-funcs';

// or better import
import { isString } from '@cycjimmy/awesome-js-funcs/judgeBasic';

// or best import (recommend)
import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString';

console.log(isString('string'));   // show true
```

## Function Collection
* judgeBasic
  * `isString`
  * `isObject`
  * `isFunction`
  * `isArray`
  * `isNull`
  * `isUndefined`
  * `isPromise`
  * `isNodeList`
  * `isUrl`
* judge
  * `isChineseName`
  * `isChinesePhoneNumber`
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
  * `functionToPromise`
* dom
  * `siblingFilter`
  * `addStyles`
  * `addPreloadLink`
* event
  * `dispatch`
  * `debounce`
  * `throttle`
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

