import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'City Statistics & Data | Better Zamboanga',
  description: 'Statistics and data for Zamboanga City, a highly urbanized city in Region IX. View population demographics, economic indicators, barangay data, and community statistics.',
};

// Key metrics
const keyMetrics = [
  { value: '977,234', label: 'Population', source: '2020 PSA Census', icon: 'bi-people-fill' },
  { value: '98', label: 'Barangays', source: 'Administrative Districts', icon: 'bi-geo-alt-fill' },
  { value: '1,483.38', label: 'Land Area (km²)', source: 'PSA Official Data', icon: 'bi-rulers' },
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

// Top 22 barangays by population
const barangays = [
  { rank: 1, name: 'Tetuan', population: '52,009', width: 100 },
  { rank: 2, name: 'Tumaga', population: '39,272', width: 76 },
  { rank: 3, name: 'San Roque', population: '34,270', width: 66 },
  { rank: 4, name: 'Mampang', population: '33,366', width: 64 },
  { rank: 5, name: 'Baliwasan', population: '30,214', width: 58 },
  { rank: 6, name: 'Zone IV', population: '29,912', width: 58 },
  { rank: 7, name: 'Talon-Talon', population: '29,618', width: 57 },
  { rank: 8, name: 'Guiwan', population: '28,020', width: 54 },
  { rank: 9, name: 'Zone III', population: '26,815', width: 52 },
  { rank: 10, name: 'San Jose Gusu', population: '25,367', width: 49 },
];

// Extended barangays (11-22)
const moreBarangays = [
  { rank: 11, name: 'Sta. Catalina', population: '24,078', width: 46 },
  { rank: 12, name: 'Pasonanca', population: '23,522', width: 45 },
  { rank: 13, name: 'Camino Nuevo', population: '22,641', width: 44 },
  { rank: 14, name: 'Sta. Maria', population: '22,034', width: 42 },
  { rank: 15, name: 'Canelar', population: '20,621', width: 40 },
  { rank: 16, name: 'Putik', population: '20,127', width: 39 },
  { rank: 17, name: 'Sinunuc', population: '19,625', width: 38 },
  { rank: 18, name: 'Zone II', population: '18,780', width: 36 },
  { rank: 19, name: 'Culianan', population: '18,233', width: 35 },
  { rank: 20, name: 'Zone I', population: '17,992', width: 35 },
  { rank: 21, name: 'Tugbungan', population: '17,469', width: 34 },
  { rank: 22, name: 'Bunguiao', population: '16,948', width: 33 },
];

// Economic sectors
const sectors = [
  { name: 'Agriculture', pct: 45 },
  { name: 'Trade & Commerce', pct: 30 },
  { name: 'Services', pct: 20 },
  { name: 'Industry', pct: 5 },
];

// CMCI Pillars
const cmciPillars = [
  { name: 'Economic Dynamism', score: '0.23', trend: '+12%', up: true, icon: 'bi-graph-up-arrow' },
  { name: 'Government Efficiency', score: '1.17', trend: '-8%', up: false, icon: 'bi-building-check' },
  { name: 'Infrastructure', score: '0.40', trend: '+5%', up: true, icon: 'bi-building-gear' },
  { name: 'Resiliency', score: '0.68', trend: '+3%', up: true, icon: 'bi-shield-check' },
  { name: 'Innovation', score: '0.15', trend: '+18%', up: true, icon: 'bi-lightbulb' },
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
            <p className="text-gray-500">Financial standing - Highly Urbanized City (Latest available fiscal year)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <i className="bi bi-graph-up-arrow text-bz-primary text-xl"></i>
                <span className="text-gray-600">Annual Income</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">Pending</p>
              <p className="text-xs text-gray-500">Awaiting BLGF Official Data</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <i className="bi bi-bank text-bz-primary text-xl"></i>
                <span className="text-gray-600">IRA Share</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">Pending</p>
              <p className="text-xs text-gray-500">Internal Revenue Allotment</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <i className="bi bi-pie-chart-fill text-bz-primary text-xl"></i>
                <span className="text-gray-600">IRA Dependency</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">Pending</p>
              <p className="text-xs text-gray-500">Awaiting Official Data</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Bureau of Local Government Finance (BLGF)</a>
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
            <p className="text-gray-500">Top 22 of 98 Barangays - 2020 Census of Population and Housing (PSA)</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Top 10 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Top 10 Barangays</h3>
              <div className="space-y-3">
                {barangays.map((brgy) => (
                  <div key={brgy.rank} className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-bz-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      #{brgy.rank}
                    </span>
                    <span className="w-28 text-sm font-medium text-gray-700 truncate">{brgy.name}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div className="bg-bz-primary h-2 rounded-full" style={{ width: `${brgy.width}%` }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800 w-16 text-right">{brgy.population}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Ranks 11-22 */}
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">Ranks 11-22</h3>
              <div className="space-y-3">
                {moreBarangays.map((brgy) => (
                  <div key={brgy.rank} className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                      #{brgy.rank}
                    </span>
                    <span className="w-28 text-sm font-medium text-gray-700 truncate">{brgy.name}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{ width: `${brgy.width}%` }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-800 w-16 text-right">{brgy.population}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://psa.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Philippine Statistics Authority (PSA)</a> - 2020 Census. Showing top 22 of 98 total barangays.
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
            <p className="text-gray-500">Cities and Municipalities Competitiveness Index (CMCI) Performance 2016-2024</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {cmciPillars.map((pillar, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100 text-center">
                <div className="w-10 h-10 bg-bz-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <i className={`bi ${pillar.icon} text-lg text-bz-primary`}></i>
                </div>
                <h4 className="text-xs font-medium text-gray-600 mb-1">{pillar.name}</h4>
                <p className="text-xl font-bold text-gray-800">{pillar.score}</p>
                <span className={`text-xs ${pillar.up ? 'text-green-600' : 'text-red-600'}`}>
                  <i className={`bi ${pillar.up ? 'bi-arrow-up' : 'bi-arrow-down'}`}></i> {pillar.trend}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">DTI CMCI Portal</a> - Placeholder data pending official releases
          </p>
        </div>
      </section>
    </>
  );
}
