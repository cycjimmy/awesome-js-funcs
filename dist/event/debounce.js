/**
 * 防抖动函数
 * @param func 真正函数
 * @param wait 下次调用函数等待时间
 * @param immediate 是否立即执行函数
 */
export default (function (func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var timeout = void 0;
  return function () {
    var _this = this,
        _arguments = arguments;

    var callNow = immediate && !timeout,
        later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(_this, _arguments);
      }
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, arguments);
    }
  };
});