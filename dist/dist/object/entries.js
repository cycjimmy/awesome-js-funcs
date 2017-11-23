/**
 * 遍历对象属性方法Object.entries的兼容方案
 * @param obj
 * @returns {Iterator.<*>|*}
 */
export default (function (obj) {
  var replaceFunc = function replaceFunc(obj) {
    var arr = [];
    for (var _iterator = Object.keys(obj), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var key = _ref;

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