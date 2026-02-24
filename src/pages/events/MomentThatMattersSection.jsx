import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  Globe,
  Heart,
  Star,
  LayoutGrid,
  Award,
  Search
} from "lucide-react";

import { Prasen_Pal_Germany_Image } from "../../assets/international-assignment/germany";
import { Prasen_Pal_Indonesia_Image } from "../../assets/international-assignment/indonesia";
import { Lightbox } from "./Lightbox";

import { useEventsStore } from "../../store/event";

const GLOBAL_LEADERSHIP_FILTER = "Global Leadership Journey";
const FILTERS = [
  { name: "All", icon: LayoutGrid },
  { name: "5 Year Celebration", icon: Star },
  { name: "Team Lunches & Dinner", icon: Users },
  { name: "Meetings & Discussions", icon: Briefcase },
  { name: "Office Culture", icon: Heart },
  { name: "International Assignments", icon: Globe },
  { name: "Global Leadership Journey", icon: Globe }
];

/* ======================================================
   BM25 ALGORITHM FOR ADVANCED SEARCH
====================================================== */
class BM25Filter {
  constructor(k1 = 1.5, b = 0.75) {
    this.k1 = k1;
    this.b = b;
  }

  tokenize(text) {
    return text.toLowerCase().replace(/[^\w\s]/g, ' ').split(/\s+/).filter(t => t.length > 0);
  }

  termFrequency(term, document) {
    return document.filter(word => word === term).length;
  }

  inverseDocFrequency(term, documents) {
    const docsWithTerm = documents.filter(doc => doc.includes(term)).length;
    return Math.log((documents.length - docsWithTerm + 0.5) / (docsWithTerm + 0.5) + 1);
  }

  calculateScore(query, document, documents, avgDocLength) {
    const queryTerms = this.tokenize(query);
    const docLength = document.length;
    let score = 0;
    for (const term of queryTerms) {
      const tf = this.termFrequency(term, document);
      const idf = this.inverseDocFrequency(term, documents);
      const numerator = tf * (this.k1 + 1);
      const denominator = tf + this.k1 * (1 - this.b + this.b * (docLength / avgDocLength));
      score += idf * (numerator / denominator);
    }
    return score;
  }

  rank(query, items) {
    const documents = items.map(item => {
      const text = `${item.title || ''} ${item.category || ''} ${item.shortDesc || ''} ${item.location || ''}`;
      return this.tokenize(text);
    });
    const avgDocLength = documents.reduce((sum, doc) => sum + doc.length, 0) / documents.length || 0;
    const scores = items.map((item, index) => ({
      item,
      score: this.calculateScore(query, documents[index], documents, avgDocLength)
    }));
    return scores.filter(s => s.score > 0).sort((a, b) => b.score - a.score).map(s => s.item);
  }
}

