import React from "react";
import { Helmet } from "react-helmet-async";
import GroupHero from "./GroupHero";
import CapabilityGrid from "./CapabilityGrid";
import RelatedGroups from "./RelatedGroups";
import CTASection from "../CTASection";
import { getFaasGroup } from "../faasData";

/**
 * Shared shell for every FAAS group page. Each group's route file is a thin
 * wrapper that passes its slug, so the six pages stay in step and a content
 * change only has to happen in `faasData.js`.
 */
const GroupPage = ({ slug }) => {
  const group = getFaasGroup(slug);

  if (!group) return null;

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>{`${group.title} | FAAS | RiskMan Consulting`}</title>
        <meta name="description" content={group.intro} />
        <link rel="canonical" href={`https://www.riskman.in${group.path}`} />
      </Helmet>

      <GroupHero group={group} />
      <CapabilityGrid group={group} />
      <RelatedGroups currentSlug={group.slug} />
      <CTASection />
    </div>
  );
};

export default GroupPage;
