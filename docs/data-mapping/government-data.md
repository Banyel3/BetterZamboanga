# Government Data Mapping

> **Purpose**: Maps government structure and officials pages to their JavaScript files and data sources.

---

## Overview

The government section displays information about Zamboanga City's organizational structure, elected officials, and department heads. Currently contains **Solano, Nueva Vizcaya officials data** (Mayor Philip A. Dacayo, Vice Mayor Eduardo D. Tiongson, 10 councilors) that must be replaced with **Zamboanga City elected officials and department heads**.

---

## Government Pages

| Page path                    | JS file(s) used          | Data source(s)                               | Data type / description                                                                                                              | Notes / TODO-ZAMBOANGA linkage                                                                                                                                                                          |
| ---------------------------- | ------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/government/index.html`     | None (static)            | Conceptually linked to `data/officials.json` | Static HTML overview of Zamboanga City government structure, organizational chart, branches                                          | No dynamic JS; update text references to "City of Zamboanga", organizational structure, term years                                                                                                      |
| `/government/officials.html` | `assets/js/officials.js` | `data/officials.json`                        | Dynamic officials listing page - renders cards for Mayor, Vice Mayor, Councilors, Department Heads with photos, names, titles, terms | **JS reads from officials.json** and generates HTML cards. **\_\_localization_note** in JSON: "Replace with current Zamboanga City officials: Mayor, Vice Mayor, City Councilors, and Department Heads" |

---

## Data Sources Detail

### 1. `data/officials.json`

**Location**: `data/officials.json`

**Structure** (56 lines):

```json
{
  "__localization_note": "TODO-ZAMBOANGA: This file contains Solano officials data. Replace with current Zamboanga City officials: Mayor, Vice Mayor, City Councilors, and Department Heads. Update images in assets/images/officials/ directory.",
  "mayor": {
    "name": "Hon. Philip A. Dacayo",
    "title": "Municipal Mayor",
    "image": "assets/images/officials/mayor.jpg"
  },
  "vice_mayor": {
    "name": "Hon. Eduardo D. Tiongson",
    "title": "Municipal Vice Mayor",
    "image": "assets/images/officials/vice-mayor.jpg"
  },
  "councilors": [
    {
      "name": "Hon. Councilor One",
      "title": "SB Member",
      "image": "assets/images/officials/sb1.jpg"
    },
    {
      "name": "Hon. Councilor Two",
      "title": "SB Member",
      "image": "assets/images/officials/sb2.jpg"
    }
    // ... 10 total councilors (Solano data)
  ],
  "department_heads": [
    {
      "name": "John Doe",
      "position": "Municipal Treasurer",
      "image": "assets/images/officials/treasurer.jpg"
    },
    {
      "name": "Jane Smith",
      "position": "Municipal Accountant",
      "image": "assets/images/officials/accountant.jpg"
    }
    // ... 13 total department heads (Solano data)
  ]
}
```

**Fields Explanation**:

- `mayor` object:

  - `name` - Full name with honorific (e.g., "Hon. Maria Clara Santos")
  - `title` - "City Mayor" (update from "Municipal Mayor")
  - `image` - Path to official portrait photo (relative to project root)

- `vice_mayor` object:

  - `name` - Full name with honorific
  - `title` - "City Vice Mayor" (update from "Municipal Vice Mayor")
  - `image` - Path to official portrait

- `councilors` array:

  - Each object has `name`, `title`, `image`
  - `title` should be "City Councilor" or "Sangguniang Panlungsod Member"
  - Solano has 10 councilors; verify Zamboanga City councilor count (varies by city class)

- `department_heads` array:
  - Each object has `name`, `position`, `image`
  - Positions: City Treasurer, City Accountant, City Engineer, City Planning Officer, City Health Officer, City Assessor, City Budget Officer, City Civil Registrar, City Social Welfare Officer, City Agriculture Officer, HRMO, General Services Officer, etc.
  - Solano has 13 department heads; Zamboanga City likely has more (20+)

**Replacement Requirements**:

- Replace `mayor` object with current Zamboanga City Mayor (name, term)
- Replace `vice_mayor` object with current Zamboanga City Vice Mayor
- Replace entire `councilors` array with all Zamboanga City Councilors (District + Sectoral representatives)
- Replace entire `department_heads` array with all Zamboanga City Department Heads
- Update all `title` and `position` fields from "Municipal" to "City"
- Update all `image` paths to point to new official photos

**Image Requirements**:

- Format: JPG or PNG (recommend JPG for smaller file size)
- Resolution: Minimum 400x400px, recommended 800x800px
- Aspect ratio: Square (1:1) or portrait (4:5)
- Background: Professional, preferably solid color or official backdrop
- File naming convention: `mayor.jpg`, `vice-mayor.jpg`, `councilor-1.jpg`, `dept-treasurer.jpg`, etc.
- Location: `assets/images/officials/` directory

**Data Sources Needed**:

- **Zamboanga City Public Information Office**

  - Official roster of elected officials and department heads
  - High-resolution official portraits
  - Current term information (e.g., 2022-2025)

- **Sangguniang Panlungsod Office**

  - Complete list of City Councilors with districts/sectors
  - Committee assignments (optional for future enhancement)

- **Zamboanga City Website**
  - Official government website may have public officials directory
  - Verify information is current

---

### 2. `assets/js/officials.js`

**Location**: `assets/js/officials.js`

**Function**: Fetches `data/officials.json` and dynamically renders official cards on `government/officials.html`

**Key Logic**:

```javascript
// Pseudo-code representation
fetch("data/officials.json")
  .then((response) => response.json())
  .then((data) => {
    renderMayor(data.mayor);
    renderViceMayor(data.vice_mayor);
    renderCouncilors(data.councilors);
    renderDepartmentHeads(data.department_heads);
  });

