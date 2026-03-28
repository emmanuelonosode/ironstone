import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectsGrid from "@/components/ProjectsGrid";

const BASE_URL = "https://ironstone.bookone.dev";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse 850+ completed construction projects by Ironstone Build Co. — office towers, custom homes, hotel renovations, industrial parks, and more across Austin and Central Texas.",
  alternates: { canonical: `${BASE_URL}/projects` },
  openGraph: {
    title: "Projects Portfolio — Ironstone Build Co.",
    description:
      "850+ builds since 2008. Commercial towers, custom homes, renovations, and industrial projects across Austin, Texas.",
    url: `${BASE_URL}/projects`,
    siteName: "Ironstone Build Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio — Ironstone Build Co.",
    description:
      "850+ completed projects. Commercial, residential & renovation. Austin, TX.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="pt-16">

      {/* ── Page Header ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="py-8 border-b border-border">
            <p className="label-eyebrow">Projects</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="py-16 lg:pr-16 lg:border-r border-border">
              <h1 className="display-xl text-on-surface">
                850+<br />BUILDS.
              </h1>
            </div>
            <div className="py-16 lg:pl-16 flex items-center">
              <p className="font-body text-base text-muted leading-relaxed max-w-md">
                A selection from over 850 projects delivered since 2008 — commercial towers,
                custom homes, hotels, medical facilities, industrial parks, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-10">
          <ProjectsGrid />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#09090b]">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-24">
          <ScrollReveal variant="fade-up">
            <h2 className="display-lg text-[#fafafa] mb-10">
              YOUR PROJECT<br />NEXT.
            </h2>
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
