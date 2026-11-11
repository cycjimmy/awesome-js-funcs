# Awesome Js Funcs
![Test CI status][workflows-badge-image]
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

## Usage

The package ships plain ESM: `main`, `module` and `exports` all point at
`dist/`, and there is no CommonJS build. `require()` keeps working on Node.js
`^22.18.0` or `>=24.11.0` through the built-in `require(esm)` support; older
runtimes have to use `import()`.

```javascript
import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString'

console.log(isString('string')) // show true
```

Other entry points:

- the whole collection: `import { isString } from '@cycjimmy/awesome-js-funcs'`
- a single group: `import { isString } from '@cycjimmy/awesome-js-funcs/judgeBasic'`
- CommonJS (Node.js `^22.18.0` or `>=24.11.0`): `const { isString } = require('@cycjimmy/awesome-js-funcs')`

The single-function import is recommended: it yields the smallest bundle and
the fastest link.

### Migrating from v4

v5 replaces the two build outputs (`esm/` + `cjs/`) with a single ESM tree under
`dist/`, resolved through the `exports` field:

| v4 | v5 |
| --- | --- |
| `@cycjimmy/awesome-js-funcs/esm/judgeBasic` | `@cycjimmy/awesome-js-funcs/judgeBasic` |
| `@cycjimmy/awesome-js-funcs/esm/judgeBasic/isString` | `@cycjimmy/awesome-js-funcs/judgeBasic/isString` |
| `@cycjimmy/awesome-js-funcs/cjs/judgeBasic/isString.cjs` | `require('@cycjimmy/awesome-js-funcs/judgeBasic/isString').default` |

Because `exports` now gates every specifier, deep paths that are not listed
there no longer resolve. `require()` returns the module namespace object: the
root and group entries are namespaces you can destructure, while a
single-function entry has to be read through `.default`. On runtimes outside
`^22.18.0 || >=24.11.0`, use `await import(...)` instead of `require()`.

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
