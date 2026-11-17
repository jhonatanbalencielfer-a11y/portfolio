import { GITHUB_USERNAME } from './config.js';
import { fetchGitHubData } from './github-api.js';
import { renderProfile } from './profile.js';
import { displayRepositories, displayProjectError, setupProjectFilters } from './projects.js';
import { setupRevealAnimations, setupCursor } from './animations.js';
import { setupNavigation } from './navigation.js';

async function initializePortfolio() {
  document.getElementById('year').textContent = new Date().getFullYear();
  setupNavigation();
  setupRevealAnimations();
  setupCursor();
  setupProjectFilters();
  try {
    const { user, repos } = await fetchGitHubData();
    renderProfile(user);
    displayRepositories(repos);
  } catch (error) {
    console.error(error);
    displayProjectError(GITHUB_USERNAME);
    document.getElementById('repoStat').textContent = '—';
  }
}

document.addEventListener('DOMContentLoaded', initializePortfolio);
