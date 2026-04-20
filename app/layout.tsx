import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaston Raimundo | Consultor en automatizacion de datos",
  description:
    "Consultor independiente en automatizacion de datos y BI. De Excels rotos a ecosistemas confiables: saneamiento, automatizacion Python y evolucion hacia Industria 4.0 por fases validadas.",
  keywords: [
    "consultor bi",
    "automatizacion de datos",
    "power bi",
    "sql",
    "excel avanzado",
    "python",
    "kpi produccion",
    "industria 4.0",
    "consultor independiente",
    "corrientes",
    "argentina",
  ],
  authors: [{ name: "Gaston Pablo Raimundo" }],
  openGraph: {
    title: "Gaston Raimundo | Consultor en automatizacion de datos",
    description:
      "Enfoque consultivo por fases: saneamiento de Excels, automatizacion Python + web/movil, Industria 4.0. Entregables verificables, propiedad intelectual del cliente.",
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
