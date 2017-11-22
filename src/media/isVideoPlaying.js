/**
 * judge video playing
 * @param video
 * @return {boolean}
 */
export default video => {
  return video.currentTime > 0 && !video.paused && !video.ended
    && video.readyState > 2;
};

