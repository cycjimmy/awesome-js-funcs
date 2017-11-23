/**
 * Judge Orientation
 * @return {string}
 */
export default (function () {
  var clientWidth = document.documentElement.clientWidth,
      clientHeight = document.documentElement.clientHeight,
      result = '';

  if (clientWidth > clientHeight) {
    result = 'landscape';
  } else {
    result = 'portrait';
  }

  return result;
});