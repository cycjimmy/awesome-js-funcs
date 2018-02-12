/**
 * 判断是否function
 * @param func
 * @returns {boolean}
 */
export default (function (func) {
  return Object.prototype.toString.call(func).slice(8, -1) === 'Function';
});