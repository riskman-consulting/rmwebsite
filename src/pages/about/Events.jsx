import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaFilter,
} from "react-icons/fa";

// Note: Ensure your asset imports remain the same
import { IIA_Hyderabad_images } from "../../assets/iia-hyderabad";
import { IIA_Bangalore_images } from "../../assets/iia-bangalore";
import { IIA_Kolkata_images } from "../../assets/iia-kolkata";
import { IIA_Bombay_images } from "../../assets/iia-bombay";
import { Wofa_images } from "../../assets/wofa-2025";
import { AGM_IIA_Delhi_images } from "../../assets/AGM-IIA-Delhi";
import { IIA_Bombay_2026_images } from "../../assets/iia-bombay/2026";
import { Vietman_Image } from "../../assets/chu-chi-vietnam"

/* =======================
   ANIMATIONS & VARIANTS
======================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* =======================
   EVENTS DATA
======================= */
export const events = [
  {
    id: "iia-bombay-ic-2026",
    title: "IIA Bombay Chapter International Conference 2026",
    date: "15 March 2026",
    year: 2026,
    month: "March",
    location: "Mumbai, India",
    type: "International Conference",
    organizer: "The Institute of Internal Auditors (IIA) – Bombay Chapter",

    theme: "Future of Governance – Trends, Technologies & Talent",

    image: IIA_Bombay_2026_images[0],

    shortDesc:
      "A prestigious international conference focused on the future of governance, internal audit, and risk management.",

    fullDesc:
      "The IIA Bombay Chapter International Conference 2026 brought together industry leaders, auditors, and governance professionals to explore the Future of Governance – Trends, Technologies & Talent. The conference featured insightful discussions on risk assurance, digital transformation, AI in audit, ESG, and the evolving role of internal audit. The energy, thought leadership, and meaningful interactions throughout the event highlighted how rapidly the risk, audit, and governance landscape is transforming, reinforcing the importance of strong governance and forward-looking risk management as business imperatives.",

    highlights: [
      "Engagement with esteemed industry leaders and speakers",
      "Discussions on AI, digital transformation, ESG, and risk assurance",
      "Networking with auditors, professionals, partners, and delegates",
      "Knowledge exchange on the future of internal audit and governance"
    ],

    participants: [
      "Shiv Shivakumar",
      "Mukundan K V",
      "Abha Sarda",
      "Arpit Garg",
      "Prasen Pal",
      "CA Sukanta Nag",
      "Narayanan Rajendran",
      "Jitendra Khimavat",
      "Pranshul Agarwal"
    ],

    representedBy: "RiskMan Consulting",

    gallery: IIA_Bombay_2026_images,

    tags: [
      "RiskMan",
      "IIABombayChapter",
      "FutureOfGovernance",
      "InternalAudit",
      "RiskManagement",
      "ESG",
      "DigitalTransformation",
      "AIinAudit",
      "Leadership",
      "Networking"
    ]
  },
  {
    id: "kolkata-team-meet-2025",
    title: "Leadership & Team Alignment Meet – Kolkata",
    date: "December 2025",
    year: 2025,
    month: "December",
    location: "Kolkata Office, India",
    type: "Internal Leadership Meet",

    image: null,
    gallery: null,

    shortDesc:
      "A leadership-driven team meet focused on collaboration, mentorship, and aligning people with purpose as 2025 draws to a close.",

    fullDesc:
      "As 2025 comes to a close, RiskMan Consulting hosted a meaningful team meet at its Kolkata office, where Mr. Sukanta Nag, Partner at RiskMan Consulting, engaged with the team to share insights, perspectives, and guidance. The discussion extended well beyond business updates, focusing on collaboration, mentorship, clarity of direction, and ownership & accountability. The conversations reflected strong alignment between leadership intent and team mindset, reinforcing the belief that when leadership is grounded, mentorship is intentional, and teams feel heard, sustainable growth becomes inevitable. The energy and engagement during the session set a strong foundation for an impactful and ambitious 2026.",

    focusAreas: [
      "Collaboration and collective thinking",
      "Mentorship-driven leadership",
      "Clarity of direction and priorities",
      "Ownership and accountability",
      "Building trust for long-term scale"
    ],

    keyTakeaways: [
      "People, purpose, and perspective drive sustainable growth",
      "Strong alignment between leadership and teams fuels momentum",
      "Foundations strengthened in 2025 pave the way for larger impact in 2026"
    ],

    participants: [
      "CA Sukanta Nag",
      "Prasen Pal",
      "Arpit Garg",
      "Narayanan Rajendran",
      "Jitendra Khimavat",
      "Yashvi Ganeriwal",
      "Yugmita Kesh",
      "Debottam Chakraborty",
      "Rohit Gupta"
    ],

    representedBy: "RiskMan Consulting",

    outlook: "2026 opens a larger canvas for growth, impact, and leadership-driven execution",

    tags: [
      "Leadership",
      "TeamAlignment",
      "Mentorship",
      "Collaboration",
      "RiskMan",
      "PeopleFirst",
      "GrowthMindset",
      "2026Vision"
    ]
  }

  ,
  {
    id: "bombay",
    title: "IIA Bombay Chapter",
    date: "5 March 2025",
    year: 2025,
    month: "March",
    location: "Mumbai, India",
    type: "Chapter",
    image: IIA_Bombay_images[2],
    shortDesc: "Focused conversations on strengthening audit excellence.",
    fullDesc: "The IIA Mumbai Chapter event was a hub of ideas, collaboration, and forward-thinking audit strategies.",
    gallery: IIA_Bombay_images,
  },
  {
    id: "hyderabad",
    title: "IIA Hyderabad Chapter",
    date: "24 May 2025",
    year: 2025,
    month: "May",
    location: "Hyderabad, India",
    type: "Chapter",
    image: IIA_Hyderabad_images[0],
    shortDesc: "Insightful discussions on governance, risk, and internal audit excellence.",
    fullDesc: "We connected with audit professionals to exchange perspectives on governance and risk management.",
    gallery: IIA_Hyderabad_images,
  },
  {
    id: "bangalore",
    title: "IIA Bangalore Chapter",
    date: "19 Feb 2025",
    year: 2025,
    month: "February",
    location: "Bangalore, India",
    type: "Chapter",
    image: IIA_Bangalore_images[0],
    shortDesc: "Exploring innovation and technology in modern internal auditing.",
    fullDesc: "Discussing innovation, digital transformation, and the future of internal auditing.",
    gallery: IIA_Bangalore_images,
  },
  {
    id: "kolkata",
    title: "IIA Kolkata Chapter",
    date: "10 Feb 2025",
    year: 2025,
    month: "February",
    location: "Kolkata, India",
    type: "Chapter",
    image: IIA_Kolkata_images[0],
    shortDesc: "Meaningful dialogue on governance and emerging audit trends.",
    fullDesc: "At the IIA Kolkata Chapter event, professionals explored emerging trends in governance, compliance, and internal audit practices.",
    gallery: IIA_Kolkata_images,
  },
  {
    id: "iia-kolkata-annual-meet-2025-thought-leadership",
    title: "Thought Leadership Address – IIA Kolkata Chapter Annual Meet 2025",
    date: "2025",
    year: 2025,
    location: "Bhubaneswar Club, India",
    type: "Annual Meet / Thought Leadership Session",

    image: null,
    gallery: null,

    theme: "Insight • Oversight • Foresight",

    shortDesc:
      "A thought-leadership address at the IIA Kolkata Chapter Annual Meet 2025, focused on repositioning internal audit as a strategic enabler.",

    fullDesc:
      "At the Annual Meet 2025 of the Institute of Internal Auditors (IIA) – Kolkata Chapter, hosted at Bhubaneswar Club, a thought-leadership address was delivered on the theme “Insight • Oversight • Foresight.” The session presented a boardroom-ready narrative on transforming internal audit from a traditional assurance function into a strategic enabler. The discussion emphasized data-driven risk intelligence, strengthened governance and oversight, and forward-looking audit planning enabled by technology and predictive risk sensing. The overarching message highlighted internal audit’s evolving role as a catalyst for resilient governance and sustainable value creation.",

    focusAreas: [
      "Insight: Data-driven risk intelligence and enhanced diagnostic depth",
      "Oversight: Stronger governance, control effectiveness, and regulatory alignment",
      "Foresight: Predictive risk sensing, technology leverage, and value-centric audit planning"
    ],

    netImpact:
      "Repositioning internal audit as a strategic catalyst for resilient governance and sustainable value creation",

    organizer: "The Institute of Internal Auditors (IIA) – Kolkata Chapter",

    venueHost: "Bhubaneswar Club",

    acknowledgements: [
      "Ratna Rachita Mohanty",
      "Narendra Kumar Pradhan",
      "Bikram Jena"
    ],

    tags: [
      "ThoughtLeadership",
      "InternalAudit",
      "Governance",
      "RiskManagement",
      "IIAKolkataChapter",
      "StrategicAudit",
      "FutureOfAudit"
    ]
  }, {
    id: "iia-hyderabad-annual-conference-2025",
    title: "IIA Hyderabad Annual Conference 2025",
    date: "2025",
    year: 2025,
    location: "ITC Kakatiya, Hyderabad, India",
    type: "Annual Conference",

    image: null,
    gallery: null,

    role: "Silver Sponsor",

    shortDesc:
      "RiskMan Consulting participated as Silver Sponsors at the IIA Hyderabad Annual Conference 2025, engaging with audit and risk professionals on the future of internal audit and risk management.",

    fullDesc:
      "The IIA Hyderabad Annual Conference 2025, held at ITC Kakatiya, Hyderabad, brought together audit, risk, and governance professionals for a day of insightful discussions and collaboration. Hosted by the IIA India Hyderabad Chapter and Vizag Audit Club, the conference focused on the evolving landscape of internal audit, ESG, and enterprise risk management. As Silver Sponsors, RiskMan Consulting actively engaged with participants through booth interactions and thought-provoking conversations. A key highlight was Arpit Garg joining fellow professionals on stage to share perspectives during the panel discussion on “Risks in Focus: Current, Emerging, and Future Risks,” offering timely insights into today’s dynamic risk environment.",

    highlights: [
      "Silver sponsorship by RiskMan Consulting",
      "Booth interactions with audit and risk professionals",
      "Panel discussion on current, emerging, and future risks",
      "Engagement on internal audit, ESG, and enterprise risk management"
    ],

    panelParticipation: {
      topic: "Risks in Focus: Current, Emerging, and Future Risks",
      speaker: "Arpit Garg"
    },

    organizer: [
      "IIA India – Hyderabad Chapter",
      "Vizag Audit Club"
    ],

    participants: [
      "CA Sukanta Nag",
      "Prasen P.",
      "Arpit Garg",
      "Narayanan Rajendran",
      "Jitendra Khimavat",
      "Mukundan K V",
      "Madhuri Krishnaswamy",
      "IIA Hyderabad Women's Circle"
    ],

    representedBy: "RiskMan Consulting",

    outcome:
      "Strengthened industry connections and reinforced commitment to driving business excellence through robust risk frameworks and global best practices",

    tags: [
      "RiskMan",
      "IIAIndia",
      "AuditConference2025",
      "InternalAudit",
      "RiskManagement",
      "Governance",
      "ESG",
      "EnterpriseRisk",
      "ThoughtLeadership",
      "ProfessionalDevelopment",
      "NetworkingOpportunity",
      "FutureReady"
    ]
  }
  ,
  {
    id: "iia-india-international-conference-2025-cybersecurity-talk",
    title: "Cybersecurity Risks & the Role of Internal Audit – IIA India International Conference 2025",
    date: "2025",
    year: 2025,
    location: "India",
    type: "International Conference / Thought Leadership Session",

    image: null,
    gallery: null,

    speaker: {
      name: "Arpit Garg",
      designation: "Co-founding Partner",
      organization: "RiskMan Consulting"
    },

    shortDesc:
      "A thought-provoking session at the IIA India International Conference 2025 highlighting critical cybersecurity risks for 2025 and the evolving role of internal auditors.",

    fullDesc:
      "At the IIA India International Conference 2025, Arpit Garg, Co-founding Partner at RiskMan Consulting, delivered an impactful session on the cybersecurity risks organizations must prioritize in 2025 and the critical role internal auditors play in strengthening security frameworks. The session emphasized the importance of endpoint security, auditor involvement in validating security controls, and the adoption of standardized benchmarks to proactively mitigate cyber risks. The discussion reinforced that cybersecurity is no longer optional but a business imperative requiring strong governance, continuous assurance, and forward-looking risk intelligence.",

    keyTakeaways: [
      "Endpoint security is a critical line of defense against modern cyber threats",
      "Internal auditors must assess the logic, rules, and effectiveness of security tools",
      "CIS Benchmarks provide free, standardized guidelines for firewalls, networks, and endpoint protection",
      "Proactive adoption of benchmarks and regular testing strengthens cybersecurity posture"
    ],

    frameworksAndTools: [
      "CIS Benchmarks",
      "Endpoint Security Controls",
      "Firewall & Network Security Standards",
      "Security Testing & Assurance Mechanisms"
    ],

    netImpact:
      "Positioning internal audit as a key enabler of resilient cybersecurity frameworks and proactive risk mitigation",

    organizer: [
      "The Institute of Internal Auditors (IIA)",
      "The Institute of Internal Auditors (IIA) – Bombay Chapter"
    ],

    participants: [
      "Burzin Dubash",
      "Krishnan Venugopal",
      "Mukundan K V",
      "CA Sukanta Nag",
      "Prasen Pal",
      "Arpit Garg",
      "Pranshul Agarwal"
    ],

    representedBy: "RiskMan Consulting",

    tags: [
      "CyberSecurity",
      "RiskManagement",
      "InternalAudit",
      "IIAIndia",
      "EndpointSecurity",
      "Governance",
      "Compliance",
      "RiskIntelligence",
      "AIinAudit",
      "RiskMan",
      "IIAConference",
      "RiskLeadership",
      "AuditInnovation",
      "CISBenchmarks",
      "GRC"
    ]
  }
  ,
  {
    id: "iia-bangalore-annual-conference-2025",
    title: "IIA India Bangalore Chapter Annual Conference 2025",
    date: "2025",
    year: 2025,
    location: "Bangalore, India",
    type: "Annual Conference",

    image: null,
    gallery: null,

    role: "Sponsor",

    theme: "Insight to Impact",

    shortDesc:
      "RiskMan Consulting participated as a proud sponsor at the IIA India Bangalore Chapter Annual Conference 2025, engaging with leaders on audit transformation and governance.",

    fullDesc:
      "RiskMan Consulting was thrilled to be part of the IIA India Bangalore Chapter Annual Conference 2025 as a proud sponsor. Organized by The Institute of Internal Auditors India – Bangalore Chapter, the conference featured insightful discussions on audit transformation, risk management, compliance, and automation under the theme “Insight to Impact.” The event provided an excellent platform to connect with industry leaders, experts, and professionals who are shaping the future of internal audit and governance. The collaborative spirit and high-quality exchanges made the conference a valuable and memorable experience.",

    focusAreas: [
      "Audit transformation",
      "Risk management",
      "Compliance and governance",
      "Automation and future-ready audit practices"
    ],

    organizer: "The Institute of Internal Auditors India – Bangalore Chapter",

    participants: [
      "Sivaram Subramoniam",
      "Lalitha Satheesh",
      "Jayashree C B",
      "Krishnan Venugopal",
      "Burzin Dubash",
      "Mukundan K V",
      "Prasen Pal",
      "Arpit Garg",
      "CA Sukanta Nag",
      "IIA Bangalore Chapter"
    ],

    representedBy: "RiskMan Consulting",

    outcome:
      "Strengthened professional connections and reinforced commitment to advancing internal audit, governance, and leadership excellence",

    tags: [
      "IIABangalore",
      "InternalAudit",
      "RiskManagement",
      "Governance",
      "Compliance",
      "Networking",
      "Leadership",
      "AuditTransformation",
      "RiskMan"
    ]
  }
  ,
  {
    id: "iia-india-international-conference-2025-riskman",
    title: "IIA India International Conference 2025",
    date: "2025",
    year: 2025,
    location: "Taj The Trees, Mumbai, India",
    type: "International Conference",

    image: null,
    gallery: null,

    shortDesc:
      "RiskMan Consulting participated in the IIA India International Conference 2025, engaging with leaders on the future of internal audit, risk, and governance.",

    fullDesc:
      "RiskMan Consulting was proud to be part of the IIA India International Conference 2025, held at Taj The Trees, Mumbai. The conference brought together thought leaders, risk experts, and governance professionals to exchange insights on the evolving landscape of internal audit, risk management, and compliance. A key highlight was Arpit Garg, Co-founding Partner at RiskMan Consulting, sharing perspectives during the panel discussion on “Risks Your Organization Should Be Preparing For in 2025,” alongside industry peers. The event fostered meaningful knowledge sharing and reinforced RiskMan’s commitment to driving risk intelligence and governance excellence in a rapidly changing world.",

    panelParticipation: {
      topic: "Risks Your Organization Should Be Preparing For in 2025",
      panelist: "Arpit Garg",
      coPanelists: [
        "Krishnan Venugopal",
        "Shrikrishna Dikshit"
      ]
    },

    organizer: [
      "The Institute of Internal Auditors (IIA)",
      "The Institute of Internal Auditors (IIA) – Bombay Chapter"
    ],

    acknowledgements: [
      "Burzin Dubash"
    ],

    participants: [
      "Arpit Garg",
      "Prasen Pal",
      "CA Sukanta Nag",
      "Pranshul Agarwal"
    ],

    representedBy: "RiskMan Consulting",

    outcome:
      "Strengthened engagement with the internal audit community and reinforced focus on risk intelligence, governance, and compliance excellence",

    tags: [
      "RiskManagement",
      "InternalAudit",
      "IIAIndia",
      "Governance",
      "Compliance",
      "RiskIntelligence",
      "AIinAudit",
      "RiskMan",
      "IIAConference",
      "RiskLeadership",
      "AuditInnovation"
    ]
  }
  ,

  {
    id: "delhi",
    title: "AGM IIA Delhi",
    date: "18 July 2025",
    year: 2025,
    month: "July",
    location: "Delhi, India",
    type: "Conference",
    image: AGM_IIA_Delhi_images[0],
    shortDesc: "Strategic discussions shaping the future of internal auditing.",
    fullDesc: "At the AGM IIA Delhi Chapter, audit leaders collaborated on strategies, insights, and advancements shaping the future of internal audit.",
    gallery: AGM_IIA_Delhi_images,
  },
  {
    id: "wofa",
    title: "WOFA 2025",
    date: "31 Jan – 2 Feb 2025",
    year: 2025,
    month: "January",
    location: "New Delhi, India",
    type: "Conference",
    image: Wofa_images[0],
    shortDesc: "A global platform celebrating leadership and innovation.",
    fullDesc: "WOFA 2025 brought together changemakers and leaders for global collaboration.",
    gallery: Wofa_images,
  }
];

