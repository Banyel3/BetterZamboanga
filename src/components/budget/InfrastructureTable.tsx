'use client';

import { useState, useMemo } from 'react';

interface Project {
    id: string;
    name: string;
    location: string;
    category: string;
    contractor: string;
    contractorId?: string;
    cost: number;
    status: number;
    completionDate: string;
    source?: string;
}

interface InfrastructureTableProps {
    projects: Project[];
    summary: {
        totalProjects: number;
        totalCost: number;
        completedProjects: number;
        ongoingProjects: number;
        dpwhPortalTotal?: number;
    };
}

const ITEMS_PER_PAGE = 25;

const CATEGORIES = [
    'All',
    'Flood Control and Drainage',
    'Roads',
    'Buildings and Facilities',
    'Bridges',
    'Water Provision and Storage',
];

const STATUS_FILTERS = [
    { label: 'All Status', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Ongoing', value: 'ongoing' },
];

export default function InfrastructureTable({ projects, summary }: InfrastructureTableProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState<'cost' | 'date' | 'status'>('date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let filtered = projects.filter(p => {
            const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
            const matchesStatus = selectedStatus === 'all' ||
                (selectedStatus === 'completed' && p.status >= 100) ||
                (selectedStatus === 'ongoing' && p.status < 100);
            const matchesSearch = searchQuery === '' ||
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.contractor.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesStatus && matchesSearch;
        });

        // Sort
        filtered.sort((a, b) => {
            let cmp = 0;
            if (sortBy === 'cost') {
                cmp = a.cost - b.cost;
            } else if (sortBy === 'status') {
                cmp = a.status - b.status;
            } else {
                cmp = new Date(a.completionDate).getTime() - new Date(b.completionDate).getTime();
            }
            return sortOrder === 'asc' ? cmp : -cmp;
        });

        return filtered;
    }, [projects, selectedCategory, selectedStatus, searchQuery, sortBy, sortOrder]);

    // Pagination
    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Reset page when filters change
    const handleFilterChange = (setter: (v: any) => void, value: any) => {
        setter(value);
        setCurrentPage(1);
    };

    // Category counts
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { 'All': projects.length };
        projects.forEach(p => {
            counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return counts;
    }, [projects]);

    // Format cost
    const formatCost = (cost: number) => {
        if (cost >= 1e9) return `₱${(cost / 1e9).toFixed(2)}B`;
        if (cost >= 1e6) return `₱${(cost / 1e6).toFixed(2)}M`;
        return `₱${cost.toLocaleString()}`;
    };

    // Get status badge
    const getStatusBadge = (status: number) => {
        if (status >= 100) {
            return <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700">Completed</span>;
        } else if (status >= 50) {
            return <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700">{status.toFixed(0)}%</span>;
        } else if (status > 0) {
            return <span className="px-2 py-0.5 text-xs rounded-full bg-orange-100 text-orange-700">{status.toFixed(0)}%</span>;
        } else {
            return <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">Not Started</span>;
        }
    };

    // Get category icon
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'Roads': return 'bi-signpost-split';
            case 'Bridges': return 'bi-water';
            case 'Flood Control and Drainage': return 'bi-droplet';
            case 'Buildings and Facilities': return 'bi-building';
            case 'Water Provision and Storage': return 'bi-moisture';
            default: return 'bi-hammer';
        }
    };

    // Page numbers
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        if (totalPages <= 7) {
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
            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-bz-primary/10 rounded-xl flex items-center justify-center">
                        <i className="bi bi-folder-fill text-xl text-bz-primary"></i>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-gray-800">{summary.dpwhPortalTotal || summary.totalProjects}</p>
                        <p className="text-sm text-gray-600">Total Contracts</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <i className="bi bi-currency-peso text-xl text-green-600"></i>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-gray-800">{formatCost(summary.totalCost)}</p>
                        <p className="text-sm text-gray-600">Total Investment</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <i className="bi bi-check-circle-fill text-xl text-blue-600"></i>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-gray-800">{summary.completedProjects}</p>
                        <p className="text-sm text-gray-600">Completed</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                        <i className="bi bi-hourglass-split text-xl text-yellow-600"></i>
                    </div>
                    <div>
                        <p className="text-xl font-bold text-gray-800">{summary.ongoingProjects}</p>
                        <p className="text-sm text-gray-600">Ongoing</p>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="mb-6 space-y-4">
                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.filter(c => categoryCounts[c] > 0 || c === 'All').map(category => (
                        <button
                            key={category}
                            onClick={() => handleFilterChange(setSelectedCategory, category)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-bz-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <i className={`bi ${getCategoryIcon(category)} mr-1`}></i>
                            {category === 'All' ? 'All Categories' : category} ({categoryCounts[category] || 0})
                        </button>
                    ))}
                </div>

                {/* Search and Status Filter */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 md:max-w-md">
                        <div className="relative">
                            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                            <input
                                type="text"
                                placeholder="Search by project name, location, or contractor..."
                                value={searchQuery}
                                onChange={(e) => handleFilterChange(setSearchQuery, e.target.value)}
                                className="w-full pl-11 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bz-primary/20 focus:border-bz-primary"
                            />
                        </div>
                    </div>
                    <select
                        value={selectedStatus}
                        onChange={(e) => handleFilterChange(setSelectedStatus, e.target.value)}
                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bz-primary/20"
                    >
                        {STATUS_FILTERS.map(f => (
                            <option key={f.value} value={f.value}>{f.label}</option>
                        ))}
                    </select>
                    <select
                        value={`${sortBy}-${sortOrder}`}
                        onChange={(e) => {
                            const [by, order] = e.target.value.split('-');
                            setSortBy(by as 'cost' | 'date' | 'status');
                            setSortOrder(order as 'asc' | 'desc');
                        }}
                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-bz-primary/20"
                    >
                        <option value="date-desc">Newest First</option>
                        <option value="date-asc">Oldest First</option>
                        <option value="cost-desc">Highest Cost</option>
                        <option value="cost-asc">Lowest Cost</option>
                        <option value="status-desc">Highest Completion</option>
                        <option value="status-asc">Lowest Completion</option>
                    </select>
                </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-500 mb-4">
                Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
            </p>

            {/* Projects Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 text-gray-700">
                            <tr>
                                <th className="px-4 py-3 text-left font-semibold">Project</th>
                                <th className="px-4 py-3 text-left font-semibold w-32">Category</th>
                                <th className="px-4 py-3 text-left font-semibold w-48">Contractor</th>
                                <th className="px-4 py-3 text-right font-semibold w-28">Cost</th>
                                <th className="px-4 py-3 text-center font-semibold w-24">Status</th>
                                <th className="px-4 py-3 text-left font-semibold w-28">Completion</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {paginatedProjects.map((project, i) => (
                                <tr key={project.id + '-' + i} className="hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <div className="flex items-start gap-3">
                                            <span className="text-xs text-gray-400 font-mono mt-0.5">{project.id}</span>
                                            <div>
                                                <p className="font-medium text-gray-800">{project.name}</p>
                                                <p className="text-xs text-gray-500">
                                                    <i className="bi bi-geo-alt"></i> {project.location}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className="inline-flex items-center gap-1 text-xs text-gray-600">
                                            <i className={`bi ${getCategoryIcon(project.category)}`}></i>
                                            {project.category.replace(' and ', ' & ')}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-gray-600">{project.contractor}</td>
                                    <td className="px-4 py-3 text-right font-medium text-bz-primary">
                                        {formatCost(project.cost)}
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        {getStatusBadge(project.status)}
                                    </td>
                                    <td className="px-4 py-3 text-gray-500 text-sm">
                                        {project.completionDate ? new Date(project.completionDate).toLocaleDateString('en-PH', {
                                            year: 'numeric',
                                            month: 'short'
                                        }) : '-'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {paginatedProjects.length === 0 && (
                    <div className="py-12 text-center text-gray-500">
                        <i className="bi bi-search text-4xl mb-2"></i>
                        <p>No projects found matching your criteria.</p>
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
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                            className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <i className="bi bi-chevron-double-left"></i>
                        </button>
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
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <i className="bi bi-chevron-double-right"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
