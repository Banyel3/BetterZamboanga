# Global Widgets and Shared Components Data Mapping

> **Purpose**: Maps global components, widgets, and shared elements that appear across multiple pages to their data sources and configuration.

---

## Overview

Global components are loaded on **all or most pages** and provide site-wide functionality. These include navigation, footer, weather/currency widgets, search, hotline bar, and utility scripts. Some use **static HTML/CSS**, while others use **JavaScript with embedded configuration or dynamic data**.

---

## Global Components Mapping

| Component             | Location/File            | JS file(s) used                 | Data source(s)                     | Data type / description                                               | Notes / TODO-ZAMBOANGA linkage                                                             |
| --------------------- | ------------------------ | ------------------------------- | ---------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Header/Navigation** | All HTML files           | `main.js`                       | Static HTML                        | Top navigation bar with logo, menu items, language switcher           | Logo updated Phase 2. Menu structure static HTML. Language switcher uses `translations.js` |
| **Footer**            | All HTML files           | `main.js`                       | Static HTML                        | Footer with links, quick links, contact info, social media, copyright | Contains Solano contact info (address, hotline, email) - needs update                      |
| **Hotline Bar**       | `index.html` (line ~208) | None                            | Static HTML                        | Emergency hotline banner (Police, Fire, MDRRMO, Rescue, City Hall)    | 🔴 **TODO-ZAMBOANGA marker** - Critical to update all hotlines                             |
| **Weather Widget**    | Top bar (info-bar)       | `weather-map.js`, `info-bar.js` | OpenWeatherMap API                 | Weather display for Zamboanga City (6.9214, 122.0790)                 | Coordinates updated Phase 2. API key needs verification                                    |
| **Currency Widget**   | Top bar (info-bar)       | `info-bar.js`                   | ExchangeRate-API                   | USD to PHP exchange rate display                                      | API endpoint may need update/verification                                                  |
| **Time Widget**       | Top bar (info-bar)       | `info-bar.js`                   | Browser time                       | Current time display                                                  | Uses Asia/Manila timezone                                                                  |
| **Site Search**       | Header search bar        | `search.js`                     | `data/services.json` + page titles | Search functionality for services and pages                           | Searches services.json - will update automatically when services data replaced             |
| **Language Switcher** | Header                   | `translations.js`               | Embedded translation strings       | EN/FIL toggle for UI strings                                          | Localized Phase 1. No Zamboanga-specific changes needed                                    |
| **Version Display**   | Footer                   | `version.js`                    | `version.json`                     | Build version number display                                          | No Zamboanga-specific data. Updated via build system                                       |
| **Breadcrumbs**       | Section pages            | `main.js`                       | Generated from URL                 | Dynamic breadcrumb navigation                                         | No data source. Automatically generated from page path                                     |

---

## Component Details

### 1. Header/Navigation

**Files**: All HTML files have header section with navigation

**JavaScript**: `assets/js/main.js` (handles mobile menu toggle, scroll behavior)

**Structure**:

- Logo (updated Phase 2 to Zamboanga City logo)
- Main navigation menu items:
  - Government
  - Services
  - Transparency
  - Legislative
  - News
  - Contact
- Language switcher (EN/FIL)
- Search icon/button (opens search modal)

**Static Content**:

- Menu items are static HTML
- Logo image: `assets/images/logo/zamboanga-logo.png` (updated Phase 2)
- Navigation links are relative paths

**Replacement Requirements for Phase 3**:

- None (already localized in Phase 2)
- Verify all navigation links work correctly
- Optional: Add new menu items if Zamboanga City needs additional sections

**Dependencies**:

- `main.js` - Mobile menu toggle, scroll effects
- `translations.js` - Language switcher functionality

---

### 2. Footer

**Files**: All HTML files have footer section

**JavaScript**: `main.js` (basic interactions)

**Structure**:

- Quick Links section (links to major pages)
- Services section (links to service categories)
- Contact section:
  - Address: "Municipal Hall, Solano, Nueva Vizcaya 3708" ← **Needs update**
  - Hotline: "0927-XXX-XXXX" ← **Needs update**
  - Email: "info@solano.gov.ph" ← **Needs update**
