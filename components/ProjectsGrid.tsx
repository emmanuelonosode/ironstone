"use client";

import Image from "next/image";
import { useState } from "react";

type Category = "All" | "Commercial" | "Residential" | "Renovation";

interface Project {
  title: string;
  category: Exclude<Category, "All">;
  type: string;
  year: string;
  img: string;
  tall?: boolean;
}

const projects: Project[] = [
  { title: "Veritas Capital HQ",         category: "Commercial",   type: "Office Tower · 12 Floors",          year: "2024", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop", tall: true },
  { title: "Lakewood Estates",           category: "Residential",  type: "Custom Home · 5,200 sq ft",         year: "2024", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop" },
  { title: "Meridian Hotel Renovation",  category: "Renovation",   type: "Hotel · 180 Rooms",                 year: "2023", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop" },
  { title: "Mesa Verde Retail Plaza",    category: "Commercial",   type: "Retail · 28,000 sq ft",             year: "2023", img: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop", tall: true },
  { title: "The Kaczynski Residence",    category: "Residential",  type: "Custom Home · 7,800 sq ft",         year: "2023", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop" },
  { title: "Congress Ave Medical Centre",category: "Commercial",   type: "Medical Facility · 4 Storeys",      year: "2022", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" },
  { title: "The Thornton Remodel",       category: "Renovation",   type: "Residential · Full Gut",            year: "2022", img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1200&auto=format&fit=crop", tall: true },
  { title: "Sycamore Hill Townhomes",    category: "Residential",  type: "Multi-family · 24 Units",           year: "2022", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop" },
  { title: "Ironside Industrial Park",   category: "Commercial",   type: "Industrial · 80,000 sq ft",         year: "2021", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop" },
  { title: "Southbank Kitchen & Bar",    category: "Renovation",   type: "Restaurant · Full Fit-out",         year: "2021", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop" },
];

const categories: Category[] = ["All", "Commercial", "Residential", "Renovation"];

export default function ProjectsGrid() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-0 border-b border-border mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-4 font-label font-semibold text-xs tracking-widest uppercase border-r border-border transition-colors duration-200 last:border-r-0 ${
              active === cat
                ? "bg-[#09090b] text-[#fafafa]"
                : "text-muted hover:text-on-surface hover:bg-surface-alt"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map(({ title, category, type, year, img, tall }) => (
          <div
            key={title}
            className={`relative overflow-hidden group break-inside-avoid ${
              tall ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#09090b]/0 group-hover:bg-[#09090b]/70 transition-all duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
              <p className="label-eyebrow text-[#a1a1aa] mb-2">{category} · {type}</p>
              <h3 className="font-display text-3xl text-[#fafafa] tracking-wide uppercase">{title}</h3>
              <p className="label-eyebrow text-[#71717a] mt-2">{year}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
