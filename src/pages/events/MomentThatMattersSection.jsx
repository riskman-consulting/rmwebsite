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
} from "lucide-react";

import { Riskman_Aniversary_5_year_images } from "../../assets/riskman-anniversary/year-5";
import journeyImages from "../../assets/journey";
import { IIA_Internal_Leadership_2025_images } from "../../assets/internal-leadership/2025";

import { Vietman_Image } from "../../assets/chu-chi-vietnam";
import { Philippiness_Image } from "../../assets/philippiness";
import { Myanmar_Image } from "../../assets/myanmar";
import { Indonesia_Image } from "../../assets/indonesia";

/* ======================================================
   PHOTOS DATA (UNCHANGED)
====================================================== */
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

/* ======================================================
   INTERNATIONAL ASSIGNMENTS (UNCHANGED)
====================================================== */
const ENGAGEMENTS = [
  {
    person: "Vishal Sharma",
    role: "Senior Consultant",
    country: "Vietnam",
    city: "Ho Chi Minh City",
    date: "August 2025",
    title: "Indorama Vietnam — Internal Audit Visit",
    story: "His photograph marks a meaningful interaction with the Indorama – Vietnam site team during the internal audit visit in August 2025.",
    images: [Vietman_Image[0]],
  },
  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Vietnam",
    city: "Ho Chi Minh City",
    date: "October 2025",
    title: "Indorama Vietnam — Risk Review",
    story: "Completion of an internal audit engagement characterized by insightful exchanges and a solution-oriented mindset.",
    images: [Vietman_Image[1], Vietman_Image[2], Vietman_Image[3]],
  },
  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Philippines",
    city: "Manila",
    date: "January 2026",
    title: "Indorama Philippines — Internal Control Assessment",
    story: "Successful completion of a value-adding internal audit engagement.",
    images: [Philippiness_Image[1], Philippiness_Image[0]],
  },
  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Myanmar",
    city: "Yangon",
    date: "March 2026",
    title: "Indorama Myanmar — Operational Risk Assessment",
    story: "Collaborative learning and practical outcomes from operational risk assessment.",
    images: [Myanmar_Image[1], Myanmar_Image[0]],
  },
  {
    person: "Yashvi Ganeriwal",
    role: "Consultant",
    country: "Indonesia",
    city: "Jakarta",
    date: "December 2025",
    title: "Indorama Indonesia — Internal Audit Completion",
    story: "Professional engagement marking completion of internal audit.",
    images: [Indonesia_Image[1], Indonesia_Image[0]],
  },
];

/* ======================================================
   FILTERS
====================================================== */
const FILTERS = [
  { name: "All", icon: LayoutGrid },
  { name: "5 Year Celebration", icon: Star },
  { name: "Team Lunches", icon: Users },
  { name: "Meetings & Discussions", icon: Briefcase },
  { name: "Office Culture", icon: Heart },
  { name: "International Assignments", icon: Globe },
];

/* ======================================================
   LIGHTBOX
====================================================== */
const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-surfaceLight dark:bg-surfaceDark flex items-center justify-center p-6">
      <button onClick={onClose} className="absolute text-white top-6 right-6">
        <X />
      </button>
      <img src={image} className="max-h-[85vh] rounded-xl" />
    </div>
  );
};

/* ======================================================
   MAIN COMPONENT
====================================================== */
export default function MomentsThatMatter() {
  const PHOTOS_PER_LOAD = 6;

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_LOAD);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    setVisibleCount(PHOTOS_PER_LOAD);
  }, [activeFilter]);

  const internationalByCountry = useMemo(() => {
    return ENGAGEMENTS.reduce((acc, e) => {
      if (!acc[e.country]) acc[e.country] = [];
      acc[e.country].push(e);
      return acc;
    }, {});
  }, []);

  const normalPhotos = useMemo(() => {
    if (activeFilter === "All") return PHOTOS;
    return PHOTOS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const visiblePhotos = useMemo(() => {
    return normalPhotos.slice(0, visibleCount);
  }, [normalPhotos, visibleCount]);

  return (
    <section className="min-h-screen px-6 py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="mx-auto max-w-7xl">

        {/* FILTER BAR */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {FILTERS.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.name}
                onClick={() => setActiveFilter(f.name)}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase flex items-center gap-2
                ${activeFilter === f.name ? "bg-brandDark text-brandAccent" : "bg-surfaceDark text-white/70"}`}
              >
                <Icon className="w-4 h-4" />
                {f.name}
              </button>
            );
          })}
        </div>

        {/* NORMAL GRID WITH MOTION */}
        {activeFilter !== "International Assignments" && (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {visiblePhotos.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    onClick={() => setLightboxImage(p.image)}
                    className="overflow-hidden shadow cursor-pointer bg-surfaceLight dark:bg-surfaceDark rounded-3xl hover:shadow-xl"
                  >
                    <img src={p.image} className="object-cover w-full h-64" />
                    <div className="p-6 space-y-2">
                      <span className="font-bold text-brandDark dark:text-brandAccent">
                        {p.category}
                      </span>
                      <h3 className="text-brandDark dark:text-white">{p.title}</h3>
                      <p className="text-sm text-brandNavy dark:text-white/70">{p.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {visibleCount < normalPhotos.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center mt-16"
              >
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setVisibleCount((v) => v + PHOTOS_PER_LOAD)}
                  className="px-10 py-3 text-sm font-black uppercase rounded-full bg-brandDark dark:bg-brandAccent text-brandAccent dark:text-brandDark"
                >
                  Load More
                </motion.button>
              </motion.div>
            )}
          </>
        )}

        {/* INTERNATIONAL ASSIGNMENTS (UNCHANGED) */}
        {activeFilter === "International Assignments" && (
          <div className="space-y-24">
            {Object.entries(internationalByCountry).map(([country, engagements]) => (
              <section key={country}>
                <h2 className="flex items-center gap-3 mb-10 text-3xl font-semibold text-brandDark dark:text-white">
                  <Globe className="w-6 h-6 text-brandAccent" />
                  {country}
                </h2>

                {engagements.map((eng, idx) => (
                  <div key={idx} className="mb-20">
                    <h3 className="text-brandDark dark:text-brandAccent">{eng.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-brandNavy dark:text-white">
                      {eng.person} · {eng.role} · {eng.city} · {eng.date}
                    </p>
                    <p className="max-w-3xl mt-4 text-base text-brandNavy dark:text-white/70">
                      {eng.story}
                    </p>

                    <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                      {eng.images.map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setLightboxImage(img)}
                          className="overflow-hidden shadow cursor-pointer dark:bg-surfaceDark bg-surfaceLight rounded-3xl hover:shadow-xl"
                        >
                          <img src={img} className="object-cover w-full h-64" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        )}
      </div>

      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </section>
  );
}
