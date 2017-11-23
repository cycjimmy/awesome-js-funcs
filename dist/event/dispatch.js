/**
 * 模拟事件触发
 * @param el 元素
 * @param type 事件类型
 * @param bubbles 是否冒泡
 * @param cancelable 是否可取消
 */
export default (function (el) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'click';
  var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  try {
    var ev = document.createEvent('Event');
    ev.initEvent(type, bubbles, cancelable);
    el.dispatchEvent(ev);
  } catch (e) {
    console.error(e);
  }
});