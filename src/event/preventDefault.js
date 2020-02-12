/**
 * prevent default events
 * @param e
 * @return {boolean}
 */
export default (e) => {
  window.event.returnValue = false;
  e.preventDefault();
  return false;
};
