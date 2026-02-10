import { ChevronDown } from "lucide-react";
import { faqs } from "./data";

import React, { useState } from 'react'

function FAQSection() {
     const [activeFaq, setActiveFaq] = useState(null);
  return (
    <section className="py-20 bg-brandLight">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
             <div className="h-px bg-brandAccent flex-grow"></div>
             <h2 className="font-heading text-3xl font-bold px-4">Continuity FAQ</h2>
             <div className="h-px bg-brandAccent flex-grow"></div>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-borderLight shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold"
                >
                  <span className="text-brandDark">{faq.q}</span>
                  <ChevronDown className={`transition-transform text-brandPrimary ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
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