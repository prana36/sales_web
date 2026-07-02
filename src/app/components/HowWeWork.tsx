/// <reference types="vite/client" />
import { 
  ClipboardCheck, 
  AlertTriangle, 
  Map, 
  Zap, 
  ArrowRight,
  Dot
} from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      step_num: "01",
      title: "Sales Audit",
      icon: ClipboardCheck,
      details: [
        "Regression Analysis",
        "Business Intelligence",
        "Data Analytics",
        "Competition Analysis",
        "Customer Satisfaction",
        "Voice of Market"
      ]
    },
    {
      step_num: "02",
      title: "Gap Analysis",
      icon: AlertTriangle,
      details: [
        "First-hand report shortlisting the missing gaps in What, When, Where, Who, Why, and How questions related to the sales function."
      ]
    },
    {
      step_num: "03",
      title: "Go To Market Plan",
      icon: Map,
      details: [
        "Quarter-wise action plan, Budgets and likely results documented for one year.",
        "Roles and Responsibilities for all stakeholders during implementation specified."
      ]
    },
    {
      step_num: "04",
      title: "Implementation",
      icon: Zap,
      details: [
        "Strict adherence to the Go-To-Market Plan with monthly review meetings as the driving force behind execution."
      ]
    }
  ];

  return (
    <section id="how_we_work" className="border-y border-gray-150 bg-gray-50 px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">4 Steps To Leverage your Sales Function</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Do We Work?
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto rounded"></div>
        </div>

        {/* Stepper Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-[10px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-gray-250 group-hover:text-yellow-500 transition-colors duration-300">
                      {step.step_num}
                    </span>
                    <div className="bg-blue-50 text-blue-900 p-3 rounded-[10px] group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                      <Icon className="size-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {step.title}
                  </h3>

                  {/* Details List */}
                  <ul className="space-y-2.5">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-650 text-sm leading-relaxed">
                        <Dot className="size-6 text-yellow-500 -ml-2 -mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative bottom bar */}
                <div className="h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-blue-900 group-hover:to-blue-600 transition-all duration-500 rounded-b-2xl absolute bottom-0 left-0 right-0"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
