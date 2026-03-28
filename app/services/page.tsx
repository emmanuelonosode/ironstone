import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const BASE_URL = "https://ironstone.bookone.dev";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Commercial construction, custom residential builds, renovation & remodeling, project management, sustainable building, and interior construction — all from Ironstone Build Co. in Austin, Texas.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Construction Services — Ironstone Build Co.",
    description:
      "Six disciplines. One standard. Commercial, residential, renovation, project management, sustainable, and interior construction in Austin, TX.",
    url: `${BASE_URL}/services`,
    siteName: "Ironstone Build Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Services — Ironstone Build Co.",
    description:
      "Commercial, residential, renovation & more. Austin, Texas general contractor.",
  },
};

const services = [
  {
    num: "01",
    title: "Commercial Construction",
    subtitle: "From foundations to fit-out",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop",
    imgAlt: "Commercial office tower construction",
    desc: "We deliver ground-up commercial construction projects that set the standard for quality, safety, and on-schedule execution. From initial site assessment to final certificate of occupancy, our teams manage every aspect of the build.",
    includes: [
      "Ground-up commercial buildings & campuses",
      "Tilt-wall & structural steel construction",
      "Retail, restaurant & hospitality fit-outs",
      "Medical, educational & civic facilities",
      "Multi-storey parking structures",
    ],
  },
  {
    num: "02",
    title: "Residential Construction",
    subtitle: "Custom homes built to last generations",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    imgAlt: "Luxury custom residential home",
    desc: "Your home is the most personal project you'll ever commission. Our residential team works closely with you and your architect to deliver a custom build that reflects your lifestyle — built to exacting standards that stand the test of time.",
    includes: [
      "Custom single-family homes",
      "Luxury estate & waterfront builds",
      "Multi-family residential developments",
      "ADU & guest house construction",
      "Smart home infrastructure & integration",
    ],
  },
  {
    num: "03",
    title: "Renovation & Remodeling",
    subtitle: "Transform what you have",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1600&auto=format&fit=crop",
    imgAlt: "Renovation in progress",
    desc: "A well-executed renovation transforms the value and livability of any structure. Ironstone brings the same discipline to a $50K bathroom remodel as we bring to a $5M commercial gut renovation.",
    includes: [
      "Full gut renovations, residential & commercial",
      "Kitchen & bathroom remodels",
      "Room additions & structural expansions",
      "Historic preservation & restoration",
      "Structural modifications & seismic upgrades",
    ],
  },
  {
    num: "04",
    title: "Project Management",
    subtitle: "Expert oversight, zero guesswork",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    imgAlt: "Project manager reviewing blueprints",
    desc: "For clients with established teams, Ironstone offers standalone project management — bringing our systems, networks, and discipline to any build without taking over the whole show.",
    includes: [
      "Owner's representative services",
      "General contracting & bid management",
      "Subcontractor coordination & oversight",
      "Budget & schedule management",
      "Risk mitigation & executive reporting",
    ],
  },
  {
    num: "05",
    title: "Sustainable Building",
    subtitle: "Building for the future",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    imgAlt: "Modern sustainable building",
    desc: "Sustainability is an engineering discipline, not a checkbox. Our LEED-accredited team integrates energy efficiency, environmental responsibility, and future-readiness into every structure we build.",
    includes: [
      "LEED-certified construction management",
      "Solar-ready & net-zero infrastructure",
      "High-performance building envelopes",
      "Recycled, low-VOC & FSC-certified materials",
      "Energy modelling, commissioning & reporting",
    ],
  },
  {
    num: "06",
    title: "Interior Construction",
    subtitle: "Precision finishes, inside out",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
    imgAlt: "High-end interior fit-out",
    desc: "Our interior division specialises in commercial tenant improvements and high-end residential interiors — where every detail is considered and nothing is left to chance.",
    includes: [
      "Commercial tenant improvements (TI)",
      "High-end residential interior builds",
      "Custom millwork & built-in joinery",
      "Flooring, ceiling & feature wall systems",
      "FF&E coordination & installation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-16">

      {/* ── Page Header ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">Services</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-16 lg:pr-16 lg:border-r border-border">
              <h1 className="display-xl text-on-surface">
                WHAT<br />WE BUILD.
              </h1>
            </div>
            <div className="py-16 lg:pl-16 flex items-center">
              <p className="font-body text-base text-muted leading-relaxed max-w-md">
                Six disciplines. One standard. Whether it&apos;s a commercial tower
                or a custom home, every project gets the full weight of our
                expertise, teams, and commitment to delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Blocks ── */}
      {services.map(({ num, title, subtitle, img, imgAlt, desc, includes }, i) => (
        <section key={num} className={`border-b border-border ${i % 2 !== 0 ? "bg-surface-alt" : "bg-background"}`}>
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            {/* Label row */}
            <div className="py-6 border-b border-border flex items-center justify-between">
              <p className="label-eyebrow">{num}_ {title}</p>
              <p className="label-eyebrow text-muted">{subtitle}</p>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 py-16">
              <ScrollReveal variant="fade-in" className={`mb-10 lg:mb-0 ${i % 2 !== 0 ? "lg:order-2 lg:pl-16" : "lg:pr-16 lg:border-r border-border"}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img}
                    alt={imgAlt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-in" delay={80} className={i % 2 !== 0 ? "lg:order-1 lg:pr-16 lg:border-r border-border" : "lg:pl-16"}>
                <div className="flex flex-col justify-center h-full">
                  <p className="font-body text-base text-muted leading-relaxed mb-8">
                    {desc}
                  </p>
                  <ul className="flex flex-col gap-3 mb-10">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-4 py-3 border-t border-border first:border-t-0">
                        <span className="label-eyebrow shrink-0 mt-0.5">—</span>
                        <span className="font-body text-sm text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-on-surface text-on-surface px-8 py-3 font-label font-semibold text-sm tracking-widest uppercase hover:bg-on-surface hover:text-background transition-colors duration-200 self-start"
                  >
                    Discuss This Service
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="bg-[#09090b]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-24">
          <ScrollReveal variant="fade-up">
            <h2 className="display-lg text-[#fafafa] mb-10">
              HAVE A PROJECT?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#fafafa] text-[#fafafa] px-10 py-4 font-label font-semibold text-sm tracking-widest uppercase hover:bg-[#fafafa] hover:text-[#09090b] transition-colors duration-200"
            >
              Get a Free Quote
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
