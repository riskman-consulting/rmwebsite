import BCPHero from "./BCPHero";
import BCPOverview from "./BCPOverview";
import BCPBenefitsGrid from "./BCPBenefits";
import BCPFocusAreas from "./BCPFocusAreas";
import BCPMethodology from "./BCPMethodology";
import BCPCallToAction from "./BCPCallToAction";
import BCPFaq from "./BCPFaq";

const BCPPage = () => {
  return (
    <>
      <BCPHero />
      <BCPOverview />
      <BCPBenefitsGrid />
      <BCPFocusAreas />
      <BCPMethodology />
      <BCPCallToAction />
      <BCPFaq />
    </>
  );
};

export default BCPPage;
