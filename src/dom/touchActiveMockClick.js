/* eslint func-names: ["error", "as-needed"] */
import QueryAll from './QueryAll';

/**
 * touchActiveMockClick
 * @param selectorOrEls
 * @param context
 * @param activeClassName
 */
export default (selectorOrEls, {
  context = document,
  activeClassName = 'touch-active',
}) => {
  const element = new QueryAll(selectorOrEls, context);

  /**
   * addTouchActive
   */
  const addTouchActive = (el) => {
    if (!el.classList.contains(activeClassName)) {
      el.classList.add(activeClassName);
    }
  };

  /**
   * removeTouchActive
   */
  const removeTouchActive = (el) => {
    if (el.classList.contains(activeClassName)) {
      el.classList.remove(activeClassName);
    }
  };

  element.on('click', () => {
    addTouchActive(element);
    setTimeout(() => {
      removeTouchActive(element);
    }, 200);
  });
};
