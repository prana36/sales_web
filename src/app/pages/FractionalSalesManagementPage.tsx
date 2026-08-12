import StaticServicePage from "./StaticServicePage";

export default function FractionalSalesManagementPage() {
  return (
    <StaticServicePage
      content={{
        id: "fractional-sales-management",
        kicker: "Fractional Sales Management",
        title: "Outsource your Sales Management to us.",
        summary:
          "Take your sales function to the next level without the overhead of a full-time internal team. Our fractional sales management team works as an extension of your business, delivering results-driven sales leadership on a part-time or project basis.",
        introParagraphs: [],
        highlights: [
          {
            title: "Full-Time Equivalent",
            description:
              "Access senior sales leadership without the full-time executive salary and benefits package",
          },
          {
            title: "Scalability",
            description: "Scale your sales team up or down based on business needs and market conditions",
          },
          {
            title: "Specialized Expertise",
            description:
              "Benefit from our team's diverse industry experience across multiple sectors and sales models",
          },
          {
            title: "Cost Effective",
            description: "Pay for the expertise you need when you need it, reducing fixed overhead costs",
          },
        ],
        faqGroups: [],
      }}
    />
  );
}