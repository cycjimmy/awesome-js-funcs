import chineseName from '../regExpression/chineseName.js'

/**
 * is Chinese name
 * @param sName
 * @returns {boolean}
 */
export default sName => chineseName().test(sName)
