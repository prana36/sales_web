import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoImg from "../assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", url: "/", children: [] },
    {
      label: "About Us",
      url: "/top-sales-trainer",
      children: [
        { label: "Training Program Designer", url: "/top-sales-trainer" },
        { label: "Core Team", url: "/core-team" },
        { label: "Clients Appreciate Us", url: "/#testimonials" },
      ],
    },
    {
      label: "Services",
      url: "/#solutions_services",
      children: [
       
        { label: "Sales Training", url: "/#welcome_temple_of_sales" },
        { label: "Growth Consulting", url: "/#growth_consulting_agency" },
        { label: "Sales Mitra Helpline", url: "/#sales_mitra_helpline" },
        { label: "Sales Audit", url: "/#sales_audit" },
      ],
    },
    { label: "Case Studies", url: "/#case_studies", children: [] },
    // { label: "How We Work", url: "/#how_we_work", children: [] },
    { label: "Courses", url: "/courses", children: [] },
    { label: "Blogs", url: "/blogs", children: [] },
    {
      label: "Downloads",
      url: "/downloads",
      children: [
        { label: "Sales Checklists", url: "/downloads?category=Checklist" },
        { label: "Sales Workbooks", url: "/downloads?category=Workbook" },
        { label: "Brochure", url: "/downloads?category=Brochure" },
        { label: "Testimonials", url: "/downloads?category=Testimonials" },
        { label: "Recommendations", url: "/downloads?category=Recommendations" },
      ],
    },
    { label: "Pricing", url: "/pricing", children: [] },
    { label: "Careers", url: "/career", children: [] },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-navy/10 bg-brand-cream/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-brand-cream/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-8 xl:gap-12">
          <a className="flex items-center gap-3" href="/">
            <img
              alt="Strategic Concepts Logo"
              className="h-12 w-auto object-contain sm:h-14"
              src={logoImg}
            />
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navItems.map((item) => (
              <div className="group relative" key={item.label}>
                <a
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-navy/70 transition-colors hover:text-brand-navy"
                  href={item.url}
                >
                  {item.label}
                  {item.children.length > 0 ? (
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
                  ) : null}
                </a>

                {item.children.length > 0 ? (
                  <div className="invisible absolute left-0 top-full w-56 translate-y-3 rounded-xl border border-brand-navy/10 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <a
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-navy/70 transition-colors hover:bg-brand-gold/10 hover:text-brand-navy"
                        href={child.url}
                        key={child.label}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <a
            className="hidden rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-navy-dark hover:shadow-lg hover:shadow-brand-navy/20 lg:block"
            href="/#contact"
          >
            Contact Us
          </a>

          <button
            aria-label="Toggle menu"
            className="rounded-full p-2 text-brand-navy transition-colors hover:bg-brand-navy/5 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-brand-navy/10 bg-brand-cream px-4 py-4 sm:px-6 lg:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy/80 hover:bg-brand-gold/10 hover:text-brand-navy"
                href={item.url}
                key={item.label}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-3 block rounded-full bg-brand-navy px-3 py-2.5 text-center text-sm font-semibold text-white"
              href="/#contact"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
