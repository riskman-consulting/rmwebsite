import React from 'react'
import { Helmet } from "react-helmet-async";

function index() {
  return (
    <div>
      <Helmet>
        <title>Credit Portfolio Management | RiskMan Consulting</title>
        <meta name="description" content="RiskMan Consulting delivers credit portfolio management advisory services to help financial institutions optimize portfolio composition, monitor concentration risk, and maintain regulatory compliance." />
        <link rel="canonical" href="https://www.riskman.in/services/financial-advisory/credit-portfolio-management" />
      </Helmet>
    </div>
  )
}

export default index
