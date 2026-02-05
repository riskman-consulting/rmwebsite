// src/components/events/EventGrid.jsx
import { useMemo, useState } from "react";
import EventCard from "./EventCard";
import { IIA_Bombay_2026_images } from "../../assets/iia-bombay/2026";
import { IIA_Internal_Leadership_2025_images } from "../../assets/internal-leadership/2025";
import { IIA_Hyderabad_images } from "../../assets/iia-hyderabad";
import { IIA_Hyderabad_2025_images } from "../../assets/iia-hyderabad/2025";
import { IIA_Kolkata_images } from "../../assets/iia-kolkata";
import { IIA_Kolkata_2025_images } from "../../assets/iia-kolkata/2025";
import { IIA_International_Conference_2025_images } from "../../assets/iia-international-conference/2025";
import { IIA_Bombay_images } from "../../assets/iia-bombay";
import { IIA_Bangalore_images } from "../../assets/iia-bangalore";
import { IIA_DELHI_JULY_2024_Images } from "../../assets/journey/iia_conference_delhi_july_2024";
import { Wofa_images } from "../../assets/wofa-2025";

const events = [
  // =========================
  // 2026 EVENTS
  // =========================
  {
    id: "iia-bombay-ic-2026",
    title: "IIA Bombay Chapter International Conference 2026",
    meta: {
      date: "15 March 2026",
      location: "Mumbai, India",
      type: "International Conference",
    },
    description:
      "A prestigious international conference focused on the future of governance, internal audit, and risk management.",
    images: {
      banner: IIA_Bombay_2026_images[0],
      gallery: IIA_Bombay_2026_images,
    },
  },

  // =========================
  // 2025 EVENTS
  // =========================
  {
    id: "kolkata-team-meet-2025",
    title: "Leadership & Team Alignment Meet – Kolkata",
    meta: {
      date: "December 2025",
      location: "Kolkata Office, India",
      type: "Internal Leadership Meet",
    },
    description:
      "A leadership-driven team meet focused on collaboration, mentorship, and aligning people with purpose as 2025 draws to a close.",
    images: {
      banner: IIA_Internal_Leadership_2025_images[0],
      gallery: IIA_Internal_Leadership_2025_images,
    },
  },

  {
    id: "iia-hyderabad-annual-conference-2025",
    title: "IIA Hyderabad Annual Conference 2025",
    meta: {
      date: "2025",
      location: "ITC Kakatiya, Hyderabad, India",
      type: "Annual Conference",
    },
    description:
      "RiskMan Consulting participated as Silver Sponsors, engaging with audit and risk professionals on the future of internal audit and governance.",
    images: {
      banner: IIA_Hyderabad_2025_images[0],
      gallery: IIA_Hyderabad_2025_images,
    },
  },

  {
    id: "iia-kolkata-annual-meet-2025",
    title: "Thought Leadership Address – IIA Kolkata Chapter Annual Meet 2025",
    meta: {
      date: "2025",
      location: "Bhubaneswar Club, India",
      type: "Annual Meet",
    },
    description:
      "A thought-leadership address focused on repositioning internal audit as a strategic enabler for resilient governance.",
    images: {
      banner: IIA_Kolkata_2025_images[0],
      gallery: IIA_Kolkata_2025_images,
    },
  },

  {
    id: "iia-india-international-conference-2025-cybersecurity",
    title:
      "Cybersecurity Risks & the Role of Internal Audit – IIA India International Conference 2025",
    meta: {
      date: "2025",
      location: "India",
      type: "International Conference",
    },
    description:
      "A session highlighting critical cybersecurity risks for 2025 and the evolving role of internal auditors.",
    images: {
      banner: IIA_International_Conference_2025_images[0],
      gallery: IIA_International_Conference_2025_images,
    },
  },

  {
    id: "iia-bangalore-annual-conference-2025",
    title: "IIA India Bangalore Chapter Annual Conference 2025",
    meta: {
      date: "2025",
      location: "Bangalore, India",
      type: "Annual Conference",
    },
    description:
      "RiskMan Consulting participated as a proud sponsor, engaging with leaders on audit transformation and governance.",
    images: {
      banner: IIA_Bangalore_images[1],
      gallery: IIA_Bangalore_images,
    },
  },

  // {
  //   id: "iia-india-international-conference-2025",
  //   title: "IIA India International Conference 2025",
  //   meta: {
  //     date: "2025",
  //     location: "Taj The Trees, Mumbai, India",
  //     type: "International Conference",
  //   },
  //   description:
  //     "RiskMan Consulting engaged with leaders on the future of internal audit, risk, and governance.",
  //   images: {
  //     banner: IIA_International_Conference_2025_images[2],
  //     gallery: IIA_International_Conference_2025_images,
  //   },
  // },

  // {
  //   id: "iia-hyderabad-chapter-2025",
  //   title: "IIA Hyderabad Chapter Meet",
  //   meta: {
  //     date: "24 May 2025",
  //     location: "Hyderabad, India",
  //     type: "Chapter Meet",
  //   },
  //   description:
  //     "Insightful discussions on governance, risk, and internal audit excellence with professionals across industries.",
  //   images: {
  //     banner: IIA_Hyderabad_images[0],
  //     gallery: IIA_Hyderabad_images,
  //   },
  // },

  {
    id: "iia-bombay-chapter-2025",
    title: "IIA Bombay Chapter Meet",
    meta: {
      date: "5 March 2025",
      location: "Mumbai, India",
      type: "Chapter Meet",
    },
    description:
      "Focused conversations on strengthening audit excellence and forward-thinking audit strategies.",
    images: {
      banner: IIA_Bombay_images[2],
      gallery: IIA_Bombay_images,
    },
  },

  // {
  //   id: "iia-bangalore-chapter-2025",
  //   title: "IIA Bangalore Chapter Meet",
  //   meta: {
  //     date: "19 Feb 2025",
  //     location: "Bangalore, India",
  //     type: "Chapter Meet",
  //   },
  //   description:
  //     "Exploring innovation, technology, and the future of modern internal auditing.",
  //   images: {
  //     banner: IIA_Bangalore_images[0],
  //     gallery: IIA_Bangalore_images,
  //   },
  // },

  {
    id: "iia-kolkata-chapter-2025",
    title: "IIA Kolkata Chapter Meet",
    meta: {
      date: "10 Feb 2025",
      location: "Kolkata, India",
      type: "Chapter Meet",
    },
    description:
      "Meaningful dialogue on governance frameworks and emerging audit trends.",
    images: {
      banner: IIA_Kolkata_images[0],
      gallery: IIA_Kolkata_images,
    },
  },

  {
    id: "iia-delhi-conference-2024",
    title: "IIA Delhi Conference 2024",
    meta: {
      date: "2024",
      location: "Delhi, India",
      type: "Conference",
    },
    description:
      "Engaging discussions on the evolving landscape of internal audit and risk management.",
    images: {
      banner: IIA_DELHI_JULY_2024_Images[0],
      gallery: IIA_DELHI_JULY_2024_Images,
    },
  },

  {
    id: "wofa-2025",
    title: "WOFA 2025",
    meta: {
      date: "31 Jan – 2 Feb 2025",
      location: "New Delhi, India",
      type: "Conference",
    },
    description:
      "A global platform celebrating leadership, innovation, and collaboration among changemakers.",
    images: {
      banner: Wofa_images[0],
      gallery: Wofa_images,
    },
  },
];

