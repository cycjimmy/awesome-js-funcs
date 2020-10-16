/**
 * object clean
 * @param obj
 * @returns {{}}
 */
export default (obj = {}) => {
  for (const propertyName in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, propertyName)) {
      if (obj[propertyName] === null || obj[propertyName] === undefined) {
        delete obj[propertyName];
      }
    }
  }

  return obj;
};
