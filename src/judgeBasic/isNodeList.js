/**
 * determine nodeList type
 * @param nodeList
 */
export default (nodeList) => Object.prototype.toString.call(nodeList) === '[object NodeList]';
