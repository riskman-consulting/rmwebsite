import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { faqs } from './data'

function FAQSection() {
    const [activeFaq, setActiveFaq] = useState(null);
  return (
    <section className="py-16 bg-bgLight">
        <div className="container">
          <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-10 text-center dark:text-white text-brandNavy dark:text-white">Control Environment FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white dark:bg-surfaceDark rounded-2xl shadow-sm border border-borderLight dark:border-borderDark overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandDark dark:text-white">{faq.q}</span>
                  <ChevronDown className={`transition-transform text-brandPrimary ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 border-t border-gray-50 dark:border-borderDark pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
  )
}

export default FAQSection