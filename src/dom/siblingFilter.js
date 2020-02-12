/**
 * sibling filter（mainly used to select active objects in a same group）
 * @param el
 * @param className
 * @returns {*}
 */
export default (el, className = 'active') =>
  Array.prototype.filter.call(el.parentNode.children, (child) =>
    child.classList.contains(className)
  );
