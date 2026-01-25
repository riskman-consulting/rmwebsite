import { AGM_IIA_Delhi_images } from "../../assets/AGM-IIA-Delhi";
import { IIA_Bangalore_images } from "../../assets/iia-bangalore";
import { IIA_Bombay_images } from "../../assets/iia-bombay";
import { IIA_Bombay_2026_images } from "../../assets/iia-bombay/2026";
import { IIA_Hyderabad_images } from "../../assets/iia-hyderabad";
import { IIA_Hyderabad_2025_images } from "../../assets/iia-hyderabad/2025";
import { IIA_International_Conference_2025_images } from "../../assets/iia-international-conference/2025";
import { IIA_Kolkata_images } from "../../assets/iia-kolkata";
import { IIA_Kolkata_2025_images } from "../../assets/iia-kolkata/2025";
import { IIA_Internal_Leadership_2025_images } from "../../assets/internal-leadership/2025";
import { Riskman_Aniversary_5_year_images } from "../../assets/riskman-anniversary/year-5";
import { Wofa_images } from "../../assets/wofa-2025";
import journeyImages from "../../assets/journey";





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

    image: IIA_Internal_Leadership_2025_images[0], 
    gallery: IIA_Internal_Leadership_2025_images.slice(0, IIA_Internal_Leadership_2025_images.length >= 5 ? 5 : IIA_Internal_Leadership_2025_images.length), 

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

    image: IIA_Kolkata_2025_images[0],
    gallery: IIA_Kolkata_2025_images,

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

    image: IIA_Hyderabad_2025_images[0],
    gallery: IIA_Hyderabad_2025_images,

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

    image:IIA_International_Conference_2025_images[0],
    gallery:IIA_International_Conference_2025_images,

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

    image: IIA_International_Conference_2025_images[1],
    gallery: IIA_International_Conference_2025_images,

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

    image: IIA_International_Conference_2025_images[2],
    gallery: IIA_International_Conference_2025_images,

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
  },
  {
    id:"iia-conference-delhi-2024",
    title:"IIA Delhi Conference 2024",
    date:"2024",
    year:2024,
    location:"Delhi, India",
    type:"Conference",
    image:journeyImages.iiaDelhiJuly2024[0],
    shortDesc:"Engaging discussions on the evolving landscape of internal audit and risk management.",
    fullDesc:"The IIA Delhi Conference 2024 provided a platform for professionals to exchange insights on internal audit, risk management, and governance trends.",
    gallery:journeyImages.iiaDelhiJuly2024,
    
  }
];

