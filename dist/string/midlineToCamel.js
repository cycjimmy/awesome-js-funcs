/**
 * 中线命名转变成驼峰命名法
 * @param str
 */
export default (function (str) {
  var re = /-(\w)/g;
  return str.replace(re, function ($0, $1) {
    return $1.toUpperCase();
  });
});