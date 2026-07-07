/// <reference types="vite/client" />
import { Linkedin } from "lucide-react";

import sanjayImg from "../assets/images/team/Sanjay-Singh.png";
import sanskritaImg from "../assets/images/team/Sanskrita-Singh.png";
import lajooImg from "../assets/images/team/Lajoo-Charles.png";
import milliImg from "../assets/images/team/Milli-Juneja.png";

const members = [
  {
    name: "Sanjay Singh",
    role: "Sales Coach",
    url: "https://www.linkedin.com/in/sanjay4sales/",
    isLinkedin: true,
    image: sanjayImg,
  },
  {
    name: "Sanskrita Singh",
    role: "Co-Founder / Consultant",
    url: "",
    isLinkedin: false,
    image: sanskritaImg,
  },
  {
    name: "Lajoo Charles",
    role: "Senior Consultant",
    url: "https://www.linkedin.com/in/lajoo-charles/",
    isLinkedin: true,
    image: lajooImg,
  },
  {
    name: "Milli Juneja",
    role: "Consultant / Lead",
    url: "https://www.linkedin.com/in/milijuneja/",
    isLinkedin: true,
    image: milliImg,
  },
];

export default function CoreTeamPage() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24 pt-28">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-900 tracking-widest uppercase mb-3 bg-blue-50 px-3.5 py-1.5 rounded-[10px] inline-block">
            We Are Team Of Sales Professionals
          </span>
          <h2 className="mb-4 mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Core Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our core team specializes in various aspects of Sales Management to
            enable us to offer subject matter expertise to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-150 p-4 rounded-[10px] hover:shadow-[0_20px_50px_rgba(30,58,138,0.06)] hover:border-blue-900/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden bg-gray-50 mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
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

              <div className="px-1 pb-2">
                <h4 className="font-bold text-xl text-gray-900 group-hover:text-blue-900 transition-colors">
                  {member.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
