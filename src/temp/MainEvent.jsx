
// import { useState, useMemo } from 'react';
// import Hero from './Hero';
// import WhyItMatters from './WhyItMatters';
// import EventsGrid from './EventsGrid';
// import EventModal from './EventModal';
// import { events } from '../pages/about/Events.jsx';




// const MainEvent = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const eventsPerPage = 4;

//   // Pagination Logic
//   const paginatedEvents = useMemo(() => {
//     const start = (currentPage - 1) * eventsPerPage;
//     return events.slice(start, start + eventsPerPage);
//   }, [currentPage]);

//   const totalPages = Math.ceil(events.length / eventsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     // Smooth scroll to events section when page changes
//     const element = document.getElementById('events-section');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleOpenModal = (event) => {
//     setSelectedEvent(event);
//     document.body.style.overflow = 'hidden';
//   };

//   const handleCloseModal = () => {
//     setSelectedEvent(null);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <div className="min-h-screen flex flex-col transition-all duration-300">
//       <main className="flex-grow">
//         {/* Featured Hero Banner */}
//         <Hero featuredEvent={events.find(e => e.features) || events[0]} onOpenDetails={handleOpenModal} />
        
//         {/* Why it Matters Section */}
//         <WhyItMatters />
        
//         {/* Events Section with Pagination */}
//         <section id="events-section" className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="mb-12 text-center">
//               <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
//                 Explore Our Events
//               </h2>
//               <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
//                 Discover local and national gatherings designed to elevate the auditing profession across India.
//               </p>
//             </div>
            
//             <EventsGrid 
//               events={paginatedEvents} 
//               onCardClick={handleOpenModal} 
//             />
            
//             {/* Pagination Controls */}
//             {totalPages > 1 && (
//               <div className="mt-12 flex justify-center space-x-2">
//                 <button
//                   onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//                   disabled={currentPage === 1}
//                   className="px-4 py-2 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                 >
//                   Previous
//                 </button>
//                 {[...Array(totalPages)].map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => handlePageChange(i + 1)}
//                     className={`w-10 h-10 rounded-md transition-all ${
//                       currentPage === i + 1
//                         ? 'bg-blue-600 text-white shadow-md'
//                         : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
//                     }`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
//                   disabled={currentPage === totalPages}
//                   className="px-4 py-2 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>

//       {/* Modal for Event Details */}
//       {selectedEvent && (
//         <EventModal event={selectedEvent} onClose={handleCloseModal} />
//       )}
//     </div>
//   );
// };

// export default MainEvent;


import { useState, useMemo } from 'react';
import Hero from './Hero';
import WhyItMatters from './WhyItMatters';
import EventsGrid from './EventsGrid';
import EventModal from './EventModal';
import FilterBar from './FilterBar';
import { events } from '../pages/about/Events.jsx';

const years = ["2026", "2025", "2024", "2023"];

const MainEvent = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events by year, location filter, and search query
  const filteredEvents = useMemo(() => {
    let filtered = events.filter((event) => event.date.includes(selectedYear));
    
    // Apply location/featured filter
    if (activeFilter !== "All") {
      if (activeFilter === "Featured") {
        filtered = filtered.filter((event) => event.featured);
      } else {
        filtered = filtered.filter((event) => 
          event.location.toLowerCase().includes(activeFilter.toLowerCase())
        );
      }
    }
    
    // Apply search query
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
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col transition-all duration-300">
      <main className="flex-grow">
        {/* Featured Hero Banner */}
        <Hero featuredEvent={events.find(e => e.featured) || events[0]} onOpenDetails={handleOpenModal} />
        
        {/* Why it Matters Section */}
        <WhyItMatters />
        
        {/* Year Filter Navigation */}
        <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Year Tabs */}
              <div className="flex gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`relative px-6 py-2.5 text-base font-bold tracking-wider transition-all rounded-xl ${
                      selectedYear === year
                        ? "text-white bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg"
                        : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              {/* Event Count */}
              <div className="hidden md:flex items-center gap-2.5 px-5 py-2.5 bg-amber-50 rounded-xl border border-amber-200">
                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                <span className="text-amber-800 font-bold text-sm tracking-wider">
                  {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Events Section */}
        <section id="events-section" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Explore Our Events
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Discover local and national gatherings designed to elevate the auditing profession across India.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="mb-8">
              <FilterBar 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            
            {filteredEvents.length > 0 ? (
              <EventsGrid 
                events={filteredEvents} 
                onCardClick={handleOpenModal} 
              />
            ) : (
              <div className="py-20 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No Events Found</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                  No events match your search criteria. Try adjusting your filters or search query.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Modal for Event Details */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MainEvent;