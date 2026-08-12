import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../components/shared/Reveal";
import SectionKicker from "../components/shared/SectionKicker";
import FaqGroup from "../components/shared/FaqGroup";

export type StaticServicePageContent = {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  introParagraphs: string[];
  highlights: Array<{ title: string; description: string }>;
  faqGroups: Array<{
    title: string;
    faqs: Array<{ question: string; answer: string }>;
  }>;
  caseStudyTitle?: string;
  caseStudyItems?: Array<{ title: string; bullets: string[] }>;
};

export default function StaticServicePage({ content }: { content: StaticServicePageContent }) {
  return (
    <section id={content.id} className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[2.5rem] bg-brand-navy p-6 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <SectionKicker variant="dark">{content.kicker}</SectionKicker>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                {content.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                {content.summary}
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {content.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80"
                >
                  <h3 className="mb-2 text-base font-bold text-white">{highlight.title}</h3>
                  <p className="text-sm leading-relaxed text-white/65">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-4 text-base leading-relaxed text-white/75">
              {content.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {content.faqGroups.length ? (
              <div className="mx-auto mt-12 max-w-4xl space-y-10 rounded-[2rem] bg-white p-6 text-gray-900 shadow-xl sm:p-8">
                {content.faqGroups.map((group) => (
                  <FaqGroup key={group.title} title={group.title} faqs={group.faqs} />
                ))}
              </div>
            ) : null}

            {content.caseStudyItems?.length ? (
              <div className="mx-auto mt-12 max-w-5xl">
                <h3 className="mb-4 text-2xl font-bold text-white">{content.caseStudyTitle ?? "Related Case Studies"}</h3>
                <div className="grid gap-4 lg:grid-cols-3">
                  {content.caseStudyItems.map((study) => (
                    <div key={study.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <h4 className="mb-3 text-lg font-bold text-white">{study.title}</h4>
                      <ul className="space-y-2 text-sm leading-relaxed text-white/70">
                        {study.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="mt-1 text-brand-gold">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/#solutions_services"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-navy transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/20"
              >
                <ArrowLeft className="size-4" />
                Back to Services
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                Contact Us
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}