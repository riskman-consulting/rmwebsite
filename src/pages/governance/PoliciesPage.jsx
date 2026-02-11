import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { policies } from './governanceData';

// Section-wise Imports
import GovernanceHero from './GovernanceHero';
import GovernanceApproach from './GovernanceApproach';
import PolicyFilters from './PolicyFilters';
import PolicyCard from './PolicyCard';
import PolicyModal from './PolicyModal';

const PoliciesPage = () => {
    const [selectedPolicy, setSelectedPolicy] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [toc, setToc] = useState([]);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    // Handle body scroll locking and TOC generation
    useEffect(() => {
        if (selectedPolicy) {
            document.body.style.overflow = 'hidden';
            if (selectedPolicy.content) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(selectedPolicy.content, 'text/html');
                const headers = Array.from(doc.querySelectorAll('h3')).map((h, i) => ({
                    id: h.id || `section-${i}`,
                    text: h.textContent.replace(/^\d+\.\s*/, '')
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

    // Smooth scroll within modal
    const scrollToSection = (id) => {
        if (!contentRef.current) return;
        const target = contentRef.current.querySelector(`#${id}`);
        if (!target) return;
        const containerTop = contentRef.current.getBoundingClientRect().top;
        const targetTop = target.getBoundingClientRect().top;
        const offset = 120;
        contentRef.current.scrollTo({
            top: contentRef.current.scrollTop + (targetTop - containerTop) - offset,
            behavior: 'smooth',
        });
    };

    // Filter policies based on search and category
    const filteredPolicies = useMemo(() => {
        return policies.filter(policy => {
            const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                policy.summary.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === "All" || policy.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeCategory]);

    return (
        <div ref={containerRef} className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight selection:bg-brandAccent selection:text-brandDark">

            {/* 1. Hero Section */}
            <GovernanceHero containerRef={containerRef} />

            {/* 2. Governance Approach & Diagrams */}
            <GovernanceApproach />

            {/* 3. Policies Grid Section */}
            <section className="relative px-6 py-32 transition-colors duration-300 bg-white dark:bg-surfaceDark/30">
                <div className="container mx-auto">
                    <div className="mb-20 text-center">
                        <h2 className="mb-6 text-4xl font-black md:text-6xl font-heading text-brandDark dark:text-white">
                            Policies <span className="text-brandAccent">&</span> Frameworks
                        </h2>
                        <p className="max-w-2xl mx-auto text-xl font-light leading-relaxed text-gray-600 dark:text-gray-400">
                            Our comprehensive suite of policies ensures we operate with the highest standards of conduct and compliance.
                        </p>
                    </div>

                    <PolicyFilters
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />

                    {filteredPolicies.length > 0 ? (
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                            {filteredPolicies.map((policy) => (
                                <PolicyCard
                                    key={policy.id}
                                    policy={policy}
                                    onClick={setSelectedPolicy}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="py-24 text-center border-2 border-brandAccent/20 border-dashed bg-gray-50 dark:bg-surfaceDark/30 rounded-[40px]">
                            <div className="inline-block p-8 mb-6 bg-white rounded-full shadow-2xl dark:bg-surfaceDark">
                                <Search className="w-12 h-12 text-gray-300 dark:text-gray-600" />
                            </div>
                            <h3 className="mb-4 text-3xl font-black text-gray-900 dark:text-white">No policies match your criteria</h3>
                            <p className="mb-10 text-xl font-light text-gray-500 dark:text-gray-400">Try adjusting your search terms or filters.</p>
                            <button
                                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                                className="px-10 py-4 font-black transition-all duration-300 shadow-xl rounded-2xl bg-brandAccent text-brandDark hover:scale-105"
                            >
                                Reset Transitions
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* 4. Footer CTA Section */}
            <section className="px-6 py-32">
                <div className="container mx-auto">
                    <div className="bg-brandDark rounded-[80px] p-16 md:p-32 relative overflow-hidden text-center border-2 border-brandAccent/30 shadow-3xl">
                        <div className="absolute inset-0 hero-grid opacity-10" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-5xl md:text-8xl font-heading font-black text-white mb-10 text-balance leading-[0.9]">READY TO <span className="text-brandAccent">GOVERN?</span></h2>
                            <p className="max-w-2xl mx-auto mb-16 text-xl font-light leading-relaxed text-white/60">Let's build a foundation that eliminates ambiguity and drives enterprise maturity.</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact" className="px-12 py-6 text-xl font-black transition-all bg-brandAccent text-brandDark rounded-3xl hover:scale-105 shadow-3xl">Book a Governance Audit</Link>
                                <button className="px-12 py-6 text-xl font-black text-white transition-all border bg-white/5 border-white/20 rounded-3xl hover:bg-white/10">View Case Studies</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Policy Details Modal */}
            <PolicyModal
                policy={selectedPolicy}
                onClose={() => setSelectedPolicy(null)}
                contentRef={contentRef}
                toc={toc}
                scrollToSection={scrollToSection}
            />

            {/* Custom Styles */}
            <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.3);
          border-radius: 20px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.1); }
        .hero-grid {
          background-image: linear-gradient(to right, var(--color-brandAccent) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-brandAccent) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(ellipse at center, black, transparent 80%);
        }
      `}</style>
        </div>
    );
};

export default PoliciesPage;
