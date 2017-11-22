/**
 * Get Browser Info
 * @return {{userAgent: string, isAndroid: boolean, isIphone: boolean, isIpad: boolean, isWeixin: boolean, isQQ: boolean, isWeibo: boolean}}
 */
export default () => {
  let ua = navigator.userAgent;

  return {
    userAgent: ua,
    isAndroid: /Android/ig.test(ua),
    isIphone: /iPhone|ipod/ig.test(ua),
    isIpad: /iPad/ig.test(ua),
    isWeixin: /MicroMessenger/ig.test(ua),
    isQQ: /QQ/ig.test(ua),
    isWeibo: /WeiBo/ig.test(ua),
  };
}