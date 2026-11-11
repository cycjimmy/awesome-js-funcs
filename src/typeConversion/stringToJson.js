/* eslint no-new-func: "off" */
const strToJsonFunc = str => (new Function(`return ${str}`))()

function strToJson(str) {
  try {
    return strToJsonFunc(str)
  }
  // The binding is unused but required: a bare `catch {}` is ES2019 syntax, and
  // this source is published verbatim, so it would raise the parse baseline the
  // rest of the package keeps at ES2017.
  // eslint-disable-next-line unused-imports/no-unused-vars
  catch (e) {
    return str
  }
}

/**
 * String To Json
 * @param str
 * @returns {string | JSON}
 */
export default str => strToJson(strToJson(str))
