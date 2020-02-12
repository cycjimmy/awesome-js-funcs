/**
 * random integer
 * @param min
 * @param max
 * @return {*}
 */
export default (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
