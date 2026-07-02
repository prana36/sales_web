import { BarChart3, ClipboardCheck, LineChart, SearchCheck } from "lucide-react";

export default function SalesAudit() {
  const auditItems = [
    {
      icon: BarChart3,
      title: "Regression Analysis",
      text: "Study sales numbers, patterns, and causes behind performance shifts.",
    },
    {
      icon: SearchCheck,
      title: "Competition Analysis",
      text: "Understand market pressure, customer expectations, and lost opportunities.",
    },
    {
      icon: LineChart,
      title: "Skill-Will Matrix",
      text: "Map the sales team's ability, intent, and coaching priorities.",
    },
    {
      icon: ClipboardCheck,
      title: "Blueprint for Success",
      text: "Document a focused action plan for execution, reviews, and growth.",
    },
  ];

  return (
    <section id="sales_audit" className="bg-white px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 rounded-[10px] border border-gray-200 bg-gray-50 p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-900">
              Check Your Sales Function
            </p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Sales Audit for companies that want growth with evidence.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              The audit studies the sales function through data, customer
              signals, competition, team capability, and market feedback. The
              output is a practical blueprint your team can execute.
            </p>
            <a
              className="mt-7 inline-flex rounded-[10px] bg-yellow-500 px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-yellow-400 hover:shadow-lg"
              href="#contact"
            >
              Request Sales Audit
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {auditItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  className="rounded-[10px] border border-gray-200 bg-white p-5 shadow-sm"
                  key={item.title}
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-[10px] bg-blue-50 text-blue-900">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
