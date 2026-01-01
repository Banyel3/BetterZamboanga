# Statistics Data Mapping

> **Purpose**: Maps all statistics-related pages to their JavaScript files and data sources for systematic Zamboanga City data replacement.

---

## Overview

The statistics section presents demographic data, CMCI (Cities and Municipalities Competitiveness Index) rankings, barangay population figures, and historical trend data. Currently contains **Solano, Nueva Vizcaya data** (8 barangays) that must be replaced with **Zamboanga City data** (98 barangays).

---

## Statistics Pages

| Page path                                  | JS file(s) used               | Data source(s)                                               | Data type / description                                                                                                                      | Notes / TODO-ZAMBOANGA linkage                                                                                                                                                        |
| ------------------------------------------ | ----------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/statistics/index.html`                   | `assets/js/statistics-new.js` | Embedded in JS: `barangayData`, `historicalData`, `cmciData` | Modern statistics dashboard with Chart.js visualizations showing barangay populations, historical demographic trends, and CMCI pillar scores | **TODO marker** (line 4 in statistics-new.js): "barangayData, historicalData, cmciData all contain Solano statistics". Contains 8 Solano barangays; needs 98 Zamboanga City barangays |
| `/statistics/index.html`                   | `assets/js/statistics-new.js` | `data/competitive-index.json`                                | CMCI competitiveness index data for Economic Dynamism, Government Efficiency, Infrastructure, Resiliency, Innovation pillars                 | **\_\_localization_note** in competitive-index.json: "Replace with Zamboanga City CMCI scores from DTI Regional Competitiveness Committee"                                            |
| `/statistics/index.html` (legacy fallback) | `assets/js/statistics.js`     | Embedded in JS: population arrays, CMCI data structures      | Legacy statistics implementation with hardcoded Solano barangay population data (356 lines total)                                            | **TODO marker** (line 4 in statistics.js): "Embedded data contains Solano population/barangay statistics". Solano has 8 barangays vs Zamboanga City's 98                              |

---

## Data Sources Detail

### 1. Embedded Data in `statistics-new.js`

**Location**: `assets/js/statistics-new.js` lines ~20-200

**Structure**:

```javascript
const barangayData = [
  { name: "Barangay Solano 1", population: 5234 },
  { name: "Barangay Solano 2", population: 4987 },
  // ... 8 total barangays (Solano data)
];

const historicalData = {
  years: [2015, 2016, 2017, 2018, 2019, 2020],
  population: [16000, 16500, 17000, 17500, 18000, 18500],
  // ... Solano historical trends
};

