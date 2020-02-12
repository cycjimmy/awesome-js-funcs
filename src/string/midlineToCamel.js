/**
 * mid-line nomenclature changed to camel case nomenclature
 * @param str
 */
export default (str) => {
  const re = /-(\w)/g;
  return str.replace(re, ($0, $1) => $1.toUpperCase());
};
