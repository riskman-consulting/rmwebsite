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
    {
      id: 1,
      category: "5 Year Celebration",
      title: "5 Year Celebration",
      date: "December 2024",
      image:
        Riskman_Aniversary_5_year_images[0],    },
    {
      id: 2,
      category: "5 Year Celebration",
      image: Riskman_Aniversary_5_year_images[1],
    },
    {
      id: 3,
      category: "Team Lunches",
      image: journeyImages.teamLunchDecember2023[1],
    },
    {
      id: 4,
      category: "5 Year Celebration",
      image:
        journeyImages.teamLunchDecember2023[0],
    },
    {
      id: 5,
      category: "Office Culture",
      image: journeyImages.teamMemberBirthday[0],
    },
    {
      id: 6,
      category: "5 Year Celebration",
      image:
        Riskman_Aniversary_5_year_images[4],
    },
    {
      id: 7,
      category: "Meetings & Discussions",
      image: journeyImages.iiaMumbaiMarch2025[2],
    },
    {
      id: 8,
      category: "International Assignments",
      image: journeyImages.iiaDelhiJuly2024[1],
    },
    {
      id: 9,
      category: "Office Culture",
      image:journeyImages.teamDinnerDecember2023[0],
    },
    {
      id: 10,
      category: "Team Lunches",
      image:
        Riskman_Aniversary_5_year_images[2],
    },
    {
      id: 11,
      category: "Office Culture",
      image:
        journeyImages.teamMemberBirthday[0],
    },
    {
      id: 12,
      category: "5 Year Celebration",
      image:
        Riskman_Aniversary_5_year_images[4],
    },
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
                ${
                  activeFilter === filter
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
