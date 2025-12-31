# Data Requirements — Statistics Page

This document lists the datasets required to fully populate the `statistics` page of the site (for a localized fork such as Zamboanga City). It includes dataset specifications, sample JSON schemas, acquisition tips, and a provenance template.

## How to use

- Each dataset section contains: ID, purpose, required fields, sample JSON, acquisition tips, and normalization notes.
- Place canonical JSON outputs under `data/` (e.g., `data/barangay_population.json`) and a small provenance file next to each (e.g., `data/barangay_population.provenance.json`).

---

## 1. population_timeseries

- dataset_id: `population_timeseries`
- display_name: Municipal Population Time Series
- purpose: Population Trends chart and growth summaries (used by `historicalLineChart`)
- fields:
  - `year` (integer) — calendar year
  - `population` (integer) — total municipal population

Sample JSON (array):

```json
[
  { "year": 1990, "population": 38006 },
  { "year": 1995, "population": 42857 },
  { "year": 2000, "population": 47288 },
  { "year": 2007, "population": 53004 },
  { "year": 2010, "population": 56831 },
  { "year": 2015, "population": 62649 },
  { "year": 2020, "population": 65896 },
  { "year": 2024, "population": 69296 }
]
```

Acquisition tips:

- Primary: Philippine Statistics Authority (PSA) census and population releases.
- Alternate: LGU Planning Office (MPDO/CPDO) historical estimates.

Normalization notes:

- Use integers (no commas). Include only years with available data. Store as array ordered by year.

Update frequency: Annual (or after PSA/LGU releases).

---

## 2. barangay_population

- dataset_id: `barangay_population`
- display_name: Barangay-level Population (latest census)
- purpose: Distribution Pie Chart and barangay listing (used by `distributionPieChart`, `populationBarChart`)
- fields:
  - `barangay_id` (string) — canonical code or slug if available
  - `barangay_name` (string)
  - `population` (integer)
  - `rank` (integer, optional)

Sample JSON:

```json
[
  {
    "barangay_id": "roxas",
    "barangay_name": "Roxas",
    "population": 9088,
    "rank": 1
  },
  {
    "barangay_id": "quirino",
    "barangay_name": "Quirino",
    "population": 6572,
    "rank": 2
  }
]
```

Acquisition tips:

- PSA barangay-level census tables (preferred). Search PSA Quickstat or FTable CSVs.
- LGU MPDO/CPDO for cleaned or corrected local spellings and PSGC codes.

Normalization notes:

- Include PSGC codes if available; ensure consistent casing; population integer.

Update frequency: Per census or LGU update.

---

## 3. cmci_competitiveness

- dataset_id: `cmci_competitiveness`
- display_name: Cities & Municipalities Competitiveness Index (CMCI)
- purpose: CMCI overview and pillar trend charts (used by CMCI canvas elements)
- fields (tall table preferred):
  - `year` (integer)
  - `pillar_id` (string) — e.g., `economic-dynamism`, `government-efficiency`, `infrastructure`, `resiliency`, `innovation`
  - `indicator_name` (string)
  - `value` (number)

Sample JSON:

```json
[
  {
    "year": 2024,
    "pillar_id": "economic-dynamism",
    "indicator_name": "Local Economy Size",
    "value": 0.0259
  },
  {
    "year": 2024,
    "pillar_id": "innovation",
    "indicator_name": "ICT Plan",
    "value": 2.0001
  }
]
```

Acquisition tips:

- DTI/CMCI portal (official releases). Look for Excel/CSV exports per municipality or regional datasets.
- If only PDFs are available, extract tables carefully and verify totals.

Normalization notes:

- Use floats, preserve decimals (4 dp recommended). Include year and pillar for grouping.

Update frequency: Annual (after CMCI release).

---

## 4. municipal_finance_sre

- dataset_id: `municipal_finance_sre`
- display_name: Municipal Finance / SRE (BLGF)
- purpose: Municipal income cards, IRA vs local income breakdown
- fields:
  - `fiscal_year` (integer)
  - `total_annual_income_php` (number)
  - `ira_amount_php` (number)
  - `ira_share_pct` (number)
  - `local_sources_php` (number)

Sample JSON (one object per year):

```json
{
  "fiscal_year": 2023,
  "total_annual_income_php": 371329918.71,
  "ira_amount_php": 220770000.0,
  "ira_share_pct": 59.45,
  "local_sources_php": 150559918.71
}
```

Acquisition tips:

- BLGF SRE downloads (BLGF website) or LGU Finance Office records.

Normalization notes:

- Monetary values numeric (no commas). Compute `ira_share_pct` if only amounts provided: `(ira_amount_php / total_annual_income_php) * 100`.

Update frequency: Annual.

---

## 5. economy_indicators

