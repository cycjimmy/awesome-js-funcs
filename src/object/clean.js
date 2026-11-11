/**
 * object clean
 * @param obj
 * @returns {{}}
 */
export default (obj = {}) => {
  for (const propertyName in obj) {
    // Not Object.hasOwn: this file is shipped as-is and ES2022 is above the
    // browser baseline the package still supports.
    if (Object.prototype.hasOwnProperty.call(obj, propertyName)) {
      if (obj[propertyName] === null || obj[propertyName] === undefined) {
        delete obj[propertyName]
      }
    }
  }

  return obj
}
