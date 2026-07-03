import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "../assets/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", url: "/", children: [] },
    {
      label: "About Us",
      url: "/#top_sales_trainer",
      children: [
        { label: "Top Sales Trainer", url: "/#top_sales_trainer" },
        { label: "Core Team", url: "/#team" },
        { label: "Clients Appreciate Us", url: "/#testimonials" },
      ],
    },
    {
      label: "Services",
      url: "/#solutions_services",
      children: [
        { label: "SME Sales Consulting", url: "/sales-consultant-india" },
        { label: "Sales Training", url: "/#welcome_temple_of_sales" },
        { label: "Growth Consulting", url: "/#growth_consulting_agency" },
        { label: "Sales Mitra Helpline", url: "/#sales_mitra_helpline" },
        { label: "Sales Audit", url: "/#sales_audit" },
      ],
    },
    { label: "Case Studies", url: "/#case_studies", children: [] },
    { label: "How We Work", url: "/#how_we_work", children: [] },
    { label: "Courses", url: "/courses", children: [] },
    { label: "Blogs", url: "/blogs", children: [] },
    { label: "Downloads", url: "/downloads", children: [] },
    { label: "Careers", url: "/#careers", children: [] },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-8 xl:gap-12">
          <a className="flex items-center gap-3" href="/">
            <img
              alt="Strategic Concepts Logo"
              className="h-12 w-auto object-contain sm:h-16"
              src={logoImg}
            />
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navItems.map((item) => (
              <div className="group relative" key={item.label}>
                <a
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-blue-900"
                  href={item.url}
                >
                  {item.label}
                  {item.children.length > 0 ? (
                    <ChevronDown className="size-3.5" />
                  ) : null}
                </a>

                {item.children.length > 0 ? (
                  <div className="invisible absolute left-0 top-full w-56 translate-y-3 rounded-[10px] border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <a
                        className="block rounded-[10px] px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-yellow-50 hover:text-blue-900"
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
            className="hidden rounded-[10px] bg-yellow-500 px-5 py-2.5 text-sm font-medium text-gray-900 transition-all hover:bg-yellow-400 hover:shadow-md lg:block"
            href="/#contact"
          >
            Contact Us
          </a>

          <button
            aria-label="Toggle menu"
            className="rounded-[10px] p-2 transition-colors hover:bg-gray-100 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? (
              <X className="size-6 text-gray-700" />
            ) : (
              <Menu className="size-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-gray-100 bg-white px-4 py-4 sm:px-6 lg:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                className="block rounded-[10px] px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-yellow-50 hover:text-blue-900"
                href={item.url}
                key={item.label}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-3 block rounded-[10px] bg-yellow-500 px-3 py-2 text-center text-sm font-semibold text-gray-900"
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
