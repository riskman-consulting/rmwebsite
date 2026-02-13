import React from 'react';
import { CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import valueImage from "../../../assets/images/iso/handshake.png";

const ValueSection = () => {
  return (
    <section id="benefits" className="relative py-14 md:py-20 overflow-hidden text-white bg-brandDark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container relative z-10 px-6 mx-auto lg:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandAccent">Why It Matters</h2>
            <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl font-heading">The Value of Continuity Planning</h3>
            <p className="mb-10 text-lg leading-relaxed text-gray-300">
              Organizations that prioritize resilience are better positioned to protect their market share and maintain client confidence during periods of global or local instability.
            </p>

            <div className="space-y-6">
              <div className="p-6 transition-colors border bg-white/5 border-white/10 rounded-xl hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-brandAccent/20">
                    <ShieldCheck className="w-6 h-6 text-brandAccent" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-white">Customer Assurance</h4>
                    <p className="text-gray-400">Provide clients with confidence that you can deliver critical services even during a major disaster.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-colors border bg-white/5 border-white/10 rounded-xl hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-white">Regulatory Compliance</h4>
                    <p className="text-gray-400">Meet industry-specific requirements for uptime and service availability, avoiding legal or contractual penalties.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-colors border bg-white/5 border-white/10 rounded-xl hover:bg-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-500/20">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-white">Competitive Advantage</h4>
                    <p className="text-gray-400">Position your organization as a reliable partner compared to less-prepared competitors who may suffer longer outages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 transform bg-brandAccent/20 rotate-3 rounded-3xl"></div>
            <img 
              src={valueImage} 
              alt="Business Value and Success" 
              className="relative w-full transition-transform duration-500 transform shadow-2xl rounded-3xl -rotate-3 hover:rotate-0"
            />
            <div className="absolute z-20 max-w-xs p-8 bg-white shadow-xl -bottom-10 -left-10 text-brandDark rounded-tr-3xl rounded-bl-3xl">
              <p className="mb-1 text-4xl font-bold text-brandPrimary">100%</p>
              <p className="text-lg font-bold">Commitment to Resilience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
