import React from 'react';
import { Search } from 'lucide-react';
import { categories } from './governanceData';

const PolicyFilters = ({ activeCategory, setActiveCategory, searchTerm, setSearchTerm }) => (
    <div className="flex flex-col items-center justify-between max-w-6xl gap-6 p-4 mx-auto mb-12 border border-gray-100 shadow-sm md:flex-row bg-gray-50 dark:bg-surfaceDark/50 rounded-2xl dark:border-gray-700/50 backdrop-blur-sm">
        <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                            ? "bg-brandPrimary text-white shadow-lg transform scale-105 ring-2 ring-brandPrimary/20"
                            : "bg-white dark:bg-surfaceDark text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
                type="text"
                className="block w-full py-3 pr-4 leading-5 placeholder-gray-500 transition-all bg-white border border-gray-200 shadow-sm text-themed pl-11 dark:border-gray-600 rounded-xl dark:bg-surfaceDark focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-brandGold"
                placeholder="Search policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
);

export default PolicyFilters;
