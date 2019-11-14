/**
 * Get Element Style
 * @param element
 * @param propertyName
 * @returns {string}
 */
export default (element, propertyName) =>
  window.getComputedStyle(element, null)
    .getPropertyValue(propertyName);

