/**
 * get browser info
 * @return {{userAgent: string, isAndroid: boolean, isIphone: boolean, isIpad: boolean, isWeixin: boolean, isQQ: boolean, isWeibo: boolean}}
 */
export default () => {
  const ua = navigator.userAgent;

  return {
    userAgent: ua,
    isAndroid: /Android/gi.test(ua),
    isIphone: /iPhone|ipod/gi.test(ua),
    isIpad: /iPad/gi.test(ua),
    isWeixin: /MicroMessenger/gi.test(ua),
    isQQ: /QQ/gi.test(ua),
    isWeibo: /WeiBo/gi.test(ua)
  };
};
