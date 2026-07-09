/// <reference types="vite/client" />
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import logoImg from "../assets/images/logo.png";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll keep you posted.");
    setNewsletterEmail("");
  };

  const socialLinks = [
    { platform: "Facebook", url: "https://www.facebook.com/Sanjay4sales/", icon: Facebook },
    { platform: "Instagram", url: "https://www.instagram.com/sanjay4sales/", icon: Instagram },
    { platform: "YouTube", url: "https://www.youtube.com/c/Consult4Sales", icon: Youtube },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/sanjay4sales/", icon: Linkedin },
  ];

  const categories = [
    { label: "Services", url: "/#solutions_services" },
    { label: "Case Studies", url: "/#case_studies" },
    { label: "Online Support", url: "/#sales_mitra_helpline" },
    { label: "Sales Audit", url: "/#sales_audit" },
    { label: "About Our Company", url: "/top-sales-trainer" },
  ];

  const downloadLinks = [
    { label: "Sales Audit Downloads", url: "/downloads" },
    { label: "Courses", url: "/courses" },
    { label: "Blogs", url: "/blogs" },
    { label: "Packages", url: "/#pricing" },
  ];

  return (
    <footer className="relative overflow-hidden bg-brand-navy-950 px-4 py-16 text-white/70 sm:px-6 lg:py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="space-y-4 md:col-span-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 w-fit">
              <img
                alt="Strategic Concepts Logo"
                className="h-12 w-auto object-contain"
                src={logoImg}
              />
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Strategic Concepts (India) Pvt. Ltd. provides 360-degree
              solutions for sales, customer service, training, consulting,
              sales audit, and performance enablement.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    className="rounded-xl bg-white/10 p-2.5 text-white/70 transition-all hover:bg-brand-gold hover:text-brand-navy-950"
                    href={social.url}
                    key={social.platform}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={social.platform}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
            <a
              className="inline-block rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-brand-navy-950 transition-all hover:bg-brand-gold-light hover:shadow-md"
              href="https://theschoolofsales.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The School Of Sales
            </a>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <a
                    className="text-white/50 transition-colors hover:text-brand-gold"
                    href={cat.url}
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Downloads & Info
            </h4>
            <ul className="space-y-3 text-sm">
              {downloadLinks.map((link) => (
                <li key={link.label}>
                  <a className="text-white/50 transition-colors hover:text-brand-gold" href={link.url}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Contact Details
            </h4>
            <ul className="space-y-3 text-sm leading-relaxed text-white/50">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 flex-shrink-0 text-brand-gold" />
                <span>
                  Nagpur Office: 1st Floor, Gokul Building, W.H.C. Road,
                  Dharampeth, Nagpur - 440010
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 flex-shrink-0 text-brand-gold" />
                <a className="transition-colors hover:text-white" href="tel:+919970506000">
                  +91-9970506000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 flex-shrink-0 text-brand-gold" />
                <a className="transition-colors hover:text-white" href="mailto:sanjay@consult4sales.com">
                  sanjay@consult4sales.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-white/50">
              Subscribe for sales growth tips and updates.
            </p>
            <form className="space-y-2.5" onSubmit={handleNewsletterSubmit}>
              <input
                aria-label="Email address"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                required
                type="email"
                value={newsletterEmail}
              />
              <button
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-4 py-2.5 text-sm font-bold text-brand-navy-950 transition-all hover:bg-brand-gold-light"
                type="submit"
              >
                <span>Subscribe</span>
                <Send className="size-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>Copyright 2026 Strategic Concepts (India) Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 hidden h-[12vw] select-none items-end justify-center overflow-hidden sm:flex">
        <span className="translate-y-[20%] whitespace-nowrap text-[10vw] font-black uppercase leading-none tracking-tighter text-white/[0.04]">
          Strategic Concepts
        </span>
      </div>
    </footer>
  );
}
