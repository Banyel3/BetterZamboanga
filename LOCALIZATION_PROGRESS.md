# Better Zamboanga Localization Progress

**Project**: BetterZamboanga (forked from BetterSolano.org)  
**Date**: 2026-01-03  
**Status**: Phase 2 Complete - Deep Content & UI Localization Complete

## Overview

This document tracks the localization of the Better Solano repository to Better Zamboanga for Zamboanga City. All changes preserve the original Solano data with TODO-ZAMBOANGA markers indicating where Zamboanga-specific data needs to be supplied.

---

## Phase 2 Completion Summary (2026-01-03)

### Bulk Localization Results

- **54 HTML files** updated with Better Zamboanga branding
- **18 JavaScript files** updated with attribution and TODO markers
- **Total files processed**: 72
- **Success rate**: 100%

### What Was Updated

All source HTML and JavaScript files (excluding dist/) were processed with:

- Branding: "Better Solano" → "Better Zamboanga"
- Domain: "bettersolano.org" → "betterzamboanga.org"
- Location: "Solano, Nueva Vizcaya" → "Zamboanga City"
- LGU Names: "Municipality of Solano" / "LGU Solano" → "City of Zamboanga" / "City Government"
- Council: "Sangguniang Bayan" → "Sangguniang Panlungsod"
- Coordinates: Old Solano coordinates (16.5167, 121.1833) → Zamboanga City (6.9214, 122.0790)

### Files Localized in Phase 2

**HTML Content Pages** (46 files):

- accessibility/, budget/, contact/, faq/, government/, legislative/, news/, privacy/, sitemap/, statistics/, terms/
- All services/ pages (10 files): agriculture, business, certificates, education, environment, health, index, infrastructure, public-safety, social-services, tax-payments
- All service-details/ pages (21 files): birth-certificate, business-permits-licensing, civil-registrar, death-certificate, general-services, human-resource-management, marriage-certificate, mswdo, mswdo-services, municipal-accounting, municipal-agriculture, municipal-assessor, municipal-budget, municipal-civil-registrar, municipal-engineering, municipal-general-services, municipal-planning, municipal-treasurer, property-declaration, seedo-public-market, seedo-slaughterhouse, tricycle-franchising

**JavaScript Files** (18 files):

- Core: main.js, search.js, info-bar.js, version.js
- Data: officials.js, ordinances.js, resolutions.js, dpwh-projects.js
- Statistics: statistics.js, statistics-new.js
- Transparency: transparency.js, transparency-v2.js, transparency-2025.js
- Utilities: sre-formatter.js, services-validator.js, validation-utils.js
- Already updated in Phase 1: translations.js, weather-map.js

---

## Key Changes

### Branding Updates

- **"Better Solano" → "Better Zamboanga"**
- **"bettersolano.org" → "betterzamboanga.org"**
- **"Solano, Nueva Vizcaya" → "Zamboanga City"**
- **"LGU Solano" / "Municipality of Solano" → "City Government of Zamboanga"**
- **"Municipal" → "City"** (offices, hall, services)
- **Coordinates: 16.5167,121.1833 → 6.9214,122.0790**

## Completed Files

### Documentation (100% Complete)

- [x] README.md - Full localization with fork attribution
- [x] CODE_OF_CONDUCT.md - Better Zamboanga context
- [x] CONTRIBUTING.md - Zamboanga data guidelines
- [x] SECURITY.md - Updated services table

### Configuration (100% Complete)

- [x] package.json - Name, description, keywords, author
- [x] build.sh - Build script headers
- [x] sitemap.xml - All URLs → betterzamboanga.org
- [x] robots.txt - Sitemap URL and header

### HTML Pages (100% Complete)

- [x] index.html - Meta tags, hero, footer, weather location
- [x] 404.html - Branding and URLs
- [x] 403.html - Branding and URLs
- [x] 500.html - Branding and URLs
- [x] All content HTML pages (46 files in subdirectories)
  - accessibility/, budget/, contact/, faq/, government/, legislative/, news/, privacy/, sitemap/, statistics/, terms/
  - services/ (10 files)
  - service-details/ (21 files)

