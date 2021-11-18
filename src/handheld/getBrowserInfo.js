/**
 * get browser info
 * @returns {{
 *   isIpad: boolean,
 *   isWeixin: boolean,
 *   isEdge: boolean,
 *   isIE: boolean,
 *   ieVersion: string,
 *   userAgent: string,
 *   isIphone: boolean,
 *   isQQ: boolean,
 *   isWeibo: boolean,
 *   isAndroid: boolean
 * }}
 */
export default () => {
  const ua = navigator.userAgent;
  const isIE = /compatible/gi.test(ua) && /MSIE/gi.test(ua);
  const isEdge = /Edge/gi.test(ua) && !isIE;
  const isIE11 = /Trident/gi.test(ua) && /rv:11\.0/gi.test(ua);

  return {
    userAgent: ua,
    isAndroid: /Android/gi.test(ua),
    isIphone: /iPhone|ipod/gi.test(ua),
    isIpad: /iPad/gi.test(ua),
    isWeixin: /MicroMessenger/gi.test(ua),
    isQQ: /QQ/gi.test(ua),
    isWeibo: /WeiBo/gi.test(ua),
    isIE: isIE || isIE11,
    isEdge,
    ieVersion: (() => {
      if (isIE11) {
        return '11';
      }

      if (isEdge) {
        return 'edge';
      }

      if (isIE) {
        const reIE = /MSIE (\d+\.\d+);/;
        reIE.test(ua);
        const fIEVersion = parseFloat(RegExp.$1);

        switch (fIEVersion) {
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            return `${fIEVersion}`;

          default:
            return '<6';
        }
      }

      return '-1';
    })(),
  };
};
