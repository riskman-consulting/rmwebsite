import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  RefreshCw,
  Cpu,
  AlertTriangle,
  Car,
  ChevronDown,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import RoadMapSection from './RoadMapSection';
import CompetitiveSection from './CompetitiveSection';
import FaqSection from '../../soc/soc1/FaqSection';
import CTASection from './CTASection';


const ISOAndTisaxPage = () => {

  return (
    <div className="font-sans bg-bgLight text-brandDark">

      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. SERVICES GRID */}
      <ServiceSection/>

      {/* 3. ROADMAP SECTION */}
      <RoadMapSection/>

      {/* 4. COMPETITIVE ADVANTAGES */}
     <CompetitiveSection/>

      {/* 5. FAQ SECTION */}
      <FaqSection/>

      {/* 6. CTA SECTION */}
      <CTASection/>
      {/* 7. FOOTER MINI */}
      <footer className="py-10 border-t border-borderLight bg-white text-center">
        <div className="container">
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting. All rights reserved. | ISO & TISAX Specialists</p>
        </div>
      </footer>
    </div>
  );
};

export default ISOAndTisaxPage;