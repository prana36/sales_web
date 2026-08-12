import StaticServicePage from "./StaticServicePage";

export default function MarketingCommunicationsPage() {
  return (
    <StaticServicePage
      content={{
        id: "marketing-communications",
        kicker: "Marketing Communications",
        title: "Get your lead magnets and value bombs designed by us besides other marcom elements.",
        summary:
          "Create compelling marketing materials that attract, engage, and convert your target audience. From lead magnets to value bombs, we design all your marcom elements with clarity and impact.",
        introParagraphs: [],
        highlights: [
          {
            title: "Lead Magnets",
            description: "Design high-value content offers that capture contact information and qualify leads",
          },
          {
            title: "Value Bombs",
            description: "Create impactful soundbites and messages that resonate with your target audience",
          },
          {
            title: "Brand Positioning",
            description: "Develop a clear and differentiated brand position in the marketplace",
          },
          {
            title: "Campaign Materials",
            description: "Design brochures, presentations, and sales collateral that convert",
          },
          {
            title: "Digital Assets",
            description: "Create social media graphics, email templates, and online content that engage",
          },
        ],
        faqGroups: [],
      }}
    />
  );
}