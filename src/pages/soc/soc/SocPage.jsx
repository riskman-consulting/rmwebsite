import React from 'react';
import { ShieldCheck, BarChart4, Zap, Users, CheckCircle2, Search,  Headphones, Calendar, HelpCircle,ToolCase as Tool } from 'lucide-react';
import HeroSection from './HeroSection';
import StrategicSection from './StrategicSection';
import DefinitionSection from './DefinitionSection';
import ReportTypeSection from './ReportTypeSection';
import SupportSection from './SupportSection';
import BusinessSection from './BusinessSection';

const SOCOverview = () => {
  return (
    <div className="bg-bgLight dark:bg-bgDark font-sans text-brandDark dark:text-brandLight transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. STRATEGIC VALUE */}
      <StrategicSection/>

      {/* 3. DEFINITION SECTION */}
      <DefinitionSection/>

      {/* 4. REPORT TYPES TABLE */}
     <ReportTypeSection/>

      {/* 5. RISKMAN SUPPORT STEPS */}
      <SupportSection/>

      {/* 6. BUSINESS VALUE FOR LEADERSHIP */}
     <BusinessSection/>

      {/* 7. FAQ SECTION */}
     

      {/* 8. FINAL CTA */}
      <section className="py-20 container">
        <div className="bg-brandGold rounded-[2.5rem] p-10 lg:p-20 text-center text-brandDark shadow-2xl">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-6">Turn SOC from Obligation into Advantage</h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
            Use SOC reports not just to pass audits, but to strengthen trust, unlock deals, and support strategic growth.
          </p>
          <button className="bg-brandDark text-white hover:bg-brandNavy px-12 py-5 rounded-full font-black text-lg transition-all shadow-xl hover:scale-105 transform">
            Discuss Your SOC Roadmap
          </button>
        </div>
      </section>

    </div>
  );
};

export default SOCOverview;