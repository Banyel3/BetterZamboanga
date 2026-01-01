# News, Contact, FAQ Data Mapping

> **Purpose**: Maps news, contact, and FAQ pages to their data sources and identifies opportunities for future JSON extraction.

---

## Overview

These pages currently use **primarily static HTML content** with minimal or no dynamic JavaScript data rendering. They contain **Solano, Nueva Vizcaya information** (contact details, office locations, hotlines) that must be updated for **Zamboanga City**.

---

## Pages Mapping

| Page path             | JS file(s) used | Data source(s)        | Data type / description                                                                  | Notes / TODO-ZAMBOANGA linkage                                                                                            |
| --------------------- | --------------- | --------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `/news/index.html`    | None            | Static HTML (no JSON) | News and announcements page - currently static content or placeholder                    | No dynamic data loading. Content is embedded HTML. Consider future extraction to `data/news.json` for easier updates      |
| `/contact/index.html` | None            | Static HTML (no JSON) | Contact information page with office locations, hotlines, email, map embed, office hours | No dynamic data. All contact info is hardcoded HTML. Update all Solano addresses, hotlines, coordinates to Zamboanga City |
| `/faq/index.html`     | None            | Static HTML (no JSON) | Frequently Asked Questions page with accordion/expandable sections                       | No dynamic data. FAQ content is static HTML. Update service-related FAQs to reflect Zamboanga City procedures             |

---

## Data Sources Detail

### 1. `news/index.html`

**Location**: `news/index.html`

**Current Implementation**: Static HTML page

**Content Structure**:

- Page header and navigation (standard)
- News article cards or list (if implemented)
- Each article may have: title, date, excerpt, thumbnail image, read more link
- Pagination (if many articles)

**Replacement Requirements**:

- Update meta tags (title, description, OG tags) for Zamboanga City
- If news content exists: Review each article and replace Solano-specific news with Zamboanga City news (or remove if placeholder)
- Update references from "Municipality of Solano" to "City of Zamboanga"
- Update breadcrumbs, page headings

**Future Enhancement Recommendation**:
Create `data/news.json` with structure:

```json
{
  "news": [
    {
      "id": 1,
      "title": "Zamboanga City Launches New Public Service Initiative",
      "date": "2026-01-02",
      "category": "Government Programs",
      "excerpt": "The City Government of Zamboanga announces...",
      "image": "assets/images/news/initiative-2026.jpg",
      "link": "news/initiative-2026.html"
    }
  ]
}
```

Then create `assets/js/news.js` to dynamically render news cards from JSON. This allows easier content management without editing HTML.

**Priority for Phase 3**: Low (can leave as static HTML initially; enhance later)

---

### 2. `contact/index.html`

**Location**: `contact/index.html`

**Current Implementation**: Static HTML with embedded contact information

**Content Structure**:

- City Hall address and contact information
- Office hotlines (Police, Fire, MDRRMO, etc.) - **Critical to update**
- Email addresses (e.g., info@solano.gov.ph → info@zamboanga.gov.ph)
- Office hours (Mon-Fri 8:00 AM - 5:00 PM)
- Map embed (Google Maps or OpenStreetMap) showing City Hall location
- Social media links (Facebook, Twitter, etc.)
- Contact form (if implemented)

**Replacement Requirements**:

- **🔴 Critical**: Update all emergency hotlines (same as index.html hotline bar)
  - Police, Fire, MDRRMO, Rescue, City Hall main line
- Update City Hall address:
  - From: "Municipal Hall, Solano, Nueva Vizcaya 3708"
  - To: "City Hall, [Complete Address], Zamboanga City 7000"
- Update office hotlines for individual departments
- Update email addresses:
  - Generic: info@zamboanga.gov.ph (if available)
  - Volunteer: volunteer@betterzamboanga.org (TODO marker in index.html)
- Update office hours (verify Zamboanga City government hours)
- Update map embed coordinates:
  - From: Solano coordinates (16.5167, 121.1833)
  - To: Zamboanga City Hall coordinates (6.9214, 122.0790)
  - Update map iframe src or embed code
- Update social media links (TODO markers in index.html for Facebook, LinkedIn, Discord)
- Update meta tags for Zamboanga City

**Data Sources Needed**:

