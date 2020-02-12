/**
 * determine a number type
 * @param num
 * @returns {boolean}
 */
export default (num) => Object.prototype.toString.call(num).slice(8, -1) === 'Number';