function renderMayor(mayor) {
  // Creates HTML card with photo, name, title
  // Inserts into #mayor-container
}

function renderCouncilors(councilors) {
  // Loops through councilors array
  // Creates card for each councilor
  // Inserts into #councilors-grid
}
```

**Replacement Impact**:

- **No code changes needed** in `officials.js`
- Script automatically reads and renders whatever data is in `officials.json`
- After updating JSON, script will display Zamboanga City officials
- Verify rendering layout handles larger councilor/department head counts (may need CSS adjustments)

**Header Comments** (Phase 2 update):

- File header updated to reference Better Zamboanga fork attribution
- No TODO markers in this JS file (data is external in JSON)

---

### 3. `government/index.html` (Static)

**Location**: `government/index.html`

**Content**: Static HTML describing government structure

**Data Relationship**:

- Does NOT dynamically read from `officials.json`
- Contains static text about government branches, organizational structure
- May have embedded references to "Municipality of Solano" or organizational details

**Replacement Requirements**:

- Update all text references from "Municipality of Solano" to "City of Zamboanga"
- Update organizational structure description (city vs. municipality may have different structure)
- Update term information (e.g., "2022-2025 term")
- Update meta tags (titles, descriptions, OG tags) for Zamboanga City
- Update breadcrumbs, page headings
- Consider adding organizational chart image (if available)

---

### 4. `government/officials.html` (Dynamic)

**Location**: `government/officials.html`

**Content**: HTML template with empty containers for JavaScript to populate

**Structure**:

```html
<div id="mayor-container">
  <!-- officials.js inserts mayor card here -->
</div>

<div id="vice-mayor-container">
  <!-- officials.js inserts vice mayor card here -->
</div>

<div id="councilors-grid">
  <!-- officials.js inserts councilor cards here -->
</div>

<div id="department-heads-grid">
  <!-- officials.js inserts department head cards here -->
