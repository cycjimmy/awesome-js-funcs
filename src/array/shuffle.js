import randomInt from '../math/randomInt';

/**
 * shuffle
 * @param array
 * @returns {*[]}
 */
export default (array = []) => {
  let m = array.length;

  while (m) {
    m -= 1;
    const _random = randomInt(0, m);

    // change
    [array[m], array[_random]] = [array[_random], array[m]];
  }

  return array;
};
