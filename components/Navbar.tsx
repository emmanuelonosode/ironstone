"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_#e4e4e7]" : "border-b border-border"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl tracking-widest text-on-surface select-none"
          >
            IRONSTONE
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`label-eyebrow transition-colors duration-200 ${
                  isActive(href) ? "text-on-surface" : "hover:text-on-surface"
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="block mt-0.5 h-px bg-on-surface w-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-1 text-on-surface"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* ── Full-screen mobile menu ── */}
      <div
        className={`fixed inset-0 z-[60] bg-white flex flex-col md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Header row */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-border">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-display text-2xl tracking-widest"
          >
            IRONSTONE
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1 text-on-surface"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col flex-1 justify-center px-8 gap-1">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`display-md py-3 border-b border-border transition-colors duration-200 ${
                isActive(href) ? "text-on-surface" : "text-muted hover:text-on-surface"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer row */}
        <div className="px-8 py-8 border-t border-border">
          <p className="label-eyebrow">Austin, Texas · Est. 2008</p>
          <p className="label-eyebrow mt-1">+1 (512) 400-7800</p>
        </div>
      </div>
    </>
  );
}
