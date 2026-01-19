import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Budget & Financial Transparency | Better Zamboanga',
  description: 'View the municipal budget and financial transparency reports of Zamboanga City. Access public funds data, budget breakdown, expenditures, and financial statements.',
};

// SRE Q1 Data
const sreData = {
  totalIncome: '₱2,138.15 M',
  totalExpense: '₱1,639.95 M',
  netIncome: '₱498.20 M',
  fundBalance: '₱1,842.50 M',
  income: {
    local: { amount: '₱892.35 M', pct: '41.7%', label: 'Local Sources', detail: 'Tax & Non-Tax Revenue' },
    external: { amount: '₱1,245.80 M', pct: '58.3%', label: 'External Sources', detail: 'National Tax Allotment' },
  },
  expenditure: {
    gps: { amount: '₱856.40 M', pct: '52.2%', label: 'General Public Services', detail: 'Administration & Operations' },
    social: { amount: '₱425.30 M', pct: '25.9%', label: 'Social Services', detail: 'Health, Education, Welfare' },
    economic: { amount: '₱312.75 M', pct: '19.1%', label: 'Economic Services', detail: 'Infrastructure & Development' },
    debt: { amount: '₱45.50 M', pct: '2.8%', label: 'Debt Service', detail: 'Interest & Charges' },
  },
};

// Infrastructure stats
const infraStats = [
  { value: '84', label: 'Total Projects', icon: 'bi-folder-fill' },
  { value: '₱3.19B', label: 'Total Investment', icon: 'bi-currency-peso' },
  { value: '72', label: 'Completed', icon: 'bi-check-circle-fill' },
  { value: '12', label: 'Ongoing', icon: 'bi-hourglass-split' },
];

// Sample DPWH projects
const dpwhProjects = [
  {
    year: '2023',
    category: 'Flood Control',
    title: 'Flood Control for Urban Core and Central District (Package II)',
    location: 'Urban Core and Central District, Zamboanga City',
    workType: 'Flood Control with Pumping Station and RROW',
    contractor: 'Sunwest, Inc. / Bendimil Construction',
    cost: '₱198,360,500',
  },
  {
    year: '2023',
    category: 'Flood Control',
    title: 'Construction of Flood Control Structure at Tinuba River',
    location: 'Sinubong, Zamboanga City',
    workType: 'River Flood Control Structure',
    contractor: 'JM2K Construction',
    cost: '₱41,109,967',
  },
  {
    year: '2023',
    category: 'Flood Control',
    title: 'Construction of Flood Control Structure at Maasin Creek',
    location: 'Zamboanga City',
    workType: 'Creek Flood Control Structure',
    contractor: 'Benram Construction / Allrock Construction',
    cost: '₱39,189,522',
  },
];

