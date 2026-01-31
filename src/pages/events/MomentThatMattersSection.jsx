import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  Globe,
  Heart,
  Star,
  LayoutGrid,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Riskman_Aniversary_5_year_images } from "../../assets/riskman-anniversary/year-5";
import journeyImages from "../../assets/journey";
import { IIA_Internal_Leadership_2025_images } from "../../assets/internal-leadership/2025";

import { Vietman_Image } from "../../assets/chu-chi-vietnam";
import { Philippiness_Image } from "../../assets/philippiness";
import { Myanmar_Image } from "../../assets/myanmar";
import { Indonesia_Image } from "../../assets/indonesia";

import { Prasen_Pal_Germany_Image } from "../../assets/international-assignment/germany";
import { Prasen_Pal_Indonesia_Image } from "../../assets/international-assignment/indonesia";

const GLOBAL_LEADERSHIP_FILTER = "Global Leadership Journey";

export const PHOTOS = [
  { id: 1, category: "5 Year Celebration", title: "RiskMan 5 Year Anniversary", image: Riskman_Aniversary_5_year_images[0], description: "Celebrating 5 years of excellence and growth" },
  { id: 2, category: "5 Year Celebration", title: "Anniversary Celebration Moments", image: Riskman_Aniversary_5_year_images[1], description: "Team celebrating milestone achievement" },
  { id: 3, category: "5 Year Celebration", title: "Team Celebrating 5 Years", image: Riskman_Aniversary_5_year_images[2], description: "Milestone celebration highlights" },
  { id: 4, category: "5 Year Celebration", title: "Milestone Celebration Highlights", image: Riskman_Aniversary_5_year_images[3], description: "Celebrating company milestone" },
  { id: 5, category: "5 Year Celebration", title: "RiskMan Growth Journey", image: Riskman_Aniversary_5_year_images[4], description: "Journey of growth and success" },

  { id: 6, category: "Team Lunches", title: "Team Lunch at Zomato", image: journeyImages.teamLunchDecember2023[0], description: "Team lunch gathering at Zomato office" },
  { id: 7, category: "Team Lunches", title: "Team Bonding Lunch", image: journeyImages.teamLunchDecember2023[1], description: "Casual team lunch gathering" },
  { id: 8, category: "Team Lunches", title: "Team Lunch at Vedic Village", image: journeyImages.teamLunchJan2026[2], description: "Team lunch gathering at Vedic Village" },
  { id: 9, category: "Team Lunches", title: "Team Dinner", image: journeyImages.teamDinnerOct2021[0], description: "Team bonding under vibrant lights" },
  { id: 10, category: "Team Lunches", title: "Early Team Bonding Dinner", image: journeyImages.teamDinnerOct2021[1], description: "Festive team dinner with colorful decorations" },
  { id: 11, category: "Team Lunches", title: "Team Dinner", image: journeyImages.teamDinnerFeb2022[0], description: "Cozy team gathering in purple ambiance" },
  { id: 12, category: "Team Lunches", title: "Team Dinner", image: journeyImages.teamDinnerDecember2023[0], description: "Year-end celebration dinner" },
  { id: 13, category: "Team Lunches", title: "Team Dinner Moments", image: journeyImages.teamDinnerDecember2023[1], description: "Large team gathering at outdoor venue" },
  { id: 14, category: "Team Lunches", title: "Year-End Team Dinner", image: journeyImages.teamDinnerDecember2023[2], description: "Team dinner celebration moments" },
  { id: 15, category: "Team Lunches", title: "Team Dinner Celebration", image: journeyImages.teamDinnerDecember2023[3], description: "Team bonding over dinner" },

  { id: 16, category: "Office Culture", title: "Team Member Birthday", image: journeyImages.teamMemberBirthday, description: "Celebrating team member's special day" },
  { id: 17, category: "Office Culture", title: "Diwali Celebration", image: journeyImages.diwaliChristmasZomato[0], description: "Team in traditional attire for Diwali" },
  { id: 18, category: "Office Culture", title: "Festive Office Moments", image: journeyImages.diwaliChristmasZomato[1], description: "Celebrating festivals together" },
  { id: 19, category: "Office Culture", title: "Celebrating Together", image: journeyImages.diwaliChristmasZomato[2], description: "Team in Santa hats celebrating Christmas" },
  { id: 20, category: "Office Culture", title: "Holiday Team Celebration", image: journeyImages.diwaliChristmasZomato[3], description: "Holiday season celebrations" },
  { id: 21, category: "Office Culture", title: "Festive Workplace Vibes", image: journeyImages.diwaliChristmasZomato[4], description: "Year-end office celebration" },
  { id: 22, category: "Office Culture", title: "Year-End Celebrations", image: journeyImages.diwaliChristmasZomato[5], description: "Festive workplace atmosphere" },
  { id: 23, category: "Office Culture", title: "Game Session", image: journeyImages.gameSession[0], description: "Badminton game session with colleagues" },
  { id: 24, category: "Office Culture", title: "CIA Celebration", image: journeyImages.ciaCelebration[0], description: "Team celebrating CIA promotion" },

  { id: 25, category: "Meetings & Discussions", title: "Professional Discussions", image: journeyImages.iiaMumbaiMarch2025[2], description: "Knowledge sharing session" },
  { id: 26, category: "Meetings & Discussions", title: "Strategy Meeting", image: IIA_Internal_Leadership_2025_images[0], description: "Important strategy discussion" },
  { id: 27, category: "Meetings & Discussions", title: "AGM Delhi", image: journeyImages.agmDelhiJuly2025[0], description: "Annual General Meeting in Delhi" },
  { id: 28, category: "Meetings & Discussions", title: "AGM Delhi Session", image: journeyImages.agmDelhiJuly2025[1], description: "Strategic AGM discussions" },
  { id: 29, category: "Meetings & Discussions", title: "AGM Delhi Interaction", image: journeyImages.agmDelhiJuly2025[2], description: "Interactive AGM session" },
  { id: 30, category: "Meetings & Discussions", title: "AGM Delhi Highlights", image: journeyImages.agmDelhiJuly2025[3], description: "Key highlights from AGM" },
  { id: 31, category: "Meetings & Discussions", title: "Audit Leaders Summit", image: journeyImages.auditLeadersSummitMumbaiNov2024[0], description: "Summit in Mumbai" },
  { id: 32, category: "Meetings & Discussions", title: "Panel Discussion", image: journeyImages.auditLeadersSummitMumbaiNov2024[1], description: "Panel with industry leaders" },
  { id: 33, category: "Meetings & Discussions", title: "Leadership Exchange", image: journeyImages.auditLeadersSummitMumbaiNov2024[2], description: "Networking session" },
  { id: 34, category: "Meetings & Discussions", title: "Audit Networking", image: journeyImages.auditLeadersSummitMumbaiNov2024[3], description: "Networking with professionals" },
];

