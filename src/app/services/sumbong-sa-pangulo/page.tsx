'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import sspData from '@/data/ssp-projects.json';

interface SSPProject {
    id: string;
    name: string;
    location: string;
    category: string;
    contractor: string;
    cost: number;
    status: number;
    completionDate: string;
}

const projects = sspData.projects as SSPProject[];
const summary = sspData.summary;

function formatCurrency(amount: number): string {
    if (amount >= 1_000_000_000) {
        return `₱${(amount / 1_000_000_000).toFixed(2)}B`;
    }
    if (amount >= 1_000_000) {
        return `₱${(amount / 1_000_000).toFixed(2)}M`;
    }
    return `₱${amount.toLocaleString()}`;
}

export default function SumbongSaPanguloPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState<'date' | 'cost' | 'name'>('date');

    // Get unique categories
    const categories = useMemo(() => {
        const cats = [...new Set(projects.map(p => p.category))];
        return cats.sort();
    }, []);

    // Filter and sort projects
    const filteredProjects = useMemo(() => {
        let result = [...projects];

        // Search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(p =>
                p.name.toLowerCase().includes(term) ||
                p.location.toLowerCase().includes(term) ||
                p.contractor.toLowerCase().includes(term)
            );
        }

        // Category filter
        if (categoryFilter !== 'all') {
            result = result.filter(p => p.category === categoryFilter);
        }

        // Sort
        result.sort((a, b) => {
            if (sortBy === 'date') {
                const dateA = new Date(a.completionDate);
                const dateB = new Date(b.completionDate);
                return dateB.getTime() - dateA.getTime();
            }
            if (sortBy === 'cost') {
                return b.cost - a.cost;
            }
            return a.name.localeCompare(b.name);
        });

        return result;
    }, [searchTerm, categoryFilter, sortBy]);

    return (
        <>
            {/* Page Header */}
            <section className="page-header-v3 py-12">
                <div className="container mx-auto px-4 relative z-10">
                    <nav className="text-sm text-gray-300 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/services" className="hover:text-white">Services</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">Sumbong sa Pangulo</span>
                    </nav>
                    <span className="inline-block px-3 py-1 bg-bz-accent-yellow text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
                        <i className="bi bi-megaphone mr-1"></i>
                        Presidential Transparency
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Sumbong sa Pangulo
                    </h1>
                    <p className="text-gray-200 max-w-2xl">
                        Infrastructure projects completed through the Presidential Complaints Center transparency initiative.
                    </p>
                </div>
            </section>

            {/* Summary Stats */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                            <div className="text-3xl font-bold text-bz-primary">{summary.totalProjects}</div>
                            <div className="text-sm text-gray-500">Total Projects</div>
                        </div>
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                            <div className="text-3xl font-bold text-bz-accent-green">{formatCurrency(summary.totalCost)}</div>
                            <div className="text-sm text-gray-500">Total Investment</div>
                        </div>
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                            <div className="text-3xl font-bold text-green-600">{summary.completedProjects}</div>
                            <div className="text-sm text-gray-500">Completed</div>
                        </div>
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                            <div className="text-3xl font-bold text-blue-600">100%</div>
                            <div className="text-sm text-gray-500">Completion Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-6 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    placeholder="Search projects, location, or contractor..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bz-primary focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="w-full md:w-64">
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bz-primary focus:border-transparent"
                            >
                                <option value="all">All Categories</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Sort */}
                        <div className="w-full md:w-48">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'date' | 'cost' | 'name')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bz-primary focus:border-transparent"
                            >
                                <option value="date">Latest First</option>
                                <option value="cost">Highest Cost</option>
                                <option value="name">Alphabetical</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects List */}
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="mb-4 text-sm text-gray-500">
                        Showing {filteredProjects.length} of {projects.length} projects
                    </div>

                    <div className="space-y-4">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                                    {/* Project Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                                                COMPLETED
                                            </span>
                                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-gray-800 mb-2">
                                            {project.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <i className="bi bi-geo-alt text-bz-accent-coral"></i>
                                                {project.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <i className="bi bi-building text-bz-primary"></i>
                                                {project.contractor}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Cost and Date */}
                                    <div className="flex flex-row lg:flex-col gap-4 lg:gap-2 lg:text-right">
                                        <div>
                                            <div className="text-lg font-bold text-bz-accent-green">
                                                {formatCurrency(project.cost)}
                                            </div>
                                            <div className="text-xs text-gray-400">Project Cost</div>
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-700">
                                                {project.completionDate}
                                            </div>
                                            <div className="text-xs text-gray-400">Completion Date</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <i className="bi bi-search text-4xl text-gray-300 mb-4 block"></i>
                            <p className="text-gray-500">No projects found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-lg text-gray-800 mb-4">
                            <i className="bi bi-info-circle text-bz-primary mr-2"></i>
                            About Sumbong sa Pangulo
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Sumbong sa Pangulo (Presidential Complaints Center) is a transparency initiative that allows citizens
                            to report infrastructure issues and track government project completion. The projects listed here are
                            infrastructure works in Zamboanga City that were completed through this mechanism.
                        </p>
                        <a
                            href="https://sumbongsapangulo.ph/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-bz-primary hover:underline"
                        >
                            <i className="bi bi-box-arrow-up-right"></i>
                            Visit Official Sumbong sa Pangulo Portal
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
