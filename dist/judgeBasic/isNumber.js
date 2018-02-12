/**
 * @param num
 * @returns {boolean}
 */
export default (function (num) {
  return Object.prototype.toString.call(num).slice(8, -1) === 'Number';
});