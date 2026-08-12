import StaticServicePage from "./StaticServicePage";

export default function SalesAuditPage() {
  return (
    <StaticServicePage
      content={{
        id: "sales-audit",
        kicker: "Sales Audit",
        title: "Let's find out gaps in our sales process and systems to become unstoppable.",
        summary:
          "A comprehensive analysis of your sales function to identify leakages, inefficiencies, and opportunities for improvement. We study your data, competition, and team capability to create a blueprint for execution.",
        introParagraphs: [],
        highlights: [
          {
            title: "Data Analysis",
            description:
              "Review historical sales data to identify patterns, trends, and areas for improvement",
          },
          {
            title: "Competition Study",
            description: "Analyze competitor sales strategies and market positioning",
          },
          {
            title: "Team Capability",
            description: "Assess your team's skills, strengths, and development areas",
          },
          {
            title: "Process Review",
            description: "Evaluate your sales processes and SOP's for efficiency and effectiveness",
          },
          {
            title: "Growth Projection",
            description:
              "Project growth over the next 1-5 years based on current performance and proposed improvements",
          },
        ],
        faqGroups: [],
      }}
    />
  );
}