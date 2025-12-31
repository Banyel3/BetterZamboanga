# Repository Summary — Better Zamboana (fork target)

> This document summarizes the repository layout, technology, key files, and a localization-focused checklist to fork and adapt the site for Zamboanga City. Use this as the single source of truth for developers and content editors working on the localization.

## Executive summary

This repository is a static civic portal built with plain HTML, CSS and JavaScript and driven by local JSON data files. The site includes page templates, service pages, government/offices pages, legislative documents, statistics visualizations, and transparency/budget content. Localization for Zamboanga City primarily involves updating textual copy and metadata, replacing data files under `/data`, swapping brand assets under `assets/images`, and adjusting small JavaScript widgets that contain hard-coded place references.

Key risks are external integrations (weather/map APIs, payment/Filipizen links), dataset provenance and licensing, and build convenience (the included `build.sh` is bash-based and may require WSL/Git Bash on Windows).

## Inventory (high level)

- Top-level notable files/folders: `index.html`, `404.html`, `500.html`, `build.sh`, `package.json`, `sitemap.xml`, `robots.txt`, `dist/`, `assets/`, `data/`, `service-details/`, `services/`, `government/`, `statistics/`, `budget/`, `news/`, `docs/`.
- Content folders to inspect for localization: `service-details/`, `services/`, `government/`, `statistics/`, `budget/`, `news/`, `contact/`, `privacy/`, `terms/`, `accessibility/`.
- Frequent file types: HTML (site templates/pages), CSS (styles in `assets/css/`), JS (client scripts in `assets/js/`), JSON (structured data in `data/`), images (logo, banners in `assets/images/`).

## Tech stack & build

- Static site using HTML/CSS/JS with local JSON data files in `data/`.
- Build tooling: `build.sh` (root) plus convenience `npm` scripts in `package.json` (e.g., `npm run build`, `npm run dev`, `npm run serve:dist`). Dev dependencies include `clean-css-cli`, `html-minifier-terser`, and `terser`.
- Output: `dist/` contains built site copies. Local development can use `python -m http.server` via `npm` scripts. On Windows, use WSL/Git Bash for `build.sh` or adapt scripts.

## Main entry points & pages to localize

Priority pages containing human-visible copy and meta tags (examples):

- [index.html](index.html)
- [services/index.html](services/index.html) and all files under `services/` (e.g., `services/agriculture.html`, `services/health.html`)
- `service-details/` (detailed service pages such as `service-details/birth-certificate.html`)
- [government/index.html](government/index.html) and [government/officials.html](government/officials.html)
- [statistics/index.html](statistics/index.html)
- [budget/index.html](budget/index.html)
- [news/index.html](news/index.html)
- [contact/index.html](contact/index.html)
- [privacy/index.html](privacy/index.html), [terms/index.html](terms/index.html), [accessibility/index.html](accessibility/index.html)
- [sitemap/index.html](sitemap/index.html) and `sitemap.xml`

Each of these pages contains titles, descriptions, and content that must be updated for the new locality.

## Data files (important for localization)

Files in `data/` that drive site content:

- `data/officials.json` — elected officials and staff (used by `government/officials.html` and `assets/js/officials.js`).
- `data/services.json` — catalogue of services and office contact points (used by services pages and validators).
- `data/dpwh-projects.json` — infrastructure projects (used by transparency/project pages).
- `data/competitive-index.json` — statistics used by charts on statistics pages.
- `data/ordinances.json` and `data/resolutions.json` — legislative records used by the legislative pages.

High-priority replacements: `officials.json`, `services.json`, `dpwh-projects.json`, and `competitive-index.json` (if you have local statistics). `ordinances.json` and `resolutions.json` are medium priority.

## Static assets & branding

- Logos and favicons: `assets/images/logo/` (several SVG/ICO variants). Replace with Zamboanga City approved artwork.
- OpenGraph / share image: `assets/images/banners/opengraph.png` — update for branding.
- Stylesheets: `assets/css/style.css`, `assets/css/responsive.css`, `assets/css/accessibility.css`, `assets/css/footer.css`, `assets/css/statistics.css`, `assets/css/transparency*.css` — these control look & responsive behavior.

When replacing images, keep file names consistent or update references across templates.

## JavaScript overview

Key JS files (in `assets/js/`) and responsibilities:

- `main.js` — UI behaviors (menu, accordions, header/footer interactions).
- `search.js` — search UI and indexing logic.
- `services-validator.js` — validates structure of `data/services.json` (useful after editing services data).
- `officials.js` — loads and renders `data/officials.json`.
- `dpwh-projects.js` — renders `data/dpwh-projects.json`.
- `statistics*.js` — render charts for the competitive index and other metrics.
- `translations.js` — handles client-side language switching.
- `weather-map.js` and `info-bar.js` — weather/infobar widgets (may include place-specific parameters).

