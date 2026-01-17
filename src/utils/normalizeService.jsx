export function normalizeService(service) {
  // If already new format, return as-is
  if (service.sections) return service;

  const sections = [];

  if (service.heroSection) {
    sections.push({ type: "hero", ...service.heroSection });
  }

  if (service.trusteSection) {
    sections.push({ type: "trustedCompanies", ...service.trusteSection });
  }

  if (service.weHelpSection) {
    sections.push({ type: "weHelp", ...service.weHelpSection });
  }

  if (service.solutionSection) {
    sections.push({ type: "solutions", ...service.solutionSection });
  }

  if (service.partnerSection) {
    sections.push({ type: "partner", ...service.partnerSection });
  }

  if (service.helpUsSection) {
    sections.push({ type: "helpUs", items: service.helpUsSection });
  }

  if (service.proActiveSection) {
    sections.push({ type: "proActive", ...service.proActiveSection });
  }

  if (service.riskAnalysisSection) {
    sections.push({ type: "riskAnalysis", items: service.riskAnalysisSection });
  }

  if (service.testimonialsSection) {
    sections.push({ type: "testimonials", ...service.testimonialsSection });
  }

  if (service.articalSection) {
    sections.push({ type: "articles", ...service.articalSection });
  }

  if (service.frequentlyAskedQuestions) {
    sections.push({
      type: "faq",
      items: service.frequentlyAskedQuestions,
    });
  }

  if (service.riskResilientSection) {
    sections.push({ type: "cta", ...service.riskResilientSection });
  }

  return { ...service, sections };
}
