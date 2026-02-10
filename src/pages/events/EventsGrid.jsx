import React, { useState, useMemo, useEffect } from 'react';
import { Filter, PieChart, Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from "./EventCard";

// Your data imports - Exact paths preserved
import { IIA_Bombay_2026_images } from "../../assets/iia-bombay/2026";
import { IIA_Internal_Leadership_2025_images } from "../../assets/internal-leadership/2025";
import { IIA_Hyderabad_2025_images } from "../../assets/iia-hyderabad/2025";
import { IIA_Kolkata_2025_images } from "../../assets/iia-kolkata/2025";
import { IIA_International_Conference_2025_images } from "../../assets/iia-international-conference/2025";
import { IIA_Bangalore_images } from "../../assets/iia-bangalore";
import { IIA_Bombay_images } from "../../assets/iia-bombay";
import { IIA_Kolkata_images } from "../../assets/iia-kolkata";
import { IIA_DELHI_JULY_2024_Images } from "../../assets/journey/iia_conference_delhi_july_2024";
import { Wofa_images } from "../../assets/wofa-2025";

const myEvents = [
  {
    id: "iia-bombay-ic-2026",
    title: "IIA Bombay Chapter International Conference 2026",
    meta: { date: "15 March 2026", location: "Mumbai, India", type: "International Conference" },
    description: "A prestigious international conference focused on the future of governance, internal audit, and risk management.",
    images: { banner: IIA_Bombay_2026_images[0], gallery: IIA_Bombay_2026_images },
    searchTerms: ["mumbai", "2026", "governance", "iia", "bombay"]
  },
  {
    id: "iia-hyderabad-annual-conference-2025",
    title: "IIA Hyderabad Annual Conference 2025",
    meta: { date: "2025", location: "ITC Kakatiya, Hyderabad, India", type: "Annual Conference" },
    description: "RiskMan Consulting participated as Silver Sponsors, engaging with audit and risk professionals.",
    images: { banner: IIA_Hyderabad_2025_images[0], gallery: IIA_Hyderabad_2025_images },
    searchTerms: ["hyderabad", "2025", "itc", "kakatiya", "silver", "sponsor"]
  },
  {
    id: "iia-kolkata-annual-meet-2025",
    title: "Thought Leadership Address – IIA Kolkata Chapter Annual Meet 2025",
    meta: { date: "2025", location: "Bhubaneswar Club, India", type: "Annual Meet" },
    description: "A thought-leadership address focused on repositioning internal audit as a strategic enabler.",
    images: { banner: IIA_Kolkata_2025_images[0], gallery: IIA_Kolkata_2025_images },
    searchTerms: ["kolkata", "bhubaneswar", "2025", "thought", "leadership"]
  },
  {
    id: "iia-india-international-conference-2025-cybersecurity",
    title: "Cybersecurity Risks & Internal Audit – IIA India International Conference 2025",
    meta: { date: "2025", location: "India", type: "International Conference" },
    description: "A session highlighting critical cybersecurity risks for 2025 and the evolving role of internal auditors.",
    images: { banner: IIA_International_Conference_2025_images[0], gallery: IIA_International_Conference_2025_images },
    searchTerms: ["cybersecurity", "cyber", "risks", "2025", "international"]
  },
  {
    id: "iia-bangalore-annual-conference-2025",
    title: "IIA India Bangalore Chapter Annual Conference 2025",
    meta: { date: "2025", location: "Bangalore, India", type: "Annual Conference" },
    description: "RiskMan Consulting participated as a proud sponsor, engaging with leaders on audit transformation.",
    images: { banner: IIA_Bangalore_images[1], gallery: IIA_Bangalore_images },
    searchTerms: ["bangalore", "2025", "transformation", "sponsor"]
  },
  {
    id: "iia-bombay-chapter-2025",
    title: "IIA Bombay Chapter Meet",
    meta: { date: "5 March 2025", location: "Mumbai, India", type: "Chapter Meet" },
    description: "Focused conversations on strengthening audit excellence and forward-thinking audit strategies.",
    images: { banner: IIA_Bombay_images[2], gallery: IIA_Bombay_images },
    searchTerms: ["mumbai", "bombay", "2025", "march", "excellence"]
  },
  {
    id: "iia-delhi-conference-2024",
    title: "IIA Delhi Conference 2024",
    meta: { date: "2024", location: "Delhi, India", type: "Conference" },
    description: "Engaging discussions on the evolving landscape of internal audit and risk management.",
    images: { banner: IIA_DELHI_JULY_2024_Images[0], gallery: IIA_DELHI_JULY_2024_Images },
    searchTerms: ["delhi", "2024", "july", "internal", "audit"]
  },
  {
    id: "wofa-2025",
    title: "WOFA 2025",
    meta: { date: "31 Jan – 2 Feb 2025", location: "New Delhi, India", type: "Conference" },
    description: "A global platform celebrating leadership, innovation, and collaboration among changemakers.",
    images: { banner: Wofa_images[0], gallery: Wofa_images },
    searchTerms: ["wofa", "2025", "innovation", "leadership", "delhi"]
  }
];

/**
 * BM25 Semantic Ranking Engine
 */
const rankEventsBM25 = (data, query) => {
  if (!query.trim()) return data;
  const k1 = 1.2, b = 0.75;
  const terms = query.toLowerCase().trim().split(/\s+/);
  const N = data.length;
  const avgDL = data.reduce((acc, item) => acc + item.searchTerms.length, 0) / N;

  return data
    .map((item) => {
      let score = 0;
      terms.forEach((term) => {
        const fq = item.searchTerms.filter((t) => t.includes(term)).length;
        const nq = data.filter((d) => d.searchTerms.some((t) => t.includes(term))).length;
        const idf = Math.log((N - nq + 0.5) / (nq + 0.5) + 1);
        score += (idf * fq * (k1 + 1)) / (fq + k1 * (1 - b + (b * item.searchTerms.length) / avgDL));
      });
      return { ...item, bm25Score: score };
    })
    .filter((item) => item.bm25Score > 0)
    .sort((a, b) => b.bm25Score - a.bm25Score);
};

export default function EventsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeEvent, setActiveEvent] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const categories = useMemo(() => ["All", ...new Set(myEvents.map(e => e.meta.type))], []);

  const filteredEvents = useMemo(() => {
    const catFiltered = selectedCategory === "All" 
      ? myEvents 
      : myEvents.filter(e => e.meta.type === selectedCategory);
    return rankEventsBM25(catFiltered, searchQuery);
  }, [selectedCategory, searchQuery]);

  // Modal Controls
  const nextImg = (e) => {
    e?.stopPropagation();
    setImgIndex(prev => (prev === activeEvent.images.gallery.length - 1 ? 0 : prev + 1));
  };
  const prevImg = (e) => {
    e?.stopPropagation();
    setImgIndex(prev => (prev === 0 ? activeEvent.images.gallery.length - 1 : prev - 1));
  };

  // Keyboard support
  useEffect(() => {
    const handleKeys = (e) => {
      if (!activeEvent) return;
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "Escape") setActiveEvent(null);
    };
    window.addEventListener("keydown", handleKeys);
    return () => window.removeEventListener("keydown", handleKeys);
  }, [activeEvent]);

  return (
    <div className="min-h-screen lg:px-16 py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white lg:text-5xl">
              Past Events & <span className="text-brandGold">Conferences</span>
            </h2>
          </div>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search city, year, or topic..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white dark:bg-slate-900 shadow-xl focus:ring-2 focus:ring-brandGold dark:text-white outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="flex flex-col gap-10 lg:flex-row px-4">
          {/* SIDEBAR */}
          <aside className="lg:w-72">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <p className="flex items-center gap-2 mb-6 font-bold text-xs uppercase text-brandGold tracking-widest">
                  <Filter size={14} /> Categories
                </p>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={`cat-btn-${cat}`} // Fixed Key Issue
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between ${
                        selectedCategory === cat
                        ? "bg-slate-900 text-white dark:bg-brandGold dark:text-black font-bold"
                        : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN GRID */}
          <main className="flex-1">
            <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredEvents.map((event) => (
                  <motion.div
                    key={`event-card-${event.id}`} // Fixed Key Issue
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => { setActiveEvent(event); setImgIndex(0); }}
                    className="cursor-pointer"
                  >
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </main>
        </div>
      </div>

      {/* MODAL LIGHTBOX */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setActiveEvent(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-all" onClick={() => setActiveEvent(null)}>
              <X size={32} />
            </button>

            <button className="absolute left-4 p-4 text-white hover:text-brandGold transition-all" onClick={prevImg}>
              <ChevronLeft size={48} />
            </button>

            <motion.div 
              key={`${activeEvent.id}-img-${imgIndex}`} // Unique Key for Animation
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeEvent.images.gallery[imgIndex]}
                alt="Event Gallery"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/5"
              />
              <div className="text-center">
                <h4 className="text-white font-bold text-lg">{activeEvent.title}</h4>
                <p className="text-brandGold text-sm font-mono mt-1">IMAGE {imgIndex + 1} / {activeEvent.images.gallery.length}</p>
              </div>
            </motion.div>

            <button className="absolute right-4 p-4 text-white hover:text-brandGold transition-all" onClick={nextImg}>
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}