/**
 * addPreloadLink
 * @doc https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content
 * @param rel
 * @param href
 * @param as
 * @param type
 */
export default ({
  rel = 'preload', href, as, type,
}) => {
  const preloadLink = document.createElement('link');
  preloadLink.rel = rel;
  preloadLink.href = href;

  if (as) {
    preloadLink.as = as;
  }

  if (type) {
    preloadLink.type = type;
  }

  document.head.appendChild(preloadLink);
};
