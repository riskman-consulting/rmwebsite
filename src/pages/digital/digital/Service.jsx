import React from 'react'
import { Link } from 'react-router-dom'

function Service() {
  return (
       <section className="py-20">
        <div className="container px-5 mx-auto sm:px-8 lg:px-12 xl:px-14">
          <p className="mb-8 text-sm font-bold tracking-widest uppercase text-brandPrimary dark:text-brandGold">The services we offer are the following:</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            
            {/* Strategic PMO */}
            <div className="p-8 transition-shadow border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl group">
              <h3 className="mb-4 text-2xl font-bold font-heading group-hover:text-brandPrimary dark:group-hover:text-brandGold">Strategic PMO </h3>
              <p className="mb-6 opacity-80">Establish rigorous governance and risk control across the entire project lifecycle to ensure milestone-driven success. </p>
              <Link to="strategic-pmo" className="inline-flex items-center gap-2 font-bold text-brandPrimary dark:text-brandGold hover:underline">
                Learn More <span>→</span> 
              </Link>
            </div>

            {/* Implementation Excellence */}
            <div className="p-8 transition-shadow border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl group">
              <h3 className="mb-4 text-2xl font-bold font-heading group-hover:text-brandPrimary dark:group-hover:text-brandGold">Implementation Excellence </h3>
              <p className="mb-6 opacity-80">Accelerate value realization through optimized digital tools, process re-engineering, and seamless data migration. </p>
              <Link to="implementation" className="inline-flex items-center gap-2 font-bold text-brandPrimary dark:text-brandGold hover:underline">
                Learn More <span>→</span> 
              </Link>
            </div>

            {/* Support Services */}
            <div className="p-8 transition-shadow border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl group">
              <h3 className="mb-4 text-2xl font-bold font-heading group-hover:text-brandPrimary dark:group-hover:text-brandGold">Support Services </h3>
              <p className="mb-6 opacity-80">Sustain long-term performance through structured change management, comprehensive user testing, and post-launch hypercare.</p>
              <Link to="support-services" className="inline-flex items-center gap-2 font-bold text-brandPrimary dark:text-brandGold hover:underline">
                Learn More <span>→</span> 
              </Link>
            </div>

          </div>
        </div>
      </section>
  )
}

export default Service