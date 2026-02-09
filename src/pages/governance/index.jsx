// import React, { useState, useMemo } from 'react';
// import { 
//   Shield, 
//   Lock, 
//   Heart, 
//   CheckCircle, 
//   AlertTriangle, 
//   FileText, 
//   Users, 
//   Globe, 
//   Scale, 
//   Briefcase, 
//   Eye, 
//   Gavel, 
//   BookOpen, 
//   Activity,
//   Megaphone,
//   Handshake,
//   Banknote,
//   FileKey,
//   Download,
//   Search,
//   Filter,
//   X
// } from 'lucide-react';

// // Policy Data Structure
// const policies = [
//   { 
//     id: 'corporate-governance',
//     title: "Corporate Governance Policy", 
//     category: "Core",
//     icon: Scale, 
//     filename: "Corporate_Governance_Policy.docx",
//     summary: "Establishing a comprehensive, structured, and enforceable governance framework.",
//     content: `
//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">1. Objective</h3>
//       <p class="mb-4">The objective of this Corporate Governance Policy (“Policy”) is to establish a comprehensive, structured, and enforceable governance framework for RiskMan Consulting LLP (“RiskMan” or “the Firm”). This Policy is intended to ensure effective leadership, clear accountability, ethical conduct, and protection of stakeholder interests.</p>
      
//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">2. Governance Approach</h3>
//       <p class="mb-4">RiskMan’s governance philosophy is founded on the following core principles:</p>
//       <ul class="list-disc pl-5 mb-4 space-y-2">
//         <li>Integrity and ethical leadership</li>
//         <li>Transparency and accountability</li>
//         <li>Prudent risk management</li>
//         <li>Compliance with applicable laws, regulations, and professional standards</li>
//         <li>Responsible stewardship of the Firm’s reputation and resources</li>
//       </ul>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">3. Governance Structure</h3>
//       <p class="mb-4"><strong>Partner-Led Governance Model:</strong> Ultimate authority and responsibility for the management, direction, and conduct of the Firm rests with the Partners.</p>
//       <p class="mb-4"><strong>Management Structure:</strong> The Partners may delegate operational responsibilities to senior management, subject to clearly defined authority limits and ongoing oversight.</p>
//     `
//   },
//   { 
//     id: 'code-of-ethics',
//     title: "Code of Ethics", 
//     category: "Core",
//     icon: BookOpen, 
//     filename: "Code_of_Ethics.docx",
//     summary: "Defining the ethical principles, values, and standards of conduct.",
//     content: `
//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">1. Objective</h3>
//       <p class="mb-4">The objective of this Code of Ethics (“Code”) is to define the ethical principles, values, and standards of conduct that guide all professional and business activities of RiskMan Consulting LLP. This Code aims to establish a common ethical framework, promote integrity, and protect the interests of all stakeholders.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">2. Core Ethical Principles</h3>
//       <div class="space-y-4">
//         <div>
//           <strong class="text-brandPrimary dark:text-brandAccent">Integrity:</strong> Act honestly, fairly, and transparently in all professional and business dealings.
//         </div>
//         <div>
//           <strong class="text-brandPrimary dark:text-brandAccent">Objectivity and Independence:</strong> Exercise professional judgment free from bias, conflict of interest, or undue influence.
//         </div>
//         <div>
//           <strong class="text-brandPrimary dark:text-brandAccent">Professional Competence:</strong> Maintain appropriate professional knowledge and skill, perform duties diligently.
//         </div>
//         <div>
//           <strong class="text-brandPrimary dark:text-brandAccent">Confidentiality:</strong> Protect confidential and proprietary information.
//         </div>
//         <div>
//           <strong class="text-brandPrimary dark:text-brandAccent">Accountability:</strong> Take responsibility for decisions and actions.
//         </div>
//       </div>
//     `
//   },
//   { 
//     id: 'risk-mgmt',
//     title: "Risk Management Policy", 
//     category: "Core",
//     icon: Activity, 
//     filename: "Risk_Management_Policy.docx", 
//     summary: "Framework for identifying, assessing, and mitigating risks.",
//     content: `
//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">1. Objective</h3>
//       <p class="mb-4">The objective of this Risk Management Policy is to establish a structured and proportionate framework through which RiskMan Consulting LLP identifies, evaluates, and manages risks arising from its professional services, client engagements, people, operations, and reputation.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">2. Risk Management Approach</h3>
//       <p class="mb-4">RiskMan recognises that primary risks arise from judgment, advice, people, and reputation. The Firm adopts a principles-based, engagement-centric, and governance-driven approach to risk management.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">3. Key Risk Areas</h3>
//       <ul class="list-disc pl-5 mb-4 space-y-2">
//         <li><strong>Engagement and Client Risk:</strong> Client integrity, scope, and expectations.</li>
//         <li><strong>Professional Judgment and Quality Risk:</strong> Flawed judgment, supervision, or competence.</li>
//         <li><strong>Independence and Conflict Risk:</strong> Conflicts of interest and objectivity.</li>
//         <li><strong>Compliance and Regulatory Risk:</strong> Non-compliance with laws and standards.</li>
//         <li><strong>Information, Data, and Cyber Risk:</strong> Confidentiality and data protection.</li>
//         <li><strong>Reputational Risk:</strong> Credibility, brand, and stakeholder trust.</li>
//       </ul>
//     `
//   },
//   { 
//     id: 'privacy',
//     title: "Data Privacy Policy", 
//     category: "Security",
//     icon: FileKey, 
//     filename: "Data_Privacy_Policy.docx", 
//     summary: "Protecting personal data and ensuring privacy compliance.",
//     content: `
//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">1. Objective</h3>
//       <p class="mb-4">The objective of this Information Security & Data Privacy Policy is to establish a unified and structured framework for safeguarding information assets and personal data handled by RiskMan Consulting LLP.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">2. Data Privacy Principles</h3>
//       <ul class="list-disc pl-5 mb-4 space-y-2">
//         <li>Information and personal data shall be protected against unauthorised access.</li>
//         <li>Personal data shall be processed lawfully, fairly, and transparently.</li>
//         <li>Data shall be collected only for legitimate and specified purposes.</li>
//         <li>Access to information shall be restricted on a need-to-know basis.</li>
//       </ul>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">3. Information Security Controls</h3>
//       <p class="mb-4">The Firm shall implement reasonable technical and organisational measures including role-based access controls, secure configuration, malware protection, and secure storage/transmission of sensitive information.</p>
//     `
//   },
//   { 
//     id: 'qa',
//     title: "Quality Assurance Policy", 
//     category: "Operations",
//     icon: CheckCircle, 
//     filename: "Quality_Assurance_Policy.docx", 
//     summary: "Maintaining high standards of quality in all our services.",
//     content: `
//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">1. Objective</h3>
//       <p class="mb-4">The objective of this Quality Assurance & Independence Policy is to establish a robust framework to ensure consistent delivery of high-quality professional services and maintenance of independence, objectivity, and professional judgment.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">2. Quality Approach</h3>
//       <p class="mb-4">RiskMan is committed to delivering services that meet client expectations, comply with standards, and uphold the Firm’s reputation. Quality is viewed as a collective responsibility.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">3. Engagement Execution</h3>
//       <p class="mb-4">All engagements shall be executed in accordance with approved methodologies, professional standards, and contractual terms. Appropriate supervision and review shall be maintained throughout the engagement lifecycle.</p>
//     `
//   },
//   { 
//     id: 'client-acceptance',
//     title: "Client Acceptance Policy", 
//     category: "Operations",
//     icon: Handshake, 
//     filename: "Client_Acceptance_Policy.docx", 
//     summary: "Guidelines for accepting new clients and engagements.",
//     content: `
//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">1. Objective</h3>
//       <p class="mb-4">The objective of this Client Acceptance & Continuance Policy is to establish a structured and risk-based framework for evaluating prospective clients and reassessing existing relationships.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">2. Client Acceptance Approach</h3>
//       <p class="mb-4">RiskMan shall only undertake engagements where:</p>
//       <ul class="list-disc pl-5 mb-4 space-y-2">
//         <li>The client’s integrity is consistent with the Firm’s ethical standards.</li>
//         <li>The Firm has the competence and capacity to deliver with quality.</li>
//         <li>Independence and objectivity can be maintained.</li>
//         <li>Engagement-related risks are within the Firm’s approved risk appetite.</li>
//       </ul>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">3. Assessment Criteria</h3>
//       <p class="mb-4">Assessments include client reputation, business activities, regulatory risks, conflicts of interest, and financial considerations.</p>
//     `
//   },
//   { 
//     id: 'compliance',
//     title: "Compliance Management Policy", 
//     category: "Compliance",
//     icon: Gavel, 
//     filename: "Compliance_Management_Policy.docx", 
//     summary: "Ensuring adherence to all applicable laws and regulations.",
//     content: `
//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">1. Objective</h3>
//       <p class="mb-4">The objective of this Compliance Management Policy is to establish a structured and effective framework for ensuring that RiskMan Consulting LLP complies with all applicable laws, regulations, professional standards, and internal policies.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">2. Compliance Approach</h3>
//       <p class="mb-4">RiskMan adopts a proactive, preventive, and risk-based approach. Compliance includes adherence to laws, professional standards, contractual obligations, and internal policies.</p>

