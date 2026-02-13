import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { faqs } from './data'

function FAQSection() {
    const [activeFaq, setActiveFaq] = useState(null);
  return (
        <section className="py-14 md:py-20 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container max-w-3xl px-6 lg:px-20">
          <h2 className="mb-10 text-3xl font-bold text-center font-heading text-brandDark dark:text-brandAccent/60">Audit Insights FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="overflow-hidden border shadow-sm bg-surfaceLight dark:bg-surfaceDark rounded-xl border-borderLight">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="flex items-center justify-between w-full p-6 font-bold text-left"
                >
                  <span className="text-brandDark dark:text-brandAccent/60">{faq.q}</span>
                  <ChevronDown className={`transition-transform text-brandPrimary dark:text-white ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pt-4 pb-6 border-t text-brandNavy dark:text-white/70 dark:text- border-gray-50 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FAQSection