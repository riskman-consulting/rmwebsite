// import React from 'react';

// /**
//  * HeroSection Component
//  * * This component serves as the primary landing section for the RiskMan ESG platform.
//  * It features high-end corporate styling using brandPrimary (#004080), brandGold (#FFB800), 
//  * and brandAccent (#FFC000).
//  */
// const HeroSection = () => {
//   return (
//     <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary dark:from-bgDark dark:via-brandDark dark:to-brandNavy">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.08]">
//         <div 
//           className="w-full h-full animate-[patternMove_60s_linear_infinite]"
//           style={{
//             backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)'
//           }}
//         />
//       </div>

//       {/* Floating Decorative Orbs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-radial from-brandAccent/30 via-brandPrimary/10 to-transparent blur-[60px] animate-[float_20s_ease-in-out_infinite]" />
//         <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-brandGold/30 via-brandPrimary/10 to-transparent blur-[60px] animate-[float_20s_ease-in-out_infinite_5s]" />
//       </div>

//       {/* Hero Content */}
//       <div className="container relative z-10 px-5 py-20 mx-auto text-center sm:px-8 lg:px-12">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-3 bg-white/15 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-7 py-3 mb-8 animate-[fadeSlideDown_1s_ease-out]">
//           <span className="text-xs font-semibold tracking-wider uppercase text-white/95 sm:text-sm">
//             Sustainability & ESG Excellence
//           </span>
//         </div>

//         {/* Primary Heading */}
//         <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[78px] leading-tight tracking-tight mb-6 animate-[fadeSlideUp_1s_ease-out_0.2s_both]">
//           SUSTAINABILITY & ESG
//         </h1>

//         {/* Subtitle */}
//         <p className="font-serif text-white/90 text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-light italic leading-relaxed max-w-4xl mx-auto mb-5 animate-[fadeSlideUp_1s_ease-out_0.4s_both]">
//           Advisory, Implementation 
//         </p>

//         {/* Tagline */}
//         <p className="text-white/85 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-[fadeSlideUp_1s_ease-out_0.6s_both]">
//           Transforming Organizations for a Sustainable Future
//         </p>