/* ======================================================
   MAIN COMPONENT
====================================================== */
export default function MomentsThatMatter() {
  const { photos, fetchPhoto,fetchEngagement,engagement } = useEventsStore();
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeYear, setActiveYear] = useState(null);
  const [activeOfficeSection, setActiveOfficeSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const bm25 = useMemo(() => new BM25Filter(), []);

  useEffect(() => {
    if(photos.length<=0){
    fetchPhoto();
    }

    return ()=>{
      fetchPhoto()
    }
  }, [fetchPhoto]);

  useEffect(()=>{
   
      fetchEngagement()

     
      
    
  },[fetchEngagement])

  useEffect(() => {
    setActiveYear(null);
    setActiveOfficeSection(null);
    setSearchQuery("");
  }, [activeFilter]);

  // Extract helper for images (handling API vs Local structure)
  const getImageUrl = (item) => {
    
    if(item?.bannerImage?.asset){
    return item?.bannerImage?.asset.url
    }
    if(item.imageUrl){
      return item.imageUrl
    }
  }

  // Filter Logic
  const filteredPhotos = useMemo(() => {
    let data = Array.isArray(photos) ? [...photos] : [];

    if (activeFilter !== "All") {
      data = data.filter(p => p.category === activeFilter);
    }
    if (activeFilter === "Team Lunches & Dinner" && activeYear) {
      data = data.filter(p => p.displayDate?.includes(activeYear.toString()));
    }
    if (activeFilter === "Office Culture" && activeOfficeSection) {
      data = data.filter(p => p.location?.includes(activeOfficeSection));
    }
    if (searchQuery.trim()) {
      data = bm25.rank(searchQuery, data);
    }
    return data;
  }, [photos, activeFilter, activeYear, activeOfficeSection, searchQuery, bm25]);

  const availableYears = useMemo(() => {
    const years = (photos || [])
      .filter(p => p.category === "Team Lunches & Dinner")
      .map(p => p.displayDate?.match(/\d{4}/)?.[0])
      .filter(Boolean);
    return [...new Set(years)].sort((a, b) => b - a);
  }, [photos]);

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  return (
    <section id="moment-that-matters" className="relative px-4 py-14 lg:px-20 bg-surfaceLight dark:bg-surfaceDark min-h-screen">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-brandNavy via-brandDark to-brandNavy dark:from-brandAccent dark:via-brandGold dark:to-brandAccent bg-clip-text">
            Moments That Matter
          </h1>
          <p className="text-lg text-brandPrimary/70 dark:text-white/70">Capturing our journey of excellence and growth</p>
        </motion.div>

        {/* SEARCH BAR */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brandPrimary/40 w-5 h-5" />
          <input 
            type="text"
            placeholder="Search events, locations, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-brandAccent/20 bg-white dark:bg-surfaceDark dark:text-white focus:outline-none focus:ring-2 focus:ring-brandAccent"
          />
        </div>

        {/* MAIN FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.name}
              onClick={() => setActiveFilter(f.name)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all ${
                activeFilter === f.name ? "bg-brandNavy dark:bg-brandAccent text-white" : "bg-white dark:bg-surfaceDark text-brandPrimary/70 dark:text-white/70 border border-brandAccent/20"
              }`}
            >
              <f.icon className="w-4 h-4" />
              {f.name}
            </button>
          ))}
        </div>

        {/* SUB-FILTERS (YEARS) */}
        {activeFilter === "Team Lunches & Dinner" && availableYears.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button onClick={() => setActiveYear(null)} className={`px-4 py-1.5 rounded-full text-xs font-bold ${!activeYear ? 'bg-brandNavy text-white' : 'bg-brandAccent/10'}`}>All Years</button>
            {availableYears.map(year => (
              <button key={year} onClick={() => setActiveYear(year)} className={`px-4 py-1.5 rounded-full text-xs font-bold ${activeYear === year ? 'bg-brandNavy text-white' : 'bg-brandAccent/10'}`}>{year}</button>
            ))}
          </div>
        )}

        {/* PHOTO GRID */}
        {activeFilter !== "International Assignments" && activeFilter !== GLOBAL_LEADERSHIP_FILTER && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((p, index) => (
                <motion.div
                  layout
                  key={p._id || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => openLightbox(filteredPhotos.map(getImageUrl), index)}
                  className="relative overflow-hidden shadow-lg cursor-pointer group rounded-2xl h-72 bg-slate-200 dark:bg-slate-800"
                >
                  <img src={getImageUrl(p)} alt={p.title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <p className="text-white font-bold text-sm">{p.title}</p>
                    <p className="text-white/70 text-xs">{p.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* INTERNATIONAL ASSIGNMENTS */}
        {activeFilter === "International Assignments" && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {engagement.map((e, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="relative overflow-hidden shadow-xl rounded-2xl h-96 cursor-pointer group" onClick={() => openLightbox(e.images, 0)}>
                <img src={e.images[0]} alt={e.country} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-brandNavy/40 flex items-end p-6">
                  <h3 className="text-3xl font-bold text-white">{e.country}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* GLOBAL LEADERSHIP JOURNEY */}
        {activeFilter === GLOBAL_LEADERSHIP_FILTER && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold dark:text-white">Connecting Continents: Global Client Engagement</h2>
              <p className="text-brandPrimary/70 dark:text-white/70 leading-relaxed">
                Our journey across Germany, France, and Vietnam reinforced relationships built on trust and shared purpose. 
                Beyond the boardroom, it's the human connections that transform transactions into lasting partnerships.
              </p>
              <blockquote className="border-l-4 border-brandGold pl-6 py-2 italic text-lg dark:text-brandAccent">
                "Global business is fundamentally human. Handshakes and genuine conversations build bridges across borders."
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[...Prasen_Pal_Germany_Image.slice(0, 2), ...Prasen_Pal_Indonesia_Image.slice(0, 2)].map((img, idx) => (
                <img key={idx} src={img} className="rounded-2xl h-48 w-full object-cover cursor-pointer hover:opacity-80 transition" onClick={() => openLightbox([img], 0)} />
              ))}
            </div>
          </motion.div>
        )}

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightboxImages.length > 0 && (
            <Lightbox
              images={lightboxImages}
              currentIndex={lightboxIndex}
              onClose={() => setLightboxImages([])}
              onNavigate={setLightboxIndex}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}