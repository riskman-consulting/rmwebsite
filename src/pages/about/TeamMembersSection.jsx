import React, { useEffect } from "react";
import { Linkedin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { teamsImages } from "../../assets/teams";
import { useAboutPage } from "../../store/about";

/* ========= CONFIG ========= */
// const COLUMNS_DESKTOP = 10;

/* ========= RESPONSIVE TILE ========= */
const TILE_CLASS =
  "w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] md:w-[88px] md:h-[88px] lg:w-[96px] lg:h-[96px]";

/* ========= AUTO LOGO POSITION ========= */
// function injectLogoDesktop(members) {
//   const total = members.length + 1;
//   const rows = Math.ceil(total / COLUMNS_DESKTOP);

//   const centerRow = Math.floor(rows / 2);
//   const centerCol = Math.floor(COLUMNS_DESKTOP / 2);

//   const logoIndex = centerRow * COLUMNS_DESKTOP + centerCol;

//   const grid = [...members];
//   grid.splice(logoIndex, 0, { type: "logo" });

//   return grid;
// }

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const RiskManTeams = () => {
  const { fetchLeaders, teamMembersSection } = useAboutPage()

  useEffect(() => {
    if (teamMembersSection.length <= 0) {
      fetchLeaders()
    }
  }, [])

  return (
    <section id="riskman-teams" className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">

        {/* Header */}
        <motion.div {...fadeInUp} className="mb-12 text-center">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-brandAccent/10 border border-brandAccent/20 text-brandAccent text-[10px] font-black uppercase tracking-[0.3em]">
            Our Team
          </span>

          <h2 className="mb-6 text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
            Meet the{" "}
            <span className="font-serif italic font-medium text-brandGold">
              RiskMan
            </span>{" "}
            Team
          </h2>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-brandDark/70 dark:text-white/70">
            Our diverse team of professionals brings together expertise, innovation,
            and dedication to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex items-center gap-2 px-6 py-3 border rounded-full bg-surfaceLight dark:bg-surfaceDark border-brandAccent/30">
            <Users className="w-5 h-5 text-brandAccent" />
            <span className="text-lg font-bold text-brandDark dark:text-white">
              50+
            </span>
            <span className="text-sm text-brandDark/70 dark:text-white/70">
              Team Members
            </span>
          </div>
        </motion.div>

        {/* GRID (LOGIC FROM FIRST CODE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >

          <div
            className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10"
          >

            {teamMembersSection?.map((item, idx) =>
              item.type === "logo" ? (
                <motion.div
                  key={`logo-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.02 }}
                  className={`${TILE_CLASS}
                    flex flex-col items-center justify-center
                    rounded-md
                    bg-white dark:bg-brandNavy
                    border-2 border-brandAccent
                    shadow-md`}
                >
                  <img src="/rm.png" className="mb-1 w-14 dark:hidden" />
                  <img
                    src="/riskman-logo-white.svg"
                    className="hidden mb-1 w-14 dark:block"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.02 }}
                  className={`${TILE_CLASS}
                    relative group overflow-hidden
                    rounded-md
                    bg-slate-100 dark:bg-brandDark
                    border border-slate-200 dark:border-white/10`}
                >
                  <img
                    src={item?.image?.asset.url}
                    alt=""
                    className="object-cover object-top w-full h-full"
                  />

                  {item.linkedin && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/60 group-hover:opacity-100">
                      <a
                        href={item?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition bg-white rounded-full hover:scale-110"
                      >
                        <Linkedin size={18} className="text-brandPrimary" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )
            )}

            {/* Many More Tile */}
            {teamMembersSection?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: teamMembersSection.length * 0.02 }}
                className={`${TILE_CLASS}
                  flex flex-col items-center justify-center gap-1
                  rounded-md
                  border-2 border-dashed border-brandAccent/50
                  bg-brandAccent/5 dark:bg-brandAccent/10`}
              >
                <Users className="w-6 h-6 text-brandAccent" />
                <span className="text-xs font-bold leading-tight text-center text-brandAccent">
                  & Many<br />More
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeInUp} className="mt-12 text-center">
          <p className="mb-4 text-sm text-brandDark/70 dark:text-white/70">
            Want to join our growing team?
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 border rounded-full text-brandAccent border-brandAccent/30 hover:bg-brandAccent hover:text-white"
          >
            View Open Positions
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default RiskManTeams;
