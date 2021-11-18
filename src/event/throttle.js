/**
 * throttling function
 * @param func: real function
 * @param wait: Wait time for next function call
 * @param mustRun: must be executed once in mustRun milliseconds
 */
export default (func, wait = 200, mustRun = 400) => {
  let timeout;
  let startTime = new Date();

  return (...__arguments__) => {
    const curTime = new Date();

    clearTimeout(timeout);

    if (curTime - startTime >= mustRun) {
      // If the specified trigger interval is reached, the handler is triggered
      func.apply(this, __arguments__);
      startTime = curTime;
    } else {
      // Trigger interval not reached, reset timer
      timeout = setTimeout(func, wait);
    }
  };
};
