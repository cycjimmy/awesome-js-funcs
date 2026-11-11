/**
 * addPreloadLink
 * @doc https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content
 * @param options
 * @param options.rel
 * @param options.href
 * @param options.as
 * @param options.type
 */
export default (options) => {
  const {
    rel = 'preload',
    href,
    as,
    type,
  } = options

  const preloadLink = document.createElement('link')
  preloadLink.rel = rel
  preloadLink.href = href

  if (as) {
    preloadLink.as = as
  }

  if (type) {
    preloadLink.type = type
  }

  document.head.appendChild(preloadLink)
}
