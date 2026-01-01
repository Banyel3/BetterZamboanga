# Budget & Transparency Data Mapping

> **Purpose**: Maps budget transparency, financial reporting, and infrastructure project pages to their JavaScript files and data sources.

---

## Overview

The budget transparency section presents financial data including Statement of Receipts and Expenditures (SRE), budget allocations by department, and DPWH infrastructure projects. Currently contains **Solano, Nueva Vizcaya fiscal data and projects** that must be replaced with **Zamboanga City financial reports and infrastructure initiatives**.

---

## Budget & Transparency Pages

| Page path                                | JS file(s) used                  | Data source(s)                     | Data type / description                                                                                                                                | Notes / TODO-ZAMBOANGA linkage                                                                                                                           |
| ---------------------------------------- | -------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/budget/index.html`                     | `assets/js/transparency-v2.js`   | Embedded in JS: `SRE_DATA` object  | Improved transparency dashboard showing fiscal year budget allocations, expenditures, and department-wise breakdowns with Chart.js visualizations      | **TODO marker** (line 5 in transparency-v2.js): "Contains embedded Solano FY financial data (SRE_DATA)". Full SRE structure hardcoded in JS              |
| `/budget/index.html`                     | `assets/js/dpwh-projects.js`     | `data/dpwh-projects.json`          | DPWH (Department of Public Works and Highways) infrastructure projects renderer - fetches project listings, displays cards with status, cost, location | **TODO marker** (line 3 in dpwh-projects.js): "Fetches data/dpwh-projects.json containing Solano DPWH projects". No JS changes needed; replace JSON only |
| `/budget/index.html`                     | `assets/js/transparency-v2.js`   | N/A (inline configuration)         | Chart.js visualization configuration for budget charts, color schemes, responsive behavior                                                             | No data changes; may need label updates for "Zamboanga City" references                                                                                  |
| `/budget/index.html` (alternative pages) | `assets/js/transparency.js`      | Embedded in JS: `SRE_DATA` object  | Legacy transparency dashboard (if still in use) with Solano fiscal year data (226 lines)                                                               | **TODO marker** (line 4 in transparency.js): "SRE_DATA contains Solano financial data; replace with Zamboanga City budget data". Similar structure to v2 |
| `/budget/index.html` (alternative pages) | `assets/js/transparency-2025.js` | Embedded in JS: FY 2025 `SRE_DATA` | Most recent fiscal year implementation (2025) with latest Solano budget data                                                                           | **TODO marker** (line 5): "Contains embedded Solano fiscal year 2025 financial data". May be the most current version to update first                    |

---

## Data Sources Detail

### 1. `data/dpwh-projects.json`

**Location**: `data/dpwh-projects.json`

**Structure** (716 lines):

```json
{
  "__localization_note": "TODO-ZAMBOANGA: Replace with Zamboanga City infrastructure projects from DPWH Zamboanga del Sur Engineering Office or City Engineering Office...",
  "summary": {
    "total_projects": 63,
    "total_amount": "₱409,494,730.55",
    "implementing_agency": "Nueva Vizcaya District Engineering Office"
  },
  "projects": [
    {
      "id": 1,
      "project_name": "Concreting of Barangay Road - Phase 1",
      "location": "Barangay Solano Centro, Solano, Nueva Vizcaya",
      "status": "Completed",
      "cost": "₱12,345,678.00",
      "contractor": "ABC Construction Inc.",
      "completion_date": "2023-12-15",
      "category": "Road Construction"
    }
    // ... 62 more Solano projects
  ]
}
```

**Replacement Requirements**:

- Update `summary.total_projects` to match Zamboanga City project count
- Update `summary.total_amount` to sum of all Zamboanga City project costs
- Change `summary.implementing_agency` to "DPWH Zamboanga del Sur Engineering Office" or "Zamboanga City Engineering Office"
- Replace entire `projects` array with Zamboanga City infrastructure projects
- Each project object requires:
  - `project_name` - Official DPWH/City Engineering project title
  - `location` - Barangay and city (98 Zamboanga City barangays)
  - `status` - "Completed", "Ongoing", "Planned", "Suspended"
  - `cost` - Total project cost in PHP (₱ format)
  - `contractor` - Company name if awarded
  - `completion_date` - Actual or target completion (YYYY-MM-DD)
  - `category` - "Road Construction", "Bridge", "Drainage", "Building", etc.

**Data Sources Needed**:

- **DPWH Zamboanga del Sur Engineering Office**
  - District infrastructure projects within Zamboanga City
  - Request: Project list for past 3-5 years with costs and status
- **Zamboanga City Engineering Office**
  - Locally-funded infrastructure (non-DPWH)
  - City hall renovations, public markets, barangay facilities
- **Zamboanga City Planning & Development Office**
  - Comprehensive development plan project listings
  - May have consolidated DPWH + LGU project inventory

---

### 2. Embedded Data in `transparency-v2.js`

**Location**: `assets/js/transparency-v2.js` lines ~15-300 (estimated)

**Structure**:

```javascript
const SRE_DATA = {
  fiscalYear: "2024",
  municipality: "Solano",
  province: "Nueva Vizcaya",
  receipts: {
    tax_revenue: 45000000,
    internal_revenue_allotment: 120000000,
    other_receipts: 15000000,
    total: 180000000,
  },
  expenditures: {
    general_public_services: 35000000,
    education: 25000000,
    health: 20000000,
    social_services: 15000000,
    economic_services: 30000000,
    debt_service: 10000000,
    // ... more department allocations
    total: 175000000,
  },
  departments: [
    {
      name: "Municipal Mayor's Office",
      budget: 5000000,
      spent: 4800000,
    },
    // ... all Solano municipal offices
  ],
};
```

**Replacement Requirements**:

- Update `fiscalYear` to latest Zamboanga City fiscal year
- Change `municipality` from "Solano" to "Zamboanga City"
- Change `province` from "Nueva Vizcaya" to "Zamboanga del Sur" (or "N/A" for HUC)
- Replace all `receipts` values with Zamboanga City revenue data
- Replace all `expenditures` values with Zamboanga City spending by sector
- Replace `departments` array with Zamboanga City offices (Mayor, Vice Mayor, City Council, all departments)
- Ensure budget + spent values are accurate and match official financial reports

**Data Sources Needed**:

- **Zamboanga City Treasurer's Office**

  - Statement of Receipts and Expenditures (SRE)
  - Annual Financial Report
  - Request: Latest 1-2 fiscal years

- **Zamboanga City Budget Office**
  - Budget allocation by department/office
  - Supplemental budgets and realignments
- **Commission on Audit (COA)**
  - Annual Audit Report for Zamboanga City
  - Public documents available at COA website

---

### 3. Embedded Data in `transparency.js` (Legacy)

**Location**: `assets/js/transparency.js` lines ~10-236

**Structure**: Similar to `transparency-v2.js` but with older visualization implementation.

**Replacement Requirements**: Same as `transparency-v2.js` if this script is still in use.

**Note**: Verify whether any pages load `transparency.js` vs `transparency-v2.js`. May be deprecated legacy code.

---

### 4. Embedded Data in `transparency-2025.js`

**Location**: `assets/js/transparency-2025.js` lines ~10-250 (estimated)

**Structure**: Same as `transparency-v2.js` but with FY 2025 data.

**Priority**: If this is the most recent fiscal year, prioritize updating this file first with Zamboanga City FY 2025 data.

**Replacement Requirements**: Same as `transparency-v2.js`.

---

## JavaScript Responsibilities

### `dpwh-projects.js`

**Function**: Fetches `data/dpwh-projects.json` and renders project cards dynamically.

**Key Logic**:

- Reads JSON via `fetch()` API
- Generates HTML project cards with title, location, status badge, cost, contractor
- Implements filtering by status or category (if present)
- No hardcoded data; purely reads from JSON

**Replacement Impact**: No code changes needed. Simply replace `data/dpwh-projects.json` with Zamboanga City data and script will automatically render new projects.

---

### `transparency-v2.js`

**Function**: Main transparency dashboard renderer with embedded SRE data.

**Key Logic**:

- Defines `SRE_DATA` object with all financial figures
- Calculates totals, percentages, budget utilization rates
- Generates Chart.js bar charts and pie charts for revenue/expenditure breakdown
- Renders department-wise budget table with progress bars

**Replacement Impact**: Must edit JS file directly to replace embedded `SRE_DATA` object. No external JSON file.

---

### `transparency.js` (Legacy)

**Function**: Older transparency dashboard implementation.

**Status**: May be deprecated. Check if any pages load this script.

**Replacement Impact**: If still in use, apply same SRE data updates. If deprecated, document and remove.

---

### `transparency-2025.js`

**Function**: FY 2025 specific transparency dashboard.

**Status**: Likely the most current implementation.

**Replacement Impact**: Update embedded SRE_DATA with Zamboanga City FY 2025 financial data.

---

## Chart.js Library

**CDN**: `https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js`

**Usage**: Loaded in `budget/index.html` for rendering:

- Bar charts for receipts vs expenditures
- Pie charts for department budget distribution
- Progress bars for budget utilization

**Configuration**: Chart colors should match Better Zamboanga branding (green theme: #1a5f2a).

---

## Data Replacement Workflow

### Phase 3.1: Gather Data

1. **Infrastructure Projects**:

   - Source: DPWH Zamboanga del Sur EO & Zamboanga City Engineering Office
   - Request: Project listings (past 3-5 years) with names, locations, costs, status, contractors
   - Format: Excel or CSV

2. **Financial Reports**:

   - Source: Zamboanga City Treasurer's Office
   - Request: Statement of Receipts and Expenditures (SRE) for latest fiscal year
   - Format: PDF annual report or Excel breakdown

3. **Budget Allocations**:
   - Source: Zamboanga City Budget Office
   - Request: Approved budget by department/office with actual expenditures
   - Format: Excel with columns: Office, Approved Budget, Actual Spent

### Phase 3.2: Update Files

1. **Edit `data/dpwh-projects.json`**:

   - Replace `summary` object with Zamboanga City totals
   - Replace `projects` array with all Zamboanga City projects (maintain JSON structure)
   - Validate JSON syntax: `jq . data/dpwh-projects.json`

2. **Edit transparency JS files** (determine which is active first):

   - Replace `SRE_DATA` object in `transparency-2025.js` (if most current)
   - Update `municipality`, `province`, `fiscalYear` fields
   - Replace all `receipts` and `expenditures` values
   - Replace `departments` array with Zamboanga City offices
   - Update any hardcoded labels referencing "Solano"

3. **Test rendering**:
   - Open `budget/index.html` in browser
   - Verify project cards display correctly
   - Check financial charts render without errors
   - Validate total amounts calculate properly

### Phase 3.3: Validation

- **JSON validation**: `jq . data/dpwh-projects.json`
- **Math validation**: Sum of department budgets should equal total expenditures
- **Browser console**: Check for fetch errors or chart rendering issues
- **Data accuracy**: Cross-reference with official financial reports

---

## Dependencies

### Global Scripts (loaded on all pages)

- `assets/js/translations.js` - UI language strings
- `assets/js/info-bar.js` - Weather/currency/time widgets
- `assets/js/main.js` - Navigation and scroll behavior
- `assets/js/version.js` - Version display

### Page-Specific Scripts

- `assets/js/transparency-v2.js` - Primary transparency dashboard (TODO marker)
- `assets/js/dpwh-projects.js` - Infrastructure projects renderer (TODO marker)
- `assets/js/transparency.js` - Legacy transparency (check if deprecated)
- `assets/js/transparency-2025.js` - FY 2025 transparency (TODO marker)

### External Libraries

- Chart.js 4.4.1 - Data visualization (CDN)

---

## Related Documentation

- **[After-UI-Localization.md](../After-UI-Localization.md)** - Section "Embedded Financial Data" (TODO markers)
- **[DATA_REPLACEMENT_GUIDE.md](../DATA_REPLACEMENT_GUIDE.md)** - Budget/projects section with replacement steps
- **[PHASE2_COMPLETION_REPORT.md](../PHASE2_COMPLETION_REPORT.md)** - Phase 2 transparency file updates

---

## Known Issues / Considerations

1. **Multiple Transparency Versions**: Three transparency JS files exist (transparency.js, transparency-v2.js, transparency-2025.js). Clarify which is active before data replacement. May need to consolidate.

2. **Embedded vs External Data**: Unlike projects (external JSON), financial data is embedded in JS files. Consider extracting to `data/financial-reports.json` for easier future updates.

3. **Fiscal Year Mismatch**: Solano may use different fiscal year than Zamboanga City. Verify whether Zamboanga City follows calendar year (Jan-Dec) or fiscal year (varies).

4. **Chart Performance**: Large number of departments may require chart pagination or filtering for readability.

5. **Currency Formatting**: Ensure consistent PHP (₱) formatting in both JSON and JS files. Use comma separators for readability.

6. **COA Audit Alignment**: Financial data should align with COA audit reports to ensure accuracy and public trust.

---

**Last Updated**: January 2, 2026  
**Status**: ✅ Mapping Complete | 🔲 Data Pending Replacement  
**Priority**: Medium (after emergency hotlines, officials, services)
