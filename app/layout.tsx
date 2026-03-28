import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://ironstone.bookone.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    template: "%s — Ironstone Build Co.",
    default: "Ironstone Build Co. — We Build Things.",
  },

  description:
    "Ironstone Build Co. is a full-service construction company based in Austin, Texas. 17 years of commercial, residential, renovation, and interior construction — delivered on time, on budget, with precision and integrity.",

  keywords: [
    "construction company Austin Texas",
    "general contractor Austin TX",
    "commercial construction Austin",
    "residential construction Austin",
    "custom home builder Austin",
    "renovation contractor Texas",
    "project management construction",
    "sustainable building Austin",
    "LEED contractor Texas",
    "Ironstone Build Co",
  ],

  authors: [{ name: "Ironstone Build Co.", url: BASE_URL }],
  creator: "Ironstone Build Co.",
  publisher: "Ironstone Build Co.",

  category: "Construction & Real Estate",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: "Ironstone Build Co. — We Build Things.",
    description:
      "Full-service construction in Austin, Texas. 17 years · 850+ projects · Commercial, residential, renovation. On time. On budget. Without exception.",
    url: BASE_URL,
    siteName: "Ironstone Build Co.",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ironstone Build Co. — We Build Things.",
    description:
      "Full-service construction in Austin, Texas. 17 years · 850+ projects · On time. On budget.",
    creator: "@ironstonebuild",
    site: "@ironstonebuild",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  verification: {
    // Add your Google Search Console & Bing verification tokens here
    // google: "your-google-verification-token",
    // other: { "msvalidate.01": "your-bing-token" },
  },
};

/* ── JSON-LD structured data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "GeneralContractor"],
      "@id": `${BASE_URL}/#business`,
      name: "Ironstone Build Co.",
      alternateName: "Ironstone Build",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
        width: 400,
        height: 100,
      },
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
      description:
        "Full-service construction company in Austin, Texas. Commercial, residential, renovation, project management, sustainable building, and interior construction since 2008.",
      foundingDate: "2008",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 200 },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1847 Congress Ave",
        addressLocality: "Austin",
        addressRegion: "TX",
        postalCode: "78701",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.2672,
        longitude: -97.7431,
      },
      telephone: "+1-512-400-7800",
      email: "info@ironstonebuild.com",
      priceRange: "$$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: [
        { "@type": "City", name: "Austin", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "State", name: "Texas" },
      ],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "12:00" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Construction Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Construction" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Construction" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Renovation & Remodeling" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sustainable Building" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Construction" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
      },
      sameAs: [
        "https://www.linkedin.com/company/ironstonebuild",
        "https://www.facebook.com/ironstonebuild",
        "https://www.instagram.com/ironstonebuild",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Ironstone Build Co.",
      description: "Full-service construction company in Austin, Texas.",
      publisher: { "@id": `${BASE_URL}/#business` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/projects?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
        { "@type": "ListItem", position: 3, name: "Services", item: `${BASE_URL}/services` },
        { "@type": "ListItem", position: 4, name: "Projects", item: `${BASE_URL}/projects` },
        { "@type": "ListItem", position: 5, name: "Contact", item: `${BASE_URL}/contact` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${manrope.variable} h-full`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body bg-background text-on-surface antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
