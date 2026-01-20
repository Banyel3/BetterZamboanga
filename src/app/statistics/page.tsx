import { Metadata } from 'next';
import Link from 'next/link';
import BarangayList from '@/components/statistics/BarangayList';

export const metadata: Metadata = {
  title: 'City Statistics & Data | Better Zamboanga',
  description: 'Statistics and data for Zamboanga City, a highly urbanized city in Region IX. View population demographics, economic indicators, barangay data, and community statistics.',
};

// Key metrics (Verified from PSA, BLGF)
const keyMetrics = [
  { value: '977,234', label: 'Population', source: '2020 PSA Census', icon: 'bi-people-fill' },
  { value: '98', label: 'Barangays', source: 'Administrative Districts', icon: 'bi-geo-alt-fill' },
  { value: '1,414.70', label: 'Land Area (km²)', source: 'PSA Official Data', icon: 'bi-rulers' },
  { value: '1st Class', label: 'Income Class', source: 'Highly Urbanized City', icon: 'bi-award-fill' },
];

// Population trends
const populationTrends = [
  { year: '1990', population: '511,549' },
  { year: '1995', population: '601,794' },
  { year: '2000', population: '718,821' },
  { year: '2007', population: '774,199' },
  { year: '2010', population: '807,129' },
  { year: '2015', population: '861,799' },
  { year: '2020', population: '977,234' },
];

// Top 10 barangays by population (PSA 2020 Census - Verified)
const barangays = [
  { rank: 1, name: 'Talon-Talon', population: '37,350', width: 100 },
  { rank: 2, name: 'Calarian', population: '33,563', width: 90 },
  { rank: 3, name: 'Tumaga', population: '33,399', width: 89 },
  { rank: 4, name: 'Ayala', population: '26,658', width: 71 },
  { rank: 5, name: 'Baliwasan', population: '17,932', width: 48 },
  { rank: 6, name: 'Cabatangan', population: '17,812', width: 48 },
  { rank: 7, name: 'Arena Blanco', population: '13,671', width: 37 },
  { rank: 8, name: 'Curuan', population: '11,954', width: 32 },
  { rank: 9, name: 'Campo Islam', population: '11,730', width: 31 },
  { rank: 10, name: 'Boalan', population: '11,541', width: 31 },
];

// Extended barangays (11-20) - PSA 2020 Census
const moreBarangays = [
  { rank: 11, name: 'Culianan', population: '10,851', width: 29 },
  { rank: 12, name: 'Canelar', population: '10,512', width: 28 },
  { rank: 13, name: 'Cawit', population: '10,244', width: 27 },
  { rank: 14, name: 'Sta. Barbara', population: '9,895', width: 26 },
  { rank: 15, name: 'Mercedes', population: '9,421', width: 25 },
  { rank: 16, name: 'Cabaluay', population: '8,849', width: 24 },
  { rank: 17, name: 'Buenavista', population: '8,154', width: 22 },
  { rank: 18, name: 'Bolong', population: '8,068', width: 22 },
  { rank: 19, name: 'Bunguiao', population: '7,952', width: 21 },
  { rank: 20, name: 'Camino Nuevo', population: '7,421', width: 20 },
];

// Economic sectors
const sectors = [
  { name: 'Agriculture', pct: 45 },
  { name: 'Trade & Commerce', pct: 30 },
  { name: 'Services', pct: 20 },
  { name: 'Industry', pct: 5 },
];

// CMCI Pillars (DTI 2024 - Verified)
const cmciPillars = [
  { name: 'Economic Dynamism', score: '4.19', rank: '16th', icon: 'bi-graph-up-arrow' },
  { name: 'Government Efficiency', score: '9.14', rank: '29th', icon: 'bi-building-check' },
  { name: 'Infrastructure', score: '4.91', rank: '20th', icon: 'bi-building-gear' },
  { name: 'Resiliency', score: '11.41', rank: '25th', icon: 'bi-shield-check' },
  { name: 'Innovation', score: '4.67', rank: '33rd', icon: 'bi-lightbulb' },
];