//       <h3 class="text-xl font-bold mb-4 text-brandNavy dark:text-brandGold">3. Risk Assessment</h3>
//       <p class="mb-4">Compliance risks shall be assessed as part of the Firm’s overall risk management process, taking into account the nature of activities, regulatory expectations, and emerging developments.</p>
//     `
//   },
//   { title: "Whistleblower Policy", category: "Compliance", icon: Megaphone, filename: "Whistleblower_Policy.docx", summary: "Mechanism for reporting genuine concerns or grievances.", id: 'whistleblower' },
//   { title: "Information Security Policy", category: "Security", icon: Lock, filename: "Information_Security_Policy.docx", summary: "Ensuring the confidentiality, integrity, and availability of information.", id: 'infosec' },
//   { title: "Health and Safety", category: "HR", icon: Heart, filename: "Health_and_Safety_Policy.docx", summary: "Commitment to providing a safe and healthy working environment.", id: 'health-safety' },
//   { title: "Anti-Money Laundering Policy", category: "Compliance", icon: Banknote, filename: "Anti_Money_Laundering_Policy.docx", summary: "Preventing the use of our services for money laundering activities.", id: 'aml' },
//   { title: "Human Rights Policy", category: "HR", icon: Users, filename: "Human_Rights_Policy.docx", summary: "Respecting and promoting human rights in our operations.", id: 'human-rights' },
//   { title: "Anti-Bribery & Corruption", category: "Compliance", icon: Shield, filename: "Anti_Bribery_Corruption_Policy.docx", summary: "Zero tolerance approach towards bribery and corruption.", id: 'anti-bribery' },
//   { title: "POSH Policy", category: "HR", icon: AlertTriangle, filename: "POSH_Policy.docx", summary: "Prevention of Sexual Harassment at the workplace.", id: 'posh' },
//   { title: "Code of Conduct", category: "HR", icon: Briefcase, filename: "Code_of_Conduct.docx", summary: "Expected behavior and conduct for all employees and partners.", id: 'code-conduct' },
// ];

// const categories = ["All", "Core", "Compliance", "Security", "Operations", "HR"];

