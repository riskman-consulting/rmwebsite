import React from "react";
import { Helmet } from "react-helmet-async";
import GroupHero from "./GroupHero";
import CapabilityGrid from "./CapabilityGrid";
import EngagementSection from "./EngagementSection";
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

  const canonical = `https://www.riskman.in${group.path}`;

  return (
    <div className="min-h-screen bg-bgLight dark:bg-bgDark">
      <Helmet>
        <title>{`${group.title} | FAAS | RiskMan Consulting`}</title>
        <meta name="description" content={`${group.summary} ${group.intro}`} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${group.title} | FAAS`} />
        <meta property="og:description" content={group.summary} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
      </Helmet>

      <GroupHero group={group} />
      <CapabilityGrid group={group} />
      <EngagementSection tone="surface" />
      <RelatedGroups currentSlug={group.slug} />
      <CTASection
        heading={`Talk to us about ${group.title}`}
        body="We start with a short review of where things stand today — the current close, the controls around it and the reporting that comes off it — and tell you what is worth changing before you commit to anything."
      />
    </div>
  );
};

export default GroupPage;
