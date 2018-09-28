/**
 * addPreloadLink
 * @doc https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content
 * @param rel
 * @param href
 * @param as
 * @param type
 */
export default (function (_ref) {
  var _ref$rel = _ref.rel,
      rel = _ref$rel === void 0 ? 'preload' : _ref$rel,
      href = _ref.href,
      as = _ref.as,
      type = _ref.type;
  var preloadLink = document.createElement('link');
  preloadLink.rel = rel;
  preloadLink.href = href;

  if (as) {
    preloadLink.as = as;
  }

  if (type) {
    preloadLink.type = type;
  }

  document.head.appendChild(preloadLink);
});