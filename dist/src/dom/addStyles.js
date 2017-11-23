/**
 * element add styles
 * @param element
 * @param styles(obj)
 */
export default (element, styles) => {
  for (let name in styles) {
    element.style[name] = styles[name];
  }
};

