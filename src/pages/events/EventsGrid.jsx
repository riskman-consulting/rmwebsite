import React, { useState } from 'react';
import { Filter, PieChart } from 'lucide-react';
import EventCard from "./EventCard";
 
// Your data imports
import { IIA_Bombay_2026_images } from "../../assets/iia-bombay/2026";
import { IIA_Internal_Leadership_2025_images } from "../../assets/internal-leadership/2025";
import { IIA_Hyderabad_2025_images } from "../../assets/iia-hyderabad/2025";
import { IIA_Kolkata_2025_images } from "../../assets/iia-kolkata/2025";
import { IIA_International_Conference_2025_images } from "../../assets/iia-international-conference/2025";
import { IIA_Bangalore_images } from "../../assets/iia-bangalore";
import { IIA_Bombay_images } from "../../assets/iia-bombay";
import { IIA_Kolkata_images } from "../../assets/iia-kolkata";
import { IIA_DELHI_JULY_2024_Images } from "../../assets/journey/iia_conference_delhi_july_2024";
import { Wofa_images } from "../../assets/wofa-2025";
import { Wofa_2024_Image } from '../../assets/wofa-2025/wofa-2024';
import { IIA_Bangalore_2026_images } from '../../assets/iia-bangalore/2026';
 
const myEvents = [
  {
    id: "iia-bangalore-2026",
    title: "IIA Bangalore Chapter International Conference 2026",
    meta: {
      date: "12 February 2026",
      location: "Bangalore, India",
      type: "IIA Bangalore Chapter 2026",
    },
    description: "",
    images: {
      banner: IIA_Bangalore_2026_images[0],
      gallery: IIA_Bangalore_2026_images,
    },
  },
  {
    id: "iia-bombay-ic-2026",
    title: "IIA Bombay Chapter International Conference 2026",
    meta: {
      date: "15 March 2026",
      location: "Mumbai, India",
      type: "IIA Bombay Chapter 2026",
    },
    description:
      "A prestigious international conference focused on the future of governance, internal audit, and risk management.",
    images: {
      banner: IIA_Bombay_2026_images[0],
      gallery: IIA_Bombay_2026_images,
    },
  },
  {
    id: "iia-hyderabad-annual-conference-2025",
    title: "IIA Hyderabad Annual Conference 2025",
    meta: {
      date: "2025",
      location: "ITC Kakatiya, Hyderabad, India",
      type: "IIA Hyderabad Chapter 2025",
    },
    description:
      "RiskMan Consulting participated as Silver Sponsors, engaging with audit and risk professionals.",
    images: {
      banner: IIA_Hyderabad_2025_images[0],
      gallery: IIA_Hyderabad_2025_images,
    },
  },
  {
    id: "iia-kolkata-annual-meet-2025",
    title:
      "Thought Leadership Address – IIA Kolkata Chapter Annual Meet 2025",
    meta: {
      date: "2025",
      location: "Bhubaneswar Club, India",
      type: "IIA Kolkata Chapter 2025",
    },
    description:
      "A thought-leadership address focused on repositioning internal audit as a strategic enabler.",
    images: {
      banner: IIA_Kolkata_2025_images[0],
      gallery: IIA_Kolkata_2025_images,
    },
  },
  {
    id: "iia-bangalore-annual-conference-2025",
    title: "IIA India Bangalore Chapter Annual Conference 2025",
    meta: {
      date: "2025",
      location: "Bangalore, India",
      type: "IIA Bangalore Chapter 2025",
    },
    description:
      "RiskMan Consulting participated as a proud sponsor, engaging with leaders on audit transformation.",
    images: {
      banner: IIA_International_Conference_2025_images[0],
      gallery: [
        ...IIA_Bangalore_images,
        ...IIA_International_Conference_2025_images,
      ],
    },
  },
  {
    id: "iia-bombay-chapter-2025",
    title: "IIA Bombay Chapter Meet",
    meta: {
      date: "5 March 2025",
      location: "Mumbai, India",
      type: "IIA Bombay Chapter 2025",
    },
    description:
      "Focused conversations on strengthening audit excellence and forward-thinking audit strategies.",
    images: {
      banner: IIA_Bombay_images[2],
      gallery: IIA_Bombay_images,
    },
  },
  {
    id: "wofa-2024",
    title: "WOFA 2024",
    meta: {
      date: "2024",
      location: "New Delhi, India",
      type: "WOFA Chapter 2024",
    },
    description:
      "A global platform celebrating leadership, innovation, and collaboration among changemakers.",
    images: {
      banner: Wofa_2024_Image[0],
      gallery: Wofa_2024_Image,
    },
  },
  {
    id: "iia-delhi-conference-2024",
    title: "IIA Delhi Conference 2024",
    meta: {
      date: "2024",
      location: "Delhi, India",
      type: "IIA Delhi Chapter 2024",
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
      type: "WOFA Chapter 2025",
    },
    description:
      "A global platform celebrating leadership, innovation, and collaboration among changemakers.",
    images: {
      banner: Wofa_images[0],
      gallery: Wofa_images,
    },
  },
];

 
export default function EventsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
 
  // Dynamically get categories from your data
  const categories = ["All", ...new Set(myEvents.map(e => e.meta.type))];
 
  const filteredEvents = selectedCategory === "All"
    ? myEvents
    : myEvents.filter(e => e.meta.type === selectedCategory);
 
  return (
    <div id="past-events" className="min-h-screen px-4 py-16 bg-slate-50 dark:bg-surfaceDark">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Past Events & Conferences</h2>
          <p className="mt-2 text-slate-500">Explore our journey across global audit leadership forums.</p>
        </header>
 
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filter Sidebar */}
          <aside className="flex-shrink-0 lg:w-64">
            <div className="sticky p-6 bg-white border shadow-sm dark:bg-slate-900 rounded-2xl border-slate-200 dark:border-slate-800 top-24">
              <div className="flex items-center gap-2 mb-6 font-bold text-slate-800 dark:text-slate-200">
                <Filter size={18} />
                <span>Categories</span>
              </div>
              <div className="space-y-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                      selectedCategory === cat
                      ? "bg-slate-900 text-white dark:bg-white dark:text-black font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
             
              <div className="pt-6 mt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase text-slate-400">
                    <PieChart size={14}/>
                    Quick Stats
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 text-center bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <div className="text-xl font-bold dark:text-white">{myEvents.length}</div>
                        <div className="text-[10px] text-slate-500">Total</div>
                    </div>
                    <div className="p-3 text-center bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <div className="text-xl font-bold dark:text-white">{categories.length - 1}</div>
                        <div className="text-[10px] text-slate-500">Types</div>
                    </div>
                </div>
              </div>
            </div>
          </aside>
 
          {/* Grid Area */}
          <main className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
 