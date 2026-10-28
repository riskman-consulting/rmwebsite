import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import image from "../../assets/images/csa/image.png"

export default function HeroSection() {
  return (
    <section className="relative py-16 overflow-hidden lg:py-28 bg-brandDark">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandAccent/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandPrimary/20 blur-3xl"></div>
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
      <div className="container relative">
        <div className="grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-left md:space-y-8"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-6 py-2 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
              <div className="w-6 h-6 text-brandAccent">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
                Global Risk Advisory Excellence
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-white font-heading md:text-4xl lg:text-5xl">
              Control Self-Assessment{' '}
              <span className="text-brandAccent">(CSA)</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg font-light leading-relaxed md:text-xl lg:text-2xl text-slate-300">
              Transforming Risk Governance Through{' '}
              <span className="font-medium text-brandAccent">Embedded Accountability</span>
            </p>

            {/* Features List */}
            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-lg bg-brandAccent/20">
                  <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Scalable & Enterprise-Wide</h3>
                  <p className="text-sm text-slate-400">Deployment across global operations</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-lg bg-brandAccent/20">
                  <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-white">Methodology-Driven</h3>
                  <p className="text-sm text-slate-400">Proven frameworks aligned with IIA standards</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-1 rounded-lg bg-brandAccent/20">
                  <svg className="w-5 h-5 text-brandAccent" fill="currentColor" viewBox="0 0 20 20">
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
            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold transition-all duration-300 group rounded-xl bg-brandAccent text-brandDark hover:bg-brandGold">
                Get Started
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-300 border-2 rounded-xl border-white/30 hover:border-white/60 hover:bg-white/10">
                Our Other Services
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
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Control Self-Assessment - Risk Management"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute w-48 p-6 border shadow-xl -bottom-6 -right-6 bg-brandDark/90 rounded-2xl backdrop-blur-sm border-white/10">
              <div className="space-y-4">
                <div className="text-xs font-bold tracking-wider text-center uppercase text-brandAccent">Key Benefits</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <div className="w-2 h-2 rounded-full bg-brandAccent"></div>
                    Comprehensive Coverage
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <div className="w-2 h-2 rounded-full bg-brandAccent"></div>
                    Risk Identification
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <div className="w-2 h-2 rounded-full bg-brandAccent"></div>
                    Control Validation
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
