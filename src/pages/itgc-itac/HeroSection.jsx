import React from 'react';
import { 
  Shield, 
  Lock, 
  Server, 
  Database, 
  FileText, 
  RefreshCw, 
  TrendingUp, 
  CheckCircle, 
  Menu, 
  X, 
  ArrowRight,
  Globe,
  Cpu,
  Layers,
  Activity,
  Zap,
  Users,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun
} from 'lucide-react';


const HeroSection = () => {
  return (
    // <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary md:py-28">
    //   {/* Background decorative elements */}
    //   <div className="absolute inset-0 opacity-10">
    //     <div className="absolute top-0 left-0 rounded-full w-72 h-72 md:w-96 md:h-96 bg-brandAccent filter blur-3xl animate-pulse"></div>
    //     <div className="absolute bottom-0 right-0 rounded-full w-72 h-72 md:w-96 md:h-96 bg-brandGold filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    //   </div>
      
    //   <div className="container relative z-10">
    //     <div className="max-w-4xl mx-auto text-center">
    //       <h1 className="mb-6 text-4xl font-bold leading-tight font-heading md:text-5xl lg:text-6xl">
    //         Comprehensive IT Auditing with ITGC & ITAC Excellence
    //       </h1>
    //       <p className="mb-10 text-lg leading-relaxed md:text-xl text-white/90">
    //         Empower your enterprise with expert IT General and Application Controls auditing to mitigate risks, ensure compliance, and drive operational excellence.
    //       </p>
    //       <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
    //         <a 
    //           href="/services" 
    //           className="inline-block px-8 py-4 font-semibold transition-all duration-300 transform rounded-lg shadow-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:scale-105 hover:shadow-2xl"
    //         >
    //           Explore Services
    //         </a>
    //         <a 
    //           href="/contact" 
    //           className="inline-block px-8 py-4 font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-brandDark"
    //         >
    //           Contact Our Experts
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="relative flex items-center justify-center min-h-screen">
    <img src="https://public.youware.com/users-website-assets/prod/40fcf0f2-b4b0-418d-a01b-f6b4ca34e916/6ca2779f20284edca08c4ceef94541a8.jpg" className="absolute inset-0 object-cover w-full h-full" />
    <div className="absolute inset-0 bg-brandNavy/80" />

    <div className="relative z-10 px-6 text-center text-white">
      <div className="inline-flex items-center gap-2 mb-6 text-brandGold">
        <Shield size={16} /> RiskMan Services
      </div>

      <h1 className="mb-6 text-5xl font-bold">
         Comprehensive IT Auditing with <span className="text-brandGold">ITGC & ITAC</span>
      </h1>

      <p className="max-w-2xl mx-auto mb-10 text-lg">
       Empower your enterprise with expert IT General and Application Controls auditing to mitigate risks, ensure compliance, and drive operational excellence.
      </p>

      <div className="flex justify-center gap-4">
        <button className="flex items-center gap-2 px-8 py-4 font-bold rounded-lg bg-brandGold text-brandNavy">
          Explore <ArrowRight />
        </button>
        <button className="px-8 py-4 border-2 rounded-lg">Contact</button>
      </div>
    </div>

    <ChevronDown className="absolute text-white bottom-10 animate-bounce" />
  </section>

    
  );
};

export default HeroSection;