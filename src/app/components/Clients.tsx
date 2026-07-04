import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import cadenceLogo from "../assets/images/clients/7.jpg";
import airtelLogo from "../assets/images/clients/2.jpg";
import bajajSuperpackLogo from "../assets/images/clients/3.jpg";
import iciciLogo from "../assets/images/clients/4.jpg";
import tataLogo from "../assets/images/clients/5.jpg";
import bsnlLogo from "../assets/images/clients/6.jpg";
import ltLogo from "../assets/images/clients/7.png";
import lgLogo from "../assets/images/clients/8.png";
import ultratechLogo from "../assets/images/clients/9.png";
import sbmLogo from "../assets/images/clients/10.png";
import amwayLogo from "../assets/images/clients/11.png";
import godrejLogo from "../assets/images/clients/12.png";
import karanKothariLogo from "../assets/images/clients/13.png";
import harrierLogo from "../assets/images/clients/14.png";
import bajajSteelLogo from "../assets/images/clients/15.png";
import hindustanLogo from "../assets/images/clients/16.png";
import leftIllustration from "../assets/images/client_illustration 2.png";
import rightIllustration from "../assets/images/client_illustration.png";

const clientLogos = [
  { name: "Cadence Academy", src: cadenceLogo },
  { name: "Airtel", src: airtelLogo },
  { name: "Bajaj Superpack", src: bajajSuperpackLogo },
  { name: "ICICI", src: iciciLogo },
  { name: "Tata Services", src: tataLogo },
  { name: "BSNL", src: bsnlLogo },
  { name: "L&T", src: ltLogo },
  { name: "LG", src: lgLogo },
  { name: "Ultratech", src: ultratechLogo },
  { name: "State Bank of Mauritius", src: sbmLogo },
  { name: "Amway", src: amwayLogo },
  { name: "Godrej", src: godrejLogo },
  { name: "Karan Kothari", src: karanKothariLogo },
  { name: "Harrier", src: harrierLogo },
  { name: "Bajaj Steel", src: bajajSteelLogo },
  { name: "Hindustan Unilever", src: hindustanLogo },
];

const slides = [
  clientLogos.slice(0, 4),
  clientLogos.slice(4, 8),
  clientLogos.slice(8, 12),
  clientLogos.slice(12, 16),
];

export default function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest mb-2">Our Clients</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            World-class capability building
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We have transformed sales organizations and built capability across various industries in India.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 xl:gap-16">
          <div className="hidden flex-shrink-0 lg:block">
            <img src={leftIllustration} alt="" className="h-28 w-auto object-contain pointer-events-none select-none" />
          </div>

          <div className="flex-1 max-w-4xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((group, slideIdx) => (
                  <div key={slideIdx} className="relative min-w-0 flex-[0_0_100%] px-1 py-4">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {group.map((logo, i) => (
                        <div
                          key={i}
                          className="group flex h-24 items-center justify-center rounded-xl border-2 border-blue-100 bg-gradient-to-br from-white to-blue-50 p-4 shadow-md transition-all duration-500 hover:scale-110 hover:border-blue-300 hover:shadow-xl sm:h-28 my-3"
                        >
                          <img
                            src={logo.src}
                            alt={logo.name}
                            className="max-h-14 max-w-full object-contain transition-all duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "w-6 bg-blue-900" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden flex-shrink-0 lg:block">
            <img src={rightIllustration} alt="" className="h-28 w-auto object-contain pointer-events-none select-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

