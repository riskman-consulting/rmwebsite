import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Partner CTA Section */}
      <section className="py-16 text-white bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="container max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Partner with RiskMan
          </h2>
          <p className="mb-8 text-lg leading-relaxed md:text-xl text-slate-300">
            Transform your Control Self-Assessment program from a compliance necessity into a 
            strategic governance capability that drives risk intelligence, operational resilience, 
            and sustainable competitive advantage.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 font-semibold transition-all bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 text-slate-900 hover:shadow-xl">
              Schedule a Consultation
            </button>
            <button className="px-8 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white hover:text-slate-900">
              Download Our Brochure
            </button>
          </div>
        </div>
      </section>

      
      {/* <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container px-6 mx-auto">
          <div className="grid gap-8 mb-8 md:grid-cols-4">
           
            <div className="md:col-span-2">
              <h3 className="mb-4 text-xl font-bold text-white">
                RISKMAN CONSULTING LLP
              </h3>
              <p className="mb-4 text-sm">
                Global Risk Advisory
              </p>
              <p className="text-sm text-slate-400">
                Transforming risk governance through embedded accountability and 
                strategic control self-assessment programs.
              </p>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-yellow-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-yellow-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-yellow-500">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-yellow-500">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-yellow-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@riskman.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Global Offices</span>
                </li>
              </ul>
            </div>
          </div>

       
          <div className="pt-8 border-t border-slate-700">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-slate-400">
                © 2024 RiskMan Consulting LLP. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm transition-colors text-slate-400 hover:text-yellow-500">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm transition-colors text-slate-400 hover:text-yellow-500">
                  Terms of Service
                </a>
                <a href="#" className="text-sm transition-colors text-slate-400 hover:text-yellow-500">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
}