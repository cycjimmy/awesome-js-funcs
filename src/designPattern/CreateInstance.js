/**
 * singleton constructor(design patterns)
 * @returns {function(*=)}
 * @constructor
 */
export default () => {
  let instance;
  return (newInstance) => {
    if (newInstance) {
      instance = newInstance;
    }
    return instance;
  };
};