</div>
```

**Replacement Requirements**:

- Update static content (page title, intro text, meta tags)
- Update references from "Sangguniang Bayan" to "Sangguniang Panlungsod"
- Update "Municipal" to "City" in all headings
- No changes to container divs (JS populates these)
- Verify CSS handles larger grids (e.g., 20+ department heads)

---

## Image Assets

### Current Images (Solano)

**Location**: `assets/images/officials/`

**Files** (estimated):

- mayor.jpg
- vice-mayor.jpg
- sb1.jpg, sb2.jpg, ..., sb10.jpg (councilors)
- treasurer.jpg, accountant.jpg, engineer.jpg, ... (department heads)

**Total**: ~24 images (1 mayor + 1 vice mayor + 10 councilors + 13 dept heads)

### Required Images (Zamboanga City)

**Needed**:

- 1 Mayor portrait
- 1 Vice Mayor portrait
- N City Councilors (verify count - may be 15-20+ for larger city)
- M Department Heads (estimate 20-25 for city government)

**Total**: ~45-50 images

**Acquisition**:

1. Request official portraits from City PIO
2. Ensure proper permissions/release for public web use
3. Crop and optimize images for web (recommend 800x800px JPG at 80% quality)
4. Name files consistently: `mayor.jpg`, `vice-mayor.jpg`, `councilor-1.jpg`, `councilor-2.jpg`, etc.
5. Upload to `assets/images/officials/` directory

---

## Data Replacement Workflow

### Phase 3.1: Gather Data

1. **Official Roster**:

   - Source: Zamboanga City PIO or City Secretary's Office
   - Request: Complete list of elected officials and department heads with full names, titles, terms
   - Format: Excel or PDF

2. **Official Portraits**:
   - Source: City PIO or individual offices
   - Request: High-resolution official portraits (800x800px minimum)
   - Format: JPG or PNG
   - Permissions: Confirm images are cleared for public website use

### Phase 3.2: Update Files

1. **Edit `data/officials.json`**:

   - Back up original file
   - Replace `mayor` object with Zamboanga City Mayor data
   - Replace `vice_mayor` object
   - Replace `councilors` array (update count as needed)
   - Replace `department_heads` array (expand as needed)
   - Update all `title` and `position` fields from "Municipal" to "City"
   - Update all `image` paths
   - Remove `__localization_note` field after completion
   - Validate JSON syntax: `jq . data/officials.json`

2. **Upload images**:

   - Crop and optimize all official portraits
   - Upload to `assets/images/officials/` directory
   - Match filenames to paths in `officials.json`
   - Test image loading in browser

3. **Edit `government/index.html`**:

   - Update all static text references
   - Update organizational structure description
   - Update meta tags for Zamboanga City

4. **Edit `government/officials.html`**:
   - Update page title, headings, intro text
   - Update "Sangguniang Bayan" to "Sangguniang Panlungsod"
   - Update "Municipal" to "City" references

### Phase 3.3: Testing

1. **JSON validation**:

   ```bash
   jq . data/officials.json
   ```

2. **Page rendering**:

   - Open `government/officials.html` in browser
   - Verify Mayor and Vice Mayor cards render correctly
   - Check all Councilor cards display (scroll through)
   - Check all Department Head cards display
   - Verify images load (check for broken image icons)

3. **Layout testing**:

   - Test responsive design on mobile, tablet, desktop
   - Ensure grid layout handles larger official counts
   - Check image aspect ratios display properly

4. **Data accuracy**:
   - Cross-reference names and titles with official roster
   - Verify spellings, honorifics, position titles
   - Confirm term years are current

---

## Dependencies

### Global Scripts (loaded on all government pages)

- `assets/js/translations.js` - UI language strings
- `assets/js/info-bar.js` - Weather/currency/time widgets
- `assets/js/main.js` - Navigation and scroll behavior
- `assets/js/version.js` - Version display

### Page-Specific Scripts

- `assets/js/officials.js` - Officials data fetcher and card renderer (used only on `government/officials.html`)

### External Libraries

- None (pure vanilla JavaScript)

---

## Related Documentation

- **[After-UI-Localization.md](../After-UI-Localization.md)** - Officials JSON \_\_localization_note
- **[DATA_REPLACEMENT_GUIDE.md](../DATA_REPLACEMENT_GUIDE.md)** - Officials section replacement guide
- **[PHASE2_COMPLETION_REPORT.md](../PHASE2_COMPLETION_REPORT.md)** - Phase 2 officials.js updates

---

## Known Issues / Considerations

1. **Official Count**: Zamboanga City as a highly urbanized city likely has **more councilors and department heads** than Solano. Verify exact counts before data replacement.

2. **District vs. At-Large**: City councilors may represent specific districts or be at-large. Consider adding district information to JSON structure in future.

3. **Image Quality**: Official portraits must be professional quality for public-facing website. Low-resolution or informal photos harm credibility.

4. **Update Frequency**: Elected officials change every 3 years (Philippine local elections). Establish process for updating after elections.

5. **Appointive vs. Elective**: Department heads are appointive positions and may change more frequently. Monitor for transitions.

6. **Committee Assignments**: Current JSON structure doesn't include committee assignments. Consider adding for enhanced transparency.

7. **Contact Information**: Current structure lacks email/phone per official. Consider adding for public accessibility.

8. **Accessibility**: Ensure all official photos have proper alt text (e.g., "Official portrait of Hon. [Name], City Mayor").

9. **File Size**: 45-50 official portraits can total several MB. Optimize images to keep page load time under 3 seconds.

10. **Backup Officials**: Consider how to handle acting/interim officials during transitions.

---

**Last Updated**: January 2, 2026  
**Status**: ✅ Mapping Complete | 🔲 Data Pending Replacement  
**Priority**: 🔴 Critical (elected officials are public-facing priority)
