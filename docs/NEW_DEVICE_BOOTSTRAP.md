# Better Zamboanga - New Device Bootstrap Guide

**Repository**: BetterZamboanga (fork of BetterSolano.org)  
**Current Version**: 1.1.8  
**Branch**: page/statistics  
**Last Updated**: January 11, 2026  
**Localization Status**: Phase 2 Complete (UI/Branding 100% Done)

---

## Quick Overview

Better Zamboanga is a **static HTML/CSS/JavaScript civic portal** for Zamboanga City, forked from BetterSolano.org and fully localized for Zamboanga City branding. The repository is 100% UI-ready with all "Better Solano" references replaced with "Better Zamboanga" branding, but **still contains Solano placeholder data** marked with `TODO-ZAMBOANGA` and `__localization_note` fields awaiting replacement with actual Zamboanga City information.

This is a **volunteer-driven, open-source civic-tech project** that aggregates LGU services, government data, statistics, legislative records, and transparency information into a user-friendly web portal. The site is entirely static (no backend), driven by JSON data files in `data/`, and designed for low-cost hosting on cPanel or similar providers.

---

## Repository Structure

```
BetterZamboanga/
├── index.html                    # Homepage with hero, services grid, weather widget
├── 404.html, 403.html, 500.html  # Error pages
├── package.json                  # npm scripts and dev dependencies
├── build.sh                      # Bash build script for production minification
├── version.json                  # Version tracking (current: 1.1.8)
├── sitemap.xml, robots.txt       # SEO configuration
├── .htaccess                     # Apache config for URL rewriting, caching, GZIP
│
├── assets/
│   ├── css/                      # 9 CSS files (style.css is main)
│   │   ├── style.css             # Main stylesheet with CSS variables & color palette
│   │   ├── responsive.css        # Mobile/tablet breakpoints
│   │   ├── accessibility.css     # WCAG compliance styles
│   │   ├── footer.css            # Footer-specific styles
│   │   ├── statistics.css        # Chart/dashboard styling
│   │   ├── legislative.css       # Ordinances/resolutions page styles
│   │   ├── transparency*.css     # Budget transparency pages (3 versions)
│   │   └── legal.css             # Terms/privacy page styles
│   │
│   ├── js/                       # 18 JavaScript files
│   │   ├── main.js               # Core UI behaviors (menu, accordions, modals)
│   │   ├── search.js             # Site search indexing and UI
│   │   ├── translations.js       # Multilingual support (English/Tagalog/Chavacano)
│   │   ├── officials.js          # Renders data/officials.json
│   │   ├── dpwh-projects.js      # Renders data/dpwh-projects.json
│   │   ├── ordinances.js         # Renders data/ordinances.json
│   │   ├── resolutions.js        # Renders data/resolutions.json
│   │   ├── statistics*.js        # Chart rendering (2 files: old + new)
│   │   ├── transparency*.js      # Budget visualizations (3 versions)
│   │   ├── weather-map.js        # Weather API integration (Open-Meteo)
│   │   ├── info-bar.js           # Top notification bar widget
│   │   ├── services-validator.js # JSON schema validator for services.json
│   │   ├── validation-utils.js   # Shared validation utilities
│   │   ├── sre-formatter.js      # Statement of Receipts/Expenses formatter
│   │   └── version.js            # Version display widget
│   │
│   └── images/
│       ├── logo/                 # Logo files (SVG, PNG, ICO formats)
│       └── banners/              # Banner images, OpenGraph images
│
├── data/                         # 6 JSON data files (ALL have __localization_note fields)
│   ├── officials.json            # Elected officials and department heads
│   ├── services.json             # LGU services catalog (1012 lines)
│   ├── dpwh-projects.json        # Infrastructure projects (716 lines)
│   ├── competitive-index.json    # CMCI statistics (267 lines)
│   ├── ordinances.json           # Legislative ordinances (31 lines)
│   └── resolutions.json          # Legislative resolutions (206 lines)
│
├── services/                     # 10 service category landing pages
│   ├── index.html                # Services directory hub
│   ├── agriculture.html          # Agriculture services
│   ├── business.html             # Business permits and licensing
│   ├── certificates.html         # Civil registry certificates
│   ├── education.html            # Education services
│   ├── environment.html          # Environmental services
│   ├── health.html               # Health services
│   ├── infrastructure.html       # Public works
│   ├── public-safety.html        # Police, fire, disaster response
│   ├── social-services.html      # MSWDO programs
│   └── tax-payments.html         # Treasury services
│
├── service-details/              # 22 detailed service pages
│   ├── birth-certificate.html
│   ├── marriage-certificate.html
│   ├── death-certificate.html
│   ├── business-permits-licensing.html
│   ├── municipal-*.html          # Office-specific pages (13 files)
│   ├── mswdo*.html               # Social welfare services (2 files)
│   └── seedo-*.html              # SEEDO market/slaughterhouse (2 files)
│
├── government/                   # 2 government structure pages
│   ├── index.html                # Organizational chart
│   └── officials.html            # Officials listing (uses officials.js)
│
├── legislative/                  # 3 legislative pages
│   ├── index.html                # Legislative hub
│   ├── ordinance-framework.html  # Ordinances viewer
│   └── resolution-framework.html # Resolutions viewer
│
├── statistics/
│   └── index.html                # CMCI data dashboard
│
├── budget/
│   └── index.html                # Budget transparency portal
│
├── news/
│   └── index.html                # News and announcements
│
├── contact/
│   └── index.html                # Contact form and info
│
├── faq/
│   └── index.html                # Frequently asked questions
│
├── accessibility/
│   └── index.html                # Accessibility statement
│
├── privacy/, terms/, sitemap/   # Legal and navigation pages
│
├── docs/                         # 5 technical documentation files
│   ├── repository-summary.md         # Project overview and localization checklist
│   ├── After-UI-Localization.md      # Phase 2 completion report (1106 lines)
│   ├── LOCALIZATION_PROGRESS.md      # Detailed localization tracking (318 lines)
│   ├── DATA_REPLACEMENT_GUIDE.md     # Guide for replacing Solano data
│   ├── frontend-data-map.md          # Frontend-data bindings reference
│   ├── statistics-data-requirements.md # CMCI data specs
│   ├── PHASE2_COMPLETION_REPORT.md   # Final Phase 2 report
│   └── data-mapping/             # Detailed data schemas
│
├── scripts/
│   ├── version.sh                # Semantic versioning script (bash)
│   └── phase2-bulk-localization.ps1  # PowerShell localization automation
│
└── dist/                         # Production build output (auto-generated)
```

