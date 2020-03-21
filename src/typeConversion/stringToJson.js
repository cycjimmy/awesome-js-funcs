const _strToJsonFunc = (str) => (new Function('return ' + str))();

const strToJson = (str) => {
  try {
    return _strToJsonFunc(str)
  } catch (e) {
    return str;
  }
};

/**
 * String To Json
 * @param str
 * @returns {string | JSON}
 */
export default (str) => strToJson(strToJson(str));
