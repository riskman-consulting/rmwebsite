import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUpload, FaCheckCircle, FaFilePdf } from "react-icons/fa";

const ZOHO_URL = import.meta.env.VITE_ZOHO_CAREER_APPLICATION;

/**
 * Zoho-backed application form. Shared by the careers modal and the standalone
 * job page so both submit exactly the same payload.
 *
 * `renderSuccessAction` lets the host decide what follows a successful submit
 * (close the modal vs. link back to the job list).
 */
export default function ApplicationForm({ jobTitle, renderSuccessAction }) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [form, setForm] = useState({
    Name_First: "",
    Name_Last: "",
    Email: "",
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [fileError, setFileError] = useState("");

  // Preview URL for the selected resume so the user can view it before sending.
  const resumeUrl = useMemo(
    () => (resumeFile ? URL.createObjectURL(resumeFile) : null),
    [resumeFile]
  );
  useEffect(() => {
    return () => {
      if (resumeUrl) URL.revokeObjectURL(resumeUrl);
    };
  }, [resumeUrl]);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    if (file && file.size > 5 * 1024 * 1024) {
      setFileError("File is too large. Maximum size is 5MB.");
      e.target.value = "";
      setResumeFile(null);
      return;
    }
    setFileError("");
    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setOk(false);

    try {
      const fd = new FormData();
      fd.append("Name_First", form.Name_First);
      fd.append("Name_Last", form.Name_Last);
      fd.append("Email", form.Email);

      if (resumeFile) {
        fd.append("FileUpload", resumeFile);
      }

      // Zoho's referrer field is the only free-text slot on the existing form,
      // so the applied-for role travels along with the submission.
      fd.append("zf_referrer_name", jobTitle || "");
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
            {jobTitle
              ? `Complete the form below to apply for ${jobTitle}.`
              : "Complete the form below to submit your interest."}
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

              {!resumeFile ? (
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
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center gap-3 p-4 border rounded-2xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-brandPrimary/10 text-brandPrimary">
                    <FaFilePdf size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate text-zinc-700 dark:text-zinc-200">
                      {resumeFile.name}
                    </p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">
                      {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold shrink-0 text-brandPrimary hover:underline"
                  >
                    View
                  </a>
                  <label className="text-xs font-bold cursor-pointer shrink-0 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                    Change
                    <input
                      type="file"
                      name="FileUpload"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              )}

              {fileError && (
                <p className="text-[11px] font-medium text-red-500 mt-1.5">
                  {fileError}
                </p>
              )}
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
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full dark:bg-green-900/30">
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
          </div>
          <h3 className="mb-4 text-2xl font-bold">Application Received!</h3>
          <p className="px-4 mb-8 text-sm leading-relaxed text-zinc-500">
            Thanks for your interest in our Organization. Our recruitment team will
            review your profile and get back to you shortly.
          </p>
          {renderSuccessAction?.()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
