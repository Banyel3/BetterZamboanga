# Better Zamboanga: Next.js vs Static v1 Parity Report

> **Generated**: January 17, 2026  
> **Purpose**: Document feature, content, and design parity between the static v1 site and the Next.js implementation.

---

## Overview

| Aspect | Status |
|--------|--------|
| **Pages/Routes** | ~20% coverage (12 of 55+ pages) |
| **Data Files** | 0% (Next.js uses hardcoded data, not JSON) |
| **Color System** | ⚠️ Different primary color values |
| **Localization** | ⚠️ Some Solano references remain in v1 JSON |

---

## 1. Routing & Page Matrix

### v1 Static Site Entry Points
- **Dev Server**: `npm run dev` (port 8000)
- **Build**: `npm run build` (outputs to `dist/`)

### Next.js App Entry Points
- **Dev Server**: `cd next-app && npm run dev` (port 3000)
- **Build**: `npm run build`

### Page Comparison

| v1 Route | Next.js Route | Status |
|----------|---------------|--------|
| `/` (index.html) | `/` | ✅ MATCHES |
| `/services/index.html` | `/services` | ✅ MATCHES |
| `/services/certificates.html` | `/services/certificates` | ✅ MATCHES |
| `/services/business.html` | `/services/business` | ❌ MISSING |
| `/services/tax-payments.html` | `/services/tax-payments` | ❌ MISSING |
| `/services/social-services.html` | `/services/social-services` | ❌ MISSING |
| `/services/health.html` | `/services/health` | ❌ MISSING |
| `/services/agriculture.html` | `/services/agriculture` | ❌ MISSING |
| `/services/infrastructure.html` | `/services/infrastructure` | ❌ MISSING |
| `/services/education.html` | `/services/education` | ❌ MISSING |
| `/services/public-safety.html` | `/services/public-safety` | ❌ MISSING |
| `/services/environment.html` | `/services/environment` | ❌ MISSING |
| `/government/index.html` | `/government` | ✅ MATCHES |
| `/government/officials.html` | `/government/officials` | ❌ MISSING |
| `/statistics/index.html` | `/statistics` | ✅ MATCHES |
| `/budget/index.html` | `/budget` | ✅ MATCHES |
| `/contact/index.html` | `/contact` | ✅ MATCHES |
| `/legislative/index.html` | `/legislative` | ✅ MATCHES |
| `/legislative/ordinance-framework.html` | `/legislative/ordinance-framework` | ❌ MISSING |
| `/legislative/resolution-framework.html` | `/legislative/resolution-framework` | ❌ MISSING |
| `/news/index.html` | - | ❌ MISSING |
| `/faq/index.html` | `/faq` | ✅ MATCHES |
| `/privacy/index.html` | `/privacy` (empty) | ❌ MISSING |
| `/terms/index.html` | `/terms` (empty) | ❌ MISSING |
| `/accessibility/index.html` | `/accessibility` (empty) | ❌ MISSING |
| `/service-details/*.html` (20+ pages) | `/service-details/[slug]` | 🟡 PARTIAL (only 2 services in template) |

### Missing Pages Summary
- **9 service category pages** (business, health, etc.)
- **2 legislative framework pages**
- **1 news page**
- **1 officials detailed page**
- **3 secondary pages** (privacy, terms, accessibility)
- **18+ service detail pages**

---

## 2. Data & Content Parity

### v1 Data Files

| File | Location | Records | Used By | In Next.js? |
|------|----------|---------|---------|-------------|
| `officials.json` | `data/` | Mayor, Vice Mayor, 16 councilors, 12 dept heads | `officials.js` → `/government/officials.html` | ❌ No (hardcoded in page) |
| `services.json` | `data/` | 40+ services with categories, fees, times | `search.js`, service pages | ❌ No (partial hardcoded) |
| `dpwh-projects.json` | `data/` | 84 infrastructure projects | `/budget/index.html` | ❌ No |
| `competitive-index.json` | `data/` | CMCI data 2016-2024 | `/statistics/index.html` | ❌ No |
| `ordinances.json` | `data/` | 30+ ordinances | `ordinances.js` | ❌ No (3 hardcoded) |
| `resolutions.json` | `data/` | Resolutions | `resolutions.js` | ❌ No (2 hardcoded) |

### Critical Localization Issues in v1 Data

**`services.json`** contains Solano references:
```json
"description": "Get a certified copy of birth certificate registered in Solano"
"office": "PNP Solano"
```

**TODO**: Update these to Zamboanga City references.

### Next.js Data Gaps

| Dataset | v1 | Next.js | Gap |
|---------|----|---------|----|
| Officials | 30+ entries with phones, emails | 3 hardcoded entries | **-90%** |
| Services | 40+ with full details | 6 popular services, 2 detail templates | **-85%** |
| DPWH Projects | 84 projects, ₱3.19B total | None | **-100%** |
| CMCI Statistics | 5 pillars, 9 years | 4 stat boxes | **-80%** |
| Ordinances | 30+ with categories | 3 hardcoded | **-90%** |
| Resolutions | Full list | 2 hardcoded | **-90%** |

---

## 3. Color Scheme & Design System Parity

### Color Token Comparison

| Token | v1 Static | Next.js | Match? |
|-------|-----------|---------|--------|
| Primary | `#021C73` | `#1a365d` | ❌ Different |
| Primary Dark | `#01124d` | `#0f2442` | ❌ Different |
| Accent Yellow | `#f2c91d` | `#fbbf24` | ❌ Different |
| Accent Green | `#008751` | (not defined) | ❌ Missing |
| Accent Red | `#ce1126` | `#b91c1c` | ❌ Different |
| Accent Blue | `#38bdf8` | (not defined) | ❌ Missing |

