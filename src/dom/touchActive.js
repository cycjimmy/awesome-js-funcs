import QueryAll from './QueryAll.js'

/**
 * touchActive
 * @param selectorOrEls
 * @param options
 * @param options.context
 * @param options.isMoveShowActive
 * @param options.activeClassName
 */
export default (selectorOrEls, options) => {
  const {
    context = document,
    isMoveShowActive = false,
    activeClassName = 'touch-active',
  } = options

  const element = new QueryAll(selectorOrEls, context)

  /**
   * addTouchActive
   */
  const addTouchActive = function () {
    if (!this.classList.contains(activeClassName)) {
      this.classList.add(activeClassName)
    }
  }

  /**
   * removeTouchActive
   */
  const removeTouchActive = function () {
    if (this.classList.contains(activeClassName)) {
      this.classList.remove(activeClassName)
    }
  }

  element.on('touchstart', addTouchActive)

  // If you want to display touchActive while moving, do not execute removeTouchActive
  if (!isMoveShowActive) {
    element.on('touchmove', removeTouchActive)
  }

  element.on('touchend', removeTouchActive)
  element.on('touchcancel', removeTouchActive)
}
