import entries from '../object/entries.js'

/**
 * element add styles
 * @param element
 * @param styles (obj)
 */
export default (element, styles) => {
  entries(styles).forEach(([k, v]) => {
    // Not Object.hasOwn: this file is shipped as-is and ES2022 is above the
    // browser baseline the package still supports.
    if (Object.prototype.hasOwnProperty.call(styles, k)) {
      element.style[k] = v
    }
  })
}
