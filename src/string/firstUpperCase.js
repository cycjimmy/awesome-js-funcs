/**
 * 单词首字母大写
 * @param str
 */
export default str => {
  return str.replace(/\b(\w)(\w*)/g, ($0, $1, $2) => {
    return $1.toUpperCase() + $2.toLowerCase();
  });
};

