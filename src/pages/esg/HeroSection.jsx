import React from 'react';
import bg from "../../assets/esg/esg-herosection-image.png";
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigator = useNavigate()
  return (
    <section className="relative overflow-hidden bg-brandDark">

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bg} 
          alt="ESG Hero" 
          className="object-cover w-full h-full"
        />
        {/* Dark overlay to keep hero text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark/95 via-brandDark/80 to-brandDark/60" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 py-16 lg:py-20">

        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 border rounded-full bg-white/15 backdrop-blur-md border-white/20">
            <span className="text-xs font-semibold tracking-wider uppercase text-white/95 sm:text-sm">
              Sustainability & ESG Excellence
            </span>
          </div>

          {/* Primary Heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white font-heading sm:text-5xl lg:text-6xl">
            Sustainability & <span className="text-brandAccent">ESG</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-4 font-serif text-xl italic font-light leading-relaxed text-white/90 sm:text-2xl md:text-3xl">
            Advisory, Implementation
          </p>

          {/* Tagline */}
          <p className="mb-10 text-base font-light leading-relaxed text-white/85 sm:text-lg md:text-xl">
            Transforming Organizations for a Sustainable Future
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <button onClick={()=>navigator("/contact")} className="w-full sm:w-auto px-8 py-4 bg-brandGold hover:bg-brandAccent text-brandDark font-bold text-base rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg">
              Start Your ESG Journey
            </button>
            <button onClick={()=>navigator("/services")} className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/15 text-white border-2 border-white/60 hover:border-white font-bold text-base rounded-full transition-all duration-300 hover:-translate-y-1">
              Explore Our Services
            </button>
          </div>
        </div>

        {/* ESG Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {[
            { icon: '🌱', title: 'ENVIRONMENTAL', subtitle: 'Climate | Resources | Biodiversity' },
            { icon: '👥', title: 'SOCIAL', subtitle: 'People | Community | Rights' },
            { icon: '⚖️', title: 'GOVERNANCE', subtitle: 'Ethics | Oversight | Transparency' }
          ].map((pillar, index) => (
            <div
              key={index}
              className="h-full px-6 transition-all duration-300 border bg-white/10 backdrop-blur-md border-white/20 rounded-2xl py-7 hover:bg-white/15"
            >
              <span className="block mb-4 text-4xl">{pillar.icon}</span>
              <div className="mb-2 text-lg font-bold tracking-wide text-white uppercase">
                {pillar.title}
              </div>
              <div className="text-sm leading-relaxed text-white/80">
                {pillar.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
