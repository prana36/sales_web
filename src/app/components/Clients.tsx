/// <reference types="vite/client" />
import airtelLogo from "../assets/images/clients/airtel.jpg";
import bajajSteelLogo from "../assets/images/clients/bajaj-steel-indsutries.png";
import bajajSuperpackLogo from "../assets/images/clients/bajaj-superpack.jpg";
import cadenceLogo from "../assets/images/clients/cadence-academy.jpg";
import harrierLogo from "../assets/images/clients/harrier.png";
import hindustanLogo from "../assets/images/clients/hindustan.png";

import leftIllustration from "../assets/images/client_illustration 2.png";
import rightIllustration from "../assets/images/client_illustration.png";

export default function Clients() {
  const clientLogos = [
    { name: "Airtel", src: airtelLogo },
    { name: "Bajaj Steel", src: bajajSteelLogo },
    { name: "Bajaj Superpack", src: bajajSuperpackLogo },
    { name: "Cadence Academy", src: cadenceLogo },
    { name: "Harrier", src: harrierLogo },
    { name: "Hindustan Unilever", src: hindustanLogo },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-900 uppercase tracking-widest mb-2">Our Clients</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            World-class capability building
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We have transformed sales organizations and built capability across various industries in India.
          </p>
        </div>

        {/* Content Container with Laurels */}
        <div className="flex items-center justify-center gap-8 xl:gap-16">
          
          {/* Left Laurel Wreath Illustration */}
          <div className="hidden flex-shrink-0 lg:block">
            <img 
              src={leftIllustration} 
              alt="Laurel Left" 
              className="h-28 w-auto object-contain pointer-events-none select-none" 
            />
          </div>

          {/* Grid of Logos */}
          <div className="grid max-w-2xl flex-1 grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 py-4 sm:grid-cols-3 sm:gap-x-10 lg:gap-x-16">
            {clientLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex h-20 w-32 items-center justify-center transition-all duration-300 sm:w-36 md:w-44"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-16 max-w-full object-contain transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Right Laurel Wreath Illustration */}
          <div className="hidden flex-shrink-0 lg:block">
            <img 
              src={rightIllustration} 
              alt="Laurel Right" 
              className="h-28 w-auto object-contain pointer-events-none select-none" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}

