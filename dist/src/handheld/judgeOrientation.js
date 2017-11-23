/**
 * Judge Orientation
 * @return {string}
 */
export default () => {
  let
    clientWidth = document.documentElement.clientWidth
    , clientHeight = document.documentElement.clientHeight
    , result = ''
  ;

  if (clientWidth > clientHeight) {
    result = 'landscape';
  } else {
    result = 'portrait';
  }

  return result;
};

