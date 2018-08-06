/**
 * 节流函数
 * @param func 真正函数
 * @param wait 下次调用函数等待时间
 * @param mustRun 在mustRun毫秒内必然执行一次
 */
export default (func, wait = 200, mustRun = 400) => {
  let
    timeout
    , startTime = new Date()
  ;

  return function () {
    let curTime = new Date();

    clearTimeout(timeout);

    if (curTime - startTime >= mustRun) {
      // 如果达到了规定的触发时间间隔，触发 handler
      func.apply(this, arguments);
      startTime = curTime;
    } else {
      // 没达到触发间隔，重新设定定时器
      timeout = setTimeout(func, wait);
    }
  };
};