/// <reference types="vite/client" />
import { Check } from "lucide-react";
import Reveal from "../components/shared/Reveal";
import SectionKicker from "../components/shared/SectionKicker";

const plans = [
  {
    name: "Audit",
    label: "Sales Function Check up",
    price_inr: "INR 5,00,000/-",
    features: [
      "Regression Analysis",
      "Competition Analysis",
      "Skill - Will Matrix of Sales Team",
      "Strategy",
      "Blueprint for Success",
    ],
    isPopular: false,
    tag: null,
  },
  {
    name: "Advisory",
    label: "1-2-1 Sales Advisory Pack",
    price_inr: "INR 2,50,000/-",
    features: [
      "10 Sessions",
      "Probing",
      "Researching",
      "Mentoring",
      "Training & Coaching",
    ],
    isPopular: true,
    tag: "Popular Pack",
  },
  {
    name: "Annual Retainership",
    label: "Annual Retainership Contract",
    price_inr: "INR 50,00,000/-",
    features: [
      "1 year Retainership",
      "Sales Ecosystem Construction",
      "Sales Enablement & Support",
      "Sales Empowerment & Training",
      "Guaranteed Sales Growth",
    ],
    isPopular: false,
    tag: "Let's Do it !",
  },
];

export default function PricingPage() {
  return (
    <section className="bg-white px-4 py-16 pt-32 sm:px-6 md:py-24 md:pt-36">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <SectionKicker className="mb-3">Our Pricing Plans</SectionKicker>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Help us to Help you!
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <Reveal delay={index * 0.08} key={plan.name}>
              <div
                className={`h-full bg-white border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? "border-brand-navy shadow-xl md:scale-105 md:z-10"
                    : plan.tag
                      ? "border-brand-gold/80 shadow-md"
                      : "border-gray-200 shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.tag && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      plan.isPopular
                        ? "bg-brand-navy text-white"
                        : "bg-brand-gold text-brand-navy-950"
                    }`}
                  >
                    {plan.tag}
                  </span>
                )}

                <div>
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                      {plan.label}
                    </p>
                  </div>

                  <div className="border-t border-b border-gray-100 py-6 mb-6 text-center bg-gray-50/50 rounded-2xl">
                    <span className="text-xs text-gray-400 font-bold block uppercase tracking-wider mb-1">
                      Investment
                    </span>
                    <span className="text-2xl font-black text-brand-navy lg:text-3xl">
                      {plan.price_inr}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`p-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                            plan.isPopular
                              ? "bg-brand-navy text-white"
                              : "bg-brand-gold/15 text-brand-gold"
                          }`}
                        >
                          <Check className="size-4" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/#contact"
                  className={`w-full py-3.5 rounded-full font-bold text-sm text-center transition-all ${
                    plan.isPopular
                      ? "bg-brand-navy hover:bg-brand-navy-dark text-white shadow-lg hover:shadow-brand-navy/20"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200"
                  }`}
                >
                  Contact Us
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
