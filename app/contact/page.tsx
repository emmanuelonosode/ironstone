import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";

const BASE_URL = "https://ironstone.bookone.dev";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free site consultation and fixed-price construction quote from Ironstone Build Co. in Austin, Texas. We respond within one business day.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact Ironstone Build Co. — Start Your Project.",
    description:
      "Free site consultations. Fixed-price quotes in 5–7 business days. Call +1 (512) 400-7800 or send us a message.",
    url: `${BASE_URL}/contact`,
    siteName: "Ironstone Build Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ironstone Build Co. — Start Your Project.",
    description:
      "Free consultations. Fixed-price quotes. Austin, Texas general contractor.",
  },
};

const faqs = [
  {
    q: "What types of projects do you take on?",
    a: "Commercial construction, custom residential builds, full renovations, and tenant improvements across the Austin metro. Project sizes range from $50K to $50M+.",
  },
  {
    q: "How long does a typical project take?",
    a: "A kitchen renovation: 6–10 weeks. A custom home: 10–14 months. A commercial build: 12–24 months. We provide a precise schedule at the estimating stage.",
  },
  {
    q: "Are you licensed and insured in Texas?",
    a: "Yes. Ironstone holds all required Texas contractor licences and carries $10M general liability, workers' compensation, and builder's risk insurance on every project.",
  },
  {
    q: "How does your estimating process work?",
    a: "We offer a free initial site consultation. From there we produce a detailed scope of work and fixed-price quote within 5–7 business days.",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-16">

      {/* ── Page Header ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">Contact</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-16 lg:pr-16 lg:border-r border-border">
              <h1 className="display-xl text-on-surface">
                LET&apos;S<br />TALK.
              </h1>
            </div>
            <div className="py-16 lg:pl-16 flex flex-col justify-center gap-8">
              <div>
                <p className="label-eyebrow text-muted mb-2">Phone</p>
                <a href="tel:+15124007800" className="font-body text-lg text-on-surface hover:text-muted transition-colors duration-200">
                  +1 (512) 400-7800
                </a>
              </div>
              <div>
                <p className="label-eyebrow text-muted mb-2">Email</p>
                <a href="mailto:info@ironstonebuild.com" className="font-body text-lg text-on-surface hover:text-muted transition-colors duration-200">
                  info@ironstonebuild.com
                </a>
              </div>
              <div>
                <p className="label-eyebrow text-muted mb-2">Office</p>
                <p className="font-body text-base text-on-surface">
                  1847 Congress Ave<br />Austin, TX 78701
                </p>
              </div>
              <div>
                <p className="label-eyebrow text-muted mb-2">Hours</p>
                <p className="font-body text-base text-muted">
                  Mon – Fri: 7am – 6pm<br />Saturday: 8am – 12pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Form */}
            <div className="py-16 lg:pr-16 lg:border-r border-border">
              <ScrollReveal variant="fade-in">
                <p className="label-eyebrow mb-8">Send a Message</p>
                <Suspense fallback={<div className="h-96 border-t border-border animate-pulse" />}>
                  <ContactForm />
                </Suspense>
              </ScrollReveal>
            </div>

            {/* Map + extra info */}
            <div className="py-16 lg:pl-16">
              <ScrollReveal variant="fade-in" delay={80}>
                <p className="label-eyebrow mb-8">Find Us</p>

                {/* Map placeholder */}
                <div className="relative aspect-[4/3] mb-10 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1200&auto=format&fit=crop"
                    alt="Austin, Texas skyline"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="label-eyebrow text-white/70 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
                      1847 Congress Ave · Austin, TX
                    </span>
                  </div>
                </div>

                {/* Extra note */}
                <div className="border-t border-border pt-8">
                  <p className="font-body text-sm text-muted leading-relaxed">
                    Free site consultations available Mon – Sat. Our project managers
                    typically respond to all enquiries within one business day.
                    Fixed-price quotes delivered within 5–7 business days.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">Common Questions</p>
          </div>
          <div>
            {faqs.map(({ q, a }, i) => (
              <ScrollReveal key={q} variant="fade-up" delay={i * 50}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-16 py-10 border-b border-border last:border-0">
                  <h3 className="display-sm text-on-surface">{q}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed self-center">{a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phone CTA ── */}
      <section className="bg-[#09090b]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-20">
          <ScrollReveal variant="fade-up">
            <p className="label-eyebrow text-[#71717a] mb-4">Prefer to call?</p>
            <a
              href="tel:+15124007800"
              className="display-lg text-[#fafafa] hover:text-[#a1a1aa] transition-colors duration-200 block"
            >
              +1 (512) 400-7800
            </a>
            <p className="label-eyebrow text-[#52525b] mt-4">
              Mon – Fri 7am–6pm · Sat 8am–12pm
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