- Follow Us section:
  - Social media links (Facebook, Twitter, Instagram) ← **Needs update**
- Copyright notice
- Footer bottom links (Privacy, Terms, Sitemap, Accessibility)

**Replacement Requirements for Phase 3**:

1. **Address**: Update to Zamboanga City Hall complete address

   - From: "Municipal Hall, Solano, Nueva Vizcaya 3708"
   - To: "City Hall, [Complete Address], Zamboanga City 7000"

2. **Hotline**: Update to Zamboanga City main hotline

   - From: "0927-XXX-XXXX" (Solano)
   - To: Zamboanga City Hall main line (get from PIO)

3. **Email**: Update to Zamboanga City email

   - From: "info@solano.gov.ph"
   - To: "info@zamboanga.gov.ph" (if available) or relevant city email

4. **Social Media Links**: Update to Zamboanga City official accounts

   - Facebook: Update to Official Zamboanga City Government page (verify official account)
   - Twitter/Instagram: Update if official accounts exist

5. **Copyright Notice**: Update year and municipality name
   - From: "© 2024 Municipality of Solano. All rights reserved."
   - To: "© 2026 City of Zamboanga. All rights reserved."

**Data Sources Needed**:

- Zamboanga City PIO: Official contact information, social media accounts
- City Hall: Main address and hotline

**Priority**: 🔴 Critical (footer appears on every page)

**Future Enhancement**:
Consider extracting footer contact info to `data/contact.json` (same JSON used for contact page) to maintain single source of truth.

---

### 3. Hotline Bar (Emergency Hotlines)

**Files**: `index.html` (line ~208, in hero section)

**JavaScript**: None (static HTML)

**Structure**:

```html
<div class="hotline-bar">
  <span>Emergency Hotlines:</span>
  <span>Police: 0927-XXX-XXXX</span>
  <span>Fire: 0936-XXX-XXXX</span>
  <span>MDRRMO: 0926-XXX-XXXX</span>
  <span>Rescue: 09XX-XXX-XXXX</span>
  <span>City Hall: 0927-XXX-XXXX</span>
</div>
```

**TODO-ZAMBOANGA Marker**: Yes, documented in After-UI-Localization.md as critical

**Replacement Requirements for Phase 3**:

1. **Police Hotline**: Update to Zamboanga City Police Station emergency number
2. **Fire Hotline**: Update to Zamboanga City Fire Station emergency number
3. **MDRRMO Hotline**: Update to Zamboanga City MDRRMO/CDRRMO (Disaster Risk Reduction Management Office)
4. **Rescue Hotline**: Update to Zamboanga City rescue services (e.g., City Search and Rescue)
5. **City Hall Hotline**: Update to Zamboanga City Hall main hotline

**Data Sources Needed**:

- Zamboanga City MDRRMO: Disaster response hotlines
- Zamboanga City Police Office: Emergency hotline
- Zamboanga City Fire Station: Fire emergency hotline
- Zamboanga City PIO: Official city hotline directory

**Priority**: 🔴 **CRITICAL** - Incorrect emergency hotlines can endanger lives

**Note**: These hotlines must also be updated in:

- `contact/index.html` (contact page)
- Footer contact section
- Maintain consistency across all locations

---

### 4. Weather Widget

**Files**: Loaded on all pages via info-bar

**JavaScript**:

- `assets/js/weather-map.js` - Fetches weather data from OpenWeatherMap API
- `assets/js/info-bar.js` - Displays weather widget in top bar

**Configuration**:

```javascript
// weather-map.js (embedded config)
const ZAMBOANGA_LAT = 6.9214; // Updated Phase 2
const ZAMBOANGA_LON = 122.079; // Updated Phase 2
const OPENWEATHER_API_KEY = "YOUR_API_KEY"; // Needs verification
```

