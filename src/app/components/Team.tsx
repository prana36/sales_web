/// <reference types="vite/client" />
import { Linkedin } from "lucide-react";

import sanjayImg from "../assets/images/team/Sanjay-Singh.png";
import sanskritaImg from "../assets/images/team/Sanskrita-Singh.png";
import lajooImg from "../assets/images/team/Lajoo-Charles.png";
import milliImg from "../assets/images/team/Milli-Juneja.png";

export default function Team() {
  const capabilities = [
    { 
      label: "Corporate Sales Training", 
      percentage: 92, 
      desc: "Customized sales modules for enterprise teams"
    },
    { 
      label: "SME Business Performance Coaching", 
      percentage: 85, 
      desc: "Actionable coaching to scale small & medium enterprises"
    },
    { 
      label: "Customer Relationship Management", 
      percentage: 75, 
      desc: "Strategic tools to maximize client retention and CLTV"
    },
    { 
      label: "Business Strategy Realignment", 
      percentage: 91, 
      desc: "Restructuring business models for rapid sales growth"
    }
  ];

  const members = [
    {
      name: "Sanjay Singh",
      role: "Sales Coach",
      url: "https://www.linkedin.com/in/sanjay4sales/",
      isLinkedin: true,
      image: sanjayImg
    },
    {
      name: "Sanskrita Singh",
      role: "Co-Founder / Consultant",
      url: "",
      isLinkedin: false,
      image: sanskritaImg
    },
    {
      name: "Lajoo Charles",
      role: "Senior Consultant",
      url: "https://www.linkedin.com/in/lajoo-charles/",
      isLinkedin: true,
      image: lajooImg
    },
    {
      name: "Milli Juneja",
      role: "Consultant / Lead",
      url: "https://www.linkedin.com/in/milijuneja/",
      isLinkedin: true,
      image: milliImg
    }
  ];

  return (
    <section id="team" className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24">
      {/* Decorative background grid elements */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title / Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-900 tracking-widest uppercase mb-3 bg-blue-50 px-3.5 py-1.5 rounded-[10px] inline-block">
            We Are Team Of Sales Professionals
          </span>
          <h2 className="mb-4 mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Core Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our core team specializes in various aspects of Sales Management to enable us to offer subject matter expertise to our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-gray-150 p-4 rounded-[10px] hover:shadow-[0_20px_50px_rgba(30,58,138,0.06)] hover:border-blue-900/10 transition-all duration-300 flex flex-col"
            >
              {/* Profile Image container */}
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-gray-50 mb-5">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                />
                
                {/* LinkedIn Overlay Link */}
                {member.url && (
                  <a 
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-[10px] text-blue-900 shadow-md hover:bg-blue-900 hover:text-white transition-all duration-300 z-10 hover:scale-110"
                    title={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin className="size-4" />
                  </a>
                )}
              </div>
              
              {/* Member Details */}
              <div className="px-1 pb-2">
                <h4 className="font-bold text-xl text-gray-900 group-hover:text-blue-900 transition-colors">
                  {member.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Section - Refactored to be modern and editorial (Non-AI Generated Look) */}
        <div className="border-t border-gray-150 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Header Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">Our Capabilities</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Proven methodologies and execution metrics across critical sales and coaching operations.
              </p>
            </div>
            
            {/* Right Metrics Panel */}
            <div className="lg:col-span-8 divide-y divide-gray-100 border-y border-gray-100">
              {capabilities.map((cap, index) => (
                <div 
                  key={index} 
                  className="py-8 first:pt-4 last:pb-4 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group"
                >
                  {/* High contrast big percentage typography */}
                  <div className="flex-shrink-0 text-4xl font-black tracking-tighter text-blue-950 transition-colors duration-300 group-hover:text-yellow-500 sm:w-28 sm:text-5xl md:text-6xl">
                    {cap.percentage}%
                  </div>
                  
                  {/* Details Block */}
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1.5 group-hover:text-blue-900 transition-colors duration-300">
                      {cap.label}
                    </h4>
                    <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
