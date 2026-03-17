import React from 'react';
import { Helmet } from "react-helmet-async";
import ImplementationHero from './ImplementationHero';
import ToolEvaluation from './ToolEvaluation';
import BusinessProcessReengineering from './BusinessProcessReEngineering';
import BRDSolutionDesign from './BRDSolution';
import DataManagementPhase from './DataManagementPhase';
import ImplementationMethodology from './ImplementationMethodology';
import ImplementationFAQ from './ImplementationFAQ';

const ImplementationExcellence = () => {
    return (
        <div className="min-h-screen font-sans transition-colors duration-300 bg-bgLight dark:bg-bgDark text-brandDark dark:text-brandLight">
            <Helmet>
              <title>Digital Transformation Implementation Excellence | RiskMan Consulting</title>
              <meta name="description" content="RiskMan Consulting guides organizations through digital transformation implementation with tool evaluation, BPR, data management, and structured methodology for successful technology adoption." />
              <link rel="canonical" href="https://www.riskman.in/services/digital-transformation/implementation" />
            </Helmet>
            <ImplementationHero />
            <ToolEvaluation />
            <BusinessProcessReengineering />
            <BRDSolutionDesign />
            <DataManagementPhase />
            <ImplementationMethodology />
            <ImplementationFAQ />
        </div>
    );
};

export default ImplementationExcellence;
