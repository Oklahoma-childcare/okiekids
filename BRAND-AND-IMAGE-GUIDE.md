# CHANGE LOGO OR PHOTOS — 2-MINUTE GUIDE

## Replace the logo without editing React code

1. Open the `public/branding` folder.
2. Delete or overwrite `logo.png` with your own approved square PNG image.
3. Keep its filename **logo.png** and the same folder.
4. Run `npm run build`, commit your changes, and redeploy.

The header, footer and browser favicon use this same file automatically. The included OK badge is an original placeholder. It is not a copy of the academy's actual logo. No authentic original logo could be verified from the public sources reviewed.

## Replace site photographs

Option A — use any publicly accessible image URL you are licensed to use:
1. Open `src/config/images.ts`.
2. Find the `hero` object and change its `src: 'https://...'` to your new URL.
3. Change `alt`, `credit`, `sourcePage` when appropriate.
4. Save and run `npm run build`.

Option B — use your own image saved in the project:
1. Place a picture named `new-hero.jpg` in `public/images/`.
2. Open `src/config/images.ts` and change `hero.src` to `/images/new-hero.jpg`.
3. Save and rebuild. Do the same for `infants`, `toddlers`, `preschool`, `schoolage`, `story`, `play`, `secondary` and `room`.

**Important:** The bundled Pexels links are examples only, not photos taken at Okie Kids. Never publish identifiable children's photos without the necessary permission.

## Change Facebook, Instagram or other profiles

Open `src/config/site.ts` and change the `instagram` or `facebook` URL. To add a YouTube, TikTok or Pinterest profile, paste a confirmed public link into that field. Leave unverified platforms as empty strings; the links are automatically omitted.

## Contact details and SEO

Use `src/config/site.ts` for phone, email, address, hours, license and name.
Use `src/config/seo.ts` for per-page SEO titles/descriptions.
Use `PUBLIC_SITE_APPROVED=true` plus `PUBLIC_SITE_URL=https://...` only after authorized publication.
