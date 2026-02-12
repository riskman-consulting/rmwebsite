import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigator=useNavigate();
  return (
    <section className="relative py-24 overflow-hidden bg-brandDark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://public.youware.com/users-website-assets/prod/bc9113de-c4e7-4bd4-b9f7-4a2e13ffb810/39108bb5693f4be886c73b5a63808691.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brandDark/50 to-brandDark"></div>

      <div className="container relative z-10 px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl font-heading">
          Master Your Risk Landscape
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-300">
          Partner with RiskMan to build a culture of risk awareness that protects your future and drives organizational performance.
        </p>
        
        <div className="flex justify-center">
          <button onClick={()=>navigator("/contact")} className="px-10 py-4 text-lg btn-primary bg-brandGold hover:bg-brandAccent text-brandDark shadow-brandGold/20">
            Book Your Audit
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
