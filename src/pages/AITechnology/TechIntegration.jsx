import React, { useState, useEffect } from 'react';
import { Cloud, Database, Wifi, Share2, Lock, Server, ArrowRight, Circle } from 'lucide-react';

import tech1Img from "../../assets/images/ai-technology/tech-1.jpg";
import tech2Img from "../../assets/images/ai-technology/tech-2.jpg";
import tech3Img from "../../assets/images/ai-technology/tech-3.png";
import tech4Img from "../../assets/images/ai-technology/tech-4.jpg";
import tech5Img from "../../assets/images/ai-technology/tech-5.jpg";
import tech6Img from "../../assets/images/ai-technology/tech-6.jpg";

const TechIntegration = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const features = [
    {
      id: "01",
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud-Native",
      fullTitle: "Cloud-Native Platforms",
      description: "Leverage scalable, secure cloud infrastructure for worldwide deployment, ensuring high availability and rapid elasticity on demand.",
      image: tech1Img
    },
    {
      id: "02",
      icon: <Database className="w-5 h-5" />,
      title: "Blockchain",
      fullTitle: "Blockchain Audit Trails",
      description: "Secure immutable records of all risk events and decisions, providing tamper-proof evidence for audits and stakeholders.",
      image: tech2Img
    },
    {
      id: "03",
      icon: <Wifi className="w-5 h-5" />,
      title: "IoT Monitor",
      fullTitle: "IoT Risk Monitoring",
      description: "Integrate IoT sensors for real-time operational insights, detecting physical and supply chain risks instantly across assets.",
      image: tech3Img
    },
    {
      id: "04",
      icon: <Share2 className="w-5 h-5" />,
      title: "API Ecosystem",
      fullTitle: "API-Driven Ecosystems",
      description: "Enable frictionless third-party integrations, creating a unified risk ecosystem that adapts to evolving business partnerships.",
      image: tech4Img
    },
    {
      id: "05",
      icon: <Lock className="w-5 h-5" />,
      title: "Cyber AI",
      fullTitle: "Cybersecurity AI Layers",
      description: "Fortify defenses with AI-enhanced firewalls and anomaly detection, neutralizing advanced persistent threats proactively.",
      image: tech5Img
    },
    {
      id: "06",
      icon: <Server className="w-5 h-5" />,
      title: "Data Lakes",
      fullTitle: "Data Lake Optimization",
      description: "Centralize disparate data sources into performant lakes, fueling AI analytics with clean, governed enterprise intelligence.",
      image: tech6Img
    }
  ];

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setActiveIndex((prev) => (prev + 1) % features.length);
          return 0;
        }
        return oldProgress + 1; // 1% every 50ms = 5 seconds total
      });
    }, 50);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleManualClick = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <section id="technology" className="relative overflow-hidden text-white py-14 md:py-20 bg-brandDark">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brandPrimary/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brandAccent/5 rounded-full blur-[100px] -ml-20 -mb-20"></div>

      <div className="container relative z-10 px-6 mx-auto lg:px-12">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* Left Column: Navigation Loop */}
          <div className="w-full lg:w-5/12">
            <div className="mb-10">
              <h2 className="mb-3 text-sm font-bold tracking-widest uppercase text-brandAccent">Future-Ready Infrastructure</h2>
              <h3 className="text-3xl font-bold leading-tight text-white md:text-4xl font-heading">
                Advanced Technology Integration
              </h3>
            </div>

            <div className="relative space-y-3">
              {/* Connecting Line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-white/10 z-0"></div>

              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => handleManualClick(index)}
                  className={`relative z-10 w-full flex items-center gap-6 p-3 rounded-xl transition-all duration-300 group text-left ${
                    activeIndex === index 
                      ? 'bg-white/10 border border-white/10 shadow-lg' 
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {/* Circular Indicator */}
                  <div className="relative flex items-center justify-center flex-shrink-0 w-12 h-12">
                    {/* Progress Ring for Active Item */}
                    {activeIndex === index && (
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="24" cy="24" r="23" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                        <circle 
                          cx="24" cy="24" r="23" 
                          fill="none" 
                          stroke="#FFC000" 
                          strokeWidth="2" 
                          strokeDasharray="145"
                          strokeDashoffset={145 - (145 * progress) / 100}
                          className="transition-all duration-100 ease-linear"
                        />
                      </svg>
                    )}
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      activeIndex === index ? 'bg-brandAccent text-brandDark' : 'bg-white/10 text-gray-400 group-hover:text-white'
                    }`}>
                      {feature.icon}
                    </div>
                  </div>

                  <div>
                    <h4 className={`font-bold text-base transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {feature.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content Display (Compact Horizontal Card) */}
          <div className="lg:w-7/12 w-full relative min-h-[350px] flex items-center">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  activeIndex === index 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 translate-x-8 z-0 pointer-events-none'
                }`}
              >
                <div className="bg-surfaceDark/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[450px] md:max-h-[350px]">
                  {/* Image Section - Left Side (or Top on mobile) */}
                  <div className="relative flex-shrink-0 w-full h-48 overflow-hidden md:w-5/12 md:h-full">
                    <img 
                      src={feature.image} 
                      alt={feature.fullTitle} 
                      className="object-cover w-full h-full transition-transform duration-700 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surfaceDark/80 md:bg-gradient-to-l"></div>
                    
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-black/40 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                        <Circle size={6} fill="#4ade80" className="text-green-400 animate-pulse" />
                        Active
                      </div>
                    </div>
                  </div>

                  {/* Content Section - Right Side */}
                  <div className="flex flex-col justify-center w-full p-6 md:p-8 md:w-7/12 bg-surfaceDark">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brandAccent/10 text-brandAccent">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold leading-tight text-white md:text-2xl">{feature.fullTitle}</h3>
                    </div>
                    
                    <p className="mb-6 text-sm leading-relaxed text-gray-300 md:text-base">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/10">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider">Security</span>
                        <span className="text-xs font-bold text-brandAccent">Enterprise Grade</span>
                      </div>
                      
                      <button className="flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-brandAccent group/btn">
                        Learn more <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechIntegration;
