import isArray from '../judgeBasic/isArray.js'
import isNodeList from '../judgeBasic/isNodeList.js'

/**
 * nodeList into array
 * @param nodeList
 * @returns {Array}
 */
export default (nodeList) => {
  if (isArray(nodeList)) {
    return nodeList
  }

  if (!isNodeList(nodeList)) {
    // Intent: wrap the single value in a one-element array.
    return Array.of(nodeList)
  }

  return Array.from
    ? Array.from(nodeList)
    : Array.prototype.slice.call(nodeList)
}