export default function StatisticsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Statistics</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4">
            <i className="bi bi-bar-chart-fill"></i> City Data
          </span>
          <h1 className="text-3xl font-bold text-white mb-2">City Statistics</h1>
          <p className="text-gray-200">
            Data and statistics about Zamboanga City, a highly urbanized city in Region IX - Zamboanga Peninsula
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyMetrics.map((metric, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <div className="w-12 h-12 bg-bz-primary/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <i className={`bi ${metric.icon} text-2xl text-bz-primary`}></i>
                </div>
                <p className="text-2xl font-bold text-gray-800">{metric.value}</p>
                <p className="text-sm font-medium text-gray-700">{metric.label}</p>
                <p className="text-xs text-gray-500">{metric.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Finance */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-cash-stack"></i> Finance
            </span>
            <h2 className="text-2xl font-bold text-gray-800">City Government Income</h2>
            <p className="text-gray-500">Financial standing - Highly Urbanized City (FY 2024)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <i className="bi bi-graph-up-arrow text-bz-primary text-xl"></i>
                <span className="text-gray-600">Total Annual Income</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">₱5.34B</p>
              <p className="text-xs text-green-600"><i className="bi bi-arrow-up"></i> +5.9% from 2023</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <i className="bi bi-bank text-bz-primary text-xl"></i>
                <span className="text-gray-600">National Tax Allotment</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">₱4.34B</p>
              <p className="text-xs text-gray-500">Formerly IRA (Internal Revenue Allotment)</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <i className="bi bi-pie-chart-fill text-bz-primary text-xl"></i>
                <span className="text-gray-600">NTA Dependency</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">81.3%</p>
              <p className="text-xs text-gray-500">Share of NTA in total income</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">BLGF</a> &amp; <a href="https://dbm.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">DBM</a> - FY 2024
          </p>
        </div>
      </section>

      {/* Population Trends */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-graph-up"></i> Growth
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Population Trends</h2>
            <p className="text-gray-500">Historical growth from 1990 to 2020 (PSA Census years)</p>
          </div>

          {/* Trend Summary */}
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <div className="bg-gray-50 rounded-lg px-6 py-4 text-center">
              <p className="text-sm text-gray-500">1990</p>
              <p className="text-xl font-bold text-gray-800">511,549</p>
            </div>
            <i className="bi bi-arrow-right text-2xl text-gray-500"></i>
            <div className="bg-bz-primary/10 rounded-lg px-6 py-4 text-center border-2 border-bz-primary">
              <p className="text-sm text-bz-primary">2020</p>
              <p className="text-xl font-bold text-bz-primary">977,234</p>
            </div>
            <div className="bg-green-50 rounded-lg px-6 py-4 text-center">
              <p className="text-sm text-gray-500">Growth</p>
              <p className="text-xl font-bold text-green-600">+91.0%</p>
            </div>
          </div>

          {/* Population Chart Placeholder */}
          <div className="bg-gray-50 rounded-xl p-6 h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <i className="bi bi-graph-up text-4xl mb-2"></i>
              <p>Population Chart</p>
              <div className="flex justify-center gap-2 mt-4">
                {populationTrends.map((item, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="w-8 bg-bz-primary/20 rounded-t mx-auto"
                      style={{ height: `${(parseInt(item.population.replace(/,/g, '')) / 977234) * 100}px` }}
                    ></div>
                    <p className="text-xs mt-1">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Philippine Statistics Authority (PSA)</a>
          </p>
        </div>
      </section>

      {/* Population Distribution */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-pie-chart-fill"></i> Distribution
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Population by Barangay</h2>
            <p className="text-gray-500">All 98 Barangays - 2020 Census of Population and Housing (PSA)</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <BarangayList />
          </div>

          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Philippine Statistics Authority (PSA)</a> - 2020 Census of Population and Housing
          </p>
        </div>
      </section>

      {/* Economic Indicators */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-briefcase-fill"></i> Economy
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Economic Indicators</h2>
            <p className="text-gray-500">Key economic data and business statistics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-bz-primary/10 rounded-xl flex items-center justify-center">
                  <i className="bi bi-shop text-xl text-bz-primary"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">1,200</p>
                  <p className="text-sm text-gray-600">Registered Businesses</p>
                  <p className="text-xs text-green-600"><i className="bi bi-arrow-up"></i> +8% from last year</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-bz-primary/10 rounded-xl flex items-center justify-center">
                  <i className="bi bi-tree-fill text-xl text-bz-primary"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">8,500 ha</p>
                  <p className="text-sm text-gray-600">Agricultural Land</p>
                  <p className="text-xs text-gray-500">Rice & Corn Production</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-bz-primary/10 rounded-xl flex items-center justify-center">
                  <i className="bi bi-person-check-fill text-xl text-bz-primary"></i>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-800">94.2%</p>
                  <p className="text-sm text-gray-600">Employment Rate</p>
                  <p className="text-xs text-gray-500">Labor Force Participation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Economic Sectors */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">Economic Sectors</h3>
            <div className="space-y-4">
              {sectors.map((sector, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{sector.name}</span>
                    <span className="text-sm font-bold text-gray-800">{sector.pct}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-3">
                    <div className="bg-bz-primary h-3 rounded-full" style={{ width: `${sector.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Bureau of Local Government Finance (BLGF)</a> - 2023
          </p>
        </div>
      </section>

      {/* Poverty Statistics */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-graph-down-arrow"></i> Poverty
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Poverty Statistics</h2>
            <p className="text-gray-500">2021 City-Level Poverty Estimates (PSA)</p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 w-40">
              <p className="text-sm text-gray-500 mb-2">2018</p>
              <p className="text-4xl font-bold text-gray-700">7.0<span className="text-xl">%</span></p>
              <div className="bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-gray-400 h-2 rounded-full" style={{ width: '7%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">90% CI: 4.7% - 9.2%</p>
            </div>
            <div className="text-center">
              <i className="bi bi-arrow-right text-3xl text-gray-500"></i>
              <p className="text-sm text-green-600 font-medium">-0.6%</p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center border-2 border-green-400 w-40">
              <p className="text-sm text-green-600 mb-2">2021</p>
              <p className="text-4xl font-bold text-green-700">6.4<span className="text-xl">%</span></p>
              <div className="bg-green-200 rounded-full h-2 mt-3">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '6.4%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">90% CI: 4.7% - 8.1%</p>
              <span className="inline-flex items-center gap-1 text-xs text-green-600 mt-2">
                <i className="bi bi-check-circle-fill"></i> Improved
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            <i className="bi bi-info-circle"></i> Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Philippine Statistics Authority (PSA)</a> - 2021 Poverty Estimates
          </p>
        </div>
      </section>

      {/* CMCI Competitive Index */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-trophy-fill"></i> Competitiveness
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Zamboanga City Competitive Index</h2>
            <p className="text-gray-500">CMCI 2024 - Overall Rank: <strong>32nd</strong> among HUCs (Score: 36.36)</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cmciPillars.map((pillar, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                <div className="w-10 h-10 bg-bz-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <i className={`bi ${pillar.icon} text-lg text-bz-primary`}></i>
                </div>
                <h4 className="text-xs font-medium text-gray-600 mb-1">{pillar.name}</h4>
                <p className="text-xl font-bold text-gray-800">{pillar.score}</p>
                <span className="text-xs text-bz-primary font-medium">
                  Rank: {pillar.rank}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">DTI CMCI Portal</a> - 2024 Official Rankings
          </p>
        </div>
      </section>
    </>
  );
}
