/**
 * 判断是否object
 * @param o
 * @returns {boolean}
 */
export default (function (o) {
  return Object.prototype.toString.call(o) === '[object Object]';
});