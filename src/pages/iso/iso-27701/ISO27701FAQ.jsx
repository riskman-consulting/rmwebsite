import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqItem = ({ question, answer, isOpen, toggle }) => {
    return (
        <div className="border-b border-borderLight dark:border-borderDark">
            <button
                onClick={toggle}
                className="flex items-center justify-between w-full py-5 text-base font-semibold text-left transition-colors font-heading text-brandDark dark:text-brandLight hover:text-brandPrimary dark:hover:text-brandAccent sm:text-lg"
            >
                {question}
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 shrink-0 text-brandAccent" />
                ) : (
                    <ChevronDown className="w-5 h-5 shrink-0 text-brandPrimary dark:text-brandAccent" />
                )}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-5" : "max-h-0"
                    }`}
            >
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const ISO27701FAQ = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            q: "What is ISO 27701?",
            a: "It is an international extension to ISO 27001 specifically focused on privacy information management systems."
        },
        {
            q: "Does an organization need ISO 27001 first?",
            a: "Yes, ISO 27701 is designed to be implemented on top of an existing ISO 27001 framework."
        },
        {
            q: "How does it help with GDPR?",
            a: "It provides a structured approach and evidence of compliance that aligns closely with many GDPR requirements."
        },
        {
            q: "Does RiskMan provide internal audits for this?",
            a: "Yes, we offer expert internal audit services to ensure your organization is ready for certification."
        },
        {
            q: "Is the certification permanent?",
            a: "No, it requires regular surveillance audits to maintain valid status and ensure ongoing compliance."
        }
    ];

    return (
        <section className="w-full py-14  md:py-20 px-6 lg:px-20 bg-surfaceLight dark:bg-bgDark" id="faq">
            <div className="mx-auto max-w-[1280px]">
                <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
                    {/* Left column */}
                    <div className="lg:col-span-2">
                        <span className="text-sm font-semibold tracking-widest uppercase font-heading text-brandPrimary dark:text-brandAccent">
                            FAQ
                        </span>
                        <h2 className="mt-3 text-3xl font-bold font-heading text-brandDark dark:text-white sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">
                            Get answers to common questions about ISO 27701 certification and
                            our consulting services.
                        </p>
                        <div className="mt-8">
                            <img
                                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
                                alt="Privacy consulting session"
                                className="object-cover w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Right column — Accordion */}
                    <div className="lg:col-span-3">
                        <div className="p-6 border rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark sm:p-8">
                            {faqs.map((faq, i) => (
                                <FaqItem
                                    key={i}
                                    question={faq.q}
                                    answer={faq.a}
                                    isOpen={openFaq === i}
                                    toggle={() => setOpenFaq(openFaq === i ? null : i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ISO27701FAQ;
