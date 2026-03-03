import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaTimes,
  FaUpload,
  FaSearch,
  FaChevronLeft,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { useCareerStore } from "../../store/career";

const ZOHO_URL = import.meta.env.VITE_ZOHO_CAREER_APPLICATION;

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { jobOpenings, fetchCareerPage } = useCareerStore();

  // Form state
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [form, setForm] = useState({
    Name_First: "",
    Name_Last: "",
    Email: "",
  });

  // Prevent background scroll + reset form on modal close
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setOk(false);
      setForm({ Name_First: "", Name_Last: "", Email: "" });
    }
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

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOk(false);

    try {
      const fd = new FormData();
      fd.append("Name_First", form.Name_First);
      fd.append("Name_Last", form.Name_Last);
      fd.append("Email", form.Email);

      const fileInput = e.target.querySelector('input[type="file"]');
      if (fileInput && fileInput.files[0]) {
        fd.append("FileUpload", fileInput.files[0]);
      }

      fd.append("zf_referrer_name", "");
      fd.append("zf_redirect_url", "");
      fd.append("zc_gad", "");

      await fetch(ZOHO_URL, {
        method: "POST",
        body: fd,
        mode: "no-cors",
      });

      setOk(true);
    } catch (err) {
      console.error("Zoho submit failed", err);
    } finally {
      setLoading(false);
    }
  };

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

                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 whitespace-pre-line">
                  {selectedJob.description}
                </p>
              </div>

              {/* RIGHT: APPLICATION FORM / SUCCESS UI */}
              <div className="flex-1 p-8 overflow-y-auto bg-white md:p-12 dark:bg-zinc-900 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {!ok ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="mb-2 text-xl font-bold">Apply Now</h3>
                      <p className="mb-8 text-sm text-zinc-500">
                        Complete the form below to submit your interest.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* First & Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                              First Name
                            </label>
                            <input
                              type="text"
                              name="Name_First"
                              value={form.Name_First}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 text-sm"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                              Last Name
                            </label>
                            <input
                              type="text"
                              name="Name_Last"
                              value={form.Name_Last}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 text-sm"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="Email"
                            value={form.Email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 text-sm"
                          />
                        </div>

                        {/* Resume Upload */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
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
                            <input
                              type="file"
                              name="FileUpload"
                              accept=".pdf"
                              required
                              className="hidden"
                            />
                          </label>
                        </div>

                        {/* Submit */}
                        <button
                          disabled={loading}
                          className="w-full py-4 bg-brandPrimary text-white rounded-2xl font-bold shadow-xl shadow-brandPrimary/20 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 mt-4"
                        >
                          {loading ? "Processing..." : "Submit Application"}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <FaCheckCircle className="text-green-500 text-4xl" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Application Received!</h3>
                      <p className="text-zinc-500 text-sm leading-relaxed mb-8 px-4">
                        Thanks for your interest in our Organization. Our recruitment team will review your profile and get back to you shortly.
                      </p>
                      <button
                        onClick={() => setSelectedJob(null)}
                        className="px-10 py-3 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white rounded-xl font-bold transition-all hover:opacity-90"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
