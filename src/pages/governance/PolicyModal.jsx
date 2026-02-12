import React from 'react';
import { X, Printer, List, FileText, Download } from 'lucide-react';

const PolicyModal = ({ policy, onClose, contentRef, toc, scrollToSection }) => {
    if (!policy) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center duration-200 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white dark:bg-surfaceDark w-full h-full md:h-[95vh] md:w-[95vw] md:rounded-2xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="z-20 flex items-center justify-between p-6 bg-white border-b border-gray-100 dark:border-gray-700 dark:bg-surfaceDark shrink-0">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-brandPrimary/5 dark:bg-brandGold/10 rounded-xl text-brandPrimary dark:text-brandGold">
                            <policy.icon size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold leading-tight md:text-2xl text-brandDark dark:text-white">{policy.title}</h3>
                            <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-medium uppercase tracking-wide">
                                    {policy.category}
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
                            onClick={onClose}
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
                                {policy.summary}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="flex items-center mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                                <Download size={14} className="mr-2" /> Resources
                            </h4>
                            {policy.filePath ? (
                                <a
                                    href={policy.filePath}
                                    download
                                    className="flex items-center justify-between p-4 transition-all duration-200 bg-white border border-gray-200 group dark:bg-surfaceDark dark:border-gray-700 rounded-xl hover:border-brandPrimary dark:hover:border-brandAccent hover:shadow-md"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 text-red-500 rounded-lg bg-red-50 dark:bg-red-900/20">
                                            <FileText size={20} />
                                        </div>
                                        <div className="text-left">
                                            <span className="block text-sm font-bold text-gray-900 transition-colors dark:text-white group-hover:text-brandPrimary dark:group-hover:text-brandAccent">Full Policy Docx</span>
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
                        {policy.content ? (
                            <div className="max-w-4xl mx-auto">
                                <div
                                    className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:scroll-mt-40 md:prose-h3:scroll-mt-48 prose-p:leading-relaxed prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-strong:text-brandPrimary dark:prose-strong:text-brandAccent"
                                    dangerouslySetInnerHTML={{ __html: policy.content }}
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
    );
};

export default PolicyModal;
