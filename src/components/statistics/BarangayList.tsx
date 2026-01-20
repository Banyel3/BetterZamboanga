'use client';

import { useState } from 'react';
import barangayData from '@/data/barangays.json';

const ITEMS_PER_PAGE = 20;
const maxPopulation = barangayData.barangays[0].population;

export default function BarangayList() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(barangayData.barangays.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentBarangays = barangayData.barangays.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    return (
        <div>
            {/* Barangay Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {currentBarangays.map((brgy, idx) => {
                    const rank = startIndex + idx + 1;
                    const width = Math.round((brgy.population / maxPopulation) * 100);
                    const isTop10 = rank <= 10;

                    return (
                        <div key={brgy.name} className="flex items-center gap-3">
                            <span className={`w-10 h-10 ${isTop10 ? 'bg-bz-primary text-white' : 'bg-gray-200 text-gray-600'} rounded-full flex items-center justify-center text-sm font-bold shrink-0`}>
                                {rank}
                            </span>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-gray-700 truncate">{brgy.name}</span>
                                    <span className="text-sm font-bold text-gray-800 ml-2">{brgy.population.toLocaleString()}</span>
                                </div>
                                <div className="bg-gray-100 rounded-full h-2">
                                    <div
                                        className={`${isTop10 ? 'bg-bz-primary' : 'bg-gray-400'} h-2 rounded-full transition-all`}
                                        style={{ width: `${width}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
                <button
                    onClick={() => goToPage(1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                    <i className="bi bi-chevron-double-left"></i>
                </button>
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                    <i className="bi bi-chevron-left"></i> Prev
                </button>

                <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${currentPage === page
                                    ? 'bg-bz-primary text-white'
                                    : 'border border-gray-200 hover:bg-gray-50'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                    Next <i className="bi bi-chevron-right"></i>
                </button>
                <button
                    onClick={() => goToPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                    <i className="bi bi-chevron-double-right"></i>
                </button>
            </div>

            {/* Page Info */}
            <p className="text-center text-sm text-gray-500 mt-4">
                Showing {startIndex + 1}-{Math.min(endIndex, barangayData.barangays.length)} of {barangayData.barangays.length} barangays
            </p>
        </div>
    );
}