Search the repo for any hard-coded occurrences of the current city name (e.g., “Solano”, “Better Solano”, or `bettersolano.org`) and for place-specific strings in JS (labels, aria text, API calls). Replace or parameterize these.

## SEO, accessibility & legal

- `robots.txt` and `sitemap.xml` exist and currently reference the original domain; they must be updated if you host under a new domain.
- Accessibility resources are under `accessibility/` and the site includes language toggle support; verify translations and `data-i18n` attributes after content changes.
- Legal and attribution content is in `terms/` and `privacy/`; ensure license attributions (MIT, CC BY) and volunteer contact information are updated appropriately.

## Localization checklist (concrete actions)

High-priority

- Create a working branch (e.g., `zamboanga-fork`).
- Global find-and-replace of original city name and brand (`bettersolano.org`, “Solano”, “Better Solano”) — carefully review context before committing.
- Replace `data/officials.json` with Zamboanga officials and add official portraits to `assets/images/officials/`.
- Replace `data/services.json` to reflect local offices, services, and contact details.
- Replace `data/dpwh-projects.json` and `data/competitive-index.json` with local datasets or disable those sections if unavailable.
- Replace logo and OG images in `assets/images/`.
- Update `sitemap.xml` and `robots.txt` for the new site domain.

Medium-priority

- Update hard-coded strings in `assets/js/` (e.g., in `officials.js`, `info-bar.js`, `weather-map.js`).
- Review and update external links (Filipizen, local payment portals, solano.gov.ph references).
- Update translations and local language support (add Chavacano/Tausug labels if desired).

Low-priority

- Update `version.json`, README, and contributor docs to reflect the fork.
- Add or adjust CI/deployment scripts if hosting differs.

## Risks & unknowns

- External integrations (weather, maps, payment systems) may use place-specific API keys or endpoints.
- Data provenance/licensing: official datasets (DPWH, PSA, BLGF, CMCI) may have license or attribution requirements.
- Images: ensure rights for logos, banners, and official portraits.
- Analytics/tracking: production tracking IDs should be replaced to avoid mixing analytics data.
- `build.sh` is bash-based — Windows developers should use WSL/Git Bash.

## Suggested minimal workflow (first iteration)

1. Create branch `zamboanga-fork` and update `README.md` to mark the fork intent (1 hour).
2. Replace brand assets and global textual references (2–6 hours).
3. Replace core data JSONs (`officials.json`, `services.json`) and validate with `assets/js/services-validator.js` (8–24 hours depending on data readiness).
4. Update JS widgets and hard-coded strings (2–6 hours).
5. QA: local serve (`npm run dev` or `npm run serve:dist`), cross-browser/mobile verification and accessibility checks (4–12 hours).
6. Update sitemap/robots and deploy (1–3 hours).

Total rough estimate: 16–60 person-hours for an initial, publishable fork (varies based on dataset availability and review cycles).

## Files & paths to inspect first (developer checklist)

- Root & build: `package.json`, `build.sh`, `scripts/version.sh`, `dist/`
- Site templates: `index.html`, `services/index.html`, `service-details/`\*, `government/index.html`, `government/officials.html`.
- Data sources: `data/officials.json`, `data/services.json`, `data/dpwh-projects.json`, `data/competitive-index.json`, `data/ordinances.json`, `data/resolutions.json`.
- JS to edit: `assets/js/officials.js`, `assets/js/services-validator.js`, `assets/js/dpwh-projects.js`, `assets/js/weather-map.js`, `assets/js/translations.js`, `assets/js/main.js`.
- CSS: `assets/css/style.css`, `assets/css/responsive.css`, `assets/css/accessibility.css`.
- Branding assets: `assets/images/logo/`, `assets/images/banners/opengraph.png`, `assets/images/favicon*`.
- SEO/legal: `sitemap.xml`, `robots.txt`, `terms/index.html`, `privacy/index.html`, `accessibility/index.html`.

## Next recommended steps (I can perform)

- Run a repository-wide search for the current city name (e.g., “Solano”) and produce an exact file-by-file list of occurrences to update.
- Scaffold skeleton JSONs for `data/officials.json` and `data/services.json` (with correct field structure) to speed content population.
- Create a branch `zamboanga-fork` and open a PR template listing the tasks in this document.

---

Document created: `docs/repository-summary.md`

If you want, I can now run a repo-wide search for the existing city name and produce the exact file list to change next.
