import React from 'react';
import { ShieldCheck, Activity, Globe, Landmark, Target } from 'lucide-react';

function StrategicFoundation() {
  return (
    <section className="py-20 bg-bgLight dark:bg-bgDark transition-colors duration-300">
      <div className="container max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded bg-brandNavy/10 dark:bg-brandAccent/10 text-brandNavy dark:text-brandAccent">
            Governance Framework
          </div>
          <h2 className="mb-6 text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-brandDark dark:text-brandAccent leading-tight">
            Control Self-Assessment: <br />
            <span className="text-brandPrimary dark:text-white">
              Strategic Foundation
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-brandNavy/80 dark:text-white/70 font-sans">
            CSA represents a fundamental shift in how leading organizations embed risk awareness, 
            control accountability, and continuous improvement into their operational DNA.
          </p>
        </div>

        {/* Feature Grid: Defining CSA & Imperative */}
        <div className="grid gap-8 mb-12 lg:grid-cols-3">
          {/* Main Definition Card */}
          <div className="lg:col-span-2 p-8 rounded-xl bg-surfaceLight dark:bg-surfaceDark shadow-sm border border-borderLight dark:border-borderDark hover:shadow-md transition-shadow">
            <h3 className="flex items-center gap-3 mb-5 text-2xl font-heading font-bold text-brandDark dark:text-brandAccent">
              <ShieldCheck className="text-brandPrimary dark:text-brandAccent" size={28} /> 
              Defining CSA
            </h3>
            <div className="space-y-4 text-brandNavy/90 dark:text-white/80 leading-relaxed font-sans">
              <p>
                A structured process through which management systematically evaluates the design 
                adequacy and operating effectiveness of controls.
              </p>
              <p>
                Unlike traditional audit-led assurance, CSA places primary accountability where 
                it belongs—with the <span className="font-bold text-brandPrimary dark:text-brandAccent">business functions</span> that own and operate the underlying processes.
              </p>
            </div>
          </div>

          {/* Strategic Imperative Accent Card */}
          <div className="p-8 rounded-xl bg-brandPrimary dark:bg-brandNavy text-white shadow-xl flex flex-col justify-center relative overflow-hidden group">
            {/* Decorative Background Icon */}
            <Target className="absolute w-32 h-32 -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-500" />
            
            <h3 className="mb-4 text-xl font-heading font-bold text-brandAccent">Strategic Imperative</h3>
            <p className="text-lg italic leading-relaxed font-medium font-sans">
              "CSA transforms risk management from a periodic audit activity into a continuous, 
              organization-wide discipline."
            </p>
          </div>
        </div>

        {/* Why CSA Matters Now - Interactive Grid */}
        <div>
          <h3 className="mb-8 text-2xl font-heading font-bold text-brandDark dark:text-white">
            Why CSA Matters Now
          </h3>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Regulatory */}
            <div className="p-6 rounded-xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandAccent transition-all duration-300 shadow-sm group">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded bg-brandLight dark:bg-brandNavy text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark transition-colors">
                <Landmark size={24} />
              </div>
              <h4 className="mb-2 font-heading font-bold text-brandDark dark:text-white">Regulatory</h4>
              <p className="text-sm text-brandNavy/70 dark:text-white/60 leading-relaxed font-sans">
                Global regulators mandate demonstrable evidence of active first-line engagement.
              </p>
            </div>

            {/* Resilience */}
            <div className="p-6 rounded-xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandAccent transition-all duration-300 shadow-sm group">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded bg-brandLight dark:bg-brandNavy text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark transition-colors">
                <Activity size={24} />
              </div>
              <h4 className="mb-2 font-heading font-bold text-brandDark dark:text-white">Resilience</h4>
              <p className="text-sm text-brandNavy/70 dark:text-white/60 leading-relaxed font-sans">
                Robust control environments built to withstand cyber threats and operational shocks.
              </p>
            </div>

            {/* Culture */}
            <div className="p-6 rounded-xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandAccent transition-all duration-300 shadow-sm group">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded bg-brandLight dark:bg-brandNavy text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark transition-colors">
                <Globe size={24} />
              </div>
              <h4 className="mb-2 font-heading font-bold text-brandDark dark:text-white">Culture</h4>
              <p className="text-sm text-brandNavy/70 dark:text-white/60 leading-relaxed font-sans">
                Embedding risk awareness into daily operations via deep cultural transformation.
              </p>
            </div>

            {/* Governance */}
            <div className="p-6 rounded-xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark hover:border-brandAccent dark:hover:border-brandAccent transition-all duration-300 shadow-sm group">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded bg-brandLight dark:bg-brandNavy text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h4 className="mb-2 font-heading font-bold text-brandDark dark:text-white">Governance</h4>
              <p className="text-sm text-brandNavy/70 dark:text-white/60 leading-relaxed font-sans">
                Audit Committees require timely data pipelines to support informed oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategicFoundation;