/* eslint no-promise-executor-return: "off" */
/**
 * delayForPromise
 * @param ms
 * @returns {Promise<unknown>}
 */
export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));
