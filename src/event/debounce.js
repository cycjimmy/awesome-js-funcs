/**
 * debounce function
 * @param func: real function
 * @param wait: wait time for next function call
 * @param immediate: whether to execute function immediately
 */
export default (func, wait = 300, immediate = false) => {
  let timeout;
  return function () {
    const callNow = immediate && !timeout;

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(this, arguments);
      }
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, arguments);
    }
  };
};
