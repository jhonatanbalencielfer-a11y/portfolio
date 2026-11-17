export function renderProfile(user) {
  const avatar = document.getElementById('avatar');
  avatar.src = user.avatar_url;
  avatar.alt = `Foto de perfil de ${user.name || user.login}`;
  document.getElementById('profileName').textContent = user.name || user.login;
  document.getElementById('profileBio').textContent = user.bio || 'Desenvolvedor em formação, interessado em tecnologia e criação de soluções digitais.';
  document.getElementById('repoStat').textContent = user.public_repos;
}
