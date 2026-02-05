import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="w-full h-full animate-[patternMove_60s_linear_infinite]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-brandAccent/30 via-brandPrimary/10 to-transparent blur-[60px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-brandGold/30 via-brandPrimary/10 to-transparent blur-[60px] animate-[float_20s_ease-in-out_infinite_5s]" />
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-gradient-radial from-brandAccent/20 via-brandPrimary/10 to-transparent blur-[60px] animate-[float_20s_ease-in-out_infinite_10s]" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-5 py-20 mx-auto text-center sm:px-8 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-white/15 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-7 py-3 mb-8 animate-[fadeSlideDown_1s_ease-out]">
          <span className="text-xl">🌍</span>
          <span className="text-xs font-semibold tracking-wider uppercase text-white/95 sm:text-sm">
            Sustainability & ESG Excellence
          </span>
        </div>

        {/* Title */}
        <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] leading-tight tracking-tight mb-6 animate-[fadeSlideUp_1s_ease-out_0.2s_both]">
          SUSTAINABILITY & ESG
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-light italic leading-relaxed max-w-4xl mx-auto mb-5 animate-[fadeSlideUp_1s_ease-out_0.4s_both]">
          Advisory, Implementation & Training Excellence
        </p>

        {/* Tagline */}
        <p className="text-white/85 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-[fadeSlideUp_1s_ease-out_0.6s_both]">
          Transforming Organizations for a Sustainable Future
        </p>

        {/* ESG Pillars */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto my-16 animate-[fadeSlideUp_1s_ease-out_0.8s_both]">
          {[
            { icon: '🌍', title: 'ENVIRONMENTAL', subtitle: 'Climate | Resources | Biodiversity' },
            { icon: '👥', title: 'SOCIAL', subtitle: 'People | Community | Rights' },
            { icon: '⚖️', title: 'GOVERNANCE', subtitle: 'Ethics | Oversight | Transparency' }
          ].map((pillar, index) => (
            <div
              key={index}
              className="flex-1 min-w-[220px] bg-white/12 dark:bg-white/8 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-9 text-center transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            >
              <span className="block mb-4 text-5xl">{pillar.icon}</span>
              <div className="mb-2 text-xl font-bold tracking-wide text-white">
                {pillar.title}
              </div>
              <div className="text-sm leading-relaxed text-white/80">
                {pillar.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-12 animate-[fadeSlideUp_1s_ease-out_1s_both]">
          <button className="px-11 py-4 sm:py-[18px] bg-brandAccent hover:bg-brandGold text-brandDark font-semibold text-base rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl shadow-brandAccent/40">
            Start Your ESG Journey
          </button>
          <button className="px-11 py-4 sm:py-[18px] bg-transparent hover:bg-white/15 text-white border-2 border-white/60 hover:border-white font-semibold text-base rounded-full transition-all duration-300 hover:-translate-y-1">
            Explore Our Services
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-[fadeIn_1s_ease-out_1.2s_both]">
        <span className="text-white/70 text-xs tracking-[1.5px] uppercase">Scroll</span>
        <div className="w-[30px] h-[50px] border-2 border-white/50 rounded-[25px] relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/80 rounded-full animate-[scrollDown_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes scrollDown {
          0%, 100% { top: 8px; opacity: 1; }
          50% { top: 28px; opacity: 0.3; }
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