const ENGAGEMENTS = [
  {
    person: "Vishal Sharma",
    role: "Senior Consultant",
    country: "Vietnam",
    city: "Ho Chi Minh City",
    date: "August 2025",
    title: "Indorama Vietnam — Internal Audit Visit",
    story: "This photograph marks a meaningful interaction with the Indorama - Vietnam site team during the internal audit visit in August 2025. This showcases cross-functional collaboration and knowledge exchange. It underscores our global approach to auditing—working closely with site teams to enhance controls, align best practices, and support sustainable operations",
    images: [Vietman_Image[0]],
  },
  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Vietnam",
    city: "Ho Chi Minh City",
    date: "October 2025",
    title: "Indorama Vietnam — Risk Review",
    story: "Captured at the Indorama Vietnam site in September 2025, this image marks the completion of an internal audit engagement characterized by insightful exchanges and a solution-oriented mindset. The engagement facilitated open discussions on key risks and operational priorities, delivering value across multiple core business processes.",
    images: [Vietman_Image[1], Vietman_Image[2], Vietman_Image[3]],
  },
  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Philippines",
    city: "Manila",
    date: "January 2026",
    title: "Indorama Philippines — Internal Control Assessment",
    story: "Celebrating the successful completion of a value-adding and knowledge-driven internal audit engagement. The assignment facilitated interactive discussions on key risks and related controls, leading to the identification of actionable steps to enhance business processes and improve overall operational efficiency.",
    images: [Philippiness_Image[1], Philippiness_Image[0]],
  },
  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Myanmar",
    city: "Yangon",
    date: "March 2026",
    title: "Indorama Myanmar — Operational Risk Assessment",
    story: "Marking the conclusion of an insightful internal audit engagement that emphasized collaborative learning and practical outcomes. The engagement enabled meaningful exchanges on risk areas and control effectiveness, resulting in clear improvement initiatives aimed at strengthening processes.",
    images: [Myanmar_Image[1], Myanmar_Image[0]],
  },
  {
    person: "Yashvi Ganeriwal",
    role: "Consultant",
    country: "Indonesia",
    city: "Jakarta",
    date: "December 2025",
    title: "Indorama Indonesia — Internal Audit Completion",
    story: "This image captures a professional engagement at the Indorama Indonesia site in December 2025, marking the completion of an internal audit focused on exchange of insights and a solution-oriented approach. The audit encouraged open discussions on key risks and operational priorities, leading to clear and practical outcomes.",
    images: [Indonesia_Image[1], Indonesia_Image[0]],
  },
];

