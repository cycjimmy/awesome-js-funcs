/* eslint func-names: ["error", "as-needed"] */
import QueryAll from './QueryAll';

/**
 * touchActive
 * @param selectorOrEls
 * @param context
 * @param isMoveShowActive
 * @param activeClassName
 */
export default (selectorOrEls, {
  context = document,
  isMoveShowActive = false,
  activeClassName = 'touch-active',
}) => {
  const element = new QueryAll(selectorOrEls, context);

  /**
   * addTouchActive
   */
  const addTouchActive = function () {
    if (!this.classList.contains(activeClassName)) {
      this.classList.add(activeClassName);
    }
  };

  /**
   * removeTouchActive
   */
  const removeTouchActive = function () {
    if (this.classList.contains(activeClassName)) {
      this.classList.remove(activeClassName);
    }
  };

  element.on('touchstart', addTouchActive);

  // If you want to display touchActive while moving, do not execute removeTouchActive
  if (!isMoveShowActive) {
    element.on('touchmove', removeTouchActive);
  }

  element.on('touchend', removeTouchActive);
  element.on('touchcancel', removeTouchActive);
};
