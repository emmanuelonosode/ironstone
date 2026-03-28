import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const BASE_URL = "https://ironstone.bookone.dev";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Ironstone Build Co. Founded in Austin in 2008, we've grown from two crews to 200+ professionals delivering commercial and residential construction across Texas.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Ironstone Build Co. — Built on Integrity.",
    description:
      "17 years. 200+ professionals. One standard. Learn the story, values, and team behind Austin's trusted full-service construction firm.",
    url: `${BASE_URL}/about`,
    siteName: "Ironstone Build Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ironstone Build Co. — Built on Integrity.",
    description:
      "17 years. 200+ professionals. One standard. Austin, Texas construction.",
  },
};

const values = [
  { num: "01", title: "Integrity", desc: "Complete transparency on pricing, timelines, and progress — from day one to handover." },
  { num: "02", title: "Excellence", desc: "Every build is held to the highest workmanship standards in the industry, no exceptions." },
  { num: "03", title: "Community", desc: "We hire locally, source regionally, and give back to Austin through construction partnerships." },
];

const team = [
  {
    name: "Robert Ironstone",
    role: "Founder & CEO",
    bio: "Founded Ironstone in 2008 with two crews and a conviction that Texas deserved better contractors. 17 years later, that conviction drives every build.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Patricia Delgado",
    role: "VP of Operations",
    bio: "20 years in construction operations. Oversees all project delivery, vendor relationships, and quality standards across the portfolio.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "James Okafor",
    role: "Chief Architect",
    bio: "Translates client visions into buildable, code-compliant, and enduring structures across every project type.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Melissa Tran",
    role: "Project Director",
    bio: "Engineering background. Manages our largest commercial builds with fierce attention to schedule and budget discipline.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
];

const credentials = [
  "OSHA 30 Certified",
  "AGC Excellence Award 2023",
  "LEED Accredited Builder",
  "BBB A+ Rating",
  "Austin Small Business of the Year 2022",
];

export default function AboutPage() {
  return (
    <main className="pt-16">

      {/* ── Page Header ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">About</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-16 lg:pr-16 lg:border-r border-border">
              <h1 className="display-xl text-on-surface">
                OUR<br />STORY.
              </h1>
            </div>
            <div className="py-16 lg:pl-16 flex items-center">
              <p className="font-body text-base text-muted leading-relaxed max-w-md">
                Founded in Austin in 2008. Grown from two residential crews to one of
                Central Texas&apos;s most trusted full-service construction firms.
                200+ professionals. One standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-bleed image ── */}
      <div className="relative h-[60vh] min-h-[320px] border-b border-border">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2400&auto=format&fit=crop"
          alt="Architect reviewing blueprints on site"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Origin Story ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">01_ The Beginning</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 py-16">
            <ScrollReveal variant="fade-in" className="lg:pr-16 lg:border-r border-border mb-10 lg:mb-0">
              <h2 className="display-lg text-on-surface">
                SINCE<br />2008.
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-in" delay={100} className="lg:pl-16">
              <p className="font-body text-base text-muted leading-relaxed mb-6">
                Robert Ironstone founded this company with a single conviction: that
                Central Texas deserved a contractor who treated every project with the
                same standard of excellence, whether a $50K bathroom remodel or a
                $50M commercial tower.
              </p>
              <p className="font-body text-base text-muted leading-relaxed mb-6">
                Starting with two residential crews out of South Austin, we grew
                steadily through word of mouth and an unwillingness to cut corners.
                By 2015 we had moved into commercial construction, taking on our first
                multi-storey office development in downtown Austin.
              </p>
              <p className="font-body text-base text-muted leading-relaxed">
                Today our team of 200+ operates across every scope of construction.
                The philosophy hasn&apos;t changed: show up on time, communicate
                clearly, build to last.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">02_ What We Stand For</p>
          </div>
          <div>
            {values.map(({ num, title, desc }, i) => (
              <ScrollReveal key={num} variant="fade-up" delay={i * 60}>
                <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr_1fr] gap-4 md:gap-10 py-10 border-b border-border last:border-0">
                  <span className="font-display text-5xl text-muted">{num}</span>
                  <h3 className="display-sm text-on-surface self-center">{title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed self-center">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">03_ The Team</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border py-10">
            {team.map(({ name, role, bio, img }, i) => (
              <ScrollReveal key={name} variant="fade-up" delay={i * 70} className="group px-0 sm:px-8 first:pl-0 last:pr-0 py-8 sm:py-0">
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={img}
                    alt={name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-label font-semibold text-base text-on-surface">{name}</h3>
                <p className="label-eyebrow text-muted mt-1 mb-4">{role}</p>
                <p className="font-body text-sm text-muted leading-relaxed">{bio}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="bg-[#09090b] border-b border-[#09090b]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-[#fafafa]/10">
            <p className="label-eyebrow text-[#71717a]">04_ Our Credentials</p>
          </div>
          <div className="py-16">
            <ScrollReveal variant="fade-up">
              <div className="flex flex-wrap gap-4">
                {credentials.map((c) => (
                  <div
                    key={c}
                    className="border border-[#fafafa]/15 px-6 py-3 font-label font-semibold text-sm text-[#fafafa]/70 uppercase tracking-widest"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#09090b]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-24">
          <ScrollReveal variant="fade-up">
            <h2 className="display-lg text-[#fafafa] mb-10">LET&apos;S BUILD.</h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[#fafafa] text-[#fafafa] px-10 py-4 font-label font-semibold text-sm tracking-widest uppercase hover:bg-[#fafafa] hover:text-[#09090b] transition-colors duration-200"
            >
              Start a Conversation
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
