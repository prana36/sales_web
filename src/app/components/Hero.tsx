/// <reference types="vite/client" />
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import imgImage234 from "../assets/images/sanjay-singh.jpg";

export default function Hero() {
  return (
    <section className="bg-brand-cream px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-32 lg:px-8 lg:pt-36">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
        <motion.div
          className="order-2 flex flex-col justify-center rounded-[2rem] bg-white p-6 sm:p-12 lg:order-1 lg:p-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="max-w-lg text-4xl font-semibold leading-[1.15] tracking-tight text-brand-navy sm:text-5xl">
            Guaranteed to grow your revenue by 20%
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-brand-navy/55">
            We do not just advise — we sign a guarantee. Strategic Concepts
            has been engineering measurable sales growth for SMEs and
            corporates across India since 1998.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#sales_audit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-semibold text-brand-navy transition-all hover:-translate-y-0.5 hover:bg-brand-gold-light hover:shadow-lg hover:shadow-brand-gold/30"
            >
              Check your sales function
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#solutions_services"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-brand-navy underline decoration-brand-navy/30 underline-offset-4 transition-colors hover:decoration-brand-navy"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-10 border-t border-brand-navy/10 pt-7">
            <div>
              <p className="text-2xl font-semibold text-brand-navy">44+</p>
              <p className="text-xs text-brand-navy/50">Years experience</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-navy">38+</p>
              <p className="text-xs text-brand-navy/50">Cities covered</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-brand-navy">20%</p>
              <p className="text-xs text-brand-navy/50">Revenue guarantee</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 relative min-h-[260px] overflow-hidden rounded-[2rem] sm:min-h-[380px] lg:order-2 lg:min-h-0"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <img
            src={imgImage234}
            alt="Sanjay Singh - Sales Consultant"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/40 via-transparent to-transparent" />

          <motion.div
            className="absolute left-5 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-brand-gold text-brand-navy">
              <ShieldCheck className="size-3" />
            </span>
            <span className="text-xs font-medium text-brand-navy">
              Revenue guarantee
            </span>
          </motion.div>

          <motion.div
            className="absolute right-5 top-20 flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 shadow-lg sm:top-24"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-white text-brand-navy">
              <TrendingUp className="size-3" />
            </span>
            <span className="text-xs font-medium text-white">
              Since 1998
            </span>
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-5 right-5 rounded-2xl bg-white/95 p-3 shadow-xl backdrop-blur-md sm:bottom-5 sm:right-auto sm:w-56 sm:p-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          >
            <p className="text-[11px] font-medium text-brand-navy/50">
              Sales growth
            </p>
            <p className="mt-1 text-2xl font-semibold text-brand-gold sm:text-3xl">
              +20%
            </p>
            <div className="mt-2 flex items-end gap-1 sm:mt-3">
              {[40, 55, 45, 65, 58, 78, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-brand-navy/10"
                  style={{ height: `${h * 0.32}px` }}
                >
                  <div
                    className="h-full w-full rounded-sm bg-brand-gold"
                    style={{ opacity: 0.4 + i * 0.09 }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
