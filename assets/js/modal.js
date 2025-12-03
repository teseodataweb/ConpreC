// assets/js/modal.js
// Agregar atributo defer al script para asegurar DOMReady.
// Este script crea un único modal y lo reutiliza cada vez que se pulsa un .project-block__link

(function () {
  'use strict';

  // Helpers
  function createEl(tag, attrs = {}, children = []) {
    const el = document.createElement(tag);
    for (const k in attrs) {
      if (k === 'class') el.className = attrs[k];
      else if (k === 'html') el.innerHTML = attrs[k];
      else el.setAttribute(k, attrs[k]);
    }
    children.forEach(c => el.appendChild(c));
    return el;
  }

  // Construir estructura del modal (se crea una sola vez)
  const overlay = createEl('div', { class: 'modal-overlay', 'aria-hidden': 'true', role: 'dialog' });
  overlay.style.display = 'none';

  const modalWindow = createEl('div', { class: 'modal-window', role: 'document' });
  const closeBtn = createEl('button', { class: 'modal-close', 'aria-label': 'Cerrar' });
  closeBtn.innerHTML = '&#10005;'; // X

  // imagen (opcional)
  const imgEl = createEl('img', { class: 'modal-image', alt: '' });

  // contenedor de texto scrollable
  const scrollWrap = createEl('div', { class: 'modal-scroll' });
  const subtitleEl = createEl('span', { class: 'modal-subtitle' });
  const titleEl = createEl('h3', { class: 'modal-title' });
  const textEl = createEl('div', { class: 'modal-text' });

  scrollWrap.appendChild(subtitleEl);
  scrollWrap.appendChild(titleEl);
  scrollWrap.appendChild(textEl);

  modalWindow.appendChild(closeBtn);
  modalWindow.appendChild(imgEl);
  modalWindow.appendChild(scrollWrap);
  overlay.appendChild(modalWindow);
  document.body.appendChild(overlay);

  // Estado
  let lastActive = null;

  // Funciones abrir/cerrar
  function openModal({ image, subtitle, title, text }) {
    // Rellenar contenido (si falta, esconder elementos)
    if (image) {
      imgEl.src = image;
      imgEl.alt = title ? title : 'Imagen del proyecto';
      modalWindow.classList.remove('no-image');
      imgEl.style.display = '';
    } else {
      imgEl.src = '';
      imgEl.style.display = 'none';
      modalWindow.classList.add('no-image');
    }

    subtitleEl.textContent = subtitle || '';
    titleEl.textContent = title || '';
    // Soportar texto con saltos de línea o html básico: si viene con <br> o <p>
    textEl.innerHTML = text ? text : '';

    overlay.style.display = 'flex';
    overlay.setAttribute('aria-hidden', 'false');

    // guardar elemento que tenía foco y dar foco a cerrar
    lastActive = document.activeElement;
    closeBtn.focus();

    // bloquear scroll del body
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden', 'true');

    // restaurar focus
    if (lastActive && typeof lastActive.focus === 'function') lastActive.focus();
    lastActive = null;

    // restaurar scroll
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  // Eventos cierre
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal(); // clic fuera de la ventana
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.style.display !== 'none') closeModal();
  });

  // Funcion que extrae contenido a mostrar a partir del project-block
  function extractContentFromBlock(block) {
    // Buscamos elementos dentro del mismo .project-block (o ancestros)
    const mediaImg = block.querySelector('.project-block__media .project-block__img') ||
                     block.querySelector('.project-block__img') || null;
    const image = mediaImg ? (mediaImg.src || mediaImg.getAttribute('data-src') || null) : null;

    const subtitleElLocal = block.querySelector('.project-block__subtitle');
    const titleElLocal = block.querySelector('.project-block__title__link') || block.querySelector('.project-block__title');
    const textElLocal = block.querySelector('.project-block__text');

    const subtitle = subtitleElLocal ? subtitleElLocal.textContent.trim() : '';
    const title = titleElLocal ? titleElLocal.textContent.trim() : '';
    // Para el texto, preservamos <br> y etiquetas internas si existen
    const text = textElLocal ? textElLocal.innerHTML.trim() : '';

    return { image, subtitle, title, text };
  }

  // Atachar event listeners a cada .project-block__link (delegación por seguridad)
  function attachListeners() {
    // Seleccionamos enlaces/btns dentro de bloques de proyecto
    const links = document.querySelectorAll('.project-block__link');

    links.forEach(link => {
      // Si ya tiene data-modal-bound, no volver a enlazar
      if (link.dataset.modalBound) return;
      link.dataset.modalBound = '1';

      link.addEventListener('click', function (ev) {
        ev.preventDefault();

        // Encontrar el bloque contenedor más cercano (.project-block)
        const block = link.closest('.project-block') || link.parentElement || document.body;
        const data = extractContentFromBlock(block);

        // Si el enlace tiene contenido extra en data-*, permitirlo
        if (link.dataset.modalImage) data.image = link.dataset.modalImage;
        if (link.dataset.modalTitle) data.title = link.dataset.modalTitle;
        if (link.dataset.modalSubtitle) data.subtitle = link.dataset.modalSubtitle;
        if (link.dataset.modalText) data.text = link.dataset.modalText;

        openModal(data);
      });
    });
  }

  // Ejecutar inicialmente y también observar DOM por si se añaden items dinámicos
  attachListeners();

  // Observador para nuevos elementos si tu slider/inserta items después
  const observer = new MutationObserver(function () {
    attachListeners();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Exponer para depuración si se requiere
  window.__projectModal = { openModal, closeModal };
})();
