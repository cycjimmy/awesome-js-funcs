const boolMap = {
  true: true,
  false: false,
};

/**
 * string `true` or `false` to boolean
 * @param str
 * @returns {*}
 */
export default (str) => (boolMap[str] !== undefined ? boolMap[str] : false);
