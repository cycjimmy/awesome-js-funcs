import { default as isPromise } from '../judgeBasic/isPromise';
/**
 * function to promise
 * @param normalFunction
 * @param timeout
 * @returns {Promise<any>}
 */

export default (function (normalFunction, timeout) {
  if (timeout === void 0) {
    timeout = 0;
  }

  if (isPromise(normalFunction)) {
    return normalFunction;
  }

  return new Promise(function (resolve) {
    normalFunction();
    setTimeout(resolve, timeout);
  });
});