import React from "react";
import { Play, Film, Eye, Heart, Share2 } from "lucide-react";

export default function VideoHighlightsSection() {
  const videos = [
    {
      id: 1,
      category: "Celebration",
      title: "5 Years of Excellence",
      description: "A journey through our milestones, celebrations, and achievements.",
      thumbnail:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      featured: true,
    },
    {
      id: 2,
      category: "Global Work",
      title: "International Assignments",
      description: "Our team delivering impact across global assignments.",
      thumbnail:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      id: 3,
      category: "Events",
      title: "Conference Highlights",
      description: "Thought leadership across major industry platforms.",
      thumbnail:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
    {
      id: 4,
      category: "Culture",
      title: "Team Culture",
      description: "Behind the scenes of our collaborative workplace.",
      thumbnail:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    },
  ];

  const stats = [
    { icon: Film, number: "20+", label: "Video Stories" },
    { icon: Eye, number: "50K+", label: "Total Views" },
    { icon: Heart, number: "95%", label: "Engagement" },
    { icon: Share2, number: "2K+", label: "Shares" },
  ];

  return (
    <section className="py-16 bg-bgLight dark:bg-bgDark transition-colors duration-500">
      <div className="container">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div
            className="inline-flex items-center justify-center w-20 h-20 mb-6
            rounded-full bg-brandGold/10 border border-brandGold/30"
          >
            <Play className="w-10 h-10 ml-1 text-brandGold fill-brandGold" />
          </div>

          <h2 className="mb-5 text-4xl sm:text-5xl font-heading font-black text-brandDark dark:text-white">
            Video Highlights
          </h2>

          <p className="text-lg text-brandDark/70 dark:text-white/60">
            Experience our journey through moments captured on camera.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-8 mb-20 lg:grid-cols-2">
          {/* Featured Video */}
          <div className="group cursor-pointer rounded-[2.5rem] overflow-hidden
            bg-surfaceLight/80 dark:bg-surfaceDark/40
            border border-borderLight dark:border-borderDark
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)] transition-all"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 rounded-full bg-brandGold/90
                  flex items-center justify-center
                  transition-transform duration-300 group-hover:scale-110"
                >
                  <Play className="w-10 h-10 ml-1 text-brandDark fill-brandDark" />
                </div>
              </div>

              <div className="absolute bottom-0 p-8">
                <span className="inline-block mb-3 px-3 py-1 text-xs font-black tracking-wide rounded-full bg-brandGold/20 text-brandGold">
                  {videos[0].category}
                </span>
                <h3 className="mb-2 text-2xl sm:text-3xl font-bold text-white">
                  {videos[0].title}
                </h3>
                <p className="text-white/70">
                  {videos[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-4">
            {videos.slice(1).map((video) => (
              <div
                key={video.id}
                className="group flex gap-4 p-4 rounded-2xl
                bg-surfaceLight/80 dark:bg-surfaceDark/40
                border border-borderLight dark:border-borderDark
                transition-all duration-300 hover:border-brandGold/40"
              >
                <div className="relative w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-10 h-10 rounded-full bg-brandGold flex items-center justify-center">
                      <Play className="w-5 h-5 ml-0.5 text-brandDark fill-brandDark" />
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <span className="text-xs font-bold text-brandGold">
                    {video.category}
                  </span>
                  <h4 className="text-lg font-bold text-brandDark dark:text-white group-hover:text-brandGold transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-brandDark/60 dark:text-white/60 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Subscribe */}
            <div
              className="p-6 rounded-2xl
              bg-surfaceLight/80 dark:bg-surfaceDark/40
              border border-borderLight dark:border-borderDark"
            >
              <h4 className="mb-2 text-lg font-bold text-brandDark dark:text-white">
                Subscribe to Our Channel
              </h4>
              <p className="mb-4 text-sm text-brandDark/60 dark:text-white/60">
                Get notified about new videos and event highlights.
              </p>
              <button className="px-6 py-3 font-bold rounded-full bg-brandGold text-brandDark hover:scale-105 transition-transform">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div
          className="p-10 rounded-[3rem]
          bg-surfaceLight/80 dark:bg-surfaceDark/40
          border border-borderLight dark:border-borderDark"
        >
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i}>
                  <div
                    className="mx-auto mb-4 w-16 h-16 rounded-2xl
                    bg-brandGold/10 border border-brandGold/30
                    flex items-center justify-center"
                  >
                    <Icon className="w-8 h-8 text-brandGold" />
                  </div>
                  <div className="text-3xl font-black text-brandGold">
                    {stat.number}
                  </div>
                  <div className="text-sm text-brandDark/60 dark:text-white/60">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
