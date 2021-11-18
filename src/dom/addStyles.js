import entries from '../object/entries';

/**
 * element add styles
 * @param element
 * @param styles(obj)
 */
export default (element, styles) => {
  entries(styles).forEach(([k, v]) => {
    if (Object.prototype.hasOwnProperty.call(styles, k)) {
      element.style[k] = v;
    }
  });
};
