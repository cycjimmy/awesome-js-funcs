import randomInt from '../math/randomInt';

/**
 * shuffle
 * @param array
 * @returns {*[]}
 */
export default (array = []) => {
  const arrayClone = [...array];
  let m = arrayClone.length;

  while (m) {
    m -= 1;
    const random = randomInt(0, m);

    // change
    [arrayClone[m], arrayClone[random]] = [arrayClone[random], arrayClone[m]];
  }

  return arrayClone;
};
