import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from "../../assets/images/pci-dss/hero-security.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigator=useNavigate();
  return (
    <div className="relative flex items-center min-h-screen pt-20 overflow-hidden bg-white dark:bg-brandDark">
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-brandLight dark:bg-white/10 border-brandPrimary/10 dark:border-white/10"
            >
              <ShieldCheck className="w-5 h-5 text-brandPrimary dark:text-brandGold" />
              <span className="text-sm font-bold tracking-wide uppercase text-brandPrimary dark:text-brandGold">PCI DSS Compliance</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl font-heading text-brandDark dark:text-white"
            >
              Secure Your <br/>
              <span className="text-brandPrimary dark:text-brandGold">Payment Ecosystem</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 lg:mx-0"
            >
              RiskMan provides elite advisory and technical frameworks to ensure seamless adherence to all six PCI DSS control objectives. Simple, effective, and secure.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <button onClick={()=>navigator("/services")} className="flex items-center justify-center w-full gap-2 px-8 py-4 font-bold text-white transition-opacity rounded-lg sm:w-auto bg-brandPrimary dark:bg-brandGold dark:text-brandDark hover:opacity-90">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button onClick={()=>navigator("/contact")} className="w-full px-8 py-4 font-bold transition-colors border-2 border-gray-200 rounded-lg sm:w-auto dark:border-white/20 text-brandDark dark:text-white hover:bg-gray-50 dark:hover:bg-white/5">
                Consult Experts
              </button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative overflow-hidden border-4 border-white shadow-2xl rounded-2xl dark:border-white/10">
              <img 
                src={heroImg}
                alt="Security Dashboard" 
                className="object-cover w-full h-auto"
              />
              {/* Decorative blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brandGold/20 blur-3xl rounded-full"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
