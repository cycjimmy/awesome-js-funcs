export {
  isString,
  isNumber,
  isObject,
  isFunction,
  isArray,
  isNull,
  isUndefined,
  isPromise,
  isNodeList,
  isUrl,
} from './judgeBasic';

export { isChineseName, isChinesePhoneNumber, isChineseIdentificationNum } from './judge';

export { trim, firstUpperCase, midlineToCamel } from './string';

export { shuffle } from './array';

export { entries, clean } from './object';

export { randomInt } from './math';

export {
  nodeListToArray, functionToPromise, stringTrueFalseToBoolean, stringToJson,
} from './typeConversion';

export {
  QueryAll,
  siblingFilter,
  addStyles,
  getElementStyle,
  addPreloadLink,
  touchActive,
  touchActiveMockClick,
} from './dom';

export {
  dispatch, debounce, throttle, preventDefault,
} from './event';

export { isAudioPlaying, isVideoPlaying } from './media';

export { delayForPromise } from './function';

export { judgeOrientation, isMobile, getBrowserInfo } from './handheld';

export { chineseName, chinesePhoneNumber, chineseIdentificationNum } from './regExpression';

export { CreateInstance } from './designPattern';

export { getUrlRelativeDir } from './seldom';
