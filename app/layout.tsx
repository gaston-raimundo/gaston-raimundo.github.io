import type { Metadata, Viewport } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { JsonLd } from "./components/blocks";
import { services, site } from "./lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Sistemas de datos para la industria`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.founder }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0F1F3D",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/icon-512.png`,
  email: site.email,
  founder: { "@type": "Person", name: site.founder },
  address: { "@type": "PostalAddress", addressRegion: "Corrientes", addressCountry: "AR" },
  sameAs: [site.linkedin],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, url: `${site.url}${s.href}` },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/fonts/Inter-Variable-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={orgJsonLd} />
      </body>
    </html>
  );
}
