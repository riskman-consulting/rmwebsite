import React, { useState,useMemo } from "react";
import {
  Globe,
  MapPin,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  X,
  Briefcase,
  Layers,
  ArrowRight,
} from "lucide-react";

import { Vietman_Image } from "../../assets/chu-chi-vietnam";
import { Philippiness_Image } from "../../assets/philippiness";
import { Myanmar_Image } from "../../assets/myanmar";
import { Indonesia_Image } from "../../assets/indonesia";
/* ======================================================
   SOURCE OF TRUTH — STORY DATA (DO NOT CHANGE STRUCTURE)
====================================================== */
const ENGAGEMENTS = [
  {
    person: "Vishal Sharma",
    role: "Senior Consultant",
    country: "Vietnam",
    countryCode: "VN",
    city: "Ho Chi Minh City",
    date: "August 2025",
    title: "Indorama Vietnam — Internal Audit Visit",
    story:
      "His photograph marks a meaningful interaction with the Indorama – Vietnam site team during the internal audit visit in August 2025. This showcases cross-functional collaboration and knowledge exchange. It underscores our global approach to auditing—working closely with site teams to enhance controls, align best practices, and support sustainable operations.",
    images: [
      Vietman_Image[0],
    ],
  },

  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Vietnam",
    countryCode: "VN",
    city: "Ho Chi Minh City",
    date: "October 2025",
    title: "Indorama Vietnam — Risk Review",
    story:
      "Captured at the Indorama Vietnam site in September 2025, this image marks the completion of an internal audit engagement characterized by insightful exchanges and a solution-oriented mindset. The engagement facilitated open discussions on key risks and operational priorities, delivering value across multiple core business processes.",
    images: [
      Vietman_Image[1],Vietman_Image[2],Vietman_Image[3]
    ],
  },

  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Philippines",
    countryCode: "PH",
    city: "Manila",
    date: "January 2026",
    title: "Indorama Philippines — Internal Control Assessment",
    story:
      "Celebrating the successful completion of a value-adding and knowledge-driven internal audit engagement. The assignment facilitated interactive discussions on key risks and related controls, leading to the identification of actionable steps to enhance business processes and improve overall operational efficiency.",
    images: [
      Philippiness_Image[1],Philippiness_Image[0],
    ],
  },

  {
    person: "Rohit Gupta",
    role: "Consultant",
    country: "Myanmar",
    countryCode: "MM",
    city: "Yangon",
    date: "March 2026",
    title: "Indorama Myanmar — Operational Risk Assessment",
    story:
      "Marking the conclusion of an insightful internal audit engagement that emphasized collaborative learning and practical outcomes. The engagement enabled meaningful exchanges on risk areas and control effectiveness, resulting in clear improvement initiatives aimed at strengthening processes.",
    images: [
      Myanmar_Image[1],Myanmar_Image[0],
    ],
  },

  {
    person: "Yashvi Ganeriwal",
    role: "Consultant",
    country: "Indonesia",
    countryCode: "ID",
    city: "Jakarta",
    date: "December 2025",
    title: "Indorama Indonesia — Internal Audit Completion",
    story:
      "This image captures a professional engagement at the Indorama Indonesia site in December 2025, marking the completion of an internal audit focused on exchange of insights and a solution-oriented approach. The audit encouraged open discussions on key risks and operational priorities, leading to clear and practical outcomes.",
    images: [
      Indonesia_Image[1],Indonesia_Image[0]
    ],
  },
];

