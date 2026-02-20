import React from 'react';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const navigator=useNavigate();
  return (
    <section className="relative py-14 md:py-20 overflow-hidden text-white bg-gradient-to-br from-brandNavy to-brandDark">
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 bg-brandGold/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-brandPrimary/20 blur-3xl"></div>
      
      <div className="container relative z-10 px-6 lg:px-12 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-5xl font-heading">
          Protect Your Organization from Evolving Threats
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
          Partner with RiskMan to implement proactive safeguards and reactive excellence for all investigative requirements.
        </p>
        <button onClick={()=>navigator("/contact")} className="px-10 py-4 text-lg font-bold transition-all transform rounded-full shadow-2xl bg-brandGold hover:bg-white hover:text-brandNavy text-brandDark hover:-translate-y-1">
          Request A Confidential Consultation
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
