import { useState } from "react";

/* data */
import { events } from "./data/";

/* sections */
import Hero from "./components/Hero";
import WhyPresenceMatters from "./components/WhyPresenceMatters";
import FilterBar from "./components/FilterBar";
import EventGrid from "./components/EventGrid";
import JourneyTimeline from "./components/JourneyTimeline";
import FAQ from "./components/FAQ";

export default function EventPage() {
  /* --------------------------------
     Filters State (single source)
  ----------------------------------*/
  const [filters, setFilters] = useState({
    year: null,
    type: null,
    location: null,
  });

  return (
    <main className="bg-bgLight">
      {/* 1️⃣ Global Hero */}
      <Hero />

      {/* 2️⃣ Why Presence Matters */}
      <WhyPresenceMatters />

      {/* 3️⃣ Filters */}
      <FilterBar
        events={events}
        filters={filters}
        setFilters={setFilters}
      />

      {/* 4️⃣ Event Cards + Gallery Modal */}
      <EventGrid
        events={events}
        filters={filters}
      />

      {/* 5️⃣ RiskMan Journey */}
      <JourneyTimeline />

      {/* 6️⃣ FAQ */}
      <FAQ />
    </main>
  );
}
