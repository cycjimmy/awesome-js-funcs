/**
 * 判断是否nodeList
 * @param nodeList
 */
export default nodeList => Object.prototype.toString.call(nodeList) === '[object NodeList]';

