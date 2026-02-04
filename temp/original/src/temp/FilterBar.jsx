import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiX } from 'react-icons/fi';

const FilterBar = ({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }) => {
  const filters = ['All', 'Mumbai', 'Delhi', 'Hyderabad', 'Bangalore', 'Featured'];

  return (
    <div className="w-full space-y-5">
      {/* Branded Glassmorphic Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 p-3 md:p-4 bg-white/40 dark:bg-[#001A33]/40 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] border border-[#003366]/10 dark:border-[#FFC000]/15 shadow-lg">
        
        {/* Search Bar Group - Responsive Width */}
        <div className="relative w-full lg:max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-slate-400 group-focus-within:text-[#FFB800] transition-colors" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search journeys..."
            className="block w-full pl-12 pr-12 py-3.5 md:py-4 bg-white dark:bg-[#000d1a] border-none rounded-2xl text-sm font-semibold shadow-inner ring-1 ring-slate-200 dark:ring-white/5 focus:ring-2 focus:ring-[#FFB800]/50 outline-none transition-all placeholder:text-slate-400 dark:text-white"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-[#FFB800] transition-colors"
            >
              <FiX size={18} />
            </button>
          )}
        </div>

        {/* Filter Group - Horizontal Scrollable */}
        <div className="flex items-center gap-4 md:gap-6 w-full lg:w-auto overflow-hidden px-1">
          <div className="hidden sm:flex items-center gap-2 text-[#001F3F] dark:text-[#FFC000] shrink-0">
            <FiFilter className="text-sm" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Filter</span>
          </div>

          {/* Scrollable Chips with Hidden Scrollbar Logic */}
          <div className="flex flex-1 items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-5 md:px-6 py-2.5 md:py-3 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'text-[#001F3F]'
                      : 'text-[#001F3F]/60 dark:text-white/60 hover:text-[#001F3F] dark:hover:text-white'
                  }`}
                >
                  {/* Sliding Gradient Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-[#FFB800] to-[#FFC000] rounded-xl shadow-lg shadow-[#FFB800]/20"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Branded Helper Text - Optimized for Mobile wrap */}
      <div className="px-4 md:px-6 flex items-center gap-2 flex-wrap">
        <div className="h-1 w-1 rounded-full bg-[#FFB800] shrink-0" />
        <p className="text-[10px] md:text-[11px] font-black text-[#001F3F]/40 dark:text-white/40 uppercase tracking-[0.15em] leading-relaxed">
          Showing <span className="text-[#001F3F] dark:text-[#FFC000]">{activeFilter}</span>
          {searchQuery && (
            <>
              {' '}matching <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000]">"{searchQuery}"</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default FilterBar;