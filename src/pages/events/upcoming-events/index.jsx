

import React from 'react'
import { Helmet } from "react-helmet-async";
import UpcomingEventsSection from '../UpcomingEventSection'

function UpcomingEventSection1() {
  return (
    <>
      <Helmet>
        <title>Upcoming Events | RiskMan Consulting</title>
        <meta name="description" content="Stay updated with RiskMan Consulting's upcoming events, webinars, conferences, and industry engagements in risk management, ESG, and cybersecurity." />
        <link rel="canonical" href="https://www.riskman.in/events/upcoming-events" />
      </Helmet>
      <UpcomingEventsSection/>
    </>
  )
}

export default UpcomingEventSection1