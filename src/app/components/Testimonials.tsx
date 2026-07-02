/// <reference types="vite/client" />
import { Quote } from "lucide-react";

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
    <section id="testimonials" className="border-y border-gray-150 bg-gray-50 px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-900 tracking-wider uppercase mb-2">With Respect To Each Client</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Clients Appreciate Us
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto rounded"></div>
        </div>

        {/* Testimonials Grid (Masonry style look) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 [column-fill:_balance] max-w-6xl mx-auto">
          {list.map((item, index) => (
            <div 
              key={index} 
              className="group relative flex break-inside-avoid flex-col rounded-[10px] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-8"
            >
              <Quote className="size-8 text-yellow-500/20 absolute top-6 right-6 group-hover:text-yellow-500/40 transition-colors" />
              
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                "{item.title}"
              </h3>
              
              <p className="text-gray-655 text-sm leading-relaxed mb-6 italic">
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