const FILTERS = [
  { name: "All", icon: LayoutGrid },
  { name: "5 Year Celebration", icon: Star },
  { name: "Team Lunches", icon: Users },
  { name: "Meetings & Discussions", icon: Briefcase },
  { name: "Office Culture", icon: Heart },
  { name: "International Assignments", icon: Globe },
  { name: "Global Leadership Journey", icon: Globe }
];

/* ======================================================
   ENHANCED LIGHTBOX WITH NAVIGATION
====================================================== */
const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === "ArrowRight" && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNavigate, currentIndex, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm flex items-center justify-center p-4"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute z-10 p-3 transition-colors rounded-full top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white bg-brandNavy/50 hover:bg-brandNavy/70"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={`absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-brandNavy/50 hover:bg-brandNavy/70 p-3 rounded-full transition-all ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "text-white/80 hover:text-white"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            disabled={currentIndex === images.length - 1}
            className={`absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-brandNavy/50 hover:bg-brandNavy/70 p-3 rounded-full transition-all ${
              currentIndex === images.length - 1 ? "opacity-30 cursor-not-allowed" : "text-white/80 hover:text-white"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute px-4 py-2 text-sm font-medium text-white -translate-x-1/2 rounded-full bottom-8 left-1/2 bg-brandNavy/70">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Image */}
      <motion.img
        key={currentIndex}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        src={images[currentIndex]}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
        alt="Lightbox"
      />
    </motion.div>
  );
};

