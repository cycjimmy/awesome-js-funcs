/**
 * 判断是否nodeList
 * @param nodeList
 */
export default (function (nodeList) {
  return Object.prototype.toString.call(nodeList) === '[object NodeList]';
});