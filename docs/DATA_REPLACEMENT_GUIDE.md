# Data Replacement Quick Reference

This guide helps locate and replace Solano placeholder data with Zamboanga City data.

## Quick Find: All TODO Markers

```powershell
# Find all TODO-ZAMBOANGA comments
grep -rn "TODO-ZAMBOANGA" --include="*.html" --include="*.js" --include="*.json" --exclude-dir=dist

# Find __localization_note fields in JSON
grep -rn "__localization_note" data/
```

---

## 1. Officials Data

**File**: `data/officials.json`

**What to Replace**:

- Mayor name and photo
- Vice Mayor name and photo
- All councilors (Sangguniang Panlungsod members)
- Department heads

**Data Sources**:

- Zamboanga City Government website
- Official Sangguniang Panlungsod roster
- City Public Information Office

**Format** (keep same JSON structure):

```json
{
  "__localization_note": "...",
  "mayor": {
    "name": "Hon. [Full Name]",
    "position": "City Mayor",
    "image": "assets/images/officials/mayor.jpg"
  },
  "councilors": [...]
}
```

---

## 2. Services Data

**File**: `data/services.json`

**What to Replace**:

- Office names
- Contact numbers (hotlines)
- Fees
- Processing times
- Office URLs

**Data Sources**:

- Zamboanga City Citizen's Charter
- Official city government service guides
- Individual office websites

**Validation**: Run `node assets/js/services-validator.js` after editing

---

## 3. Statistics Data

**Files**:

- `data/competitive-index.json` (CMCI scores)
- `assets/js/statistics-new.js` (embedded barangayData, historicalData)

**What to Replace**:

### CMCI Data

```javascript
// In data/competitive-index.json
{
  "title": "Zamboanga City Competitive Index",
  "years": [2016, 2017, ...],
  "pillars": [
    {
      "name": "Economic Dynamism",
      "indicators": [...]
    }
  ]
}
```

**Source**: DTI CMCI Portal (https://cmci.dti.gov.ph/)

### Barangay Population

```javascript
// In assets/js/statistics-new.js
const barangayData = [
  { name: "Arena Blanco", population: 12500 },
  { name: "Ayala", population: 15800 },
  // ... 98 barangays total
];
```

**Source**: Philippine Statistics Authority (PSA)

### Historical Population

```javascript
const historicalData = {
  years: [1990, 1995, 2000, ...],
  populations: [442345, 511000, 601794, ...]
};
```

**Source**: PSA Census Data

---

## 4. Infrastructure Projects

**File**: `data/dpwh-projects.json`

**What to Replace**:

- All project entries
- Implementing agency (DPWH Zamboanga del Sur Engineering Office)
- Project locations (Zamboanga City barangays)

**Data Sources**:

- DPWH Regional Office IX website
- City Engineering Office
- Infrastructure project lists from city government

---

## 5. Legislative Records

**Files**:

- `data/ordinances.json`
- `data/resolutions.json`

**What to Replace**:

- Ordinance/Resolution numbers
- Titles
- Session dates

**Data Sources**:

- Sangguniang Panlungsod Secretary's Office
- City Council official website
- Local legislation database

**Format**:

```json
{
  "ordinances": [
    {
      "ordinanceNo": "2025-001",
      "title": "An Ordinance...",
      "sessionDate": "2025-01-15"
    }
  ]
}
```

---

## 6. Financial Data (Embedded in JS)

**Files**:

- `assets/js/transparency-2025.js`
- `assets/js/transparency-v2.js`
- `assets/js/transparency.js`

**What to Replace**:
Search for `SRE_DATA` or `FINANCIAL_DATA` objects and replace with Zamboanga City budget data.

**Data Sources**:

- City Budget Office
- Bureau of Local Government Finance (BLGF) portal
- Statement of Receipts and Expenditures (SRE) reports

**Format**:

```javascript
const SRE_DATA = {
  q1: {
    income: { total: 150000000, sources: {...} },
    expenditure: { total: 140000000, categories: {...} }
  }
};
```

---

## 7. Contact Information (In HTML)

**Files**: Multiple HTML files with hotline bars and footers

**Search for**:

```powershell
grep -rn "0927 400 8033\|0916 284 0885" --include="*.html"  # Solano hotlines
grep -rn "volunteer@bettersolano.org" --include="*.html"
grep -rn "github.com/BetterSolano" --include="*.html"
```

**What to Replace**:

- Police hotline
- Fire hotline
- MDRRMO hotline
- MSWDO contact
- Email addresses
- GitHub repository URL
- Social media links

**Zamboanga Emergency Numbers** (verify with local authorities):

- Police: [to be determined]
- Fire: [to be determined]
- MDRRMO: [to be determined]
- City Hall main: [to be determined]

---

## 8. External Links

**Search for**:

```powershell
grep -rn "solano\.gov\.ph\|filipizen.*solano" --include="*.html"
```

**What to Replace**:

- Official city website URL
- Sangguniang Panlungsod website
- Facebook page
- Filipizen partner links (if Zamboanga has different URLs)
- Citizen's Charter PDF link

---

## 9. Logo Assets

**Create**:

- `assets/images/logo/better-zamboanga-logo.svg`
- `assets/images/logo/better-zamboanga-logo-white.svg`
- `assets/images/logo/favicon.svg`
- `assets/images/logo/favicon.ico`

**Current references** (search for):

```powershell
grep -rn "better-solano-logo" --include="*.html"
```

**Design Guidelines**:

- Maintain similar style to BetterSolano logo
- Include "Better Zamboanga" text
- Use Zamboanga City colors/symbols
- Ensure legibility at small sizes

---

## Validation Checklist

After replacing data:

- [ ] JSON files validate (use JSON linter)
- [ ] Services validate: `node assets/js/services-validator.js`
- [ ] No syntax errors: Check VS Code Problems panel
- [ ] Build succeeds: `npm run build`
- [ ] Dev server works: `npm run dev`
- [ ] Search functionality works
- [ ] Statistics charts render correctly
- [ ] All links work (no 404s)
- [ ] Images load properly

---

## Data Provenance

**IMPORTANT**: For each data source, document:

- Source URL
- Date accessed
- Contact person (if applicable)
- Verification method

Add to each JSON file:

```json
{
  "__data_provenance": {
    "source": "Philippine Statistics Authority",
    "source_url": "https://psa.gov.ph/...",
    "date_accessed": "2026-01-03",
    "verified_by": "City Planning Office",
    "last_updated": "2025-12-31"
  }
}
```

---

## Priority Order for Replacement

1. **High Priority** (User-facing critical data):

   - Officials (Mayor, Vice Mayor, Councilors)
   - Services (hotlines, fees, office info)
   - Contact information (emergency numbers)

2. **Medium Priority** (Important but less urgent):

   - Statistics (barangay population, CMCI)
   - Infrastructure projects
   - Legislative records

3. **Low Priority** (Enhancement):
   - Financial transparency data
   - Logo assets
   - External link updates

---

## Need Help?

- **Technical issues**: Check LOCALIZATION_PROGRESS.md
- **Data sources**: Contact Zamboanga City Public Information Office
- **Original codebase**: https://github.com/BetterSolano/bettersolano
- **This fork**: https://github.com/Banyel3/BetterZamboanga
