/**
 * determine a function type
 * @param func
 * @returns {boolean}
 */
export default (func) => Object.prototype.toString.call(func).slice(8, -1) === 'Function';
