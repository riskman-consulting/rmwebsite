import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin } from "lucide-react";

/* =========================
   Framer Motion Variants
========================= */
const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    transition: { duration: 0.25 },
  },
};

/* =========================
   Leadership Modal
========================= */
export default function LeadershipModal({ leader, onClose }) {
  useEffect(() => {
    if (!leader) return;

    const onEsc = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onEsc);
    };
  }, [leader, onClose]);

  return (
    <AnimatePresence>
      {leader && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-surfaceLight dark:bg-surfaceDark backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl bg-surfaceLight dark:bg-surfaceDark border border-borderLight dark:border-borderDark shadow-2xl"
          >
            {/* =========================
               HEADER (STICKY)
            ========================= */}
            <div className="sticky top-0 z-10 border-b bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark">
              <button
                onClick={onClose}
                className="absolute p-2 rounded-full top-5 right-5 hover:bg-black/5 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5 text-brandDark dark:text-brandAccent" />
              </button>

              <div className="flex p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="object-cover object-top w-32 h-32 border-4 rounded-full border-brandPrimary/30"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-brandDark dark:text-white">
                      {leader.name}
                    </h2>
                    <p className="font-semibold text-brandPrimary dark:text-brandAccent">
                      {leader.title}
                    </p>

                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-sm text-brandPrimary dark:text-white/70 hover:underline"
                      >
                        <Linkedin className="w-4 h-4" />
                        View LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
               BODY (SCROLLABLE)
            ========================= */}
            <div className="p-8 space-y-6 overflow-y-auto scrollbar-hide max-h-[calc(90vh-180px)]">
              {leader.richBio ? (
                leader.richBio
              ) : (
                <p className="text-base leading-relaxed text-brandDark/80 dark:text-white/80">
                  {leader.fullBio || leader.bio}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}