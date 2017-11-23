/**
 * 遍历对象属性方法Object.entries的兼容方案
 * @param obj
 * @returns {Iterator.<*>|*}
 */
export default (obj) => {
  let replaceFunc = (obj) => {
    let arr = [];
    for (let key of Object.keys(obj)) {
      arr.push([key, obj[key]]);
    }
    return arr;
  };

  if (Object.entries) {
    return Object.entries(obj);
  } else {
    return replaceFunc(obj);
  }
};

