/// <reference types="vite/client" />
import { Calendar, Clock, MapPin, TrendingUp, Users } from "lucide-react";
import Reveal from "./shared/Reveal";

export default function CompanyStats() {
  const stats = [
    {
      icon: Calendar,
      value: "30",
      unit: "+",
      label: "Years of Experience",
      desc: "Sales training, coaching, and consulting practice since 1998.",
      card: "bg-blue-50/70",
      icon_theme: "bg-white text-blue-600",
    },
    {
      icon: MapPin,
      value: "38",
      unit: "+",
      label: "Cities Covered",
      desc: "Business consulting and training rollouts across India.",
      card: "bg-emerald-50/70",
      icon_theme: "bg-white text-emerald-600",
    },
    {
      icon: Users,
      value: "10.4L",
      unit: "+",
      label: "Salespeople Trained",
      desc: "Handled through training and capability programs.",
      card: "bg-violet-50/70",
      icon_theme: "bg-white text-violet-600",
    },
    {
      icon: Clock,
      value: "34K",
      unit: "+",
      label: "Training Hours",
      desc: "Delivered across multiple forms of selling.",
      card: "bg-amber-50/70",
      icon_theme: "bg-white text-amber-600",
    },
    {
      icon: TrendingUp,
      value: "73",
      unit: "%",
      label: "Growth Registered",
      desc: "In measurable client interventions.",
      card: "bg-orange-50/70",
      icon_theme: "bg-white text-orange-600",
    },
  ];

  return (
    <div className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal delay={index * 0.06} key={stat.label}>
                <div className={`h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${stat.card}`}>
                  <div
                    className={`mb-6 flex size-11 items-center justify-center rounded-full shadow-sm ${stat.icon_theme}`}
                  >
                    <Icon className="size-5" />
                  </div>

                  <h3 className="flex items-baseline gap-1 text-4xl font-black tracking-tight text-brand-navy-950 md:text-5xl">
                    {stat.value}
                    <span className="ml-0.5 select-none text-2xl font-extrabold md:text-3xl">
                      {stat.unit}
                    </span>
                  </h3>

                  <p className="mt-3 text-sm font-bold text-gray-800">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {stat.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
