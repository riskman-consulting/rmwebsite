import React, { useState } from 'react'
import { faqs } from './data'
import { ChevronDown } from 'lucide-react';

function FAQSection() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="py-20 bg-white dark:bg-surfaceDark">
            <div className="container">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden transition-all duration-300 bg-white border dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="flex items-center justify-between w-full px-8 py-6 text-left transition-colors duration-300 hover:bg-bgLight dark:hover:bg-bgDark/50"
                            >
                                <span className="pr-4 text-xl font-semibold font-heading text-brandDark dark:text-white">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brandAccent to-brandPrimary flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                                    <ChevronDown className="w-5 h-5 text-white" />
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pt-2 pb-6">
                                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection