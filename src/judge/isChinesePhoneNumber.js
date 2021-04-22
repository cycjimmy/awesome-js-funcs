import chinesePhoneNumber from '../regExpression/chinesePhoneNumber';

/**
 * is Chinese phone number
 * @param sMobile
 * @returns {boolean}
 */
export default (sMobile) => chinesePhoneNumber().test(sMobile);