//         {/* ESG Pillars Grid */}
//         <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto my-16 animate-[fadeSlideUp_1s_ease-out_0.8s_both]">
//           {[
//             { icon: '🌱', title: 'ENVIRONMENTAL', subtitle: 'Climate | Resources | Biodiversity' },
//             { icon: '👥', title: 'SOCIAL', subtitle: 'People | Community | Rights' },
//             { icon: '⚖️', title: 'GOVERNANCE', subtitle: 'Ethics | Oversight | Transparency' }
//           ].map((pillar, index) => (
//             <div
//               key={index}
//               className="flex-1 min-w-[220px] bg-white/12 dark:bg-white/8 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-9 text-center transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
//             >
//               <span className="block mb-4 text-5xl">{pillar.icon}</span>
//               <div className="mb-2 text-xl font-bold tracking-wide text-white">
//                 {pillar.title}
//               </div>
//               <div className="text-sm leading-relaxed text-white/80">
//                 {pillar.subtitle}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call to Action Buttons */}
//         <div className="flex flex-wrap justify-center gap-5 mt-12 animate-[fadeSlideUp_1s_ease-out_1s_both]">
//           <button className="px-11 py-4 sm:py-[18px] bg-brandAccent hover:bg-brandGold text-brandDark font-semibold text-base rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl shadow-brandAccent/40">
//             Start Your ESG Journey
//           </button>
//           <button className="px-11 py-4 sm:py-[18px] bg-transparent hover:bg-white/15 text-white border-2 border-white/60 hover:border-white font-semibold text-base rounded-full transition-all duration-300 hover:-translate-y-1">
//             Explore Our Services
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeSlideDown {
//           from { opacity: 0; transform: translateY(-30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeSlideUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) scale(1); }
//           33% { transform: translate(30px, -30px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//         }
//         @keyframes patternMove {
//           0% { transform: translateX(0) translateY(0); }
//           100% { transform: translateX(70px) translateY(70px); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;


// import React from "react"
// import ESGHeroSectionImg from "../../assets/esg/esg_herosection_images.png"

// const Hero = () => {
//   return (
//     <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-48 overflow-hidden bg-slate-900">
//       {/* Background Overlay with Parallax/Visual Style */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={ESGHeroSectionImg}
//           alt="Sustainable Future Background"
//           className="object-cover w-full h-full scale-105 opacity-60"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-5xl px-6 mx-auto text-center animate-fade-in-up">
//         <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 py-1.5 rounded-full mb-8">
//           <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
//           <span className="text-xs font-bold tracking-widest uppercase text-emerald-300">
//             Transforming for Tomorrow
//           </span>
//         </div>

//         <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1]">
//           SUSTAINABILITY <span className="text-emerald-400">&</span> ESG
//         </h1>

//         <p className="max-w-3xl mx-auto mb-4 text-xl font-light tracking-wide md:text-2xl text-slate-200">
//           Advisory, Implementation & Training Excellence
//         </p>

//         <p className="max-w-2xl mx-auto mb-10 text-lg italic font-light tracking-wider text-slate-400">
//           "Transforming Organizations for a Sustainable Future"
//         </p>

//         <div className="flex flex-col justify-center gap-4 sm:flex-row">
//           <button className="px-8 py-4 font-bold transition-all transform bg-white rounded-lg shadow-2xl text-slate-900 hover:bg-slate-100 hover:-translate-y-1">
//             Explore Advisory Services
//           </button>
//           <button className="px-8 py-4 font-bold text-white transition-all bg-transparent border rounded-lg border-white/30 hover:bg-white/10 backdrop-blur-sm">
//             Watch Presentation
//           </button>
//         </div>
//       </div>

//       {/* Hero Visual Elements Inspired by Prompt Recommendation */}
//       <div className="absolute left-0 right-0 h-px bottom-32 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
//     </section>
//   )
// }

// export default Hero

// import { Leaf, Users, Scale } from "lucide-react"
// import esgHeroImage from "../../assets/esg/esg_herosection_images.png"

// const pillars = [
//   {
//     icon: Leaf,
//     title: "Environmental",
//     tags: "Climate | Resources | Biodiversity",
//     colorClass: "bg-green-600 text-white"
//   },
//   {
//     icon: Users,
//     title: "Social",
//     tags: "People | Community | Rights",
//     colorClass: "bg-blue-600 text-white"
//   },
//   {
//     icon: Scale,
//     title: "Governance",
//     tags: "Ethics | Oversight | Transparency",
//     colorClass: "bg-purple-600 text-white"
//   }
// ]

// const HeroSection = () => {
//   return (
//     <section className="relative w-full">
//       {/* Hero Banner */}
//       <div className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
//         {/* Background Image */}
//         <img
//           src={esgHeroImage}
//           alt="Business professional nurturing a young plant, symbolizing sustainable growth"
//           className="absolute inset-0 object-cover w-full h-full"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Content */}
//         <div className="container relative z-10 max-w-4xl px-6 py-20 mx-auto md:px-12">
//           <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-white/90">
//             Advisory · Implementation · Training
//           </p>

//           <h1 className="mb-6 text-4xl font-bold leading-tight text-white font-display sm:text-5xl md:text-6xl lg:text-7xl">
//             Sustainability
//             <br />
//             <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
//               &amp; ESG
//             </span>
//           </h1>

//           <p className="max-w-xl text-lg leading-relaxed font-body md:text-xl text-white/80">
//             Transforming Organizations for a Sustainable Future
//           </p>

//           {/* Decorative accent line */}
//           <div className="w-24 h-1 mt-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500" />
//         </div>
//       </div>

//       {/* ESG Pillars */}
//       <div className="container px-6 mx-auto -mt-16 md:px-12">
//         <div className="grid max-w-5xl grid-cols-1 gap-0 mx-auto overflow-hidden shadow-lg md:grid-cols-3 rounded-xl">
//           {pillars.map((pillar) => (
//             <div
//               key={pillar.title}
//               className={`${pillar.colorClass} flex flex-col items-center justify-center py-10 px-6 text-center transition-transform duration-300 hover:scale-105 hover:z-10 cursor-pointer`}
//             >
//               <pillar.icon className="w-10 h-10 mb-4 opacity-90" strokeWidth={1.5} />
//               <h3 className="mb-2 text-xl font-bold tracking-wide uppercase font-display">
//                 {pillar.title}
//               </h3>
//               <p className="text-sm tracking-wide opacity-80 font-body">
//                 {pillar.tags}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection



import React from 'react';
import bg from "../../assets/esg/esg-herosection-image.png";


const HeroSection = () => {
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
      <div className="container relative z-20 px-5 py-20 mx-auto text-center sm:px-8 lg:px-12">
        
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
          Advisory, Implementation & Training Excellence
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
          <button className="w-full sm:w-auto px-11 py-4 sm:py-[18px] bg-[#FFB800] hover:bg-[#FFC000] text-[#001F3F] font-bold text-base rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-orange-500/20">
            Start Your ESG Journey
          </button>
          <button className="w-full sm:w-auto px-11 py-4 sm:py-[18px] bg-transparent hover:bg-white/15 text-white border-2 border-white/60 hover:border-white font-bold text-base rounded-full transition-all duration-300 hover:-translate-y-1">
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