/* =======================
   SUB-COMPONENTS
======================= */

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${active
      ? "bg-brandPrimary text-white shadow-lg shadow-brandPrimary/30"
      : "bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-white/10"
      }`}
  >
    {label}
  </button>
);

const EventCard = ({ event, onClick }) => (
  <motion.div
    variants={itemVariants}
    layout
    className="group relative bg-white dark:bg-surfaceDark rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-white/5"
    onClick={onClick}
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute top-4 left-4">
        <span className="px-4 py-1.5 bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-brandPrimary dark:text-brandAccent shadow-sm">
          {event.type}
        </span>
      </div>
    </div>

    <div className="p-8">
      <div className="flex items-center gap-3 mb-4 text-xs font-medium text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1.5">
          <FaCalendarAlt className="text-brandPrimary" /> {event.date}
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-300" />
        <span className="flex items-center gap-1.5">
          <FaMapMarkerAlt className="text-brandPrimary" /> {event.location.split(',')[0]}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brandPrimary transition-colors">
        {event.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
        {event.shortDesc}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm font-bold text-brandPrimary dark:text-brandAccent flex items-center gap-2">
          View Gallery <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="h-px flex-1 bg-gray-100 dark:bg-white/5 ml-4" />
      </div>
    </div>
  </motion.div>
);

const GalleryModal = ({ event, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!event) return null;

  const next = () => setCurrentIndex((prev) => (prev + 1) % event.gallery.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + event.gallery.length) % event.gallery.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          onClick={onClose}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[100]">
            <FaTimes size={32} />
          </button>

          <div
            className="relative w-full max-w-7xl grid lg:grid-cols-3 gap-0 overflow-hidden bg-white dark:bg-surfaceDark rounded-[2.5rem] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="lg:col-span-2 relative bg-black flex items-center justify-center min-h-[400px] lg:h-[80vh]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={event.gallery[currentIndex]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              <button onClick={prev} className="absolute left-4 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                <FaChevronLeft />
              </button>
              <button onClick={next} className="absolute right-4 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                <FaChevronRight />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white/80 text-xs tracking-widest">
                {currentIndex + 1} / {event.gallery.length}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-10 flex flex-col justify-center border-l border-gray-100 dark:border-white/5">
              <span className="text-brandPrimary font-bold uppercase tracking-tighter text-sm mb-2">{event.type}</span>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight">{event.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">{event.fullDesc}</p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                  <FaCalendarAlt className="text-brandPrimary" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">Event Date</p>
                    <p className="text-sm font-bold dark:text-white">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-white/5">
                  <FaMapMarkerAlt className="text-brandPrimary" />
                  <div>
                    <p className="text-[10px] uppercase text-gray-400 font-bold">Venue</p>
                    <p className="text-sm font-bold dark:text-white">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* =======================
   MAIN PAGE
======================= */
export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState({ year: "All", type: "All" });

  const years = ["All", ...new Set(events.map((e) => e.year))].sort((a, b) => b - a);
  const types = ["All", ...new Set(events.map((e) => e.type))];

  const filteredEvents = events.filter((e) => {
    return (filter.year === "All" || e.year.toString() === filter.year.toString()) &&
      (filter.type === "All" || e.type === filter.type);
  });

  return (
    <div className="min-h-screen bg-[#F8F9FB] dark:bg-bgDark transition-colors duration-500">
      {/* Aurora Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-brandPrimary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-brandAccent/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 container mx-auto max-w-7xl px-6 py-24">
        {/* Header Section */}
        <header className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-brandPrimary" />
            <span className="text-brandPrimary font-bold uppercase tracking-widest text-xs">Our Journey</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter"
          >
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandAccent">Collective</span> Impact.
          </motion.h1>
        </header>

        {/* Floating Filter Bar */}
        <section className="sticky top-8 z-40 mb-16">
          <div className="p-2 bg-white/70 dark:bg-surfaceDark/70 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-white/5 shadow-xl flex flex-wrap items-center gap-6 justify-between">
            <div className="flex items-center gap-2 px-4 border-r border-gray-200 dark:border-white/10 mr-2">
              <FaFilter className="text-gray-400 text-sm" />
              <span className="text-xs font-bold uppercase text-gray-500">Filters</span>
            </div>

            <div className="flex flex-1 items-center gap-8 overflow-x-auto no-scrollbar py-2">
              <div className="flex items-center gap-2">
                {years.map(y => (
                  <FilterButton
                    key={y} label={y}
                    active={filter.year === y}
                    onClick={() => setFilter(f => ({ ...f, year: y }))}
                  />
                ))}
              </div>
              <div className="w-px h-6 bg-gray-200 dark:bg-white/10" />
              <div className="flex items-center gap-2">
                {types.map(t => (
                  <FilterButton
                    key={t} label={t}
                    active={filter.type === t}
                    onClick={() => setFilter(f => ({ ...f, type: t }))}
                  />
                ))}
              </div>
            </div>

            <p className="hidden md:block px-6 text-[10px] font-black uppercase text-gray-400">
              {filteredEvents.length} Events Found
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => { setSelectedEvent(event); setModalOpen(true); }}
              />
            ))}
          </AnimatePresence>
        </motion.section>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-2xl font-bold text-gray-400">No events match your selection.</h3>
            <button
              onClick={() => setFilter({ year: "All", type: "All" })}
              className="mt-4 text-brandPrimary font-bold underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </main>

      {/* Modal */}
      <GalleryModal
        event={selectedEvent}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}