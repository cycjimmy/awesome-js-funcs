/**
 * 判断是否function
 * @param func
 * @returns {boolean}
 */
export default (func) => Object.prototype.toString.call(func).slice(8, -1) === 'Function';

