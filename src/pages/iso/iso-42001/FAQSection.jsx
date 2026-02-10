import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { faqs } from './data'

function FAQSection() {
    const [activeFaq, setActiveFaq] = useState(null)
  return (
    <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="inline-block bg-brandAccent text-brandDark px-4 py-1 rounded text-xs font-bold mb-4 uppercase">FAQ</div>
          <h2 className="font-heading text-3xl font-bold mb-10">AI Governance Insights</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left font-bold hover:text-brandPrimary transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {activeFaq === idx && (
                  <div className="pb-6 text-gray-600 leading-relaxed animate-fadeIn">
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