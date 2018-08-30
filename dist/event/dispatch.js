/**
 * 模拟事件触发
 * @param el 元素
 * @param type 事件类型
 * @param bubbles 是否冒泡
 * @param cancelable 是否可取消
 */
export default (function (el, type, bubbles, cancelable) {
  if (type === void 0) {
    type = 'click';
  }

  if (bubbles === void 0) {
    bubbles = true;
  }

  if (cancelable === void 0) {
    cancelable = false;
  }

  try {
    var ev = document.createEvent('Event');
    ev.initEvent(type, bubbles, cancelable);
    el.dispatchEvent(ev);
  } catch (e) {
    console.error(e);
  }
});