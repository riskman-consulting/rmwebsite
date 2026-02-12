import React from 'react';
import { Activity, Database, ShieldAlert, RefreshCw } from 'lucide-react';
import pillarsImage from "../../../assets/images/iso/resilence.png"

const PillarsSection = () => {
  const pillars = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Business Impact Analysis (BIA)",
      description: "Identify critical functions and determine the potential consequences of their disruption to prioritize recovery.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Recovery Strategies",
      description: "Develop tailored plans to restore operations within acceptable timeframes following a technical or environmental crisis.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Incident Response",
      description: "Establish clear protocols and communication channels to manage emergencies as they unfold in real-time.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Continuous Improvement",
      description: "Regularly test and update continuity plans to reflect changing business environments and emerging threats.",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section id="framework" className="relative py-24 overflow-hidden bg-bgLight">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-wider uppercase text-brandAccent">Core Methodology</h2>
          <h3 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark">Resilience Framework Pillars</h3>
          <p className="text-lg text-gray-600">
            A successful Business Continuity Management System (BCMS) relies on proactive planning and a deep understanding of critical organizational operations.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${pillar.color} group-hover:scale-110 transition-transform`}>
                  {pillar.icon}
                </div>
                <h4 className="mb-3 text-xl font-bold text-brandDark">{pillar.title}</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img 
                src={pillarsImage} 
                alt="Resilience Framework Analysis" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-brandDark/80 to-transparent">
                <div className="text-white">
                  <p className="mb-2 text-xl font-bold">Data-Driven Decisions</p>
                  <p className="text-sm text-white/80">Our framework is built on rigorous analysis and real-world testing scenarios.</p>
                </div>
              </div>
            </div>
            
            {/* Abstract shapes */}
            <div className="absolute w-64 h-64 rounded-full -z-10 top-1/2 -right-12 bg-brandAccent/10 blur-3xl"></div>
            <div className="absolute w-64 h-64 rounded-full -z-10 -bottom-12 -left-12 bg-brandPrimary/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
