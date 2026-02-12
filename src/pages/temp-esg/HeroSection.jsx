import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 192, 0, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-brandAccent/20 blur-xl animate-pulse"></div>
      <div className="absolute w-32 h-32 delay-75 rounded-full bottom-20 right-10 bg-brandGold/20 blur-xl animate-pulse"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white font-heading md:text-6xl lg:text-7xl">
            <span className="block">Sustainability & ESG</span>
          </h1>
          
          {/* Subheading */}
          <h2 className="mb-4 text-2xl font-semibold font-heading md:text-3xl lg:text-4xl text-brandAccent">
            Advisory, Implementation & Training Excellence
          </h2>
          
          {/* Tagline */}
          <p className="mb-12 text-xl italic md:text-2xl text-brandLight/90">
            Transforming Organizations for a Sustainable Future
          </p>

          {/* ESG Pillars */}
          <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
            {[
              {
                icon: '🌍',
                title: 'ENVIRONMENTAL',
                subtitle: 'Climate | Resources | Biodiversity',
                color: 'from-green-500/20 to-green-600/20'
              },
              {
                icon: '👥',
                title: 'SOCIAL',
                subtitle: 'People | Community | Rights',
                color: 'from-blue-500/20 to-blue-600/20'
              },
              {
                icon: '⚖️',
                title: 'GOVERNANCE',
                subtitle: 'Ethics | Oversight | Transparency',
                color: 'from-purple-500/20 to-purple-600/20'
              }
            ].map((pillar, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${pillar.color} backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:border-brandAccent/50`}
              >
                <div className="mb-4 text-5xl">{pillar.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-white font-heading">{pillar.title}</h3>
                <p className="text-sm text-brandLight/80">{pillar.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Company Name */}
          <div className="pt-8 mt-16 border-t border-white/20">
            <p className="mb-2 text-sm font-semibold tracking-widest uppercase text-brandLight/70">
              RiskMan Consulting LLP
            </p>
            <p className="text-base font-medium text-brandAccent">
              Global ESG & Sustainability Practice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;