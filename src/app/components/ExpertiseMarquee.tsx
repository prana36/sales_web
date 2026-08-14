import { useCallback, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const expertise = [
  "Direct Sales",
  "Industrial Sales",
  "Institutional",
  "Exports",
  "Franchisee",
  "Channel of Distribution",
  "Modern Retail Trade",
  "Key Account Management",
  "E Commerce",
  "Govt Tenders",
  "Multi Level Marketing",
];

export default function ExpertiseMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; time: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

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
    <section className="border-y border-brand-navy/10 bg-brand-navy/[0.03] py-4 overflow-hidden">
      <style>{`
        @keyframes expertise-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .expertise-track {
          display: flex;
          gap: 2.5rem;
          width: fit-content;
          animation: expertise-scroll 20s linear infinite;
          cursor: grab;
          touch-action: pan-y;
          user-select: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        .expertise-track.expertise-dragging {
          cursor: grabbing;
        }
        @media (hover: hover) {
          .expertise-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
      <div className="flex flex-col gap-2 pl-4 pr-4 sm:pl-6 sm:pr-6 md:flex-row md:items-center md:gap-6 md:pl-12 md:pr-0">
        <span className="shrink-0 text-xs font-bold text-brand-navy uppercase tracking-wider whitespace-nowrap sm:text-sm">
          Areas of Core Expertise
        </span>
        <div className="overflow-hidden md:flex-1">
          <div
            ref={trackRef}
            className={`expertise-track ${isDragging ? "expertise-dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
          >
            {[...expertise, ...expertise].map((item, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap"
              >
                <CheckCircle2 className="size-4 shrink-0 text-brand-gold" />
                <span className="font-medium text-gray-800 text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
