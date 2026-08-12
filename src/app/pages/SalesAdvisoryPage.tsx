import StaticServicePage from "./StaticServicePage";

export default function SalesAdvisoryPage() {
  return (
    <StaticServicePage
      content={{
        id: "sales_advisory",
        kicker: "Sales Advisory",
        title: "Why to do what by whom to get where by when in Sales with clarity on How.",
        summary:
          "We provide clarity on every aspect of your sales function — from what to sell, who should sell, where to sell, and when to execute, with clear guidance on How to implement it effectively.",
        introParagraphs: [],
        highlights: [
          { title: "Why", description: "Understand the fundamental reasons why sales initiatives succeed or fail" },
          { title: "Who", description: "Identify the right people for the right roles in your sales function" },
          { title: "Where", description: "Determine the optimal sales channels and territories for your business" },
          { title: "When", description: "Create a timeline and execution schedule for sales activities" },
          { title: "How", description: "Implement practical SOP's and processes that deliver measurable results" },
        ],
        faqGroups: [],
      }}
    />
  );
}