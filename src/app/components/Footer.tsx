/// <reference types="vite/client" />
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import logoImg from "../assets/images/logo.png";

export default function Footer() {
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

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-slate-50/70 px-4 py-16 text-gray-800 sm:px-6">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 rounded-[10px] border border-gray-150 bg-white p-6 shadow-sm sm:p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="space-y-4 md:col-span-4">
              <div className="flex items-center gap-3">
                <img
                  alt="Strategic Concepts Logo"
                  className="h-16 w-auto object-contain"
                  src={logoImg}
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-500">
                Strategic Concepts (India) Pvt. Ltd. provides 360-degree
                solutions for sales, customer service, training, consulting,
                sales audit, and performance enablement.
              </p>
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      className="rounded-[10px] bg-gray-100 p-2.5 text-gray-600 transition-all hover:bg-yellow-500 hover:text-gray-900"
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
                className="inline-block rounded-[10px] bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-900 transition-all hover:bg-yellow-400 hover:shadow-md"
                href="https://theschoolofsales.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The School Of Sales
              </a>
            </div>

            <div className="md:col-span-2 md:col-start-6">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm">
                {categories.map((cat) => (
                  <li key={cat.label}>
                    <a
                      className="text-gray-500 transition-colors hover:text-blue-900"
                      href={cat.url}
                    >
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
                Downloads & Info
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a className="text-gray-500 transition-colors hover:text-blue-900" href="/downloads">
                    Sales Audit Downloads
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition-colors hover:text-blue-900" href="/courses">
                    Courses
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition-colors hover:text-blue-900" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition-colors hover:text-blue-900" href="/#pricing">
                    Packages
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
                Contact Details
              </h4>
              <ul className="space-y-3 text-sm leading-relaxed text-gray-500">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 flex-shrink-0 text-yellow-500" />
                  <span>
                    Nagpur Office: 1st Floor, Gokul Building, W.H.C. Road,
                    Dharampeth, Nagpur - 440010
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-4 flex-shrink-0 text-yellow-500" />
                  <a className="transition-colors hover:text-blue-900" href="tel:+919970506000">
                    +91-9970506000
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 flex-shrink-0 text-yellow-500" />
                  <a className="transition-colors hover:text-blue-900" href="mailto:sanjay@consult4sales.com">
                    sanjay@consult4sales.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-xs text-gray-400 md:flex-row">
            <p>Copyright 2026 Strategic Concepts (India) Pvt. Ltd. All Rights Reserved.</p>
            {/* <div className="flex gap-4">
              <a className="transition-colors hover:text-blue-900" href="/">
                Privacy Policy
              </a>
              <a className="transition-colors hover:text-blue-900" href="/">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 hidden h-[12vw] select-none items-end justify-center overflow-hidden sm:flex">
        <span className="translate-y-[20%] whitespace-nowrap text-[10vw] font-black uppercase leading-none tracking-tighter text-slate-200/50">
          Strategic Concepts
        </span>
      </div>
    </footer>
  );
}
