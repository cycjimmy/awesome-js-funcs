/**
 * judge orientation
 * @return {string}
 */
export default () => {
  const { clientWidth, clientHeight } = document.documentElement;
  return clientWidth > clientHeight ? 'landscape' : 'portrait';
};