// const GovernancePage = () => {
//   const [selectedPolicy, setSelectedPolicy] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredPolicies = useMemo(() => {
//     return policies.filter(policy => {
//       const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                             policy.summary.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesCategory = activeCategory === "All" || policy.category === activeCategory;
//       return matchesSearch && matchesCategory;
//     });
//   }, [searchTerm, activeCategory]);

//   return (
//     <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden text-white bg-brandDark">
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brandDark/50"></div>
//         <div className="container relative z-10 px-5 py-24 mx-auto text-center">
//           <div className="inline-block px-4 py-1 mb-4 text-sm font-medium border rounded-full bg-brandGold/20 border-brandGold/30 text-brandGold animate-fade-in-up">
//             Corporate Standards
//           </div>
//           <h1 className="mb-6 text-4xl font-bold md:text-6xl font-heading text-brandGold animate-evaporate drop-shadow-lg">
//             Governance & Ethics
//           </h1>
//           <p className="max-w-3xl mx-auto text-xl font-light leading-relaxed md:text-2xl text-brandLight/90">
//             Our commitment to integrity, transparency, and ethical leadership is the foundation of our trust.
//           </p>
//         </div>
//         {/* Decorative bottom curve */}
//         <div className="absolute bottom-0 left-0 right-0 h-16 transition-colors duration-300 bg-bgLight dark:bg-bgDark" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
//       </div>

//       {/* Intro / Governance Approach */}
//       <section className="container px-5 py-16 mx-auto">
//         <div className="grid items-center gap-12 md:grid-cols-2">
//           <div>
//             <h2 className="relative inline-block mb-6 text-3xl font-bold font-heading text-brandNavy dark:text-white">
//               Our Governance Approach
//               <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-brandAccent"></span>
//             </h2>
//             <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
//               RiskMan’s governance philosophy is founded on integrity, ethical leadership, and prudent risk management. 
//               We recognize that strong governance is essential to maintaining client trust, regulatory confidence, and sustainable growth.
//             </p>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//               {[
//                 "Integrity & Leadership",
//                 "Transparency",
//                 "Risk Management",
//                 "Compliance",
//                 "Stewardship"
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center p-3 space-x-3 transition-all bg-white border rounded-lg shadow-sm dark:bg-surfaceDark border-borderLight dark:border-borderDark hover:shadow-md">
//                   <CheckCircle className="w-5 h-5 text-brandGold" />
//                   <span className="font-medium text-brandPrimary dark:text-brandLight">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative mt-8 md:mt-0">
//             <div className="absolute inset-0 rounded-full bg-brandAccent opacity-10 dark:opacity-20 blur-3xl animate-pulse-custom"></div>
//             <div className="relative p-8 transition-colors duration-300 bg-white border-t-4 shadow-xl dark:bg-surfaceDark rounded-2xl border-brandGold">
//               <h3 className="mb-4 text-2xl font-bold font-heading text-brandDark dark:text-white">Core Ethical Principles</h3>
//               <ul className="space-y-4">
//                 {[
//                   { title: "Integrity", desc: "Honest and transparent dealings." },
//                   { title: "Objectivity", desc: "Unbiased professional judgment." },
//                   { title: "Competence", desc: "Diligence and continuous learning." },
//                   { title: "Confidentiality", desc: "Protecting sensitive information." },
//                 ].map((item, idx) => (
//                   <li key={idx} className="flex items-start space-x-3 group">
//                     <div className="p-1 mt-1 transition-colors rounded-full bg-brandNavy dark:bg-brandDark group-hover:bg-brandPrimary">
//                       <div className="w-2 h-2 rounded-full bg-brandGold"></div>
//                     </div>
//                     <div>
//                       <strong className="block transition-colors text-brandPrimary dark:text-brandAccent group-hover:text-brandGold">{item.title}</strong>
//                       <span className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</span>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Policies Grid */}
//       <section className="relative py-16 transition-colors duration-300 bg-white dark:bg-surfaceDark/50">
//         <div className="container px-5 mx-auto">
//           <div className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
//               Policies & Frameworks
//             </h2>
//             <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
//               Our comprehensive suite of policies ensures we operate with the highest standards of conduct and compliance.
//             </p>
//           </div>

