/// <reference types="vite/client" />
import imgImage234 from "../assets/images/sanjay-singh.jpg";

export default function Hero() {
  return (
    <section className="relative mt-16 bg-gray-900">
      <div className="grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Left Side - Dark Background with Content */}
        <div className="flex flex-col justify-center bg-gray-900 px-6 py-12 text-white sm:px-8 md:px-12 md:py-16 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <p className="text-yellow-500 text-sm font-medium mb-4 tracking-wide">
              STANDARD OF SALES
            </p>

            <h1 className="mb-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              The <span className="text-yellow-500">Religion</span>
              <br />
              of Sales!
            </h1>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Strategic Concepts helps companies build sales capability,
              diagnose performance gaps, and create practical growth systems
              across direct sales, channel, retail, key accounts, exports, and
              e-commerce.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#sales_audit"
                className="block rounded-[10px] bg-yellow-500 px-6 py-3 text-center font-medium text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-lg sm:px-8"
              >
                Check Your Sales Function
              </a>
              <a
                href="#solutions_services"
                className="block rounded-[10px] border border-white px-6 py-3 text-center text-white transition-all hover:bg-white hover:text-gray-900 sm:px-8"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Overlay Quote */}
        <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-0">
          <img
            src={imgImage234}
            alt="Speaker presenting"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute bottom-4 left-4 right-4 max-w-sm rounded-[10px] bg-white/95 p-4 shadow-xl backdrop-blur-sm sm:bottom-8 sm:left-auto sm:right-8 sm:p-6">
            <p className="text-gray-800 italic mb-2">
              "Being in the art of selling is staying in the chain, you better
              not be the weakest link"
            </p>
            <p className="text-sm text-gray-600">- Sanjay Singh</p>
          </div>
        </div>
      </div>
    </section>
  );
}
