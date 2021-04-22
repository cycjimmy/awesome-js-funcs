import chineseName from '../regExpression/chineseName';

/**
 * is Chinese name
 * @param sName
 * @returns {boolean}
 */
export default (sName) => chineseName().test(sName);
