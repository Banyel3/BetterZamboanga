# Legislative Data Mapping

> **Purpose**: Maps legislative document pages (ordinances and resolutions) to their JavaScript files and data sources.

---

## Overview

The legislative section provides searchable databases of city ordinances and resolutions enacted by the Sangguniang Panlungsod. Currently contains **Solano Sangguniang Bayan ordinances and resolutions** that must be replaced with **Zamboanga City Sangguniang Panlungsod legislative documents**.

---

## Legislative Pages

| Page path                                | JS file(s) used            | Data source(s)                                                            | Data type / description                                                                                                                | Notes / TODO-ZAMBOANGA linkage                                                                                                                      |
| ---------------------------------------- | -------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/legislative/index.html`                | None (static)              | Conceptually linked to `data/ordinances.json` and `data/resolutions.json` | Static HTML overview of legislative branch, Sangguniang Panlungsod structure, lawmaking process                                        | No dynamic JS; update text from "Sangguniang Bayan" to "Sangguniang Panlungsod", "Municipality" to "City"                                           |
| `/legislative/ordinance-framework.html`  | `assets/js/ordinances.js`  | `data/ordinances.json`                                                    | Dynamic ordinances browser with search, filter by year/category - renders ordinance cards with number, title, date, category, status   | **JS reads from ordinances.json**. **\_\_localization_note** in JSON: "Replace with recent Zamboanga City ordinances from Sangguniang Panlungsod"   |
| `/legislative/resolution-framework.html` | `assets/js/resolutions.js` | `data/resolutions.json`                                                   | Dynamic resolutions browser with search, filter by year/category - renders resolution cards with number, title, date, category, status | **JS reads from resolutions.json**. **\_\_localization_note** in JSON: "Replace with recent Zamboanga City resolutions from Sangguniang Panlungsod" |

---

## Data Sources Detail

### 1. `data/ordinances.json`

**Location**: `data/ordinances.json`

**Structure** (example - exact line count varies):

```json
{
  "__localization_note": "TODO-ZAMBOANGA: This file contains ordinances from Solano Sangguniang Bayan. Replace with recent Zamboanga City ordinances from the Sangguniang Panlungsod. Obtain from City Council Secretary's Office or official gazette. Update ordinance numbers, titles, and session dates.",
  "ordinances": [
    {
      "id": 1,
      "number": "Ordinance No. 2023-001",
      "title": "An Ordinance Establishing the Annual Budget for Fiscal Year 2023",
      "date": "2023-01-15",
      "year": 2023,
      "category": "Budget and Finance",
      "status": "Approved",
      "description": "This ordinance appropriates funds for the operations of the Municipality of Solano for the fiscal year 2023.",
      "author": "Hon. Councilor One"
    },
    {
      "id": 2,
      "number": "Ordinance No. 2023-002",
      "title": "An Ordinance Regulating the Operation of Tricycles",
      "date": "2023-02-20",
      "year": 2023,
      "category": "Transportation",
      "status": "Approved",
      "description": "This ordinance establishes regulations for tricycle operations within the municipality.",
      "author": "Hon. Councilor Two"
    }
    // ... more Solano ordinances
  ]
}
```

**Fields Explanation**:

- `id` - Unique identifier (sequential)
- `number` - Official ordinance number (format: "Ordinance No. YYYY-NNN")
- `title` - Official ordinance title (begins with "An Ordinance...")
- `date` - Date of approval (YYYY-MM-DD format)
- `year` - Year of enactment (for filtering)
- `category` - Subject category: "Budget and Finance", "Transportation", "Health and Sanitation", "Environmental Protection", "Business and Trade", "Public Safety", "Infrastructure", "Social Services", "Governance", "Other"
- `status` - "Approved", "Pending", "Vetoed", "Repealed"
- `description` - Brief summary of ordinance purpose/content
- `author` - Principal author or committee (e.g., "Committee on Finance")

**Replacement Requirements**:

- Replace entire `ordinances` array with Zamboanga City ordinances
- Update ordinance numbers to Zamboanga City format (may differ from Solano)
- Update titles to reflect Zamboanga City legislative topics
- Update dates, years, categories
- Update descriptions with Zamboanga City context
- Update author names to Zamboanga City councilors/committees
- Ensure chronological order (newest first or oldest first, be consistent)

**Data Sources Needed**:

- **Sangguniang Panlungsod Office** (City Council Secretary)

  - Official ordinance registry
  - Request: Ordinances from past 3-5 years (or all if digitized)
  - Format: Excel, PDF, or printed records

- **Zamboanga City Official Gazette** (if available)

  - Published ordinances with official text
  - May be available online or in print

- **City Legal Office**
  - May maintain codified ordinances
  - Can verify ordinance numbers and effective dates

**Recommended Count**: Aim for at least 20-50 recent ordinances for meaningful searchable database. More is better for transparency.

---

### 2. `data/resolutions.json`

**Location**: `data/resolutions.json`

**Structure** (similar to ordinances.json):

```json
{
  "__localization_note": "TODO-ZAMBOANGA: This file contains resolutions from Solano Sangguniang Bayan. Replace with recent Zamboanga City resolutions from the Sangguniang Panlungsod. Obtain from City Council Secretary's Office or official gazette. Update resolution numbers, titles, and session dates.",
  "resolutions": [
    {
      "id": 1,
      "number": "Resolution No. 2023-001",
      "title": "A Resolution Commending the Success of the Municipal Fiesta Celebration",
      "date": "2023-05-10",
      "year": 2023,
      "category": "Recognition",
      "status": "Approved",
      "description": "This resolution commends the organizing committee for the successful conduct of the annual fiesta celebration.",
      "author": "Hon. Vice Mayor Eduardo D. Tiongson"
    },
    {
      "id": 2,
      "number": "Resolution No. 2023-002",
      "title": "A Resolution Authorizing the Mayor to Enter into a Memorandum of Agreement",
      "date": "2023-06-15",
      "year": 2023,
      "category": "Authorization",
      "status": "Approved",
      "description": "This resolution authorizes the municipal mayor to enter into a MOA with the provincial government.",
      "author": "Committee on Laws and Rules"
    }
    // ... more Solano resolutions
  ]
}
```

**Fields Explanation**: Same as ordinances.json, but for resolutions.

**Categories for Resolutions**:

- "Authorization" - Authorizing officials to act
- "Recognition" - Commendations, awards, acknowledgments
- "Appointment" - Confirming appointments
- "Budget Realignment" - Budget adjustments
- "Policy Statement" - Expressing policy positions
- "Requesting" - Requesting action from other entities
- "Other"

**Replacement Requirements**: Same process as ordinances.json.

**Data Sources Needed**: Same as ordinances (Sangguniang Panlungsod Office, City Secretary).

**Recommended Count**: Aim for at least 30-100 recent resolutions (resolutions are typically more frequent than ordinances).

---

### 3. `assets/js/ordinances.js`

**Location**: `assets/js/ordinances.js`

**Function**: Fetches `data/ordinances.json` and renders ordinance cards with search and filter functionality.

**Key Logic**:

```javascript
// Pseudo-code representation
let ordinancesData = [];