---

## Development Setup Commands

### Prerequisites

- **Node.js** (for npm scripts and build tools)
- **Python 3** (for local dev server) - **NOTE**: On Windows, use `py` command or ensure `python3` is in PATH
- **Bash** (for `build.sh` - use Git Bash or WSL on Windows)

### Installation

```bash
# Clone repository (if not already done)
git clone <repository-url>
cd BetterZamboanga

# Install dependencies
npm install
```

### Local Development Server

```bash
# Start development server on http://localhost:8000
npm run dev
# OR
npm run serve

# Serve production build (must run build first)
npm run serve:dist
```

**Windows Note**: If `npm run dev` fails with "python3 not found", either:

- Add Python to PATH and create `python3.exe` symlink/copy
- OR modify `package.json` scripts to use `py -m http.server 8000`

### Building for Production

```bash
# Build with automatic patch version bump
npm run build

# Build with manual version control
npm run build:major      # 1.1.8 → 2.0.0
npm run build:minor      # 1.1.8 → 1.2.0
npm run build:patch      # 1.1.8 → 1.1.9 (default)

# Version management only (no build)
npm run version:major
npm run version:minor
npm run version:patch
npm run version:check    # Display current version
```

**Build Output**: `dist/` folder contains minified HTML, CSS, JS ready for deployment.

**Build Process** (from `build.sh`):

1. Auto-bump version (unless `--no-bump` flag)
2. Clean `dist/` folder
3. Copy all files (exclude node_modules, dist, .git, backups)
4. Minify HTML (html-minifier-terser)
5. Minify CSS (cleancss)
6. Minify JS (terser)

---

## Data Files & Their Roles

