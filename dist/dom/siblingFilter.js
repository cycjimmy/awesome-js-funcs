/**
 * 兄弟节点过滤器（主要用来选取同组中的激活对象）
 * @param el
 * @param className
 * @returns {*}
 */
export default (function (el) {
  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'active';

  return Array.prototype.filter.call(el.parentNode.children, function (child) {
    return child.classList.contains(className);
  });
});