# Okie Kids Learning Academy · Sand Springs, Oklahoma

Responsive six-page React + TypeScript + Vite website, with server-generated crawlable HTML per page. Different look and color system from previous projects, configured for Vercel and Cloudflare Pages. There is **no static-preview folder**.

## Start in VS Code

```bash
npm install
npm run dev
```

Open the address Vite prints (usually http://localhost:5173).

## Production

```bash
npm run build
```

Vercel: Connect the GitHub repo, framework Vite, build command `npm run build`, output directory `dist`. Cloudflare Pages: same command/directory. The generated pages are regular HTML entrypoints (`/`, `/programs/`, `/about/`, `/parents/`, `/faq/`, `/contact/`), so deep links do not require a catch-all SPA rewrite. If Vercel does not pick up the latest edit, check the Git commit shown in its build log. Each commit has a unique hash. Run `npm run typecheck` locally for an additional strict TypeScript check. To minimize deployment failures caused solely by type-check diagnostics, the production build uses Vite after server-side page generation.

## Change logo and images quickly

**Logo (no code required):** Replace `public/branding/logo.png` with a new PNG **using the exact same name**. This replaces it everywhere, including the favicon. The included logo is a **temporary original design**, not a reproduction of Okie Kids' actual logo.

**Photos (one central file):** Open `src/config/images.ts`. Replace the `src` URL for `hero`, `infants`, etc., with a new image URL. To use a local file, put it under `public/images/` and set the corresponding `src` to `/images/my-photo.jpg`. All stock photos are illustrative Pexels images, not confirmed pictures of the actual facility. Use approved photos before publishing.

**Social accounts, phone, hours, address:** Edit `src/config/site.ts`. Instagram and Facebook are prefilled from the supplied Google Sheet; other fields start blank to avoid displaying unverified accounts. Adding a URL in those fields automatically creates its icon/link in the footer and Contact page, where the shared social component appears.

**Page copy:** `src/App.tsx`. **SEO titles/descriptions:** `src/config/seo.ts`. **Colors/style:** `src/styles.css`.

See `BRAND-AND-IMAGE-GUIDE.md` for a step-by-step example.

## Publishing and SEO

By default this concept site sets `robots` to `noindex,nofollow` and `robots.txt` to `Disallow: /`. This avoids treating an unapproved concept as the academy's official public website. To enable indexing when authorized, configure these production build environment variables:

```
PUBLIC_SITE_APPROVED=true
PUBLIC_SITE_URL=https://your-approved-domain.com
```

Rebuild after changing those variables. The generator then adds SEO canonicals, organization JSON-LD, and a sitemap, and enables crawlability. The domain must be yours/authorized and the center's contact/branding/content should be approved before making the website public.

## Data provenance

Primary source: https://ccl.dhs.ok.gov/providers/K830058381 (Oklahoma Human Services Child Care Locator); phone, director, address, listed age ranges, license, rating and hours. Social account URLs were provided in the user's spreadsheet; access/ownership could not be independently checked because Meta pages were not available to the research crawler.

An online Google Business profile gave different weekday hours (7 AM–6 PM) and a different phone number, so this website favors the **state child care record**, which lists 7:30 AM–5:30 PM and (661) 675-7614. Verify details with the organization before publishing.
