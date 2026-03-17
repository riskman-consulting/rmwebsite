import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Helmet } from "react-helmet-async";
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
import {policies } from "./governanceData"


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
      <Helmet>
        <title>Governance & Compliance Services | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting delivers governance and compliance advisory services to help organizations build robust policy frameworks, regulatory adherence strategies, and governance best practices." />
        <link rel="canonical" href="https://www.riskman.in/governance" />
      </Helmet>
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
      {/* <section className="relative py-24 overflow-hidden text-center text-white transition-colors duration-300 bg-brandNavy dark:bg-black">
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
      </section> */}

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
                      href={selectedPolicy.filePath} 
                      download
                      className="flex items-center justify-between p-4 transition-all duration-200 bg-white border border-gray-200 group dark:bg-surfaceDark dark:border-gray-700 rounded-xl hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-md"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 text-red-500 rounded-lg bg-slate-50 dark:bg-red-900/20">
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
