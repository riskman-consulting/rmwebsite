import React from 'react';
import { Play, Film, Eye, Heart, Share2 } from 'lucide-react';

export default function VideoHighlightsSection() {
  const videos = [
    {
      id: 1,
      category: "Celebration",
      categoryColor: "text-teal-400",
      title: "5 Years of Excellence",
      description: "A journey through our milestones, celebrations, and achieve...",
      thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      category: "Global Work",
      categoryColor: "text-cyan-400",
      title: "International Assignments",
      description: "Our team making global impact across Asia",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      category: "Events",
      categoryColor: "text-emerald-400",
      title: "Conference Highlights",
      description: "Speaking at major industry events and thought leadership",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      category: "Culture",
      categoryColor: "text-teal-400",
      title: "Team Culture",
      description: "Behind the scenes of our vibrant workplace",
      thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
    }
  ];

  const stats = [
    { icon: Film, number: "20+", label: "Video Stories" },
    { icon: Eye, number: "50K+", label: "Total Views" },
    { icon: Heart, number: "95%", label: "Engagement" },
    { icon: Share2, number: "2K+", label: "Shares" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="container px-4 py-16 mx-auto md:py-20">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500">
            <Play className="w-10 h-10 ml-1 text-white fill-white" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Video Highlights
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70">
            Experience our journey through memorable moments captured on camera
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 mb-12 lg:grid-cols-2 lg:gap-8">
          {/* Featured Video - Left Side */}
          <div className="relative cursor-pointer group">
            <div className="relative overflow-hidden rounded-2xl aspect-video">
              <img 
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-20 h-20 transition-transform duration-300 rounded-full bg-white/90 group-hover:scale-110">
                  <Play className="w-10 h-10 ml-1 text-slate-900 fill-slate-900" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold rounded-full bg-teal-400/90 text-slate-900">
                  {videos[0].category}
                </span>
                <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                  {videos[0].title}
                </h3>
                <p className="text-sm text-white/80 md:text-base">
                  {videos[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Video List - Right Side */}
          <div className="space-y-4">
            {videos.slice(1).map((video) => (
              <div
                key={video.id}
                className="p-4 transition-all duration-300 border cursor-pointer bg-slate-800/50 backdrop-blur-sm border-slate-700 rounded-xl hover:border-teal-400/50 group"
              >
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="relative flex-shrink-0 w-32 h-24 overflow-hidden rounded-lg">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 rounded-full bg-white/90 group-hover:scale-110">
                        <Play className="w-5 h-5 text-slate-900 fill-slate-900 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span className={`inline-block text-xs font-semibold mb-1 ${video.categoryColor}`}>
                      {video.category}
                    </span>
                    <h4 className="mb-1 text-lg font-bold text-white transition-colors group-hover:text-teal-400">
                      {video.title}
                    </h4>
                    <p className="text-sm text-white/60 line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  {/* Active Indicator */}
                  <div className="self-center w-2 h-2 transition-opacity bg-teal-400 rounded-full opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
            ))}

            {/* Subscribe CTA */}
            <div className="p-6 mt-6 border bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="mb-1 text-lg font-bold text-white">
                    Subscribe to Our Channel
                  </h4>
                  <p className="mb-4 text-sm text-white/60">
                    Get notified about new videos and event highlights
                  </p>
                  <button className="px-6 py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="p-8 border rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700/50">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 transition-transform duration-300 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-1 text-3xl font-bold text-white md:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-white/60">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}