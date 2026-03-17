import { Helmet } from "react-helmet-async";
import BCPHero from "./BCPHero";
import BCPOverview from "./BCPOverview";
import BCPBenefits from "./BCPBenefits";
import BCPCallToAction from "./BCPCallToAction";
import BCPFaq from "./BCPFaq";
import BCPFocusAreas from "./BCPFocusArea";
import BCPMethodology from "./BCPMethodology";


const BCPPage = () => {
  return (
    <>
      <Helmet>
        <title>Business Continuity & Disaster Recovery | RiskMan Consulting</title>
        <meta name="description" content="Strengthen organizational resilience with RiskMan Consulting's BCP/DR services. We design, test, and implement business continuity and disaster recovery frameworks aligned with ISO 22301." />
        <link rel="canonical" href="https://www.riskman.in/services/bcp-dr" />
      </Helmet>
      <BCPHero />
      <BCPOverview />
     
      <BCPBenefits />
      <BCPFocusAreas/>
      <BCPMethodology/>
      <BCPCallToAction />
      <BCPFaq />
    </>
  );
};

export default BCPPage;
