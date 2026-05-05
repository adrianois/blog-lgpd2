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

// Newsletter form com validação aprimorada e rate limiting
const forms = document.querySelectorAll('.newsletter-form');

// Rate limiting: máximo 3 submissões por hora por sessão
const SUBMISSION_LIMIT = 3;
const TIME_WINDOW = 60 * 60 * 1000; // 1 hora em ms
const submissionHistory = JSON.parse(localStorage.getItem('newsletter_submissions') || '[]');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type=email]');
    const btn = form.querySelector('button');

    if (!input || !btn) return;

    // Limpar mensagens de erro anteriores
    const existingError = form.querySelector('.form-error');
    if (existingError) existingError.remove();

    // Rate limiting check
    const now = Date.now();
    const recentSubmissions = submissionHistory.filter(time => now - time < TIME_WINDOW);

    if (recentSubmissions.length >= SUBMISSION_LIMIT) {
      showFormError(form, 'Muitas tentativas. Tente novamente em uma hora.');
      return;
    }

    // Validar email
    const email = input.value.trim();
    if (!email) {
      showFormError(form, 'Por favor, digite seu email.');
      return;
    }

    // Validação básica de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormError(form, 'Por favor, digite um email válido.');
      return;
    }

    // Verificar comprimento razoável
    if (email.length > 254) {
      showFormError(form, 'Email muito longo.');
      return;
    }

    // Registrar submissão para rate limiting
    recentSubmissions.push(now);
    localStorage.setItem('newsletter_submissions', JSON.stringify(recentSubmissions));

    // Simular envio (em produção, isso seria uma chamada real para API)
    btn.textContent = '✅ Inscrito!';
    btn.disabled = true;
    input.disabled = true;

    // Reset após 3 segundos
    setTimeout(() => {
      btn.textContent = 'Quero receber';
      btn.disabled = false;
      input.disabled = false;
      input.value = '';
    }, 3000);
  });
});

// Função auxiliar para mostrar erros de formulário
function showFormError(form, message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.textContent = message;
  errorDiv.style.color = '#e74c3c';
  errorDiv.style.fontSize = '0.875rem';
  errorDiv.style.marginTop = '0.5rem';

  form.appendChild(errorDiv);

  // Remover erro após 5 segundos
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove();
    }
  }, 5000);
}

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
