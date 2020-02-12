/**
 * determine a string type
 * @param str
 * @returns {boolean}
 */
export default (str) => typeof str === 'string' && str.constructor === String;
