/**
 * @param promise
 * @returns {boolean}
 */
export default (function (promise) {
  return Object.prototype.toString.call(promise).slice(8, -1) === 'Promise';
});