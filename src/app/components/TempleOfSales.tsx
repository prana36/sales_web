/// <reference types="vite/client" />
import { 
  BarChart2, 
  Award, 
  LineChart, 
  Activity, 
  RefreshCw, 
  TrendingUp,
  ArrowUpRight
} from "lucide-react";

export default function TempleOfSales() {
  const features = [
    {
      label: "Gap Analysis",
      url: "/gap-analysis",
      icon: BarChart2,
      description: "Identify performance gaps in your sales architecture."
    },
    {
      label: "Learning Outcome",
      url: "#",
      icon: Award,
      description: "Define clear benchmarks for skill enhancement."
    },
    {
      label: "Learning Metrics",
      url: "https://www.youtube.com/watch?v=YzQml28nbbQ",
      icon: LineChart,
      description: "Quantified evaluation of sales training effectiveness."
    },
    {
      label: "Outcome Tracking",
      url: "#",
      icon: Activity,
      description: "Diligently monitor performance improvements on-ground."
    },
    {
      label: "Remedial Programs",
      url: null,
      icon: RefreshCw,
      description: "Custom courses to fix individual skill deficiencies."
    },
    {
      label: "Guaranteed Growth",
      url: "https://www.youtube.com/watch?v=YzQml28nbbQ",
      icon: TrendingUp,
      description: "Experience guaranteed long-term business escalation."
    }
  ];

  return (
    <section id="welcome_temple_of_sales" className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest">
              Top Sales Training Provider
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to the <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">Temple of Sales</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sales training becomes costly when it is skipped. Our trainers
              bring hands-on field experience and industry context to build
              practical selling capability, measurable learning outcomes, and
              on-ground performance improvement.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-[10px] font-semibold shadow transition-all hover:shadow-lg"
              >
                Schedule Gap Analysis
              </a>
            </div>
          </div>

          {/* Features Grid (Right) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const hasLink = feature.url !== null;
              
              const CardContent = (
                <>
                  <div className="flex items-start justify-between">
                    <div className="bg-blue-50 text-blue-900 p-3 rounded-[10px] group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                      <Icon className="size-6" />
                    </div>
                    {hasLink && (
                      <ArrowUpRight className="size-4 text-gray-400 group-hover:text-blue-900 transition-colors" />
                    )}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {feature.label}
                    </h3>
                    <p className="text-gray-555 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </>
              );

              return hasLink ? (
                <a 
                  key={index}
                  href={feature.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 border border-gray-200/80 p-6 rounded-[10px] hover:bg-white hover:border-blue-900/30 hover:shadow-xl transition-all duration-300 group block"
                >
                  {CardContent}
                </a>
              ) : (
                <div 
                  key={index}
                  className="bg-gray-50/50 border border-gray-200/40 p-6 rounded-[10px] cursor-not-allowed group opacity-85"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
