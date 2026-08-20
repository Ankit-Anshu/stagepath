// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const [githubOwner, githubRepo] = (process.env.GITHUB_REPOSITORY ?? '/').split('/');
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' && Boolean(githubOwner && githubRepo);
const isUserSite = githubRepo?.toLowerCase() === `${githubOwner}.github.io`.toLowerCase();

// https://astro.build/config
export default defineConfig({
  site: isGithubPages ? `https://${githubOwner}.github.io` : undefined,
  base: isGithubPages && !isUserSite ? `/${githubRepo}` : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
