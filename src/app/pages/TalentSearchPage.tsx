import StaticServicePage from "./StaticServicePage";

export default function TalentSearchPage() {
  return (
    <StaticServicePage
      content={{
        id: "talent-search",
        kicker: "Talent Search",
        title: "Recruitment, Retention and Results in Sales.",
        summary:
          "Build a world-class sales team with the right people who deliver measurable results. We help you recruit top sales talent and implement retention strategies that keep your best performers engaged and productive.",
        introParagraphs: [],
        highlights: [
          {
            title: "Recruitment",
            description: "Identify and attract top sales talent through targeted search and selection processes",
          },
          {
            title: "Retention",
            description: "Implement strategies to keep your best sales performers engaged and committed",
          },
          {
            title: "Results-Driven",
            description: "Focus on candidates and strategies that deliver measurable sales results",
          },
          {
            title: "Onboarding",
            description:
              "Seamlessly onboard new hires with structured sales training and process familiarization",
          },
        ],
        faqGroups: [],
      }}
    />
  );
}