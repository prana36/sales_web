import { useEffect } from "react";
import type React from "react";
import sanjayConsultantImg from "../assets/images/sanjay-singh.jpg";
import FaqGroup from "../components/shared/FaqGroup";
import Reveal from "../components/shared/Reveal";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  FileSignature,
  LineChart,
  PhoneCall,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

const trustBrands = [
  "LG",
  "ICICI Bank",
  "Godrej",
  "Kohler",
  "Ultratech",
  "Aditya Birla Group",
  "Airtel",
  "Tata Teleservices",
  "HUL",
  "Nestle",
  "Lemken",
  "Calderys",
];

const painPoints = [
  "Targets are hit one quarter and missed the next, with no way to predict which.",
  "The pipeline is thin, and too much of it is unqualified.",
  "Reps cannot get past gatekeepers to the actual decision-maker.",
  "Deals go quiet after a strong first meeting and never recover.",
  "Customers treat your team as just another vendor, not a trusted advisor.",
  "Good salespeople keep leaving, and morale leaves with them.",
];

const processSteps = [
  {
    number: "01",
    title: "Gap Analysis",
    text: "We audit your sales structure, team, process and metrics to pinpoint exactly where revenue is leaking, and why. No guesswork - a diagnosis before a prescription.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Blueprint for Success",
    text: "We co-create a customised sales roadmap for your business: strategy, team structure, compensation, CRM and a concrete execution plan you can actually run.",
    icon: Target,
  },
  {
    number: "03",
    title: "Annual Retainership Contract",
    text: "We stay in the trenches for a full year with monthly reviews, course corrections and hands-on support until you hit and exceed that 20%.",
    icon: LineChart,
  },
];

const frameworks = [
  "SALEbrity - turning sales professionals into brands",
  "Sales ki Jaat - the DNA of a true salesperson",
  "Sales ki Vidhi - the method and process of selling",
  "Sales ki Niti - the ethics and principles of selling",
  "Sales Katha - storytelling as a sales tool",
  "Sales Mein Molbhav - the art of negotiation",
];

const testimonials = [
  {
    quote:
      "All participants appreciated the practical and live inputs given by you in the course of the session towards effective sales management in the contemporary environment.",
    name: "Prof Ramendra Singh",
    role: "Associate Professor, IIM Kolkata",
  },
  {
    quote:
      "The training methodology coupled with presentation and communication skills was rated high for all the training programs.",
    name: "S Dhinakaran",
    role: "Sr Manager HR, Tata Teleservices",
  },
  {
    quote:
      "We wanted quality, we got quality. We wanted a solution, we got a solution. We wanted great service, we got great service.",
    name: "Prof. Buleshwar Mate",
    role: "EnVisionAr Design Atelier",
  },
];

const consultingFaqs = [
  {
    question: "What does a sales consultant actually do?",
    answer:
      "A sales consultant diagnoses why your revenue is not growing, then designs and helps execute a plan to fix it across strategy, team, process and skills. Strategic Concepts runs a Gap Analysis, builds a customised blueprint, and stays hands-on through a full-year retainer until the growth target is met.",
  },
  {
    question: "How much does it cost to hire a sales consultant in India?",
    answer:
      "Fees depend on your team size, scope of work and engagement length, so pricing is scoped in a free discovery call. The fixed point is the outcome: the work is backed by a signed 20% growth guarantee.",
  },
  {
    question: "What exactly is the 20% growth guarantee?",
    answer:
      "Strategic Concepts commits, in a signed MOU, to a minimum 20% rise in top-line revenue in Year 1. It is measured by actual receipts before and after, not projections. If you do not hit it, you get a full refund of the fee.",
  },
  {
    question: "How is the growth measured?",
    answer:
      "By real, auditable numbers. Your baseline revenue is recorded before work begins and compared to actual receipts at the end. There are no vanity metrics and no fine print.",
  },
  {
    question: "How long does a sales consulting engagement run?",
    answer:
      "The core engagement runs for a full year under an Annual Retainership Contract. Durable sales change needs implementation, monthly review and course correction, not only a one-day workshop.",
  },
  {
    question: "Do you work with small businesses, or only large corporates?",
    answer:
      "Both. Strategic Concepts has worked with SMEs, MSMEs, family-run businesses and large corporate brands. The guarantee model is especially useful for SMEs because it reduces the risk of investing in growth.",
  },
  {
    question: "Is the discovery call really free?",
    answer:
      "Yes. It is a free, no-obligation conversation about where your business is today and whether the guarantee model is a good fit.",
  },
];

