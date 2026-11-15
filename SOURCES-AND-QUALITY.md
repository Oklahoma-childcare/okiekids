# Source notes and review checklist

Source of factual childcare identity and program details:
- Oklahoma Human Services: https://ccl.dhs.ok.gov/providers/K830058381
- State listing: license K830058381, 3-star program, accepting subsidy, year-round, capacity 50, Mon–Fri 7:30 AM–5:30 PM, accepts infants through school-age, director Brianna Matson, telephone (661) 675-7614, email joylynn1982@hotmail.com, address 3720 S. 113th W. Ave, Sand Springs, OK 74063.
- Reference directory: https://childcarecenter.us/provider_detail/okie-kids-learning-academy-sand-springs-ok
- Facebook and Instagram links: supplied in user's Google Sheet, not independently verified via Meta (pages inaccessible to research crawler):
  - https://www.facebook.com/people/Okie-Kids-Learning-Academy/61575676993549/
  - https://www.instagram.com/okiekidsla
- No confirmed official logo asset retrieved; the original logo was not copied. The included logo is a custom temporary monogram designed for easy replacement.
- The illustrative Pexels images are configured in `src/config/images.ts` with credit and original source links.

Quality checklist:
- [x] All source content/copy in editable config/components
- [x] Photo URLs isolated in one file, with support for local files
- [x] Logo in one swappable `public/branding/logo.png`
- [x] Social links in one config, shared sitewide
- [x] SEO metadata on all six pages, unique titles and descriptions
- [x] SSR-generated HTML content for crawlability; SEO toggle and sitemap
- [x] React-hydrated mobile navigation and native FAQ accordions
- [x] No fabricated parent reviews, tuition, or instructor claims
- [x] Contact call/email/Map links are real actions
- [x] No static-preview folder in deliverable
- [ ] Confirm authentic logo, family images and site publication authorization with organization
- [ ] Final Vercel npm build must be confirmed in the user's deployment environment if dependencies cannot be installed locally
