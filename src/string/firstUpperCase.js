/**
 * capitalize the first letter of a word
 * @param str
 */
export default (str) =>
  str.replace(/\b(\w)(\w*)/g, ($0, $1, $2) => $1.toUpperCase() + $2.toLowerCase());
