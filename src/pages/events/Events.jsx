import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AwardSection from './AwardSection';
import CompanyTimelineSection from './CompanyTimelineSection';
import CTASection from './CTASections';
import CultureSection from './CultureSection';
import ExpertiseSection from './ExpertiseSection';
import HeroSection from './HeroSection';
import ImpactInNumbersSection from './ImpactInNumbersSection';
import InternationalAssignmentSection from './InternationalAssignmentSection';
import JourneyTimeLineSection from './JourneyTimeLineSection';
import MomentThatMattersSection from './MomentThatMattersSection';
import TestimonialsSection from './TestimonialsSection';
import TogethernessCelebrationSection from './TogethernessCelebrationSection';
import VideoHighlightSection from './VideoHighlightSection';
import EventsGrid from './EventsGrid.jsx';
import EventModal from './EventModal.jsx';
import { events } from "./eventData"; // Your events data
import WhyItMatters from './WhyItMatters.jsx';

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpenModal = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <HeroSection />
      <WhyItMatters/>
      <ImpactInNumbersSection />
      <CompanyTimelineSection />
      <CultureSection />
      <ExpertiseSection />
      <JourneyTimeLineSection />
      <MomentThatMattersSection />
      <AwardSection />
      <InternationalAssignmentSection />
      <TestimonialsSection />
      <TogethernessCelebrationSection />
      
      {/* Events Grid with Modal */}
      <EventsGrid 
        events={events} 
        onCardClick={handleOpenModal} 
      />
      
      <VideoHighlightSection />
      <CTASection />

      {/* Event Modal - renders when an event is selected */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal 
            event={selectedEvent} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Events;