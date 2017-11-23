/**
 * 中线命名转变成驼峰命名法
 * @param str
 */
export default str => {
  let re = /-(\w)/g;
  return str.replace(re, ($0, $1) => $1.toUpperCase());
};

