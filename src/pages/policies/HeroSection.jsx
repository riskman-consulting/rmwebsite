// import { SectionTag } from "../../components/ui/SectionComponents";

// export default function HeroSection({ scrollTo }) {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 overflow-hidden text-center transition-colors duration-300 bg-bgLight dark:bg-bgDark" id="overview">
//       {/* Background Glow */}
//       <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(0,64,128,0.1)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle,_rgba(0,51,102,0.2)_0%,_transparent_70%)] pointer-events-none animate-pulse-custom" />
      
//       <div className="relative z-10">
//         <SectionTag>Enterprise Governance Advisory</SectionTag>
        
//         <h1 className="font-heading text-[clamp(36px,5vw,58px)] font-bold text-brandDark dark:text-white leading-[1.15] mb-6 max-w-4xl mx-auto">
//           Policies & SOPs: The Backbone of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandNavy dark:from-brandAccent dark:to-brandGold">Enterprise Governance</span>
//         </h1>
        
//         <p className="text-[clamp(15px,1.6vw,18px)] text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
//           Translating Board intent into operational discipline. RiskMan designs, implements, and sustains 
//           governance frameworks that drive consistency, accountability, and control across entities and geographies.
//         </p>
        
//         <div className="flex flex-wrap justify-center gap-4">
//           <button 
//             className="inline-flex items-center gap-2 bg-gradient-to-br from-brandNavy to-brandPrimary text-white border-none px-8 py-3.5 rounded-xl text-[15px] font-semibold cursor-pointer font-sans transition-all hover:shadow-[0_0_20px_rgba(0,64,128,0.3)] hover:-translate-y-0.5" 
//             onClick={() => scrollTo("framework")}
//           >
//             Explore Our Framework →
//           </button>
          
//           <div className="inline-flex items-center gap-2 bg-white dark:bg-brandPrimary/10 border border-brandPrimary/20 dark:border-brandPrimary/25 rounded-xl px-5 py-2.5 text-[13px] text-brandPrimary dark:text-brandAccent font-medium shadow-sm dark:shadow-none">
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
//             Schedule a Consultation
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { ArrowLeft, ShieldCheck } from "lucide-react";
import React from "react";
import bg from "../../assets/images/policies/policies.png"
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigator = useNavigate()
  return (
    <section
      className="relative py-20 overflow-hidden text-white lg:py-32"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-brandDark/85"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-bold border rounded-full bg-brandPrimary/30 border-brandAccent/30 text-brandAccent">
            <ShieldCheck className="w-4 h-4" />
            Enterprise Governance Advisory
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-3xl font-bold leading-tight font-heading lg:text-5xl">
             Policies & SOPs: The Backbone of{" "}
            <span className="text-brandAccent">Enterprise Governance</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg leading-relaxed text-gray-300 lg:text-xl">
            Translating Board intent into operational discipline. RiskMan designs, implements, and sustains 
           governance frameworks that drive consistency, accountability, and control across entities and geographies.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button onClick={()=>navigator("/services")} className="flex items-center gap-2 px-8 py-4 font-bold transition-all bg-white rounded-md text-brandDark hover:bg-brandLight">
              <ArrowLeft className="w-4 h-4" />
              Return To Services
            </button>

            <button onClick={()=>navigator("/contact")} className="px-8 py-4 font-bold transition-all rounded-md bg-brandAccent text-brandDark hover:bg-brandGold">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;