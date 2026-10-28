import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* Partner CTA Section */}
      <section className="py-16 text-white bg-brandDark">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl">
            Partner with RiskMan
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg leading-relaxed md:text-xl text-white/80">
            Transform your Control Self-Assessment program from a compliance necessity into a 
            strategic governance capability that drives risk intelligence, operational resilience, 
            and sustainable competitive advantage.
          </p>
          
          {/* <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 font-semibold transition-all bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600 text-slate-900 hover:shadow-xl">
              Schedule a Consultation
            </button>
            <button className="px-8 py-3 font-semibold text-white transition-all border-2 border-white rounded-lg hover:bg-white hover:text-slate-900">
              Download Our Brochure
            </button>
          </div> */}

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="px-8 py-4 text-lg font-bold transition-all rounded-lg shadow-xl bg-brandAccent text-brandDark hover:-translate-y-1 active:scale-95"
            >
              Book a Consultation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 text-lg font-bold text-white transition-all border-2 rounded-lg border-white/30 hover:bg-white/10"
            >
              Our Other Services
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
}