fetch("data/ordinances.json")
  .then((response) => response.json())
  .then((data) => {
    ordinancesData = data.ordinances;
    renderOrdinances(ordinancesData);
    setupSearch();
    setupFilters();
  });

function renderOrdinances(ordinances) {
  // Loop through ordinances
  // Create card for each with number, title, date, category badge
  // Insert into #ordinances-container
}

function setupSearch() {
  // Listen to search input
  // Filter ordinances by title, number, description
  // Re-render filtered results
}

function setupFilters() {
  // Year filter dropdown
  // Category filter dropdown
  // Apply filters and re-render
}
```

**Replacement Impact**:

- **No code changes needed** in `ordinances.js`
- Script automatically reads and renders whatever data is in `ordinances.json`
- After updating JSON, script will display Zamboanga City ordinances
- Verify filtering and search work correctly with new data

**Header Comments** (Phase 2 update):

- File header updated to reference Better Zamboanga fork attribution
- No TODO markers in this JS file (data is external in JSON)

---

### 4. `assets/js/resolutions.js`

**Location**: `assets/js/resolutions.js`

**Function**: Same as `ordinances.js` but for resolutions data.

**Key Logic**: Identical to `ordinances.js` (fetch, render, search, filter).

**Replacement Impact**: Same as `ordinances.js` - no code changes, update JSON only.

---

### 5. `legislative/index.html` (Static)

**Location**: `legislative/index.html`

**Content**: Static HTML overview of legislative branch

**Data Relationship**:

- Does NOT dynamically read from JSON files
- Contains static text about Sangguniang Panlungsod, lawmaking process, legislative structure

**Replacement Requirements**:

- Update all references from "Sangguniang Bayan" to "Sangguniang Panlungsod"
- Update "Municipality" to "City" throughout
- Update organizational description (city council structure may differ from municipal)
- Update committee names to match Zamboanga City council committees
- Update meta tags (titles, descriptions, OG tags)
- Update breadcrumbs, headings

---

### 6. `legislative/ordinance-framework.html` (Dynamic)

**Location**: `legislative/ordinance-framework.html`

**Content**: HTML template with containers for JavaScript to populate

**Structure**:

```html
<div class="search-bar">
  <input type="text" id="ordinance-search" placeholder="Search ordinances..." />
</div>

<div class="filters">
  <select id="year-filter">
    <!-- JS populates year options -->
  </select>
  <select id="category-filter">
    <!-- JS populates category options -->
  </select>
</div>

<div id="ordinances-container">
  <!-- ordinances.js inserts ordinance cards here -->
