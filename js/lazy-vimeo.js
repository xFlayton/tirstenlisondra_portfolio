// Lazy-load Vimeo iframes — swap data-src -> src when near viewport
(function () {
  var lazyIframes = document.querySelectorAll('iframe[data-src]');
  if (!lazyIframes.length) return;

  if (!('IntersectionObserver' in window)) {
    // Fallback for very old browsers: load everything immediately
    lazyIframes.forEach(function (iframe) {
      iframe.src = iframe.dataset.src;
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var iframe = entry.target;
          iframe.src = iframe.dataset.src;
          observer.unobserve(iframe);
        }
      });
    },
    { rootMargin: '200px 0px' } // start loading 200px before entering view
  );

  lazyIframes.forEach(function (iframe) {
    observer.observe(iframe);
  });
})();
