// Blog LGPD — script.js

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Header scroll shadow
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});

// Newsletter form
const forms = document.querySelectorAll('.newsletter-form');
forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type=email]');
    if (input && input.value) {
      const btn = form.querySelector('button');
      if (btn) {
        btn.textContent = '✅ Inscrito!';
        btn.disabled = true;
        setTimeout(() => {
          btn.textContent = 'Quero receber';
          btn.disabled = false;
          input.value = '';
        }, 3000);
      }
    }
  });
});

// Animate cards on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.artigo-card, .cat-card, .mini-card, .download-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
