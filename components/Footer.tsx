import Link from "next/link";

const services = [
  "Commercial Construction",
  "Residential Construction",
  "Renovation & Remodeling",
  "Project Management",
  "Sustainable Building",
  "Interior Construction",
];

const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-[#fafafa]">
      {/* Top rule */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 py-20 border-b border-[#fafafa]/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display text-5xl tracking-widest mb-6 leading-none">
              IRONSTONE
            </div>
            <p className="label-eyebrow text-[#71717a] mb-8 leading-loose">
              Building Tomorrow, Today.
              <br />
              Austin, Texas · Est. 2008
            </p>
            <p className="font-body text-sm text-[#71717a] leading-relaxed max-w-sm">
              Full-service construction across Central Texas — commercial, residential,
              renovation, and interior projects delivered with precision and integrity.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="label-eyebrow text-[#a1a1aa] mb-6">Services</p>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-body text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <p className="label-eyebrow text-[#a1a1aa] mb-6">Company</p>
            <ul className="flex flex-col gap-3 mb-10">
              {nav.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="label-eyebrow text-[#a1a1aa] mb-4">Contact</p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+15124007800"
                className="font-body text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
              >
                +1 (512) 400-7800
              </a>
              <a
                href="mailto:info@ironstonebuild.com"
                className="font-body text-sm text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
              >
                info@ironstonebuild.com
              </a>
              <p className="font-body text-sm text-[#71717a]">
                1847 Congress Ave, Austin TX
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
          <p className="label-eyebrow text-[#52525b]">
            © {new Date().getFullYear()} Ironstone Build Co. All rights reserved.
          </p>
          <p className="label-eyebrow text-[#52525b]">
            Licensed &amp; Insured · Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
