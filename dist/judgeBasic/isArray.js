/**
 * @param arr
 * @returns {boolean}
 */
export default (function (arr) {
  return Object.prototype.toString.call(arr).slice(8, -1) === 'Array';
});