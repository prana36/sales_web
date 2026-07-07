/// <reference types="vite/client" />
import sanjayImg from "../assets/images/sanjay-singh.jpg";
import { Award, Briefcase, GraduationCap, Users, Sparkles } from "lucide-react";

export default function TopSalesTrainerPage() {
  const bioPoints = [
    {
      text: "Offering sales training since 2002 through his boutique Sales Coaching enterprise, Strategic Concepts (I) Pvt Ltd, headquartered in Nagpur.",
      icon: Briefcase,
    },
    {
      text: "Believes in experiential learning based on practical on-ground training effectively combined with academic sales methodologies.",
      icon: Sparkles,
    },
    {
      text: "Trusted by major corporate brands including LG Electronics, Godrej & Boyce, ICICI Bank, SBM Bank, Airtel, Tata Teleservices, and Nestle.",
      icon: Users,
    },
    {
      text: "Widely embraced by Small and Medium Enterprises (SME) and MSMEs for his impactful business development sessions.",
      icon: Award,
    },
    {
      text: "Recognized as a top business coach and sales trainer for entrepreneurs in India from 2018 to 2021.",
      icon: Award,
    },
    {
      text: "MDP Faculty member at the prestigious Indian Institute of Management (IIM) Kolkata, rated among the top sales trainers in India.",
      icon: GraduationCap,
    },
    {
      text: "With decades of experience, he is working towards transforming the landscape of sales coaching and training in India.",
      icon: Briefcase,
    },
    {
      text: "Active social media personality, sharing practical sales tactics, tips, and highlights from his on-ground consulting work.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24 pt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">
            Training Program Designer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Sales Trainer in India
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto rounded" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 relative group">
            <div className="overflow-hidden rounded-[10px] shadow-2xl border border-gray-200">
              <img
                src={sanjayImg}
                alt="Sanjay Singh - Top Sales Coach"
                className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[520px] lg:h-[580px]"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 rounded-[10px] border border-gray-800 bg-gray-900 p-4 text-white shadow-xl sm:-bottom-6 sm:left-6 sm:right-6 sm:p-6">
              <div>
                <h3 className="font-bold text-xl text-yellow-500">
                  Sanjay Singh
                </h3>
                <p className="text-xs text-gray-400">
                  Founder, Strategic Concepts
                </p>
              </div>
              <div className="shrink-0 rounded-[10px] bg-yellow-500 p-2 text-sm font-bold text-gray-900">
                44+ Yrs Exp
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 pt-6 lg:pt-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              About the Coach
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {bioPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={index}
                    className="p-5 bg-gray-50 hover:bg-gray-100/70 border border-gray-200/60 rounded-[10px] transition-all flex gap-4"
                  >
                    <div className="bg-blue-50 text-blue-900 p-2.5 rounded-[10px] flex-shrink-0 h-fit">
                      <Icon className="size-5" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-150 flex flex-wrap gap-4 items-center justify-between">
              <p className="text-sm text-gray-500 italic">
                "Experiential learning based on practical on-ground training."
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm px-6 py-3 rounded-[10px] transition-all hover:shadow-lg"
              >
                Book a Session with Sanjay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
