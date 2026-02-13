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
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigator=useNavigate()
  return (
  

    <section className="relative flex items-center justify-center min-h-screen">
    <img src="https://public.youware.com/users-website-assets/prod/40fcf0f2-b4b0-418d-a01b-f6b4ca34e916/6ca2779f20284edca08c4ceef94541a8.jpg" className="absolute inset-0 object-cover w-full h-full" />
    <div className="absolute inset-0 bg-brandNavy/80" />

    <div className="relative z-10 px-6 lg:px-20 text-center text-white">
      <div className="inline-flex items-center gap-2 mb-6 text-brandGold">
        <Shield size={16} /> RiskMan Services
      </div>

      <h1 className="mb-6 text-4xl font-bold">
         Comprehensive IT Auditing with <span className="text-brandGold">ITGC & ITAC</span>
      </h1>

      <p className="max-w-2xl mx-auto mb-10 text-lg">
       Empower your enterprise with expert IT General and Application Controls auditing to mitigate risks, ensure compliance, and drive operational excellence.
      </p>

      <div className="flex justify-center gap-4">
        <button onClick={()=>navigator("/services")} className="flex items-center gap-2 px-8 py-4 font-bold rounded-lg bg-brandGold text-brandNavy">
          Explore <ArrowRight />
        </button>
        <button onClick={()=>navigator("/contact")} className="px-8 py-4 border-2 rounded-lg">Contact</button>
      </div>
    </div>

    <ChevronDown className="absolute text-white bottom-10 animate-bounce" />
  </section>

    
  );
};

export default HeroSection;