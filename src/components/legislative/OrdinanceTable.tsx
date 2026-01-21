'use client';

import { useState, useMemo } from 'react';

interface Ordinance {
    ordinanceNo: string;
    title: string;
    category: 'appropriation' | 'revenue' | 'regulatory';
    year: string;
}

interface OrdinanceTableProps {
    ordinances: Ordinance[];
}

const ITEMS_PER_PAGE = 25;

export default function OrdinanceTable({ ordinances }: OrdinanceTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter ordinances based on category and search
    const filteredOrdinances = useMemo(() => {
        return ordinances.filter(ord => {
            const matchesCategory = selectedCategory === 'all' || ord.category === selectedCategory;
            const matchesSearch = searchQuery === '' ||
                ord.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                ord.ordinanceNo.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [ordinances, selectedCategory, searchQuery]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredOrdinances.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedOrdinances = filteredOrdinances.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Reset to page 1 when filters change
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    };

    // Category counts
    const counts = useMemo(() => ({
        all: ordinances.length,
        appropriation: ordinances.filter(o => o.category === 'appropriation').length,
        revenue: ordinances.filter(o => o.category === 'revenue').length,
        regulatory: ordinances.filter(o => o.category === 'regulatory').length,
    }), [ordinances]);

    // Generate page numbers to show
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible + 2) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push('...');

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) pages.push(i);

            if (currentPage < totalPages - 2) pages.push('...');
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div>
            {/* Filters */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => handleCategoryChange('all')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'all'
                            ? 'bg-bz-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        All ({counts.all})
                    </button>
                    <button
                        onClick={() => handleCategoryChange('appropriation')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'appropriation'
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                            }`}
                    >
                        Appropriation ({counts.appropriation})
                    </button>
                    <button
                        onClick={() => handleCategoryChange('revenue')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'revenue'
                            ? 'bg-yellow-600 text-white'
                            : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                            }`}
                    >
                        Revenue ({counts.revenue})
                    </button>
                    <button
                        onClick={() => handleCategoryChange('regulatory')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'regulatory'
                            ? 'bg-green-600 text-white'
                            : 'bg-green-50 text-green-700 hover:bg-green-100'
                            }`}
                    >
                        Regulatory ({counts.regulatory})
                    </button>
                </div>

                {/* Search */}
                <div className="flex-1 md:max-w-sm">
                    <div className="relative">
                        <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                        <input
                            type="text"
                            placeholder="Search ordinances..."
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="w-full pl-11 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bz-primary/20 focus:border-bz-primary"
                        />
                    </div>
                </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-4">
                Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredOrdinances.length)} of {filteredOrdinances.length} ordinances
            </p>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-700">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold w-32">Ordinance No.</th>
                                <th className="px-4 py-3 text-left font-semibold">Title</th>
                                <th className="px-4 py-3 text-left font-semibold w-24">Category</th>
                                <th className="px-4 py-3 text-left font-semibold w-20">Year</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {paginatedOrdinances.map((ord, i) => (
                                <tr key={i} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium text-bz-primary whitespace-nowrap">
                                        {ord.ordinanceNo}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">{ord.title}</td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${ord.category === 'appropriation' ? 'bg-blue-100 text-blue-700' :
                                            ord.category === 'regulatory' ? 'bg-green-100 text-green-700' :
                                                'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {ord.category}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{ord.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {paginatedOrdinances.length === 0 && (
                    <div className="py-12 text-center text-gray-500">
                        <i className="bi bi-search text-4xl mb-2"></i>
                        <p>No ordinances found matching your criteria.</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-500">
                        Page {currentPage} of {totalPages}
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <i className="bi bi-chevron-left"></i>
                        </button>

                        {getPageNumbers().map((page, i) => (
                            typeof page === 'number' ? (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(page)}
                                    className={`px-3 py-2 rounded-lg min-w-[40px] ${currentPage === page
                                        ? 'bg-bz-primary text-white'
                                        : 'border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    {page}
                                </button>
                            ) : (
                                <span key={i} className="px-2">...</span>
                            )
                        ))}

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
