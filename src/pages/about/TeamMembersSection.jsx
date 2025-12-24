import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaLinkedin, FaUsers } from "react-icons/fa";

/* =======================
   ANIMATIONS
======================= */
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.3 },
};

/* =======================
   TEAM MEMBERS DATA
======================= */
const teamMembers = [
  {
    name: "Supriyo Mullick",
    credentials: "CPA (US), ACMA (India), ACS (India), B.Com (India)",
    position: "Managing Member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    bio: "With over 26 years of extensive and diverse experience spanning the information technology and manufacturing sectors, Supriyo Mullick offers a unique combination of financial acumen, strategic insight, and operational depth to his CPA practice. His distinguished professional journey includes impactful leadership roles at highly respected industry leaders such as Tata Steel, SAIL, RPG, and PepsiCo. In these positions, he spearheaded critical functions including Internal Audit, Management Reporting, Budgeting, Fraud Detection, and Investigation.",
    approach: "Supriyo's approach has consistently focused on delivering tangible results, rather than routine tasks. He has a proven track record of designing robust audit frameworks and uncovering financial irregularities, thereby consistently ensuring the financial health and transparency of complex organizations. His adeptness at navigating intricate regulatory landscapes, coupled with a keen understanding of core business processes, establishes him as a trusted advisor to both established enterprises and rapidly growing businesses.",
    entrepreneurship: "Further showcasing his entrepreneurial drive and operational design acumen, Supriyo co-founded RKS Academy, an Ed-Tech startup. The entire business and operational model for its virtual learning platform was his brainchild, which serves as an Approved Learning Partner for leading professional certifications like US CPA, US CMA, and ACCA. His deep commitment to the accounting profession is also evident through his earlier engagement as an Office Bearer and Board of Governors (BoG) member for the IIA Calcutta Chapter.",
    globalExpertise: "Recognizing the increasing globalization of business and the corresponding demand for cross-border financial expertise, Supriyo further enhanced his qualifications by earning the CPA (USA) credential. This achievement signifies his mastery in US GAAP, IRS regulations, GAGAS (Generally Accepted Government Auditing Standards), and GAAS (Generally Accepted Auditing Standards). This advanced qualification perfectly complements his existing credentials as an Associate Cost and Management Accountant (ACMA) and Associate Company Secretary (ACS), making him uniquely positioned to provide comprehensive financial guidance to clients with both domestic and international needs.",
    commitment: "At the helm of his CPA firm, Supriyo Mullick is deeply committed to delivering value-driven, compliant, and forward-thinking solutions to clients across various sectors. Whether it involves navigating the complexities of U.S. tax law, implementing improvements in internal controls, or offering strategic financial planning, Supriyo provides invaluable insights that are cultivated from decades of hands-on experience and a truly global perspective.",
  },
  {
    name: "Apurba Dey Singha",
    credentials: "FCA (India), M.Com-Gold Medalist (India)",
    position: "Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
    bio: "Apurba Dey Singha is a distinguished finance professional boasting over 25 years of extensive expertise across Financial Planning & Analysis (FP&A), BPO, KPO, and shared services. His strong foundation spans both the information technology and manufacturing sectors. Throughout his career, he's collaborated with global powerhouses like UNESCO, Genpact, Capgemini, Tata Steel, and SAIL, consistently playing pivotal roles in enhancing operational efficiency and financial clarity.",
    leadership: "Apurba's journey is marked by strategic leadership and transformative impact, moving beyond mere execution, he has spearheaded key functions including Accounting (including outsourcing), Taxation, Management Reporting, Budgeting, Process Improvement, and Process Automation. His work has consistently driven better decision-making, tighter controls, and significant cost savings—all essential for organizations striving for competitiveness and compliance.",
    entrepreneurship: "Adding to his impressive career, Apurba is also the founder of various companies with international or cross-border transactions, spanning diverse sectors like online retail of food supplements, fabrics, and management consultancy. This entrepreneurial background further enriches his practical and global business perspective.",
    expertise: "As a Fellow Chartered Accountant (FCA) and a Gold Medalist in M.Com, Apurba seamlessly combines technical excellence with a strategic mindset. His deep understanding of global accounting standards, including US GAAP, IRS regulations, GAGAS, and GAAS, positions him as a vital resource for clients navigating the complexities of cross-border financial environments. His commitment to the accounting profession is also evident through his association as member of Professional Business Association and Chamber of Commerce like BCCI, CII, FICCI and IIA.",
    role: "As Advisor, Apurba brings his vast experience and global outlook to guide clients with precision, foresight, and practical wisdom. His unwavering commitment to process excellence and client-centric service continues to make a measurable difference for businesses aiming to optimize their finance functions and stay ahead in an evolving regulatory landscape.",
  },
];