/* ======================================================
   COMPONENT
====================================================== */
export default function InternationalAssignments() {
  const people = useMemo(
    () => [...new Set(ENGAGEMENTS.map((e) => e.person))],
    []
  );

  const [activePerson, setActivePerson] = useState(people[0]);
  const [pageIndex, setPageIndex] = useState(0);
  const [modalImages, setModalImages] = useState(null);

  const personEngagements = useMemo(
    () => ENGAGEMENTS.filter((e) => e.person === activePerson),
    [activePerson]
  );

  const active = personEngagements[pageIndex];

  const nextEngagement = () => {
    if (pageIndex < personEngagements.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const prevEngagement = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <>
      <section id="milestones" className="min-h-screen px-4 py-16 md:py-24 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white border rounded-full shadow-sm">
              <div className="bg-brandAccent p-1.5 rounded-full">
                <Globe className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-sm font-semibold uppercase text-brandDark dark:text-brandDark">
                Audit Network
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-bold md:text-5xl text-brandDark dark:text-white">
              International Assignments
            </h2>

            <p className="max-w-2xl mx-auto text-lg text-brandNavy dark:text-white/70">
              A visual directory of consultant visits and strategic engagements.
            </p>
          </div>

          {/* PERSON TABS */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {people.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setActivePerson(p);
                  setPageIndex(0);
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-all
                  ${
                    activePerson === p
                      ? "bg-brandDark dark:bg-brandAccent text-white dark:text-brandDark border-slate-900 shadow-lg scale-105"
                      : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
                  }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* CARD */}
          <div className="bg-surfaceLight dark:bg-surfaceDark border rounded-[2rem] shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[500px]">

              {/* LEFT */}
              <div className="flex flex-col justify-between flex-1 p-8 md:p-12">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="flex gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-brandDark dark:bg-brandAccent rounded-2xl">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-brandDark dark:text-white">
                          {active.person}
                        </h3>
                        <div className="flex items-center gap-2 text-sm font-medium text-brandNavy dark:text-brandAccent">
                          <Briefcase className="w-4 h-4" />
                          {active.role}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="px-4 py-1.5 rounded-full bg-brandDark dark:bg-brandAccent text-white text-xs font-bold uppercase">
                        {active.country}
                      </span>
                      <p className="mt-1 text-xs uppercase text-brandDark dark:text-white/70">
                        Assignment ID: {active.countryCode}-{active.date.split(" ")[1]}
                      </p>
                    </div>
                  </div>

                  {/* META */}
                  <div className="grid grid-cols-2 gap-6 p-6 mb-8 md:grid-cols-3 bg-surfaceLight dark:bg-surfaceDark rounded-2xl">
                    <Meta icon={<MapPin />} label="City" value={active.city} />
                    <Meta icon={<Calendar />} label="Schedule" value={active.date} />
                    <Meta
                      icon={<Layers />}
                      label="Assets"
                      value={`${active.images.length} Captures`}
                      hiddenMobile
                    />
                  </div>

                  <h4 className="mb-3 text-xl font-bold text-brandDark dark:text-brandAccent">
                    {active.title}
                  </h4>
                  <p className="text-lg leading-relaxed text-brandNavy dark:text-white/70">
                    {active.story}
                  </p>
                </div>

                {/* PAGINATION */}
                {personEngagements.length > 1 && (
                  <div className="flex items-center gap-6 pt-8 mt-12 border-t">
                    <div className="flex gap-2">
                      <NavBtn onClick={prevEngagement} disabled={pageIndex === 0}>
                        <ChevronLeft />
                      </NavBtn>
                      <NavBtn
                        onClick={nextEngagement}
                        disabled={pageIndex === personEngagements.length - 1}
                      >
                        <ChevronRight />
                      </NavBtn>
                    </div>

                    <span className="text-xs font-bold uppercase text-slate-400">
                      {pageIndex + 1} of {personEngagements.length}
                    </span>
                  </div>
                )}
              </div>

              {/* RIGHT IMAGE */}
              <div
                className="lg:w-[420px] bg-slate-100 relative cursor-zoom-in"
                onClick={() => setModalImages(active.images)}
              >
                <img
                  src={active.images[0]}
                  alt=""
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />

                <div className="absolute inset-0 flex items-end p-8 transition opacity-0 bg-gradient-to-t from-black/60 hover:opacity-100">
                  <div className="flex items-center gap-3 text-white">
                    <div className="p-2 rounded-full bg-white/20">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold">View Gallery</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* <p className="mt-12 text-sm text-center text-slate-400">
            © 2025 Audit Division — Global Mobility Portfolio
          </p> */}
        </div>
      </section>

      {/* IMAGE MODAL */}
      <ImageGalleryModal
        images={modalImages}
        onClose={() => setModalImages(null)}
      />
    </>
  );
}

/* =========================================================
   IMAGE GALLERY MODAL (INLINE)
========================================================= */
function ImageGalleryModal({ images, onClose }) {
  if (!images) return null;

  const getModalMaxWidth = () => {
    if (images.length === 1) return "max-w-2xl";
    if (images.length === 2) return "max-w-4xl";
    return "max-w-6xl";
  };

  const getGridCols = () => {
    if (images.length === 1) return "grid-cols-1";
    if (images.length === 2) return "grid-cols-1 sm:grid-cols-2";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      />

      <div
        className={`relative w-full ${getModalMaxWidth()} bg-surfaceLight dark:bg-surfaceDark rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b bg-surfaceLight dark:bg-surfaceDark">
          <h3 className="text-lg font-bold text-brandDark dark:text-white">
            Engagement Gallery
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        <div className="flex-1 p-6 sm:p-8">
          <div className={`grid gap-6 ${getGridCols()}`}>
            {images.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-square"
              >
                <img
                  src={img}
                  alt=""
                  className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 text-center border-t bg-surfaceLight dark:bg-surfaceDark">
          <p className="text-sm italic text-slate-500">
            Showing {images.length} image{images.length > 1 && "s"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SMALL HELPERS
========================================================= */
const Meta = ({ icon, label, value, hiddenMobile }) => (
  <div className={`flex items-center gap-3 ${hiddenMobile ? "hidden md:flex" : ""}`}>
    <div className="p-2 text-white rounded-lg shadow-sm bg-brandDark dark:bg-brandAccent dark:text-white">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold text-brandNavy dark:text-white/70">{label}</p>
      <p className="text-sm font-semibold text-brandDark dark:text-white">{value}</p>
    </div>
  </div>
);

const NavBtn = ({ children, ...props }) => (
  <button
    {...props}
    className="p-3 text-white border bg-brandDark dark:bg-brandAccent rounded-xl dark:text-brandDark hover:bg-slate-50 disabled:opacity-30"
  >
    {children}
  </button>
);