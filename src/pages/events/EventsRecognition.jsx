

import React, { useState,useMemo,useEffect} from "react";
import { motion,AnimatePresence } from "framer-motion";

import image1 from "../../assets/team-accomplishment/iia_conference_mumbai_march_2025​_3.webp";
import image4 from "../../assets/team-accomplishment/vishal_award_achievement.jpeg";
import image5 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_2.webp";
import image6 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_4.webp";
import image7 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_5.webp";
import image8 from "../../assets/team-accomplishment/audit_leaders_summit_ mumbai_november_2024​_7.webp";
import image9 from "../../assets/team-accomplishment/western_1.jpeg";
import image10 from "../../assets/team-accomplishment/western_2.jpeg";
import image11 from "../../assets/team-accomplishment/western_3.jpeg";
import image12 from "../../assets/team-accomplishment/western_4.jpeg";
import image13 from "../../assets/team-accomplishment/western_5.jpeg";
import image14 from "../../assets/team-accomplishment/western_6.jpeg";
import image15 from "../../assets/team-accomplishment/western_7.jpeg";
import image16 from "../../assets/team-accomplishment/western_8.jpeg";
import image17 from "../../assets/team-accomplishment/western_9.jpeg";
import image18 from "../../assets/team-accomplishment/iia_conference_mumbai_jan_2026​_7.webp";


