/**
 * 判断是否字符串
 * @param str
 * @returns {boolean}
 */
export default (function (str) {
  return typeof str === 'string' && str.constructor === String;
});