All JSON files in `data/` contain a top-level `__localization_note` field with `TODO-ZAMBOANGA:` instructions.

| File                       | Lines | Purpose                                                                                                                                                                                                   | Current Status                                                              |
| -------------------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **officials.json**         | 56    | Elected officials (Mayor, Vice Mayor, Councilors) and department heads. Rendered by `assets/js/officials.js` on `government/officials.html`.                                                              | ⚠️ Contains Solano officials - REPLACE with Zamboanga City officials        |
| **services.json**          | 1012  | Comprehensive services catalog with categories, fees, processing times, office names, URLs. Validated by `assets/js/services-validator.js`. Powers search functionality and service pages.                | ⚠️ Contains Solano services - REPLACE with Zamboanga City services          |
| **dpwh-projects.json**     | 716   | Infrastructure projects with costs, contractors, locations, completion status. Rendered by `assets/js/dpwh-projects.js` on transparency pages.                                                            | ⚠️ Contains 63 Solano DPWH projects - REPLACE with Zamboanga City projects  |
| **competitive-index.json** | 267   | CMCI (Cities & Municipalities Competitiveness Index) data from 2016-2024 across 4 pillars (Economic Dynamism, Government Efficiency, Infrastructure, Resiliency). Rendered by `assets/js/statistics*.js`. | ⚠️ Contains Solano CMCI data - REPLACE with Zamboanga City CMCI scores      |
| **ordinances.json**        | 31    | Legislative ordinances from Sangguniang Panlungsod with ordinance numbers, titles, session dates. Rendered by `assets/js/ordinances.js`.                                                                  | ⚠️ Contains 5 Solano ordinances - REPLACE with Zamboanga City ordinances    |
| **resolutions.json**       | 206   | Legislative resolutions from Sangguniang Panlungsod. Rendered by `assets/js/resolutions.js`.                                                                                                              | ⚠️ Contains 32 Solano resolutions - REPLACE with Zamboanga City resolutions |

**Validation**: Always run `services-validator.js` after editing `services.json` to catch schema errors before deployment.

---

## Localization Status

### Phase 2 Complete ✅ (January 3, 2026)

**What Was Done**:

- ✅ **72 files** updated (54 HTML + 18 JavaScript)
- ✅ All "Better Solano" → "Better Zamboanga" branding
- ✅ All "bettersolano.org" → "betterzamboanga.org" URLs
- ✅ All "Solano, Nueva Vizcaya" → "Zamboanga City" locations
- ✅ All "Municipality of Solano" → "City of Zamboanga"
- ✅ All "Sangguniang Bayan" → "Sangguniang Panlungsod"
- ✅ Geographic coordinates: (16.5167, 121.1833) → (6.9214, 122.0790)
- ✅ Meta tags, OG tags, structured data updated
- ✅ 34 `TODO-ZAMBOANGA` markers added in HTML/JS
- ✅ 6 `__localization_note` fields added in JSON data files

**Success Rate**: 100% (zero syntax errors introduced)

### TODO-ZAMBOANGA Markers

**Total Count**: 34 markers in HTML/JS files + 6 `__localization_note` in JSON files

**Find All Markers**:

```bash
# Search for TODO markers
grep -rn "TODO-ZAMBOANGA" --include="*.html" --include="*.js" --include="*.json"
```

**Key Marker Locations**:

**HTML (24+ markers)**:

- `index.html` (8 markers): Meta descriptions, keywords, OG images, canonical URLs, hotlines, logos, weather API, structured data
- `robots.txt` (1 marker): Production domain update
- Various service and content pages: Hotlines, contact info, office details

**JavaScript (10 markers)**:

- Attribution comments in all 18 JS files
- Weather API coordinates verification
- Hard-coded place references

**JSON (6 markers)**:

- All 6 data files have `__localization_note` at the top

### Phase 3 - Data Replacement (PENDING)

**What Needs to Be Done**:

