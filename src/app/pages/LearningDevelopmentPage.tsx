import StaticServicePage from "./StaticServicePage";

export default function LearningDevelopmentPage() {
  return (
    <StaticServicePage
      content={{
        id: "learning-and-development",
        kicker: "Learning & Development",
        title: "Curate and facilitate L&D Calendar after conducting Training and Need Analysis of Sales Team.",
        summary:
          "Develop your sales team's capabilities through structured learning and development programs tailored to your specific needs, with ongoing support and measurement.",
        introParagraphs: [],
        highlights: [
          {
            title: "Training Needs Analysis",
            description: "Assess your team's current skills gaps and develop targeted training programs",
          },
          {
            title: "Custom Curriculum",
            description:
              "Design and develop sales training materials customized to your industry and sales methodology",
          },
          {
            title: "Execution & Facilitation",
            description: "Deliver training workshops, both online and on-ground, with measurable outcomes",
          },
          {
            title: "Outcome Tracking",
            description: "Measure training effectiveness through KPI's, quizzes, and post-training assessments",
          },
        ],
        faqGroups: [],
      }}
    />
  );
}