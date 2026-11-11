import chinesePhoneNumber from '../regExpression/chinesePhoneNumber.js'

/**
 * is Chinese phone number
 * @param sMobile
 * @returns {boolean}
 */
export default sMobile => chinesePhoneNumber().test(sMobile)
