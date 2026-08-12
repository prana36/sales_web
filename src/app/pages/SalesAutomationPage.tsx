import StaticServicePage from "./StaticServicePage";

export default function SalesAutomationPage() {
  return (
    <StaticServicePage
      content={{
        id: "sales-automation",
        kicker: "Sales Automation",
        title: "Why do anything which machines can do? CRM, SEO, AEO.",
        summary:
          "Leverage technology to automate repetitive sales tasks, optimize your digital presence, and let your team focus on what humans do best — building relationships and closing deals.",
        introParagraphs: [],
        highlights: [
          {
            title: "CRM Implementation",
            description:
              "Set up and optimize your Customer Relationship Management system to centralize all customer data and sales activities",
          },
          {
            title: "SEO Optimization",
            description:
              "Improve your online visibility and attract qualified traffic through search engine optimization",
          },
          {
            title: "AEO (Answer Engine Optimization)",
            description:
              "Optimize content for answer engines and voice search to capture new audiences",
          },
          {
            title: "Marketing Automation",
            description:
              "Set up automated email sequences, lead nurturing workflows, and drip campaigns",
          },
          {
            title: "Sales Tech Stack",
            description:
              "Design and implement the right technology stack for your sales function's needs",
          },
        ],
        faqGroups: [],
      }}
    />
  );
}