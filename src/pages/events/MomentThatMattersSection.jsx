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
  { name: "Global Leadership Journey", icon: Globe }
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
      <img src={image} className="max-h-[85vh] max-w-[90vh] object-contain rounded-xl" />
    </div>
  );
};

export default function MomentsThatMatter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "All") return PHOTOS;
    return PHOTOS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="px-6 py-24 bg-surfaceLight dark:bg-surfaceDark">
      <div className="mx-auto max-w-7xl">

        {/* FILTER BAR */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {FILTERS.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.name}
                onClick={() => setActiveFilter(f.name)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase flex items-center gap-2
                ${activeFilter === f.name
                    ? "bg-brandDark text-brandAccent"
                    : "bg-surfaceDark text-white/70"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {f.name}
              </button>
            );
          })}
        </div>

        {/* NORMAL PHOTO GRID */}
        {activeFilter !== "International Assignments" &&
          activeFilter !== GLOBAL_LEADERSHIP_FILTER && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -6 }}
                  onClick={() => setLightboxImage(p.image)}
                  className="overflow-hidden bg-white shadow cursor-pointer rounded-3xl dark:bg-surfaceDark"
                >
                  <img src={p.image} className="object-cover w-full h-64" />
                  <div className="p-6">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm opacity-70">{p.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        {/* INTERNATIONAL ASSIGNMENTS */}
        {activeFilter === "International Assignments" && (
          <div className="space-y-24">
            {ENGAGEMENTS.map((e, i) => (
              <section key={i} className="space-y-6">
                <h2 className="text-3xl font-semibold">{e.country}</h2>
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <p className="text-sm opacity-70">
                  {e.person} · {e.role} · {e.city} · {e.date}
                </p>
                <p className="max-w-3xl">{e.story}</p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {e.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -6 }}
                      onClick={() => setLightboxImage(img)}
                      className="overflow-hidden shadow cursor-pointer rounded-3xl"
                    >
                      <img src={img} className="object-cover w-full h-64" />
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}


        {activeFilter === GLOBAL_LEADERSHIP_FILTER && (
          <section className="grid lg:grid-cols-2">

            {/* LEFT — FULL STORY CONTENT */}
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold tracking-tight text-brandDark dark:text-white">
                Connecting Continents: Our Global Client Engagement Journey
              </h2>

              <p className="text-sm text-brandNavy/70 dark:text-brandAccent/80">
                Prasen Pal · Co-Founder & Partner
              </p>

              <div className="mt-6 space-y-5 text-base leading-relaxed text-brandPrimary dark:text-white/70">
                <p>
                  Our recent journey across Germany, France, and Vietnam strengthened partnerships with Indorama Ventures and reinforced relationships built on trust, collaboration, and shared purpose.
                </p>

                <p>
                  From experiencing manufacturing excellence and innovation in Europe to celebrating teamwork and success with the RiskMan team in Vietnam, the journey highlighted the power of meaningful, human connections beyond the boardroom.
                </p>

                <p>
                  We return with stronger relationships, lasting memories, and renewed enthusiasm for building bridges across borders.
                </p>

                {/* <p>
      Our journey culminated in Vietnam’s vibrant Ho Chi Minh City. We explored iconic
      landmarks like the Central Post Office, experienced the legendary culinary
      scene, and celebrated our successful trip at lively venues with the RiskMan
      team.
    </p> */}
              </div>

              <blockquote className="pl-6 mt-10 text-lg italic border-l-4 border-brandGold/60 text-brandPrimary/80 dark:text-brandGold/90">
                Global business is fundamentally human. The handshakes, shared meals, and genuine
                conversations are what transform transactions into lasting partnerships. We
                return with strengthened relationships, cherished memories, and excitement for
                future collaborations. Here’s to building bridges across borders together.
              </blockquote>
            </div>

            {/* RIGHT — SQUARE EDITORIAL GRID (CORRECT SOLUTION) */}
            {/* <div className="grid gap-4 sm:grid-cols-2">
              {[
                Prasen_Pal_Germany_Image[0],
                Prasen_Pal_Germany_Image[2],
                Prasen_Pal_Indonesia_Image[0],
                Prasen_Pal_Indonesia_Image[1],
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  onClick={() => setLightboxImage(img)}
                  className="
        rounded-3xl
        shadow-lg
        cursor-pointer
        bg-[#F7F8FA]
        dark:bg-[#111827]
        p-4
        flex
        items-center
        justify-center
      "
                >
                  <img
                    src={img}
                    alt="Global Leadership Journey"
                    className="
          max-w-full
          max-h-[320px]
          object-contain
          rounded-2xl
        "
                  />
                </motion.div>
              ))}
            </div> */}

            {/* RIGHT — UNIFORM CROPPED GRID (FIXED) */}
<div className="grid gap-4 sm:grid-cols-2">
  {[
    Prasen_Pal_Germany_Image[0],
    Prasen_Pal_Germany_Image[2],
    Prasen_Pal_Indonesia_Image[0],
    Prasen_Pal_Indonesia_Image[1],
  ].map((img, idx) => (
    <motion.div
      key={idx}
      whileHover={{ y: -6 }}
      onClick={() => setLightboxImage(img)}
      className="
        cursor-pointer
        rounded-3xl
        overflow-hidden
        bg-[#F7F8FA]
        dark:bg-[#111827]
        shadow-lg
        aspect-square   /* 🔒 SAME WIDTH + HEIGHT */
      "
    >
      <img
        src={img}
        alt="Global Leadership Journey"
        className="
          w-full
          h-full
          object-cover      /* 🔥 CROPS, NO DISTORTION */
          object-center
        "
      />
    </motion.div>
  ))}
</div>


          </section>
        )}

        {lightboxImage && (
          <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
        )}
      </div>
    </section>
  );
}