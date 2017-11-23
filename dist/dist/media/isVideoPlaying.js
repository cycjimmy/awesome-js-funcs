/**
 * judge video playing
 * @param video
 * @return {boolean}
 */
export default (function (video) {
  return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
});