import { Headphones } from "lucide-react";

export default function SalesHelpline() {
  return (
    <section id="sales_mitra_helpline" className="px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[10px] bg-gray-900 p-6 text-white sm:p-8 md:p-12">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Headphones className="size-8 text-yellow-500" />
              <h2 className="text-3xl leading-tight md:text-4xl">Sales Mitra Helpline</h2>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Daily, diligent, and interactive support for sales teams and
              field staff. Sales Mitra helps companies keep salespeople
              engaged, guided, and accountable between training interventions.
            </p>
            
            <a href="#contact" className="inline-flex bg-yellow-500 text-gray-900 px-8 py-3 rounded-[10px] hover:bg-yellow-400 transition-all hover:shadow-lg hover:-translate-y-0.5 font-medium">
              Know More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
