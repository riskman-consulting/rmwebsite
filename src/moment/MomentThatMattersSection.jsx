import React, { useState, useMemo, useEffect } from "react";
import {
  Users,
  Briefcase,
  Globe,
  Heart,
  Star,
  Search,
  LayoutGrid,
  ArrowUpRight,
  Camera,
  History,
  TrendingUp,
  Moon,
  Sun,Video
} from "lucide-react";

import { PHOTOS } from "./index";
import Lightbox from "./LightBox";

/* ===================== FILTERS ===================== */
const FILTERS = [
  { name: "All", icon: LayoutGrid },
  { name: "5 Year Celebration", icon: Star },
  { name: "Team Lunches", icon: Users },
  { name: "Meetings & Discussions", icon: Briefcase },
  // { name: "Conference Sessions", icon: Globe },
  { name: "Office Culture", icon: Heart },
  
];

const App = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePhotos, setVisiblePhotos] = useState(12);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  /* ===================== SCROLL ===================== */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===================== DARK MODE ===================== */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  /* ===================== FILTER LOGIC ===================== */
  const filteredPhotos = useMemo(() => {
    return PHOTOS.filter((photo) => {
      const matchesFilter =
        activeFilter === "All" || photo.category === activeFilter;

      const matchesSearch =
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const displayedPhotos = useMemo(
    () => filteredPhotos.slice(0, visiblePhotos),
    [filteredPhotos, visiblePhotos]
  );

  /* ===================== STATS ===================== */
  const stats = [
    { label: "Total Memories", value: PHOTOS.length, icon: Camera },
    { label: "Years Experience", value: "5", icon: History },
    { label: "Key Categories", value: FILTERS.length - 1, icon: TrendingUp },
  ];

  /* ===================== LIGHTBOX NAV ===================== */
  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex + 1) % filteredPhotos.length
      );
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + filteredPhotos.length) %
          filteredPhotos.length
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-brandAccent selection:text-brandDark">
      {/* ===================== HEADER ===================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brandDark/95 dark:bg-bgDark/95 backdrop-blur-md py-4 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg shadow-lg bg-brandAccent">
              <Star className="w-6 h-6 fill-current text-brandDark" />
            </div>
            <span
              className={`text-xl font-black uppercase ${
                isScrolled || isDarkMode ? "text-white" : "text-brandDark"
              }`}
            >
              RiskMan<span className="text-brandAccent">.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 text-white rounded-full hover:bg-white/10"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button className="px-6 py-2 text-xs font-black tracking-widest uppercase rounded-full bg-brandAccent text-brandDark">
              Join Us
            </button>
          </div>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="pt-48 pb-24 text-center bg-brandLight dark:bg-bgDark">
        <h1 className="mb-8 text-6xl font-black md:text-8xl text-brandDark dark:text-white">
          Moments That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandGold to-brandAccent">
            Matter
          </span>
        </h1>

        <div className="flex justify-center gap-16 mt-16">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center">
                <Icon className="w-6 h-6 mx-auto mb-3 text-brandAccent" />
                <div className="text-4xl font-black">{stat.value}</div>
                <div className="text-xs tracking-widest uppercase opacity-60">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== FILTER BAR ===================== */}
      <div className="sticky z-40 py-4 top-20 bg-white/80 dark:bg-surfaceDark/80 backdrop-blur-xl">
        <div className="flex flex-wrap justify-center gap-3 px-6 mx-auto max-w-7xl">
          {FILTERS.map((filter) => {
            const Icon = filter.icon;
            const active = activeFilter === filter.name;
            return (
              <button
                key={filter.name}
                onClick={() => {
                  setActiveFilter(filter.name);
                  setVisiblePhotos(12);
                }}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase flex items-center gap-2 ${
                  active
                    ? "bg-brandDark text-brandAccent"
                    : "bg-brandLight dark:bg-white/5"
                }`}
              >
                <Icon className="w-4 h-4" />
                {filter.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===================== GRID ===================== */}
      <main className="flex-grow px-6 py-20 mx-auto max-w-7xl">
        <div className="masonry-grid">
          {displayedPhotos.map((photo, index) => {
            const Icon =
              FILTERS.find((f) => f.name === photo.category)?.icon || Star;

            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="cursor-pointer masonry-item"
              >
                <div className="relative overflow-hidden rounded-3xl group">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="object-cover w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 transition opacity-0 bg-black/50 group-hover:opacity-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-brandAccent" />
                      <span className="text-xs uppercase text-brandAccent">
                        {photo.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-white/60">{photo.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visiblePhotos < filteredPhotos.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={() => setVisiblePhotos((p) => p + 12)}
              className="flex items-center gap-3 px-8 py-3 font-black text-white uppercase rounded-full bg-brandDark"
            >
              Discover More
              <ArrowUpRight className="w-4 h-4 text-brandAccent" />
            </button>
          </div>
        )}
      </main>

      {/* ===================== LIGHTBOX ===================== */}
      {selectedPhotoIndex !== null && (
        <Lightbox
          photo={filteredPhotos[selectedPhotoIndex]}
          onClose={() => setSelectedPhotoIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default App;
