import React, { useState } from 'react';
import { 
  Shield, 
  Brain, 
  Database, 
  Activity, 
  CheckCircle, 
  FileText, 
  Users, 
  Search, 
  Lock, 
  Globe, 
  ChevronDown, 
  ChevronUp,
  ArrowRight
} from 'lucide-react';

// Import generated images
import heroImage from "../../../assets/images/iso/hero-ai.png"
import governanceImage from '../../../assets/images/iso/governance-meeting.png';
import riskImage from '../../../assets/images/iso/risk-security.png';
import dataImage from '../../../assets/images/iso/data-charts.png';
import innovationImage from '../../../assets/images/iso/innovation-future.png';
import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';

const ISO42001 = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">

        <Helmet>
                <title>The International Organization for Standardization 42001 Services | RiskMan</title>
                <meta
                    name="description"
                    content="Lead the AI revolution responsibly with RiskMan’s ISO 42001 services. We provide the governance framework for ethical and secure organizational AI management."
                />
                <link
                    rel="canonical"
                    href="https://www.riskman.in/iso-42001"
                />
            </Helmet>
      <HeroSection />
      <PillarsSection />
      <RoadmapSection />
      <BenefitsSection />
      <CTASection />
      <FAQSection />
    </div>
  );
};

const HeroSection = () => {
  const navigator=useNavigate()
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Governance Background" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-brandDark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center lg:px-20">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brandAccent/30 bg-brandAccent/10 backdrop-blur-sm">
          <span className="text-sm font-semibold tracking-wider uppercase text-brandAccent">ISO 42001 Certified</span>
        </div>
        
        <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl font-heading animate-float">
          Governance for the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">
            Age Of AI
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-200 md:text-xl">
          RiskMan helps organizations implement ISO 42001, the world’s first AI management system standard, ensuring ethical, transparent, and secure AI development across the entire enterprise.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button onClick={()=>navigator("/services/iso-certifications")} className="relative px-8 py-4 overflow-hidden font-bold transition-all duration-300 transform rounded-lg shadow-lg group bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-brandAccent/50">
            <span className="relative z-10 flex items-center gap-2">
              Explore All ISOs
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          <button onClick={()=>navigator("/contact")} className="px-8 py-4 font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg group hover:bg-white/10 backdrop-blur-sm">
            Consult Our Team
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 z-20 w-full h-24 bg-gradient-to-t from-bgLight dark:from-bgDark to-transparent"></div>
    </section>
  );
};