/* =======================
   OUR TEAM SECTION
======================= */
export default function OurTeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      {/* ================= OUR TEAM ================= */}
      <section id="team-leaders" className="relative bg-black pb-14 md:pt-0 md:pb-20 isolate">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-4 text-center"
          >
            <div className="flex items-start gap-3 mb-4">
              <FaUsers className="text-4xl text-[var(--accent-blue-light)]" />
              <h2 className="text-4xl font-bold md:text-5xl">
                Our
                <br />
                <span className="gradient-text">Team</span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mb-12 text-base text-center text-white"
          >
            Meet our experienced team of financial professionals dedicated to delivering excellence
          </motion.p>

          {/* Team Members Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-zinc-800 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative overflow-hidden group cursor-pointer transition-all duration-500 hover:border-[var(--accent-blue)]/50 hover:shadow-2xl hover:shadow-[var(--accent-blue)]/20 hover:scale-[1.02]"
                onClick={() => setSelectedMember(member)}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/0 to-[var(--accent-purple)]/0 group-hover:from-[var(--accent-blue)]/5 group-hover:to-[var(--accent-purple)]/5 transition-all duration-500 rounded-3xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Member Photo */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-40 rounded-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 border-4 border-[var(--accent-blue)]/30 group-hover:border-[var(--accent-blue)]/60"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-blue)]/20 to-[var(--accent-purple)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <h3 className="mb-2 text-3xl font-bold text-center group-hover:text-[var(--accent-blue-light)] transition-colors duration-500">
                    {member.name}
                  </h3>
                  
                  <p className="text-[var(--accent-blue-light)] text-sm font-semibold mb-2 text-center">
                    {member.credentials}
                  </p>

                  <p className="text-[var(--accent-purple)] font-bold mb-4 text-center text-lg">
                    {member.position}
                  </p>

                  <p className="mb-6 text-sm leading-relaxed text-center text-white line-clamp-4">
                    {member.bio}
                  </p>

                  {/* CTA Button */}
                  <div className="flex items-center justify-center">
                    <button className="text-[var(--accent-purple)] hover:text-white transition-colors text-sm font-semibold">
                      Read Full Profile →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Statement */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border-l-4 border-[var(--accent-blue)] rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg italic font-semibold">
                "Our team combines decades of experience with a commitment to excellence, delivering personalized financial solutions with integrity and precision."
              </p>
            </div>
          </motion.div>

          {/* Values & Commitment Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="mb-8 text-3xl font-bold text-start">
              <span className="gradient-text">Values And Commitment To Quality</span>
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 bg-zinc-800">
              {/* Value Cards */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-[var(--accent-blue-light)]">
                  Independence And Integrity
                </h4>
                <p className="text-sm text-white">
                  Act with honesty and transparency while maintaining objectivity and independence in all engagements and uphold the highest ethical standards in every client relationship.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-purple)]/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-[var(--accent-purple)]">
                  Professional Competence And Due Care
                </h4>
                <p className="text-sm text-white">
                  Ensure that qualified individuals who possess the appropriate experience and technical training, and who apply due professional care and diligence in all engagements are performing all work.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-[var(--accent-blue-light)]">
                  Confidentiality And Data Security
                </h4>
                <p className="text-sm text-white">
                  Maintain strict confidentiality with every possible steps is of prime importance, to safeguard client information and use secured systems to protect sensitive data from unauthorized access or disclosure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-purple)]/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-[var(--accent-purple)]">
                  Continuous Professional Development
                </h4>
                <p className="text-sm text-white">
                  Committed to ongoing education and training to ensure knowledge and skills remain current and relevant in a rapidly changing regulatory environment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-[var(--accent-blue-light)]">
                  Compliance With Professional Standards
                </h4>
                <p className="text-sm text-white">
                  Adhere to all applicable professional standards, including those issued by the AICPA, state board of accountancy, IRS, and other relevant authorities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-purple)]/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-[var(--accent-purple)]">
                  Client-Centered Service Excellence
                </h4>
                <p className="text-sm text-white">
                  Striving to understand each client's unique needs and deliver timely and value-added solutions that help them meet their financial and compliance goals, while upholding our responsibility to the public interest.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-blue)]/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-[var(--accent-blue-light)]">
                  Continuous Improvement
                </h4>
                <p className="text-sm text-white">
                  Periodical evaluation of the process to render services to the clients and client feedback to identify areas for improvement and enhance service delivery. Maintain a system of quality management designed to identify risks to quality, ensure consistency in performance, and promote a culture of continual learning, monitoring, and improvement.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 border border-white/10 hover:border-[var(--accent-blue)]/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[var(--accent-purple)]/20 flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-[var(--accent-purple)]">
                  Engagement Performance And Documentation
                </h4>
                <p className="text-sm text-white">
                  All engagements are conducted in a manner that ensures consistency, thorough documentation, appropriate supervision, and final review prior to issuance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MEMBER DETAILS MODAL ================= */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full max-w-4xl max-h-[90vh] border shadow-2xl bg-zinc-800 border-white/10 rounded-3xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              style={{
                background:
                  "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* CLOSE BUTTON */}
              <div className="absolute z-50 p-4 right-6 top-6">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-white/5 hover:bg-white/10 hover:scale-110"
                >
                  <FaTimes className="text-white/70 hover:text-white" />
                </button>
              </div>

              {/* SCROLLABLE CONTENT */}
              <div className="p-8 pt-16 overflow-y-auto">
                {/* Header with Photo */}
                <div className="flex flex-col items-center mb-8">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-[var(--accent-blue)]/30 grayscale hover:grayscale-0 transition-all duration-500 mb-6"
                  />
                  
                  <h2 className="mb-2 text-3xl font-bold text-center text-white">
                    {selectedMember.name}
                  </h2>

                  <p className="text-[var(--accent-blue-light)] font-semibold mb-2 text-center">
                    {selectedMember.credentials}
                  </p>

                  <span className="px-4 py-2 text-sm rounded-full bg-[var(--accent-purple)]/20 border border-[var(--accent-purple)]/40 text-[var(--accent-purple)]">
                    {selectedMember.position}
                  </span>
                </div>

                <div className="h-px my-6 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Full Bio */}
                <div className="space-y-6">
                  <div>
                    <p className="text-[var(--text-gray)] leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  {selectedMember.approach && (
                    <div>
                      <p className="text-[var(--text-gray)] leading-relaxed">
                        {selectedMember.approach}
                      </p>
                    </div>
                  )}

                  {selectedMember.leadership && (
                    <div>
                      <p className="text-[var(--text-gray)] leading-relaxed">
                        {selectedMember.leadership}
                      </p>
                    </div>
                  )}

                  {selectedMember.entrepreneurship && (
                    <div>
                      <p className="text-[var(--text-gray)] leading-relaxed">
                        {selectedMember.entrepreneurship}
                      </p>
                    </div>
                  )}

                  {selectedMember.globalExpertise && (
                    <div>
                      <p className="text-[var(--text-gray)] leading-relaxed">
                        {selectedMember.globalExpertise}
                      </p>
                    </div>
                  )}

                  {selectedMember.expertise && (
                    <div>
                      <p className="text-[var(--text-gray)] leading-relaxed">
                        {selectedMember.expertise}
                      </p>
                    </div>
                  )}

                  {selectedMember.commitment && (
                    <div>
                      <p className="text-[var(--text-gray)] leading-relaxed">
                        {selectedMember.commitment}
                      </p>
                    </div>
                  )}

                  {selectedMember.role && (
                    <div>
                      <p className="text-[var(--text-gray)] leading-relaxed">
                        {selectedMember.role}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}