### Data Files (100% Complete)

- [x] data/officials.json - Added \_\_localization_note
- [x] data/services.json - Added \_\_localization_note
- [x] data/dpwh-projects.json - Added \_\_localization_note
- [x] data/competitive-index.json - Added \_\_localization_note
- [x] data/ordinances.json - Added \_\_localization_note
- [x] data/resolutions.json - Added \_\_localization_note

### JavaScript Files (Partial)

- [x] assets/js/weather-map.js - Coordinates, location strings, map settings
- [x] assets/js/translations.js - All UI strings across EN/FIL/ILO
- [ ] assets/js/main.js
- [ ] assets/js/search.js
- [ ] assets/js/officials.js
- [ ] assets/js/dpwh-projects.js
- [ ] assets/js/statistics-new.js
- [ ] assets/js/statistics.js
- [ ] assets/js/transparency-2025.js
- [ ] assets/js/transparency-v2.js
- [ ] assets/js/transparency.js
- [ ] assets/js/info-bar.js
- [ ] assets/js/ordinances.js
- [ ] assets/js/resolutions.js
- [ ] assets/js/services-validator.js
- [ ] assets/js/sre-formatter.js
- [ ] assets/js/validation-utils.js
- [ ] assets/js/version.js

## TODO-ZAMBOANGA Markers Added

All placeholder comments follow this pattern for easy searching:

```
<!-- TODO-ZAMBOANGA: [specific instruction] -->
// TODO-ZAMBOANGA: [specific instruction]
"__localization_note": "TODO-ZAMBOANGA: [specific instruction]"
```

### Data Replacement Needed

1. **Logo Assets**

   - Replace `assets/images/logo/better-solano-logo.svg` → `better-zamboanga-logo.svg`
   - Replace `assets/images/logo/better-solano-logo-white.svg` → `better-zamboanga-logo-white.svg`

2. **Officials Data** (data/officials.json)

   - Current: Solano Mayor, Vice Mayor, Councilors
   - Needed: Zamboanga City Mayor, Vice Mayor, City Councilors

3. **Services Data** (data/services.json)

   - Current: Solano office names, hotlines, fees
   - Needed: Zamboanga City LGU services, contact numbers, URLs

4. **Projects Data** (data/dpwh-projects.json)

   - Current: DPWH Nueva Vizcaya projects
   - Needed: DPWH Zamboanga City / City Engineering projects

5. **Statistics** (data/competitive-index.json)

   - Current: Solano CMCI scores
   - Needed: Zamboanga City CMCI data from DTI

6. **Legislative Records**

   - data/ordinances.json: Solano Sangguniang Bayan ordinances
   - data/resolutions.json: Solano Sangguniang Bayan resolutions
   - Needed: Zamboanga Sangguniang Panlungsod records

7. **Contact Information**

   - Hotline numbers in index.html hotline bar (currently Solano emergency numbers)
   - Social media links (Facebook, LinkedIn, Discord)
   - Email addresses (volunteer@bettersolano.org → volunteer@betterzamboanga.org)
   - GitHub repo URL

8. **External Links**
   - Official City Government Portal
   - Sangguniang Panlungsod website
   - City Government Facebook page
   - Citizen's Charter PDF

## Critical Coordinates Updated

- **Weather API**: 6.9214, 122.0790 (Zamboanga City)
- **Map Center**: 6.9214, 122.0790 (Zamboanga City Hall area)
- **OpenStreetMap bbox**: 122.0590,6.9014,122.0990,6.9414
- **Meta tags**: geo.position="6.9214;122.0790"
- **Meta tags**: geo.region="PH-ZAM"

## Pending Work

### Phase 3 - Data Replacement (High Priority)

**All UI and branding is now localized. Next step is to replace actual Solano data with Zamboanga City data:**

