/**
 * determine an array type
 * @param arr
 * @returns {boolean}
 */
export default (arr) => Object.prototype.toString.call(arr).slice(8, -1) === 'Array';
