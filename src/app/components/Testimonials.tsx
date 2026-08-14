/// <reference types="vite/client" />
import { Building2, Quote, Star, Store } from "lucide-react";
import { useCallback, useRef, useState, type CSSProperties } from "react";
import Reveal from "./shared/Reveal";
import SectionKicker from "./shared/SectionKicker";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  designation: string;
};

const corporateList: Testimonial[] = [
  {
    title: "Best approach",
    quote: "You have achieved in enabling the members to understand the right approach on the subject which will indeed help them in taking right decisions.",
    name: "Ranjit Dani",
    designation: "President, Vidarbha Management Association"
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
  }
];

const smeList: Testimonial[] = [
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
    title: "Inspiring View",
    quote: "Your unique approach towards a relatively complex topic was both enlightening and inspiring.",
    name: "Rupesh Kumar",
    designation: "Managing Director, Cadence Academy of Design Pvt Ltd"
  }
];

type Accent = {
  badge: string;
  badgeIcon: string;
  cardTop: string;
  quote: string;
  stars: string;
  name: string;
  wallBg: string;
};

const corporateAccent: Accent = {
  badge: "border-brand-navy/30 bg-brand-navy/10",
  badgeIcon: "text-brand-navy",
  cardTop: "border-t-4 border-brand-navy",
  quote: "text-brand-navy/20 group-hover:text-brand-navy/40",
  stars: "fill-brand-navy text-brand-navy",
  name: "text-brand-navy",
  wallBg: "bg-brand-navy/5"
};

const smeAccent: Accent = {
  badge: "border-brand-gold/30 bg-brand-gold/10",
  badgeIcon: "text-brand-gold",
  cardTop: "border-t-4 border-brand-gold",
  quote: "text-brand-gold/20 group-hover:text-brand-gold/40",
  stars: "fill-brand-gold text-brand-gold",
  name: "text-brand-gold",
  wallBg: "bg-brand-gold/5"
};

function TestimonialCard({ item, accent }: { item: Testimonial; accent: Accent }) {
  return (
    <div className={`group relative flex w-[320px] sm:w-[380px] shrink-0 flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${accent.cardTop}`}>
      <Quote className={`size-8 absolute top-6 right-6 transition-colors ${accent.quote}`} />

      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, starIdx) => (
          <Star
            className={`size-3.5 ${accent.stars}`}
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
        <h4 className={`font-bold text-sm ${accent.name}`}>
          {item.name}
        </h4>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
          {item.designation}
        </p>
      </div>
    </div>
  );
}

function TestimonialWall({
  icon: Icon,
  label,
  subtitle,
  items,
  scrollDuration,
  accent
}: {
  icon: typeof Building2;
  label: string;
  subtitle: string;
  items: Testimonial[];
  scrollDuration: string;
  accent: Accent;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; time: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const trackStyle = { "--scroll-duration": scrollDuration } as CSSProperties;

  const getAnimation = useCallback(
    () => trackRef.current?.getAnimations()[0] ?? null,
    [],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const anim = getAnimation();
      if (!anim) return;
      anim.pause();
      dragRef.current = {
        x: e.clientX,
        time: typeof anim.currentTime === "number" ? anim.currentTime : 0,
      };
      setIsDragging(true);
      e.currentTarget.setPointerCapture?.(e.pointerId);
    },
    [getAnimation],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      const track = trackRef.current;
      const anim = getAnimation();
      if (!drag || !track || !anim) return;

      const duration = anim.effect?.getComputedTiming().duration ?? 0;
      const halfWidth = track.scrollWidth / 2;
      if (!duration || !halfWidth) return;

      const start = drag.time % duration;
      const dx = e.clientX - drag.x;
      const newTime = start - (dx / halfWidth) * duration;
      anim.currentTime = Math.max(0, Math.min(duration, newTime));
    },
    [getAnimation],
  );

  const endDrag = useCallback(() => {
    if (!dragRef.current) return;
    dragRef.current = null;
    setIsDragging(false);
    const anim = getAnimation();
    if (anim && anim.playState === "paused") anim.play();
  }, [getAnimation]);

  return (
    <div className={`rounded-3xl p-6 sm:p-8 ${accent.wallBg}`}>
      <Reveal className="mb-8">
        <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 ${accent.badge}`}>
          <Icon className={`size-4 ${accent.badgeIcon}`} />
          <h3 className="text-base md:text-lg font-bold text-gray-900">{label}</h3>
        </div>
        <p className="mt-3 text-sm text-gray-500">{subtitle}</p>
      </Reveal>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className={`testimonials-track ${isDragging ? "testimonials-dragging" : ""}`}
          style={trackStyle}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
        >
          {[...items, ...items].map((item, index) => (
            <TestimonialCard key={index} item={item} accent={accent} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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
          animation: testimonials-scroll var(--scroll-duration, 60s) linear infinite;
          cursor: grab;
          touch-action: pan-y;
          user-select: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .testimonials-track.testimonials-dragging {
          cursor: grabbing;
        }
        @media (hover: hover) {
          .testimonials-track:hover {
            animation-play-state: paused;
          }
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

      {/* Corporate & SME testimonial walls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
          <TestimonialWall
            icon={Building2}
            label="Corporate"
            subtitle="Enterprises, institutions & large organisations"
            items={corporateList}
            scrollDuration="70s"
            accent={corporateAccent}
          />
          <TestimonialWall
            icon={Store}
            label="SME"
            subtitle="Small & mid-sized businesses"
            items={smeList}
            scrollDuration="55s"
            accent={smeAccent}
          />
        </div>
      </div>
    </section>
  );
}
