import React, { useState } from 'react';

export default function MomentsThatMatter() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visiblePhotos, setVisiblePhotos] = useState(8);

  const filters = [
    'All',
    '5 Year Celebration',
    'Team Lunches',
    'Meetings & Discussions',
    'International Assignments',
    'Office Culture'
  ];

  const photos = [
    {
      id: 1,
      category: '5 Year Celebration',
      title: '5 Year Celebration',
      date: 'December 2024',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      category: '5 Year Celebration',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      category: 'Team Lunches',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      category: '5 Year Celebration',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      category: 'Office Culture',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      category: '5 Year Celebration',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      category: 'Meetings & Discussions',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      category: 'International Assignments',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop'
    },
    {
      id: 9,
      category: 'Office Culture',
      image: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&h=600&fit=crop'
    },
    {
      id: 10,
      category: 'Team Lunches',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop'
    },
    {
      id: 11,
      category: 'Office Culture',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop'
    },
    {
      id: 12,
      category: '5 Year Celebration',
      image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&h=600&fit=crop'
    }
  ];

  const filteredPhotos = activeFilter === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  const displayedPhotos = filteredPhotos.slice(0, visiblePhotos);
  const hasMore = visiblePhotos < filteredPhotos.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Header Section */}
      <div className="container px-4 py-16 mx-auto md:py-20">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            Moments That Matter
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 md:text-xl">
            Behind every milestone is a team that makes it happen
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setVisiblePhotos(8);
              }}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/30'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {displayedPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title || photo.category}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:opacity-100"></div>
                
                {/* Overlay Content */}
                {photo.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-white rounded-full bg-teal-600/90">
                      {photo.category}
                    </span>
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {photo.title}
                    </h3>
                    {photo.date && (
                      <p className="text-sm text-white/80">
                        {photo.date}
                      </p>
                    )}
                  </div>
                )}

                {/* Play Icon for first photo */}
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90">
                      <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <path d="M10 8l6 4-6 4V8z"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisiblePhotos(prev => prev + 8)}
              className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 hover:scale-105"
            >
              Load More Photos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}