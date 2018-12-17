/**
 * @param sMobile
 * @returns {boolean}
 */
export default (function (sMobile) {
  return /^1[345789][0-9]\d{8}$/.test(sMobile);
});