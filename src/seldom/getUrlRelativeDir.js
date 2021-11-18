/**
 * get url relative path root directory
 * @returns {string|*}
 */
export default () => {
  const url = document.location.toString();
  const arrUrl = url.split('//');
  const start = arrUrl[1].indexOf('/');
  const final = arrUrl[1].lastIndexOf('/');
  return arrUrl[1].substring(start, final);
};
