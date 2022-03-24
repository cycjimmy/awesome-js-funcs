/**
 * dispatch event trigger
 * @param el: element
 * @param type: event type
 * @param bubbles: whether bubbling
 * @param cancelable: cancelable
 */
export default (el, type = 'click', bubbles = true, cancelable = false) => {
  try {
    const ev = document.createEvent('Event');
    ev.initEvent(type, bubbles, cancelable);
    el.dispatchEvent(ev);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