- dataset_id: `economy_indicators`
- display_name: Local Economic Indicators
- purpose: Registered businesses, agricultural land, employment rate, sector shares
- fields:
  - `year` (integer)
  - `registered_businesses` (integer)
  - `agricultural_land_ha` (number)
  - `employment_rate_pct` (number)
  - `sector_shares` (object with sector percentages)

Sample JSON:

```json
{
  "year": 2024,
  "registered_businesses": 1200,
  "agricultural_land_ha": 8500,
  "employment_rate_pct": 94.2,
  "sector_shares": {
    "Agriculture": 45,
    "Trade & Commerce": 30,
    "Services": 20,
    "Industry": 5
  }
}
```

Acquisition tips:

- BPLO/LGU for registered business counts; PSA/DOLE for employment stats; DA for agricultural land.

Normalization notes:

- Percentages sum to ~100. Use canonical sector labels.

Update frequency: Annual or as LGU updates occur.

---

## 6. poverty_estimates

- dataset_id: `poverty_estimates`
- display_name: Municipal Poverty Estimates (with CI)
- purpose: Poverty cards and CI visualizations
- fields:
  - `reference_year` (integer)
  - `poverty_rate_pct` (number)
  - `ci_lower_pct` (number)
  - `ci_upper_pct` (number)
  - `notes` (string)

Sample JSON:

```json
{
  "reference_year": 2021,
  "poverty_rate_pct": 6.4,
  "ci_lower_pct": 4.7,
  "ci_upper_pct": 8.1,
  "notes": "PSA SAE municipal-level estimate"
}
```

Acquisition tips:

- PSA small-area estimation outputs / poverty statistics.

Normalization notes:

- Use percent numeric values; include method notes where applicable.

Update frequency: Per PSA release (multi-year cadence).

---

## 7. municipality_metadata

- dataset_id: `municipality_metadata`
- display_name: Municipality Metadata
- purpose: Header metrics (land area, barangay count, income class) and canonical joins
- fields:
  - `muni_code` (string) — PSGC code
  - `name` (string)
  - `province` (string)
  - `region` (string)
  - `land_area_km2` (number)
  - `barangay_count` (integer)
  - `income_class` (string)

Sample JSON:

```json
{
  "muni_code": "153103000",
  "name": "Zamboanga City",
  "province": "Zamboanga del Sur",
  "region": "Region IX",
  "land_area_km2": 162.7,
  "barangay_count": 22,
  "income_class": "1st"
}
```

Acquisition tips:

- PSGC/PSA for codes and counts; LGU for income class.

Normalization notes:

- Use PSGC as join key when available.

Update frequency: Rare; update on administrative changes.

---

## 8. realtime_external (optional)

- dataset_id: `realtime_external`
- display_name: Real-time Feeds (exchange rates, weather)
- purpose: Info bar live display (optional; not required for static charts)
- fields:
  - `timestamp_utc` (ISO string)
  - `exchange_rates` (object)
  - `weather_temperature_c` (number)

Acquisition tips:

- `exchangerate.host` or paid providers for exchange rates
- `open-meteo` or paid weather APIs for weather

Normalization notes:

- Keep short TTLs; handle fetch failures gracefully.

Update frequency: Live (minutes) — optional for static dataset repository.

---

## Provenance template

For every dataset file add a small provenance JSON next to it (e.g., `data/barangay_population.provenance.json`):

```json
{
  "dataset_id": "barangay_population",
  "source_name": "Philippine Statistics Authority (PSA)",
  "source_url": "https://psa.gov.ph/",
  "contact": "psa-info@psa.gov.ph",
  "date_fetched": "2025-12-31",
  "license": "PSA terms / public data",
  "notes": "Downloaded barangay-level CSV for municipality X"
}
```

---

## Where to place files in the repo

- Raw downloads: `data/raw/` (store original CSV/XLS/PDF)
- Normalized outputs: `data/normalized/` or directly `data/` (e.g., `data/barangay_population.json`)
- Provenance files: `data/*.provenance.json`

## Extraction & validation tips

- Prefer official CSV/Excel; if PDFs, extract carefully and cross-check totals.
- Keep raw files for audit and reproducibility.
- Add a validation script (`scripts/validate_data.py` or `scripts/validate-data.js`) to check schema compliance.

## Acquisition contacts

- PSA: census, poverty, barangay populations
- BLGF: SRE and finance
- DTI/CMCI: competitiveness indicators
- LGU MPDO/CPDO and Finance Office: local counts, BPLO, and reconciled financials

---

## Minimal workflow to implement datasets

1. Acquire raw files and place in `data/raw/`.
2. Run extraction scripts to produce normalized JSON under `data/`.
3. Add provenance JSON per dataset.
4. Run validation and spot-check charts locally.

---

Document created: `docs/data-requirements.md`

If you want, I can now scaffold a prototype Python scraper for the `barangay_population` dataset and produce `data/barangay_population.json` (sample), or run a reconnaissance to list exact source URLs for Zamboanga City. Let me know which next step you prefer.
