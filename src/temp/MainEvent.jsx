import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './Hero';
import WhyItMatters from './WhyItMatters';
import EventsGrid from './EventsGrid';
import EventModal from './EventModal';
import FilterBar from './FilterBar';
import { events } from '../pages/about/Events.jsx';
import { FiCalendar, FiArrowDown } from 'react-icons/fi';
import EventFAQ from './FaqSection.jsx';

const years = ["2026", "2025", "2024", "2023"];

const MainEvent = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events by year, location filter, and search query
  const filteredEvents = useMemo(() => {
    let filtered = events.filter((event) => event.date.includes(selectedYear));
    
    if (activeFilter !== "All") {
      if (activeFilter === "Featured") {
        filtered = filtered.filter((event) => event.featured);
      } else {
        filtered = filtered.filter((event) => 
          event.location.toLowerCase().includes(activeFilter.toLowerCase())
        );
      }
    }
    
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedYear, activeFilter, searchQuery]);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-surfaceLight dark:bg-surfaceDark transition-colors duration-500 overflow-x-hidden">
      <main className="flex-grow">
        {/* Featured Hero Banner */}
        <Hero 
          featuredEvent={events.find(e => e.featured) || events[0]} 
          onOpenDetails={handleOpenModal} 
        />
        
        {/* Why it Matters Section */}
        <WhyItMatters />
        
        {/* Branded Year Navigation */}
        <div className="sticky top-0 z-40 bg-white/80 dark:bg-[#001F3F]/80 backdrop-blur-xl border-b border-[#003366]/5 dark:border-[#FFC000]/10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-24">
              {/* Year Navigation */}
              <div className="flex gap-4">
                {years.map((year) => {
                  const isActive = selectedYear === year;
                  return (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`relative px-8 py-3 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-2xl ${
                        isActive
                          ? "text-[#001F3F] shadow-xl shadow-[#FFB800]/20"
                          : "text-[#001F3F]/40 dark:text-white/40 hover:text-[#001F3F] dark:hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activeYear"
                          className="absolute inset-0 bg-gradient-to-r from-[#FFB800] to-[#FFC000] rounded-2xl"
                        />
                      )}
                      <span className="relative z-10">{year}</span>
                    </button>
                  );
                })}
              </div>

              {/* Event Badge Counter */}
              <div className="hidden md:flex items-center gap-3 px-6 py-3 bg-[#FFB800]/10 rounded-2xl border border-[#FFB800]/20">
                <FiCalendar className="text-[#FFB800]" />
                <span className="text-[#001F3F] dark:text-[#FFC000] font-black text-[10px] uppercase tracking-[0.2em]">
                  {filteredEvents.length} {filteredEvents.length === 1 ? "Journey" : "Journeys"} Available
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Events Display Section */}
        <section id="events-section" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Master Style Heading */}
            <div className="mb-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-5xl font-bold md:text-6xl tracking-tighter">
                  <span className="text-[#001F3F] dark:text-white">Explore our Collective</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000] italic font-serif">
                    Journeys & Milestones
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#FFB800] to-transparent mx-auto rounded-full mb-8" />
              </motion.div>
            </div>

            {/* Filter Navigation */}
            <div className="mb-16">
              <FilterBar 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            
            <AnimatePresence mode="wait">
              {filteredEvents.length > 0 ? (
                <motion.div
                  key={selectedYear + activeFilter + searchQuery}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <EventsGrid 
                    events={filteredEvents} 
                    onCardClick={handleOpenModal} 
                  />
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-32 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-8 rounded-[2.5rem] bg-white dark:bg-[#001A33] shadow-2xl flex items-center justify-center border border-[#FFC000]/10">
                    <FiCalendar className="w-10 h-10 text-[#FFC000]/40" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#001F3F] dark:text-white mb-4 tracking-tight">No Pathways Found</h3>
                  <p className="text-[#001F3F]/60 dark:text-white/60 max-w-md mx-auto italic">
                    "We couldn't find any events matching your current filters. Try exploring different years or resetting your search."
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Modal for Event Details - Integrated with Master Logic */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
      <EventFAQ/>
    </div>
  );
};

export default MainEvent;