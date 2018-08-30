/**
 * 兄弟节点过滤器（主要用来选取同组中的激活对象）
 * @param el
 * @param className
 * @returns {*}
 */
export default (function (el, className) {
  if (className === void 0) {
    className = 'active';
  }

  return Array.prototype.filter.call(el.parentNode.children, function (child) {
    return child.classList.contains(className);
  });
});