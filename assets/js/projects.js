import { CATEGORY_INFO, getRepositoryDescription } from './project-data.js';

let repositories = [];
let activeFilter = 'all';
const grid = document.getElementById('projectsGrid');
const count = document.getElementById('repoCount');

function escapeHTML(value = '') {
  return String(value).replace(/[&<>\"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '\"':'&quot;', "'":'&#39;' }[char]));
}

function renderProjects() {
  const filtered = repositories.filter(repo => activeFilter === 'all' || repo.category === activeFilter);
  count.textContent = `${filtered.length} PROJETO${filtered.length === 1 ? '' : 'S'} EXIBIDO${filtered.length === 1 ? '' : 'S'}`;
  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">Nenhum projeto encontrado nesta categoria.</div>';
    return;
  }
  grid.innerHTML = filtered.map((repo, index) => {
    const info = CATEGORY_INFO[repo.category];
    const language = repo.language || info.label;
    return `<article class="project-card reveal visible">
      <div class="project-top"><div class="project-icon">${info.icon}</div><span class="project-index">${String(index + 1).padStart(2, '0')} / REPO</span></div>
      <h3>${escapeHTML(repo.name)}</h3><p>${escapeHTML(getRepositoryDescription(repo))}</p>
      <div class="project-bottom"><span class="tech">${escapeHTML(language)}</span><a class="project-link" href="${escapeHTML(repo.html_url)}" target="_blank" rel="noopener">Ver projeto <span>↗</span></a></div>
    </article>`;
  }).join('');
}

export function setupProjectFilters() {
  document.getElementById('filters')?.addEventListener('click', event => {
    const button = event.target.closest('[data-filter]');
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
    renderProjects();
  });
}

export function displayRepositories(repos) { repositories = repos; renderProjects(); }
export function displayProjectError(username) {
  grid.innerHTML = `<div class="empty-state">Não foi possível carregar os repositórios agora.<br><br><a class="project-link" href="https://github.com/${username}?tab=repositories" target="_blank" rel="noopener">Acessar projetos diretamente no GitHub ↗</a></div>`;
  count.textContent = 'GITHUB INDISPONÍVEL';
}
