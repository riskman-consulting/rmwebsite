import React, { useState } from "react";
import { Riskman_Aniversary_5_year_images } from "../../assets/riskman-anniversary/year-5";
import journeyImages from "../../assets/journey";



export default function MomentsThatMatter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visiblePhotos, setVisiblePhotos] = useState(8);



  const filters = [
    "All",
    "5 Year Celebration",
    "Team Lunches",
    "Meetings & Discussions",
    "International Assignments",
    "Office Culture",
  ];

  const photos = [
    // ===== 5 Year Celebration (5) =====
    { id: 1, category: "5 Year Celebration", title: "RiskMan 5 Year Anniversary", image: Riskman_Aniversary_5_year_images[0] },
    { id: 2, category: "5 Year Celebration", title: "Anniversary Celebration Moments", image: Riskman_Aniversary_5_year_images[1] },
    { id: 3, category: "5 Year Celebration", title: "Team Celebrating 5 Years", image: Riskman_Aniversary_5_year_images[2] },
    { id: 4, category: "5 Year Celebration", title: "Milestone Celebration Highlights", image: Riskman_Aniversary_5_year_images[3] },
    { id: 5, category: "5 Year Celebration", title: "RiskMan Growth Journey", image: Riskman_Aniversary_5_year_images[4] },

    // ===== Team Lunches (2) =====
    { id: 6, category: "Team Lunches", title: "Team Lunch at Zomato", image: journeyImages.teamLunchDecember2023[0] },
    { id: 7, category: "Team Lunches", title: "Team Bonding Lunch", image: journeyImages.teamLunchDecember2023[1] },

    // ===== Office Culture (7) =====
    { id: 8, category: "Office Culture", title: "Team Member Birthday Celebration", image: journeyImages.teamMemberBirthday[0] },
    { id: 9, category: "Office Culture", title: "Diwali & Christmas Celebration", image: journeyImages.diwaliChristmasZomato[0] },
    { id: 10, category: "Office Culture", title: "Festive Office Moments", image: journeyImages.diwaliChristmasZomato[1] },
    { id: 11, category: "Office Culture", title: "Celebrating Together", image: journeyImages.diwaliChristmasZomato[2] },
    { id: 12, category: "Office Culture", title: "Holiday Team Celebration", image: journeyImages.diwaliChristmasZomato[3] },
    { id: 13, category: "Office Culture", title: "Festive Workplace Vibes", image: journeyImages.diwaliChristmasZomato[4] },
    { id: 14, category: "Office Culture", title: "Year-End Celebrations", image: journeyImages.diwaliChristmasZomato[5] },

    // ===== Meetings & Discussions (1) =====
    { id: 15, category: "Meetings & Discussions", title: "Professional Discussions & Knowledge Sharing", image: journeyImages.iiaMumbaiMarch2025[2] },

    // ===== International Assignments – Delhi (4) =====
    { id: 16, category: "International Assignments", title: "IIA Conference Delhi – July 2024", image: journeyImages.iiaDelhiJuly2024[0] },
    { id: 17, category: "International Assignments", title: "IIA Delhi Conference Session", image: journeyImages.iiaDelhiJuly2024[1] },
    { id: 18, category: "International Assignments", title: "Knowledge Exchange at IIA Delhi", image: journeyImages.iiaDelhiJuly2024[2] },
    { id: 19, category: "International Assignments", title: "Networking at IIA Delhi", image: journeyImages.iiaDelhiJuly2024[3] },

    // ===== International Assignments – Mumbai March 2025 (9) =====
    { id: 20, category: "International Assignments", title: "IIA Mumbai Conference – March 2025", image: journeyImages.iiaMumbaiMarch2025[0] },
    { id: 21, category: "International Assignments", title: "IIA Mumbai Session Highlights", image: journeyImages.iiaMumbaiMarch2025[1] },
    { id: 22, category: "International Assignments", title: "Professional Interaction – IIA Mumbai", image: journeyImages.iiaMumbaiMarch2025[3] },
    { id: 23, category: "International Assignments", title: "Learning at IIA Mumbai", image: journeyImages.iiaMumbaiMarch2025[4] },
    { id: 24, category: "International Assignments", title: "Conference Moments – IIA Mumbai", image: journeyImages.iiaMumbaiMarch2025[5] },
    { id: 25, category: "International Assignments", title: "Networking at IIA Mumbai", image: journeyImages.iiaMumbaiMarch2025[6] },
    { id: 26, category: "International Assignments", title: "Industry Engagement – IIA Mumbai", image: journeyImages.iiaMumbaiMarch2025[7] },
    { id: 27, category: "International Assignments", title: "IIA Mumbai Closing Moments", image: journeyImages.iiaMumbaiMarch2025[8] },
    { id: 28, category: "International Assignments", title: "Conference Environment – IIA Mumbai", image: journeyImages.iiaMumbaiMarch2025[2] },

    // ===== International Assignments – Mumbai Jan 2026 (7) =====
    { id: 29, category: "International Assignments", title: "IIA Mumbai Conference – January 2026", image: journeyImages.iiaMumbaiJan2026[0] },
    { id: 30, category: "International Assignments", title: "IIA Mumbai 2026 Sessions", image: journeyImages.iiaMumbaiJan2026[1] },
    { id: 31, category: "International Assignments", title: "Knowledge Sharing – IIA Mumbai 2026", image: journeyImages.iiaMumbaiJan2026[2] },
    { id: 32, category: "International Assignments", title: "Professional Networking – IIA Mumbai", image: journeyImages.iiaMumbaiJan2026[3] },
    { id: 33, category: "International Assignments", title: "IIA Mumbai Conference Floor", image: journeyImages.iiaMumbaiJan2026[4] },
    { id: 34, category: "International Assignments", title: "Insights from IIA Mumbai 2026", image: journeyImages.iiaMumbaiJan2026[5] },
    { id: 35, category: "International Assignments", title: "Closing Session – IIA Mumbai 2026", image: journeyImages.iiaMumbaiJan2026[6] },

    // ===== Team Dinners (7) =====
    { id: 36, category: "Office Culture", title: "Team Dinner – December 2023", image: journeyImages.teamDinnerDecember2023[0] },
    { id: 37, category: "Office Culture", title: "Team Dinner Moments", image: journeyImages.teamDinnerDecember2023[1] },
    { id: 38, category: "Office Culture", title: "Year-End Team Dinner", image: journeyImages.teamDinnerDecember2023[2] },
    { id: 39, category: "Office Culture", title: "Team Dinner Celebration", image: journeyImages.teamDinnerDecember2023[3] },
    { id: 40, category: "Office Culture", title: "Team Dinner – Feb 2022", image: journeyImages.teamDinnerFeb2022[0] },
    { id: 41, category: "Office Culture", title: "Team Dinner – Oct 2021", image: journeyImages.teamDinnerOct2021[0] },
    { id: 42, category: "Office Culture", title: "Early Team Bonding Dinner", image: journeyImages.teamDinnerOct2021[1] },

    // ===== AGM & Summit (8) =====
    { id: 43, category: "Meetings & Discussions", title: "AGM Delhi – July 2025", image: journeyImages.agmDelhiJuly2025[0] },
    { id: 44, category: "Meetings & Discussions", title: "AGM Delhi Session", image: journeyImages.agmDelhiJuly2025[1] },
    { id: 45, category: "Meetings & Discussions", title: "AGM Delhi Interaction", image: journeyImages.agmDelhiJuly2025[2] },
    { id: 46, category: "Meetings & Discussions", title: "AGM Delhi Highlights", image: journeyImages.agmDelhiJuly2025[3] },

    { id: 47, category: "Meetings & Discussions", title: "Audit Leaders Summit – Mumbai 2024", image: journeyImages.auditLeadersSummitMumbaiNov2024[0] },
    { id: 48, category: "Meetings & Discussions", title: "Audit Leaders Panel Discussion", image: journeyImages.auditLeadersSummitMumbaiNov2024[1] },
    { id: 49, category: "Meetings & Discussions", title: "Leadership Exchange Session", image: journeyImages.auditLeadersSummitMumbaiNov2024[2] },
    { id: 50, category: "Meetings & Discussions", title: "Audit Leaders Networking", image: journeyImages.auditLeadersSummitMumbaiNov2024[3] },
  ];



  const filteredPhotos =
    activeFilter === "All"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  const displayedPhotos = filteredPhotos.slice(0, visiblePhotos);
  const hasMore = visiblePhotos < filteredPhotos.length;

  return (
    <section className="relative py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            Moments That Matter
          </h2>
          <p className="text-lg text-brandDark/70 dark:text-white/60">
            Behind every milestone is a team that makes it happen.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisiblePhotos(8);
              }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all
                ${activeFilter === filter
                  ? "bg-brandGold text-brandDark shadow-[0_10px_30px_rgba(255,184,0,0.35)]"
                  : "bg-surfaceLight/80 dark:bg-surfaceDark/40 text-brandDark/70 dark:text-white/70 border border-borderLight dark:border-borderDark hover:border-brandGold/40"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {displayedPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl
                bg-surfaceLight dark:bg-surfaceDark
                border border-borderLight dark:border-borderDark
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title || photo.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {(photo.title || photo.date) && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block mb-2 px-3 py-1 text-xs font-bold rounded-full bg-brandGold text-brandDark">
                      {photo.category}
                    </span>
                    {photo.title && (
                      <h3 className="text-lg font-bold text-white">
                        {photo.title}
                      </h3>
                    )}
                    {photo.date && (
                      <p className="text-sm text-white/80">
                        {photo.date}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisiblePhotos((p) => p + 8)}
              className="px-10 py-3.5 rounded-full font-bold tracking-wide
                bg-brandGold text-brandDark
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_20px_50px_rgba(255,184,0,0.45)]"
            >
              Load More Photos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