### Design System Issues

1. **Primary color mismatch**: v1 uses deep navy `#021C73` (from city seal), Next.js uses Tailwind slate-blue `#1a365d`
2. **Missing accent colors**: Green and sky-blue accents not defined in Next.js
3. **No gradient parity**: v1 `page-header-v3` uses different gradient values than Next.js

### Recommendation

Create unified `theme.ts` exporting:
```typescript
export const bzColors = {
  primary: '#021C73',
  primaryDark: '#01124d',
  accentYellow: '#f2c91d',
  accentGreen: '#008751',
  accentRed: '#ce1126',
  accentBlue: '#38bdf8',
};
```

---

## 4. Component Parity

### Hero Section

| Feature | v1 | Next.js | Status |
|---------|----|---------|----|
| Search box | ✅ | ✅ | OK |
| Popular search tags | ✅ | ✅ | OK |
| Blue gradient background | ✅ | ✅ | OK (but different colors) |
| Weather widget | ✅ | ❌ | MISSING |
| Map thumbnail | ✅ | ❌ | MISSING |

### Service Cards

| Feature | v1 | Next.js | Status |
|---------|----|---------|----|
| Icon | ✅ | ✅ | OK |
| Title | ✅ | ✅ | OK |
| Description | ✅ | ✅ | OK |
| Fee badge | ✅ | ✅ (detail only) | PARTIAL |
| Processing time | ✅ | ✅ (detail only) | PARTIAL |

### Government Section

| Feature | v1 | Next.js | Status |
|---------|----|---------|----|
| Mayor/Vice Mayor cards | ✅ | ✅ | OK |
| Councilor grid | ✅ | ❌ | MISSING |
| Department heads | ✅ | 🟡 6 of 12 | PARTIAL |
| Contact info (phone, email) | ✅ | ❌ | MISSING |

### Statistics/Transparency

| Feature | v1 | Next.js | Status |
|---------|----|---------|----|
| CMCI pillar charts | ✅ | ❌ | MISSING |
| DPWH project table | ✅ | ❌ | MISSING |
| Project filters | ✅ | ❌ | MISSING |
| Budget summary | ✅ | ✅ | OK |

### Legislative

| Feature | v1 | Next.js | Status |
|---------|----|---------|----|
| Ordinance table | ✅ | 🟡 3 entries | PARTIAL |
| Resolution table | ✅ | 🟡 2 entries | PARTIAL |
| Category filters | ✅ | ❌ | MISSING |
| Sortable columns | ✅ | ❌ | MISSING |

---

## 5. Behavior & UX Parity

### Navigation

| Feature | v1 | Next.js | Status |
|---------|----|---------|----|
| Full-width horizontal dropdown | ✅ | ✅ | OK |
| Mobile hamburger menu | ✅ | ✅ | OK |
| Language toggle (EN/FIL/ILO) | ✅ | ✅ (visual only) | PARTIAL |
| Active page highlight | ✅ | ❌ | MISSING |

### Search & Filters

| Feature | v1 | Next.js | Status |
|---------|----|---------|----|
| Service search | ✅ | ❌ (UI only) | NOT FUNCTIONAL |
| Legislative filters | ✅ | ❌ | MISSING |
| Project filters | ✅ | ❌ | MISSING |

### Hotline Bar

| Feature | v1 | Next.js | Status |
|---------|----|---------|----|
| Emergency numbers | ✅ | ✅ | OK |
| Click-to-call links | ✅ | ✅ | OK |

---

## 6. Priority Fix List

### 🔴 High Priority

1. **Color system alignment**: Update Next.js to use v1 color tokens (`#021C73` primary)
2. **Import JSON data**: Wire `data/*.json` files into Next.js instead of hardcoded values
3. **Missing service category pages**: Create 9 service category pages
4. **Solano references**: Search and replace remaining Solano mentions in `services.json`
5. **Officials data**: Use `officials.json` for government page

### 🟡 Medium Priority

6. **Legislative framework pages**: Create ordinance and resolution detail pages
7. **DPWH projects display**: Add transparency/projects section to budget page
8. **CMCI charts**: Add chart.js visualizations for competitive index
9. **News page**: Create news section
10. **Search functionality**: Implement actual search with service filtering

### 🟢 Low Priority

11. **Weather widget**: Add weather API integration
12. **Map integration**: Add Leaflet map to relevant pages
13. **Language toggle**: Implement actual i18n switching
14. **Privacy/Terms/Accessibility**: Create secondary pages
15. **Active nav highlighting**: Add current page indicator

---

## 7. Recommended Workflow

1. **Week 1**: Color alignment + JSON data imports
2. **Week 2**: Missing service category pages + officials page
3. **Week 3**: Legislative + DPWH projects
4. **Week 4**: Search, charts, secondary pages

---

## Files Reference

### v1 Static Site
- **CSS**: `assets/css/style.css`, `assets/css/design-v3.css`
- **JS**: `assets/js/officials.js`, `ordinances.js`, `resolutions.js`, `search.js`
- **Data**: `data/officials.json`, `services.json`, `dpwh-projects.json`, etc.

### Next.js App
- **Styles**: `next-app/src/app/globals.css`
- **Components**: `next-app/src/components/layout/`
- **Pages**: `next-app/src/app/**/page.tsx`
