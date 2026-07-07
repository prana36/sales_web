/// <reference types="vite/client" />

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
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24 pt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
            Want To Be A Part Of Our Team?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
            The challenge of working for multiple industry verticals across
            geographies in different forms of selling is intoxicating if you
            have a consulting mindset. The Sales DNA is a prerequisite in you to
            get associated with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-[10px] border border-gray-200/80 bg-gray-50 p-6 transition-all duration-300 hover:border-blue-900/20 hover:bg-white hover:shadow-xl sm:p-8"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
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
          ))}
        </div>
      </div>
    </section>
  );
}
