import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ── DATA ─────────────────────────────────────────── */

const stats = [
  { value: "17+", label: "Years in business" },
  { value: "850+", label: "Projects completed" },
  { value: "98%", label: "On-time delivery" },
  { value: "$2B+", label: "Value delivered" },
];

const services = [
  { num: "01", title: "Commercial Construction", desc: "Ground-up commercial buildings, tilt-wall structures, multi-storey developments, retail fit-outs, and medical facilities." },
  { num: "02", title: "Residential Construction", desc: "Custom homes, luxury estates, multi-family developments, and ADU builds crafted with precision materials." },
  { num: "03", title: "Renovation & Remodeling", desc: "Full gut renovations, kitchen and bathroom remodels, structural expansions, and historic restoration." },
  { num: "04", title: "Project Management", desc: "Owner's representation, subcontractor coordination, budget and schedule management, and risk mitigation." },
  { num: "05", title: "Sustainable Building", desc: "LEED-certified construction, solar-ready infrastructure, high-performance building envelopes, and energy modelling." },
  { num: "06", title: "Interior Construction", desc: "Commercial tenant improvements, high-end residential interiors, custom millwork, and precision finishes." },
];

const testimonials = [
  {
    quote: "Ironstone delivered our 40,000 sq ft office complex three weeks ahead of schedule. The quality is exceptional.",
    name: "Marcus Webb",
    title: "CEO, Veritas Capital Group",
    year: "2024",
  },
  {
    quote: "From the first site visit to handing us the keys, the Ironstone team was transparent and truly committed to getting it right.",
    name: "Jennifer & Tom Kaczynski",
    title: "Austin Homeowners",
    year: "2023",
  },
  {
    quote: "We've used three contractors over the years. Ironstone is the only one we'll ever call again.",
    name: "Sandra Okonkwo",
    title: "Operations Director, Meridian Hotels",
    year: "2023",
  },
];