//           {/* Search and Filter */}
//           <div className="flex flex-col items-center justify-between max-w-6xl gap-6 mx-auto mb-12 md:flex-row">
//             {/* Categories */}
//             <div className="flex flex-wrap justify-center gap-2">
//               {categories.map(cat => (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveCategory(cat)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                     activeCategory === cat 
//                       ? "bg-brandPrimary text-white shadow-md transform scale-105" 
//                       : "bg-gray-100 dark:bg-surfaceDark text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             {/* Search Bar */}
//             <div className="relative w-full md:w-72">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <Search className="w-5 h-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 transition-colors bg-white border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-surfaceDark dark:text-white focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-brandGold"
//                 placeholder="Search policies..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Grid */}
//           {filteredPolicies.length > 0 ? (
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {filteredPolicies.map((policy, index) => (
//                 <div 
//                   key={index}
//                   className="relative flex flex-col p-6 overflow-hidden transition-all duration-300 border cursor-pointer group bg-bgLight dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:border-brandGold dark:hover:border-brandGold hover:shadow-xl hover:-translate-y-2"
//                   onClick={() => setSelectedPolicy(policy)}
//                 >
//                   <div className="absolute top-0 right-0 w-24 h-24 -mt-10 -mr-10 transition-transform rounded-bl-full bg-brandAccent/10 dark:bg-brandAccent/5 group-hover:scale-150"></div>
                  
//                   <div className="flex items-start justify-between mb-6">
//                     <div className="p-3 transition-colors bg-white rounded-lg shadow-sm dark:bg-black/20 text-brandPrimary dark:text-brandGold group-hover:text-brandGold dark:group-hover:text-white">
//                       <policy.icon size={32} />
//                     </div>
//                     <span className="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-300">
//                       {policy.category}
//                     </span>
//                   </div>
                  
//                   <h3 className="mb-3 text-xl font-bold transition-colors text-brandNavy dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
//                     {policy.title}
//                   </h3>
                  
//                   <p className="flex-grow mb-6 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
//                     {policy.summary}
//                   </p>
                  
//                   <div className="flex items-center mt-auto text-sm font-medium transition-colors text-brandPrimary dark:text-brandAccent group-hover:text-brandGold">
//                     <span>View Details</span>
//                     <svg className="w-4 h-4 ml-2 transition-transform transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="py-20 text-center">
//               <div className="inline-block p-4 mb-4 bg-gray-100 rounded-full dark:bg-surfaceDark">
//                 <Search className="w-8 h-8 text-gray-400" />
//               </div>
//               <h3 className="text-xl font-medium text-gray-900 dark:text-white">No policies found</h3>
//               <p className="mt-2 text-gray-500 dark:text-gray-400">Try adjusting your search or filter.</p>
//               <button 
//                 onClick={() => {setSearchTerm(""); setActiveCategory("All");}}
//                 className="mt-4 text-brandPrimary dark:text-brandAccent hover:underline"
//               >
//                 Clear all filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Footer CTA */}
//       <section className="py-20 text-center text-white transition-colors duration-300 bg-brandNavy dark:bg-black">
//         <div className="container px-5 mx-auto">
//           <h2 className="mb-6 text-3xl font-bold font-heading">Commitment to Excellence</h2>
//           <p className="max-w-2xl mx-auto mb-8 text-brandLight/80">
//             We continuously review and update our governance frameworks to align with global best practices and regulatory requirements.
//           </p>
//           <button className="px-8 py-3 font-bold transition-colors duration-200 transform rounded-full shadow-lg bg-brandGold text-brandDark hover:bg-white hover:text-brandNavy hover:scale-105">
//             Contact Compliance Team
//           </button>
//         </div>
//       </section>

//       {/* Policy Modal */}
//       {selectedPolicy && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPolicy(null)}>
//           <div className="bg-white dark:bg-surfaceDark rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-evaporate border border-gray-200 dark:border-gray-700" onClick={e => e.stopPropagation()}>
//             <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700 bg-bgLight dark:bg-black/20">
//               <div className="flex items-center space-x-4">
//                 <div className="p-2 rounded-lg bg-brandDark/5 dark:bg-white/10 text-brandPrimary dark:text-brandGold">
//                   <selectedPolicy.icon size={24} />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold leading-tight text-brandDark dark:text-white">{selectedPolicy.title}</h3>
//                   <span className="text-sm text-gray-500 dark:text-gray-400">{selectedPolicy.category}</span>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => setSelectedPolicy(null)}
//                 className="p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400"
//               >
//                 <X size={24} />
//               </button>
//             </div>
            
//             <div className="p-8 overflow-y-auto bg-white custom-scrollbar dark:bg-surfaceDark">
//               {selectedPolicy.content ? (
//                 <div 
//                   className="prose prose-lg text-gray-700 max-w-none dark:text-gray-300 dark:prose-invert"
//                   dangerouslySetInnerHTML={{ __html: selectedPolicy.content }}
//                 />
//               ) : (
//                 <div className="py-12 text-center">
//                   <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-gray-400 rounded-full bg-gray-50 dark:bg-black/30">
//                     <FileText size={40} />
//                   </div>
//                   <h4 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">Full Policy Document</h4>
//                   <p className="mb-6 text-gray-500 dark:text-gray-400">The full content of this policy is available for download.</p>
//                 </div>
//               )}
              
//               {selectedPolicy.filename && (
//                 <div className="flex justify-center mt-8">
//                   <a 
//                     href={`/documents/${selectedPolicy.filename}`} 
//                     download
//                     className="flex items-center px-8 py-3 space-x-2 font-bold text-white transition-colors rounded-lg shadow-md bg-brandPrimary dark:bg-brandAccent dark:text-brandDark hover:bg-brandNavy dark:hover:bg-white"
//                   >
//                     <Download size={20} />
//                     <span>Download Document</span>
//                   </a>
//                 </div>
//               )}
//             </div>
            
//             <div className="flex justify-end p-6 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-black/20">
//               <button 
//                 onClick={() => setSelectedPolicy(null)}
//                 className="px-6 py-2 font-medium text-white transition-colors rounded-lg bg-brandDark dark:bg-white dark:text-brandDark hover:bg-brandNavy dark:hover:bg-gray-200"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GovernancePage;


import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Shield, 
  Lock, 
  Heart, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Users, 
  Globe, 
  Scale, 
  Briefcase, 
  Eye, 
  Gavel, 
  BookOpen, 
  Activity,
  Megaphone,
  Handshake,
  Banknote,
  FileKey,
  Download,
  Search,
  Filter,
  X,
  ChevronRight,
  Printer,
  Share2,
  List,
  ArrowRight
} from 'lucide-react';

import {Link} from 'react-router-dom';


// Policy Data Structure
const policies = [
  { 
    id: 'corporate-governance',
    title: "Corporate Governance Policy", 
    category: "Core",
    icon: Scale, 
    filename: "Corporate_Governance_Policy.docx",
    summary: "Establishing a comprehensive, structured, and enforceable governance framework.",
    content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Corporate Governance Policy (“Policy”) is to establish a comprehensive, structured, and enforceable governance framework for RiskMan Consulting LLP (“RiskMan” or “the Firm”). This Policy is intended to ensure effective leadership, clear accountability, ethical conduct, and protection of stakeholder interests.</p>
      
      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Governance Approach</h3>
      <p class="mb-4 text-lg leading-relaxed">RiskMan’s governance philosophy is founded on the following core principles:</p>
      <ul class="list-none space-y-3 mb-8">
        <li class="flex items-start"><span class="mr-3 text-brandGold">✦</span> Integrity and ethical leadership</li>
        <li class="flex items-start"><span class="mr-3 text-brandGold">✦</span> Transparency and accountability</li>
        <li class="flex items-start"><span class="mr-3 text-brandGold">✦</span> Prudent risk management</li>
        <li class="flex items-start"><span class="mr-3 text-brandGold">✦</span> Compliance with applicable laws, regulations, and professional standards</li>
        <li class="flex items-start"><span class="mr-3 text-brandGold">✦</span> Responsible stewardship of the Firm’s reputation and resources</li>
      </ul>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Governance Structure</h3>
      <div class="bg-gray-50 dark:bg-white/5 p-6 rounded-xl mb-6 border-l-4 border-brandPrimary dark:border-brandAccent">
        <p class="mb-4"><strong>Partner-Led Governance Model:</strong> Ultimate authority and responsibility for the management, direction, and conduct of the Firm rests with the Partners.</p>
        <p><strong>Management Structure:</strong> The Partners may delegate operational responsibilities to senior management, subject to clearly defined authority limits and ongoing oversight.</p>
      </div>
    `
  },
  { 
    id: 'code-of-ethics',
    title: "Code of Ethics", 
    category: "Core",
    icon: BookOpen, 
    filename: "Code_of_Ethics.docx",
    summary: "Defining the ethical principles, values, and standards of conduct.",
    content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Code of Ethics (“Code”) is to define the ethical principles, values, and standards of conduct that guide all professional and business activities of RiskMan Consulting LLP. This Code aims to establish a common ethical framework, promote integrity, and protect the interests of all stakeholders.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Core Ethical Principles</h3>
      <div class="grid gap-6 md:grid-cols-2 mb-8">
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Integrity</strong>
          <span class="text-gray-600 dark:text-gray-300">Act honestly, fairly, and transparently in all professional and business dealings.</span>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Objectivity</strong>
          <span class="text-gray-600 dark:text-gray-300">Exercise professional judgment free from bias, conflict of interest, or undue influence.</span>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Competence</strong>
          <span class="text-gray-600 dark:text-gray-300">Maintain appropriate professional knowledge and skill, perform duties diligently.</span>
        </div>
        <div class="p-5 bg-white dark:bg-white/5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-brandGold/50 transition-colors">
          <strong class="text-brandPrimary dark:text-brandAccent text-lg block mb-2">Confidentiality</strong>
          <span class="text-gray-600 dark:text-gray-300">Protect confidential and proprietary information.</span>
        </div>
      </div>
    `
  },
  { 
    id: 'risk-mgmt',
    title: "Risk Management Policy", 
    category: "Core",
    icon: Activity, 
    filename: "Risk_Management_Policy.docx", 
    summary: "Framework for identifying, assessing, and mitigating risks.",
    content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Risk Management Policy is to establish a structured and proportionate framework through which RiskMan Consulting LLP identifies, evaluates, and manages risks arising from its professional services, client engagements, people, operations, and reputation.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Risk Management Approach</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan recognises that primary risks arise from judgment, advice, people, and reputation. The Firm adopts a principles-based, engagement-centric, and governance-driven approach to risk management.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Key Risk Areas</h3>
      <ul class="list-none space-y-4 mb-8">
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Engagement and Client Risk</strong> Client integrity, scope, and expectations.</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Professional Judgment and Quality Risk</strong> Flawed judgment, supervision, or competence.</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Independence and Conflict Risk</strong> Conflicts of interest and objectivity.</li>
        <li class="p-4 bg-gray-50 dark:bg-white/5 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"><strong class="text-brandPrimary dark:text-brandAccent block mb-1">Compliance and Regulatory Risk</strong> Non-compliance with laws and standards.</li>
      </ul>
    `
  },
  { 
    id: 'privacy',
    title: "Data Privacy Policy", 
    category: "Security",
    icon: FileKey, 
    filename: "Data_Privacy_Policy.docx", 
    summary: "Protecting personal data and ensuring privacy compliance.",
    content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Information Security & Data Privacy Policy is to establish a unified and structured framework for safeguarding information assets and personal data handled by RiskMan Consulting LLP.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Data Privacy Principles</h3>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
        <li>Information and personal data shall be protected against unauthorised access.</li>
        <li>Personal data shall be processed lawfully, fairly, and transparently.</li>
        <li>Data shall be collected only for legitimate and specified purposes.</li>
        <li>Access to information shall be restricted on a need-to-know basis.</li>
      </ul>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Information Security Controls</h3>
      <p class="mb-6 text-lg leading-relaxed">The Firm shall implement reasonable technical and organisational measures including role-based access controls, secure configuration, malware protection, and secure storage/transmission of sensitive information.</p>
    `
  },
  { 
    id: 'qa',
    title: "Quality Assurance Policy", 
    category: "Operations",
    icon: CheckCircle, 
    filename: "Quality_Assurance_Policy.docx", 
    summary: "Maintaining high standards of quality in all our services.",
    content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Quality Assurance & Independence Policy is to establish a robust framework to ensure consistent delivery of high-quality professional services and maintenance of independence, objectivity, and professional judgment.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Quality Approach</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan is committed to delivering services that meet client expectations, comply with standards, and uphold the Firm’s reputation. Quality is viewed as a collective responsibility.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Engagement Execution</h3>
      <p class="mb-6 text-lg leading-relaxed">All engagements shall be executed in accordance with approved methodologies, professional standards, and contractual terms. Appropriate supervision and review shall be maintained throughout the engagement lifecycle.</p>
    `
  },
  { 
    id: 'client-acceptance',
    title: "Client Acceptance Policy", 
    category: "Operations",
    icon: Handshake, 
    filename: "Client_Acceptance_Policy.docx", 
    summary: "Guidelines for accepting new clients and engagements.",
    content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Client Acceptance & Continuance Policy is to establish a structured and risk-based framework for evaluating prospective clients and reassessing existing relationships.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Client Acceptance Approach</h3>
      <p class="mb-4 text-lg leading-relaxed">RiskMan shall only undertake engagements where:</p>
      <ul class="list-disc pl-6 mb-8 space-y-3 text-lg">
        <li>The client’s integrity is consistent with the Firm’s ethical standards.</li>
        <li>The Firm has the competence and capacity to deliver with quality.</li>
        <li>Independence and objectivity can be maintained.</li>
        <li>Engagement-related risks are within the Firm’s approved risk appetite.</li>
      </ul>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Assessment Criteria</h3>
      <p class="mb-6 text-lg leading-relaxed">Assessments include client reputation, business activities, regulatory risks, conflicts of interest, and financial considerations.</p>
    `
  },
  { 
    id: 'compliance',
    title: "Compliance Management Policy", 
    category: "Compliance",
    icon: Gavel, 
    filename: "Compliance_Management_Policy.docx", 
    summary: "Ensuring adherence to all applicable laws and regulations.",
    content: `
      <h3 id="section-1" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">1. Objective</h3>
      <p class="mb-6 text-lg leading-relaxed">The objective of this Compliance Management Policy is to establish a structured and effective framework for ensuring that RiskMan Consulting LLP complies with all applicable laws, regulations, professional standards, and internal policies.</p>

      <h3 id="section-2" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">2. Compliance Approach</h3>
      <p class="mb-6 text-lg leading-relaxed">RiskMan adopts a proactive, preventive, and risk-based approach. Compliance includes adherence to laws, professional standards, contractual obligations, and internal policies.</p>

      <h3 id="section-3" class="text-2xl font-heading font-bold mb-6 text-brandNavy dark:text-brandGold border-b border-gray-200 dark:border-gray-700 pb-2">3. Risk Assessment</h3>
      <p class="mb-6 text-lg leading-relaxed">Compliance risks shall be assessed as part of the Firm’s overall risk management process, taking into account the nature of activities, regulatory expectations, and emerging developments.</p>
    `
  },
  { title: "Whistleblower Policy", category: "Compliance", icon: Megaphone, filename: "Whistleblower_Policy.docx", summary: "Mechanism for reporting genuine concerns or grievances.", id: 'whistleblower' },
  { title: "Information Security Policy", category: "Security", icon: Lock, filename: "Information_Security_Policy.docx", summary: "Ensuring the confidentiality, integrity, and availability of information.", id: 'infosec' },
  { title: "Health and Safety", category: "HR", icon: Heart, filename: "Health_and_Safety_Policy.docx", summary: "Commitment to providing a safe and healthy working environment.", id: 'health-safety' },
  { title: "Anti-Money Laundering Policy", category: "Compliance", icon: Banknote, filename: "Anti_Money_Laundering_Policy.docx", summary: "Preventing the use of our services for money laundering activities.", id: 'aml' },
  { title: "Human Rights Policy", category: "HR", icon: Users, filename: "Human_Rights_Policy.docx", summary: "Respecting and promoting human rights in our operations.", id: 'human-rights' },
  { title: "Anti-Bribery & Corruption", category: "Compliance", icon: Shield, filename: "Anti_Bribery_Corruption_Policy.docx", summary: "Zero tolerance approach towards bribery and corruption.", id: 'anti-bribery' },
  { title: "POSH Policy", category: "HR", icon: AlertTriangle, filename: "POSH_Policy.docx", summary: "Prevention of Sexual Harassment at the workplace.", id: 'posh' },
  { title: "Code of Conduct", category: "HR", icon: Briefcase, filename: "Code_of_Conduct.docx", summary: "Expected behavior and conduct for all employees and partners.", id: 'code-conduct' },
];

const categories = ["All", "Core", "Compliance", "Security", "Operations", "HR"];

const GovernancePage = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [toc, setToc] = useState([]);
  const contentRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPolicy) {
      document.body.style.overflow = 'hidden';
      // Generate TOC
      if (selectedPolicy.content) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(selectedPolicy.content, 'text/html');
        const headers = Array.from(doc.querySelectorAll('h3')).map((h, i) => ({
          id: h.id || `section-${i}`,
          text: h.textContent.replace(/^\d+\.\s*/, '') // Remove numbering for cleaner TOC
        }));
        setToc(headers);
      } else {
        setToc([]);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPolicy]);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

