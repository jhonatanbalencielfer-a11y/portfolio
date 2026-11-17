export function setupNavigation() {
  const topbar = document.getElementById('topbar');
  const progress = document.getElementById('scrollProgress');
  const backTop = document.getElementById('backTop');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.textContent = open ? '×' : '☰';
  });
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  }));
  window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.width = `${scrollable > 0 ? (scrollY / scrollable) * 100 : 0}%`;
    topbar?.classList.toggle('scrolled', scrollY > 20);
    backTop?.classList.toggle('visible', scrollY > 600);
  }, { passive: true });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) navLinks?.querySelectorAll('a[href^="#"]').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }), { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));
  }
}
