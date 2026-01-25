import React, { useState } from "react";
import { Calendar, Users, Briefcase, Globe, Heart, Star } from "lucide-react";
import journeyImages from "../../assets/journey";
import { Riskman_Aniversary_5_year_images } from "../../assets/riskman-anniversary/year-5";
import { IIA_Internal_Leadership_2025_images } from "../../assets/internal-leadership/2025";

export default function MomentsThatMatter() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visiblePhotos, setVisiblePhotos] = useState(8);

  const filters = [
    { name: "All", icon: Star },
    { name: "5 Year Celebration", icon: Star },
    { name: "Team Lunches", icon: Users },
    { name: "Meetings & Discussions", icon: Briefcase },
    { name: "International Assignments", icon: Globe },
    { name: "Office Culture", icon: Heart },
  ];

  const photos = [
    {
    
    id: 17,
    category: "Team Lunches",
    title: "Team Lunch",
    date: "January 2026",
    image: journeyImages.teamLunchJan2026[2],
    description:"Team lunch gathering at Vedic Village."
        
    },
    {
      id: 1,
      category: "Team Lunches",
      title: "Team Dinner",
      date: "October 2021",
      image:journeyImages.teamDinnerOct2021[1],
      description: "Festive team dinner with colorful decorations"
    },
    {
      id: 2,
      category: "Team Lunches",
      title: "Team Dinner",
      date: "October 2021",
      image: journeyImages.teamDinnerOct2021[0],
      description: "Team bonding under vibrant lights"
    },
    {
      id: 3,
      category: "Team Lunches",
      title: "Team Dinner",
      date: "February 2022",
      image: journeyImages.teamDinnerFeb2022[0],
      description: "Cozy team gathering in purple ambiance"
    },
    {
      id: 4,
      category: "Team Lunches",
      title: "Team Dinner",
      date: "December 2023",
      image: journeyImages.teamDinnerDecember2023[1],
      description: "Large team gathering at outdoor venue"
    },
    {
      id: 5,
      category: "Office Culture",
      title: "Team Member Birthday",
      date: "At Schoolnet",
      image: journeyImages.teamMemberBirthday,
      description: "Celebrating team member's special day"
    },
    {
      id: 6,
      category: "5 Year Celebration",
      title: "5 Year Anniversary",
      date: "December 2024",
      image: Riskman_Aniversary_5_year_images[1],
      description: "Celebrating 5 years of excellence"
    },
    {
      id: 7,
      category: "Meetings & Discussions",
      title: "CIA Celebration",
      date: "Professional Milestone",
      image: journeyImages.ciaCelebration[0],
      description: "Team celebrating CIA promotion"
    },
    {
      id: 8,
      category: "International Assignments",
      title: "IIA Conference",
      date: "July 2024",
      image: journeyImages.iiaDelhiJuly2024[1],
      description: "International assignment in Delhi"
    },
    {
      id: 9,
      category: "Office Culture",
      title: "Diwali Celebration",
      date: "Festival 2024",
      image: journeyImages.diwaliChristmasZomato[0],
      description: "Team in traditional attire for Diwali"
    },
    {
      id: 10,
      category: "Team Lunches",
      title: "Team Lunch at Zomato",
      date: "December 2023",
      image: journeyImages.teamLunchDecember2023[1],
      description: "Team lunch gathering at Zomato office"
    },
    {
      id: 11,
      category: "Office Culture",
      title: "Game Session",
      date: "Team Activity",
      image: journeyImages.gameSession[0],
      description: "Badminton game session with colleagues"
    },
    {
      id: 12,
      category: "5 Year Celebration",
      title: "Milestone Celebration",
      date: "December 2024",
      image: Riskman_Aniversary_5_year_images[4],
      description: "Celebrating company milestone"
    },
    {
      id: 13,
      category: "Office Culture",
      title: "Christmas Celebration",
      date: "December 2024",
      image: journeyImages.diwaliChristmasZomato[2],
      description: "Team in Santa hats celebrating Christmas"
    },
    {
      id: 14,
      category: "Meetings & Discussions",
      title: "Strategy Meeting",
      date: "March 2024",
      image: IIA_Internal_Leadership_2025_images[0],
      description: "Important strategy discussion"
    },
    {
      id: 15,
      category: "International Assignments",
      title: "Conference Mumbai",
      date: "March 2025",
      image: journeyImages.iiaMumbaiMarch2025[2],
      description: "Professional conference in Mumbai"
    },
    {
      id: 16,
      category: "Office Culture",
      title: "Team Bonding",
      date: "2024",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
      description: "Building stronger connections"
    },
  ];

  const filteredPhotos =
    activeFilter === "All"
      ? photos
      : photos.filter((p) => p.category === activeFilter);

  const displayedPhotos = filteredPhotos.slice(0, visiblePhotos);
  const hasMore = visiblePhotos < filteredPhotos.length;

  const getCategoryIcon = (category) => {
    const filter = filters.find(f => f.name === category);
    return filter ? filter.icon : Star;
  };

  return (
    <div id="milestones" className="min-h-screen bg-surfaceLight dark:bg-surfaceDark">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 shadow-lg rounded-2xl">
              <Heart className="w-8 h-8 text-gray-900" />
            </div>
          </div>
          <h1 className="mb-5 text-5xl font-black tracking-tight text-brandDark dark:text-white">
            Moments That Matter
          </h1>
          <p className="text-xl text-brandNavy dark:text-white/70">
            Behind every milestone is a team that makes it happen.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{filteredPhotos.length} Memories</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Team RiskMan</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.name}
                onClick={() => {
                  setActiveFilter(filter.name);
                  setVisiblePhotos(8);
                }}
                className={`group px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2
                  ${
                    activeFilter === filter.name
                      ? "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/50 scale-105"
                      : "bg-white text-gray-600 border-2 border-gray-200 hover:border-yellow-400 hover:text-gray-900"
                  }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${
                  activeFilter === filter.name ? "scale-110" : "group-hover:scale-110"
                }`} />
                {filter.name}
              </button>
            );
          })}
        </div>

        {/* Photo Count */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-gray-500">
            Showing {displayedPhotos.length} of {filteredPhotos.length} photos
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {displayedPhotos.map((photo, index) => {
            const Icon = getCategoryIcon(photo.category);
            return (
              <div
                key={photo.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className="relative overflow-hidden transition-all duration-500 bg-white shadow-md group rounded-3xl hover:shadow-2xl hover:-translate-y-2 animate-fadeIn"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.title || photo.category}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div className="transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-3 text-xs font-bold rounded-full bg-yellow-400 text-gray-900">
                        <Icon className="w-3 h-3" />
                        {photo.category}
                      </div>
                      <h3 className="mb-1 text-lg font-bold text-white">
                        {photo.title}
                      </h3>
                      <p className="mb-2 text-sm text-gray-300">
                        {photo.date}
                      </p>
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {photo.description}
                      </p>
                    </div>

                    {/* Always visible minimal info */}
                    <div className="absolute transition-opacity duration-300 bottom-5 left-5 right-5 group-hover:opacity-0">
                      <div className="flex items-center gap-2 text-white">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-semibold">{photo.title}</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute flex items-center justify-center w-10 h-10 transition-opacity duration-300 bg-yellow-400 rounded-full shadow-lg opacity-0 top-4 right-4 group-hover:opacity-100">
                    <Star className="w-5 h-5 text-gray-900 fill-gray-900" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More / No More Photos */}
        <div className="flex justify-center">
          {hasMore ? (
            <button
              onClick={() => setVisiblePhotos((p) => p + 8)}
              className="flex items-center gap-3 px-10 py-4 font-bold tracking-wide text-gray-900 transition-all duration-300 bg-yellow-400 rounded-full shadow-lg group hover:scale-105 shadow-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/60"
            >
              <span>Load More Photos</span>
              <div className="w-6 h-6 transition-opacity border-2 border-gray-900 rounded-full opacity-0 border-t-transparent animate-spin group-hover:opacity-100" />
            </button>
          ) : (
            <div className="py-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-gray-600 bg-gray-200 rounded-full">
                <Star className="w-5 h-5 fill-gray-600" />
                <span>You've seen all photos in this category</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="pt-12 mt-20">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="p-6 shadow-md bg-surfaceLight dark:bg-surfaceDark rounded-2xl">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-yellow-400 rounded-xl">
                <Heart className="w-6 h-6 text-gray-900" />
              </div>
              <div className="mb-2 text-3xl font-black text-brandDark dark:text-white">{photos.length}+</div>
              <div className="text-sm font-semibold text-brandDark dark:text-white/70">Memorable Moments</div>
            </div>
            <div className="p-6 shadow-md bg-surfaceLight dark:bg-surfaceDark rounded-2xl">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-yellow-400 rounded-xl">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <div className="mb-2 text-3xl font-black text-brandDark dark:text-white">5</div>
              <div className="text-sm font-semibold text-brandDark dark:text-white/70">Years of Excellence</div>
            </div>
            <div className="p-6 shadow-md bg-surfaceLight dark:bg-surfaceDark rounded-2xl">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-yellow-400 rounded-xl">
                <Star className="w-6 h-6 text-gray-900 fill-gray-900" />
              </div>
              <div className="mb-2 text-3xl font-black text-brandDark dark:text-white">{filters.length - 1}</div>
              <div className="text-sm font-semibold text-brandDark dark:text-white/70">Event Categories</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}