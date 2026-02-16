import React from 'react';
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
            <ImplementationHero />
            <ToolEvaluation />
            <BusinessProcessReengineering />
            {/* <BRDSolutionDesign /> */}
            <DataManagementPhase />
            <ImplementationMethodology />
            {/* <ImplementationFAQ /> */}
        </div>
    );
};

export default ImplementationExcellence;
