/**
 * 取得url相对路径根目录
 * @returns {string|*}
 */
export default (function () {
  var relativeDir,
      url = document.location.toString(),
      arrUrl = url.split("//"),
      start = arrUrl[1].indexOf("/"),
      _final = arrUrl[1].lastIndexOf("/");

  relativeDir = arrUrl[1].substring(start, _final);
  return relativeDir;
});