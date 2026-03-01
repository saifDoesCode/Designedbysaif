// Subtle nav shadow on scroll
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 1px 0 rgba(0,0,0,0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
}, { passive: true });