const PillarsSection = () => {
  const pillars = [
    {
      title: "Ethical Oversight",
      desc: "Establish frameworks to ensure AI systems are unbiased, fair, and transparent in their automated decision-making.",
      icon: <Users className="w-8 h-8" />,
      image: governanceImage,
      color: "border-blue-500"
    },
    {
      title: "AI Risk Assessment",
      desc: "Identify unique vulnerabilities in AI models, including data poisoning, algorithmic bias, and security exploits.",
      icon: <Shield className="w-8 h-8" />,
      image: riskImage,
      color: "border-red-500"
    },
    {
      title: "Data Quality Management",
      desc: "Ensure the data used to train and operate AI systems is accurate, secure, and legally compliant.",
      icon: <Database className="w-8 h-8" />,
      image: dataImage,
      color: "border-green-500"
    },
    {
      title: "Performance Monitoring",
      desc: "Implement continuous tracking to ensure AI systems behave as intended and do not \"drift\" over time.",
      icon: <Activity className="w-8 h-8" />,
      image: innovationImage, // Reusing innovation image for monitoring context
      color: "border-purple-500"
    }
  ];

  return (
    <section className="relative py-14 md:py-20  bg-bgLight dark:bg-bgDark">
      <div className="container px-6 lg:px-20">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            AI Management Pillars
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Managing Artificial Intelligence requires a specialized framework that addresses the unique risks, transparency needs, and ethical considerations of the technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="relative overflow-hidden transition-all duration-500 bg-white border border-gray-100 shadow-xl group dark:bg-surfaceDark rounded-2xl hover:shadow-2xl dark:border-gray-800"
            >
              <div className="absolute top-0 left-0 w-1 h-full transition-opacity duration-300 opacity-0 bg-gradient-to-b from-brandAccent to-brandPrimary group-hover:opacity-100"></div>
              
              <div className="flex flex-col h-full md:flex-row">
                <div className="relative overflow-hidden md:w-2/5">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-colors duration-300 bg-brandPrimary/20 group-hover:bg-transparent"></div>
                </div>
                
                <div className="flex flex-col justify-center p-8 md:w-3/5">
                  <div className="p-3 mb-4 transition-transform duration-300 rounded-lg bg-brandLight dark:bg-brandDark/50 w-fit text-brandPrimary dark:text-brandAccent group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {pillar.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RoadmapSection = () => {
  const steps = [
    {
      title: "AI Scoping",
      desc: "Identifying all AI systems and use cases within the organization that fall under the management framework.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Policy Development",
      desc: "Creating high-level AI policies that align with organizational values and emerging international legal requirements.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Internal Audit",
      desc: "Conducting rigorous reviews of AI development and deployment processes to identify gaps in security or ethics.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Stakeholder Reporting",
      desc: "Providing leadership with clear insights into AI performance, compliance status, and risk mitigation strategies.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <section className="relative py-14 md:py-20 overflow-hidden bg-white dark:bg-surfaceDark">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
        <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 lg:px-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              The Implementation Roadmap
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              RiskMan simplifies the complex task of AI governance by breaking it down into manageable stages of development and organizational oversight.
            </p>
            <div className="relative overflow-hidden border-4 border-white shadow-2xl rounded-2xl dark:border-brandDark/50">
              <img 
                src={dataImage} 
                alt="Implementation Roadmap" 
                className="w-full h-auto transition-transform duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brandPrimary/40 to-transparent"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="z-10 flex items-center justify-center w-12 h-12 transition-all duration-300 border-2 rounded-full shadow-lg bg-brandLight dark:bg-brandDark border-brandAccent text-brandPrimary dark:text-brandAccent group-hover:bg-brandAccent group-hover:text-brandDark">
                      {step.icon}
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 my-2 group-hover:bg-brandAccent/50 transition-colors"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-8">
                    <h3 className="mb-2 text-xl font-bold transition-colors text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Trust And Transparency",
      desc: "Build confidence with users, employees, and regulators regarding your organization's use of AI.",
      icon: <Users className="w-10 h-10" />,
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Innovation Security",
      desc: "Protect your intellectual property and AI investments from emerging cyber threats and model theft.",
      icon: <Lock className="w-10 h-10" />,
      bg: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
      title: "Regulatory Readiness",
      desc: "Stay ahead of global AI laws, such as the EU AI Act, and avoid costly non-compliance.",
      icon: <Globe className="w-10 h-10" />,
      bg: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  return (
    <section className=" py-14 md:py-20 bg-bgLight dark:bg-bgDark">
      <div className="container px-6 lg:px-20">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
            Strategic Benefits for Organizations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Responsible AI governance allows organizations to innovate with confidence while protecting themselves from the unique pitfalls of automated technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl ${benefit.bg} border border-transparent hover:border-brandAccent/30 transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="mb-6 text-brandPrimary dark:text-brandAccent">
                {benefit.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-brandDark dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative  py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={innovationImage} 
          alt="Future AI" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-brandNavy/90 mix-blend-multiply"></div>
      </div>
      
      <div className="container relative z-10 px-6 lg:px-20 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl font-heading">
          Future-Proof Your AI Initiatives
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-200">
          Implement a robust AI Management System with RiskMan and lead your industry in responsible and secure innovation.
        </p>
        <button onClick={()=>navigator("/contact")}className="px-10 py-4 bg-brandAccent text-brandDark font-bold text-lg rounded-full hover:bg-brandGold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,192,0,0.5)]">
          Request AI Insights
        </button>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "What is ISO 42001?",
      a: "The international standard for establishing, implementing, and maintaining an Artificial Intelligence Management System (AIMS)."
    },
    {
      q: "Who needs this certification?",
      a: "Any organization developing, providing, or using AI-based products or services in their operations."
    },
    {
      q: "Does it cover Generative AI?",
      a: "Yes, the framework is designed to be applicable to all types of AI, including LLMs."
    },
    {
      q: "How does it handle AI bias?",
      a: "It requires formal processes for identifying and mitigating bias in both training data and algorithms."
    },
    {
      q: "Is it compatible with ISO 27001?",
      a: "Yes, it is designed to integrate seamlessly with ISO 27001 and other management standards."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-14  md:py-20 bg-white dark:bg-surfaceDark">
      <div className="container max-w-4xl px-6 lg:px-20 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl font-heading text-brandDark dark:text-white">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="overflow-hidden transition-all duration-300 border border-gray-200 rounded-lg dark:border-gray-700 hover:border-brandAccent/50"
            >
              <button
                className="flex items-center justify-between w-full px-6 py-5 text-left bg-gray-50 dark:bg-bgDark/50 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-brandDark dark:text-gray-200">
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brandAccent" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-5 text-gray-600 bg-white dark:bg-surfaceDark dark:text-gray-400">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ISO42001;
