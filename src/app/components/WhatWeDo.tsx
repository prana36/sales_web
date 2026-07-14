/// <reference types="vite/client" />
import {
  Activity,
  Award,
  BarChart2,
  BarChart3,
  ClipboardCheck,
  LineChart,
  PhoneCall,
  RefreshCw,
  SearchCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";

function youtubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/,
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

interface JourneyStep {
  tag: string;
  title: string;
  text: string;
  cta: { label: string; href: string };
  points: { icon: LucideIcon; label: string; url?: string }[];
}

function StepCard({ step, index }: { step: JourneyStep; index: number }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/[0.08] sm:p-7">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex size-6 items-center justify-center rounded-full bg-brand-gold text-xs font-bold text-brand-navy">
          {index + 1}
        </span>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
          {step.tag}
        </p>
      </div>
      <h3 className="mb-2 text-xl font-bold leading-tight text-white">
        {step.title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-white/60">{step.text}</p>

      <div className="mt-auto space-y-3 border-t border-white/10 pt-5">
        {step.points.map((point) => {
          const Icon = point.icon;
          const content = (
            <>
              <Icon className="size-4 flex-shrink-0 text-brand-gold" />
              <span className="text-sm font-medium text-white/80">
                {point.label}
              </span>
            </>
          );
          return point.url ? (
            <Link
              key={point.label}
              to={point.url}
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              {content}
            </Link>
          ) : (
            <div key={point.label} className="flex items-center gap-3">
              {content}
            </div>
          );
        })}
      </div>

      <a
        className="mt-6 inline-flex justify-center rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-navy transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/20"
        href={step.cta.href}
      >
        {step.cta.label}
      </a>
    </div>
  );
}

export default function WhatWeDo() {
  const journeySteps: JourneyStep[] = [
    {
      tag: "Diagnose",
      title: "Sales Audit",
      text: "We study data, competition, and team capability to find exactly where sales is leaking.",
      cta: { label: "Request Sales Audit", href: "#contact" },
      points: [
        { icon: BarChart3, label: "Regression & Skill-Will Analysis" },
        { icon: SearchCheck, label: "Competition & Market Study" },
        { icon: ClipboardCheck, label: "Blueprint for Execution" },
      ],
    },
    {
      tag: "Redesign",
      title: "SME & MSME Advisory",
      text: "We rebuild the sales engine — strategy, process, and technology — so growth becomes repeatable.",
      cta: { label: "Contact Us", href: "#contact" },
      points: [
        { icon: LineChart, label: "Sales Strategy & Process Design" },
        { icon: Activity, label: "Technology-Enabled Sales Teams" },
        { icon: TrendingUp, label: "Acquisition & Retention Planning" },
      ],
    },
    {
      tag: "Develop",
      title: "Sales Training",
      text: "Our trainers build practical selling capability with measurable, on-ground outcomes.",
      cta: { label: "Schedule Gap Analysis", href: "#contact" },
      points: [
        { icon: BarChart2, label: "Gap Analysis", url: "/gap-analysis" },
        { icon: Award, label: "Learning Outcomes", url: "/learning-outcome" },
        {
          icon: RefreshCw,
          label: "Outcome Tracking",
          url: "/outcome-tracking",
        },
      ],
    },
  ];

  return (
    <section className="bg-white px-4 py-14 sm:px-6 md:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[2.5rem] bg-brand-navy p-6 sm:p-10 lg:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <SectionKicker variant="dark">What We Do</SectionKicker>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                Diagnose the gap.{" "}
                <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">
                  Redesign the system.
                </span>{" "}
                Develop the team.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                Root Cause Analysis - We plug leakages in Sales Funnel,
                rebuild strategy and process around it and train the team
                that has to run it everyday.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-brand-gold px-6 py-3.5 font-semibold text-brand-navy shadow-lg shadow-brand-gold/20 transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light"
                >
                  Contact Us
                </a>
                <a
                  href="/sales-consultant-india"
                  className="rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-all hover:bg-white/10"
                >
                  SME Consulting
                </a>
                <a
                  href="tel:9970506000"
                  className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-brand-gold"
                >
                  <PhoneCall className="size-5 text-brand-gold" />
                  <span>+91 9970506000</span>
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3 lg:items-stretch">
              {journeySteps.map((step, index) => (
                <StepCard index={index} key={step.tag} step={step} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
