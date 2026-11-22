import React from 'react';
import { renderToString } from 'react-dom/server';
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { App } from '../src/App';
import { metadata, routes, type Route } from '../src/config/seo';
import { site } from '../src/config/site';

const root = resolve(process.cwd());
const approved = process.env.PUBLIC_SITE_APPROVED === 'true';
const rawBase = (process.env.PUBLIC_SITE_URL ?? '').trim().replace(/\/+$/, '');
const validUrl = /^https:\/\/[a-z\d.-]+(?::\d+)?$/i.test(rawBase);
const indexable = approved && validUrl;
const base = indexable ? rawBase : '';
const text = (input: string) => input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const routeHref = (route: Route) => route === '/' ? '/' : `${route}/`;
const json = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');

function documentFor(route: Route) {
  const meta = metadata[route];
  const href = routeHref(route);
  const canonical = base ? `${base}${href}` : '';
  const markup = renderToString(<App route={route} />);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    name: site.name,
    url: base,
    description: metadata['/'].description,
    telephone: site.phone,
    email: site.email,
    image: `${base}/branding/og-card.png`,
    address: { '@type':'PostalAddress', streetAddress: site.addressLine, addressLocality: site.city, addressRegion: site.state, postalCode: site.zip, addressCountry:'US' },
    openingHoursSpecification: [ { '@type':'OpeningHoursSpecification', dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday'], opens:'07:30', closes:'17:30' } ],
    sameAs: [site.instagram,site.facebook,site.youtube,site.tiktok,site.pinterest].filter(Boolean),
  };
  return `<!doctype html>
<html lang="en"><head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#1c5660" />
  <meta name="robots" content="${indexable ? 'index,follow,max-image-preview:large' : 'noindex,nofollow'}" />
  <title>${text(meta.title)}</title>
  <meta name="description" content="${text(meta.description)}" />
  ${canonical ? `<link rel="canonical" href="${text(canonical)}" />` : ''}
  <link rel="icon" type="image/png" href="/branding/logo.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${text(meta.title)}" />
  <meta property="og:description" content="${text(meta.description)}" />
  ${canonical ? `<meta property="og:url" content="${text(canonical)}" /><meta property="og:image" content="${text(base)}/branding/og-card.png" />` : ''}
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="summary_large_image" />
  ${indexable ? `<script type="application/ld+json">${json(ld)}</script>` : ''}
  <script type="module" src="/src/main.tsx"></script>
</head><body><div id="root" data-route="${text(route)}">${markup}</div></body></html>`;
}

for (const route of routes) {
  const directory = resolve(root, route === '/' ? '.' : route.slice(1));
  await mkdir(directory, {recursive:true});
  await writeFile(resolve(directory, 'index.html'), documentFor(route), 'utf8');
}

await mkdir(resolve(root,'public'), {recursive:true});
await writeFile(resolve(root,'public','robots.txt'), indexable ? `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n', 'utf8');
if (indexable) {
  const entries = routes.map(route => `<url><loc>${text(`${base}${routeHref(route)}`)}</loc></url>`).join('');
  await writeFile(resolve(root,'public','sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, 'utf8');
} else {
  await rm(resolve(root,'public','sitemap.xml'), {force: true});
}
console.log(`Generated ${routes.length} SEO-ready React HTML pages. Indexing: ${indexable ? 'ENABLED (authorized production)' : 'DISABLED (review mode)'}.`);
