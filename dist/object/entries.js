/**
 * 遍历对象属性方法Object.entries的兼容方案
 * @param obj
 * @returns {Iterator.<*>|*}
 */
export default (function (obj) {
  var replaceFunc = function replaceFunc(obj) {
    var arr = [];

    var _arr = Object.keys(obj);

    for (var _i = 0; _i < _arr.length; _i++) {
      var key = _arr[_i];
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