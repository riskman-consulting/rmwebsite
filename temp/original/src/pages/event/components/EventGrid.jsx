// src/event/components/EventGrid.jsx

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EventCard from "./EventCard";
import GalleryModel from "./GalleryModel";
import { stagger } from "./motionConfig";

export default function EventGrid({ events = [], filters }) {
  const [activeEvent, setActiveEvent] = useState(null);

  /* --------------------------------
     Filtering (safe & performant)
  ----------------------------------*/
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (filters?.year && event.year !== filters.year) return false;
      if (filters?.type && event.type !== filters.type) return false;
      if (
        filters?.location &&
        !event.location?.toLowerCase().includes(filters.location.toLowerCase())
      )
        return false;
      return true;
    });
  }, [events, filters]);

  return (
    <>
      <section className="bg-bgLight dark:bg-bgDark">
        <div className="container py-16 sm:py-20">
          {/* Empty State */}
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 text-sm sm:text-base">
                No events match the selected filters.
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="
                grid gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
              "
            >
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onOpenGallery={setActiveEvent}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {activeEvent && (
          <GalleryModel
            event={activeEvent}
            onClose={() => setActiveEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
