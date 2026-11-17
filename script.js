
const menuBtn = document.getElementById('menuBtn');
const navlinks = document.getElementById('navlinks');

// Abrir e fechar o menu mobile
menuBtn.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');

    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '✕' : '☰';
});

// Fechar o menu ao clicar em um link
navlinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navlinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
    });
});

// Filtros dos projetos
document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {

        document.querySelectorAll('.filter').forEach(b => {
            b.classList.remove('active');
        });

        button.classList.add('active');

        const category = button.dataset.filter;

        document.querySelectorAll('.project').forEach(card => {
            card.style.display =
                category === 'all' || card.dataset.category === category
                    ? 'flex'
                    : 'none';
        });
    });
});

// Animação dos elementos ao aparecerem na tela
const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    }),
    { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Botão para voltar ao topo
const backtop = document.getElementById('backtop');

window.addEventListener('scroll', () => {
    backtop.classList.toggle('show', window.scrollY > 500);
});

backtop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Atualizar automaticamente o ano do rodapé
document.getElementById('year').textContent = new Date().getFullYear();
