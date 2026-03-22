import React, { useEffect, useState } from 'react';
import { Filter, PieChart } from 'lucide-react';
import EventCard from "./EventCard";
import { useEventsStore } from "../../store/event";

const shortLabel = (type) =>
  type === "All" ? "All" : type?.replace(/\s*Chapter\s*/gi, ' ').trim();

export default function EventsGrid() {
  const {fetchEvents,events } = useEventsStore()
  let myEvents = events
  const [selectedCategory, setSelectedCategory] = useState("All");
 
  // Dynamically get categories from your data
  // Events are already ordered by eventDate desc from Sanity.
  // Preserve that order when building categories (deduplicate, keep first occurrence).
  const categories = [
    "All",
    ...(myEvents?.reduce((acc, e) => {
      if (e.type && !acc.includes(e.type)) acc.push(e.type);
      return acc;
    }, []) ?? []),
  ];
 
  const filteredEvents = selectedCategory === "All"
    ? myEvents
    : myEvents?.filter(e => e?.type === selectedCategory);

    useEffect(()=>{
      fetchEvents()
    },[])
 
  return (
    <div id="past-events" className="min-h-screen px-4 py-16 bg-slate-50 dark:bg-surfaceDark">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Past Events & Conferences</h2>
          <p className="mt-2 text-slate-500">Explore our journey across global audit leadership forums.</p>
        </header>
 
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filter Sidebar */}
          <aside className="flex-shrink-0 lg:w-64">
            <div className="sticky p-6 bg-white border shadow-sm dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-800 top-24">
              <div className="flex items-center gap-2 mb-6 font-bold text-slate-800 dark:text-slate-200">
                <Filter size={18} />
                <span>Categories</span>
              </div>
              <div className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                      selectedCategory === cat
                      ? "bg-slate-900 text-white dark:bg-white dark:text-black font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {shortLabel(cat)}
                  </button>
                ))}
              </div>
             
              <div className="pt-6 mt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase text-slate-400">
                    <PieChart size={14}/>
                    Quick Stats
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 text-center bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <div className="text-xl font-bold dark:text-white">{myEvents?.length}</div>
                        <div className="text-[10px] text-slate-500">Total</div>
                    </div>
                    <div className="p-3 text-center bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <div className="text-xl font-bold dark:text-white">{categories.length - 1}</div>
                        <div className="text-[10px] text-slate-500">Types</div>
                    </div>
                </div>
              </div>
            </div>
          </aside>
 
          {/* Grid Area */}
          <main className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents?.map((event,idx)=> (
                <EventCard key={idx} event={event} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
 