- **Zamboanga City Public Information Office**: Official contact directory
- **City Hall**: Complete address, main hotline, office hours
- **Individual City Offices**: Department-specific hotlines and emails
- **Social Media**: Official Zamboanga City government Facebook page, other platforms

**Map Embed Update**:
If using Google Maps iframe:

```html
<!-- Old (Solano) -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.1234!2d121.1833!3d16.5167!..."
/>

<!-- New (Zamboanga City) -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.1234!2d122.0790!3d6.9214!..."
/>
```

Or use OpenStreetMap embed with updated coordinates.

**Future Enhancement Recommendation**:
Create `data/contact.json` with structure:

```json
{
  "city_hall": {
    "address": "City Hall, Zamboanga City 7000",
    "hotline": "(062) XXX-XXXX",
    "email": "info@zamboanga.gov.ph",
    "hours": "Monday-Friday, 8:00 AM - 5:00 PM",
    "coordinates": {
      "lat": 6.9214,
      "lon": 122.079
    }
  },
  "emergency": {
    "police": "0927-XXX-XXXX",
    "fire": "0936-XXX-XXXX",
    "mdrrmo": "0926-XXX-XXXX",
    "rescue": "09XX-XXX-XXXX"
  },
  "departments": [
    {
      "name": "City Treasurer's Office",
      "hotline": "09XX-XXX-XXXX",
      "email": "treasurer@zamboanga.gov.ph"
    }
    // ... more departments
  ],
  "social_media": {
    "facebook": "https://www.facebook.com/OfficialZamboangaCity/",
    "twitter": "",
    "instagram": ""
  }
}
```

Then create `assets/js/contact.js` to dynamically render contact information from JSON. This centralizes contact data for easier updates.

**Priority for Phase 3**: 🔴 Critical (accurate contact information is essential for public service)

---

### 3. `faq/index.html`

**Location**: `faq/index.html`

**Current Implementation**: Static HTML with FAQ accordion/expandable sections

**Content Structure**:

- Page header and navigation (standard)
- FAQ sections organized by category:
  - General Information
  - Municipal Services
  - Certificates
  - Business Permits
  - Tax Payments
  - Online Services
  - etc.
- Each FAQ item has:
  - Question (clickable to expand)
  - Answer (hidden by default, expands on click)

**Replacement Requirements**:

- Update meta tags for Zamboanga City
- Review each FAQ question and answer:
  - Update references from "Solano" to "Zamboanga City"
  - Update "Municipality" to "City"
  - Update service-specific FAQs to reflect Zamboanga City procedures (fees, processing times, requirements may differ)
  - Update contact information in answers (hotlines, emails, office locations)
  - Remove FAQs that don't apply to Zamboanga City
  - Add new FAQs relevant to Zamboanga City services

**Common FAQ Topics to Update**:

1. "How do I get a birth certificate?" - Update fees, office location, processing time
2. "How do I apply for a business permit?" - Update BPLO procedures, fees, requirements
3. "How do I pay my real property tax?" - Update Treasurer's Office procedures, payment channels
4. "What are the requirements for a building permit?" - Update Engineering Office requirements
5. "How do I contact the mayor's office?" - Update City Hall contact information

**Future Enhancement Recommendation**:
Create `data/faq.json` with structure:

```json
{
  "faq": [
    {
      "id": 1,
      "category": "General Information",
      "question": "What are the office hours of Zamboanga City Hall?",
      "answer": "City Hall is open Monday to Friday, 8:00 AM to 5:00 PM, except holidays."
    },
    {
      "id": 2,
      "category": "Certificates",
      "question": "How do I request a birth certificate?",
      "answer": "Visit the City Civil Registrar's Office at City Hall with your valid ID and ₱150 fee..."
    }
    // ... more FAQs
  ]
}
```

Then create `assets/js/faq.js` to dynamically render FAQ accordion from JSON. This allows easier content management and search functionality.

**Priority for Phase 3**: 🟢 Medium (helpful for users, but lower urgency than contact/services)

---

## Data Replacement Workflow

### Phase 3.1: Content Review

1. **News Page**:

   - Review current content (may be placeholder)
   - Decide whether to populate with Zamboanga City news or leave as future enhancement
   - If populating: Gather recent Zamboanga City news from PIO

2. **Contact Page**:

   - Audit all contact information on page
   - List all hotlines, emails, addresses that need updating
   - Gather verified Zamboanga City contact information

