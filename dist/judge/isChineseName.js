/**
 * @param sName
 * @returns {boolean}
 */
export default (function (sName) {
  return /^[\u4e00-\u9fa5]{2,4}$/.test(sName);
});