// import React, { useState } from 'react';
// import { 
//   Brain, 
//   TrendingUp, 
//   Zap, 
//   BarChart3, 
//   Cpu, 
//   Shield,
//   Cloud,
//   Link2,
//   Database,
//   Lock,
//   GitBranch,
//   Activity,
//   FileCheck,
//   Network,
//   Eye,
//   Lightbulb,
//   CheckCircle,
//   ChevronDown,
//   ArrowRight,
//   ShieldCheck,
// } from 'lucide-react';

// const AiTechnology = () => {
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   const aiFeatures = [
//     {
//       icon: <TrendingUp className="w-7 h-7" />,
//       title: "Predictive Risk Analytics",
//       description: "Harness machine learning to forecast emerging threats, enabling proactive mitigation and 40% faster risk identification across enterprises."
//     },
//     {
//       icon: <Zap className="w-7 h-7" />,
//       title: "Automated Threat Detection",
//       description: "Deploy AI algorithms that scan vast datasets in real-time, flagging anomalies and vulnerabilities before they impact operations."
//     },
//     {
//       icon: <BarChart3 className="w-7 h-7" />,
//       title: "Executive Dashboards",
//       description: "Access intuitive, real-time visualizations tailored for boardrooms, turning complex risk data into clear, actionable executive insights."
//     },
//     {
//       icon: <Cpu className="w-7 h-7" />,
//       title: "Custom AI Models",
//       description: "Scale bespoke models to your industry verticals, from finance to manufacturing, ensuring relevance and superior predictive accuracy."
//     },
//     {
//       icon: <Shield className="w-7 h-7" />,
//       title: "Bias Mitigation Tools",
//       description: "Embed automated fairness checks to eliminate AI biases, safeguarding decisions and enhancing compliance in regulated environments."
//     },
//     {
//       icon: <Link2 className="w-7 h-7" />,
//       title: "Integration Simplicity",
//       description: "Seamlessly connects with existing systems via APIs, minimizing disruption while maximizing your current tech investments."
//     }
//   ];

//   const techFeatures = [
//     {
//       icon: <Cloud className="w-7 h-7" />,
//       title: "Cloud-Native Platforms",
//       description: "Leverage scalable, secure cloud infrastructure for worldwide deployment, ensuring high availability and rapid elasticity on demand."
//     },
//     {
//       icon: <GitBranch className="w-7 h-7" />,
//       title: "Blockchain Audit Trails",
//       description: "Secure immutable records of all risk events and decisions, providing tamper-proof evidence for audits and stakeholders."
//     },
//     {
//       icon: <Activity className="w-7 h-7" />,
//       title: "IoT Risk Monitoring",
//       description: "Integrate IoT sensors for real-time operational insights, detecting physical and supply chain risks instantly across assets."
//     },
//     {
//       icon: <Network className="w-7 h-7" />,
//       title: "API-Driven Ecosystems",
//       description: "Enable frictionless third-party integrations, creating a unified risk ecosystem that adapts to evolving business partnerships."
//     },
//     {
//       icon: <Lock className="w-7 h-7" />,
//       title: "Cybersecurity AI Layers",
//       description: "Fortify defenses with AI-enhanced firewalls and anomaly detection, neutralizing advanced persistent threats proactively."
//     },
//     {
//       icon: <Database className="w-7 h-7" />,
//       title: "Data Lake Optimization",
//       description: "Centralize disparate data sources into performant lakes, fueling AI analytics with clean, governed enterprise intelligence."
//     }
//   ];

//   const nistFramework = [
//     {
//       icon: <FileCheck className="w-6 h-6" />,
//       title: "Govern Function",
//       description: "Establish AI governance policies, ethics boards, and accountability measures to align deployments with organizational values."
//     },
//     {
//       icon: <Network className="w-6 h-6" />,
//       title: "Map Function",
//       description: "Catalog AI risks across design, development, and operations, creating comprehensive inventories for targeted oversight."
//     },
//     {
//       icon: <BarChart3 className="w-6 h-6" />,
//       title: "Measure Function",
//       description: "Apply NIST metrics to quantify bias, robustness, and reliability, providing data-driven validation of AI performance."
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Manage Function",
//       description: "Deploy controls for security, privacy, and explainability, ensuring resilient AI systems in production environments."
//     },
//     {
//       icon: <Eye className="w-6 h-6" />,
//       title: "Continuous Monitoring",
//       description: "Implement feedback loops for ongoing risk assessment, adapting to new threats and regulatory evolutions dynamically."
//     },
//     {
//       icon: <CheckCircle className="w-6 h-6" />,
//       title: "Compliance Acceleration",
//       description: "Streamline NIST certification with pre-built frameworks, reducing audit timelines by up to 50% for enterprises."
//     }
//   ];

//   const faqs = [
//     {
//       question: "How does RiskMan ensure AI reliability?",
//       answer: "We apply rigorous testing, bias detection, and continuous monitoring to maintain AI model accuracy and trustworthiness."
//     },
//     {
//       question: "What is the NIST AI RMF, and why use it?",
//       answer: "NIST's AI Risk Management Framework provides a structured approach to managing AI risks, essential for compliance and strategic governance."
//     },
//     {
//       question: "Can RiskMan integrate AI with existing systems?",
//       answer: "Yes, our API-first platforms ensure seamless integration with ERP, CRM, and legacy systems for minimal disruption."
//     },
//     {
//       question: "How does RiskMan address AI bias and ethics?",
//       answer: "Through NIST-aligned govern and measure functions, we embed fairness audits and ethical guidelines from deployment onward."
//     },
//     {
//       question: "Is RiskMan's technology scalable for global operations?",
//       answer: "Absolutely; our cloud-native solutions scale effortlessly across regions, supporting multinational compliance needs."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      
//       {/* <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-brandDark via-brandPrimary to-brandNavy">
      
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brandAccent/15 rounded-full blur-3xl animate-float"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brandGold/10 rounded-full blur-3xl animate-evaporate"></div>
//           <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl animate-pulse-custom"></div>
//         </div>

        
//         <div className="absolute inset-0 opacity-10">
//           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
//                 <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
//                 <circle cx="0" cy="0" r="1" fill="white"/>
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#tech-grid)" />
//           </svg>
//         </div>

//         <div className="container relative z-10">
//           <div className="max-w-4xl py-20">
//             <div className="flex items-center gap-3 mb-6 animate-[fadeInUp_0.8s_ease-out]">
//               <Brain className="w-12 h-12 text-brandAccent" />
//               <span className="text-lg font-semibold tracking-wider uppercase text-brandAccent">AI-Powered Solutions</span>
//             </div>
//             <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
//               Harness AI for Enterprise Risk Mastery
//             </h1>
//             <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
//               Elevate your risk strategy with RiskMan's AI-driven technology solutions. Achieve precision, foresight, and compliance in a dynamic threat landscape seamlessly integrated for your organization.
//             </p>
//             <div className="flex flex-wrap gap-4 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
//               <a 
//                 href="#services" 
//                 className="px-8 py-4 font-semibold transition-all duration-300 rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-1 hover:shadow-2xl hover:shadow-brandAccent/30"
//               >
//                 Explore Our Services
//               </a>
//               <a 
//                 href="#contact" 
//                 className="px-8 py-4 font-semibold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-brandNavy hover:-translate-y-1"
//               >
//                 Contact Us Today
//               </a>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       <section className="relative flex items-center min-h-screen pt-20 overflow-hidden bg-brandDark">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="https://public.youware.com/users-website-assets/prod/0080e600-c480-4fa5-a126-d63c7c3e8eda/50aaad3760b54dea81a1247643a70a79.jpg" 
//           alt="AI Technology Background" 
//           className="object-cover w-full h-full opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-brandDark via-brandDark/90 to-brandDark/60"></div>
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
//       </div>

//       <div className="container relative z-10 grid items-center gap-12 px-4 mx-auto md:px-6 lg:grid-cols-2">
//         <div className="space-y-8 animate-fade-in-up">
//           <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest uppercase border rounded-full bg-brandAccent/10 border-brandAccent/20 text-brandAccent">
//             <span className="w-2 h-2 rounded-full bg-brandAccent animate-pulse"></span>
//             AI-Driven Risk Mastery
//           </div>
          
//           <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl font-heading">
//             Harness AI for <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandAccent to-brandGold">
//               Enterprise Risk Mastery
//             </span>
//           </h1>
          
//           <p className="max-w-xl pl-6 text-lg leading-relaxed text-gray-300 border-l-4 border-brandAccent">
//             Elevate your risk strategy with RiskMan's AI-driven technology solutions. Achieve precision, foresight, and compliance in a dynamic threat landscape seamlessly integrated for your organization.
//           </p>
          
//           <div className="flex flex-col gap-4 pt-4 sm:flex-row">
//             <a 
//               href="#services" 
//               className="group bg-brandAccent hover:bg-brandGold text-brandDark font-bold py-4 px-8 rounded-sm transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,192,0,0.3)]"
//             >
//               Explore Our Services
//               <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
//             </a>
//             <a 
//               href="#contact" 
//               className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-white transition-all bg-transparent border rounded-sm group border-white/30 hover:border-brandAccent hover:text-brandAccent backdrop-blur-sm"
//             >
//               Contact Us Today
//             </a>
//           </div>

//           {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
//             <div className="text-center sm:text-left">
//               <div className="mb-1 text-2xl font-bold text-brandAccent">40%</div>
//               <div className="text-xs tracking-wider text-gray-400 uppercase">Faster Risk ID</div>
//             </div>
//             <div className="text-center sm:text-left">
//               <div className="mb-1 text-2xl font-bold text-brandAccent">100%</div>
//               <div className="text-xs tracking-wider text-gray-400 uppercase">NIST Compliant</div>
//             </div>
//             <div className="text-center sm:text-left">
//               <div className="mb-1 text-2xl font-bold text-brandAccent">24/7</div>
//               <div className="text-xs tracking-wider text-gray-400 uppercase">Real-time Watch</div>
//             </div>
//           </div> */}
//         </div>

//         <div className="relative hidden lg:block">
//           <div className="relative w-full max-w-lg mx-auto aspect-square">
           
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brandPrimary/30 to-brandAccent/10 blur-3xl animate-pulse-custom"></div>
            
//             <div className="relative z-10 grid grid-cols-2 gap-4 p-4">
//               <div className="p-6 transform translate-y-8 border rounded-lg shadow-xl bg-surfaceDark/80 backdrop-blur-md border-white/10 animate-float" style={{animationDelay: '0s'}}>
//                 <ShieldCheck className="w-10 h-10 mb-4 text-brandAccent" />
//                 <h3 className="mb-2 font-bold text-white">Automated Defense</h3>
//                 <p className="text-sm text-gray-400">Real-time threat neutralization with AI precision.</p>
//               </div>
              
//               <div className="p-6 transform -translate-y-4 border rounded-lg shadow-xl bg-surfaceDark/80 backdrop-blur-md border-white/10 animate-float" style={{animationDelay: '1s'}}>
//                 <Activity className="w-10 h-10 mb-4 text-blue-400" />
//                 <h3 className="mb-2 font-bold text-white">Predictive Analytics</h3>
//                 <p className="text-sm text-gray-400">Forecast emerging threats before they impact.</p>
//               </div>
              
//               <div className="p-6 transform translate-y-4 border rounded-lg shadow-xl bg-surfaceDark/80 backdrop-blur-md border-white/10 animate-float" style={{animationDelay: '2s'}}>
//                 <BarChart3 className="w-10 h-10 mb-4 text-green-400" />
//                 <h3 className="mb-2 font-bold text-white">Executive Insights</h3>
//                 <p className="text-sm text-gray-400">Clear visualizations for strategic decision making.</p>
//               </div>
              
//               <div className="p-6 transform -translate-y-8 rounded-lg shadow-xl bg-brandAccent animate-float" style={{animationDelay: '1.5s'}}>
//                 <div className="mb-2 text-lg font-bold text-brandDark">NIST Aligned</div>
//                 <p className="text-sm font-medium text-brandDark/80">Fully compliant framework integration for enterprise governance.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//       {/* AI-Powered Risk Intelligence Section */}
//       <section id="services" className="py-20 bg-white dark:bg-surfaceDark">
//         <div className="container">
//           <div className="max-w-4xl mx-auto mb-16 text-center">
//             <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
//               AI-Powered Risk Intelligence
//             </h2>
//             <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
//               Transform raw data into strategic foresight with RiskMan's AI ecosystem, empowering CXOs to lead with precision.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {aiFeatures.map((feature, index) => (
//               <div 
//                 key={index}
//                 className="relative p-8 overflow-hidden transition-all duration-500 border shadow-sm group bg-gradient-to-br from-white to-gray-50 dark:from-surfaceDark dark:to-bgDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl hover:-translate-y-3"
//               >
//                 {/* Gradient Overlay on Hover */}
//                 <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-brandAccent/5 to-brandPrimary/5 group-hover:opacity-100"></div>
                
//                 {/* Top Corner Accent */}
//                 <div className="absolute top-0 right-0 w-20 h-20 transition-all duration-500 rounded-bl-full bg-gradient-to-br from-brandAccent/20 to-transparent group-hover:w-32 group-hover:h-32"></div>

//                 <div className="relative z-10">
//                   {/* Icon */}
//                   <div className="flex items-center justify-center w-16 h-16 mb-6 transition-all duration-300 shadow-lg bg-gradient-to-br from-brandPrimary to-brandAccent rounded-xl group-hover:scale-110 group-hover:rotate-6">
//                     <div className="text-white">
//                       {feature.icon}
//                     </div>
//                   </div>

//                   <h3 className="mb-4 text-2xl font-bold transition-colors duration-300 font-heading text-brandDark dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                     {feature.title}
//                   </h3>
//                   <p className="leading-relaxed text-gray-600 dark:text-gray-300">
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Strategic Outcomes Banner */}
//       <section className="py-12 bg-gradient-to-r from-brandPrimary via-brandNavy to-brandDark">
//         <div className="container">
//           <div className="text-center">
//             <h3 className="mb-4 text-3xl font-bold text-white font-heading md:text-4xl">
//               Strategic Outcomes
//             </h3>
//             <p className="max-w-4xl mx-auto text-xl text-white/90">
//               Gain unified visibility, regulatory agility, and proven ROI, positioning your organization as a risk management leader.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Advanced Technology Integration Section */}
//       <section className="py-20 bg-bgLight dark:bg-bgDark">
//         <div className="container">
//           <div className="max-w-4xl mx-auto mb-16 text-center">
//             <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
//               Advanced Technology Integration
//             </h2>
//             <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
//               Embed cutting-edge tech into your risk framework with RiskMan, driving agility and resilience for global enterprises.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {techFeatures.map((feature, index) => (
//               <div 
//                 key={index}
//                 className="relative p-8 overflow-hidden transition-all duration-500 bg-white border group dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:shadow-2xl"
//               >
//                 {/* Left Accent Bar */}
//                 <div className="absolute top-0 bottom-0 left-0 w-1 transition-transform duration-500 origin-top transform scale-y-0 bg-gradient-to-b from-brandAccent to-brandGold group-hover:scale-y-100"></div>

