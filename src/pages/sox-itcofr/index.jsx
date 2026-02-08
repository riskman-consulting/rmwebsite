import React, { useState } from 'react';
import { 
  CheckCircle, 
  FileText, 
  Search, 
  Map, 
  ClipboardList,
  Shield,
  Activity,
  Wrench,
  Eye,
  ChevronDown
} from 'lucide-react';

const SoxIcofrIfc = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: <FileText className="w-7 h-7" />,
      title: "Process Walkthroughs",
      description: "Conducting detailed end-to-end walkthroughs to understand as-is processes and identify inherent risks."
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "Gap Analysis",
      description: "Reviewing existing policies against leading practices to prioritize and remediate control of weaknesses."
    },
    {
      icon: <Map className="w-7 h-7" />,
      title: "Control Mapping",
      description: "Designing risk-control matrices that align organizational objectives with specific financial and operational safeguards."
    },
    {
      icon: <ClipboardList className="w-7 h-7" />,
      title: "Policy Formulation",
      description: "Developing Standard Operating Procedures (SOPs) to formalize internal controls and ensure consistent execution across departments."
    }
  ];

  const testingItems = [
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Design Effectiveness",
      description: "Evaluating whether established controls are appropriately designed to prevent or detect significant financial misstatements."
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Operating Effectiveness",
      description: "Performing detailed sample testing and data analytics to verify that controls function consistently in practice."
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "Remediation Support",
      description: "Collaborating with management to design actionable plans for correcting identified design or system deficiencies."
    },
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Continuous Monitoring",
      description: "Implementing sustainment phases to follow up on action points and monitor the long-term health of controls."
    }
  ];

  const faqs = [
    {
      question: "What is the primary difference between IFC and ICOFR?",
      answer: "IFC covers broader internal controls, while ICOFR specifically focuses on controls relevant to reliable financial reporting and statement preparation."
    },
    {
      question: "How does RiskMan approach SOX compliance?",
      answer: "We utilize a risk-based methodology, focusing on high-impact areas to ensure effective control designing and rigorous testing."
    },
    {
      question: "Does RiskMan help in designing IFC frameworks?",
      answer: "Yes, we specialize in designing IFC frameworks, including process documentation, risk identification, and control matrix development."
    },
    {
      question: "What industries do your SOX and IFC services cover?",
      answer: "We serve diverse sectors including manufacturing, technology, media, automobile, FMCG, and financial services."
    },
    {
      question: "How do we test the operating effectiveness of controls?",
      answer: "We use sampling and advanced data analytics to validate that controls operate as intended over a specific period."
    }
  ];

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary">
       
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-brandAccent/10 blur-3xl animate-float"></div>
          <div className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-brandGold/10 blur-3xl animate-evaporate"></div>
          <div className="absolute w-64 h-64 rounded-full top-1/2 right-1/3 bg-white/5 blur-2xl animate-pulse-custom"></div>
        </div>

       
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl py-20">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out]">
              Governance and Compliance Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              RiskMan delivers comprehensive SOX, ICOFR, and IFC solutions, strengthening internal controls and ensuring regulatory compliance through expert risk-based assessments and testing.
            </p>
            <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              <a 
                href="#services" 
                className="px-8 py-4 font-semibold transition-all duration-300 rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-2xl hover:shadow-brandAccent/30"
              >
                View Our Services
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-brandNavy hover:-translate-y-1"
              >
                Speak to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IFC Framework Design Section */}
      <section id="services" className="py-20 bg-white dark:bg-surfaceDark">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
              Internal Financial Controls (IFC) Framework Design
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              We assist organizations in building robust control environments by focusing on systematic documentation and gap identification to ensure financial integrity.
            </p>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative p-8 overflow-hidden transition-all duration-500 bg-white border shadow-sm group dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 w-1 h-0 transition-all duration-500 bg-gradient-to-b from-brandAccent to-brandGold group-hover:h-full"></div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 bg-gradient-to-br from-brandPrimary to-brandNavy rounded-xl group-hover:rotate-6 group-hover:scale-110">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      {/* <section className="py-6 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-yellow-900/20 dark:to-amber-900/20">
        <div className="container">
          <div className="p-8 border-l-4 rounded-lg shadow-lg bg-white/60 dark:bg-surfaceDark/60 backdrop-blur-sm border-brandAccent">
            <p className="flex items-center gap-3 text-lg font-semibold text-brandDark dark:text-white">
              <span className="text-2xl">📌</span>
              <span className="italic">
                Please note: SOX & ICOFR related sections will be added here after receiving related content reference.
              </span>
            </p>
          </div>
        </div>
      </section> */}

      {/* Control Testing Section */}
      <section className="py-20 bg-bgLight dark:bg-bgDark">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
              Rigorous Control Testing and Sustenance
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              RiskMan provides independent validation of your control environment, ensuring that IFC, SOX, and ICOFR frameworks operate effectively year-round.
            </p>
          </div>

          <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2">
            {testingItems.map((item, index) => (
              <div 
                key={index}
                className="relative p-10 overflow-hidden transition-all duration-500 bg-white border group dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:translate-x-3 hover:shadow-2xl"
              >
                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 transform scale-x-0 bg-gradient-to-r from-brandAccent to-brandPrimary group-hover:scale-x-100"></div>

                {/* Icon */}
                <div className="flex items-center justify-center mb-6 transition-transform duration-300 w-14 h-14 bg-gradient-to-br from-brandAccent/20 to-brandGold/20 rounded-xl group-hover:scale-110">
                  <div className="text-brandPrimary dark:text-brandAccent">
                    {item.icon}
                  </div>
                </div>

                <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandAccent/20 blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandGold/15 blur-3xl animate-pulse-custom"></div>
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white font-heading md:text-5xl lg:text-6xl">
            Secure Your Financial Future
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
            Strengthen your corporate governance and mitigate risks with RiskMan's specialized SOX, ICOFR, and IFC service offerings.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-5 text-lg font-bold transition-all duration-300 rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandAccent/40"
          >
            Send Us an Enquiry
          </a>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Custom Animations Keyframes (Add to your global CSS) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SoxIcofrIfc;