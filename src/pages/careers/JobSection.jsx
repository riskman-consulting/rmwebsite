import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaTimes,
  FaSearch,
  FaChevronLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useCareerStore } from "../../store/career";
import ApplicationForm from "./ApplicationForm";
import CopyLinkButton from "./CopyLinkButton";
import { getJobPath } from "../../utils/jobSlug";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { jobOpenings, fetchCareerPage } = useCareerStore();

  // Prevent background scroll while the modal is open
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

                  {/* A real anchor, so the role can be opened in a new tab or
                      its URL copied straight from the card. */}
                  <Link
                    to={getJobPath(job)}
                    onClick={(e) => e.stopPropagation()}
                    title="Open this job in its own page"
                    className="p-2 -m-2 transition-colors text-zinc-300 dark:text-zinc-600 hover:text-brandPrimary"
                  >
                    <FaExternalLinkAlt size={11} />
                  </Link>
                </div>

                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-brandPrimary">
                  <Link to={getJobPath(job)} onClick={(e) => e.stopPropagation()}>
                    {job.title}
                  </Link>
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

              {/* LEFT: JOB DETAILS */}
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

                {/* SHARE / STANDALONE PAGE */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <Link
                    to={getJobPath(selectedJob)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-bold tracking-widest uppercase transition-all border rounded-full border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:text-brandPrimary hover:border-brandPrimary"
                  >
                    <FaExternalLinkAlt size={10} /> Open full page
                  </Link>
                  <CopyLinkButton path={getJobPath(selectedJob)} />
                </div>

                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 whitespace-pre-line">
                  {selectedJob.description}
                </p>
              </div>

              {/* RIGHT: APPLICATION FORM / SUCCESS UI */}
              <div className="flex flex-col justify-center flex-1 p-8 overflow-y-auto bg-white md:p-12 dark:bg-zinc-900">
                <ApplicationForm
                  key={selectedJob._key || selectedJob.title}
                  jobTitle={selectedJob.title}
                  renderSuccessAction={() => (
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="px-10 py-3 font-bold text-white transition-all bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-xl hover:opacity-90"
                    >
                      Close
                    </button>
                  )}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
