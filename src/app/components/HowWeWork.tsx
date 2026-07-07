/// <reference types="vite/client" />
import { AlertTriangle, ClipboardCheck, Map, Zap } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      title: "Sales Audit",
      icon: ClipboardCheck,
      text: "Regression, business intelligence, and competition analysis to read the sales function.",
    },
    {
      title: "Gap Analysis",
      icon: AlertTriangle,
      text: "A first-hand report on the What, When, Where, Who, Why, and How behind the gaps.",
    },
    {
      title: "Go-To-Market Plan",
      icon: Map,
      text: "Quarter-wise actions, budgets, and owners documented for the year ahead.",
    },
    {
      title: "Implementation",
      icon: Zap,
      text: "Strict adherence to the plan, driven by monthly review meetings.",
    },
  ];

  return (
    <section
      id="how_we_work"
      className="border-y border-gray-150 bg-gray-50 px-4 py-16 sm:px-6 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
            How Do We Work?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            4 Steps to Leverage Your Sales Function
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-[10px] border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-blue-900 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="flex size-9 items-center justify-center rounded-[10px] bg-blue-50 text-blue-900 ml-auto">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
