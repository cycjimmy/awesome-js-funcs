/**
 * element add styles
 * @param element
 * @param styles(obj)
 */
export default (element, styles) => {
  for (const name in styles) {
    // eslint-disable-next-line no-prototype-builtins
    if (styles.hasOwnProperty(name)) {
      element.style[name] = styles[name];
    }
  }
};
