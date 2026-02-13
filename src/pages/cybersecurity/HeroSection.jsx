// Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Search, 
  FileText, 
  Activity, 
  Cpu, 
  Globe, 
  CheckCircle, 
  AlertTriangle, 
  Server, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';


import heroImage from "../../assets/images/cybersecurity/herosection-image.png";

const HeroSection = () => {
  return (
    <section className="relative pt-10 flex items-center min-h-screen overflow-hidden bg-brandDark">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src={heroImage} alt="Cybersecurity Shield" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/90 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 grid items-center gap-12 px-6 lg:px-20 mx-auto lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandAccent/10 border-brandAccent/30 text-brandAccent">
              <span className="relative flex w-3 h-3">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-brandAccent"></span>
                <span className="relative inline-flex w-3 h-3 rounded-full bg-brandAccent"></span>
              </span>
              Elite Cybersecurity Services
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl font-heading">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">Resilience</span> Through Proactive Defense
            </h1>
            <p className="max-w-xl mb-8 text-lg leading-relaxed text-gray-300">
              RiskMan delivers standardized, rigorous cybersecurity audits to detect vulnerabilities, ensure regulatory compliance, and strengthen your organization's overall security posture.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/services" className="flex items-center justify-center gap-2 px-8 py-4 font-bold transition-all rounded-lg bg-brandAccent text-brandDark hover:bg-white group">
                Service Inquiry
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="flex items-center justify-center px-8 py-4 font-bold text-white transition-all border rounded-lg border-white/30 hover:bg-white/10">
                Contact RiskMan
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <div className="absolute inset-0 rounded-full bg-brandAccent/20 blur-3xl animate-pulse-custom"></div>
              <img 
                src={heroImage} 
                alt="Cybersecurity Visualization" 
                className="relative z-10 object-cover w-full h-full border shadow-2xl rounded-2xl border-white/10 mask-image-gradient"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
              />
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-20 p-4 border shadow-xl -top-10 -right-10 bg-brandNavy/90 backdrop-blur rounded-xl border-brandAccent/30"
              >
                <Shield className="w-8 h-8 mb-2 text-brandAccent" />
                <div className="font-bold text-white">100% Secure</div>
                <div className="text-xs text-gray-400">System Status</div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-20 p-4 border shadow-xl -bottom-10 -left-10 bg-brandNavy/90 backdrop-blur rounded-xl border-brandAccent/30"
              >
                <Activity className="w-8 h-8 mb-2 text-green-400" />
                <div className="font-bold text-white">Real-time</div>
                <div className="text-xs text-gray-400">Monitoring</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default HeroSection;