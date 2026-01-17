import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jessica R.",
      text: "I love getting insights on how I've been expressing myself emotionally. I can't wait to see how the product develops to make me more aware and embodied as my emotional self.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Bryn M.",
      text: "The platform's dedication to fostering emotional support and growth has profoundly impacted my journey towards self-discovery and healing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Jen M.",
      text: "I am deeply grateful for the platform that facilitates these peer group sessions and provides access to invaluable emotion wheels.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ];

  const avatars = [
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      rating: 5,
      position: { top: '0%', left: '42%' }
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      position: { top: '5%', left: '10%' }
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
      rating: 4,
      position: { top: '12%', left: '26%' }
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      rating: 5,
      position: { top: '15%', left: '58%' }
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      rating: 4,
      position: { top: '8%', left: '74%' }
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      rating: 5,
      position: { top: '32%', left: '18%' }
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      rating: 4,
      position: { top: '35%', left: '66%' }
    }
  ];

  const RatingStars = ({ rating }) => (
    <div className="flex gap-1 bg-gradient-to-r from-[#FFB800] to-[#FFC000] px-3 py-1.5 rounded-full shadow-lg">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? "fill-white text-white" : "text-white/40"}
        />
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen bg-surfaceLight dark:bg-surfaceDark py-20 px-6 transition-colors duration-300`}>
      <div className="mx-auto max-w-7xl">
        {/* Testimonial Network Visualization */}
        <div className="relative h-[450px] mb-8">
          {/* SVG for curved lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="lineGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#003366" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#003366" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="lineGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFC000" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FFC000" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            {/* Lines from avatars to center badge */}
            <g className="dark:hidden">
              <path d="M 42% 8% Q 45% 35% 48% 52%" stroke="url(#lineGradientLight)" strokeWidth="2" fill="none" />
              <path d="M 14% 13% Q 30% 30% 47% 52%" stroke="url(#lineGradientLight)" strokeWidth="2" fill="none" />
              <path d="M 28% 20% Q 38% 35% 47.5% 52%" stroke="url(#lineGradientLight)" strokeWidth="2" fill="none" />
              <path d="M 60% 23% Q 55% 35% 51% 52%" stroke="url(#lineGradientLight)" strokeWidth="2" fill="none" />
              <path d="M 76% 16% Q 65% 30% 53% 52%" stroke="url(#lineGradientLight)" strokeWidth="2" fill="none" />
              <path d="M 22% 40% Q 35% 45% 48% 53%" stroke="url(#lineGradientLight)" strokeWidth="2" fill="none" />
              <path d="M 68% 43% Q 60% 47% 52% 53%" stroke="url(#lineGradientLight)" strokeWidth="2" fill="none" />
            </g>
            <g className="hidden dark:block">
              <path d="M 42% 8% Q 45% 35% 48% 52%" stroke="url(#lineGradientDark)" strokeWidth="2" fill="none" />
              <path d="M 14% 13% Q 30% 30% 47% 52%" stroke="url(#lineGradientDark)" strokeWidth="2" fill="none" />
              <path d="M 28% 20% Q 38% 35% 47.5% 52%" stroke="url(#lineGradientDark)" strokeWidth="2" fill="none" />
              <path d="M 60% 23% Q 55% 35% 51% 52%" stroke="url(#lineGradientDark)" strokeWidth="2" fill="none" />
              <path d="M 76% 16% Q 65% 30% 53% 52%" stroke="url(#lineGradientDark)" strokeWidth="2" fill="none" />
              <path d="M 22% 40% Q 35% 45% 48% 53%" stroke="url(#lineGradientDark)" strokeWidth="2" fill="none" />
              <path d="M 68% 43% Q 60% 47% 52% 53%" stroke="url(#lineGradientDark)" strokeWidth="2" fill="none" />
            </g>
          </svg>

          {/* Avatar circles with ratings */}
          {avatars.map((avatar, idx) => (
            <div
              key={idx}
              className="absolute flex flex-col items-center animate-float"
              style={{
                top: avatar.position.top,
                left: avatar.position.left,
                animationDelay: `${idx * 0.15}s`,
                zIndex: 2
              }}
            >
              <img
                src={avatar.image}
                alt={`Testimonial ${idx + 1}`}
                className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-white dark:border-[#001A33] mb-3"
              />
              <RatingStars rating={avatar.rating} />
            </div>
          ))}

          {/* Center Badge */}
          <div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#001A33] px-6 py-3 rounded-full shadow-xl border-2 border-[#003366]/10 dark:border-[#FFC000]/20" 
            style={{ zIndex: 3 }}
          >
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-[#FFB800] text-[#FFB800]" />
              <span className="text-[#001F3F] dark:text-[#FFC000] font-semibold text-sm">
                Testimonials
              </span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl font-heading">
            <span className="text-[#001F3F] dark:text-white">
              What people are saying
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000]">
              about Feelpath
            </span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#001A33] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#003366]/5 dark:border-[#FFC000]/15"
            >
              <p className="text-[#001F3F]/70 dark:text-white/80 text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#FFC000] font-semibold text-lg">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}