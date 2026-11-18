import { GITHUB_API, GITHUB_USERNAME } from "./config.js";

export async function fetchGitHubData() {
  const [userResponse, reposResponse] = await Promise.all([
    fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`),
    fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated&type=owner`,
    ),
  ]);
  if (!userResponse.ok || !reposResponse.ok)
    throw new Error("Não foi possível acessar a API do GitHub.");
  const [user, repos] = await Promise.all([
    userResponse.json(),
    reposResponse.json(),
  ]);
  return {
    user,
    repos: repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({ ...repo, category: categorizeRepository(repo) })),
  };
}

export function categorizeRepository(repo) {
  const text =
    `${repo.name} ${repo.description || ""} ${(repo.topics || []).join(" ")} ${repo.language || ""}`.toLowerCase();
  if (/logica|algorit|estrutura.?de.?dados|exercicio|exercício/.test(text))
    return "logic";
  if (/api|back.?end|backend|servidor|server|node|express/.test(text))
    return "backend";
  if (
    /front.?end|frontend|html|css|interface|formulario|formulário|e.?classes/.test(
      text,
    )
  )
    return "frontend";
  if (repo.language === "HTML" || repo.language === "CSS") return "frontend";
  if (repo.language === "JavaScript" && /api|biblioteca/.test(text))
    return "backend";
  return "other";
}
