/**
 * 组织默认事件
 * @param e
 * @return {boolean}
 */
export default e => {
  window.event.returnValue = false;
  e.preventDefault();
  return false;
};

