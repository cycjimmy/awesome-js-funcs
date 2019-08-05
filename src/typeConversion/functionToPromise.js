import {default as isPromise} from '../judgeBasic/isPromise';

/**
 * function to promise
 * @param normalFunction
 * @param timeout
 * @returns {Promise<any>}
 */
export default (normalFunction, timeout = 0) => {

  if (isPromise(normalFunction)) {
    return normalFunction;
  }

  return new Promise(resolve => {
    normalFunction();
    setTimeout(resolve, timeout);
  });
};

