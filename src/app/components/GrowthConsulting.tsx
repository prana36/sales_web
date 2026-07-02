/// <reference types="vite/client" />
import { CheckCircle2, PhoneCall } from "lucide-react";

export default function GrowthConsulting() {
  const bullets = [
    "Address Lacking Sales Ecosystems",
    "Create Winning Sales Teams",
    "Technology Enablement of Sales Teams",
    "Bespoke Sales Strategy Alignment",
    "Sales Process and Review Rhythm",
    "Customer Acquisition and Retention Planning",
  ];

  // Convert watch URL to embed URL
  const videoEmbedUrl = "https://www.youtube.com/embed/Uh0XxtYwf9k";

  return (
    <section id="growth_consulting_agency" className="border-y border-gray-150 bg-gray-50 px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and Bullets (Left) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest mb-2">
                Growth Consulting Agency
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                What We Do in our<br />
                <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  SME & MSME Advisory
                </span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              We work with SME and MSME businesses to improve performance by
              leveraging the sales opportunities already present in their
              business landscape. The work includes strategy, systems,
              capability building, team enablement, and review discipline.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 py-4">
              {bullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-sm md:text-base">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 items-center">
              <a 
                href="#contact" 
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-[10px] shadow hover:shadow-lg transition-all"
              >
                Contact Us
              </a>
              <a 
                href="tel:9970506000"
                className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
              >
                <PhoneCall className="size-5 text-yellow-500" />
                <span>+91 9970506000</span>
              </a>
            </div>
          </div>

          {/* YouTube Video Embed (Right) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-video w-full rounded-[10px] overflow-hidden shadow-2xl border border-gray-255 bg-black">
              <iframe 
                src={videoEmbedUrl} 
                title="Growth Consulting Agency" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
