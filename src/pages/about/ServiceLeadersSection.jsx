import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, ArrowRight, MapPin } from "lucide-react";
import { teamsImages } from "../../assets/teams";
import { LinkedinIcon } from "lucide-react"

/* =========================
   Animations (FIRST FILE STYLE)
========================= */
const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  card: (i) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

/* =========================
   Counter (UNCHANGED)
========================= */
function AnimatedCounter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* =========================
   DATA — NOT CHANGED
========================= */
const SERVICE_LEADERS = [
  {
    name: "Jitendra Khimavat",
    location: "Mumbai, India",
    title: "Service Leader",
    credentials: "CA and Certified Internal Auditor (CIA) with 17+ years",
    bio: "Expert in risk-based internal audits, enhancing efficiency, control, compliance, and cost savings across infrastructure, mining, manufacturing, and finance.",
    image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768898657/jitendra_s8wq8i.webp",
    expertise: ["Internal Audits", "Risk Management", "Compliance"],
    linkedin: "linkedin.com/in/jitendra-khimavat"
  },
  {
    name: "Narayanan Rajendran",
    location: "Chennai, India",
    title: "Service Leader",
    credentials: "CA, CISA with 20+ years | Ex-Ford, Ex-PKF, Ex-Templar Shield",
    bio: "Specialist in ERM, SOX, ICOFR, TPRM, InfoSec, ISO27001 and forensic engagements with Fortune 500 organizations.",
    image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768904950/narayanan_er15xk.webp",
    expertise: ["ERM", "Cybersecurity", "Forensic"],
    linkedin: "linkedin.com/in/narayanan-rajendran-34706521"
  },
  {
    name: "Pranshul Agarwal",
    location: "",
    title: "Manager",
    location: "Delhi, India",
    credentials: "CIA, CISA Qualied with 6+ Years of Experience",
    bio: "Risk Advisory professional with 6+ years of experience in IFC design, internal audits, SOX testing, and risk assurance. Delivers practical, value-driven risk and control solutions across industries.",
    image: teamsImages.Pranshul,
    expertise: [
      "Risk Advisory & Assurance",
      "Internal Audit",
      "IFC Framework Design & Testing",
      "SOX Testing",
      "Digital Transformation Initiatives",
      "Limited & Concurrent Audit"
    ]
    ,
    linkedin: "linkedin.com/in/pranshul-agarwal-3b707a148"
  },
  {
    name: "Vishal Sharma",
    title: "Senior Consultant",
    location: "Kolkata, India",
    credentials: "",
    bio: "",
    image: teamsImages.VishalSharma,
    expertise: [],
    linkedin: ""
  },
];

/* =========================
   Leadership UI Style Card
========================= */
function LeaderCard({ leader, index, onSelect }) {
  return (
    <motion.div
      {...animations.card(index)}
      onClick={() => onSelect?.(leader)}
      className="p-6 border cursor-pointer rounded-2xl bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark group hover:border-brandGold hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="flex justify-center mb-6">
        <img
          src={leader.image}
          alt={leader.name}
          className="object-cover object-top w-32 h-32 border-4 rounded-full border-brandPrimary/30 grayscale group-hover:grayscale-0"
        />
      </div>

      <h3 className="text-xl font-bold text-center text-brandDark dark:text-white">
        {leader.name}
      </h3>


      <p className="text-sm font-semibold text-center text-brandPrimary dark:text-brandAccent">
        {leader.title}
      </p>

      <div className="flex items-center justify-center gap-3 mt-3 text-sm text-gray-600">

        {leader.location && (
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{leader.location}</span>
          </div>
        )}

      </div>
      {leader.credentials && (
        <p className="mt-3 text-xs text-center text-brandDark/60 dark:text-white/60">
          {leader.credentials}
        </p>
      )}

      {leader.bio && (
        <p className="mt-4 text-sm text-center text-brandDark/70 dark:text-white/70">
          {leader.bio}
        </p>
      )}

      <div className="flex justify-center gap-3 mt-6">
        <a
          href={leader.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 px-4 py-2 text-sm border rounded-full text-brandPrimary border-brandPrimary/30 dark:text-brandAccent hover:bg-brandPrimary/10 dark:hover:bg-brandAccent/10"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
        <span className="flex items-center gap-2 text-sm text-brandAccent">
          View Profile <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.div>
  );
}

/* =========================
   Main Section — Leadership Layout
========================= */
export default function ServiceLeadersSection({ setSelectedLeader }) {
  return (
    <section className="py-4 lg:py-12 bg-surfaceLight dark:bg-surfaceDark">
      <div className="px-6 mx-auto max-w-7xl lg:px-12">

        <motion.div {...animations.fadeInUp} className="mb-12">
          <h2 className="text-4xl font-bold lg:text-5xl text-brandDark dark:text-white">
            Our <span className="font-serif italic text-brandGold">Associate</span> Partners
          </h2>
        </motion.div>

        <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_LEADERS.map((leader, i) => (
            <LeaderCard
              key={leader.name}
              leader={leader}
              index={i}
              onSelect={setSelectedLeader}
            />
          ))}
        </div>

        {/* Stats — kept from second file */}
        <motion.div {...animations.fadeInUp}>
          <div className="grid overflow-hidden border shadow-xl md:grid-cols-3 rounded-3xl border-borderLight dark:border-borderDark">

            <div className="flex flex-col items-center justify-center p-10 text-center">
              <h3 className="text-6xl font-black text-brandPrimary dark:text-brandAccent">
                <AnimatedCounter end={50} suffix="+" />
              </h3>
              <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                Expert Team Size
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-10 text-center">
              <h3 className="text-2xl font-bold text-brandPrimary dark:text-white">
                Qualified Professionals
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Industry Certified(CA, CIA, CISA, CRMA, SCR)
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-10 text-center">
              <h3 className="text-2xl font-bold text-brandPrimary dark:text-white">
                Industry SMEs
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Multi-Sector Experience
              </p>
            </div>

          </div>
        </motion.div>


      </div>
    </section>
  );
}