//                 {/* Icon */}
//                 <div className="flex items-center justify-center mb-6 transition-all duration-300 w-14 h-14 bg-gradient-to-br from-brandAccent/20 to-brandGold/20 rounded-xl group-hover:scale-110">
//                   <div className="text-brandPrimary dark:text-brandAccent">
//                     {feature.icon}
//                   </div>
//                 </div>

//                 <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">
//                   {feature.title}
//                 </h3>
//                 <p className="leading-relaxed text-gray-600 dark:text-gray-300">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* NIST AI RMF Section */}
//       <section className="py-20 bg-white dark:bg-surfaceDark">
//         <div className="container">
//           <div className="max-w-4xl mx-auto mb-16 text-center">
//             <div className="inline-block px-4 py-2 mb-4 rounded-full bg-brandAccent/10">
//               <span className="text-sm font-semibold tracking-wide uppercase text-brandPrimary dark:text-brandAccent">NIST-Aligned Framework</span>
//             </div>
//             <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
//               AI Risk Management Framework (NIST-Aligned)
//             </h2>
//             <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
//               RiskMan operationalizes NIST AI RMF for trustworthy deployments, delivering compliance and innovation for CXO strategies.
//             </p>
//           </div>

//           <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
//             {nistFramework.map((item, index) => (
//               <div 
//                 key={index}
//                 className="relative p-6 transition-all duration-300 border-2 group bg-gradient-to-br from-white to-gray-50 dark:from-surfaceDark dark:to-bgDark rounded-xl border-borderLight dark:border-borderDark hover:border-brandAccent hover:shadow-xl"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 transition-transform duration-300 rounded-lg bg-gradient-to-br from-brandPrimary to-brandAccent group-hover:scale-110">
//                     <div className="text-white">
//                       {item.icon}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="mb-2 text-lg font-bold font-heading text-brandDark dark:text-white">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 text-center">
//             <div className="inline-block p-8 bg-gradient-to-r from-brandAccent/10 to-brandGold/10 rounded-2xl">
//               <h3 className="mb-3 text-2xl font-bold font-heading md:text-3xl text-brandDark dark:text-white">
//                 Proven Impact
//               </h3>
//               <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
//                 Mitigate vulnerabilities, build trust, and accelerate innovation with audit-ready, NIST-validated AI risk mastery.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-brandDark via-brandNavy to-brandPrimary">
//         {/* Background Decorations */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-brandAccent/20 blur-3xl animate-float"></div>
//           <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-brandGold/15 blur-3xl animate-pulse-custom"></div>
//         </div>

