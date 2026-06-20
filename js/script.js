/* =========================================================
   DECANTO — script.js
   Navegación móvil, reveal on scroll, filtros de catálogo,
   formularios (demo sin backend) y año dinámico en footer.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menú móvil ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links){
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const isOpen = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.textContent = isOpen ? '✕' : '☰';
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  /* ---------- Año dinámico en footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Filtros de catálogo ---------- */
  const chips = document.querySelectorAll('.chip');
  const products = document.querySelectorAll('.product-card');
  if (chips.length && products.length){
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.dataset.filter;
        products.forEach(card => {
          const match = filter === 'todos' || card.dataset.category === filter;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ---------- Formulario de contacto (demo) ---------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm){
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      if (status){
        status.textContent = 'Gracias. Tu mensaje fue enviado — el equipo de DeCanto te contactará pronto.';
        status.style.color = '#355C7D';
      }
      contactForm.reset();
    });
  }

  /* ---------- Newsletter (demo) ---------- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm){
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('newsletter-status');
      if (status) status.textContent = 'Gracias por suscribirte a DeCanto.';
      newsletterForm.reset();
    });
  }

  /* ---------- Marcar enlace activo en navegación ---------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

});