const salesFaqs = [
  {
    question: "How can I improve my sales skills quickly?",
    answer:
      "Start with fundamentals: understand the customer's real problem before pitching, ask more than you tell, and follow up consistently. Structured practice through frameworks like Sales ki Vidhi and Sales Mein Molbhav makes selling repeatable.",
  },
  {
    question: "What is the single most important skill in sales?",
    answer:
      "Listening. Most deals are lost because the salesperson talks at the customer instead of uncovering what they actually need. Genuine discovery separates consistent closers from occasionally lucky sellers.",
  },
  {
    question: "How do I handle sales objections?",
    answer:
      "Treat an objection as a request for information, not a rejection. Acknowledge it, ask a clarifying question, then address the concern behind it: price, timing, need, authority or trust.",
  },
  {
    question: "How do I close more deals without sounding pushy?",
    answer:
      "Lead with the customer's problem, not your product. When you are clearly solving a real need, selling stops feeling like pushing. Storytelling, the heart of Sales Katha, helps customers see value clearly.",
  },
  {
    question: "How do I build a high-performing sales team?",
    answer:
      "Build around three things: the right people, a clear process and incentives that reward the behaviour you want. This is a central part of the consulting blueprint.",
  },
];

export default function SalesConsultantPage() {
  useEffect(() => {
    document.title = "Sales Consultant in India | Guaranteed 20% Revenue Growth";
    const description =
      "Hire a sales consultant in India who guarantees 20% revenue growth in Year 1 or a full refund. 44 years, 20+ brands. Book a free discovery call.";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.content = description;
  }, []);

  return (
    <main className="bg-white pt-24 text-gray-900">
      <section className="bg-brand-navy-950 px-4 py-16 text-white sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Sales Consulting - Training - Guaranteed Growth
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
              Best Sales Consultant in India - Guaranteed to Grow Your Revenue by 20%
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
              We do not just advise. We sign a guarantee: your top-line revenue grows by at least 20% in Year 1, or you get every rupee back. Strategic Concepts (India) has been engineering measurable sales growth for SMEs and corporates since 1998.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-navy-950 transition hover:-translate-y-0.5 hover:bg-brand-gold-light"
                href="/#contact"
              >
                Book a Free Discovery Call
                <ArrowRight className="size-4" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-navy-950"
                href="/courses"
              >
                Explore Online Sales Courses
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-gold/60 px-6 py-3 font-semibold text-brand-gold transition hover:bg-brand-gold hover:text-brand-navy-950"
                href="https://consult4sales.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Join the Sales Community
              </a>
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-2xl" delay={0.1}>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/10">
              <img
                alt="Sanjay Singh sales consultant in India"
                className="h-full w-full object-cover"
                src={sanjayConsultantImg}
              />
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Metric value="44" label="Years in Sales" />
              <Metric value="20+" label="Major Brands" />
              <Metric value="20%" label="Growth Promise" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
            Trusted by India's leading brands
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustBrands.map((brand) => (
              <span
                className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700"
                key={brand}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ContentBand>
        <SectionIntro
          eyebrow="The Revenue Problem"
          title="If Your Sales Team Is Stuck Here, You Are Not Alone"
          text="Most businesses do not have a product problem. They have a sales problem - and it usually looks like this."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, index) => (
            <Reveal delay={index * 0.06} key={point}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mb-4 size-6 text-brand-navy" />
                <p className="text-sm leading-6 text-gray-700">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-700">
          You can keep hoping it fixes itself. Or you can bring in someone who has fixed exactly this, for over 20 of India's most demanding brands.
        </p>
      </ContentBand>

      <section className="bg-brand-gold px-4 py-16 text-brand-navy-950 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy-950/70">
              Signature Guarantee
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              The Only Sales Consultancy in India That Guarantees Your Growth
            </h2>
          </Reveal>
          <div className="space-y-6 text-lg leading-8 text-brand-navy-950/90">
            <p>
              Most sales consultants hand you a deck and walk away. We put our fee on the line instead.
            </p>
            <p>
              You get a minimum 20% increase in top-line revenue, measured by real, auditable receipts - your numbers before we start, your numbers after. If you do not grow, you do not pay. A signed MOU backs every word. No fine print, no vanity metrics, no excuses.
            </p>
            <p>
              We have delivered this for JJ Plast Alloys, Parekh Jewelers, Ajmera Tyres, Calderys Refractories, Lemken Agri Implements, Cahors Transformers, Grindmaster Abrasives, Palav Sarees, Shree Shivam Modern Retail and Neoteric Properties.
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy-950 px-6 py-3 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand-navy-dark"
              href="/#contact"
            >
              See If You Qualify
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <ContentBand muted>
        <SectionIntro
          eyebrow="How It Works"
          title="How Our Sales Consulting Process Works"
          text="From your first call to 20% growth - a three-stage process refined over four decades in the field."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal delay={index * 0.08} key={step.title}>
                <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-4xl font-black text-brand-navy">{step.number}</span>
                    <Icon className="size-8 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-gray-600">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </ContentBand>

      <ContentBand>
        <div className="grid gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-xl">
            <img
              alt="Sanjay Singh founder of Strategic Concepts"
              className="h-[520px] w-full object-cover"
              src={sanjayConsultantImg}
            />
          </div>
          <div>
            <SectionIntro
              eyebrow="About Sanjay Singh"
              title="44 Years in Sales, From Door-to-Door to Boardrooms"
              text="Sanjay Singh started selling in 1981 as one of 16 men at Eureka Forbes carrying Euroclean vacuum cleaners door-to-door across Mumbai. He calls that his baptism. It became a lifelong devotion to what he calls the Religion of Sales."
            />
            <div className="space-y-5 text-base leading-8 text-gray-700">
              <p>
                Since then, he has sold palmtop computers to TATA and SAIL, run export sales across Nigeria, Canada and the Middle East, built a 208-member DSA team for ICICI Bank, and trained sales forces at more than 20 of India's most respected brands.
              </p>
              <p>
                In 1998 he founded Strategic Concepts (India) Pvt. Ltd. Since 2011, he has guaranteed measurable SME growth and delivered it consistently. He is MDP faculty at IIM Kolkata and the founder of The School of Sales, India's first formal classroom school for sales professionals.
              </p>
              <div className="grid gap-3 pt-3 sm:grid-cols-3">
                <InfoPill icon={Award} text="MBA, BIT Mesra" />
                <InfoPill icon={Users} text="Rotarian, RID 3030" />
                <InfoPill icon={ShieldCheck} text="Golfer, Handicap 12" />
              </div>
            </div>
          </div>
        </div>
      </ContentBand>

      <ContentBand muted>
        <SectionIntro
          eyebrow="Trademarked Frameworks"
          title="Six Trademarked Sales Frameworks, Built Over 44 Years"
          text="Our consulting and training run on proprietary methods, not recycled theory."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((framework, index) => (
            <Reveal delay={index * 0.06} key={framework}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-5">
                <BookOpen className="mb-4 size-6 text-brand-navy" />
                <p className="font-semibold leading-7 text-gray-800">{framework}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ContentBand>

      <ContentBand>
        <SectionIntro
          eyebrow="Client Proof"
          title="What Our Clients Say"
          text="Practical, field-tested sales coaching has been appreciated by leadership teams, institutions and corporate learning teams."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal delay={index * 0.08} key={item.name}>
              <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm italic leading-7 text-gray-700">"{item.quote}"</p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {item.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </ContentBand>

      <ContentBand muted>
        <div className="grid gap-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Courses and Community
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Not Ready for Consulting? Start With the Courses
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              Learn the same frameworks yourself. The School of Sales offers structured online courses for GenZ students, early-career sales professionals and family-business owners, plus a peer community to practise, compare notes and grow with.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a className="rounded-full bg-brand-navy px-5 py-3 text-center font-semibold text-white hover:bg-brand-navy-dark" href="/courses">
              Explore Online Sales Courses
            </a>
            <a
              className="rounded-full border border-brand-navy px-5 py-3 text-center font-semibold text-brand-navy hover:bg-brand-navy/5"
              href="https://consult4sales.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Join the Sales Community
            </a>
          </div>
        </div>
      </ContentBand>

      <ContentBand>
        <SectionIntro
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          text="Sales consulting cost, process, guarantee and practical selling questions answered clearly."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <FaqGroup title="Sales Consulting - Cost, Process and Guarantee" faqs={consultingFaqs} />
          <FaqGroup title="Sales Tips - How to Sell Better" faqs={salesFaqs} />
        </div>
      </ContentBand>

      <section className="bg-brand-navy-950 px-4 py-16 text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
            Final Call
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Ready to Grow Your Revenue by 20% - Guaranteed?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Start with a free discovery call. No sales pitch - just an honest conversation about where your business is today and where it could be in twelve months.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-navy-950 transition hover:-translate-y-0.5 hover:bg-brand-gold-light"
              href="/#contact"
            >
              Book Your Free Discovery Call
              <PhoneCall className="size-4" />
            </a>
            <a className="font-semibold text-brand-gold hover:text-white" href="mailto:sanjay@consult4sales.com">
              sanjay@consult4sales.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContentBand({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={`${muted ? "bg-gray-50" : "bg-white"} px-4 py-16 sm:px-6 md:py-24`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal className="mb-10 max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">{text}</p>
    </Reveal>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
      <p className="text-2xl font-black text-brand-gold">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{label}</p>
    </div>
  );
}

function InfoPill({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm font-semibold text-gray-700">
      <Icon className="size-5 flex-shrink-0 text-brand-gold" />
      {text}
    </div>
  );
}

