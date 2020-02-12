/**
 * get url relative path root directory
 * @returns {string|*}
 */
export default () => {
  let relativeDir;
  const url = document.location.toString();
  const arrUrl = url.split('//');
  const start = arrUrl[1].indexOf('/');
  const final = arrUrl[1].lastIndexOf('/');
  relativeDir = arrUrl[1].substring(start, final);

  return relativeDir;
};
