# Awesome Js Funcs
![][workflows-badge-image]
[![libraries dependency status][libraries-status-image]][libraries-status-url]
[![libraries sourcerank][libraries-sourcerank-image]][libraries-sourcerank-url]
[![Release date][release-date-image]][release-url]
[![semantic-release][semantic-image]][semantic-url]
[![npm license][license-image]][download-url]

## Install
[![NPM version][npm-image]][npm-url]
[![NPM bundle size][npm-bundle-size-image]][npm-url]
[![npm download][download-image]][download-url]

```shell
# via npm
$ npm install @cycjimmy/awesome-js-funcs --save

# or via yarn
$ yarn add @cycjimmy/awesome-js-funcs
```

## Usage. E.g:
```javascript
import { isString } from '@cycjimmy/awesome-js-funcs';
const { isString } = require('@cycjimmy/awesome-js-funcs');

// or better import
import { isString } from '@cycjimmy/awesome-js-funcs/esm/judgeBasic';
const { isString } = require('@cycjimmy/awesome-js-funcs/cjs/judgeBasic');

// or best import (recommend)
import isString from '@cycjimmy/awesome-js-funcs/esm/judgeBasic/isString';
const isString = require('@cycjimmy/awesome-js-funcs/cjs/judgeBasic/isString').default;

console.log(isString('string'));   // show true
```

## Function Collection
* judgeBasic
  * `isString`
  * `isNumber`
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
  * `isChineseIdentificationNum`
* string
  * `trim`
  * `firstUpperCase`
  * `midlineToCamel`
* array
  * `shuffle`
* object
  * `entries`
  * `clean`
* math
  * `randomInt`
* typeConversion
  * `nodeListToArray`
  * `functionToPromise`
  * `stringTrueFalseToBoolean`
  * `stringToJson`
* dom
  * `QueryAll` (constructor)
  * `siblingFilter`
  * `addStyles`
  * `getElementStyle`
  * `addPreloadLink`
  * `touchActive`
  * `touchActiveMockClick`
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
* function
  * `delayForPromise`
* regExpression
  * `chineseName`
  * `chinesePhoneNumber`
  * `chineseIdentificationNum`
* designPattern
  * `CreateInstance` (constructor)
* seldom
  * `getUrlRelativeDir`

<!-- Links: -->
[npm-image]: https://img.shields.io/npm/v/@cycjimmy/awesome-js-funcs
[npm-url]: https://npmjs.org/package/@cycjimmy/awesome-js-funcs
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/min/@cycjimmy/awesome-js-funcs

[download-image]: https://img.shields.io/npm/dt/@cycjimmy/awesome-js-funcs
[download-url]: https://npmjs.org/package/@cycjimmy/awesome-js-funcs

[workflows-badge-image]: https://github.com/cycjimmy/awesome-js-funcs/workflows/Test%20CI/badge.svg

[libraries-status-image]: https://img.shields.io/librariesio/release/npm/@cycjimmy/awesome-js-funcs
[libraries-sourcerank-image]: https://img.shields.io/librariesio/sourcerank/npm/@cycjimmy/awesome-js-funcs
[libraries-status-url]: https://libraries.io/github/cycjimmy/awesome-js-funcs
[libraries-sourcerank-url]: https://libraries.io/npm/@cycjimmy%2Fawesome-js-funcs

[release-date-image]: https://img.shields.io/github/release-date/cycjimmy/awesome-js-funcs
[release-url]: https://github.com/cycjimmy/awesome-js-funcs/releases

[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

[license-image]: https://img.shields.io/npm/l/@cycjimmy/awesome-js-funcs
