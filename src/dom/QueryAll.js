import isString from '../judgeBasic/isString';
import nodeListToArray from '../typeConversion/nodeListToArray';

export default class QueryAll {
  /**
   * QueryAll
   * @param selectorOrEls
   * @param context
   */
  constructor(selectorOrEls, context = document) {
    let elements;

    if (isString(selectorOrEls)) {
      elements = context.querySelectorAll(selectorOrEls);
    } else {
      elements = selectorOrEls;
    }

    this.nodeList = nodeListToArray(elements);
  }

  /**
   * event bind
   * @param eventType
   * @param fn
   * @returns {QueryAll}
   */
  on(eventType, fn) {
    const aEvents = eventType.split(' ');

    this.nodeList.forEach((el) => {
      aEvents.forEach((event) => {
        el.addEventListener(event, fn);
      });
    });

    return this;
  }

  /**
   * addClass
   * @param className
   * @returns {QueryAll}
   */
  addClass(className) {
    this.nodeList.forEach((el) => {
      if (el.classList) {
        el.classList.add(className);
      } else {
        // eslint-disable-next-line no-param-reassign
        el.className += ` ${className}`;
      }
    });

    return this;
  }

  /**
   * removeClass
   * @param className
   * @returns {QueryAll}
   */
  removeClass(className) {
    this.nodeList.forEach((el) => {
      if (el.classList) {
        el.classList.remove(className);
      } else {
        // eslint-disable-next-line no-param-reassign
        el.className = el.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
      }
    });

    return this;
  }

  /**
   * hasClass
   * @param className
   * @returns {QueryAll}
   */
  hasClass(className) {
    this.nodeList.forEach((el) => {
      if (el.classList) {
        el.classList.contains(className);
      } else {
        new RegExp(`(^| )${className}( |$)`, 'gi').test(el.className);
      }
    });

    return this;
  }

  /**
   * remove element
   */
  remove() {
    this.nodeList.forEach((el) => {
      el.parentNode.removeChild(el);
    });
  }
}