const scrollToSection = (id) => {
  if (!contentRef.current) return;

  const target = contentRef.current.querySelector(`#${id}`);
  if (!target) return;

  const containerTop = contentRef.current.getBoundingClientRect().top;
  const targetTop = target.getBoundingClientRect().top;

  const offset = 120; // header height buffer

  contentRef.current.scrollTo({
    top: contentRef.current.scrollTop + (targetTop - containerTop) - offset,
    behavior: 'smooth',
  });
};


  const filteredPolicies = useMemo(() => {
    return policies.filter(policy => {
      const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            policy.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || policy.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white bg-brandDark">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brandDark/80"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-brandAccent/10 blur-3xl animate-pulse-custom"></div>
        <div className="absolute rounded-full bottom-20 right-10 w-96 h-96 bg-brandGold/5 blur-3xl animate-pulse-custom" style={{ animationDelay: '1s' }}></div>

        <div className="container relative z-10 px-5 py-24 mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium border rounded-full bg-brandGold/20 border-brandGold/30 text-brandGold animate-fade-in-up backdrop-blur-sm">
            Corporate Standards
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl font-heading text-brandGold animate-evaporate drop-shadow-2xl">
            Governance & Ethics
          </h1>
          <p className="max-w-3xl mx-auto text-xl font-light leading-relaxed md:text-2xl text-brandLight/90">
            Our commitment to integrity, transparency, and ethical leadership is the foundation of our trust.
          </p>
        </div>
        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-20 transition-colors duration-300 bg-bgLight dark:bg-bgDark" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}></div>
      </div>

      {/* Intro / Governance Approach */}
      <section className="container px-5 py-20 mx-auto">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="relative inline-block mb-8 text-3xl font-bold md:text-4xl font-heading text-brandNavy dark:text-white">
              Our Governance Approach
              <span className="absolute bottom-0 left-0 w-1/2 h-1.5 bg-brandAccent rounded-full"></span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              RiskMan’s governance philosophy is founded on integrity, ethical leadership, and prudent risk management. 
              We recognize that strong governance is essential to maintaining client trust, regulatory confidence, and sustainable growth.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Integrity & Leadership",
                "Transparency",
                "Risk Management",
                "Compliance",
                "Stewardship"
              ].map((item, index) => (
                <div key={index} className="flex items-center p-4 space-x-3 transition-all duration-300 bg-white border shadow-sm cursor-default dark:bg-surfaceDark rounded-xl border-borderLight dark:border-borderDark hover:shadow-lg hover:border-brandGold/30 group">
                  <div className="p-2 transition-colors rounded-full bg-brandGold/10 group-hover:bg-brandGold/20">
                    <CheckCircle className="w-5 h-5 text-brandGold" />
                  </div>
                  <span className="font-medium text-brandPrimary dark:text-brandLight">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 rounded-full bg-brandAccent opacity-10 dark:opacity-20 blur-3xl animate-pulse-custom"></div>
            <div className="relative p-8 transition-colors duration-300 bg-white border-t-4 shadow-2xl dark:bg-surfaceDark rounded-2xl border-brandGold hover:shadow-brandGold/10">
              <h3 className="mb-6 text-2xl font-bold font-heading text-brandDark dark:text-white">Core Ethical Principles</h3>
              <ul className="space-y-5">
                {[
                  { title: "Integrity", desc: "Honest and transparent dealings." },
                  { title: "Objectivity", desc: "Unbiased professional judgment." },
                  { title: "Competence", desc: "Diligence and continuous learning." },
                  { title: "Confidentiality", desc: "Protecting sensitive information." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-4 group">
                    <div className="mt-1 bg-brandNavy dark:bg-brandDark p-1.5 rounded-full group-hover:bg-brandPrimary transition-colors shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-brandGold"></div>
                    </div>
                    <div>
                      <strong className="block text-lg transition-colors text-brandPrimary dark:text-brandAccent group-hover:text-brandGold">{item.title}</strong>
                      <span className="leading-snug text-gray-600 dark:text-gray-400">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="relative py-20 transition-colors duration-300 bg-white dark:bg-surfaceDark/30">
        <div className="container px-5 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading text-brandDark dark:text-white">
              Policies & Frameworks
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Our comprehensive suite of policies ensures we operate with the highest standards of conduct and compliance.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col items-center justify-between max-w-6xl gap-6 p-4 mx-auto mb-12 border border-gray-100 shadow-sm md:flex-row bg-gray-50 dark:bg-surfaceDark/50 rounded-2xl dark:border-gray-700/50 backdrop-blur-sm">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat 
                      ? "bg-brandPrimary text-white shadow-lg transform scale-105 ring-2 ring-brandPrimary/20" 
                      : "bg-white dark:bg-surfaceDark text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full py-3 pr-4 leading-5 text-gray-900 placeholder-gray-500 transition-all bg-white border border-gray-200 shadow-sm pl-11 dark:border-gray-600 rounded-xl dark:bg-surfaceDark dark:text-white focus:outline-none focus:ring-2 focus:ring-brandGold focus:border-brandGold"
                placeholder="Search policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Grid */}
          {filteredPolicies.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPolicies.map((policy, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col h-full p-8 overflow-hidden transition-all duration-300 border cursor-pointer group bg-bgLight dark:bg-surfaceDark rounded-2xl border-borderLight dark:border-borderDark hover:border-brandGold/50 dark:hover:border-brandGold/50 hover:shadow-2xl hover:-translate-y-2"
                  onClick={() => setSelectedPolicy(policy)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 -mt-12 -mr-12 transition-transform duration-500 rounded-bl-full bg-brandAccent/5 dark:bg-brandAccent/5 group-hover:scale-150"></div>
                  
                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div className="p-4 transition-colors bg-white shadow-sm dark:bg-black/20 rounded-xl text-brandPrimary dark:text-brandGold group-hover:text-brandGold dark:group-hover:text-white ring-1 ring-gray-100 dark:ring-white/5">
                      <policy.icon size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gray-200/50 dark:bg-white/5 text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                      {policy.category}
                    </span>
                  </div>
                  
                  <h3 className="mb-4 text-xl font-bold leading-tight transition-colors text-brandNavy dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">
                    {policy.title}
                  </h3>
                  
                  <p className="flex-grow mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                    {policy.summary}
                  </p>
                  
                  <div className="flex items-center pt-4 mt-auto text-sm font-bold transition-colors border-t border-gray-100 text-brandPrimary dark:text-brandAccent group-hover:text-brandGold dark:border-white/5">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border border-gray-300 border-dashed bg-gray-50 dark:bg-surfaceDark/30 rounded-3xl dark:border-gray-700">
              <div className="inline-block p-6 mb-6 bg-white rounded-full shadow-sm dark:bg-surfaceDark">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">No policies found</h3>
              <p className="mb-6 text-gray-500 dark:text-gray-400">We couldn't find any policies matching your search.</p>
              <button 
                onClick={() => {setSearchTerm(""); setActiveCategory("All");}}
                className="px-6 py-2 font-medium text-white transition-colors rounded-full bg-brandPrimary hover:bg-brandNavy"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-24 overflow-hidden text-center text-white transition-colors duration-300 bg-brandNavy dark:bg-black">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container relative z-10 px-5 mx-auto">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl font-heading">Commitment to Excellence</h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-brandLight/80">
            We continuously review and update our governance frameworks to align with global best practices and regulatory requirements.
          </p>
          <Link to="/contact" className="px-10 py-4 font-bold transition-all duration-200 transform rounded-full shadow-xl bg-brandGold text-brandDark hover:bg-white hover:text-brandNavy hover:scale-105 ring-4 ring-brandGold/20">
            Contact Compliance Team
          </Link>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedPolicy && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center duration-200 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white dark:bg-surfaceDark w-full h-full md:h-[95vh] md:w-[95vw] md:rounded-2xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-300">
            
            {/* Header */}
            <div className="z-20 flex items-center justify-between p-6 bg-white border-b border-gray-100 dark:border-gray-700 dark:bg-surfaceDark shrink-0">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brandPrimary/5 dark:bg-brandGold/10 rounded-xl text-brandPrimary dark:text-brandGold">
                  <selectedPolicy.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-tight md:text-2xl text-brandDark dark:text-white">{selectedPolicy.title}</h3>
                  <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium uppercase tracking-wide">
                      {selectedPolicy.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button 
                  className="hidden p-3 text-gray-500 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/5 dark:text-gray-400 hover:text-brandPrimary dark:hover:text-white sm:block"
                  title="Print Policy"
                  onClick={() => window.print()}
                >
                  <Printer size={22} />
                </button>
                <button 
                  onClick={() => setSelectedPolicy(null)}
                  className="z-50 p-3 text-gray-600 transition-colors bg-gray-100 rounded-full dark:bg-white/10 hover:bg-red-100 dark:hover:bg-red-900/30 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  title="Close"
                >
                  <X size={24} strokeWidth={2.5} />
                </button>
              </div>
            </div>
            
            {/* Content Body */}
            <div className="flex flex-col flex-1 overflow-hidden md:flex-row">
              {/* Left Sidebar (Summary & TOC) */}
              <div className="w-full p-6 overflow-y-auto border-b border-gray-100 md:w-80 lg:w-96 bg-gray-50 dark:bg-black/20 md:border-b-0 md:border-r dark:border-gray-700 shrink-0 custom-scrollbar">
                
                {/* TOC */}
                {toc.length > 0 && (
                  <div className="p-4 mb-8 bg-white border border-gray-100 shadow-sm dark:bg-surfaceDark rounded-xl dark:border-gray-700">
                    <h4 className="flex items-center mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                      <List size={14} className="mr-2" /> Contents
                    </h4>
                    <ul className="space-y-1">
                      {toc.map((item, idx) => (
                        <li key={idx}>
                          <button 
                            onClick={() => scrollToSection(item.id)}
                            className="flex items-center w-full px-3 py-2 text-sm text-left text-gray-600 transition-all rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-brandPrimary dark:hover:text-brandGold group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 mr-3 group-hover:bg-brandPrimary dark:group-hover:bg-brandGold transition-colors"></span>
                            <span className="truncate">{item.text}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-8">
                  <h4 className="flex items-center mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    <FileText size={14} className="mr-2" /> Executive Summary
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {selectedPolicy.summary}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="flex items-center mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                    <Download size={14} className="mr-2" /> Resources
                  </h4>
                  {selectedPolicy.filename ? (
                    <a 
                      href={`/documents/${selectedPolicy.filename}`} 
                      download
                      className="flex items-center justify-between p-4 transition-all duration-200 bg-white border border-gray-200 group dark:bg-surfaceDark dark:border-gray-700 rounded-xl hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-md"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 text-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                          <FileText size={20} />
                        </div>
                        <div className="text-left">
                          <span className="block text-sm font-bold text-gray-900 transition-colors dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">Full Policy PDF</span>
                          <span className="block text-xs text-gray-500">1.2 MB • PDF</span>
                        </div>
                      </div>
                      <Download size={18} className="text-gray-400 group-hover:text-brandPrimary dark:group-hover:text-brandAccent" />
                    </a>
                  ) : (
                    <div className="p-4 text-sm text-center text-gray-500 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-400">
                      Document available upon request
                    </div>
                  )}
                </div>
              </div>

              {/* Right Content (Scrollable Text) */}
              <div className="flex-1 p-8 overflow-y-auto bg-white md:p-12 custom-scrollbar dark:bg-surfaceDark scroll-smooth" ref={contentRef}>
                {selectedPolicy.content ? (
                  <div className="max-w-4xl mx-auto">
                    <div 
                      className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:scroll-mt-40 md:prose-h3:scroll-mt-48 prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-strong:text-brandPrimary dark:prose-strong:text-brandAccent"
                      dangerouslySetInnerHTML={{ __html: selectedPolicy.content }}
                    />
                    
                    <div className="flex items-center justify-between pt-8 mt-16 text-sm text-gray-400 border-t border-gray-100 dark:border-gray-800">
                      <span>RiskMan Consulting LLP</span>
                      <span>Confidential & Proprietary</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
                    <FileText size={64} className="mb-6 text-gray-200 dark:text-gray-700" />
                    <p className="text-lg font-medium text-gray-400">Full content preview not available.</p>
                    <p className="mt-2 text-sm text-gray-400">Please download the document to read more.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Custom Scrollbar Styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.3);
          border-radius: 20px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.5);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default GovernancePage;