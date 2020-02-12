/**
 * determine undefined
 * @param obj
 * @returns {boolean}
 */
export default (obj) => Object.prototype.toString.call(obj).slice(8, -1) === 'Undefined';
