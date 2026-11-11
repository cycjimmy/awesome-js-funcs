import QueryAll from './QueryAll.js'

/**
 * touchActiveMockClick
 * @param selectorOrEls
 * @param options
 * @param options.context
 * @param options.activeClassName
 */
export default (selectorOrEls, options) => {
  const {
    context = document,
    activeClassName = 'touch-active',
  } = options

  const element = new QueryAll(selectorOrEls, context)

  /**
   * addTouchActive
   */
  const addTouchActive = (el) => {
    if (!el.classList.contains(activeClassName)) {
      el.classList.add(activeClassName)
    }
  }

  /**
   * removeTouchActive
   */
  const removeTouchActive = (el) => {
    if (el.classList.contains(activeClassName)) {
      el.classList.remove(activeClassName)
    }
  }

  element.on('click', () => {
    addTouchActive(element)
    setTimeout(() => {
      removeTouchActive(element)
    }, 200)
  })
}