**API**: OpenWeatherMap API (https://api.openweathermap.org/)

**Data Displayed**:

- Current temperature (°C)
- Weather condition icon (sunny, cloudy, rainy, etc.)
- Weather description text
- Location name: "Zamboanga City"

**Replacement Requirements for Phase 3**:

1. ✅ Coordinates already updated (Phase 2: 6.9214, 122.0790)
2. 🔍 **Verify API Key**: Check if OpenWeatherMap API key is valid and not rate-limited
3. 🔍 **Verify Location Name**: Ensure API returns "Zamboanga City" as location name (not Solano)

**Testing**:

- Verify weather widget loads on homepage
- Check that weather data is current (not cached Solano weather)
- Test on multiple page loads (check API rate limits)

**Priority**: 🟢 Medium (nice-to-have feature, not critical)

**Note**: If API key is invalid or rate-limited, consider:

- Getting new OpenWeatherMap API key (free tier: 1,000 calls/day)
- Alternative: Use Philippine weather service API if available

---

### 5. Currency Widget

**Files**: Loaded on all pages via info-bar

**JavaScript**: `assets/js/info-bar.js`

**API**: ExchangeRate-API or similar (needs verification)

**Data Displayed**:

- USD to PHP exchange rate
- Format: "1 USD = ₱XX.XX PHP"
- Updates daily

**Replacement Requirements for Phase 3**:

1. 🔍 **Verify API Endpoint**: Check if currency API is still functional
2. 🔍 **Test Rate Updates**: Ensure exchange rate updates daily

**Priority**: 🟢 Low (informational widget, not critical)

**Note**: Currency conversion is the same nationwide (not city-specific). No Zamboanga-specific changes needed.

---

### 6. Time Widget

**Files**: Loaded on all pages via info-bar

**JavaScript**: `assets/js/info-bar.js`

**Data Source**: Browser `Date` object

**Configuration**:

```javascript
// Uses Asia/Manila timezone
const options = { timeZone: "Asia/Manila", hour12: true };
```

**Replacement Requirements for Phase 3**:

- None (Asia/Manila timezone is correct for Zamboanga City)

**Priority**: 🟢 Low (no changes needed)

---

### 7. Site Search

**Files**: Header search bar, loaded on all pages

**JavaScript**: `assets/js/search.js`

**Data Sources**:

- `data/services.json` - Searches through service entries
- Page titles and metadata (scraped from HTML)

**Functionality**:

- User types search query in header search bar
- Script searches services.json for matching service names, descriptions
- Returns matching services with links
- May also search page titles/content

**Replacement Requirements for Phase 3**:

- ✅ No direct changes needed to search.js
- 🔄 Search results will automatically update when `data/services.json` is replaced with Zamboanga City services
- 🔍 Test search functionality after services.json update to ensure relevance

**Priority**: 🟡 High (important for user experience)

**Dependencies**:

- Depends on `data/services.json` being updated (see [services-data.md](services-data.md))

**Future Enhancement**:

- Add search indexing for all pages (not just services)
- Implement fuzzy search for better matches
- Add search analytics to track popular queries

---

### 8. Language Switcher

**Files**: Header, loaded on all pages

**JavaScript**: `assets/js/translations.js`

**Data Source**: Embedded translation strings in translations.js

**Functionality**:

- Toggle between English (EN) and Filipino (FIL)
- Switches UI strings (button labels, headings, navigation items)
- Saves language preference to localStorage

**Translation Strings Example**:

```javascript
const translations = {
  en: {
    home: "Home",
    services: "Services",
    government: "Government",
    // ... more strings
  },
  fil: {
    home: "Tahanan",
    services: "Mga Serbisyo",
    government: "Pamahalaan",
    // ... more strings
  },
};
```

**Replacement Requirements for Phase 3**:

- ✅ Already localized in Phase 1 (UI strings updated)
- No Zamboanga-specific changes needed (UI strings are generic)
- Optional: Add Chavacano language support (Zamboanga's local dialect) in future phase

**Priority**: 🟢 None (already complete)

**Future Enhancement**:

- Add Chavacano (Zamboanga dialect) as third language option
- Create `translations.chavacano.js` with Chavacano UI strings

---

### 9. Version Display

**Files**: Footer, loaded on all pages

**JavaScript**: `assets/js/version.js`

**Data Source**: `version.json`

**Structure**:

```json
{
  "version": "2.5.0",
  "build_date": "2026-01-02",
  "build_number": "250"
}
```

**Functionality**:

- Displays version number in footer: "Version 2.5.0"
- Useful for tracking deployments and cache invalidation

**Replacement Requirements for Phase 3**:

- None (version is updated via build system, not manual data replacement)

**Priority**: 🟢 None (automated)

**Note**: Consider incrementing version to 3.0.0 after completing Phase 3 data replacement to mark major update.

---

### 10. Breadcrumbs

**Files**: Section pages (services, government, legislative, etc.)

**JavaScript**: `assets/js/main.js`

**Data Source**: Generated from URL path

**Functionality**:

- Displays navigation path: Home > Services > Business Services
- Dynamically generated based on current page URL
- Clickable links to parent pages

**Replacement Requirements for Phase 3**:

- None (auto-generated from page structure)
- Verify breadcrumbs display correctly after any page restructuring

**Priority**: 🟢 None (no data changes needed)

---

## Data Replacement Workflow

### Phase 3.1: Contact Information Audit

1. **List All Contact Touchpoints**:

   - Footer contact section (all pages)
   - Hotline bar (index.html)
   - Contact page (contact/index.html)
   - Any other locations with phone/email/address

2. **Gather Zamboanga City Data**:
   - City Hall main address and hotline
   - Emergency hotlines (Police, Fire, MDRRMO, Rescue)
   - Email addresses (info@zamboanga.gov.ph or similar)
   - Social media accounts (official Facebook, Twitter, Instagram)

### Phase 3.2: Update Global Components

1. **Update Footer** (in all HTML files or in shared footer template if using):

   - Address → Zamboanga City Hall address
   - Hotline → Zamboanga City main hotline
   - Email → Zamboanga City email
   - Social media links → Zamboanga City official accounts
   - Copyright → © 2026 City of Zamboanga

2. **Update Hotline Bar** (index.html line ~208):

   - Police → Zamboanga City Police hotline
   - Fire → Zamboanga City Fire hotline
   - MDRRMO → Zamboanga City MDRRMO hotline
   - Rescue → Zamboanga City Rescue hotline
   - City Hall → Zamboanga City Hall hotline

3. **Verify Widget Configuration**:
   - Weather widget: Test that weather displays for Zamboanga City (coords already updated)
   - Currency widget: Test that exchange rate updates correctly
   - Search: Test after services.json update to ensure search works

### Phase 3.3: Consistency Check

1. **Cross-Reference Contact Info**:

   - Ensure footer, hotline bar, and contact page all have identical contact information
   - Create checklist to maintain consistency across all locations

2. **Test on All Pages**:
   - Visit multiple pages (home, services, government, legislative)
   - Verify footer displays correctly
   - Verify info-bar widgets load correctly
   - Test search functionality
   - Test language switcher

---

## Dependencies

### Global Scripts (loaded on all pages)

- `assets/js/main.js` - Navigation, mobile menu, scroll effects, breadcrumbs
- `assets/js/translations.js` - Language switcher functionality
- `assets/js/info-bar.js` - Weather, currency, time widgets
- `assets/js/weather-map.js` - Weather data fetching
- `assets/js/search.js` - Site search functionality
- `assets/js/version.js` - Version display

### External APIs

- **OpenWeatherMap API** - Weather data
  - URL: https://api.openweathermap.org/data/2.5/weather
  - Requires API key (verify validity)
- **ExchangeRate-API** (or similar) - Currency data
  - URL: Varies by provider (check info-bar.js for endpoint)
  - May require API key

### Data Files

- `data/services.json` - Used by search.js (will be updated in Phase 3)
- `version.json` - Build version info (auto-updated)

---

## Related Documentation

- **[After-UI-Localization.md](../After-UI-Localization.md)** - TODO-ZAMBOANGA markers for hotlines, contact info, social media
- **[contact-data.md](news-contact-faq-data.md)** - Contact page data mapping (should match footer/hotline bar)
- **[services-data.md](services-data.md)** - Services data used by search.js

---

## Known Issues / Considerations

1. **Contact Info Consistency**: 🔴 **Critical** - Contact information appears in multiple locations (footer, hotline bar, contact page). Must maintain consistency. Consider creating single data source.

2. **API Key Management**: Weather and currency widgets depend on external APIs. Verify API keys are valid and not approaching rate limits.

3. **Footer Update Effort**: If footer is duplicated in all HTML files (not a shared template), updating footer requires editing ~54 files. Consider migrating to footer template/component in future.

4. **Emergency Hotline Accuracy**: 🔴 **Critical** - Incorrect emergency hotlines are dangerous. Triple-check all emergency numbers before publishing.

5. **Social Media Verification**: Ensure social media links go to **verified official** Zamboanga City government accounts, not impersonators or unofficial pages.

6. **Search Index Updates**: Search results depend on services.json. After replacing services data, test search thoroughly to ensure it returns relevant Zamboanga City services.

7. **Weather Accuracy**: Verify weather widget shows weather for Zamboanga City proper, not a different municipality. OpenWeatherMap coordinates (6.9214, 122.0790) should be accurate.

8. **Language Toggle Persistence**: Ensure language preference is saved correctly in localStorage and persists across page navigations.

9. **Mobile Responsiveness**: Test all widgets (weather, currency, search, navigation) on mobile devices. Info-bar may be hidden on small screens.

10. **Version Numbering**: After Phase 3 completion, consider bumping version to 3.0.0 to signify major data update milestone.

---

## Future Enhancements (Post-Phase 3)

### Contact Information Centralization

- Create `data/contact.json` with centralized contact information
- Use JavaScript to dynamically populate footer, hotline bar, contact page from single JSON source
- Single point of update for all contact information

### Footer Template System

- Migrate footer from duplicated HTML to shared template/component
- Use server-side includes (SSI), JavaScript import, or static site generator
- Update footer once, applies to all pages

### Advanced Search

- Implement full-text search across all pages (not just services)
- Add search indexing and ranking
- Track popular search queries with analytics
- Add search suggestions/autocomplete

### Widget Dashboard

- Create admin panel to manage widget configuration (API keys, coordinates, display settings)
- Allow easy toggling of widgets on/off
- Monitor widget health (API status, load times)

### Chavacano Language Support

- Add Chavacano (Zamboanga's local dialect) as third language option
- Translate UI strings to Chavacano
- Provide language toggle: EN / FIL / Chavacano

### Accessibility Improvements

- Ensure all widgets have proper ARIA labels
- Test keyboard navigation for search, language switcher
- Add skip-to-content link for screen readers

---

## Testing Checklist for Phase 3

### Contact Information

- [ ] Footer address updated to Zamboanga City Hall
- [ ] Footer hotline updated to Zamboanga City main line
- [ ] Footer email updated to Zamboanga City email
- [ ] Footer social media links updated to official accounts
- [ ] Footer copyright updated to "City of Zamboanga" and current year
- [ ] Hotline bar (index.html) updated with all 5 emergency hotlines
- [ ] Contact information consistent across footer, hotline bar, contact page

### Widgets

- [ ] Weather widget displays Zamboanga City weather
- [ ] Weather widget shows correct temperature and conditions
- [ ] Currency widget displays current USD to PHP rate
- [ ] Time widget displays current Manila time
- [ ] Version display shows correct version number

### Navigation & Search

- [ ] All navigation menu items work correctly
- [ ] Site search returns relevant Zamboanga City services (after services.json update)
- [ ] Language switcher toggles between EN/FIL correctly
- [ ] Language preference persists across page loads
- [ ] Breadcrumbs display correctly on section pages

### Responsive Design

- [ ] All widgets display correctly on desktop (1920x1080)
- [ ] All widgets display correctly on tablet (768x1024)
- [ ] All widgets display correctly on mobile (375x667)
- [ ] Mobile navigation menu works correctly
- [ ] Touch interactions work on mobile

### Cross-Page Consistency

- [ ] Test footer on home page
- [ ] Test footer on services pages
- [ ] Test footer on government pages
- [ ] Test footer on legislative pages
- [ ] Test footer on contact/news/faq pages
- [ ] Verify footer renders identically on all pages

---

**Last Updated**: January 2, 2026  
**Status**: ✅ Mapping Complete | 🔲 Contact Info Pending Replacement  
**Priority**: 🔴 Critical for contact info; 🟢 Low/none for widgets
