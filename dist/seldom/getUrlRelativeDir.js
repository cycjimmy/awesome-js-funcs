/**
 * 取得url相对路径根目录
 * @returns {string|*}
 */
export default (function () {
  var relativeDir = void 0,
      url = document.location.toString(),
      arrUrl = url.split("//"),
      start = arrUrl[1].indexOf("/"),
      final = arrUrl[1].lastIndexOf("/");

  relativeDir = arrUrl[1].substring(start, final);

  return relativeDir;
});