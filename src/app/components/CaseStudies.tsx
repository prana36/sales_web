/// <reference types="vite/client" />
import { Landmark, Tv, Award, ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      case_id: "Case 01",
      client: "ICICI Bank Limited, SME CEO Circle",
      industry: "Emerging Markets, BFSI Industry Vertical",
      tasks: [
        "New Customer Acquisition by Liability Section in Emerging Markets of India"
      ],
      action: "The pain point of SME and MSME in Emerging markets was identified as Succession Planning in Family businesses. We addressed this through curated knowledge dissemination.",
      result: "Thunderous response in 38 cities (emerging markets identified by ICICI Bank) leading to new business acquisition and client engagement.",
      icon: Landmark,
      color: "blue"
    },
    {
      case_id: "Case 02",
      client: "LG Electronics, India",
      industry: "Retail Trade",
      tasks: [
        "To train DSO, Area Managers and Branch Managers on Retail Sales Management",
        "To kindle the spirit of sales in the service team",
        "To coach the Modern Retail Trade Team on Key Account Management",
        "To train the large format retail store management team on Sell-Out Management.",
        "To coach the water purifier service team on AMC closures."
      ],
      action: "Co-create and Curate effective training programs for the Retail Sales, Large Format Retail Sales, Key Accounts, and service teams across multiple locations.",
      result: "All training programs rolled out across India in LG branches and regional offices with measurable results.",
      cities: "Cities covered in roll out plan: Chennai, Pune, Bhubaneshwar, Chandigarh, Greater Noida, Indore, Kolkata, etc.",
      icon: Tv,
      color: "red"
    },
    {
      case_id: "Case 03",
      client: "Amway (www.amway.in)",
      industry: "Multi Level Marketing",
      tasks: [
        "To empower the Diamond Distributors on MLM Best Practices"
      ],
      action: "A MDP program was curated and delivered at Indian Institute of Management, Kolkata for Top 25 Distributors in India; a follow-up series was undertaken in Gurgaon HO.",
      result: "Distributors started appreciating that MLM is not only about adding to the chain but also selling goods and services which are promised to the chain.",
      icon: Award,
      color: "green"
    }
  ];

  return (
    <section id="case_studies" className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">Business Consulting</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Showcasing some case studies from the annals of our success stories in the past.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col justify-between rounded-[10px] border border-gray-200/80 bg-gray-50 p-6 transition-all duration-300 hover:border-blue-900/20 hover:bg-white hover:shadow-2xl sm:p-8"
              >
                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.case_id}</span>
                    <div className="bg-blue-50 text-blue-950 p-2.5 rounded-[10px] group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.client}
                  </h3>
                  <p className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-6">
                    {item.industry}
                  </p>

                  {/* Tasks List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Objectives / Tasks:</h4>
                    <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm">
                      {item.tasks.map((task, idx) => (
                        <li key={idx} className="leading-relaxed">{task}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Our Action:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.action}</p>
                  </div>

                  {/* Result */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Result:</h4>
                    <p className="text-green-800 bg-green-50/50 p-3 rounded-[10px] border border-green-100 text-sm leading-relaxed">
                      {item.result}
                    </p>
                  </div>

                  {item.cities && (
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Locations:</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.cities}</p>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
