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
