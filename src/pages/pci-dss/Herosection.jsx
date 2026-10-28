import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from "../../assets/images/pci-dss/hero-security.png"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigator=useNavigate();
  return (
    <section className="relative py-16 overflow-hidden lg:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full text-left lg:w-1/2">
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
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl font-heading text-brandDark dark:text-white"
            >
              Secure Your <br/>
              <span className="text-brandPrimary dark:text-brandGold">Payment Ecosystem</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300"
            >
              RiskMan helps you scope your cardholder data environment, close control gaps and prepare for your PCI DSS assessment across all six control objectives.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
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
                alt="PCI DSS payment security" 
                className="object-cover w-full h-[320px] md:h-[400px] lg:h-[460px]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
