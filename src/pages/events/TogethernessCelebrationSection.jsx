import React from 'react';
import { Cake, UtensilsCrossed, Image, Heart, Camera, Users, Calendar, Trophy } from 'lucide-react';

export default function TogethernessCelebration() {
  const highlights = [
    {
      id: 1,
      icon: Cake,
      iconBg: 'bg-pink-500',
      title: 'The Grand Cake Cutting',
      description: 'Our entire team came together for an emotional cake cutting ceremony, marking 5 years of dedication, hard work, and shared success.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      icon: UtensilsCrossed,
      iconBg: 'bg-orange-500',
      title: 'Team Lunch Gatherings',
      description: 'Multiple team lunches brought us closer, sharing stories, laughter, and memories while celebrating our collective achievements.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      icon: Image,
      iconBg: 'bg-teal-500',
      title: 'Memory Wall',
      description: 'A beautiful collection of 91 photographs capturing every milestone, every smile, and every moment that made these 5 years unforgettable.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      icon: Heart,
      iconBg: 'bg-purple-500',
      title: 'Gratitude & Reflections',
      description: 'Team members shared heartfelt messages, expressing gratitude for the journey and excitement for the future ahead.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop'
    }
  ];

  const stats = [
    {
      icon: Camera,
      number: '91',
      label: 'Photos Captured',
      iconBg: 'bg-teal-500'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Team Members',
      iconBg: 'bg-teal-500'
    },
    {
      icon: Calendar,
      number: '8',
      label: 'Celebration Events',
      iconBg: 'bg-teal-500'
    },
    {
      icon: Trophy,
      number: '5',
      label: 'Years Together',
      iconBg: 'bg-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="container px-4 py-16 mx-auto md:py-20">
        <div className="mb-12 text-center md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-pink-100 rounded-full">
            <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-sm font-semibold text-pink-600">Celebrating Together</span>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            5 Years of Togetherness
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 md:text-xl">
            Celebrating milestones, creating memories, and strengthening bonds that make Riskman a family
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 lg:gap-8">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.id}
                className="relative overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-80"></div>
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-14 h-14 ${highlight.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Icon className="text-white w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-slate-900">
                    {highlight.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section - Our Celebration in Numbers */}
        <div className="relative p-8 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl md:p-12">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative">
            <div className="mb-8 text-center md:mb-12">
              <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Our Celebration in Numbers
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-slate-300">
                Every number tells a story of joy, unity, and shared success
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-6 text-center transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm border-slate-700 rounded-2xl hover:border-teal-400/50 hover:bg-slate-800/70 group"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.iconBg} rounded-2xl mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-slate-300 md:text-base">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}