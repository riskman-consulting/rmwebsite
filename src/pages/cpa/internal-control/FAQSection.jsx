import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { faqs } from './data'

function FAQSection() {
    const [activeFaq, setActiveFaq] = useState(null);
  return (
        <section className="py-20 bg-bgLight">
        <div className="container max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-10 text-center text-brandNavy">Control Environment FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-borderLight overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandDark">{faq.q}</span>
                  <ChevronDown className={`transition-transform text-brandPrimary ${activeFaq === idx ? 'rotate-180' : ''}`} />
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