3. **FAQ Page**:
   - Review all FAQ items
   - Identify service-specific FAQs that need updating
   - List new FAQs to add for Zamboanga City

### Phase 3.2: Update HTML Files

1. **Edit `news/index.html`**:

   - Update meta tags
   - Update static content
   - Replace/remove Solano-specific news items

2. **Edit `contact/index.html`**:

   - Update all hotlines (emergency and department)
   - Update City Hall address
   - Update email addresses
   - Update office hours
   - Update map embed coordinates
   - Update social media links
   - Update meta tags

3. **Edit `faq/index.html`**:
   - Update meta tags
   - Update each FAQ question/answer with Zamboanga City information
   - Add new FAQs as needed
   - Remove obsolete FAQs

### Phase 3.3: Testing

1. **Contact Page**:

   - Verify all hotlines are correct (test call if possible)
   - Verify map embed shows correct location (Zamboanga City Hall)
   - Check email addresses are formatted correctly
   - Test contact form if present

2. **FAQ Page**:

   - Review all FAQ content for accuracy
   - Test accordion expand/collapse functionality
   - Verify internal links in FAQ answers work correctly

3. **News Page**:
   - Verify any news content is accurate and current
   - Check image links work if news items have images

---

## Dependencies

### Global Scripts (loaded on all pages)

- `assets/js/translations.js` - UI language strings
- `assets/js/info-bar.js` - Weather/currency/time widgets
- `assets/js/main.js` - Navigation and scroll behavior (includes FAQ accordion logic if present)
- `assets/js/version.js` - Version display

### Page-Specific Scripts

- None currently (all three pages are static HTML)

### External Libraries

- None required for current static implementation
- Map embed may use Google Maps or OpenStreetMap embed code (no JS library needed)

---

## Related Documentation

- **[After-UI-Localization.md](../After-UI-Localization.md)** - TODO markers for contact information, social media, volunteer email
- **[DATA_REPLACEMENT_GUIDE.md](../DATA_REPLACEMENT_GUIDE.md)** - Contact information replacement section
- **[services-data.md](services-data.md)** - Service-related data that FAQs reference

---

## Known Issues / Considerations

1. **News Management**: Without a CMS or JSON data source, updating news requires editing HTML. Consider future migration to JSON-based news system for easier content management.

2. **Contact Information Accuracy**: 🔴 **Critical** - Incorrect hotlines or addresses directly harm public service. Triple-check all contact information before publishing.

3. **Map Embed**: Verify map embed shows correct Zamboanga City Hall location. Test on multiple devices (mobile, desktop).

4. **Email Addresses**: Verify Zamboanga City has official email addresses (e.g., info@zamboanga.gov.ph). Some LGUs may not have functional email infrastructure.

5. **Social Media**: Verify Zamboanga City has official government social media accounts. Update links to verified official pages only.

6. **FAQ Maintenance**: FAQs can become outdated quickly as procedures/fees change. Establish review schedule (e.g., semi-annual).

7. **Contact Form**: If contact page has a form, verify it's connected to correct email recipient or backend service after updating.

8. **Office Hours**: Government office hours may vary (some offices may have different hours). Verify general City Hall hours and note exceptions if needed.

9. **Multi-language**: Contact information and FAQs are currently in English only. Consider adding Filipino/Chavacano translations in future phases.

10. **Accessibility**: Ensure map embeds have proper ARIA labels and keyboard navigation support.

---

## Future Enhancements (Post-Phase 3)

### News System

- Create `data/news.json` and `assets/js/news.js` for dynamic news rendering
- Implement pagination for news articles
- Add news category filtering
- Consider RSS feed generation

### Contact Information Centralization

- Create `data/contact.json` to centralize all contact information
- Use same JSON for contact page, footer, hotline bar, and other locations
- Single source of truth for contact updates

### FAQ Enhancement

- Create `data/faq.json` and `assets/js/faq.js` for dynamic FAQ rendering
- Implement FAQ search functionality
- Add FAQ categories with filtering
- Track popular FAQs with analytics

### Contact Form Backend

- Implement email sending functionality if contact form exists
- Add CAPTCHA for spam prevention
- Store form submissions in database for tracking

---

**Last Updated**: January 2, 2026  
**Status**: ✅ Mapping Complete | 🔲 Content Pending Replacement  
**Priority**: 🔴 Contact page is critical; News and FAQ are medium priority
