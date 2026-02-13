import React from 'react';
import { Brain, LineChart, ShieldAlert, LayoutDashboard, Cpu, Scale, Plug, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Predictive Risk Analytics",
      description: "Harness machine learning to forecast emerging threats, enabling proactive mitigation and 40% faster risk identification.",
      color: "text-purple-400",
      border: "hover:border-purple-500/50",
      glow: "group-hover:shadow-purple-500/20"
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "Automated Threat Detection",
      description: "Deploy AI algorithms that scan vast datasets in real-time, flagging anomalies and vulnerabilities instantly.",
      color: "text-red-400",
      border: "hover:border-red-500/50",
      glow: "group-hover:shadow-red-500/20"
    },
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Executive Dashboards",
      description: "Access intuitive, real-time visualizations tailored for boardrooms, turning complex risk data into clear insights.",
      color: "text-blue-400",
      border: "hover:border-blue-500/50",
      glow: "group-hover:shadow-blue-500/20"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Custom AI Models",
      description: "Scale bespoke models to your industry verticals, from finance to manufacturing, ensuring superior accuracy.",
      color: "text-emerald-400",
      border: "hover:border-emerald-500/50",
      glow: "group-hover:shadow-emerald-500/20"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Bias Mitigation Tools",
      description: "Embed automated fairness checks to eliminate AI biases, safeguarding decisions and enhancing compliance.",
      color: "text-yellow-400",
      border: "hover:border-yellow-500/50",
      glow: "group-hover:shadow-yellow-500/20"
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: "Integration Simplicity",
      description: "Seamlessly connects with existing systems via APIs, minimizing disruption while maximizing investments.",
      color: "text-pink-400",
      border: "hover:border-pink-500/50",
      glow: "group-hover:shadow-pink-500/20"
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-14 md:py-20 bg-bgLight">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-5"></div>
      
      <div className="container relative z-10 px-6 mx-auto lg:px-20">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-3 text-sm font-bold tracking-widest uppercase text-brandPrimary">Our Expertise</h2>
          <h3 className="mb-6 text-4xl font-bold md:text-5xl font-heading text-brandDark">
            AI-Powered Risk Intelligence
          </h3>
          <p className="text-lg text-gray-600">
            Transform raw data into strategic foresight with RiskMan's AI ecosystem.
          </p>
        </div>

        {/* Connected Grid Layout - No Gaps Feeling */}
        <div className="grid gap-0 overflow-hidden bg-white border border-gray-100 shadow-2xl md:grid-cols-2 lg:grid-cols-3 rounded-3xl">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group p-10 border-b border-r border-gray-100 hover:bg-gray-50 transition-all duration-300 relative ${service.border} hover:z-10`}
            >
              {/* Hover Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] ${service.glow}`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                  {service.icon}
                </div>
                
                <h4 className="mb-3 text-xl font-bold transition-colors text-brandDark group-hover:text-brandPrimary">
                  {service.title}
                </h4>
                
                <p className="mb-6 leading-relaxed text-gray-500 transition-colors group-hover:text-gray-700">
                  {service.description}
                </p>
                
                <a href="#" className="inline-flex items-center text-sm font-bold tracking-wider text-gray-400 uppercase transition-colors group-hover:text-brandPrimary">
                  Learn More <ArrowUpRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
