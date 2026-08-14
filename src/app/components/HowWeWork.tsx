/// <reference types="vite/client" />
import { CalendarCheck, ClipboardCheck, Users, Workflow } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";

export default function HowWeWork() {
  const steps = [
    {
      title: "People",
      icon: Users,
      text: "Right people for the Right job at the Right time and Place.",
    },
    {
      title: "Process",
      icon: Workflow,
      text: "Smart Process should run brave People to become unstoppable in business.",
    },
    {
      title: "Program",
      icon: CalendarCheck,
      text: "Initiatives run consistently when stitched together in a program.",
    },
    {
      title: "Procedures",
      icon: ClipboardCheck,
      text: "Standard Operating Procedures followed by all and sundry makes winning sales teams.",
    },
  ];

  return (
    <section
      id="how_we_work"
      className="border-y border-gray-150 bg-gray-50 px-4 py-14 sm:px-6 md:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12">
          <SectionKicker className="mb-3">How Do We Work?</SectionKicker>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            4 P's to Leverage Your Sales Function
          </h2>
        </Reveal>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-[38px] hidden border-t-2 border-dashed border-brand-navy/15 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal delay={index * 0.08} key={step.title}>
                <div className="relative h-full rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="relative z-10 flex size-6 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="ml-auto flex size-9 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
                      <Icon className="size-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
