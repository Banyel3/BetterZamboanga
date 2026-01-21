'use client';

import { useState } from 'react';
import Link from 'next/link';
import InfrastructureTable from '@/components/budget/InfrastructureTable';
import dpwhData from '@/data/dpwh-projects.json';

// Official BLGF SRE Data - Verified from SRE-QTR-2025.xlsx
// Source: Bureau of Local Government Finance (BLGF)
const sreDataByQuarter = {
  Q1: {
    label: 'Q1 2025 (Jan-Mar)',
    totalIncome: '₱2,074.23 M',
    totalIncomeRaw: 2074233405.90,
    totalExpense: '₱431.27 M',
    totalExpenseRaw: 431273684.18,
    netIncome: '₱1,642.96 M',
    netIncomeRaw: 1642959721.72,
    fundBalance: '₱9,239.45 M',
    fundBalanceRaw: 9239446543.47,
    cashBalanceBegin: '₱8,580.71 M',
    income: {
      local: {
        amount: '₱784.61 M',
        pct: '37.8%',
        label: 'Local Sources',
        detail: 'Tax & Non-Tax Revenue',
        raw: 784607830.02
      },
      external: {
        amount: '₱1,289.63 M',
        pct: '62.2%',
        label: 'External Sources',
        detail: 'National Tax Allotment (NTA)',
        raw: 1289625575.88
      },
    },
    expenditure: {
      gps: { amount: '₱192.98 M', pct: '44.8%', label: 'General Public Services', detail: 'Administration & Operations' },
      social: { amount: '₱163.45 M', pct: '37.9%', label: 'Social Services', detail: 'Health, Education, Welfare' },
      economic: { amount: '₱74.85 M', pct: '17.3%', label: 'Economic Services', detail: 'Infrastructure & Development' },
      debt: { amount: '₱0.00 M', pct: '0.0%', label: 'Debt Service', detail: 'Interest & Charges' },
    },
  },
  Q2: {
    label: 'Q2 2025 (Apr-Jun)',
    totalIncome: '₱3,510.87 M',
    totalIncomeRaw: 3510870810.10,
    totalExpense: '₱1,246.96 M',
    totalExpenseRaw: 1246955944.67,
    netIncome: '₱2,263.91 M',
    netIncomeRaw: 2263914865.43,
    fundBalance: '₱9,065.20 M',
    fundBalanceRaw: 9065195890.53,
    cashBalanceBegin: '₱8,580.71 M',
    income: {
      local: {
        amount: '₱932.19 M',
        pct: '26.5%',
        label: 'Local Sources',
        detail: 'Tax & Non-Tax Revenue',
        raw: 932190918.85
      },
      external: {
        amount: '₱2,578.68 M',
        pct: '73.5%',
        label: 'External Sources',
        detail: 'National Tax Allotment (NTA)',
        raw: 2578679891.25
      },
    },
    expenditure: {
      gps: { amount: '₱470.83 M', pct: '37.8%', label: 'General Public Services', detail: 'Administration & Operations' },
      social: { amount: '₱580.45 M', pct: '46.5%', label: 'Social Services', detail: 'Health, Education, Welfare' },
      economic: { amount: '₱195.68 M', pct: '15.7%', label: 'Economic Services', detail: 'Infrastructure & Development' },
      debt: { amount: '₱0.00 M', pct: '0.0%', label: 'Debt Service', detail: 'Interest & Charges' },
    },
  },
};

// Load infrastructure projects from data file

export default function BudgetPage() {
  const [selectedQuarter, setSelectedQuarter] = useState<'Q1' | 'Q2'>('Q1');
  const sreData = sreDataByQuarter[selectedQuarter];

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
              <p className="text-gray-500">FY 2025 quarterly financial performance - {sreData.label}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedQuarter('Q1')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedQuarter === 'Q1'
                  ? 'bg-bz-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                <span className="font-bold">Q1</span>
                <span className="text-xs block opacity-80">Jan - Mar</span>
              </button>
              <button
                onClick={() => setSelectedQuarter('Q2')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedQuarter === 'Q2'
                  ? 'bg-bz-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
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
                    <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-indigo-500' :
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
            <i className="bi bi-info-circle"></i> Source: <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Bureau of Local Government Finance (BLGF)</a> - Statement of Receipts & Expenditures FY 2025
          </p>
        </div>
      </section>

      {/* Infrastructure Investments - DPWH & Sumbong sa Pangulo Projects */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-building-gear"></i> Infrastructure Projects
            </span>
            <h2 className="text-2xl font-bold text-gray-800">DPWH & Government Infrastructure Projects</h2>
            <p className="text-gray-500">Implementing Agency: Zamboanga City 2nd District Engineering Office / Region IX</p>
          </div>

          <InfrastructureTable
            projects={dpwhData.projects}
            summary={dpwhData.summary}
          />

          <p className="text-xs text-gray-500 mt-6">
            <i className="bi bi-info-circle"></i> Data Sources: <a href="https://transparency.dpwh.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">DPWH Transparency Portal ({dpwhData.summary.dpwhPortalTotal?.toLocaleString() || '1,111'} contracts verified)</a> & <a href="https://sumbongsapangulo.ph/" target="_blank" rel="noopener noreferrer" className="text-bz-primary hover:underline">Sumbong sa Pangulo ({dpwhData.summary.dataSources?.sumbongSaPangulo?.projects || 34} flood control projects)</a>
          </p>
        </div>
      </section>
    </>
  );
}
