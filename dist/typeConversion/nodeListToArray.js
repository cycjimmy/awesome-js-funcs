import { default as isNodeList } from '../judgeBasic/isNodeList';
/**
 * nodeList转变为数组
 * @param nodeList
 * @returns {Array}
 */

export default (function (nodeList) {
  if (Array.isArray(nodeList)) {
    return nodeList;
  }

  if (!isNodeList(nodeList)) {
    return new Array(nodeList);
  }

  return Array.from ? Array.from(nodeList) : Array.prototype.slice.call(nodeList);
});