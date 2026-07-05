/// <reference types="vite/client" />
import { ArrowRight, TrendingUp, Users } from "lucide-react";
import imgImage234 from "../assets/images/sanjay-singh.jpg";

export default function Hero() {
  return (
    <section className="relative mt-16 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">

          <div className="flex flex-col justify-center px-6 py-16 text-white sm:px-10 md:px-14 lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                Standard of Sales
              </p>

              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Best Sales Consultant in India
                <span className="mt-3 block bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  Guaranteed to Grow Your Revenue by 20%
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-[1.8] text-blue-100/80 md:text-lg">
                We do not just advise. We sign a guarantee: your top-line revenue
                grows by at least 20% in Year 1, or you get every rupee back.
                Strategic Concepts (India) has been engineering measurable sales
                growth for SMEs and corporates since 1998.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#sales_audit"
                  className="group inline-flex items-center justify-center gap-2 rounded-[10px] bg-yellow-500 px-7 py-3.5 text-sm font-bold text-gray-900 shadow-lg shadow-yellow-500/25 transition-all hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-xl hover:shadow-yellow-500/30"
                >
                  Check Your Sales Function
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#solutions_services"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>

              <div className="mt-10 flex items-center gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-yellow-400" />
                  <span className="text-xs text-blue-200">44+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-4 text-yellow-400" />
                  <span className="text-xs text-blue-200">38+ Cities Covered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-0">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-blue-900/20 to-transparent lg:bg-gradient-to-r lg:from-blue-900/40 lg:via-transparent lg:to-transparent" />
            <img
              src={imgImage234}
              alt="Sanjay Singh - Sales Consultant"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 max-w-sm rounded-[10px] border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:bottom-10 sm:left-auto sm:right-10 sm:p-6">
              <div className="mb-1 text-lg text-yellow-500">&#x275D;</div>
              <p className="text-sm leading-relaxed text-gray-800">
                Being in the art of selling is staying in the chain, you better
                not be the weakest link
              </p>
              <div className="mt-3 flex items-center gap-3 border-t border-gray-100 pt-3">
                <div className="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center text-xs font-bold text-white">
                  SS
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Sanjay Singh</p>
                  <p className="text-[10px] text-gray-500">Founder, Strategic Concepts</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
