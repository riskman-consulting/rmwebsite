import React from 'react';
import { motion } from 'framer-motion';

const approachItems = [
  { title: "Change Impact Assessment", desc: "Analyzes how new processes and systems affect roles, behaviors, and departmental workflows.", colSpan: "md:col-span-2" },
  { title: "Stakeholder Engagement", desc: "Identifies key stakeholders, assesses their influence and impact, and defines engagement strategies.", colSpan: "md:col-span-1" },
  { title: "Communication Planning", desc: "Develops targeted messages, channels, and timelines to keep all audiences informed and aligned.", colSpan: "md:col-span-1" },
  { title: "Training & Enablement", desc: "Designs and delivers focused training, SOPs, and job aids to support user readiness and competence.", colSpan: "md:col-span-2" },
  { title: "Resistance Management", desc: "Monitors adoption, addresses concerns through feedback loops, and manages resistance proactively.", colSpan: "md:col-span-1" },
  { title: "Sustain & Reinforce", desc: "Tracks adoption metrics, recognizes early adopters, and embeds improvements into ongoing business practices.", colSpan: "md:col-span-2" }
];

export const ChangeApproachSection = () => {
  return (
    <section className="relative py-24 overflow-hidden text-white bg-brandDark">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandPrimary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brandAccent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container relative z-10 px-6 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl font-heading">Change Management Approach</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-300">
            We manage the people side of change so RiskMan is adopted smoothly and delivers sustained value across the organization.
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          {approachItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-brandAccent/50 transition-all duration-300 ${item.colSpan}`}
            >
              <h3 className="mb-4 text-2xl font-bold text-brandAccent">{item.title}</h3>
              <p className="leading-relaxed text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ChangeApproachSection