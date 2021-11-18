/**
 * compatibility scheme for traversing object property methods Object.entries
 * @param obj
 * @returns {Iterator.<*>|*}
 */
export default (obj) => {
  const replaceFunc = (o) => {
    const arr = [];
    Object.keys(o).forEach((key) => {
      arr.push([key, o[key]]);
    });
    return arr;
  };

  if (Object.entries) {
    return Object.entries(obj);
  }
  return replaceFunc(obj);
};
