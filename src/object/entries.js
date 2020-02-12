/**
 * compatibility scheme for traversing object property methods Object.entries
 * @param obj
 * @returns {Iterator.<*>|*}
 */
export default (obj) => {
  const replaceFunc = (obj) => {
    const arr = [];
    for (const key of Object.keys(obj)) {
      arr.push([key, obj[key]]);
    }
    return arr;
  };

  if (Object.entries) {
    return Object.entries(obj);
  }
  return replaceFunc(obj);
};
