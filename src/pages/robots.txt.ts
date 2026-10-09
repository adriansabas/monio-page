import type { APIRoute } from 'astro';

// robots.txt is generated at build time so the sitemap URL always follows
// the `site`/`base` values from astro.config.mjs.
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];

  if (site) {
    const sitemapUrl = new URL(`${import.meta.env.BASE_URL}sitemap-index.xml`, site);
    lines.push('', `Sitemap: ${sitemapUrl.href}`);
  }

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
