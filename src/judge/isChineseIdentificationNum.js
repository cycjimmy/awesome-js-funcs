import chineseIdentificationNum from '../regExpression/chineseIdentificationNum';

/**
 * is Chinese Identification Number
 * @param sNum
 * @returns {boolean}
 */
export default (sNum) => chineseIdentificationNum().test(sNum);
