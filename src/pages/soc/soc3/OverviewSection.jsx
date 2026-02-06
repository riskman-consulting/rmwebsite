import React from 'react'

function OverviewSection() {
  return (
     <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="bg-surfaceLight dark:bg-surfaceDark rounded-[2rem] p-8 lg:p-16 border border-borderLight dark:border-borderDark shadow-sm flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-heading text-3xl font-bold mb-6">SOC 3 In One View</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                SOC 3 is for general use; public reports are based on the Trust Services Criteria. It uses high-level, non-technical language suitable for broad audiences and is often derived from underlying SOC 2 examinations.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Websites', 'Investor Decks', 'Marketing Collateral'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-brandPrimary/5 dark:bg-brandGold/5 text-brandPrimary dark:text-brandGold rounded-lg text-sm font-bold border border-brandPrimary/10 dark:border-brandGold/10">
                    Ideal for {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-6 bg-brandLight dark:bg-brandDark rounded-xl border-t-4 border-brandGold">
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-gray-500">Distribution</h4>
                  <p className="font-semibold">Unrestricted Public Use</p>
               </div>
               <div className="p-6 bg-brandLight dark:bg-brandDark rounded-xl border-t-4 border-brandPrimary">
                  <h4 className="font-bold mb-2 uppercase text-xs tracking-widest text-gray-500">Language</h4>
                  <p className="font-semibold">Non-Technical / Clear</p>
               </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OverviewSection