const cmciData = {
  // Solano CMCI scores by pillar
};
```

**Replacement Requirements**:

- Replace all 8 Solano barangay entries with **98 Zamboanga City barangays**
- Update population figures from PSA 2020 Census data
- Update historical data arrays with Zamboanga City timeseries (if available)
- Update CMCI scores with Zamboanga City data from DTI

**Data Sources Needed**:

- Philippine Statistics Authority (PSA) - 2020 Census Zamboanga City barangay population
- PSA - Historical population data (2010, 2015, 2020 censuses)
- DTI Regional Competitiveness Committee - Zamboanga City CMCI scores (latest 3-5 years)

---

### 2. `data/competitive-index.json`

**Location**: `data/competitive-index.json`

**Structure** (56 lines):

```json
{
  "__localization_note": "TODO-ZAMBOANGA: Replace with Zamboanga City CMCI scores...",
  "municipality": "Solano",
  "province": "Nueva Vizcaya",
  "years": [2018, 2019, 2020, 2021, 2022],
  "indicators": [
    {
      "pillar": "Economic Dynamism",
      "values": [0.5234, 0.5456, 0.5678, ...]
    },
    {
      "pillar": "Government Efficiency",
      "values": [0.6123, 0.6234, 0.6345, ...]
    },
    // ... Infrastructure, Resiliency, Innovation pillars
  ]
}
```

**Replacement Requirements**:

- Change `municipality` field from "Solano" to "Zamboanga City"
- Change `province` field from "Nueva Vizcaya" to "Zamboanga del Sur" (or remove if not applicable for highly urbanized city)
- Update `years` array to latest available CMCI years
- Update all `values` arrays in each pillar indicator with Zamboanga City scores

**Data Source**:

- DTI Regional Competitiveness Committee (Region IX - Zamboanga Peninsula)
- Official CMCI reports from DTI website or regional office
- Zamboanga City Planning & Development Office may have local copies

---

### 3. Embedded Data in `statistics.js` (Legacy)

**Location**: `assets/js/statistics.js` lines ~10-366

**Structure**:

- Hardcoded population data for 8 Solano barangays
- CMCI visualization configuration
- Chart rendering logic for older browser compatibility

**Replacement Requirements**:

- If `statistics-new.js` is the primary implementation, this file may be deprecated
- If still in use, apply same data replacements as `statistics-new.js`
- Consider removing if no longer needed (confirm with page testing)

**Note**: This file has TODO marker indicating it's a legacy implementation. Verify whether pages actually load this script before investing in data replacement.

---

## Chart.js Library

**CDN**: `https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js`

**Usage**: Loaded in `statistics/index.html` for rendering bar charts, line graphs, and radar charts for CMCI pillars.

**Configuration**: Chart colors, labels, and scales are defined in `statistics-new.js` and should be reviewed for Zamboanga City branding consistency.

---

## Data Replacement Workflow

### Phase 3.1: Gather Data

1. **Barangay Population**:

   - Source: PSA 2020 Census of Population and Housing
   - Request: Zamboanga City barangay-level population data (all 98 barangays)
   - Format: CSV or Excel with columns: Barangay Name, Population

2. **CMCI Scores**:

   - Source: DTI Regional Competitiveness Committee (Region IX)
   - Request: Zamboanga City CMCI scores for latest 3-5 years
   - Format: Excel with pillar scores (Economic Dynamism, Gov't Efficiency, Infrastructure, Resiliency, Innovation)

3. **Historical Demographics**:
   - Source: PSA Census data (2010, 2015, 2020)
   - Request: Zamboanga City total population by census year
   - Format: Simple timeseries data

### Phase 3.2: Update Files

1. **Edit `statistics-new.js`**:

   - Replace `barangayData` array (lines ~20-100)
   - Replace `historicalData` object (lines ~102-150)
   - Replace `cmciData` object (lines ~152-200)
   - Update chart labels for "Zamboanga City" references

2. **Edit `data/competitive-index.json`**:

   - Update `municipality` and `province` fields
   - Replace `years` array
   - Replace all `values` arrays in `indicators`
   - Remove `__localization_note` field after completion

3. **Test rendering**:
   - Open `statistics/index.html` in browser
   - Verify all 98 barangays render correctly
   - Check chart responsiveness and tooltips
   - Validate CMCI radar chart displays properly

### Phase 3.3: Validation

- JSON syntax validation: `jq . data/competitive-index.json`
- Browser console: Check for JavaScript errors
- Chart rendering: All barangays should appear in dropdown/table
- Data accuracy: Cross-reference with source documents

---

## Dependencies

### Global Scripts (loaded on all pages)

- `assets/js/translations.js` - UI language strings (already localized in Phase 1)
- `assets/js/info-bar.js` - Weather/currency/time widgets (coordinates updated in Phase 2)
- `assets/js/main.js` - Navigation, mobile menu, scroll behavior
- `assets/js/version.js` - Version number display

### Page-Specific Scripts

- `assets/js/statistics-new.js` - Primary statistics renderer (TODO marker present)
- `assets/js/statistics.js` - Legacy statistics (TODO marker present, possibly deprecated)

### External Libraries

- Chart.js 4.4.1 - Data visualization library (CDN)

---

## Related Documentation

- **[After-UI-Localization.md](../After-UI-Localization.md)** - Section "Embedded Statistical Data" (TODO markers)
- **[DATA_REPLACEMENT_GUIDE.md](../DATA_REPLACEMENT_GUIDE.md)** - Statistics section with step-by-step replacement guide
- **[statistics-data-requirements.md](../statistics-data-requirements.md)** - Detailed technical requirements for statistics data formats

---

## Known Issues / Considerations

1. **Barangay Count Mismatch**: Solano has 8 barangays; Zamboanga City has 98. Chart layouts and table pagination may need adjustment for larger dataset.

2. **CMCI Availability**: Verify Zamboanga City participates in CMCI rankings. As a highly urbanized city, it may have different competitiveness metrics than municipalities.

3. **Historical Data**: Zamboanga City historical data may span more years than Solano's limited dataset. Consider showing 2010, 2015, 2020 census years for consistency.

4. **Chart Performance**: Rendering 98 barangays in dropdown/table may impact page load time. Consider pagination or search filtering enhancements.

5. **Legacy Script**: Confirm whether `statistics.js` is still loaded by any pages. If not, document deprecation and remove from future builds.

---

**Last Updated**: January 2, 2026  
**Status**: ✅ Mapping Complete | 🔲 Data Pending Replacement  
**Priority**: Medium (after emergency hotlines, officials, services)
