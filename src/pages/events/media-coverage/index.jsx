import React from 'react'
import { Helmet } from "react-helmet-async";
import MomentThatMatters from "../MomentThatMattersSection"

function MediaPage() {
  return (
    <>
      <Helmet>
        <title>Media Coverage | RiskMan Consulting</title>
        <meta name="description" content="Explore RiskMan Consulting's media coverage, press mentions, and key moments that highlight our impact and expertise in risk management and advisory services." />
        <link rel="canonical" href="https://www.riskman.in/events/media-coverage" />
      </Helmet>
      <MomentThatMatters/>
    </>
  )
}

export default MediaPage