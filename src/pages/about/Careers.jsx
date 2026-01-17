import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaTimes, 
  FaUpload, 
  FaSearch, 
  FaChevronLeft,
  FaArrowRight
} from "react-icons/fa";
import jobData from "../../data/jobData.json";


export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Fix: Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedJob]);

  // 2. Search Logic
  const filteredJobs = useMemo(() => {
    return jobData.filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.hiringOrganization.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark text-zinc-900 dark:text-zinc-100 font-sans">
      
      {/* --- HERO SECTION --- */}
      <header className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brandPrimary/5 to-transparent -z-10" />
        <div className="max-w-6xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brandDark dark:bg-brandAccent text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            Join the Team
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Work that <span className="text-brandDark dark:text-brandAccent">matters.</span>
          </h1>
          
          <div className="relative max-w-xl mx-auto">
            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search by role or department..."
              className="w-full pl-12 pr-6 py-4 bg-white dark:bg-bgSurfaceDark border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl shadow-zinc-200/50 dark:shadow-none outline-none focus:ring-2 ring-brandPrimary/20 transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* --- JOB LISTING GRID --- */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <motion.div
                layout
                key={idx}
                onClick={() => setSelectedJob(job)}
                className="group p-8 bg-bgLight dark:bg-bgDark border border-zinc-100 dark:border-zinc-800 rounded-3xl cursor-pointer hover:border-brandPrimary transition-all hover:shadow-2xl hover:shadow-brandPrimary/5"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold px-2 py-1 bg-brandPrimary/10 text-brandPrimary rounded uppercase">
                    {job.employmentType.replace('_', ' ')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-brandPrimary transition-colors">{job.title}</h3>
                <p className="text-sm text-zinc-500 mb-6 font-medium">{job.hiringOrganization.name}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-zinc-50 dark:border-zinc-800">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <FaMapMarkerAlt className="text-brandPrimary" />
                    {job.jobLocation.address.addressLocality}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-brandPrimary group-hover:text-white transition-all">
                    <FaArrowRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-3xl text-zinc-400">
              No matching positions found.
            </div>
          )}
        </div>
      </main>

      {/* --- APPLICATION MODAL (OVERLAPS EVERYTHING) --- */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            // Fixed at z-[9999] to ensure it sits on top of sticky headers
            className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            {/* Backdrop with heavy blur */}
            <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-xl" onClick={() => setSelectedJob(null)} />

            {/* Modal Body */}
            <motion.div 
              className="relative w-full h-full md:h-auto md:max-h-[92vh] md:max-w-6xl bg-white dark:bg-zinc-900 md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (Floating for mobile) */}
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-full shadow-lg md:hidden"
              >
                <FaTimes />
              </button>

              {/* LEFT: JOB DETAILS (Scrollable) */}
              <div className="flex-[1.2] p-8 md:p-12 overflow-y-auto bg-zinc-50/50 dark:bg-zinc-800/20 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800">
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="hidden md:flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400 hover:text-brandPrimary mb-10 transition-colors"
                >
                  <FaChevronLeft /> BACK TO OPPORTUNITIES
                </button>
                
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">{selectedJob.title}</h2>
                <div className="flex gap-4 mb-8">
                  <span className="text-xs font-bold text-brandPrimary">{selectedJob.hiringOrganization.name}</span>
                  <span className="text-xs font-bold text-zinc-400">•</span>
                  <span className="text-xs font-bold text-zinc-400">{selectedJob.jobLocation.address.addressLocality}</span>
                </div>

                <div 
                  className="prose prose-zinc dark:prose-invert prose-sm max-w-none 
                  prose-h3:text-lg prose-h3:font-bold prose-p:leading-relaxed prose-li:my-1"
                  dangerouslySetInnerHTML={{ __html: selectedJob.description }}
                />
              </div>

              {/* RIGHT: APPLICATION FORM */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto bg-white dark:bg-zinc-900">
                <h3 className="text-xl font-bold mb-2">Apply Now</h3>
                <p className="text-sm text-zinc-500 mb-8">Complete the form below to submit your interest.</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 transition-all text-sm" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 transition-all text-sm" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Resume / CV</label>
                    <div className="group border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl p-10 flex flex-col items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-brandPrimary/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <FaUpload className="text-brandPrimary" />
                      </div>
                      <span className="text-xs font-bold text-zinc-500">Upload PDF</span>
                      <span className="text-[10px] text-zinc-400 mt-1">Maximum file size 5MB</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="w-full py-4 bg-brandPrimary text-white rounded-2xl font-bold shadow-xl shadow-brandPrimary/20 hover:opacity-90 active:scale-[0.98] transition-all">
                      Submit Application
                    </button>
                    <p className="text-[10px] text-center text-zinc-400 mt-4 leading-relaxed">
                      By clicking submit, you agree to our Terms of Service and Privacy Policy regarding applicant data.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}