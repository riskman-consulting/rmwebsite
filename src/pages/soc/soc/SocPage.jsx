import React from 'react';
import { ShieldCheck, BarChart4, Zap, Users, CheckCircle2, Search,  Headphones, Calendar, HelpCircle,ToolCase as Tool } from 'lucide-react';
import HeroSection from './HeroSection';
import StrategicSection from './StrategicSection';
import DefinitionSection from './DefinitionSection';
import ReportTypeSection from './ReportTypeSection';
import SupportSection from './SupportSection';
import BusinessSection from './BusinessSection';
import CtaSection from './CtaSection';

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
      <CtaSection/>

    </div>
  );
};

export default SOCOverview;