import { ChevronDown } from 'lucide-react'
import React from 'react'
import { faqs } from './data'

function FAQSection() {
  return (
     <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold">Privacy Governance FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-brandDark"
                >
                  <span className="pr-8">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-50 pt-4 animate-fadeIn">
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