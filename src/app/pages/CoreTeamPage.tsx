/// <reference types="vite/client" />
import { Linkedin } from "lucide-react";

import sanjayImg from "../assets/images/team/Sanjay-Singh.png";
import milliImg from "../assets/images/team/Milli-Juneja.png";
import Reveal from "../components/shared/Reveal";
import SectionKicker from "../components/shared/SectionKicker";

const members = [
  {
    name: "Sanjay Singh",
    role: "Sales Coach",
    url: "https://www.linkedin.com/in/sanjay4sales/",
    isLinkedin: true,
    image: sanjayImg,
  },
  {
    name: "Dhananjay Singh",
    role: "Consultant",
    url: "",
    isLinkedin: false,
    image: null,
  },
  {
    name: "Mili Juneja",
    role: "Consultant / Lead",
    url: "https://www.linkedin.com/in/milijuneja/",
    isLinkedin: true,
    image: milliImg,
  },
  {
    name: "Alok Dubey",
    role: "Consultant",
    url: "",
    isLinkedin: false,
    image: null,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function CoreTeamPage() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 pt-32 sm:px-6 md:py-24 md:pt-36">
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-navy/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <SectionKicker className="mb-3">We Are Team Of Sales Professionals</SectionKicker>
          <h2 className="mb-4 mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Core Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Our core team specializes in various aspects of Sales Management to
            enable us to offer subject matter expertise to our clients.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {members.map((member, index) => (
            <Reveal delay={index * 0.08} key={member.name}>
              <div className="group relative bg-white border border-gray-150 p-4 rounded-3xl hover:shadow-[0_20px_50px_rgba(27,97,156,0.1)] hover:border-brand-navy/15 transition-all duration-300 flex flex-col">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-50 mb-5">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-brand-navy/[0.06] text-4xl font-bold text-brand-navy/40">
                      {initials(member.name)}
                    </div>
                  )}
                  {member.url && (
                    <a
                      href={member.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-full text-brand-navy shadow-md hover:bg-brand-navy hover:text-white transition-all duration-300 z-10 hover:scale-110"
                      title={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin className="size-4" />
                    </a>
                  )}
                </div>

                <div className="px-1 pb-2">
                  <h4 className="font-bold text-xl text-gray-900 group-hover:text-brand-navy transition-colors">
                    {member.name}
                  </h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
