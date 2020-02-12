/**
 * is Chinese name
 * @param sName
 * @returns {boolean}
 */
export default (sName) => /^[\u4e00-\u9fa5]{2,4}$/.test(sName);