/* ======================================================
   BM25 ALGORITHM FOR ADVANCED FILTERING
====================================================== */
class BM25Filter {
  constructor(k1 = 1.5, b = 0.75) {
    this.k1 = k1; // Term frequency saturation parameter
    this.b = b; // Length normalization parameter
  }

  // Tokenize text into words
  tokenize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 0);
  }

  // Calculate term frequency
  termFrequency(term, document) {
    return document.filter((word) => word === term).length;
  }

  // Calculate inverse document frequency
  inverseDocFrequency(term, documents) {
    const docsWithTerm = documents.filter((doc) => doc.includes(term)).length;
    return Math.log(
      (documents.length - docsWithTerm + 0.5) / (docsWithTerm + 0.5) + 1
    );
  }

  // Calculate BM25 score for a document
  calculateScore(query, document, documents, avgDocLength) {
    const queryTerms = this.tokenize(query);
    const docLength = document.length;

    let score = 0;

    for (const term of queryTerms) {
      const tf = this.termFrequency(term, document);
      const idf = this.inverseDocFrequency(term, documents);

      const numerator = tf * (this.k1 + 1);
      const denominator =
        tf + this.k1 * (1 - this.b + this.b * (docLength / avgDocLength));

      score += idf * (numerator / denominator);
    }

    return score;
  }

  // Rank documents based on query
  rank(query, items, fields = ["title", "description"]) {
    if (!items.length) return [];

    // Prepare documents
    const documents = items.map((item) => {
      const text = fields.map((field) => item[field] || "").join(" ");
      return this.tokenize(text);
    });

    // Calculate average document length
    const avgDocLength =
      documents.reduce((sum, doc) => sum + doc.length, 0) / documents.length;

    // Calculate scores
    const scores = items.map((item, index) => ({
      item,
      score: this.calculateScore(query, documents[index], documents, avgDocLength),
    }));

    // Sort by score (highest first)
    return scores
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.item);
  }
}

