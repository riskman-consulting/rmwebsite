import React, { useState } from 'react';
import { 
  Car, 
  Settings, 
  ShieldCheck, 
  Share2, 
  ClipboardCheck, 
  BarChart3, 
  ChevronDown, 
  ArrowLeft,
  Lock,
  Zap,
  Network,
  AlertOctagon
} from 'lucide-react';
import HeroSection from './HeroSection';
import RoadampSection from './RoadampSection';
import BenefitSection from './BenefitSection';
import ChallengeSection from './ChallengeSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';

const TISAXPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  

  return (
    <div className="font-sans bg-bgLight text-brandDark">
      
      {/* 1. HERO SECTION */}
      <HeroSection/>

      {/* 2. PROCESS ROADMAP */}
     <RoadampSection/>

      {/* 3. ESSENTIAL BENEFITS */}
      <BenefitSection/>

      {/* 4. CHALLENGES SECTION */}
     <ChallengeSection/>

      {/* 5. FAQ SECTION */}
       <FAQSection/>

      {/* 6. CTA SECTION */}
     <CTASection/>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-borderLight bg-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-heading font-black text-2xl tracking-tighter text-brandNavy">
            RISK<span className="text-brandAccent">MAN</span> <span className="text-sm font-medium tracking-normal text-gray-400 ml-2">TISAX Division</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 RiskMan Consulting | Authorized Automotive Security Support</p>
        </div>
      </footer>
    </div>
  );
};

export default TISAXPage;