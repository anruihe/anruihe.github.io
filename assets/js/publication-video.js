/* Lightweight, viewport-aware paper teasers with a user-controlled pause. */
(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('.pub-video').forEach(container => {
    const video = container.querySelector('video');
    const button = container.querySelector('.video-toggle');
    let userPaused = false;
    let visible = false;
    video.muted = true;
    const sync = () => {
      button.textContent = video.paused ? 'Play' : 'Pause';
      button.setAttribute('aria-label', `${video.paused ? 'Play' : 'Pause'} MRBench demo`);
      button.setAttribute('aria-pressed', String(!video.paused));
    };
    const play = () => video.play().catch(sync);
    if (reducedMotion.matches) video.pause();
    button.hidden = false;
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    button.addEventListener('click', () => {
      userPaused = !video.paused;
      if (userPaused) video.pause();
      else play();
    });
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible && !userPaused && !reducedMotion.matches) play();
      else video.pause();
    }, {threshold: 0.15}).observe(video);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) video.pause();
      else if (visible && !userPaused && !reducedMotion.matches) play();
    });
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) video.pause();
      else if (visible && !userPaused) play();
    });
    sync();
  });
})();
