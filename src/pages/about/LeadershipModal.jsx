


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, MapPin } from "lucide-react";

/** Sanity images arrive as { asset: { url } }; hardcoded leaders pass a plain URL. */
const resolveImage = (image) => image?.asset?.url ?? (typeof image === "string" ? image : null);

const initials = (name = "") =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

/* =========================
   Leadership Modal Component
   Works for both data shapes:
   - co-founders: hardcoded, with a JSX `richBio`
   - service leaders: from Sanity, with plain-text `bio` and `credentials`
========================= */
export function LeadershipModal({ leader, onClose }) {
  const [imageFailed, setImageFailed] = useState(false);

  // Fresh image attempt for each leader opened
  useEffect(() => setImageFailed(false), [leader]);

  // Lock page scroll and close on Escape while open
  useEffect(() => {
    if (!leader) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [leader, onClose]);

  if (!leader) return null;

  const imageUrl = resolveImage(leader.image);
  const bioParagraphs = (leader.bio || "")
    .split(/\n\s*\n|\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  const hasBody = Boolean(leader.richBio) || bioParagraphs.length > 0 || Boolean(leader.credentials);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        {/* Overlay - click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-surfaceDark rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header - Fixed */}
          <div className="relative flex-shrink-0 p-6 border-b bg-gradient-to-r from-brandPrimary/5 to-brandGold/5 dark:from-brandPrimary/10 dark:to-brandGold/10 border-borderLight dark:border-borderDark">
            <div className="flex items-start justify-between gap-4">
              {/* Leader Info */}
              <div className="flex items-center gap-4">
                {imageUrl && !imageFailed ? (
                  <img
                    src={imageUrl}
                    alt={leader.image?.alt || leader.name}
                    onError={() => setImageFailed(true)}
                    className="flex-shrink-0 object-cover object-top w-20 h-20 border-4 rounded-full border-brandGold/30"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center flex-shrink-0 w-20 h-20 text-xl font-bold border-4 rounded-full border-brandGold/30 bg-brandPrimary/10 text-brandPrimary dark:bg-brandAccent/10 dark:text-brandAccent"
                  >
                    {initials(leader.name)}
                  </div>
                )}
                <div>
                  <h2 className="mb-1 text-2xl font-bold md:text-3xl text-brandDark dark:text-white">
                    {leader.name}
                  </h2>
                  <p className="mb-2 text-sm font-semibold md:text-base text-brandPrimary dark:text-brandAccent">
                    {leader.title}
                  </p>
                  {leader.location && (
                    <div className="flex items-center gap-1.5 text-xs md:text-sm text-brandDark/60 dark:text-white/50">
                      <MapPin className="w-4 h-4" />
                      {leader.location}
                    </div>
                  )}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 transition-colors rounded-full hover:bg-brandDark/10 dark:hover:bg-white/10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-brandDark dark:text-white" />
              </button>
            </div>

            {/* LinkedIn Link */}
            {leader.linkedin && (
              <div className="mt-4">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors border rounded-full text-brandPrimary border-brandPrimary/30 dark:text-brandAccent dark:border-brandAccent/30 hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            )}
          </div>

          {/* Scrollable content: rich two-column bio, or the plain Sanity bio */}
          {hasBody && (
            <div className="flex-1 min-h-0 p-6 overflow-y-auto md:p-8">
              {leader.richBio ? (
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {leader.richBio}
                </div>
              ) : (
                <div className="max-w-3xl space-y-4">
                  {leader.credentials && (
                    <p className="text-sm font-semibold leading-relaxed text-brandDark/70 dark:text-white/70">
                      {leader.credentials}
                    </p>
                  )}
                  {bioParagraphs.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


export default LeadershipModal