</div>
```

**Replacement Requirements**:

- Update static content (page title, intro text)
- Update "Sangguniang Bayan" to "Sangguniang Panlungsod"
- Update meta tags
- No changes to container divs (JS populates these)

---

### 7. `legislative/resolution-framework.html` (Dynamic)

**Location**: `legislative/resolution-framework.html`

**Content**: Same structure as `ordinance-framework.html` but for resolutions

**Replacement Requirements**: Same as `ordinance-framework.html`

---

## Data Replacement Workflow

### Phase 3.1: Gather Data

1. **Contact Sangguniang Panlungsod Office**:

   - Request ordinance registry (past 3-5 years)
   - Request resolution registry (past 2-3 years)
   - Format: Excel preferred, PDF acceptable, printed records (will need manual entry)

2. **Verify with City Legal Office**:

   - Confirm ordinance numbers and effective dates
   - Obtain codified ordinances if available

3. **Identify Categories**:
   - Review Zamboanga City ordinances and group into categories
   - Use provided category list or adjust as needed

### Phase 3.2: Update Files

1. **Edit `data/ordinances.json`**:

   - Back up original file
   - Replace `ordinances` array with Zamboanga City ordinances
   - Ensure each ordinance has all required fields
   - Use consistent date format (YYYY-MM-DD)
   - Sort by date (newest first recommended)
   - Validate JSON syntax: `jq . data/ordinances.json`

2. **Edit `data/resolutions.json`**:

   - Same process as ordinances.json
   - May have larger volume (resolutions are more frequent)

3. **Edit HTML pages**:
   - Update `legislative/index.html` static content
   - Update `legislative/ordinance-framework.html` static content
   - Update `legislative/resolution-framework.html` static content

### Phase 3.3: Testing

1. **JSON validation**:

   ```bash
   jq . data/ordinances.json
   jq . data/resolutions.json
   ```

2. **Page rendering**:

   - Open `legislative/ordinance-framework.html` in browser
   - Verify ordinance cards render correctly
   - Test search functionality (search by title, number)
   - Test year filter (dropdown should populate with years from data)
   - Test category filter (should show all categories present in data)

3. **Repeat for resolutions**:

   - Open `legislative/resolution-framework.html`
   - Test same functionality

4. **Data accuracy**:
   - Cross-reference ordinance numbers with official records
   - Verify dates, titles, categories are accurate
   - Check for typos in ordinance/resolution titles

---

## Dependencies

### Global Scripts (loaded on all legislative pages)

- `assets/js/translations.js` - UI language strings
- `assets/js/info-bar.js` - Weather/currency/time widgets
- `assets/js/main.js` - Navigation and scroll behavior
- `assets/js/version.js` - Version display

### Page-Specific Scripts

- `assets/js/ordinances.js` - Ordinances fetcher and renderer (used only on `ordinance-framework.html`)
- `assets/js/resolutions.js` - Resolutions fetcher and renderer (used only on `resolution-framework.html`)

### External Libraries

- None (pure vanilla JavaScript)

---

## Related Documentation

- **[After-UI-Localization.md](../After-UI-Localization.md)** - Ordinances and resolutions JSON \_\_localization_note
- **[DATA_REPLACEMENT_GUIDE.md](../DATA_REPLACEMENT_GUIDE.md)** - Legislative section replacement guide
- **[PHASE2_COMPLETION_REPORT.md](../PHASE2_COMPLETION_REPORT.md)** - Phase 2 legislative JS updates

---

## Known Issues / Considerations

1. **Data Volume**: Legislative documents can be extensive. Consider starting with recent 3-5 years of ordinances and 2-3 years of resolutions. Can expand later.

2. **Full Text**: Current JSON structure includes only title and description, not full ordinance/resolution text. Consider future enhancement to link to PDF copies or full text pages.

3. **Effective Dates**: Some ordinances may have different approval vs. effectivity dates. Current structure only tracks approval date. Consider adding `effectivity_date` field.

4. **Repealed/Amended**: Ordinances may be repealed or amended by later ordinances. Consider adding `amended_by` or `superseded_by` fields for cross-referencing.

5. **Search Performance**: With 100+ ordinances, search should remain fast. If performance issues arise, consider implementing pagination or lazy loading.

6. **Categorization**: Categories are subjective. Establish clear categorization guidelines to ensure consistency across all ordinances/resolutions.

7. **Update Frequency**: Sangguniang Panlungsod meets regularly and enacts new ordinances/resolutions frequently. Establish workflow for periodic JSON updates (e.g., quarterly).

8. **Committee Names**: If using committee names in `author` field, verify current committee structure in Zamboanga City Sangguniang Panlungsod.

9. **Ordinance Numbering**: Different LGUs use different numbering systems. Verify Zamboanga City's format (e.g., "Ordinance No. 2023-001" vs. "Ordinance No. 01, s. 2023").

10. **Accessibility**: Ensure ordinance/resolution cards are keyboard-navigable and screen reader friendly.

---

**Last Updated**: January 2, 2026  
**Status**: ✅ Mapping Complete | 🔲 Data Pending Replacement  
**Priority**: 🟡 Medium (important for transparency, but lower urgency than services/officials)
