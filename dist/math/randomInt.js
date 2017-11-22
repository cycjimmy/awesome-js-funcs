/**
 * 随机整数
 * @param min
 * @param max
 * @return {*}
 */
export default (function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
});