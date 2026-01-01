# Service Details Data Mapping

> **Purpose**: Maps individual service detail pages (birth certificates, business permits, municipal offices, etc.) to their data sources and relationships with `data/services.json`.

---

## Overview

The `service-details/` directory contains **21 static HTML pages** providing detailed information about specific services and municipal offices. These pages are **primarily static HTML** with embedded content, but conceptually linked to entries in `data/services.json`. Currently contains **Solano, Nueva Vizcaya service information** that must be updated for **Zamboanga City**.

---

## Service Detail Pages

| Page path                                          | JS file(s) used | Data source(s)                                                                 | Data type / description                                                                                | Notes / TODO-ZAMBOANGA linkage                                                                       |
| -------------------------------------------------- | --------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `/service-details/birth-certificate.html`          | None            | Conceptually linked to `data/services.json` (Birth Certificate entry)          | Static HTML page with embedded details: requirements, fees (₱150), processing time, steps, office info | Must align with Civil Registrar entry in services.json. Update Solano hotline, fees, office location |
| `/service-details/death-certificate.html`          | None            | Conceptually linked to `data/services.json` (Death Certificate entry)          | Static HTML with death certificate request details                                                     | Align with services.json. Update fees, requirements, Zamboanga City Civil Registrar contact          |
| `/service-details/marriage-certificate.html`       | None            | Conceptually linked to `data/services.json` (Marriage Certificate entry)       | Static HTML with marriage certificate request details                                                  | Align with services.json. Update fees, processing time, office info                                  |
| `/service-details/business-permits-licensing.html` | None            | Conceptually linked to `data/services.json` (Business Permits entries)         | Static HTML describing BPLO services: new business permits, renewals, requirements                     | Update to Zamboanga City BPLO procedures, fees schedule, zoning requirements                         |
| `/service-details/tricycle-franchising.html`       | None            | Conceptually linked to `data/services.json` (Transportation/franchising entry) | Static HTML for tricycle franchise application process                                                 | Update to Zamboanga City franchising requirements (route coverage may differ)                        |
| `/service-details/property-declaration.html`       | None            | Conceptually linked to `data/services.json` (Assessor's Office entry)          | Static HTML for real property tax declaration process                                                  | Update to Zamboanga City Assessor's Office procedures, tax rates                                     |
| `/service-details/civil-registrar.html`            | None            | Conceptually linked to `data/services.json` (multiple certificate entries)     | Static HTML overview of Municipal Civil Registrar services                                             | Update office name to "City Civil Registrar", Zamboanga City location, hotlines                      |
| `/service-details/municipal-accounting.html`       | None            | Conceptually linked to `data/services.json` (Accounting Office entries)        | Static HTML for City Accounting Office services: financial certifications, reports                     | Update to Zamboanga City Accounting Office contact, services offered                                 |
| `/service-details/municipal-agriculture.html`      | None            | Conceptually linked to `data/services.json` (Agriculture Office entries)       | Static HTML for Agriculture Office: farm registration, RSBSA, livestock, fishery services              | Update to Zamboanga City Agriculture Office (may have different programs)                            |
| `/service-details/municipal-assessor.html`         | None            | Conceptually linked to `data/services.json` (Assessor's Office entries)        | Static HTML for Assessor's Office: property assessment, tax declarations                               | Update to Zamboanga City Assessor's Office rates, classification procedures                          |
| `/service-details/municipal-budget.html`           | None            | Conceptually linked to `data/services.json` (Budget Office entries)            | Static HTML for Budget Office: budget documents, certifications                                        | Update to Zamboanga City Budget Office contact information                                           |
| `/service-details/municipal-civil-registrar.html`  | None            | Conceptually linked to `data/services.json` (Civil Registrar entries)          | Static HTML duplicate/variation of civil-registrar.html                                                | Consolidate or update similarly to civil-registrar.html                                              |
| `/service-details/municipal-engineering.html`      | None            | Conceptually linked to `data/services.json` (Engineering Office entries)       | Static HTML for Engineering Office: building permits, electrical permits, fencing, excavation          | Update to Zamboanga City Engineering Office permit fees, requirements, zoning codes                  |
| `/service-details/municipal-general-services.html` | None            | Conceptually linked to `data/services.json` (General Services Office entries)  | Static HTML for General Services Office: janitorial, maintenance, vehicle services                     | Update to Zamboanga City GSO contact and services                                                    |
| `/service-details/municipal-planning.html`         | None            | Conceptually linked to `data/services.json` (Planning Office entries)          | Static HTML for Planning & Development Office: locational clearance, zoning clearance, CLUP            | Update to Zamboanga City CPDO procedures, comprehensive land use plan                                |
| `/service-details/municipal-treasurer.html`        | None            | Conceptually linked to `data/services.json` (Treasurer's Office entries)       | Static HTML for Treasurer's Office: real property tax, business tax, payments, certifications          | Update to Zamboanga City Treasurer tax rates, payment channels, QR codes                             |
| `/service-details/mswdo.html`                      | None            | Conceptually linked to `data/services.json` (MSWDO entries)                    | Static HTML for Municipal Social Welfare & Development Office: social services, assistance programs    | Update to Zamboanga City MSWDO programs (may have more extensive services)                           |
| `/service-details/mswdo-services.html`             | None            | Conceptually linked to `data/services.json` (MSWDO service listings)           | Static HTML duplicate/variation of mswdo.html with detailed service listings                           | Consolidate or update similarly to mswdo.html                                                        |
| `/service-details/seedo-public-market.html`        | None            | Conceptually linked to `data/services.json` (SEEDO/Market entries)             | Static HTML for Socio-Economic Development Office - Public Market services: stall rentals, permits     | Update to Zamboanga City public market management, rental rates                                      |
| `/service-details/seedo-slaughterhouse.html`       | None            | Conceptually linked to `data/services.json` (SEEDO/Slaughterhouse entries)     | Static HTML for SEEDO - Slaughterhouse services: animal inspection, meat inspection fees               | Update to Zamboanga City slaughterhouse operations, inspection fees                                  |
| `/service-details/general-services.html`           | None            | Conceptually linked to `data/services.json` (General Services entries)         | Static HTML for general municipal services overview                                                    | May be duplicate of municipal-general-services.html; verify and consolidate                          |
| `/service-details/human-resource-management.html`  | None            | Conceptually linked to `data/services.json` (HRMO entries)                     | Static HTML for Human Resource Management Office: employment, training, records                        | Update to Zamboanga City HRMO contact and services                                                   |

---

## Data Relationship

### Static HTML vs. `data/services.json`

**Important**: These service detail pages are **NOT dynamically generated** from `data/services.json`. They are **static HTML files** with manually written content.

**Relationship**:

1. Each detail page **should conceptually align** with one or more service entries in `data/services.json`
2. Information like fees, requirements, processing times should **match** between the static page and JSON entry
3. Users may navigate from service category pages → detail pages → or use search to find services in JSON

**Implication**: When updating for Zamboanga City:

- Update **both** the static HTML detail page **and** the corresponding `data/services.json` entry
- Ensure consistency across both sources
- Consider consolidating duplicates (e.g., `civil-registrar.html` vs `municipal-civil-registrar.html`)

---

## Replacement Requirements by Page Type

### Certificate Pages (Birth, Death, Marriage)

**Files**: `birth-certificate.html`, `death-certificate.html`, `marriage-certificate.html`

**Update Checklist**:

- [ ] Office name: "Municipal Civil Registrar" → "Zamboanga City Civil Registrar"
- [ ] Office location: Update to Zamboanga City Hall floor/room number
- [ ] Hotline numbers: Replace Solano numbers with Zamboanga City Civil Registrar contact
- [ ] Fees: Update to Zamboanga City fee schedule (verify ₱150 per copy is still correct)
- [ ] Processing time: Update to reflect Zamboanga City actual turnaround (may differ)
- [ ] Requirements: Verify required documents match Zamboanga City procedures
- [ ] Online portals: If Zamboanga City has e-services (e.g., PSA Serbilis integration), add links
- [ ] Operating hours: Update to Zamboanga City Civil Registrar schedule

**Data Source**: Zamboanga City Civil Registrar's Office

---

### Business & Licensing Pages

**Files**: `business-permits-licensing.html`, `tricycle-franchising.html`

**Update Checklist**:

- [ ] Office name: "Municipal BPLO" → "Zamboanga City BPLO"
- [ ] Fee schedules: Update to Zamboanga City business permit fees (varies by business type)
- [ ] Documentary requirements: Verify barangay clearance, sanitary permit, fire safety requirements
- [ ] Processing time: Update to Zamboanga City BPLO turnaround
- [ ] Zoning restrictions: Update to Zamboanga City zoning ordinances
- [ ] Tricycle franchise: Update route coverage areas (Solano routes ≠ Zamboanga City routes)
- [ ] Contact information: Update BPLO and Transportation Office hotlines

**Data Source**:

- Zamboanga City Business Permits & Licensing Office
- Zamboanga City Transportation Office (for tricycle franchising)

---

### Property & Tax Pages

**Files**: `property-declaration.html`, `municipal-assessor.html`, `municipal-treasurer.html`

**Update Checklist**:

- [ ] Office names: "Municipal Assessor" → "City Assessor", "Municipal Treasurer" → "City Treasurer"
- [ ] Tax rates: Update real property tax rates per Zamboanga City tax ordinance
- [ ] Property classification: Update land use classifications (residential, commercial, agricultural, etc.)
- [ ] Payment channels: Update with Zamboanga City payment options (online portals, bank partners, GCash/PayMaya)
- [ ] Discount schedules: Update early payment discounts, senior citizen privileges
- [ ] Penalties: Update interest rates for late payment
- [ ] Contact information: Update Assessor and Treasurer office hotlines, email

**Data Source**:

- Zamboanga City Assessor's Office
- Zamboanga City Treasurer's Office
- Zamboanga City Revenue Code/Tax Ordinance

---

### Municipal Office Pages

**Files**: All `municipal-*.html` files (accounting, agriculture, budget, engineering, general-services, planning)

**Update Checklist**:

- [ ] Office names: "Municipal [Office]" → "City [Office]" or "[Zamboanga] City [Office]"
- [ ] Office locations: Update to Zamboanga City Hall floor/room numbers or satellite offices
- [ ] Services offered: Verify Zamboanga City offices offer same services (may have additional services)
- [ ] Contact information: Update all hotlines, email addresses, social media
- [ ] Department heads: Consider adding current department head names (if available)
- [ ] Operating hours: Update to Zamboanga City government hours
- [ ] Service fees: Update all fees to Zamboanga City rates

**Data Source**: Individual Zamboanga City offices/departments

---

### Social Services Pages

**Files**: `mswdo.html`, `mswdo-services.html`

**Update Checklist**:

- [ ] Office name: Verify "MSWDO" or "City Social Welfare & Development Office"
- [ ] Programs offered: Update to Zamboanga City social welfare programs (may have more extensive programs)
- [ ] Assistance types: Update financial assistance, medical assistance, burial assistance amounts
- [ ] Eligibility criteria: Verify income thresholds, residency requirements for Zamboanga City
- [ ] Application procedures: Update documentary requirements
- [ ] Contact information: Update MSWDO hotline, social workers' contact
- [ ] Satellite offices: Add barangay social workers' contact if applicable

**Data Source**: Zamboanga City MSWDO

---

### SEEDO Pages

**Files**: `seedo-public-market.html`, `seedo-slaughterhouse.html`

**Update Checklist**:

- [ ] Verify SEEDO exists in Zamboanga City structure (may be under different office)
- [ ] Public market: Update stall rental rates, market locations (Zamboanga City may have multiple markets)
- [ ] Slaughterhouse: Update meat inspection fees, operating hours, location
- [ ] Contact information: Update office hotlines

**Data Source**:

- Zamboanga City equivalent of SEEDO (may be under City Veterinarian's Office or Agriculture)
- City Markets Administrator

---

## Data Replacement Workflow

### Phase 3.1: Content Audit

1. **Review each of 21 detail pages**:

   - Identify all Solano-specific content (office names, hotlines, fees, addresses)
   - Note which services are relevant to Zamboanga City (some may not exist)
   - Identify duplicate pages (e.g., civil-registrar.html vs municipal-civil-registrar.html)

2. **Gather Zamboanga City data**:
   - Contact each city office for updated information
   - Request Citizens' Charter for official service descriptions
   - Verify fees via city ordinances

### Phase 3.2: Update HTML Files

1. **For each `.html` file in `service-details/`**:

   - Open file in editor
   - Replace all Solano references with Zamboanga City equivalents
   - Update meta tags (titles, descriptions, OG tags)
   - Update breadcrumbs, page headings
   - Update embedded content (fees, requirements, steps, contact info)
   - Verify links to other pages still work

2. **Update `data/services.json` in parallel**:
   - Ensure JSON entries match detail page content
   - Maintain consistency across both sources

### Phase 3.3: Consolidation (Optional)

1. **Identify duplicate pages**:

   - `civil-registrar.html` vs `municipal-civil-registrar.html`
   - `general-services.html` vs `municipal-general-services.html`
   - `mswdo.html` vs `mswdo-services.html`

2. **Consolidate or differentiate**:
   - If content is essentially the same, merge into one page
   - If serving different purposes, clarify distinction in content

### Phase 3.4: Testing

1. **Manual review**:

   - Navigate to each detail page
   - Verify all Solano references removed
   - Check contact information is correct
   - Validate fees against official sources

2. **Link validation**:

   - Ensure links from category pages point to correct detail pages
   - Check breadcrumb navigation works
   - Verify search results link correctly

3. **Content accuracy**:
   - Cross-reference with Citizens' Charter
   - Verify fees match city ordinances
   - Confirm office locations are accurate

---

## Dependencies

### Global Scripts (loaded on all service-details pages)

- `assets/js/translations.js` - UI language strings
- `assets/js/info-bar.js` - Weather/currency/time widgets
- `assets/js/main.js` - Navigation and scroll behavior
- `assets/js/version.js` - Version display

### Page-Specific Scripts

- None (all service detail pages are static HTML)

### External Libraries

- None

---

## Related Documentation

- **[services-data.md](services-data.md)** - Service category pages and services.json mapping
- **[After-UI-Localization.md](../After-UI-Localization.md)** - Services JSON \_\_localization_note
- **[DATA_REPLACEMENT_GUIDE.md](../DATA_REPLACEMENT_GUIDE.md)** - Services section replacement guide

---

## Known Issues / Considerations

1. **Duplicate Pages**: Several pages appear to be duplicates with slight variations. Consider consolidating to reduce maintenance.

2. **Static vs. Dynamic**: These pages are static HTML, making them easier to update but harder to maintain consistency with `data/services.json`. Consider future migration to template-based generation.

3. **Page Count**: 21 detail pages is manageable but grows with each new service. Consider creating a generic service detail template that reads from JSON.

4. **Content Drift**: Static pages risk becoming outdated if not updated alongside `data/services.json`. Establish review schedule.

5. **SEO**: Each page has unique meta tags and OG tags. Ensure Zamboanga City-specific keywords are included for search visibility.

6. **Accessibility**: Verify all pages maintain WCAG 2.1 AA compliance after content updates (check heading hierarchy, alt text, ARIA labels).

7. **Mobile Responsiveness**: Test each page on mobile devices after content updates to ensure tables, lists, and contact info display properly.

8. **Office Structure**: Zamboanga City as a larger city may have different office structures than Solano. Some offices may be combined or split. Verify organizational chart before updating.

---

**Last Updated**: January 2, 2026  
**Status**: ✅ Mapping Complete | 🔲 Content Pending Replacement  
**Priority**: 🟡 High (after services.json, but essential for completeness)