const extractYear = (dateStr) => {
  const match = String(dateStr || "").match(/(19|20)\d{2}/);
  return match ? match[0] : null;
};


// =======================
// COMPONENT
// =======================
export default function EventsGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [yearFilter, setYearFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  const bm25 = useMemo(() => new BM25Filter(), []);

  const normalizedEvents = useMemo(
    () =>
      events.map((event) => ({
        ...event,
        _year: extractYear(event?.meta?.date),
        _location: event?.meta?.location || "",
        _type: event?.meta?.type || "",
        _date: event?.meta?.date || "",
      })),
    []
  );

  const yearOptions = useMemo(() => {
    const years = normalizedEvents.map((e) => e._year).filter(Boolean);
    const unique = Array.from(new Set(years));
    unique.sort((a, b) => Number(b) - Number(a));
    return ["All", ...unique];
  }, [normalizedEvents]);

  const locationOptions = useMemo(() => {
    const locations = normalizedEvents.map((e) => e._location).filter(Boolean);
    const unique = Array.from(new Set(locations));
    unique.sort((a, b) => a.localeCompare(b));
    return ["All", ...unique];
  }, [normalizedEvents]);

  const filteredEvents = useMemo(() => {
    let data = normalizedEvents;

    if (yearFilter !== "All") {
      data = data.filter((e) => e._year === yearFilter);
    }

    if (locationFilter !== "All") {
      data = data.filter((e) => e._location === locationFilter);
    }

    if (searchQuery.trim()) {
      data = bm25.rank(searchQuery, data, [
        "title",
        "description",
        "_location",
        "_year",
        "_date",
        "_type",
      ]);
    }

    return data;
  }, [normalizedEvents, yearFilter, locationFilter, searchQuery, bm25]);

  const handleReset = () => {
    setSearchQuery("");
    setYearFilter("All");
    setLocationFilter("All");
  };

  return (
    <section id="past-events" className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <h2 className="mb-12 text-3xl font-heading text-brandDark dark:text-brandAccent">
          Events & Conferences
        </h2>

        {/* 🔹 GRID */}
        {/* Filter Bar */}
        <div className="flex flex-col gap-4 p-4 mb-12 border rounded-2xl border-borderLight dark:border-borderDark bg-white/70 dark:bg-surfaceDark/70 md:p-5 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, location, or year"
                className="w-full px-4 py-3 text-sm font-medium transition bg-white border outline-none rounded-xl border-borderLight dark:border-borderDark dark:bg-bgDark text-brandDark dark:text-brandLight focus:ring-2 focus:ring-brandAccent/40"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="px-3 py-2 text-sm font-medium bg-white border rounded-xl border-borderLight dark:border-borderDark dark:bg-bgDark text-brandDark dark:text-brandLight"
              >
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year === "All" ? "All Years" : year}
                  </option>
                ))}
              </select>

              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-3 py-2 text-sm font-medium bg-white border rounded-xl border-borderLight dark:border-borderDark dark:bg-bgDark text-brandDark dark:text-brandLight"
              >
                {locationOptions.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === "All" ? "All Locations" : loc}
                  </option>
                ))}
              </select>

              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-bold tracking-widest uppercase transition border rounded-xl border-brandAccent/30 bg-brandAccent/10 text-brandDark dark:text-white/70 hover:bg-brandAccent/20"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brandDark/50 dark:text-brandLight/50">
            Showing {filteredEvents.length} event{filteredEvents.length === 1 ? "" : "s"}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {filteredEvents.length === 0 && (
          <div className="p-10 mt-10 text-center border rounded-2xl border-borderLight dark:border-borderDark bg-white/80 dark:bg-surfaceDark/80">
            <p className="text-sm font-semibold text-brandDark/70 dark:text-brandLight/70">
              No events match your filters. Try a different year, location, or search term.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
