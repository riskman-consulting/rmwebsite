import React from 'react'
import { Helmet } from "react-helmet-async";
import JobSection from "./JobSection"
import Testimonials from './Testimonials'
function CareersPage() {
  return (
    <>
    <Helmet>
      <title>Careers at RiskMan Consulting | Join Our Team</title>
      <meta name="description" content="Explore career opportunities at RiskMan Consulting. Join a team of risk, ESG, cybersecurity, and financial advisory experts driving enterprise resilience across India and globally." />
      <link rel="canonical" href="https://www.riskman.in/careers" />
    </Helmet>
    <Testimonials/>
    <JobSection/>
    
    </>
  )
}

export default CareersPage