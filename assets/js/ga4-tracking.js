/**
 * GA4 Event Tracking - Conpre Concretos
 * Tracks: WhatsApp clicks, Phone clicks, CTA clicks
 */

document.addEventListener('DOMContentLoaded', function() {

  // Check if gtag is available
  if (typeof gtag !== 'function') {
    console.warn('GA4: gtag not available');
    return;
  }

  // ============================================
  // Track WhatsApp clicks
  // ============================================
  document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
    link.addEventListener('click', function() {
      gtag('event', 'click_whatsapp', {
        'event_category': 'contact',
        'event_label': window.location.pathname,
        'value': 1
      });
    });
  });

  // ============================================
  // Track Phone clicks
  // ============================================
  document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.addEventListener('click', function() {
      gtag('event', 'click_phone', {
        'event_category': 'contact',
        'event_label': window.location.pathname,
        'value': 1
      });
    });
  });

  // ============================================
  // Track CTA clicks (Cotizar buttons)
  // ============================================
  document.querySelectorAll('a.vs-btn[href*="contact"]').forEach(function(link) {
    link.addEventListener('click', function() {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': this.textContent.trim(),
        'destination': this.href
      });
    });
  });

  // ============================================
  // Track scroll depth
  // ============================================
  let scrollMarks = [25, 50, 75, 100];
  let scrollTracked = [];

  window.addEventListener('scroll', function() {
    let scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

    scrollMarks.forEach(function(mark) {
      if (scrollPercent >= mark && !scrollTracked.includes(mark)) {
        scrollTracked.push(mark);
        gtag('event', 'scroll_depth', {
          'event_category': 'engagement',
          'event_label': mark + '%',
          'value': mark
        });
      }
    });
  });

});
