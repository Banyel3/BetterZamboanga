## Frontend Data Map — per-page (clean, tabular)

Purpose: map each HTML page to its included scripts, embedded variables, JSON fetches, DOM targets, and short notes. Top-level summary table first, then per-page detail tables for readability.

---

| Page                                                                              | Summary                                                                                                                    |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `index.html`                                                                      | Home: search, weather, version info; fetches `data/services.json` and external APIs                                        |
| `statistics/index.html`                                                           | Statistics: charts and CMCI; embeds `barangayData`, `historicalData`, `cmciData` (also uses `data/competitive-index.json`) |
| `services/index.html` and `services/*.html`                                       | Services listing/search: uses `data/services.json` for autocomplete and listings                                           |
| `government/officials.html`                                                       | Officials listing: fetches `data/officials.json` and renders into `#officials-container`                                   |
| `legislative/*`                                                                   | Ordinances & resolutions pages: fetch `data/ordinances.json`, `data/resolutions.json`                                      |
| `budget/*`, `transparency/*`                                                      | Budget & transparency: projects + financial SRE data; scripts include `dpwh-projects.js` and transparency variants         |
| `service-details/*`, `news/*`, `faq/*`, `terms/*`, `privacy/*`, `accessibility/*` | Mostly static with shared widgets (translations, info-bar, search)                                                         |

---

### Per-page detail tables

#### `index.html` (Home)

| Field              | Value                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Included scripts   | `assets/js/translations.js`, `assets/js/info-bar.js`, `assets/js/main.js`, `assets/js/version.js`, `assets/js/search.js`, `assets/js/weather-map.js` |
| Embedded variables | none (uses external APIs)                                                                                                                            |
| Data files fetched | `data/services.json`, `/version.json`, weather/exchange APIs                                                                                         |
| DOM targets        | search inputs/autocomplete, `.rate-display`, `.weather-temp`, `.footer-version`, `[data-version]`                                                    |
| Notes              | Search and autocomplete are site-wide; version injection shows build/version info                                                                    |

#### `statistics/index.html` (Statistics)

| Field              | Value                                                                                                                                                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Included scripts   | `assets/js/translations.js`, `assets/js/info-bar.js`, `assets/js/main.js`, `assets/js/version.js`, `assets/js/statistics-new.js`                                                                                                                                      |
| Embedded variables | `barangayData` (array of {name,pop}), `historicalData` ({years[],populations[]}), `cmciData` (years, pillars, keyIndicators)                                                                                                                                          |
| Data files fetched | `data/competitive-index.json` (script may fall back to embedded `cmciData`)                                                                                                                                                                                           |
| DOM targets        | `historicalLineChart`, `distributionPieChart`, `populationBarChart`, `cmciOverviewChart`, `cmciEconomicChart`, `cmciGovernmentChart`, `cmciInfraChart`, `cmciResiliencyChart`, `cmciInnovationChart`, counters with `data-count`, bars with `data-width`/`data-value` |
| Notes              | Primary candidate for canonical extraction: `barangayData` and `historicalData` → `data/*`                                                                                                                                                                            |

## Frontend Data Map — per-page (bullet sections)

Purpose: one section per page; each section uses short bullets for the key fields: Included scripts, Embedded variables, Data files fetched, DOM targets, Notes.

---

### Home — `index.html`

- Included scripts: `assets/js/translations.js`, `assets/js/info-bar.js`, `assets/js/main.js`, `assets/js/version.js`, `assets/js/search.js`, `assets/js/weather-map.js`.
- Embedded variables: none (uses external APIs).
- Data files fetched: `data/services.json`, `/version.json`, weather/exchange APIs.
- DOM targets: search inputs and autocomplete, `.rate-display`, `.weather-temp`, `.footer-version`, `[data-version]`.
- Notes: site-wide search/autocomplete; version injection shows build info.

### Statistics — `statistics/index.html`

- Included scripts: `assets/js/translations.js`, `assets/js/info-bar.js`, `assets/js/main.js`, `assets/js/version.js`, `assets/js/statistics-new.js`.
- Embedded variables: `barangayData` (array of {name, pop}), `historicalData` ({years[], populations[]}), `cmciData` (years, pillars, keyIndicators).
- Data files fetched: `data/competitive-index.json` (script may fall back to embedded `cmciData`).
- DOM targets: canvases `historicalLineChart`, `distributionPieChart`, `populationBarChart`, `cmciOverviewChart`, `cmciEconomicChart`, `cmciGovernmentChart`, `cmciInfraChart`, `cmciResiliencyChart`, `cmciInnovationChart`; counters with `data-count`; bars with `data-width`/`data-value`.
- Notes: primary candidate for extraction to `data/barangays-population.json` and `data/population-timeseries.json` with provenance.

