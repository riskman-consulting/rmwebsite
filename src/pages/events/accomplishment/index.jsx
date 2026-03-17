import React from 'react'
import { Helmet } from "react-helmet-async";
import EventRecognition from "../EventsRecognition"

function AccomplishmentsPage() {
  return (
    <>
      <Helmet>
        <title>Accomplishments & Awards | RiskMan Consulting</title>
        <meta name="description" content="Explore RiskMan Consulting's accomplishments, awards, and industry recognition that reflect our commitment to excellence in risk management and advisory services." />
        <link rel="canonical" href="https://www.riskman.in/events/accomplishments" />
      </Helmet>
      <EventRecognition/>
    </>
  )
}

export default AccomplishmentsPage