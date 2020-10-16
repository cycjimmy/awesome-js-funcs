/**
 * delayForPromise
 * @param ms
 * @returns {Promise<unknown>}
 */
export default (ms) => new Promise(resolve => setTimeout(resolve, ms));


