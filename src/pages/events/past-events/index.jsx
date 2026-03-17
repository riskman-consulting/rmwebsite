import React, { useState } from 'react'
import { Helmet } from "react-helmet-async";
import EventsGrid from '../EventsGrid'

function PastEventPage() {
    const [] = useState(null)
  return (
    <>
      <Helmet>
        <title>Past Events | RiskMan Consulting</title>
        <meta name="description" content="Browse RiskMan Consulting's past events, conferences, workshops, and seminars in risk management, governance, ESG, and cybersecurity advisory." />
        <link rel="canonical" href="https://www.riskman.in/events/past-events" />
      </Helmet>
      <EventsGrid />
    </>
  )
}

export default PastEventPage