const projects = [
  { title: "Veritas Capital HQ", type: "Commercial · Office Tower", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1400&auto=format&fit=crop" },
  { title: "Lakewood Estates", type: "Residential · Custom Home", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop" },
  { title: "Meridian Hotel Reno", type: "Renovation · 180 Rooms", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1400&auto=format&fit=crop" },
];

/* ── PAGE ─────────────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="pt-16">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="border-b border-border">
        {/* Text block */}
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 pt-16 pb-14 md:pt-24 md:pb-20">
          <p className="label-eyebrow mb-10 md:mb-14">
            Ironstone Build Co. — Est. 2008 — Austin, TX
          </p>
          <h1 className="display-hero text-on-surface mb-12 md:mb-16">
            WE<br />BUILD<br />THINGS.
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-t border-border pt-10">
            <p className="font-body text-base text-muted max-w-sm leading-relaxed">
              17 years of precision construction across Central Texas. Commercial,
              residential, and renovation projects — on time, on budget, without exception.
            </p>
            <div className="flex flex-wrap gap-4 items-center shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-on-surface text-on-surface px-8 py-3 font-label font-semibold text-sm tracking-widest uppercase hover:bg-on-surface hover:text-background transition-colors duration-200"
              >
                Get a Quote
              </Link>
              <Link
                href="/projects"
                className="label-eyebrow text-muted hover:text-on-surface transition-colors duration-200 flex items-center gap-2"
              >
                View Our Work
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Full-width image strip */}
        <div className="relative h-[60vh] md:h-[80vh] w-full border-t border-border">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2400&auto=format&fit=crop"
            alt="Construction site with tower cranes at golden hour"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section className="bg-[#09090b]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[#fafafa]/10">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-8 md:px-12 py-12">
                <div className="display-md text-[#fafafa] mb-2">{value}</div>
                <p className="label-eyebrow text-[#71717a]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/* Top label row */}
          <div className="flex items-center justify-between py-8 border-b border-border">
            <p className="label-eyebrow">01_ Who We Are</p>
            <Link href="/about" className="label-eyebrow text-muted hover:text-on-surface transition-colors duration-200 flex items-center gap-2">
              Full Story
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — Big statement */}
            <ScrollReveal variant="fade-in">
              <div className="py-16 lg:pr-16 lg:border-r border-border">
                <h2 className="display-lg text-on-surface mb-0">
                  BUILT ON<br />INTEGRITY.
                </h2>
              </div>
            </ScrollReveal>

            {/* Right — Text */}
            <ScrollReveal variant="fade-in" delay={100}>
              <div className="py-16 lg:pl-16 flex flex-col justify-center">
                <p className="font-body text-base text-muted leading-relaxed mb-6">
                  Founded in Austin in 2008 with two crews and a conviction that Central
                  Texas deserved better contractors. 17 years later, that same conviction
                  drives every build we take on.
                </p>
                <p className="font-body text-base text-muted leading-relaxed">
                  Our 200+ team — architects, engineers, project managers, and skilled
                  tradespeople — delivers commercial towers, custom homes, and precision
                  renovations with the same standard of care.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Full-bleed image strip */}
          <div className="relative h-72 md:h-96 border-t border-border">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2400&auto=format&fit=crop"
              alt="Ironstone team reviewing construction blueprints on site"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute bottom-6 right-6">
              <span className="label-eyebrow text-white/60 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
                Austin, Texas · 2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/* Label row */}
          <div className="flex items-center justify-between py-8 border-b border-border">
            <p className="label-eyebrow">02_ What We Build</p>
            <Link href="/services" className="label-eyebrow text-muted hover:text-on-surface transition-colors duration-200 flex items-center gap-2">
              All Services
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Service list */}
          <div>
            {services.map(({ num, title, desc }, i) => (
              <ScrollReveal key={num} variant="fade-up" delay={i * 50}>
                <Link
                  href="/services"
                  className="group grid grid-cols-1 md:grid-cols-[5rem_1fr_auto] items-start gap-4 md:gap-8 py-8 border-b border-border hover:bg-surface-alt transition-colors duration-200 -mx-6 md:-mx-10 px-6 md:px-10"
                >
                  <span className="font-display text-4xl text-muted group-hover:text-on-surface transition-colors duration-200">
                    {num}
                  </span>
                  <div>
                    <h3 className="display-sm text-on-surface mb-2">{title}</h3>
                    <p className="font-body text-sm text-muted leading-relaxed max-w-lg">
                      {desc}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-muted group-hover:text-on-surface transition-all duration-200 group-hover:translate-x-1 mt-1 hidden md:block">
                    arrow_forward
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/* Label row */}
          <div className="flex items-center justify-between py-8 border-b border-border">
            <p className="label-eyebrow">03_ Selected Work</p>
            <Link href="/projects" className="label-eyebrow text-muted hover:text-on-surface transition-colors duration-200 flex items-center gap-2">
              View All
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border py-10">
            {projects.map(({ title, type, img }, i) => (
              <ScrollReveal key={title} variant="fade-up" delay={i * 80} className="group px-0 md:px-8 first:pl-0 last:pr-0 py-6 md:py-0">
                <Link href="/projects">
                  <div className="relative aspect-[4/3] overflow-hidden mb-5">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="label-eyebrow text-muted mb-2">{type}</p>
                  <h3 className="display-sm text-on-surface">{title}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          {/* Label row */}
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">04_ Client Voices</p>
          </div>

          <div className="divide-y divide-border">
            {testimonials.map(({ quote, name, title, year }, i) => (
              <ScrollReveal key={name} variant="fade-in" delay={i * 60}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start py-14">
                  <blockquote className="display-sm text-on-surface max-w-4xl">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <div className="shrink-0 lg:text-right">
                    <p className="font-label font-semibold text-sm text-on-surface">{name}</p>
                    <p className="font-body text-xs text-muted mt-0.5">{title}</p>
                    <p className="label-eyebrow mt-3">{year}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="bg-[#09090b]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <ScrollReveal variant="fade-up">
            <p className="label-eyebrow text-[#71717a] mb-8">05_ Start a Project</p>
            <h2 className="display-xl text-[#fafafa] mb-12 max-w-4xl">
              READY TO BUILD?
            </h2>
            <div className="flex flex-wrap gap-6 items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#fafafa] text-[#fafafa] px-10 py-4 font-label font-semibold text-sm tracking-widest uppercase hover:bg-[#fafafa] hover:text-[#09090b] transition-colors duration-200"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+15124007800"
                className="label-eyebrow text-[#71717a] hover:text-[#fafafa] transition-colors duration-200"
              >
                or call +1 (512) 400-7800
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
