# Services Data Mapping

> **Purpose**: Maps all service directory and service category pages to their JavaScript files and data sources.

---

## Overview

The services section provides a comprehensive directory of Zamboanga City LGU services across 10+ categories. Currently contains **Solano, Nueva Vizcaya service data** (office names, hotlines, fees, processing times) that must be replaced with **Zamboanga City LGU services**.

---

## Services Pages

| Page path                        | JS file(s) used       | Data source(s)                              | Data type / description                                                                                      | Notes / TODO-ZAMBOANGA linkage                                                                                                                               |
| -------------------------------- | --------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `/services/index.html`           | `assets/js/search.js` | `data/services.json`                        | Main services directory with search/filter functionality - displays all municipal services with autocomplete | Search indexes service titles, keywords, office names from services.json. **Analytics keys updated** from `bettersolano_*` to `betterzamboanga_*` in Phase 2 |
| `/services/agriculture.html`     | None (static)         | Conceptually linked to `data/services.json` | Static page listing agricultural services - links to service detail pages                                    | No dynamic JS rendering, but content should align with agriculture category entries in services.json                                                         |
| `/services/business.html`        | None (static)         | Conceptually linked to `data/services.json` | Static page for business permits, licensing, tax services                                                    | Content should match business category in services.json                                                                                                      |
| `/services/certificates.html`    | None (static)         | Conceptually linked to `data/services.json` | Static page for civil registry certificates (birth, death, marriage)                                         | Links to certificate detail pages; align with services.json certificate entries                                                                              |
| `/services/education.html`       | None (static)         | Conceptually linked to `data/services.json` | Static page for education-related LGU services                                                               | Align with education category in services.json                                                                                                               |
| `/services/environment.html`     | None (static)         | Conceptually linked to `data/services.json` | Static page for environmental services and permits                                                           | Align with environment category in services.json                                                                                                             |
| `/services/health.html`          | None (static)         | Conceptually linked to `data/services.json` | Static page for health services and programs                                                                 | Align with health category in services.json                                                                                                                  |
| `/services/infrastructure.html`  | None (static)         | Conceptually linked to `data/services.json` | Static page for engineering, building permits, zoning                                                        | Align with infrastructure category in services.json                                                                                                          |
| `/services/public-safety.html`   | None (static)         | Conceptually linked to `data/services.json` | Static page for MDRRMO, police assistance, fire services                                                     | Align with public safety category in services.json                                                                                                           |
| `/services/social-services.html` | None (static)         | Conceptually linked to `data/services.json` | Static page for MSWDO social welfare programs                                                                | Align with social services category in services.json                                                                                                         |
| `/services/tax-payments.html`    | None (static)         | Conceptually linked to `data/services.json` | Static page for tax payment channels and procedures                                                          | Align with tax payment entries in services.json                                                                                                              |

---

## Data Sources Detail

### 1. `data/services.json`

**Location**: `data/services.json`

**Structure** (1012 lines):

```json
{
  "__localization_note": "TODO-ZAMBOANGA: This file contains Solano municipal services. Replace with Zamboanga City LGU services: verify office names, hotlines, fees, processing times, and URLs. Update assets/images/services/ directory as needed. Validate changes with assets/js/services-validator.js.",
  "services": [
    {
      "id": 1,
      "title": "Birth Certificate Request",
      "category": "Certificates",
      "categoryId": "certificates",
      "description": "Request for certified true copy of birth certificate",
      "keywords": ["birth", "certificate", "PSA", "civil registrar"],
      "office": "Municipal Civil Registrar's Office",
      "location": "2nd Floor, Municipal Hall, Solano, Nueva Vizcaya",
      "hours": "Monday-Friday, 8:00 AM - 5:00 PM",
      "hotline": "0912-345-6789",
      "requirements": [
        "Valid ID",
        "Accomplished application form",
        "Payment receipt"
      ],
      "fees": "₱150.00 per copy",
      "processing_time": "3-5 working days",
      "steps": [
        "Fill out application form",
        "Submit requirements",
        "Pay fees at cashier",
        "Claim certificate"
      ],
      "howToApply": "Walk-in at Civil Registrar's Office or apply online via Filipizen portal",
      "notes": "For PSA-authenticated copies, processing may take 7-10 days"
    }
    // ... ~50+ more Solano services
  ]
}
```

