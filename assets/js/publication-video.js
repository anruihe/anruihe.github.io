(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('button.pub-video').forEach(button => {
    const video = button.querySelector('video');
    let visible = false;
    let playbackPreference;

    const syncPlayback = () => {
      const shouldPlay = playbackPreference ?? !reducedMotion.matches;
      if (visible && !document.hidden && shouldPlay) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };
    const syncLabel = () => {
      button.setAttribute('aria-label', `${video.paused ? 'Play' : 'Pause'} MRBench Spring Doors demo`);
    };

    video.addEventListener('play', syncLabel);
    video.addEventListener('pause', syncLabel);
    button.addEventListener('click', () => {
      playbackPreference = video.paused;
      syncPlayback();
    });
    new IntersectionObserver(([entry]) => {
      visible = entry.intersectionRatio >= 0.15;
      syncPlayback();
    }, {threshold: 0.15}).observe(video);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);
  });
})();
