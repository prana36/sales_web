/// <reference types="vite/client" />

export default function CompanyStats() {
  const stats = [
    { 
      value: "30", 
      unit: "+", 
      label: "Years of sales training, coaching, and consulting practice.",
      lineProgress: "w-1/4"
    },
    { 
      value: "38", 
      unit: "+", 
      label: "Cities covered through business consulting and training rollouts.",
      lineProgress: "w-1/3"
    },
    { 
      value: "10.4L", 
      unit: "+", 
      label: "Salespeople handled through training and capability programs.",
      lineProgress: "w-1/2"
    },
    { 
      value: "34K", 
      unit: "+", 
      label: "Training hours delivered across multiple forms of selling.",
      lineProgress: "w-3/4"
    },
    { 
      value: "73", 
      unit: "%", 
      label: "Growth registered in measurable client interventions.",
      lineProgress: "w-full"
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              
              {/* Progress Line on Top */}
              <div className="w-full h-[3px] bg-gray-100 relative mb-6 rounded-full overflow-hidden">
                <div className={`h-full bg-blue-900 absolute left-0 top-0 rounded-full ${stat.lineProgress}`} />
              </div>
              
              {/* Value and Unit */}
              <h3 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight flex items-baseline gap-1">
                {stat.value}
                <span className="text-blue-900 font-extrabold text-3xl md:text-4xl ml-0.5 select-none">
                  {stat.unit}
                </span>
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mt-3 font-medium">
                {stat.label}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

