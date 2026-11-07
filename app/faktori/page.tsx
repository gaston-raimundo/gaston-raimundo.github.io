import type { Metadata } from "next";
import { SectionHead } from "../components/blocks";
import FaktoriMock, { FaktoriMark } from "../components/FaktoriMock";
import ServiceTemplate from "../components/ServiceTemplate";
import { faktoriFeatures as features, serviceById } from "../lib/content";

const s = serviceById("S1");

export const metadata: Metadata = {
  title: "Faktori · Monitoreo de planta en tiempo real",
  description: s.hero.text,
  alternates: { canonical: "/faktori" },
  openGraph: {
    title: "Faktori, de BI Insights",
    description: s.hero.text,
    url: "/faktori",
    images: [{ url: "/og/faktori.png", width: 1200, height: 630, alt: "Faktori" }],
  },
};


export default function FaktoriPage() {
  return (
    <ServiceTemplate
      s={s}
      eyebrow={
        <span className="flex items-center gap-2.5">
          <FaktoriMark size={22} stroke={7} />
          <span>FAKTORI · DE BI INSIGHTS</span>
        </span>
      }
      aside={<FaktoriMock />}
    >
      <section className="wrap flex flex-col gap-8 py-16">
        <SectionHead
          eyebrow="FUNCIONES"
          title="Cada rol ve lo que necesita, donde lo necesita."
          lead="Faktori lleva los datos de los equipos a la oficina, al teléfono y a las pantallas de planta."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card flex flex-col gap-2">
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </ServiceTemplate>
  );
}
