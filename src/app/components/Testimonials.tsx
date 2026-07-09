/// <reference types="vite/client" />
import { Quote, Star } from "lucide-react";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";

export default function Testimonials() {
  const list = [
    {
      title: "Best approach",
      quote: "You have achieved in enabling the members to understand the right approach on the subject which will indeed help them in taking right decisions.",
      name: "Ranjit Dani",
      designation: "President, Vidarbha Management Association"
    },
    {
      title: "Nicely strategized",
      quote: "Efficient strategizing of business and development over a period of time.",
      name: "Dr. Girish Chhabrani",
      designation: "Chhabrani Dental Clinic"
    },
    {
      title: "Great Service",
      quote: "We wanted quality, we got quality. We wanted a solution, we got a solution. We wanted great service, we got great service.",
      name: "Prof. Buleshwar Mate",
      designation: "EnVisionAr Design Atelier"
    },
    {
      title: "Exceptional Capability Building",
      quote: "Dear Sanjay, We are very happy to communicate to you the good feedback received by the batch of Sr. Sales Executives who were engaged by you for a Train the Trainer (TTT) session in April 2023. You captured their mood of transition from field Sales Executives to hands-on Capability Development Trainers very well and addressed their apprehensions and challenges with actionable input. We look forward to a mutually fruitful relationship.",
      name: "Tanvi Shah",
      designation: "CD HR Head - India (Hindustan Unilever Limited)"
    },
    {
      title: "High Ratings",
      quote: "The training methodology coupled with presentation and communication skills was rated high for all the training programs.",
      name: "S Dhinakaran",
      designation: "Sr Manager, HR, Tata Teleservices (Maharashtra) Ltd"
    },
    {
      title: "Helpful Advisors",
      quote: "All participants appreciated the practical and live inputs given by you in the course of the session towards effective sales management in the contemporary environment.",
      name: "Prof Ramendra Singh",
      designation: "Associate Professor (Marketing), Indian Institute of Management, Kolkata"
    },
    {
      title: "Inspiring View",
      quote: "Your unique approach towards a relatively complex topic was both enlightening and inspiring.",
      name: "Rupesh Kumar",
      designation: "Managing Director, Cadence Academy of Design Pvt Ltd"
    }
  ];

  return (
    <section id="testimonials" className="border-y border-gray-150 bg-gray-50 py-14 md:py-20 lg:py-28 overflow-hidden">
      <style>{`
        @keyframes testimonials-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-track {
          display: flex;
          gap: 2rem;
          width: fit-content;
          animation: testimonials-scroll 60s linear infinite;
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <SectionKicker className="mb-3">With Respect To Each Client</SectionKicker>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clients Appreciate Us
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded"></div>
        </Reveal>
      </div>

      {/* Testimonials horizontal marquee */}
      <div className="overflow-hidden">
        <div className="testimonials-track">
          {[...list, ...list].map((item, index) => (
            <div
              key={index}
              className="group relative flex w-[320px] sm:w-[380px] shrink-0 flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <Quote className="size-8 text-brand-gold/20 absolute top-6 right-6 group-hover:text-brand-gold/40 transition-colors" />

              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <Star
                    className="size-3.5 fill-brand-gold text-brand-gold"
                    key={starIdx}
                  />
                ))}
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-3">
                "{item.title}"
              </h3>

              <p className="text-gray-655 text-sm leading-relaxed mb-6 italic line-clamp-6">
                "{item.quote}"
              </p>

              <div className="pt-4 border-t border-gray-100 mt-auto">
                <h4 className="font-bold text-gray-900 text-sm">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
