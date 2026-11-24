(() => {
  const config = window.MEMROLEVLA_CONFIG || {};
  const video = document.getElementById("project-video");
  const placeholder = document.getElementById("video-placeholder");
  const error = document.getElementById("video-error");

  if (!config.videoSrc || !video) return;

  video.src = config.videoSrc;
  if (config.videoPoster) video.poster = config.videoPoster;
  placeholder.hidden = true;
  video.hidden = false;

  video.addEventListener("error", () => {
    video.hidden = true;
    placeholder.hidden = false;
    error.hidden = false;
  });
})();