1. **Replace officials.json** with current Zamboanga City officials
2. **Replace services.json** with Zamboanga City LGU services
3. **Replace dpwh-projects.json** with local infrastructure projects
4. **Replace competitive-index.json** with Zamboanga City CMCI data
5. **Replace ordinances.json** with recent city ordinances
6. **Replace resolutions.json** with recent city resolutions
7. **Update logo files** in `assets/images/logo/`
8. **Update banner/OG images** in `assets/images/banners/`
9. **Verify and update all hotline numbers** (emergency, LGU offices)
10. **Update sitemap.xml and robots.txt** with final production domain
11. **Add official photos** for elected officials in `assets/images/officials/`

---

## Theming & Color System

### Color Palette (CSS Variables in `style.css`)

**Primary Colors** (from City of Zamboanga seal):

```css
--bz-primary: #003087; /* Deep navy blue (seal outline/water) */
--bz-primary-dark: #002060; /* Darker navy */
--bz-primary-light: #e6eef8; /* Light navy background */
--bz-primary-soft: #f0f4fa; /* Softer navy tint */
```

**Accent Colors** (from seal elements):

```css
--bz-accent-yellow: #f2c91d; /* Gold/yellow from seal */
--bz-accent-yellow-soft: #fffbf0; /* Soft yellow background */
--bz-accent-green: #008751; /* Green from seal */
--bz-accent-green-light: #e8f5f0; /* Light green background */
--bz-accent-red: #ce1126; /* Red from seal */
--bz-accent-red-light: #fce8eb; /* Light red background */
--bz-accent-blue: #38bdf8; /* Sky blue accent */
--bz-accent-blue-light: #e6f7fe; /* Light blue background */
```

**Semantic Colors**:

```css
--color-primary: #003087; /* Navy (brand primary) */
--color-secondary: #008751; /* Green */
--color-accent: #38bdf8; /* Sky blue */
--color-success: #008751; /* Green */
--color-danger: #ce1126; /* Red */
--color-info: #0066b2; /* Blue */
--color-warning: #f59e0b; /* Amber */
```

**Neutrals**:

```css
--color-bg: #ffffff; /* Main background */
--color-bg-alt: #f9fafb; /* Alternate background */
--color-text: #1a1a1a; /* Body text */
--color-text-light: #6b7280; /* Muted text */
--bz-border: #e5e7eb; /* Border color */
```

**Typography**:

```css
--font-main: "Inter", sans-serif;
--line-height-body: 1.6;
--line-height-heading: 1.2;
```

**Spacing System**:

```css
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
--spacing-xl: 48px;
--max-width: 1200px;
--border-radius: 8px;
```

