/// <reference types="vite/client" />
import {
  Binoculars,
  Briefcase,
  Check,
  Compass,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  MapPin,
  Rocket,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Reveal from "../components/shared/Reveal";
import SectionKicker from "../components/shared/SectionKicker";
import sanjayImg from "../assets/images/sanjay-singh.jpg";

const principalConsultant = {
  name: "Sanjay Singh",
  title: "Principal Consultant",
  description:
    "India's leading sales coach and founder of Strategic Concepts (I) Pvt Ltd. A sales consultant who has spent three decades building sales teams, processes and trainers across industries.",
  linkedin: "https://www.linkedin.com/in/sanjay4sales/",
  experience: "25+ years in sales training and consulting",
  highlights: [
    {
      icon: Briefcase,
      label: "25+ years",
      text: "in sales training, coaching and consulting",
    },
    {
      icon: GraduationCap,
      label: "IIM Kolkata",
      text: "MDP Faculty, rated among top sales trainers in India",
    },
    {
      icon: Users,
      label: "Trusted brands",
      text: "LG, Godrej & Boyce, ICICI Bank, HUL, Ultratech, Kohler & more",
    },
    {
      icon: MapPin,
      label: "Nagpur",
      text: "Headquartered in Maharashtra, serving clients across India",
    },
  ],
};

const mission = {
  icon: Rocket,
  title: "Mission",
  statement:
    "We are on a Mission to empower 1 Million Salespersons with the Science of Selling.",
  points: [
    "Install The Religion of Sales at client's end",
    "Empower the sales team on the Sales Karmas",
    "Sales Training of the sales team through Learning and Development",
    "Rub shoulders with sales teams in the spirit of Do as I do",
    "Play to Win",
  ],
};

const vision = {
  icon: Compass,
  title: "Vision",
  statement:
    "If it is anything to do with Sales or its management, our solutions will be benchmarked for results and vouched for its sanctity.",
  points: [
    "What to do in Sales Management",
    "What not to do in Sales Management",
    "Why not do what is not to be done in Sales Management",
    "Turbocharge India's growth story through a stronger sales function",
    "Explicitly support the Make in India initiative from the Sales function",
  ],
};

const coreValues = [
  {
    icon: HeartHandshake,
    name: "Customer Centricity",
    description:
      "Every thought, action, initiative, suggestion, or idea must answer the question: What is in it for me? to the customer. We keep our customers at the center of every decision and the only bottom-line is that the customer must be benefitted at the end of the day.",
  },
  {
    icon: Binoculars,
    name: "Observant",
    description:
      "We observe and deduce our own insights into the customer's business and never go blindly in what the customer tries to show us about his business. To read between the lines, to hear the unsaid and to find the not so obvious things about the customer's business is the cornerstone of our engagement with our clients.",
  },
  {
    icon: ShieldCheck,
    name: "Responsibility",
    description:
      "Our work ethic evolves out of willingly taking a joint responsibility, with our customer, for the success of the product. We are always responsible for everything good or bad that happens with the project, knowingly or unknowingly. Passing the parcel is not the credo of our work culture.",
  },
  {
    icon: Target,
    name: "Effectiveness",
    description:
      "Result orientation, in every assignment, is a compulsory milestone serviced by us. All assignments are capped with S.M.A.R.T. goals, mutually agreeable to the customer and our team. Our role is always to effectively reach these goals in a way that they are sustainable for the client.",
  },
];

export default function AboutPage() {
  return (
    <section
      id="about"
      className="bg-white px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-navy px-6 py-14 sm:px-10 lg:px-14 lg:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand-gold/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-white/5 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <SectionKicker variant="dark" className="mb-4">
                About Us
              </SectionKicker>
              <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                Strategic Concepts (I) Pvt. Ltd.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                A sales-first consulting firm engineering measurable growth for
                corporates and SMEs since 1998.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-1 w-14 rounded bg-brand-gold" />
                <span className="size-1.5 rounded-full bg-brand-gold" />
                <div className="h-1 w-14 rounded bg-brand-gold" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Mission & Vision */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-gray-200 bg-gray-50/60 p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-sm">
                  <Rocket className="size-5" />
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  {mission.title}
                </h2>
              </div>
              <p className="mb-7 text-base leading-relaxed text-gray-600">
                {mission.statement}
              </p>
              <ul className="space-y-3.5">
                {mission.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                      <Check className="size-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-gray-700">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-gray-200 bg-gray-50/60 p-7 sm:p-9">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-sm">
                  <Compass className="size-5" />
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  {vision.title}
                </h2>
              </div>
              <p className="mb-7 text-base leading-relaxed text-gray-600">
                {vision.statement}
              </p>
              <ul className="space-y-3.5">
                {vision.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold">
                      <Check className="size-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-gray-700">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Principal Consultant */}
        <div className="mt-24 border-t border-gray-200 pt-20">
          <Reveal className="mb-14 text-center">
            <SectionKicker className="mb-3">Leadership</SectionKicker>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              About the Principal Consultant
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold" />
          </Reveal>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                  <img
                    src={sanjayImg}
                    alt={`${principalConsultant.name} - ${principalConsultant.title}`}
                    className="h-[420px] w-full object-cover sm:h-[500px]"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-brand-navy-950/95 p-5 text-white shadow-xl sm:left-6 sm:right-auto">
                  <h3 className="text-xl font-bold text-brand-gold">
                    {principalConsultant.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-white/60">
                    {principalConsultant.title}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-gray-600">
                  {principalConsultant.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {principalConsultant.highlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <Reveal delay={index * 0.05} key={highlight.label}>
                        <div className="flex h-full items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50/60 p-5 transition-all hover:border-brand-navy/20 hover:bg-white hover:shadow-md">
                          <span className="flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-navy/10 text-brand-navy">
                            <Icon className="size-5" />
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900">
                              {highlight.label}
                            </h4>
                            <p className="mt-0.5 text-sm leading-relaxed text-gray-600">
                              {highlight.text}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-150 pt-6">
                  <span className="text-sm font-medium text-gray-500">
                    {principalConsultant.experience}
                  </span>
                  <a
                    href={principalConsultant.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-navy-dark hover:shadow-lg hover:shadow-brand-navy/25"
                  >
                    <Linkedin className="size-4" />
                    View LinkedIn Profile
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-24 border-t border-gray-200 pt-20">
          <Reveal className="mb-12 text-center">
            <SectionKicker className="mb-3">What We Stand For</SectionKicker>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Core Values (C.O.R.E.)
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-brand-gold" />
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal delay={index * 0.06} key={value.name}>
                  <div className="group h-full rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/25 hover:shadow-xl">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-brand-navy/10 text-brand-navy transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-900">
                      {value.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Core Team CTA */}
        <div className="mt-24">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-brand-navy p-8 text-center sm:flex-row sm:text-left">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Our Core Team
                </h3>
                <p className="mt-2 text-white/70">
                  Meet the specialists who deliver our sales expertise.
                </p>
              </div>
              <a
                href="/core-team"
                className="inline-block rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition-all hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/20"
              >
                Meet the Core Team
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}