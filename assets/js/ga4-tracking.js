/**
 * GA4 Event Tracking - Conpre Concretos
 * Tracks: WhatsApp clicks, Phone clicks, CTA clicks, Form start, Scroll depth
 *
 * IMPORTANTE - Configurar como Eventos Clave (Conversiones) en GA4 Admin:
 * 1. Ir a Google Analytics > Administrar > Eventos
 * 2. Marcar como "Evento clave" los siguientes eventos:
 *    - form_submit (envio de formulario de cotizacion)
 *    - generate_lead (lead generado, evento recomendado de GA4)
 *    - click_phone (clic en enlace de telefono)
 *    - click_whatsapp (clic en boton de WhatsApp)
 */

document.addEventListener('DOMContentLoaded', function() {

  // Check if gtag is available
  if (typeof gtag !== 'function') {
    console.warn('GA4: gtag not available');
    return;
  }

  // ============================================
  // Track WhatsApp clicks (MARCAR COMO CONVERSION)
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
  // Track Phone clicks (MARCAR COMO CONVERSION)
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
  // Track form_start (primer interaccion con el formulario)
  // ============================================
  var formStartTracked = false;
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('focusin', function() {
      if (!formStartTracked) {
        formStartTracked = true;
        gtag('event', 'form_start', {
          'event_category': 'lead',
          'event_label': 'Contact Form Started',
          'value': 1
        });
      }
    });
  }

  // ============================================
  // Track scroll depth
  // ============================================
  var scrollMarks = [25, 50, 75, 100];
  var scrollTracked = [];

  window.addEventListener('scroll', function() {
    var scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);

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
