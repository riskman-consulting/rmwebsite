


import React from 'react';
import bg from "../../assets/esg/esg-herosection-image.png";
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigator = useNavigate()
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#001F3F]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bg} 
          alt="ESG Hero" 
          className="object-cover w-full h-full"
        />
        {/* Overlay to ensure original content is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/90 via-[#001F3F]/70 to-[#001F3F]/95" />
      </div>

      {/* Animated Background Pattern (From your original code) */}
      <div className="absolute inset-0 opacity-[0.08] z-10">
        <div 
          className="w-full h-full animate-[patternMove_60s_linear_infinite]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 px-6 py-20 mx-auto text-center lg:px-12">
        
        {/* Badge (Original Content) */}
        <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-7 py-3 mb-8 animate-[fadeSlideDown_1s_ease-out]">
          <span className="text-xs font-semibold tracking-wider uppercase text-white/95 sm:text-sm">
            Sustainability & ESG Excellence
          </span>
        </div>

        {/* Primary Heading (Original Content) */}
        <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] leading-tight tracking-tight mb-6 animate-[fadeSlideUp_1s_ease-out_0.2s_both]">
          SUSTAINABILITY & ESG
        </h1>

        {/* Subtitle (Original Content) */}
        <p className="font-serif text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-light italic leading-relaxed max-w-4xl mx-auto mb-5 animate-[fadeSlideUp_1s_ease-out_0.4s_both]">
          Advisory, Implementation
        </p>

        {/* Tagline (Original Content) */}
        <p className="text-white/85 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-[fadeSlideUp_1s_ease-out_0.6s_both]">
          Transforming Organizations for a Sustainable Future
        </p>

        {/* ESG Pillars Grid (Original Content & Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto my-16 animate-[fadeSlideUp_1s_ease-out_0.8s_both]">
          {[
            { icon: '🌱', title: 'ENVIRONMENTAL', subtitle: 'Climate | Resources | Biodiversity' },
            { icon: '👥', title: 'SOCIAL', subtitle: 'People | Community | Rights' },
            { icon: '⚖️', title: 'GOVERNANCE', subtitle: 'Ethics | Oversight | Transparency' }
          ].map((pillar, index) => (
            <div
              key={index}
              className="px-6 text-center transition-all duration-500 border-2 cursor-pointer bg-white/12 backdrop-blur-md border-white/20 rounded-2xl py-9 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <span className="block mb-4 text-5xl transition-transform group-hover:scale-110">{pillar.icon}</span>
              <div className="mb-2 text-xl font-bold tracking-wide text-white uppercase">
                {pillar.title}
              </div>
              <div className="text-sm leading-relaxed text-white/80">
                {pillar.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons (Original Content) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-12 animate-[fadeSlideUp_1s_ease-out_1s_both]">
          <button onClick={()=>navigator("/contact")} className="w-full sm:w-auto px-11 py-4 sm:py-[18px] bg-[#FFB800] hover:bg-[#FFC000] text-[#001F3F] font-bold text-base rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-orange-500/20">
            Start Your ESG Journey
          </button>
          <button onClick={()=>navigator("/services")} className="w-full sm:w-auto px-11 py-4 sm:py-[18px] bg-transparent hover:bg-white/15 text-white border-2 border-white/60 hover:border-white font-bold text-base rounded-full transition-all duration-300 hover:-translate-y-1">
            Explore Our Services
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes patternMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(70px) translateY(70px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;