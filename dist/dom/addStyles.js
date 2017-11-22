/**
 * element add styles
 * @param element
 * @param styles(obj)
 */
export default (function (element, styles) {
  for (var name in styles) {
    element.style[name] = styles[name];
  }
});