**Fields Explanation**:

- `id` - Unique service identifier (sequential numbering)
- `title` - Service name (e.g., "Birth Certificate Request")
- `category` - Display category ("Certificates", "Business", "Health", etc.)
- `categoryId` - URL-safe category slug ("certificates", "business", "health")
- `description` - Brief service description
- `keywords` - Array of searchable terms for autocomplete
- `office` - Responsible LGU office/department
- `location` - Physical office location (floor, building, address)
- `hours` - Operating hours
- `hotline` - Office contact number
- `requirements` - Array of required documents
- `fees` - Service fee (use ₱ symbol, e.g., "₱150.00" or "FREE")
- `processing_time` - Expected turnaround (e.g., "Same day", "3-5 working days")
- `steps` - Array of procedural steps
- `howToApply` - Application method (walk-in, online, both)
- `notes` - Additional information, disclaimers, special conditions

**Replacement Requirements**:

- Replace **all ~50+ service entries** with Zamboanga City LGU services
- Update `office` names (e.g., "Municipal Civil Registrar" → "Zamboanga City Civil Registrar")
- Update `location` addresses to Zamboanga City offices (City Hall, satellite offices, barangay halls)
- Update `hotline` numbers to verified Zamboanga City office contacts
- Update `fees` to match Zamboanga City fee schedules (may differ from Solano)
- Update `processing_time` to reflect Zamboanga City actual turnaround times
- Update `howToApply` with Zamboanga City online portals (if available)
- Update `notes` with Zamboanga City-specific instructions

**Data Sources Needed**:

- **Zamboanga City Citizens' Charter**
  - Official service catalog with fees, requirements, processing times
  - Available from City Hall or online portal
- **Individual City Offices**:
  - Civil Registrar - Certificate services
  - Business Permits & Licensing Office (BPLO) - Business permits, mayor's permits
  - City Treasurer - Tax payments, certifications
  - City Engineering - Building permits, zoning clearances
  - City Planning & Development - Locational clearances
  - City Health Office - Health certificates, sanitary permits
  - MSWDO - Social welfare services
  - City Assessor - Property tax assessment
  - City Accounting - Financial certifications
  - City Budget - Budget-related documents

---

### 2. `assets/js/services-validator.js`

**Location**: `assets/js/services-validator.js`

**Function**: JSON schema validator for `data/services.json`

**Validation Rules**:

- Checks required fields: `id`, `title`, `category`, `office`, `fees`, `processing_time`
- Validates data types (strings, arrays, numbers)
- Ensures no duplicate IDs
- Checks for empty required fields
- Validates category consistency

**Usage**:

```bash
# Run in browser console or Node.js environment
node assets/js/services-validator.js
```

**Replacement Impact**: Run validator **after** updating `data/services.json` to ensure Zamboanga City data matches expected schema. Fix any validation errors before deployment.

---

### 3. `assets/js/search.js`

**Location**: `assets/js/search.js`

**Function**: Site-wide search functionality with autocomplete

**Key Logic**:

- Fetches `data/services.json` on page load
- Builds search index from `title`, `keywords`, `description`, `office` fields
- Implements fuzzy matching for typo tolerance
- Tracks search analytics with `betterzamboanga_*` localStorage keys (updated in Phase 2)
- Renders search results with highlighting

**Replacement Impact**: No code changes needed. Search will automatically index Zamboanga City services after `data/services.json` is updated. Verify search functionality works with new data.

---

### 4. Service Category Static Pages

**Locations**:

- `services/agriculture.html`
- `services/business.html`
- `services/certificates.html`
- `services/education.html`
- `services/environment.html`
- `services/health.html`
- `services/infrastructure.html`
- `services/public-safety.html`
- `services/social-services.html`
- `services/tax-payments.html`

**Content**: Static HTML with service descriptions, links to detail pages

