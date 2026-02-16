import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import image from "../../assets/images/csa/image.png"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-yellow-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 delay-700 rounded-full w-96 h-96 bg-teal-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col min-h-screen py-12 items-left md:py-20">
          
          {/* Brand Identity */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-start md:mb-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 mb-4 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-6 h-6 text-yellow-500">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                Global Risk Advisory Excellence
              </span>
            </div>
            {/* <p className="text-sm font-medium text-yellow-500/80">
              Global Risk Advisory Excellence
            </p> */}
          </motion.div>

          {/* Main Content Grid - Text + Image */}
          <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 max-w-7xl">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-center md:space-y-8 lg:text-left"
            >
              
              {/* Main Heading */}
              <div>
                <h1 className="mb-3 text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text">
                  Control Self-Assessment
                </h1>
                <div className="flex items-center justify-center gap-4 mb-6 lg:justify-start">
                  <div className="w-12 h-px bg-gradient-to-r from-yellow-500 to-transparent"></div>
                  <h2 className="text-3xl font-bold text-yellow-500 md:text-4xl">
                    (CSA)
                  </h2>
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-lg font-light leading-relaxed md:text-xl lg:text-2xl text-slate-300">
                Transforming Risk Governance Through{' '}
                <span className="font-medium text-brandAccent">Embedded Accountability</span>
              </p>

              {/* Features List */}
              <div className="pt-4 space-y-4">
                <div className="flex items-start justify-center gap-4 lg:justify-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-lg bg-teal-500/20">
                    <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Scalable & Enterprise-Wide</h3>
                    <p className="text-sm text-slate-400">Deployment across global operations</p>
                  </div>
                </div>

                <div className="flex items-start justify-center gap-4 lg:justify-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-lg bg-blue-500/20">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Methodology-Driven</h3>
                    <p className="text-sm text-slate-400">Proven frameworks aligned with IIA standards</p>
                  </div>
                </div>

                <div className="flex items-start justify-center gap-4 lg:justify-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-lg bg-yellow-500/20">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Outcome-Focused</h3>
                    <p className="text-sm text-slate-400">Measurable improvements in control effectiveness</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row lg:justify-start">
                <Link to="/contact" className="relative px-8 py-4 overflow-hidden text-lg font-bold transition-all duration-300 group rounded-xl">
                  <div className="absolute inset-0 transition-transform bg-gradient-to-r from-yellow-500 to-yellow-600 group-hover:scale-105"></div>
                  <span className="relative flex items-center justify-center gap-2 text-slate-900">
                    Get Started
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                
                <Link to="/services" className="relative px-8 py-4 overflow-hidden text-lg font-bold transition-all duration-300 border-2 group rounded-xl border-white/30 hover:border-white/60 backdrop-blur-sm">
                  <div className="absolute inset-0 transition-colors bg-white/0 group-hover:bg-white/10"></div>
                  <span className="relative flex items-center justify-center gap-2 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Our Other Services
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden h-full lg:block"
            >
              <div className="relative h-96 lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                {/* Professional Image */}
                <img 
                  src={image}
                  alt="Control Self-Assessment - Risk Management"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-yellow-500/20 border-yellow-500/30">
                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-white">Industry Leading Solution</p>
                        <p className="text-sm text-slate-300">Trusted by Global Enterprises</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card Behind */}
              <div className="absolute w-48 h-48 p-6 border shadow-xl -bottom-6 -right-6 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border-white/10">
                <div className="space-y-4">
                  <div className="text-xs font-bold tracking-wider text-center uppercase text-brandDark dark:text-brandAccent">Key Benefits</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-white">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      Comprehensive Coverage
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      Risk Identification
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Control Validation
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section Below */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid w-full max-w-6xl grid-cols-2 gap-6 mt-16 md:grid-cols-4 md:gap-8 md:mt-24"
          >
            <div className="p-4 text-center">
              <div className="mb-2 text-3xl font-bold text-yellow-500 md:text-4xl">500+</div>
              <p className="text-sm text-slate-400 md:text-base">Organizations</p>
            </div>
            <div className="p-4 text-center">
              <div className="mb-2 text-3xl font-bold text-teal-500 md:text-4xl">150+</div>
              <p className="text-sm text-slate-400 md:text-base">Countries</p>
            </div>
            <div className="p-4 text-center">
              <div className="mb-2 text-3xl font-bold text-blue-500 md:text-4xl">20+</div>
              <p className="text-sm text-slate-400 md:text-base">Years Experience</p>
            </div>
            <div className="p-4 text-center">
              <div className="mb-2 text-3xl font-bold md:text-4xl text-slate-300">99%</div>
              <p className="text-sm text-slate-400 md:text-base">Success Rate</p>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}