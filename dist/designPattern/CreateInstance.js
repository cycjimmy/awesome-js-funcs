/**
 * 单例模式构造函数(设计模式)
 * @returns {function(*=)}
 * @constructor
 */
export default (function () {
  var instance;
  return function (newInstance) {
    if (newInstance) {
      instance = newInstance;
    }

    return instance;
  };
});