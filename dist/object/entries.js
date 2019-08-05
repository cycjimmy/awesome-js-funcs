/**
 * 遍历对象属性方法Object.entries的兼容方案
 * @param obj
 * @returns {Iterator.<*>|*}
 */
export default (function (obj) {
  var replaceFunc = function replaceFunc(obj) {
    var arr = [];

    for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      arr.push([key, obj[key]]);
    }

    return arr;
  };

  if (Object.entries) {
    return Object.entries(obj);
  } else {
    return replaceFunc(obj);
  }
});