**Data Relationship**: These pages are **not dynamically generated** from `data/services.json`, but their content should **semantically align** with corresponding category entries in the JSON file.

**Replacement Impact**:

- Review each static page and ensure listed services match those in updated `data/services.json`
- Update any hardcoded service titles, fees, or office names
- Add/remove services as needed to reflect Zamboanga City offerings
- Ensure links to `/service-details/*.html` pages are correct

---

## Data Replacement Workflow

### Phase 3.1: Gather Data

1. **Official Service Catalog**:

   - Source: Zamboanga City Citizens' Charter (printed or online)
   - Request: Complete list of all city services with fees and requirements
   - Format: PDF or Excel

2. **Office-Specific Services**:

   - Visit or contact each city office
   - Gather: Service names, requirements, fees, processing times, hotlines
   - Format: Word doc, Excel, or paper forms

3. **Online Service Portals**:
   - Check if Zamboanga City has online portals (e.g., ePay, business permits online)
   - Document: URLs, procedures, supported services

### Phase 3.2: Update Files

1. **Edit `data/services.json`**:

   - Back up original file first
   - Replace each service entry in `services` array
   - Maintain JSON structure (same field names)
   - Use sequential IDs starting from 1
   - Ensure proper JSON syntax (commas, brackets, quotes)

2. **Validate JSON**:

   ```bash
   # Check syntax
   jq . data/services.json

   # Run schema validator
   node assets/js/services-validator.js
   ```

3. **Update static category pages**:

   - Review `services/*.html` files
   - Update service listings to match `data/services.json`
   - Update fees, office names, hotlines
   - Add new services, remove obsolete ones

4. **Update service detail pages**:
   - See **service-details-data.md** for mapping
   - Ensure detail pages align with `data/services.json` entries

### Phase 3.3: Testing

1. **Search functionality**:

   - Open `services/index.html`
   - Test search with various keywords
   - Verify autocomplete suggests Zamboanga City services
   - Check search results link to correct pages

2. **Category pages**:

   - Navigate to each `services/*.html` page
   - Verify all services listed
   - Check links to detail pages work

3. **Data accuracy**:
   - Cross-reference with official Citizens' Charter
   - Verify fees match city ordinances
   - Confirm hotlines are correct

---

## Dependencies

### Global Scripts (loaded on all pages)

- `assets/js/translations.js` - UI language strings
- `assets/js/info-bar.js` - Weather/currency/time widgets
- `assets/js/main.js` - Navigation and scroll behavior
- `assets/js/version.js` - Version display

### Page-Specific Scripts

- `assets/js/search.js` - Search and autocomplete (reads services.json)
- `assets/js/services-validator.js` - Schema validator (dev tool only)

### External Libraries

- None (pure vanilla JavaScript)

---

## Related Documentation

- **[After-UI-Localization.md](../After-UI-Localization.md)** - Services JSON \_\_localization_note
- **[DATA_REPLACEMENT_GUIDE.md](../DATA_REPLACEMENT_GUIDE.md)** - Services section replacement guide
- **[service-details-data.md](service-details-data.md)** - Individual service detail page mappings

---

## Known Issues / Considerations

1. **Service Count**: Solano lists ~50 services. Zamboanga City as a larger city likely has **100+ services**. JSON file will grow significantly.

2. **Category Alignment**: Ensure new services fit into existing 10 categories or add new category pages as needed.

3. **Hotline Accuracy**: Critical to verify all hotlines before publishing. Incorrect numbers harm public trust.

4. **Fee Updates**: Service fees may change via city ordinances. Establish process for periodic updates.

5. **Online Portals**: If Zamboanga City has e-services, document URLs clearly in `howToApply` field.

6. **Multi-language**: Services.json is English-only. Consider adding Filipino/Chavacano translations in future phases.

7. **Search Performance**: With 100+ services, search indexing may slow page load. Monitor performance after data replacement.

8. **Validation**: Always run `services-validator.js` before deployment to catch schema errors early.

---

**Last Updated**: January 2, 2026  
**Status**: ✅ Mapping Complete | 🔲 Data Pending Replacement  
**Priority**: 🔴 High (essential for user functionality)
