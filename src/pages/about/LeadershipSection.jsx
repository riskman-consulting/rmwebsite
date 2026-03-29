import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, MapPin, Briefcase, Target, TrendingUp, Award } from "lucide-react";
import { useAboutPage } from "../../store/about";


/* ── MODAL ── */
function LeadershipModal({ leader, onClose }) {
  if (!leader) return null;

  const imageUrl = leader.image?.asset?.url ?? leader.image;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden
                     bg-surfaceLight dark:bg-surfaceDark
                     border border-borderLight dark:border-borderDark"
        >
          {/* ── HEADER ── */}
          <div className="flex-shrink-0 px-7 py-6
                          bg-gradient-to-r from-brandPrimary/5 to-brandGold/10
                          dark:from-brandPrimary/10 dark:to-brandGold/10
                          border-b border-borderLight dark:border-borderDark">

            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-5">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={leader.name}
                    className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0
                               border-[3px] border-brandGold/50"
                  />
                )}
                <div>
                  <h2 className="font-heading text-2xl md:text-[1.75rem] font-bold leading-tight mb-1
                                 text-brandDark dark:text-white">
                    {leader.name}
                  </h2>
                  <p className="text-sm font-semibold mb-2 text-brandPrimary dark:text-brandAccent">
                    {leader.title}
                  </p>
                  {leader.location && (
                    <div className="flex items-center gap-1.5 text-xs text-brandDark/50 dark:text-white/40">
                      <MapPin className="w-3.5 h-3.5" />
                      {leader.location}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 rounded-full transition-colors
                           hover:bg-brandDark/10 dark:hover:bg-white/10"
              >
                <X className="w-5 h-5 text-brandDark dark:text-white" />
              </button>
            </div>

            {leader.linkedin && (
              <div className="mt-4">
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full
                             border transition-colors
                             text-brandPrimary border-brandPrimary/30 hover:bg-brandPrimary/10
                             dark:text-brandAccent dark:border-brandAccent/30 dark:hover:bg-brandAccent/10"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </div>
            )}
          </div>

          {/* ── SCROLLABLE BODY ── */}
          <div className="flex-1 overflow-y-auto px-7 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* LEFT */}
              <div className="flex flex-col gap-4">

                {/* Badge */}
                {leader.badge && (
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brandGold/10 dark:bg-brandGold/15">
                      <Briefcase className="w-4 h-4 text-brandGold" />
                    </div>
                    <span className="text-xs font-semibold px-4 py-2 rounded-full
                                     border border-brandGold/30 bg-brandGold/10
                                     text-brandDark dark:text-white/90">
                      {leader.badge}
                    </span>
                  </div>
                )}

                {/* Summary blocks — plain strings from Sanity */}
                {leader.summaryBlocks?.map((block, i) => (
                  <div
                    key={i}
                    className="px-5 py-4 border-l-4 border-brandGold rounded-r-xl
                               bg-brandPrimary/5 dark:bg-brandPrimary/10
                               [&_strong]:font-semibold [&_strong]:text-brandPrimary dark:[&_strong]:text-brandAccent"
                  >
                    <p
                      className="text-sm leading-relaxed text-brandDark/90 dark:text-white/80"
                      dangerouslySetInnerHTML={{ __html: typeof block === "object" ? block.text : block }}
                    />
                  </div>
                ))}

                {/* Core Expertise */}
                {leader.expertise?.length > 0 && (
                  <div className="p-5 rounded-2xl border transition-shadow hover:shadow-md
                                  bg-surfaceLight dark:bg-brandNavy/40
                                  border-borderLight dark:border-borderDark">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-brandPrimary/10 dark:bg-brandPrimary/20">
                        <Target className="w-4 h-4 text-brandPrimary dark:text-brandAccent" />
                      </div>
                      <h4 className="text-sm font-bold text-brandDark dark:text-white">Core Expertise</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg
                                     border border-brandPrimary/20 bg-brandPrimary/5
                                     dark:border-brandAccent/20 dark:bg-brandAccent/5
                                     text-brandDark dark:text-white/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {leader.highlights?.length > 0 && (
                  <div className="p-5 rounded-2xl border
                                  border-brandGold/30 dark:border-brandGold/20
                                  bg-gradient-to-br from-brandGold/5 to-brandPrimary/5
                                  dark:from-brandGold/10 dark:to-brandPrimary/10">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-5 h-5 text-brandGold" />
                      <h4 className="text-sm font-bold text-brandDark dark:text-white">{leader.highlightsTitle}</h4>
                    </div>
                    <ul className="space-y-3">
                      {leader.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-brandDark/80 dark:text-white/70">
                          <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-brandGold flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-4">

                {/* Certifications */}
                {leader.certifications?.length > 0 && (
                  <div className="p-5 rounded-2xl border transition-shadow hover:shadow-md
                                  bg-surfaceLight dark:bg-brandNavy/40
                                  border-borderLight dark:border-borderDark">
                    <div className="flex items-center gap-3 mb-5">
                      <Award className="w-5 h-5 text-brandGold" />
                      <h4 className="text-sm font-bold text-brandDark dark:text-white">{leader.certTitle}</h4>
                    </div>
                    <ul className="space-y-3">
                      {leader.certifications.map((c, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-1 w-2 h-2 rounded-full bg-brandGold flex-shrink-0" />
                          <div>
                            <strong className="text-sm font-semibold text-brandDark dark:text-white">{c.title}</strong>
                            {c.org && (
                              <span className="block text-xs mt-0.5 text-brandDark/50 dark:text-white/40">{c.org}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Philosophy */}
                {leader.philosophyBlocks?.length > 0 && (
                  <div className="px-5 py-4 border-l-4 border-brandPrimary dark:border-brandAccent
                                  rounded-r-xl bg-brandPrimary/5 dark:bg-brandAccent/5">
                    {leader.philosophyBlocks.map((p, i) => (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed italic text-brandDark/80 dark:text-white/75
                                    ${i < leader.philosophyBlocks.length - 1 ? "mb-3" : ""}`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/* ── CARD ── */
function MemberCard({ member, index, onSelect, isSelected }) {
  const imageUrl = member.image?.asset?.url ?? member.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onSelect(member)}
      className={`group flex flex-col items-center px-6 py-8 rounded-2xl cursor-pointer
                  transition-all duration-200 font-sans
                  bg-surfaceLight dark:bg-surfaceDark
                  ${isSelected
                    ? "border-2 border-brandGold shadow-[0_8px_32px_rgba(255,184,0,0.2)] dark:shadow-[0_8px_32px_rgba(255,192,0,0.15)]"
                    : "border border-borderLight dark:border-borderDark hover:shadow-xl hover:border-brandGold/50 dark:hover:border-brandGold/30"
                  }`}
    >
      {/* Avatar */}
      <div className={`w-28 h-28 rounded-full overflow-hidden mb-4 transition-all duration-200
                       ring-offset-2 ring-offset-surfaceLight dark:ring-offset-surfaceDark
                       ${isSelected
                         ? "ring-[3px] ring-brandGold"
                         : "ring-[3px] ring-borderLight dark:ring-borderDark group-hover:ring-brandGold/60"
                       }`}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        )}
      </div>

      <h3 className="font-heading text-xl font-bold text-center mb-1 text-brandDark dark:text-white">
        {member.name}
      </h3>
      <p className="text-sm font-semibold text-center mb-2 text-brandPrimary dark:text-brandAccent">
        {member.title}
      </p>
      <div className="flex items-center gap-1.5 text-xs mb-4 text-brandDark/50 dark:text-white/40">
        <MapPin className="w-3 h-3" />
        {member.location}
      </div>
      <p className="text-sm leading-relaxed text-center mb-5 line-clamp-4 text-brandDark/60 dark:text-white/50">
        {member.bio}
      </p>

      <div className="flex gap-2.5 mt-auto">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full
                       border transition-colors
                       border-borderLight text-brandDark hover:bg-brandDark/5
                       dark:border-borderDark dark:text-white/80 dark:hover:bg-white/5"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); onSelect(member); }}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full
                     border transition-colors
                     border-borderLight text-brandDark hover:bg-brandDark/5
                     dark:border-borderDark dark:text-white/80 dark:hover:bg-white/5"
        >
          Read More →
        </button>
      </div>
    </motion.div>
  );
}

/* ── MAIN ── */
export default function LeadershipSection() {
  const [selected, setSelected] = useState(null);
  const { leadership, fetchLeadership, loading } = useAboutPage();

  useEffect(() => {
    fetchLeadership();
  }, [fetchLeadership]);

  return (
    <section className="py-20 px-6 min-h-screen bg-bgLight dark:bg-bgDark font-sans">
      {loading && leadership.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-8 h-8 border-4 border-brandPrimary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {leadership.map((m, i) => (
            <MemberCard
              key={m._key ?? m.name}
              member={m}
              index={i}
              onSelect={setSelected}
              isSelected={selected?.name === m.name}
            />
          ))}
        </div>
      )}

      <LeadershipModal leader={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
