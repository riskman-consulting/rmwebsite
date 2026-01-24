// src/event/components/FilterBar.jsx

import { motion } from "framer-motion";
import { fadeUp } from "./motionConfig";

export default function FilterBar({ events = [], filters, setFilters }) {
  /* --------------------------------
     Derive filter options
  ----------------------------------*/
  const years = [...new Set(events.map(e => e.year))].sort((a, b) => b - a);
  const types = [...new Set(events.map(e => e.type))];
  const locations = [
    ...new Set(
      events
        .map(e => e.location?.split(",")[0])
        .filter(Boolean)
    ),
  ];

  /* --------------------------------
     Handlers
  ----------------------------------*/
  const updateFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value || null,
    }));
  };

  const resetFilters = () => {
    setFilters({ year: null, type: null, location: null });
  };

  const isActive =
    filters.year || filters.type || filters.location;

  /* --------------------------------
     Render
  ----------------------------------*/
  return (
    <section className="bg-surfaceLight border-b border-borderLight sticky top-0 z-20">
      <div className="container py-4 sm:py-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex flex-col gap-3
            sm:flex-row sm:flex-wrap sm:items-center sm:gap-4
          "
        >
          {/* Year */}
          <select
            value={filters.year || ""}
            onChange={e => updateFilter("year", Number(e.target.value))}
            className="
              w-full sm:w-auto
              px-4 py-2.5
              border border-borderLight
              rounded-xl text-sm
              bg-white
              focus:outline-none focus:ring-2 focus:ring-brandPrimary/30
            "
          >
            <option value="">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          {/* Type */}
          <select
            value={filters.type || ""}
            onChange={e => updateFilter("type", e.target.value)}
            className="
              w-full sm:w-auto
              px-4 py-2.5
              border border-borderLight
              rounded-xl text-sm
              bg-white
              focus:outline-none focus:ring-2 focus:ring-brandPrimary/30
            "
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* Location */}
          <select
            value={filters.location || ""}
            onChange={e => updateFilter("location", e.target.value)}
            className="
              w-full sm:w-auto
              px-4 py-2.5
              border border-borderLight
              rounded-xl text-sm
              bg-white
              focus:outline-none focus:ring-2 focus:ring-brandPrimary/30
            "
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Reset */}
          {isActive && (
            <button
              onClick={resetFilters}
              className="
                sm:ml-auto
                text-sm font-semibold
                text-brandPrimary
                hover:underline
              "
            >
              Reset Filters
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
