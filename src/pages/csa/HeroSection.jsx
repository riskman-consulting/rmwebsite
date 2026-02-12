import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

// Ensure this path is correct for your local environment
import image from "../../assets/images/csa/image.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-slate-950">
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
        <div className="absolute top-0 right-0 rounded-full w-72 h-72 sm:w-96 sm:h-96 bg-yellow-500/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 left-0 rounded-full w-72 h-72 sm:w-96 sm:h-96 bg-teal-500/10 blur-[100px] animate-pulse" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      {/* ── Content Container ── */}
      <div className="container relative z-10 mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-white/5 backdrop-blur-md border-white/10">
              <FaShieldAlt className="text-yellow-500 text-xs sm:text-sm" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-slate-300">
                Global Risk Advisory Excellence
              </span>
            </div>

            {/* Main Heading: Matches screenshot styling */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] mb-6">
              Control Self-Assessment <br className="hidden sm:block " />
              <span className="text-yellow-500">(CSA)</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed mb-8">
              Transforming Risk Governance Through{' '}
              <span className="font-semibold text-teal-400">Embedded Accountability</span>
            </p>

            {/* Features List: Fixed centering issues from your screenshot */}
            <div className="w-full max-w-md space-y-6 mb-10">
              {[
                { 
                  title: "Scalable & Enterprise-Wide", 
                  desc: "Deployment across global operations", 
                  color: "text-teal-400", 
                  bg: "bg-teal-500/20" 
                },
                { 
                  title: "Methodology-Driven", 
                  desc: "Proven frameworks aligned with IIA standards", 
                  color: "text-blue-400", 
                  bg: "bg-blue-500/20" 
                },
                { 
                  title: "Outcome-Focused", 
                  desc: "Measurable improvements in control effectiveness", 
                  color: "text-yellow-400", 
                  bg: "bg-yellow-500/20" 
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-left group">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center transition-transform group-hover:scale-110`}>
                    <FaCheckCircle className={`${item.color} text-xl`} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{item.title}</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons: Centered on mobile, left on desktop */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.03] active:scale-95 shadow-lg shadow-yellow-500/20"
              >
                Get Started <FaArrowRight />
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold rounded-xl transition-all backdrop-blur-sm text-center"
              >
                Our Other Services
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Hero Image (Optimized for Large Screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={image} 
                alt="Risk Management" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Benefit Card */}
            <div className="absolute -bottom-6 -right-6 z-20 p-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-[220px]">
              <p className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-3">Industry Standard</p>
              <ul className="space-y-2">
                {['Risk Identification', 'Control Validation', 'Global Coverage'].map((text, i) => (
                  <li key={i} className="flex items-center gap-2 text-[11px] text-white">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hidden sm:block"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}