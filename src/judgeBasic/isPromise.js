/**
 * determine a promise type
 * @param promise
 * @returns {boolean}
 */
export default (promise) => Object.prototype.toString.call(promise).slice(8, -1) === 'Promise';