### Services listing — `services/index.html` (+ `services/*.html`)

- Included scripts: `assets/js/translations.js`, `assets/js/info-bar.js`, `assets/js/main.js`, `assets/js/version.js`, `assets/js/search.js`.
- Embedded variables: none (reads `data/services.json`).
- Data files fetched: `data/services.json`.
- DOM targets: search inputs, autocomplete container, service listing nodes.
- Notes: use `assets/js/services-validator.js` to validate schema during migration.

### Government officials — `government/officials.html`

- Included scripts: `assets/js/officials.js`, plus translations, info-bar, main, version.
- Embedded variables: none (fetches JSON).
- Data files fetched: `data/officials.json`.
- DOM targets: `#officials-container`, portrait placeholders.
- Notes: good candidate for a scraper + provenance metadata.

### Legislative — `legislative/*` (ordinances & resolutions)

- Included scripts: `assets/js/ordinances.js`, `assets/js/resolutions.js`.
- Embedded variables: none.
- Data files fetched: `data/ordinances.json`, `data/resolutions.json`.
- DOM targets: `#ordinance-table-body`, `#resolution-table-body`.
- Notes: preserve original IDs and pagination when extracting.

### Budget & Transparency — `budget/*`, `transparency/*`

- Included scripts: `assets/js/dpwh-projects.js`, `assets/js/transparency.js`, `assets/js/transparency-v2.js`, `assets/js/transparency-2025.js`.
- Embedded variables: `SRE_DATA`, `FINANCIAL_DATA` (quarterly SRE/financial objects inside transparency scripts).
- Data files fetched: `data/dpwh-projects.json`.
- DOM targets: `incomeChart`, `expenditureChart`, `#metric-income`, `#metric-expenditures`, project tables.
- Notes: canonicalize financial objects to `data/financial-*.json` with provenance.

### Service details — `service-details/*`

- Included scripts: translations, info-bar, main, version (sometimes search).
- Embedded variables: rare.
- Data files fetched: occasional external APIs used by widgets.
- DOM targets: page-specific content nodes.
- Notes: mostly static; low priority for data extraction unless content needs localization.

### Other static pages — `news/*`, `faq/*`, `terms/*`, `privacy/*`, `accessibility/*`

- Included scripts: translations, info-bar, main, version.
- Embedded variables: none or rare.
- Data files fetched: none local; occasional external APIs.
- DOM targets: page content blocks.
- Notes: low priority for data extraction.

---

## Inline attributes used across pages

- `data-count`: animated numeric counters
- `data-delay`: animation/observer delays
- `data-width`, `data-value`: bar widths / metric values
- `data-pillar`: CMCI pillar keys
- `data-i18n`: translation keys
- `data-version`: version injection target

---

## Canonical dataset recommendations (summary)

- `data/barangays-population.json`: [{ name, population, rank?, source? }]
- `data/population-timeseries.json`: [{ year, population, source? }]
- `data/competitive-index.json` (or `data/cmci.json`): keep or normalize CMCI shape
- Validate and keep: `data/services.json`, `data/officials.json`, `data/dpwh-projects.json`, `data/ordinances.json`, `data/resolutions.json`
- Provenance: add `*.provenance.json` with `source_url`, `accessed_date`, `method_of_extraction`, `license`, `maintainer_contact`.

---

## Migration & integration steps (ordered)

1. Extract `barangayData` and `historicalData` from `assets/js/statistics-new.js` into `data/` with provenance.
2. Update `assets/js/statistics-new.js` to `fetch()` canonical JSON first and fall back to embedded variables.
3. Add JSON schema checks and CI validations (use `assets/js/services-validator.js` as a starter).
4. Surface dataset version/timestamp and provenance on relevant pages.

---

## Next steps (pick one)

- A) Write `docs/statistics-page.md` (focused statistics doc).
- B) Extract `barangayData` and `historicalData` to `data/` and add provenance + fetch-with-fallback shim in `assets/js/statistics-new.js`.
- C) Expand this doc with file-level samples and line references for each embedded variable.

Reply with A, B, or C and I'll proceed.
