// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

// Close mobile nav when a link is clicked
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    mainNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

// Animate stat numbers when they scroll into view
const statNumbers = document.querySelectorAll('.stat-num');

function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(progress * target);
    el.textContent = value.toLocaleString();
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target.toLocaleString();
    }
  }
  requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => observer.observe(el));