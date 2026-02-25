import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaTimes,
  FaUpload,
  FaSearch,
  FaChevronLeft,
  FaArrowRight,
} from "react-icons/fa";
import { useCareerStore } from "../../store/career";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { jobOpenings, fetchCareerPage } = useCareerStore();

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = selectedJob ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedJob]);

  // Fetch jobs
  useEffect(() => {
    fetchCareerPage();
  }, [fetchCareerPage]);

  // Search Logic
  const filteredJobs = useMemo(() => {
    return jobOpenings.filter((job) =>
      job.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, jobOpenings]);

  return (
    <div className="min-h-screen font-sans bg-surfaceLight dark:bg-surfaceDark text-zinc-900 dark:text-zinc-100">

      {/* HERO SECTION */}
      <header className="relative px-6 pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 w-full h-full -translate-x-1/2 left-1/2 bg-gradient-to-b from-brandPrimary/5 to-transparent -z-10" />
        <div className="max-w-6xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-brandDark dark:bg-brandAccent text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            Join the Team
          </motion.span>

          <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-7xl">
            Work that <span className="text-brandDark dark:text-brandAccent">matters.</span>
          </h1>

          <div className="relative max-w-xl mx-auto">
            <FaSearch className="absolute -translate-y-1/2 left-5 top-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by role..."
              className="w-full py-4 pl-12 pr-6 transition-all bg-white border shadow-xl outline-none dark:bg-bgSurfaceDark border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-zinc-200/50 dark:shadow-none focus:ring-2 ring-brandPrimary/20"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* JOB LIST GRID */}
      <main className="max-w-6xl px-6 pb-24 mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, idx) => (
              <motion.div
                layout
                key={job._key || idx}
                onClick={() => setSelectedJob(job)}
                className="p-8 transition-all border cursor-pointer group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:border-brandPrimary hover:shadow-2xl hover:shadow-brandPrimary/5"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] font-bold px-2 py-1 bg-brandPrimary/10 text-brandPrimary rounded uppercase">
                    {job.employmentType?.replace("_", " ")}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-brandPrimary">
                  {job.title}
                </h3>

                <p className="mb-6 text-sm font-medium text-zinc-500">
                  RiskMan Consulting
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-50 dark:border-zinc-800">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <FaMapMarkerAlt className="text-brandPrimary" />
                    {job.location}
                  </div>

                  <div className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-zinc-50 dark:bg-brandAccent group-hover:bg-brandDark group-hover:text-white">
                    <FaArrowRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="py-20 text-center border-2 border-dashed col-span-full border-zinc-100 dark:border-zinc-800 rounded-3xl text-zinc-400">
              No matching positions found.
            </div>
          )}
        </div>
      </main>

      {/* MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-zinc-950/60 backdrop-blur-xl"
              onClick={() => setSelectedJob(null)}
            />

            <motion.div
              className="relative w-full h-full md:h-auto md:max-h-[92vh] md:max-w-6xl bg-white dark:bg-zinc-900 md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute z-20 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg top-6 right-6 dark:bg-zinc-800 md:hidden"
              >
                <FaTimes />
              </button>

              {/* LEFT */}
              <div className="flex-[1.2] p-8 md:p-12 overflow-y-auto bg-zinc-50/50 dark:bg-zinc-800/20 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="hidden md:flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400 hover:text-brandPrimary mb-10 transition-colors"
                >
                  <FaChevronLeft /> BACK TO OPPORTUNITIES
                </button>

                <h2 className="mb-4 text-3xl font-black md:text-4xl">
                  {selectedJob.title}
                </h2>

                <div className="flex gap-4 mb-8">
                  <span className="text-xs font-bold text-brandPrimary">
                    RiskMan Consulting
                  </span>
                  <span className="text-xs font-bold text-zinc-400">•</span>
                  <span className="text-xs font-bold text-zinc-400">
                    {selectedJob.location}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 whitespace-pre-line">
                  {selectedJob.description}
                </p>
              </div>

              {/* RIGHT FORM (unchanged design) */}
              {/* RIGHT FORM */}
              <div className="flex-1 p-8 overflow-y-auto bg-white md:p-12 dark:bg-zinc-900">
                <h3 className="mb-2 text-xl font-bold">Apply Now</h3>
                <p className="mb-8 text-sm text-zinc-500">
                  Complete the form below to submit your interest.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 transition-all text-sm"
                    />
                  </div>

                  {/* ✅ Resume Upload FIX */}
                  <div>
                    <label className="block mb-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      Resume / CV
                    </label>

                    <label className="flex flex-col items-center justify-center p-8 transition-all border-2 border-dashed cursor-pointer rounded-2xl border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50">

                      <FaUpload className="mb-3 text-brandPrimary" size={22} />

                      <span className="text-xs font-bold text-zinc-500">
                        Click to upload PDF
                      </span>

                      <span className="text-[10px] text-zinc-400 mt-1">
                        Maximum file size 5MB
                      </span>

                      {/* Hidden File Input */}
                      <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Submit */}
                  <div className="pt-4">
                    <button className="w-full py-4 bg-brandPrimary text-white rounded-2xl font-bold shadow-xl shadow-brandPrimary/20 hover:opacity-90 active:scale-[0.98] transition-all">
                      Submit Application
                    </button>
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