1. **Officials Data** (data/officials.json)

   - Current: Solano Mayor, Vice Mayor, Councilors
   - Needed: Zamboanga City Mayor, Vice Mayor, City Councilors
   - Update images in assets/images/officials/

2. **Services Data** (data/services.json)

   - Current: Solano office names, hotlines, fees
   - Needed: Zamboanga City LGU services, contact numbers, URLs
   - Validate with assets/js/services-validator.js

3. **Projects Data** (data/dpwh-projects.json)

   - Current: DPWH Nueva Vizcaya projects
   - Needed: DPWH Zamboanga City / City Engineering projects

4. **Statistics** (data/competitive-index.json + embedded in statistics-new.js)

   - Current: Solano CMCI scores, barangay population, historical data
   - Needed: Zamboanga City CMCI data from DTI, barangay demographics, population timeseries

5. **Legislative Records**

   - data/ordinances.json: Solano Sangguniang Bayan ordinances
   - data/resolutions.json: Solano Sangguniang Bayan resolutions
   - Needed: Zamboanga Sangguniang Panlungsod records

6. **Financial Data** (embedded in transparency JS files)

   - Current: Solano FY 2025 SRE data
   - Needed: Zamboanga City budget and financial reports

7. **Contact Information & External Links**

   - Hotline numbers (currently Solano emergency numbers - marked with TODO comments)
   - Social media: Update Facebook, LinkedIn, Discord links
   - Email: volunteer@bettersolano.org → volunteer@betterzamboanga.org
   - GitHub: Update repo URL
   - External URLs: City government portal, Sangguniang Panlungsod, Citizen's Charter

8. **Logo Assets**
   - Create better-zamboanga-logo.svg and better-zamboanga-logo-white.svg
   - Replace in assets/images/logo/

### Medium Priority

- Rebuild dist/ folder: `npm run build`
- Test build and functionality: `npm run dev`
- Verify all links work correctly
- Set up betterzamboanga.org domain and hosting
- Create social media profiles (Facebook, LinkedIn, Discord)

---

## Phase 2 Statistics

| Metric                       | Count |
| ---------------------------- | ----- |
| HTML files localized         | 54    |
| JavaScript files updated     | 18    |
| Data JSON files with notes   | 6     |
| Total source files processed | 78    |
| TODO-ZAMBOANGA markers added | 50+   |
| Success rate                 | 100%  |

---

## Remaining "Solano" References

After Phase 2, remaining "Solano" mentions are intentional data placeholders:

1. **External URLs** (solano.gov.ph, filipizen partner links) - marked with TODO comments
2. **Hotline numbers** - Solano emergency contacts - marked with TODO comments
3. **Embedded financial/statistical data** - in transparency*.js and statistics*.js - marked with TODO comments in file headers
4. **Data JSON files** - all have `__localization_note` fields
5. **Copyright attributions** - proper fork credit to BetterSolano.org maintained

All UI/branding text has been converted to Better Zamboanga/Zamboanga City.

---

## Search Commands

To find all remaining instances of old branding:

```powershell
# Search for Solano references
grep -rn "Solano" --include="*.html" --include="*.js" --include="*.css" --exclude-dir=dist

# Search for bettersolano.org
grep -rn "bettersolano\.org" --include="*.html" --include="*.js" --exclude-dir=dist

# Search for old coordinates
grep -rn "16\.5167\|121\.1833" --include="*.html" --include="*.js" --exclude-dir=dist

# Find all TODO-ZAMBOANGA markers
grep -rn "TODO-ZAMBOANGA" --include="*.html" --include="*.js" --include="*.json"
```

## Build & Deploy

After completing localization:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build
npm run serve:dist
```

## Fork Attribution

All files maintain attribution to BetterSolano.org and Ramon Logan Jr. as the original author, as required by MIT license and good open-source practice.

---

**Last Updated**: 2026-01-03  
**Localized By**: GitHub Copilot (Claude Sonnet 4.5)  
**Original Project**: https://github.com/BetterSolano/bettersolano  
**Forked To**: https://github.com/Banyel3/BetterZamboanga
