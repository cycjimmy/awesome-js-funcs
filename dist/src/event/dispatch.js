/**
 * 模拟事件触发
 * @param el 元素
 * @param type 事件类型
 * @param bubbles 是否冒泡
 * @param cancelable 是否可取消
 */
export default (el, type = 'click', bubbles = true, cancelable = false) => {
  try {
    let ev = document.createEvent('Event');
    ev.initEvent(type, bubbles, cancelable);
    el.dispatchEvent(ev);
  } catch (e) {
    console.error(e);
  }
};