**Shadows**:

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
```

**To Edit Colors**: Modify CSS variables in `assets/css/style.css` (lines 1-70).

---

## Critical Warnings & Notes

### ⚠️ External Integrations

**Weather API** (Open-Meteo):

- Configured for Zamboanga City coordinates: `6.9214, 122.0790`
- Used in `assets/js/weather-map.js` and `index.html`
- **TODO**: Verify API supports these coordinates accurately

**Payment/Government Links**:

- Some service pages link to `filipizen.com` payment portal (may be Solano-specific)
- **TODO**: Update payment URLs to Zamboanga City LGU payment gateway

**Analytics**:

- Google Analytics tracking ID present (may still be Solano's)
- **TODO**: Replace with Zamboanga City GA4 property ID

### ⚠️ Data Provenance & Licensing

- Official datasets (DPWH, PSA, BLGF, CMCI) may have attribution/license requirements
- Ensure rights for all logos, banners, and official portraits
- Legislative data must come from official Sangguniang Panlungsod records

### ⚠️ Windows Development Notes

- `build.sh` is bash-based → use **Git Bash** or **WSL**
- `npm run dev` requires `python3` command → ensure Python is in PATH with `python3.exe` alias/symlink
- Alternative: Use `py -m http.server 8000` on Windows

### ⚠️ DO NOT COMMIT

- `node_modules/` (gitignored)
- `dist/` (auto-generated, gitignored)
- `.env` files (gitignored)
- Personal IDE settings in `.vscode/settings.json` (gitignored)

---

## Key Documentation Files

| File                                     | Purpose                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------- |
| **docs/repository-summary.md**           | Project overview, tech stack, localization checklist, file inventory    |
| **docs/After-UI-Localization.md**        | 1106-line Phase 2 completion report with detailed branding verification |
| **docs/LOCALIZATION_PROGRESS.md**        | 318-line tracking document with file-by-file localization status        |
| **docs/DATA_REPLACEMENT_GUIDE.md**       | Step-by-step guide for replacing Solano data with Zamboanga data        |
| **docs/frontend-data-map.md**            | Frontend-to-data bindings reference (which JS uses which JSON)          |
| **docs/statistics-data-requirements.md** | CMCI data structure and requirements                                    |
| **docs/PHASE2_COMPLETION_REPORT.md**     | Executive summary of Phase 2 work                                       |
| **README.md**                            | Main repository README with installation, tech stack, features          |
| **CONTRIBUTING.md**                      | Contribution guidelines for volunteers                                  |
| **CODE_OF_CONDUCT.md**                   | Community standards                                                     |
| **SECURITY.md**                          | Security policy and vulnerability reporting                             |

---

## Immediate Next Steps (On This New Device)

1. **✅ Install Dependencies**:

   ```bash
   npm install
   ```

2. **✅ Start Development Server**:

   ```bash
   npm run dev
   # OR (if python3 not in PATH on Windows)
   py -m http.server 8000
   ```

3. **✅ Verify Site Loads**:

   - Open http://localhost:8000 in browser
   - Check homepage, services pages, government pages
   - Verify search functionality
   - Test responsive design on mobile viewport

4. **✅ Review TODO-ZAMBOANGA Markers**:

   ```bash
   grep -rn "TODO-ZAMBOANGA" --include="*.html" --include="*.js" --include="*.json"
   ```

5. **✅ Test Build Process**:

   ```bash
   npm run build
   npm run serve:dist
   # Visit http://localhost:8080 to test production build
   ```

6. **🔲 Data Replacement (Phase 3)**:

   - Start with `data/officials.json` (easiest - 56 lines)
   - Then `data/services.json` (complex - 1012 lines, validate with `services-validator.js`)
   - Update images in `assets/images/officials/`, `assets/images/logo/`
   - Verify external links and API integrations

7. **🔲 Final Pre-Deployment Checks**:
   - Update `sitemap.xml` and `robots.txt` with production domain
   - Replace Google Analytics tracking ID
   - Update meta descriptions and keywords
   - Verify all hotlines and contact information
   - Run accessibility audit (WAVE, Lighthouse)
   - Test cross-browser compatibility
   - Check mobile responsiveness

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server on port 8000
npm run serve            # Same as dev

# Building
npm run build            # Build + auto patch bump (1.1.8 → 1.1.9)
npm run build:major      # Build + major bump (1.1.8 → 2.0.0)
npm run build:minor      # Build + minor bump (1.1.8 → 1.2.0)

# Version Management
npm run version:major    # Bump major (no build)
npm run version:minor    # Bump minor (no build)
npm run version:patch    # Bump patch (no build)
npm run version:check    # Show current version

# Production Preview
npm run serve:dist       # Serve production build on port 8080

# Search
grep -rn "TODO-ZAMBOANGA" --include="*.html" --include="*.js" --include="*.json"
grep -rn "Solano" --include="*.html" --include="*.js" --include="*.json"

# Validation
node assets/js/services-validator.js  # Validate services.json schema
```

---

## Version History

| Version | Date       | Changes                         |
| ------- | ---------- | ------------------------------- |
| 1.1.8   | 2025-12-11 | Current version                 |
| 1.1.0   | N/A        | Added version management system |
| 1.0.0   | N/A        | Initial release                 |

---

## License & Attribution

- **Code License**: MIT License
- **Content License**: CC BY 4.0
- **Original Project**: BetterSolano.org by Ramon Logan Jr.
- **Fork**: Better Zamboanga (volunteer-driven civic-tech initiative)

---

## Support & Contact

- **GitHub Issues**: Use repository issue tracker
- **Community**: See CONTRIBUTING.md for guidelines
- **Security**: See SECURITY.md for vulnerability reporting

---

**Document Version**: 1.0  
**Created**: January 11, 2026  
**Purpose**: Quick onboarding for developers opening Better Zamboanga on new devices
