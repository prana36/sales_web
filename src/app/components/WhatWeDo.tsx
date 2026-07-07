/// <reference types="vite/client" />
import { useEffect, useState } from "react";
import { getSetting } from "../api/dynamic-content";
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
} from "lucide-react";
import { Link } from "react-router";

function youtubeEmbedUrl(url: string): string {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/,
  );
  return match
    ? `https://www.youtube.com/embed/${match[1]}`
    : url;
}

export default function WhatWeDo() {
  const journeySteps = [
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

  const [videoEmbedUrl, setVideoEmbedUrl] = useState(
    "https://www.youtube.com/embed/Uh0XxtYwf9k",
  );

  useEffect(() => {
    getSetting("growth_consulting_video_url").then((url) => {
      if (url) setVideoEmbedUrl(youtubeEmbedUrl(url));
    });
  }, []);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Diagnose the gap.{" "}
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Redesign the system.
              </span>{" "}
              Develop the team.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              One connected engagement for SME & MSME businesses — we find
              where sales is leaking, rebuild the strategy and process around
              it, and train the team that has to run it every day.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-[10px] shadow hover:shadow-lg transition-all"
              >
                Contact Us
              </a>
              <a
                href="/sales-consultant-india"
                className="border border-blue-900 px-6 py-3 rounded-[10px] text-blue-900 font-semibold hover:bg-blue-50 transition-all"
              >
                SME Consulting
              </a>
              <a
                href="tel:9970506000"
                className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                <PhoneCall className="size-5 text-yellow-500" />
                <span>+91 9970506000</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-video w-full rounded-[10px] overflow-hidden shadow-xl border border-gray-200 bg-black">
              <iframe
                src={videoEmbedUrl}
                title="Growth Consulting Agency"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {journeySteps.map((step, stepIndex) => (
            <div
              key={step.tag}
              className="rounded-[10px] border border-gray-200 bg-gray-50 p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="flex size-6 items-center justify-center rounded-full bg-blue-900 text-xs font-bold text-white">
                  {stepIndex + 1}
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-900">
                  {step.tag}
                </p>
              </div>
              <h3 className="text-xl font-bold leading-tight text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 mb-5">
                {step.text}
              </p>
              <div className="space-y-3 mb-6">
                {step.points.map((point) => {
                  const Icon = point.icon;
                  const content = (
                    <>
                      <Icon className="size-4 text-blue-900 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800">
                        {point.label}
                      </span>
                    </>
                  );
                  return "url" in point && point.url ? (
                    <Link
                      key={point.label}
                      to={point.url}
                      className="flex items-center gap-3 hover:text-blue-900 transition-colors"
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
                className="inline-flex rounded-[10px] bg-yellow-500 px-5 py-2.5 text-sm font-bold text-gray-900 transition-all hover:bg-yellow-400 hover:shadow-lg"
                href={step.cta.href}
              >
                {step.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
