/**
 * WebP Background Image Loader
 * Detects WebP support and swaps data-bg-src to WebP versions
 * when data-bg-src-webp attribute is present.
 */
(function() {
  function supportsWebP(callback) {
    var img = new Image();
    img.onload = function() { callback(img.width > 0 && img.height > 0); };
    img.onerror = function() { callback(false); };
    img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
  }

  supportsWebP(function(supported) {
    if (!supported) return;
    var elements = document.querySelectorAll('[data-bg-src-webp]');
    elements.forEach(function(el) {
      el.setAttribute('data-bg-src', el.getAttribute('data-bg-src-webp'));
    });
  });
})();
