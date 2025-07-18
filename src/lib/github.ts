import { Project, GitHubUser } from '@/types';

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'Gianpierre-dev';

export async function getGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${USERNAME}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Revalidar cada hora
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub user');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

export async function getGitHubRepos(): Promise<Project[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${USERNAME}/repos?sort=updated&direction=desc&per_page=50`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 } // Revalidar cada hora
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const repos = await response.json();
    
    // Filtrar repositorios públicos y con descripción
    return repos
      .filter((repo: any) => !repo.private && repo.description && !repo.fork)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics || [],
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        private: repo.private,
      }))
      .slice(0, 6); // Mostrar solo los 6 más recientes
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

export async function getGitHubStats() {
  try {
    const user = await getGitHubUser();
    const repos = await getGitHubRepos();

    if (!user) return null;

    // Calcular estadísticas
    const languages = repos.reduce((acc: Record<string, number>, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      following: user.following,
      totalStars,
      totalForks,
      languages,
      mostUsedLanguage: Object.keys(languages).reduce((a, b) => 
        languages[a] > languages[b] ? a : b, ''
      ),
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
} 