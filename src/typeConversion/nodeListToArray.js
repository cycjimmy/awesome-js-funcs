import isNodeList from '../judgeBasic/isNodeList';
import isArray from '../judgeBasic/isArray';

/**
 * nodeList into array
 * @param nodeList
 * @returns {Array}
 */
export default (nodeList) => {
  if (isArray(nodeList)) {
    return nodeList;
  }

  if (!isNodeList(nodeList)) {
    return new Array(nodeList);
  }

  return Array.from ? Array.from(nodeList) : Array.prototype.slice.call(nodeList);
};
