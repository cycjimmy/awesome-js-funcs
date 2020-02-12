/**
 * determine an object
 * @param o
 * @returns {boolean}
 */
export default (o) => Object.prototype.toString.call(o) === '[object Object]';