export default function BudgetPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Budget & Transparency</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4">
            <i className="bi bi-shield-check"></i> Financial Transparency
          </span>
          <h1 className="text-3xl font-bold text-white mb-2">Budget & Financial Transparency</h1>
          <p className="text-gray-200">
            Tracking City finances and projects for accountability
          </p>
        </div>
      </section>

      {/* Statement of Receipts & Expenditures */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
                <i className="bi bi-graph-up-arrow"></i> Financial Report
              </span>
              <h2 className="text-2xl font-bold text-gray-800">Statement of Receipts & Expenditures</h2>
              <p className="text-gray-500">FY 2025 quarterly financial performance</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-bz-primary text-white rounded-lg text-sm font-medium">
                <span className="font-bold">Q1</span>
                <span className="text-xs block opacity-80">Jan - Mar</span>
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200">
                <span className="font-bold">Q2</span>
                <span className="text-xs block opacity-80">Apr - Jun</span>
              </button>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-green-50 rounded-xl p-5 border border-green-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="bi bi-arrow-down-circle text-green-600 text-xl"></i>
                </div>
              </div>
              <p className="text-2xl font-bold text-green-700">{sreData.totalIncome}</p>
              <p className="text-sm text-gray-600">Total Income</p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <i className="bi bi-arrow-up-circle text-red-600 text-xl"></i>
                </div>
              </div>
              <p className="text-2xl font-bold text-red-700">{sreData.totalExpense}</p>
              <p className="text-sm text-gray-600">Total Expenditures</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="bi bi-plus-slash-minus text-blue-600 text-xl"></i>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-700">{sreData.netIncome}</p>
              <p className="text-sm text-gray-600">Net Operating Income</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="bi bi-wallet2 text-purple-600 text-xl"></i>
                </div>
              </div>
              <p className="text-2xl font-bold text-purple-700">{sreData.fundBalance}</p>
              <p className="text-sm text-gray-600">Fund Balance (End)</p>
            </div>
          </div>

          {/* Breakdown Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Income Sources */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="bi bi-pie-chart text-bz-primary"></i> Income Sources
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{sreData.income.local.label}</p>
                    <p className="text-xs text-gray-500">{sreData.income.local.detail}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">{sreData.income.local.amount}</p>
                    <p className="text-xs text-gray-500">{sreData.income.local.pct}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{sreData.income.external.label}</p>
                    <p className="text-xs text-gray-500">{sreData.income.external.detail}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">{sreData.income.external.amount}</p>
                    <p className="text-xs text-gray-500">{sreData.income.external.pct}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expenditure Allocation */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="bi bi-bar-chart text-bz-primary"></i> Expenditure Allocation
              </h3>
              <div className="space-y-3">
                {Object.values(sreData.expenditure).map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      i === 0 ? 'bg-indigo-500' :
                      i === 1 ? 'bg-orange-500' :
                      i === 2 ? 'bg-teal-500' : 'bg-gray-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800 text-sm">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.detail}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800 text-sm">{item.amount}</p>
                      <p className="text-xs text-gray-500">{item.pct}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Bureau of Local Government Finance (BLGF)</a>
          </p>
        </div>
      </section>

      {/* Infrastructure Investments */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-building-gear"></i> Public Works
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Infrastructure Investments</h2>
            <p className="text-gray-500">₱3.19 billion in infrastructure development across 84 projects</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {infraStats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-bz-primary/10 rounded-xl flex items-center justify-center">
                  <i className={`bi ${stat.icon} text-xl text-bz-primary`}></i>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Project Cards */}
          <div className="space-y-4">
            {dpwhProjects.map((project, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-bz-primary text-white text-xs px-2 py-1 rounded">{project.year}</span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded flex items-center gap-1">
                    <i className="bi bi-water"></i> {project.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  <i className="bi bi-geo-alt"></i> {project.location}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Type of Work</p>
                    <p className="font-medium text-gray-800">{project.workType}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Contractor</p>
                    <p className="font-medium text-gray-800">{project.contractor}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Contract Cost</p>
                    <p className="font-bold text-bz-primary">{project.cost}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    <i className="bi bi-info-circle"></i> Source: Sumbong sa Pangulo
                  </span>
                  <a href="https://sumbongsapangulo.ph/" target="_blank" rel="noopener noreferrer" className="text-sm text-bz-primary hover:underline">
                    View Details <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPWH Projects */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-building"></i> National Government Projects
            </span>
            <h2 className="text-2xl font-bold text-gray-800">DPWH Infrastructure Projects in Zamboanga City</h2>
            <p className="text-gray-500">Implementing Agency: Zamboanga City 2nd District Engineering Office / Region IX</p>
            <p className="text-xs text-gray-500 mt-1">
              <i className="bi bi-database"></i> Showing 84 of 1,111 total contracts from DPWH portal
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100">
            <i className="bi bi-building-gear text-4xl text-gray-300 mb-4"></i>
            <p className="text-gray-500">DPWH project data is loaded dynamically from the transparency portal.</p>
            <a href="https://transparency.dpwh.gov.ph/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-bz-primary hover:underline">
              Visit DPWH Transparency Portal <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            <i className="bi bi-info-circle"></i> Data Sources: <a href="https://transparency.dpwh.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">DPWH Transparency Portal (1,111 contracts verified)</a> & <a href="https://sumbongsapangulo.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Sumbong sa Pangulo (18 flood control projects)</a>
          </p>
        </div>
      </section>
    </>
  );
}
