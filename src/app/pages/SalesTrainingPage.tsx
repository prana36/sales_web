import { Link } from "react-router";
import Reveal from "../components/shared/Reveal";
import SectionKicker from "../components/shared/SectionKicker";
import FaqGroup from "../components/shared/FaqGroup";

const faqGroups = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "What is Sales Baptism?",
        answer:
          "Sales Baptism is a Sales Training program for beginners. It is the first step of the Sales training process and is designed to help freshers discover the function of Sales.",
      },
      {
        question: "Who should take this program?",
        answer:
          "Freshers, early-career salespeople, MBA and BBA students, customer-facing counselors, real estate brokers, BFSI and telecom salespeople, and anyone who wants to understand sales the right way.",
      },
    ],
  },
  {
    title: "Program Value",
    faqs: [
      {
        question: "What do participants get out of it?",
        answer:
          "They understand the function of Sales, their role and responsibility, fear management, the highway of success in Sales Leadership, and how to make informed sales career decisions.",
      },
      {
        question: "How is it delivered?",
        answer:
          "The reference program is virtual, with recorded videos, workbooks, doubt clearing, and guided learning at a non-threatening pace.",
      },
    ],
  },
  {
    title: "Program Questions",
    faqs: [
      {
        question: "What modules are covered?",
        answer:
          "Discovering Sales Function, Fears / Apprehensions / Stress, and Sales Leadership.",
      },
      {
        question: "How do I avail the program?",
        answer:
          "Pay for the course, download the videos and workbooks, learn at your own pace, and use the one-to-one doubt clearing session.",
      },
    ],
  },
];

const steps = [
  {
    title: "Step 1",
    text: "Pay your fees for the program.",
    linkLabel: "Buy Course @ Rs.999/-",
    link: "https://rzp.io/rzp/zErEOJBw",
  },
  {
    title: "Step 2",
    text: "Download the pre-recorded videos and the accompanying workbooks.",
    linkLabel: "Watch on YouTube",
    link: "https://www.youtube.com/embed/ro64598YQQg",
  },
  {
    title: "Step 3",
    text: "Watch, learn at leisure, and use the one-to-one session for doubt clearing.",
    linkLabel: "Contact Us",
    link: "#contact",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-relaxed text-white/80">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 text-brand-gold">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SalesTrainingPage() {
  return (
    <section id="sales-training" className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[2.5rem] bg-brand-navy p-6 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-4xl text-center">
              <SectionKicker variant="dark">Sales Training</SectionKicker>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                Sales Baptism for beginners and fresh sales talent.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                The first step of the sales learning journey, built for beginners who need a practical,
                low-pressure introduction to the function of Sales, the fears that block performance,
                and the habits that lead to Sales Leadership.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/ro64598YQQg"
                  title="Sales Baptism"
                />
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-white/80">
                <h2 className="text-xl font-bold text-white">The Course in a Snapshot</h2>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  Sales Baptism is curated as a Sales Training program for beginners. It has been used
                  by SMEs and by BBA / MBA students as the first step in understanding the sales
                  function, the sales process, and the challenges a fresher faces in the field.
                </p>
                <p className="mt-4 text-sm leading-7 text-white/70">
                  The program is designed to make sales learning practical, safe, and useful from day
                  one, with clear next steps for learners who want to move from novice to professional.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-navy transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light"
                    href="https://rzp.io/rzp/zErEOJBw"
                    rel="nofollow noreferrer"
                    target="_blank"
                  >
                    Buy Course @ Rs.999/-
                  </a>
                  <Link
                    className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10"
                    to="/#contact"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 text-lg font-bold text-white">What?</h3>
                <BulletList items={[
                  "Discovering Sales Function.",
                  "Fears, Apprehensions & Stress.",
                  "Sales Leadership.",
                ]} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 text-lg font-bold text-white">Who?</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  Salespersons who have joined the function of Sales as a fresher.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 text-lg font-bold text-white">Why?</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  The Science of Sales helps you master the art of selling. If you do not learn it the
                  right way, you will struggle for life with the basics.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 text-lg font-bold text-white">When?</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  0 - 5 years of having joined in Sales function.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 text-lg font-bold text-white">Where?</h3>
                <BulletList items={["Virtual.", "Totally non-threatening atmosphere to learn."]} />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-2 text-lg font-bold text-white">How?</h3>
                <BulletList
                  items={[
                    "Pay the course fee.",
                    "Download videos and workbooks.",
                    "Watch and learn at leisure.",
                    "Use the one-to-one doubt clearing session.",
                  ]}
                />
              </div>
            </div>

            <div className="mt-10 rounded-[1.75rem] bg-white p-6 text-gray-900 shadow-xl sm:p-8">
              <h2 className="text-2xl font-bold text-brand-navy">Frequently Asked Questions</h2>
              <div className="mt-6 space-y-8">
                {faqGroups.map((group) => (
                  <FaqGroup key={group.title} title={group.title} faqs={group.faqs} />
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                    How do you avail the
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Sales Baptism program?</h2>
                </div>
                <a
                  className="text-sm font-semibold text-white/80 underline decoration-white/30 underline-offset-4"
                  href="https://rzp.io/rzp/zErEOJBw"
                  rel="nofollow noreferrer"
                  target="_blank"
                >
                  Pay here
                </a>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {steps.map((step) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-white/80">
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
                    <a
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-light"
                      href={step.link}
                      rel={step.link.startsWith("http") ? "nofollow noreferrer" : undefined}
                      target={step.link.startsWith("http") ? "_blank" : undefined}
                    >
                      {step.linkLabel}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
                <h3 className="mb-2 text-lg font-bold text-white">What is in it for you?</h3>
                <BulletList
                  items={[
                    "Discover the function of Sales.",
                    "Understand your role and responsibility better.",
                    "Manage fears, apprehensions and stress.",
                    "Know the highway of success in Sales Leadership.",
                    "Take an informed decision about your sales career.",
                  ]}
                />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
                <h3 className="mb-2 text-lg font-bold text-white">Who should take it?</h3>
                <BulletList
                  items={[
                    "Freshers in customer-facing sales roles.",
                    "BBA and MBA students in marketing streams.",
                    "Client servicing managers in agencies.",
                    "Counselors and real estate brokers.",
                    "BFSI and telecom salespeople.",
                    "People who hate sales because they do not understand sales.",
                  ]}
                />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
                <h3 className="mb-2 text-lg font-bold text-white">Why take it?</h3>
                <BulletList
                  items={[
                    "Trained salespersons earn name, fame and money faster than others.",
                    "It helps you learn the function of Sales the right way.",
                    "Effort-to-results ratio improves with training.",
                    "It helps you move from fresher to professional faster.",
                    "It helps you stay away from obvious mistakes.",
                  ]}
                />
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#welcome_temple_of_sales"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-navy transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light"
              >
                Back to Sales Training Section
              </Link>
              <Link
                to="/#solutions_services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}