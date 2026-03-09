import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaston Raimundo | Data Analyst Senior",
  description:
    "Data Analyst Senior especializado en Power BI, SQL, Excel Avanzado y automatización de reportes. Corrientes, Argentina.",
  keywords: [
    "data analyst",
    "power bi",
    "sql",
    "excel avanzado",
    "business intelligence",
    "corrientes",
    "argentina",
  ],
  authors: [{ name: "Gaston Pablo Raimundo" }],
  openGraph: {
    title: "Gaston Raimundo | Data Analyst Senior",
    description:
      "Transformo datos en decisiones. Especialista en BI, automatización de reportes y modelado de datos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Fonts: Inter + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