export default function MomentsThatMatter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "All") return PHOTOS;
    return PHOTOS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (image) => {
    setLightboxImages([image]);
    setLightboxIndex(0);
  };

  const closeLightbox = () => {
    setLightboxImages([]);
    setLightboxIndex(0);
  };

  return (
    <section className="relative px-4 py-16 md:py-24 lg:py-32 bg-surfaceLight dark:bg-surfaceDark">
      <div className="mx-auto max-w-7xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center md:mb-16"
        >
          <h1 className="mb-4 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl bg-gradient-to-r from-brandNavy via-brandDark to-brandNavy dark:from-brandAccent dark:via-brandGold dark:to-brandAccent bg-clip-text">
            Moments That Matter
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-brandPrimary/70 dark:text-white/70">
            Capturing our journey of excellence, collaboration, and growth
          </p>
        </motion.div>

        {/* ENHANCED FILTER BAR */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {FILTERS.map((f, index) => {
            const Icon = f.icon;
            const isActive = activeFilter === f.name;
            return (
              <motion.button
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveFilter(f.name)}
                className={`
                  relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase 
                  flex items-center gap-2 transition-all duration-300 overflow-hidden
                  ${isActive
                    ? "bg-gradient-to-r from-brandNavy to-brandDark dark:from-brandAccent dark:to-brandGold text-white shadow-lg scale-105"
                    : "bg-white dark:bg-surfaceDark text-brandPrimary/70 dark:text-white/70 hover:bg-brandAccent/10 dark:hover:bg-brandNavy/50 border border-brandAccent/20 dark:border-brandGold/20"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-brandNavy to-brandDark dark:from-brandAccent dark:to-brandGold"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'animate-pulse' : ''}`} />
                <span className="relative z-10">{f.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* PHOTO GRID */}
        {activeFilter !== "International Assignments" && activeFilter !== GLOBAL_LEADERSHIP_FILTER && (
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPhotos.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => openLightbox(p.image)}
                className="overflow-hidden transition-all duration-300 border shadow-lg cursor-pointer bg-surfaceLight group dark:bg-surfaceDark rounded-3xl hover:shadow-2xl border-brandAccent/10 dark:border-brandGold/10"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brandNavy/80 via-brandNavy/20 to-transparent group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-brandAccent/10 dark:bg-brandGold/10 text-brandNavy dark:text-brandAccent">
                    {p.category}
                  </div>
                  <h3 className="mb-2 text-lg font-bold transition-colors text-brandNavy dark:text-white group-hover:text-brandDark dark:group-hover:text-brandAccent">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brandPrimary/70 dark:text-white/60">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* INTERNATIONAL ASSIGNMENTS */}
        {activeFilter === "International Assignments" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-16 md:space-y-24"
          >
            {ENGAGEMENTS.map((e, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Country Header with Gradient */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="w-8 h-8 text-brandAccent dark:text-brandGold" />
                    <h2 className="text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-brandNavy to-brandDark dark:from-brandAccent dark:to-brandGold bg-clip-text">
                      {e.country}
                    </h2>
                  </div>
                  <div className="w-24 h-1 rounded-full bg-gradient-to-r from-brandAccent to-brandGold" />
                </div>

                {/* Engagement Card */}
                <div className="overflow-hidden bg-white border shadow-xl dark:bg-surfaceDark rounded-3xl border-brandAccent/10 dark:border-brandGold/10">
                  <div className="p-6 md:p-8 lg:p-10 bg-gradient-to-br from-brandAccent/5 to-transparent dark:from-brandGold/5">
                    <h3 className="mb-4 text-2xl font-bold md:text-3xl text-brandNavy dark:text-white">
                      {e.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <span className="px-4 py-2 font-semibold rounded-full bg-brandNavy/10 dark:bg-brandAccent/10 text-brandNavy dark:text-brandAccent">
                        {e.person}
                      </span>
                      <span className="px-4 py-2 font-semibold rounded-full bg-brandDark/10 dark:bg-brandGold/10 text-brandDark dark:text-brandGold">
                        {e.role}
                      </span>
                      <span className="px-4 py-2 font-semibold rounded-full bg-brandAccent/10 dark:bg-brandNavy/30 text-brandPrimary dark:text-white/80">
                        {e.city} · {e.date}
                      </span>
                    </div>

                    <p className="max-w-4xl text-base leading-relaxed md:text-lg text-brandPrimary/80 dark:text-white/70">
                      {e.story}
                    </p>
                  </div>

                  {/* Image Grid */}
                  <div className="grid gap-4 p-6 md:p-8 sm:grid-cols-2 lg:grid-cols-3">
                    {e.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -6, scale: 1.03 }}
                        onClick={() => {
                          setLightboxImages(e.images);
                          setLightboxIndex(idx);
                        }}
                        className="relative overflow-hidden shadow-lg cursor-pointer rounded-2xl group aspect-video"
                      >
                        <img
                          src={img}
                          alt={`${e.country} - Image ${idx + 1}`}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-end justify-center pb-4 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brandNavy/60 to-transparent group-hover:opacity-100">
                          <span className="text-sm font-semibold text-white">View Image</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            ))}
          </motion.div>
        )}

        {/* GLOBAL LEADERSHIP JOURNEY */}
        {activeFilter === GLOBAL_LEADERSHIP_FILTER && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16"
          >
            {/* LEFT — STORY CONTENT */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 mb-6 text-sm font-bold rounded-full bg-gradient-to-r from-brandAccent/20 to-brandGold/20 dark:from-brandAccent/30 dark:to-brandGold/30 text-brandNavy dark:text-brandAccent">
                  Featured Story
                </div>
                <h2 className="mb-6 text-xl font-bold leading-tight text-transparent md:text-2xl lg:text-3xl bg-gradient-to-r from-brandNavy via-brandDark to-brandNavy dark:from-white dark:via-brandAccent dark:to-white bg-clip-text">
                  Connecting Continents: Our Global Client Engagement Journey
                </h2>
              </div>

              <div className="flex items-center gap-4 p-2 border bg-brandAccent/10 dark:bg-brandGold/10 rounded-2xl border-brandAccent/20 dark:border-brandGold/20">
                <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white rounded-full bg-gradient-to-br from-brandNavy to-brandDark dark:from-brandAccent dark:to-brandGold">
                  PP
                </div>
                <div>
                  <p className="font-bold text-brandNavy dark:text-white">Prasen Pal</p>
                  <p className="text-sm text-brandPrimary/70 dark:text-white/60">Co-Founder & Partner</p>
                </div>
              </div>

              <div className="space-y-6 text-base leading-relaxed md:text-lg text-brandPrimary/80 dark:text-white/70">
                <p>
                  Our recent journey across Germany, France, and Vietnam strengthened partnerships with Indorama Ventures and reinforced relationships built on trust, collaboration, and shared purpose.
                </p>

                <p>
                  From experiencing manufacturing excellence and innovation in Europe to celebrating teamwork and success with the RiskMan team in Vietnam, the journey highlighted the power of meaningful, human connections beyond the boardroom.
                </p>

                <p>
                  We return with stronger relationships, lasting memories, and renewed enthusiasm for building bridges across borders.
                </p>
              </div>

              <blockquote className="relative py-6 pl-8 border-l-4 border-brandGold/60 dark:border-brandAccent/60 bg-gradient-to-r from-brandAccent/5 to-transparent dark:from-brandGold/5 rounded-r-2xl">
                <div className="absolute w-6 h-6 rounded-full -left-3 top-6 bg-brandGold dark:bg-brandAccent" />
                <p className="text-lg italic leading-relaxed md:text-xl text-brandPrimary/90 dark:text-brandAccent/90">
                  Global business is fundamentally human. The handshakes, shared meals, and genuine conversations are what transform transactions into lasting partnerships. We return with strengthened relationships, cherished memories, and excitement for future collaborations. Here's to building bridges across borders together.
                </p>
              </blockquote>
            </div>

            {/* RIGHT — IMAGE GRID */}
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                Prasen_Pal_Germany_Image[0],
                Prasen_Pal_Germany_Image[2],
                Prasen_Pal_Indonesia_Image[0],
                Prasen_Pal_Indonesia_Image[1],
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  onClick={() => {
                    setLightboxImages([
                      Prasen_Pal_Germany_Image[0],
                      Prasen_Pal_Germany_Image[2],
                      Prasen_Pal_Indonesia_Image[0],
                      Prasen_Pal_Indonesia_Image[1],
                    ]);
                    setLightboxIndex(idx);
                  }}
                  className="overflow-hidden transition-all duration-300 border-2 shadow-xl cursor-pointer rounded-3xl hover:shadow-2xl aspect-square group border-brandAccent/20 dark:border-brandGold/20"
                >
                  <img
                    src={img}
                    alt="Global Leadership Journey"
                    className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-brandNavy/60 via-transparent to-transparent group-hover:opacity-100" />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightboxImages.length > 0 && (
            <Lightbox
              images={lightboxImages}
              currentIndex={lightboxIndex}
              onClose={closeLightbox}
              onNavigate={setLightboxIndex}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}