const rankByBM25 = (data, query) => {
  if (!query.trim()) return data;
 
  const k1 = 1.2;
  const b = 0.75;
  const terms = query.toLowerCase().trim().split(/\s+/);
  const N = data.length;
  const avgDL = data.reduce((acc, item) => acc + item.terms.length, 0) / N;
 
  return data
    .map((item) => {
      let score = 0;
      terms.forEach((term) => {
        const fq = item.terms.filter((t) => t.includes(term)).length;
        const nq = data.filter((d) => d.terms.some((t) => t.includes(term))).length;
        const idf = Math.log((N - nq + 0.5) / (nq + 0.5) + 1);
        score += (idf * fq * (k1 + 1)) / (fq + k1 * (1 - b + (b * item.terms.length) / avgDL));
      });
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
};
 

export default function EventRecognition() {
  const [activeTab, setActiveTab] = useState("emerging");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayLimit, setDisplayLimit] = useState(4);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const allMedia = useMemo(() => [
    { image: image1,  type: "accomplishments", terms: ["iia", "conference", "mumbai", "march", "2025"] },
    { image: image17, type: "accomplishments", terms: ["western", "leadership", "award", "nine"] },
    { image: image4,  type: "accomplishments", terms: ["iia", "conference", "mumbai", "january", "2026"] },
    { image: image18, type: "accomplishments", terms: ["iia", "conference", "mumbai", "march", "2025"] },
    { image: image5,  type: "emerging", terms: ["audit", "leaders", "summit", "mumbai", "november", "2024"] },
    { image: image6,  type: "emerging", terms: ["audit", "leaders", "summit", "mumbai", "november", "2024"] },
    { image: image7,  type: "emerging", terms: ["audit", "leaders", "summit", "mumbai", "november", "2024"] },
    { image: image8,  type: "emerging", terms: ["audit", "leaders", "summit", "mumbai", "november", "2024"] },
    { image: image9,  type: "emerging", terms: ["western", "one"] },
    { image: image10, type: "emerging", terms: ["western", "two"] },
    { image: image11, type: "emerging", terms: ["western", "three"] },
    { image: image12, type: "emerging", terms: ["western", "four"] },
    { image: image13, type: "emerging", terms: ["western", "five"] },
    { image: image14, type: "emerging", terms: ["western", "six"] },
    { image: image15, type: "emerging", terms: ["western", "seven"] },
    { image: image16, type: "emerging", terms: ["western", "eight"] },
  ], []);

  const processedItems = useMemo(() => {
    const categoryItems = allMedia.filter(item => item.type === activeTab);
    return rankByBM25(categoryItems, searchQuery);
  }, [activeTab, searchQuery, allMedia]);
 
  const visibleItems = processedItems.slice(0, displayLimit);
 
  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : processedItems.length - 1));
  };
 
  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev < processedItems.length - 1 ? prev + 1 : 0));
  };
 
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, processedItems]);

  return (
    <section
      id="accomplishment"
      className="relative bg-gradient-to-b from-bgLight to-bgLight dark:from-bgDark dark:to-bgDark border-y border-borderLight dark:border-borderDark"
    >
      {/* MAIN CONTAINER - FIXED: Using consistent px-6 lg:px-20 pattern */}
      <div className="px-6 pt-8 pb-10 mx-auto lg:px-20 lg:pt-14 lg:pb-20">

        {/* TABS & SEARCH */}
        <div className="flex flex-col items-center gap-4 mb-8 text-center sm:gap-6 sm:mb-12">

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
            <motion.button
              onClick={() => { setActiveTab("emerging"); setDisplayLimit(4); }}
              className={`px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold transition-all rounded-full ${
                activeTab === "emerging"
                  ? "bg-gradient-to-r from-brandAccent to-brandGold text-brandDark shadow-lg scale-105"
                  : "text-brandDark dark:text-white bg-slate-100 dark:bg-white/5 hover:bg-brandGold/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Emerging Risk Assurance & Advisory Firm
            </motion.button>

            <motion.button
              onClick={() => { setActiveTab("accomplishments"); setDisplayLimit(4); }}
              className={`px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold transition-all rounded-full ${
                activeTab === "accomplishments"
                  ? "bg-gradient-to-r from-brandAccent to-brandGold text-brandDark shadow-lg scale-105"
                  : "text-brandDark dark:text-white bg-slate-100 dark:bg-white/5 hover:bg-brandGold/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Team Accomplishment
            </motion.button>
          </div>

          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search (e.g., 'Mumbai 2025' or 'Audit Summit')..."
              className="w-full px-4 py-3 text-sm bg-white border outline-none sm:px-6 sm:py-4 rounded-xl border-brandGold/30 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-brandGold"
              onChange={(e) => { setSearchQuery(e.target.value); setDisplayLimit(4); }}
            />
          </div>
        </div>

        {/* HEADER */}
        <div className="mb-6 sm:mb-10">
          <h2 className="mb-3 text-3xl font-bold capitalize sm:text-4xl lg:text-4xl font-heading text-brandDark dark:text-white">
            {activeTab === "accomplishments" ? "Team Accomplishments" : "Emerging Risk Assurance and Advisory Firm for the Year"}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brandAccent to-brandGold rounded-full" />
        </div>

        {/* GALLERY GRID */}
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.div
                key={item.image}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative overflow-hidden shadow-lg cursor-pointer group rounded-2xl bg-slate-200 dark:bg-slate-800 aspect-[4/3]"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.image}
                  alt="Achievement"
                  className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/40 group-hover:opacity-100">
                  <p className="text-xs font-bold tracking-widest text-white uppercase">Expand View</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedIndex(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[1001]"
                onClick={() => setSelectedIndex(null)}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                className="absolute left-2 md:left-10 z-[1001] p-3 md:p-4 text-white bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </motion.button>

              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative flex flex-col items-center justify-center w-full h-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={processedItems[selectedIndex].image}
                  alt="Enlarged achievement"
                  className="max-w-full max-h-[85vh] w-full object-contain rounded-lg shadow-2xl"
                />
                <div className="px-4 py-1 mt-4 font-mono text-sm tracking-wider rounded-full text-white/60 bg-black/50">
                  {selectedIndex + 1} / {processedItems.length}
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                className="absolute right-2 md:right-10 z-[1001] p-3 md:p-4 text-white bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LOAD MORE */}
        {processedItems.length > displayLimit && (
          <div className="mt-10 text-center sm:mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setDisplayLimit(prev => prev + 4)}
              className="px-8 py-3 font-bold rounded-full shadow-lg sm:px-10 sm:py-4 bg-gradient-to-r from-brandAccent to-brandGold text-brandDark"
            >
              View More
            </motion.button>
          </div>
        )}

        {/* EMPTY STATE */}
        {processedItems.length === 0 && (
          <div className="py-16 italic text-center text-slate-500">
            No matches found for "{searchQuery}". Try different keywords.
          </div>
        )}

      </div>
    </section>
  );
}