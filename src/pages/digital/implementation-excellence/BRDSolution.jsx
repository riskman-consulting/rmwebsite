import React from 'react';
import { FileText } from 'lucide-react';

import brdImg from "../../../assets/images/digital/brd-solution-design.jpg";




const BRDSolutionDesign = () => {
    return (

      <section className="relative py-16 overflow-hidden bg-bgLight dark:bg-bgDark">
                <div className="container">
                  <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-20">
                    <div className="lg:w-1/2">
                      <img
                        src={brdImg}
                        alt="BRD & Solution Design"
                        className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <h2 className="mb-6 text-3xl font-bold font-heading md:text-4xl text-brandDark dark:text-white">BRD & Solution Design</h2>
                      <p className="mb-8 text-lg text-brandNavy dark:text-white/70">
                        Bridge the gap between business needs and technical execution through structured requirements and validation.
                      </p>

                      <div className="grid gap-6 sm:grid-cols-2">
                        {[
                          { title: "Functional Documentation", desc: "Draft structured requirements covering both functional and non-functional needs." },
                          { title: "Readiness Checkpoints", desc: "Execute business readiness checkpoints to confirm organization preparedness." },
                          { title: "Stakeholder Walkthroughs", desc: "Conduct validation walkthroughs with key stakeholders to ensure alignment." },
                          { title: "Traceability & Change Logs", desc: "Maintain comprehensive traceability matrices and change logs." }
                        ].map((item, idx) => (
                          <div key={idx} className="h-full p-6 border shadow-sm rounded-2xl border-borderLight dark:border-borderDark bg-surfaceLight dark:bg-surfaceDark">
                            <FileText className="w-6 h-6 mb-3 text-brandPrimary dark:text-brandAccent" />
                            <h3 className="mb-2 text-lg font-bold text-brandDark dark:text-white">{item.title}</h3>
                            <p className="text-sm text-brandPrimary dark:text-white/70">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    )
};

export default BRDSolutionDesign
