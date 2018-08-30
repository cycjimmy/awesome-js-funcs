/**
 * 防抖动函数
 * @param func 真正函数
 * @param wait 下次调用函数等待时间
 * @param immediate 是否立即执行函数
 */
export default (function (func, wait, immediate) {
  if (wait === void 0) {
    wait = 300;
  }

  if (immediate === void 0) {
    immediate = false;
  }

  var timeout;
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