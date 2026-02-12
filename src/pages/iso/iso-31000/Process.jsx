import React from 'react';
import { Target, FileSearch, PieChart, RefreshCw } from 'lucide-react';

const Process = () => {
  const processes = [
    {
      title: "Context Establishment",
      description: "We define the external and internal parameters to be considered when managing risk for your specific industry.",
      icon: <Target className="w-8 h-8 text-brandGold" />
    },
    {
      title: "Detailed Assessment",
      description: "Our team performs a deep dive into your operations to uncover hidden vulnerabilities and potential opportunities.",
      icon: <FileSearch className="w-8 h-8 text-brandGold" />
    },
    {
      title: "Strategic Reporting",
      description: "We provide management with a clear, visual risk profile to guide high-level investment and resource allocation.",
      icon: <PieChart className="w-8 h-8 text-brandGold" />
    },
    {
      title: "Monitoring And Review",
      description: "Establishing a continuous cycle of risk oversight to adapt to new threats in a changing market.",
      icon: <RefreshCw className="w-8 h-8 text-brandGold" />
    }
  ];

  return (
    <section id="process" className="relative py-24 overflow-hidden bg-brandNavy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://public.youware.com/users-website-assets/prod/bc9113de-c4e7-4bd4-b9f7-4a2e13ffb810/6c785bb973884185b5af9390ff3fb0b7.jpg" 
          alt="Strategic Process" 
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase text-brandGold">How We Work</h2>
          <h3 className="mb-6 text-3xl font-bold text-white md:text-4xl font-heading">
            RiskMan’s Strategic Process
          </h3>
          <p className="text-lg text-gray-300">
            We help organizations build a culture of risk awareness that permeates every department, ensuring long-term stability and sustainable growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {processes.map((process, index) => (
            <div key={index} className="flex gap-6 p-6 transition-colors duration-300 border rounded-xl bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10">
              <div className="flex items-center justify-center w-16 h-16 border rounded-full shrink-0 bg-brandDark/50 border-brandGold/30">
                {process.icon}
              </div>
              <div>
                <h4 className="mb-3 text-xl font-bold text-white">{process.title}</h4>
                <p className="leading-relaxed text-gray-300">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
