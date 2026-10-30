// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger) burger.addEventListener('click', () => menu.classList.toggle('open'));

// Highlight current page
const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.menu a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
