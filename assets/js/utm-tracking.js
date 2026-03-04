/**
 * UTM Tracking System - Conpre Concretos
 *
 * 1. Enriquece enlaces de WhatsApp con la pagina de origen
 * 2. Captura parametros UTM entrantes y los envia a GA4
 * 3. Almacena UTMs en sessionStorage para atribucion multi-pagina
 */

(function() {
  'use strict';

  // ============================================
  // Mapa de nombres amigables por pagina
  // ============================================
  var PAGE_NAMES = {
    '/': 'Inicio',
    '/index.html': 'Inicio',
    '/products.html': 'Productos',
    '/services.html': 'Servicios',
    '/about.html': 'Nosotros',
    '/contact.html': 'Contacto',
    '/project.html': 'Proyectos',
    '/blog.html': 'Blog'
  };

  function getPageName() {
    var path = window.location.pathname;
    // Paginas principales
    if (PAGE_NAMES[path]) return PAGE_NAMES[path];
    // Articulos del blog
    if (path.indexOf('/blog/') !== -1) {
      var slug = path.split('/').pop().replace('.html', '').replace(/-/g, ' ');
      return 'Blog: ' + slug;
    }
    return path;
  }

  // ============================================
  // 1. Enriquecer enlaces de WhatsApp con origen
  // ============================================
  function enrichWhatsAppLinks() {
    var pageName = getPageName();
    var suffix = encodeURIComponent(' (Desde: ' + pageName + ')');

    document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
      var href = link.getAttribute('href');
      // Solo agregar si no tiene ya el sufijo de origen
      if (href.indexOf('Desde%3A') === -1 && href.indexOf('Desde:') === -1) {
        // Agregar origen al final del texto del mensaje
        if (href.indexOf('text=') !== -1) {
          link.setAttribute('href', href + suffix);
        }
      }
    });
  }

  // ============================================
  // 2. Capturar UTMs entrantes
  // ============================================
  var UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

  function captureInboundUTMs() {
    var params = new URLSearchParams(window.location.search);
    var utmData = {};
    var hasUTM = false;

    UTM_PARAMS.forEach(function(param) {
      var value = params.get(param);
      if (value) {
        utmData[param] = value;
        hasUTM = true;
      }
    });

    if (hasUTM) {
      // Guardar en sessionStorage para atribucion multi-pagina
      try {
        sessionStorage.setItem('conpre_utm', JSON.stringify(utmData));
      } catch(e) { /* silenciar errores de storage */ }

      // Enviar a GA4
      if (typeof gtag === 'function') {
        gtag('event', 'utm_arrival', {
          'event_category': 'acquisition',
          'utm_source': utmData.utm_source || '',
          'utm_medium': utmData.utm_medium || '',
          'utm_campaign': utmData.utm_campaign || '',
          'utm_term': utmData.utm_term || '',
          'utm_content': utmData.utm_content || ''
        });
      }
    }
  }

  // ============================================
  // 3. Adjuntar UTMs guardados a eventos de contacto
  // ============================================
  function getStoredUTMs() {
    try {
      var stored = sessionStorage.getItem('conpre_utm');
      return stored ? JSON.parse(stored) : {};
    } catch(e) {
      return {};
    }
  }

  function enrichContactEvents() {
    if (typeof gtag !== 'function') return;

    var utms = getStoredUTMs();
    if (!utms.utm_source) return;

    // Enriquecer clicks de WhatsApp con UTMs de la sesion
    document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'utm_conversion', {
          'event_category': 'lead',
          'event_label': 'whatsapp',
          'utm_source': utms.utm_source || '',
          'utm_medium': utms.utm_medium || '',
          'utm_campaign': utms.utm_campaign || ''
        });
      });
    });

    // Enriquecer clicks de telefono
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'utm_conversion', {
          'event_category': 'lead',
          'event_label': 'phone',
          'utm_source': utms.utm_source || '',
          'utm_medium': utms.utm_medium || '',
          'utm_campaign': utms.utm_campaign || ''
        });
      });
    });
  }

  // ============================================
  // Inicializar
  // ============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      enrichWhatsAppLinks();
      captureInboundUTMs();
      enrichContactEvents();
    });
  } else {
    enrichWhatsAppLinks();
    captureInboundUTMs();
    enrichContactEvents();
  }

})();
