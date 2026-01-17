import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTimes } from "react-icons/fa";

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

export default function LeadershipModal({ selectedLeader, setSelectedLeader }) {
  return (
    <AnimatePresence>
      {selectedLeader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
          onClick={() => setSelectedLeader(null)}
        >
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-full max-w-2xl border shadow-2xl border-borderLight dark:border-borderDark rounded-3xl bg-surfaceLight dark:bg-surfaceDark"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute z-10 flex items-center justify-center transition-all rounded-full top-5 right-5 w-9 h-9 bg-brandDark/5 dark:bg-white/5 hover:bg-brandDark/10 dark:hover:bg-white/10 hover:scale-110"
            >
              <FaTimes className="text-brandDark dark:text-white/70 hover:text-brandPrimary dark:hover:text-white" />
            </button>

            {/* CONTENT */}
            <div className="grid md:grid-cols-[220px_1fr] gap-6 items-start p-6">
              {/* LEFT – IMAGE */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="object-cover w-40 h-40 transition-all duration-500 border-4 rounded-full md:w-48 md:h-48 border-brandPrimary/30 dark:border-brandAccent/30 hover:scale-105"
                />
              </div>

              {/* RIGHT – TEXT */}
              <div>
                <h2 className="mb-1 text-2xl font-bold text-brandDark dark:text-white">
                  {selectedLeader.name}
                </h2>

                <p className="mb-2 font-semibold text-brandPrimary dark:text-brandAccent">
                  {selectedLeader.title}
                </p>

                {selectedLeader.credentials && (
                  <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    {selectedLeader.credentials}
                  </p>
                )}

                <div className="h-px my-4 bg-borderLight dark:bg-borderDark" />

                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {selectedLeader.fullBio || selectedLeader.bio}
                </p>

                {selectedLeader.expertise && (
                  <div className="mb-4">
                    <h3 className="mb-2 text-sm font-semibold text-brandDark dark:text-white">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedLeader.expertise.map((exp, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs border rounded-full bg-brandPrimary/10 border-brandPrimary/20 text-brandPrimary dark:bg-brandAccent/10 dark:border-brandAccent/30 dark:text-brandAccent"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedLeader.linkedin && (
                  <a
                    href={selectedLeader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brandPrimary dark:text-brandAccent hover:text-brandNavy dark:hover:text-brandGold"
                  >
                    <FaLinkedin className="text-xl" />
                    Connect on LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}