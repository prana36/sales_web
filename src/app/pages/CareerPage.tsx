/// <reference types="vite/client" />
import Reveal from "../components/shared/Reveal";
import SectionKicker from "../components/shared/SectionKicker";

const roles = [
  {
    title: "Business Analyst",
    description:
      "Your understanding of the various tools of Regression Analysis and your capability to handle and analyze data across multivariate tables and dimensions will make you a great Business Analyst. Assignments are work-from-home.",
  },
  {
    title: "Associate Consultant",
    description:
      "If you have invested more than 20 years of hands-on experience in any form of selling and feel like sharing your expertise, mentoring companies, and consulting, this is the place to be. Assignments are freelance in nature.",
  },
  {
    title: "Marketing Communication Manager",
    description:
      "You should understand the language that the customer understands ('What is in it for me?') and should be skilled at digital communication, content curation, and conveying our value propositions.",
  },
  {
    title: "Sales Training Facilitator",
    description:
      "Share your YouTube videos with us, even if you are a fresher in Sales Training and have a flair for teaching the art of selling and engaging audiences.",
  },
];

export default function CareerPage() {
  return (
    <section className="bg-white px-4 py-16 pt-32 sm:px-6 md:py-24 md:pt-36">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <SectionKicker className="mb-3">Want To Be A Part Of Our Team?</SectionKicker>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            The challenge of working for multiple industry verticals across
            geographies in different forms of selling is intoxicating if you
            have a consulting mindset. The Sales DNA is a prerequisite in you to
            get associated with us.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <Reveal delay={index * 0.08} key={role.title}>
              <div className="group flex h-full flex-col justify-between rounded-3xl border border-gray-200/80 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:bg-white hover:shadow-xl sm:p-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-navy transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {role.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Remote / Freelance
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