//         <div className="container relative z-10 text-center">
//           <h2 className="mb-6 text-4xl font-bold text-white font-heading md:text-5xl lg:text-6xl">
//             Accelerate Your AI Risk Transformation
//           </h2>
//           <p className="max-w-3xl mx-auto mb-10 text-xl leading-relaxed md:text-2xl text-white/90">
//             Unlock enterprise-wide resilience with RiskMan's AI and Technology expertise.
//           </p>
//           <a 
//             href="/contact" 
//             className="inline-block px-10 py-5 text-lg font-bold transition-all duration-300 rounded-lg bg-brandAccent hover:bg-brandGold text-brandDark hover:-translate-y-2 hover:shadow-2xl hover:shadow-brandAccent/40"
//           >
//             Get Started Now
//           </a>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-white dark:bg-surfaceDark">
//         <div className="container">
//           <div className="max-w-4xl mx-auto mb-16 text-center">
//             <h2 className="mb-6 text-4xl font-bold font-heading md:text-5xl text-brandDark dark:text-white">
//               Frequently Asked Questions
//             </h2>
//           </div>

//           <div className="max-w-4xl mx-auto space-y-4">
//             {faqs.map((faq, index) => (
//               <div 
//                 key={index}
//                 className="overflow-hidden transition-all duration-300 bg-white border dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-xl"
//               >
//                 <button
//                   onClick={() => toggleFaq(index)}
//                   className="flex items-center justify-between w-full px-8 py-6 text-left transition-colors duration-300 hover:bg-bgLight dark:hover:bg-bgDark/50"
//                 >
//                   <span className="pr-4 text-xl font-semibold font-heading text-brandDark dark:text-white">
//                     {faq.question}
//                   </span>
//                   <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brandAccent to-brandPrimary flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
//                     <ChevronDown className="w-5 h-5 text-white" />
//                   </div>
//                 </button>
//                 <div 
//                   className={`transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
//                 >
//                   <div className="px-8 pt-2 pb-6">
//                     <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Custom Animations Keyframes */}
//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AiTechnology;


import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import Services from "./Services";
import TechIntegration from "./TechIntegration";
import Framework from "./Framework";
import CTA from "./CTA";
import FAQ from "./FAQ";

const AiTechnology = () => {
  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>AI Technology & Innovation Services | RiskMan Consulting</title>
        <meta name="description" content="Harness the power of AI with RiskMan Consulting's technology services. We help enterprises integrate AI-driven risk management, automation, and intelligent frameworks for strategic advantage." />
        <link rel="canonical" href="https://www.riskman.in/services/ai-technology" />
      </Helmet>
      <HeroSection />
      <Services />
      <TechIntegration />
      <Framework />
      <CTA />
    
    </div>
  );
};

export default AiTechnology;
