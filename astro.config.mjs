// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/*
 * Deployment target.
 *
 * GitHub Pages serves a "project page" at https://<user>.github.io/<repo>/,
 * so Astro needs both the origin (`site`) and the sub-path (`base`).
 *
 * When a custom domain is configured in the repository settings
 * (Settings -> Pages -> Custom domain) switch to:
 *   site: 'https://your-domain.pl',
 *   base: '/',
 * `site` drives the canonical URL, Open Graph URLs, robots.txt and the sitemap,
 * so it must match the address real visitors use.
 */
export default defineConfig({
  site: 'https://monikawolinska.com',
  base: '/',
  // Makes `import.meta.env.BASE_URL` always end with "/" and keeps one
  // canonical form of the URL in the sitemap.
  trailingSlash: 'always',

  integrations: [sitemap()],

  // Cormorant Garamond is downloaded at build time and served from this site
  // (no runtime requests to Google). `latin-ext` is required for Polish diacritics.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-serif',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