export const journeyData = {
  hero: {
    title: "Journey with RiskMan",
    subtitle: "A story of learning, ownership, and growth",
    coverImage: "journey-hero-riskman.jpg"
  },

  timeline: [
    {
      year: "2020",
      role: "Article Assistant",
      title: "The Beginning",
      description:
        "My journey with RiskMan began in 2020 as an Article Assistant. At an early stage of my career, I was keen to understand how risk management and audit function in real business environments. Working closely with Arpit Sir helped me understand the vision of building RiskMan as a firm focused on practical, business-oriented risk solutions.",
      images: [
        ...journeyImages.teamDinnerOct2021
      ]
    },
    {
      year: "2020",
      role: "Article Assistant",
      title: "COVID-19 & Resilience",
      description:
        "Soon after my first assignment, the COVID-19 outbreak created uncertainty as work shifted remotely. Despite initial disruptions, RiskMan continued operations and I resumed work after a brief pause. This phase strengthened my adaptability and reinforced the importance of ownership and discipline.",
      images: journeyImages.teamDinnerFeb2022
    },
    {
      year: "2021–2023",
      role: "Article Assistant",
      title: "Mentorship & Exposure",
      description:
        "Throughout this phase, partners at RiskMan consistently guided me on approach, quality, and client mindset. Their mentorship played a critical role in shaping my professional thinking while working across diverse industries and client engagements.",
      images:journeyImages.teamDinnerOct2021
    },
    {
      year: "2023",
      role: "Consultant",
      title: "Transition to Consultant",
      description:
        "After completing my article-ship in 2023, I transitioned into the role of Consultant at RiskMan. This phase involved greater ownership, independent client handling, and deeper engagement responsibilities.",
      images: journeyImages.teamLunchDecember2023
    },
    {
      year: "2023–2025",
      role: "Consultant",
      title: "Certification Journey",
      description:
        "Following discussions with leadership on my long-term career path, I aligned my focus toward CIA and CISA certifications. With consistent effort alongside client responsibilities, I successfully qualified both certifications.",
      images: [...journeyImages.iiaDelhiJuly2024, ...journeyImages.auditLeadersSummitMumbaiNov2024, ...journeyImages.iiaMumbaiMarch2025, ...journeyImages.agmDelhiJuly2025, journeyImages.ciaCelebration]
    },
    {
      year: "2025-present",
      role: "Manager",
      title: "Leadership & Growth",
      description:
        "In 2025, after qualifying CIA and CISA, I was promoted to Manager. Today, I lead a team of over 10 professionals and manage multiple client engagements independently, reflecting a journey of trust, learning, and growth.",
      images: [...journeyImages.diwaliChristmasZomato, ...journeyImages.gameSession, ...journeyImages.iiaMumbaiJan2026]
    }
  ],

  experience: {
    industries: [
      "Quick Commerce",
      "Digital & News Media",
      "Insurance",
      "Textile",
      "Automobile",
      "Pharmaceuticals",
      "IT",
      "Ed-tech",
      "FMCG",
      "Alco-Bev"
    ],
    clients: [
      "Zomato",
      "Blinkit",
      "Feeding India",
      "CARE Health Insurance",
      "Schoolnet",
      "Pernod Ricard",
      "TG Minda",
      "HP Maxico",
      "Emami",
      "Tirupati Medicare",
      "Daido",
      "Granules"
    ],
    serviceAreas: [
      "Internal Audit",
      "Concurrent Audit",
      "Distribution Audit",
      "Transaction Audit",
      "IFC Design & Testing",
      "SOX Testing",
      "Digital Transformation"
    ],
    digitalInitiatives: [
      "MDM Implementation",
      "BRD Preparation",
      "UAT Execution",
      "Test Scenario Development",
      "Steering Committee Discussions",
      "Business–Technology Alignment"
    ]
  },

  culture: {
    title: "Culture at RiskMan",
    description:
      "RiskMan has provided an environment where learning and ownership go hand in hand. From the beginning, responsibility was encouraged with consistent leadership guidance. The culture is collaborative, mentoring-driven, and focused on practical risk management.",
    values: [
      "Ownership",
      "Discipline",
      "Accountability",
      "Adaptability",
      "Collaboration"
    ],
    highlights: [
      "Approachable leadership",
      "Strong mentoring culture",
      "Constructive feedback",
      "Recognition of effort",
      "Celebration of team achievements"
    ],
    images: [...journeyImages.teamDinnerDecember2023, ...journeyImages.iiaMumbaiJan2026]
  },

  lifeAtRiskMan: [
    {
      title: "Team Dinner",
      date: "October 2021",
      image: journeyImages.teamDinnerOct2021[0]
    },
    {
      title: "Team Dinner",
      date: "February 2022",
      image: journeyImages.teamDinnerFeb2022[0]
    },
    {
      title: "Team Dinner",
      date: "December 2023",
      image: journeyImages.teamDinnerDecember2023[0]
    },
    {
      title: "Team Lunch at Zomato",
      date: "December 2023",
      image: journeyImages.teamLunchDecember2023[0]
    },
    {
      title: "Team Member Birthday",
      location: "Schoolnet",
      image:journeyImages.teamDinnerOct2021[1]
    },
    {
      title: "IIA Conference",
      location: "Delhi",
      date: "July 2024",
      image: journeyImages.iiaDelhiJuly2024[0]
    },
    {
      title: "Audit Leaders Summit",
      location: "Mumbai",
      date: "November 2024",
      image: journeyImages.auditLeadersSummitMumbaiNov2024[0]
    },
    {
      title: "IIA Conference",
      location: "Mumbai",
      date: "March 2025",
      image: journeyImages.iiaMumbaiMarch2025[0]
    },
    {
      title: "AGM",
      location: "Delhi",
      date: "July 2025",
      image: journeyImages.agmDelhiJuly2025[0]
    },
    {
      title: "CIA Celebration with Team",
      image: journeyImages.ciaCelebration[0]
    },
    {
      title: "Festive Celebration",
      description: "Diwali & Christmas with Zomato Team",
      image: journeyImages.diwaliChristmasZomato[0]
    },
    {
      title: "IIA Conference",
      location: "Mumbai",
      date: "January 2026",
      image: journeyImages.iiaMumbaiJan2026[0]
    }
  ],

  summary: {
    text:
      "The journey with RiskMan reflects continuous learning, trust, and professional growth. From an Article Assistant to a Manager, the experience has shaped a confident, disciplined, and business-aligned risk professional.",
    image: Riskman_Aniversary_5_year_images[0]
  }
};
