import isPromise from '../judgeBasic/isPromise.js'

/**
 * function to promise
 * @param normalFunction
 * @param timeout
 * @returns {Promise<any>}
 */
export default (normalFunction, timeout = 0) => {
  if (isPromise(normalFunction)) {
    return normalFunction
  }

  return new Promise((resolve) => {
    normalFunction()
    setTimeout(resolve, timeout)
  })
}
