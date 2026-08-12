/// <reference types="vite/client" />
import { Linkedin } from "lucide-react";
import Reveal from "../components/shared/Reveal";
import SectionKicker from "../components/shared/SectionKicker";

const principalConsultant = {
  name: "Sanjay Singh",
  title: "Principal Consultant",
  description: "India's leading sales coach and founder of Strategic Concepts (I) Pvt Ltd",
  linkedin: "https://www.linkedin.com/in/sanjay4sales/",
  experience: "25+ years in sales training and consulting",
  image: "/images/sanjay-singh.jpg",
};

const mission = {
  title: "Mission",
  statement: "We are on a Mission to empower 1 Million Salespersons with the Science of Selling before 2025.",
  points: [
    "Install The Religion of Sales at client's end",
    "Empower the sales team on the Sales Karmas",
    "Sales Training of Sales team through Learning and Development",
    "Rub shoulders with sales teams in the spirit of Do as I do",
    "Play to Win",
  ],
};

const vision = {
  title: "Vision",
  statement:
    "If it is anything to do with Sales or its management, our solutions will be benchmarked for results and vouched for its sanctity.",
  points: [
    "What to do in Sales Management",
    "What not to do in Sales Management",
    "Why not do what is not to be done in Sales Management",
    "The growth story of India will be turbocharged with Sales function trying to capitalize on the untapped market potential of Incredible India",
    "The Make in India initiative also looks forward to explicit support from the Sales function",
  ],
};

const coreValues = {
  title: "Core Values (C.O.R.E.)",
  values: [
    {
      name: "Customer Centricity",
      description:
        "Every thought, action, initiative, suggestion, or idea must answer the question: What is in it for me? to the customer. We keep our customers at the center of every decision and the only bottom-line is that the customer must be benefitted at the end of the day.",
    },
    {
      name: "Observant",
      description:
        "We observe and deduce our own insights into the customer's business and never go blindly in what the customer tries to show us about his business. To read between the lines, to hear the unsaid and to find the not so obvious things about the customer's business is the cornerstone of our engagement with our clients.",
    },
    {
      name: "Responsibility",
      description:
        "Our work ethic evolves out of willingly taking a joint responsibility, with our customer, for the success of the product. We are always responsible for everything good or bad that happens with the project, knowingly or unknowingly. Passing the parcel is not the credo of our work culture.",
    },
    {
      name: "Effectiveness",
      description:
        "Result orientation, in every assignment, is a compulsory milestone serviced by us. All assignments are capped with S.M.A.R.T. goals, mutually agreeable to the customer and our team. Our role is always to effectively reach these goals in a way that they are sustainable for the client.",
    },
  ],
};

export default function AboutPage() {
  return (
    <section id="about" className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[2.5rem] bg-brand-navy p-6 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <SectionKicker variant="dark">About Us</SectionKicker>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                {principalConsultant.name}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                {principalConsultant.description}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6">
          <Reveal className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
              {mission.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {mission.statement}
            </p>
            <div className="space-y-3">
              {mission.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="size-3.5 flex-shrink-0 rounded bg-brand-gold text-xs font-bold text-brand-navy">
                    •
                  </span>
                  <span className="text-gray-600 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal className="mb-16" delay={0.1}>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
              {vision.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {vision.statement}
            </p>
            <div className="space-y-3">
              {vision.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="size-3.5 flex-shrink-0 rounded bg-brand-gold text-xs font-bold text-brand-navy">
                    •
                  </span>
                  <span className="text-gray-600 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-24">
        <Reveal>
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
            Core Values (C.O.R.E.)
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.values.map((value, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-6 hover:border-brand-navy/25 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="size-4 flex-shrink-0 text-brand-gold" />
                  <span className="text-xs font-bold text-brand-navy">{value.name}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-24 border-t border-gray-200 pt-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
                About the Principal Consultant
              </h3>
              <div className="rounded-full overflow-hidden bg-gray-50 mb-6">
                <img
                  src={principalConsultant.image}
                  alt={principalConsultant.name}
                  className="w-40 h-40 object-cover mx-auto"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {principalConsultant.title}
              </h4>
              <p className="text-gray-600 mb-4">
                {principalConsultant.experience}
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href={principalConsultant.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-brand-navy px-6 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}