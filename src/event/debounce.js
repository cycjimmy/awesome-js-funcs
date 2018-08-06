/**
 * 防抖动函数
 * @param func 真正函数
 * @param wait 下次调用函数等待时间
 * @param immediate 是否立即执行函数
 */
export default (func, wait = 300, immediate = false) => {
  let timeout;
  return function () {
    let
      callNow = immediate && !timeout

      , later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(this, arguments);
        }
      }
    ;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, arguments);
    }
  };
};