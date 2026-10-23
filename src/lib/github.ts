import type { MetricasRepo } from '@/data/proyectos';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'Gianpierre-dev';

interface GitHubApiRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  // Último push de código. updated_at también cambia con stars o ediciones de
  // la descripción, así que no refleja actividad real.
  pushed_at: string;
  private: boolean;
  fork: boolean;
}

// Sin token, la API permite 60 req/h por IP (compartida en Railway). Con
// GITHUB_TOKEN (opcional, sin permisos: solo lee datos públicos) sube a 5000.
function construirHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  return {
    Accept: 'application/vnd.github.v3+json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function getGitHubRepos(): Promise<GitHubApiRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${USERNAME}/repos?sort=pushed&direction=desc&per_page=100`,
      {
        headers: construirHeaders(),
        next: { revalidate: 3600 }, // Revalidar cada hora
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub respondió ${response.status}`);
    }

    const repos: GitHubApiRepo[] = await response.json();
    return repos.filter((repo) => !repo.private && !repo.fork);
  } catch (error) {
    console.error('Error al obtener los repositorios de GitHub:', error);
    return [];
  }
}

// Métricas (stars, forks, último push) de los repos indicados, keyed por nombre.
// Se ejecuta en el servidor: una sola llamada a la API (cacheada 1 h) en lugar
// de una llamada por repo desde cada navegador.
export async function getRepoMetrics(repoNames: string[]): Promise<Record<string, MetricasRepo>> {
  const buscados = new Set(repoNames.filter(Boolean));
  if (buscados.size === 0) return {};

  const repos = await getGitHubRepos();

  return repos.reduce<Record<string, MetricasRepo>>((acc, repo) => {
    if (buscados.has(repo.name)) {
      acc[repo.name] = {
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        lastUpdate: repo.pushed_at,
      };
    }
    return acc;
  }, {});
}
