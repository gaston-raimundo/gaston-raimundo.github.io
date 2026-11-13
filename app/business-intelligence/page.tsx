import type { Metadata } from "next";
import Link from "next/link";
import { CheckList, CtaBand, Faq, Flow, JsonLd, PageHero, SectionHead, ServiceCard, WorkSteps } from "../components/blocks";
import { searchMeta, services, site, verticals } from "../lib/content";
import { notas } from "../lib/notas";

const PATH = "/business-intelligence";
const TITLE = "Business intelligence para pymes industriales y retail";
const OG_TEXT =
  "Business intelligence que empieza por los datos: los capturamos, los automatizamos y los convertimos en tableros y KPIs que tu equipo usa todos los días.";

export const metadata: Metadata = {
  title: TITLE,
  description: searchMeta[PATH].description,
  keywords: searchMeta[PATH].keywords,
  alternates: { canonical: PATH },
  openGraph: {
    title: `${TITLE} · ${site.name}`,
    description: OG_TEXT,
    url: PATH,
    images: [{ url: "/og/gestion-kpis.png", width: 1200, height: 630, alt: TITLE }],
  },
};

const problems = [
  {
    title: "Tableros lindos, datos dudosos",
    text: "Se compra una herramienta de visualización, se arma un tablero y a los dos meses nadie lo mira: los números no coinciden con los de la planta porque alguien los sigue cargando a mano.",
  },
  {
    title: "El informe llega cuando ya es tarde",
    text: "Cerrar el mes lleva una semana de juntar archivos, copiar y pegar. Para cuando la gerencia ve el desvío, el problema ya pasó.",
  },
  {
    title: "Cada área tiene su propia verdad",
    text: "Producción, administración y ventas calculan el mismo indicador de forma distinta. Las reuniones se van en discutir qué número es el correcto.",
  },
];

const includes = [
  "Diagnóstico de fuentes de datos, procesos y reportes actuales.",
  "Integración con ERP, bases SQL Server, sistemas de planta (PLC, SCADA) y archivos existentes.",
  "Automatización de la captura y la consolidación: sin carga manual ni copiar y pegar.",
  "Modelo de datos único, con las definiciones de cada KPI acordadas entre áreas.",
  "Tableros de control y reportes por rol: operarios, supervisores, gerencia y dirección.",
  "Alertas automáticas cuando un indicador se sale de rango.",
  "Documentación completa y capacitación para que tu equipo sea autónomo.",
  "Todo instalado en tu infraestructura: el código y los datos son tuyos.",
];

const faq = [
  {
    q: "¿Qué es business intelligence?",
    a: "Business intelligence (BI, o inteligencia de negocios) es el conjunto de procesos y herramientas que transforman los datos de una empresa en información para decidir: indicadores, tableros de control y reportes. Incluye capturar los datos, integrarlos, guardarlos en un modelo confiable y presentarlos a cada persona que los necesita.",
  },
  {
    q: "¿Business intelligence es solo para empresas grandes?",
    a: "No. Las pymes son las que más tiempo pierden armando reportes a mano, y por eso son las que más ganan cuando ese trabajo se automatiza. El alcance se adapta: se puede empezar por un solo proceso, como la programación de producción o los KPIs de un área, y crecer por fases.",
  },
  {
    q: "¿Qué herramienta de BI usan? ¿Power BI?",
    a: "Elegimos la herramienta después de entender el problema. Si tu empresa ya usa una herramienta de visualización, la alimentamos con datos automatizados y confiables. Si no, construimos tableros web propios que no requieren licencias por usuario. Lo importante no es la herramienta sino que los datos lleguen solos y sean correctos.",
  },
  {
    q: "¿En qué se diferencia de contratar un tablero?",
    a: "Un tablero es la última capa. Nosotros empezamos por la primera: de dónde salen los datos, quién los carga y cómo se validan. Sin esa base, cualquier tablero termina mostrando números en los que nadie confía.",
  },
  {
    q: "¿Trabajan solo en Corrientes?",
    a: "Estamos en Corrientes y trabajamos con empresas de todo el NEA (Corrientes, Chaco, Misiones, Formosa) y del resto de Argentina. Gran parte del trabajo se hace en forma remota, con visitas a planta cuando el proyecto lo necesita.",
  },
  {
    q: "¿Cómo empieza un proyecto de business intelligence?",
    a: "Con un diagnóstico: revisamos cómo trabaja hoy tu equipo, qué datos existen y qué decisiones necesitan mejor información. De ahí sale una propuesta por fases, donde cada fase se cierra con entregables verificables antes de pasar a la siguiente.",
  },
];

export default function BusinessIntelligencePage() {
  const solutionCards = services.filter((s) => ["S1", "S2", "S3", "S4"].includes(s.id));
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultoría de business intelligence",
    serviceType: "Business intelligence",
    description: OG_TEXT,
    url: `${site.url}${PATH}`,
    provider: { "@id": `${site.url}/#organizacion` },
    areaServed: [
      { "@type": "State", name: "Corrientes" },
      { "@type": "State", name: "Chaco" },
      { "@type": "State", name: "Misiones" },
      { "@type": "Country", name: "Argentina" },
    ],
  };

  return (
    <>
      <PageHero
        crumbs={[{ href: PATH, label: "Business intelligence" }]}
        eyebrow="BUSINESS INTELLIGENCE"
        title="Business intelligence que empieza por los datos."
        text="Somos una consultora de business intelligence en Corrientes. Antes de dibujar un tablero, automatizamos la captura y la integración de los datos de tu empresa, para que los indicadores lleguen solos, a tiempo y sin discusiones."
        cta={{ href: "/contacto", label: "Agendar un diagnóstico" }}
        secondary={{ href: "#que-incluye", label: "Qué incluye" }}
        aside={
          <Flow steps={["ERP · planta · archivos", "Captura automática", "Base de datos única", "Tableros y KPIs"]} dark />
        }
      />

      <section className="wrap grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-5">
          <SectionHead eyebrow="QUÉ ES" title="¿Qué es business intelligence?" />
          <p className="lead">
            Business intelligence (BI), o inteligencia de negocios, es la forma de convertir los datos que una
            empresa ya genera (ventas, producción, stock, tiempos de máquina, costos) en información para decidir:
            indicadores, tableros de control y reportes que cada persona consulta sin pedírselos a nadie.
          </p>
          <p className="lead">
            Un sistema de BI tiene cuatro capas: la <strong>captura</strong> de los datos en su origen, la{" "}
            <strong>integración</strong> de fuentes distintas, un <strong>modelo de datos</strong> confiable y la{" "}
            <strong>visualización</strong>. La mayoría de los proyectos se enfocan en la última. Nosotros
            empezamos por la primera, porque ahí es donde se pierden las horas y se generan los errores.
          </p>
        </div>
        <div className="card flex flex-col gap-3 self-start">
          <p className="eyebrow">EN UNA FRASE</p>
          <p className="text-lg font-bold leading-snug">
            Pasar de &ldquo;¿alguien me puede pasar el número?&rdquo; a ver el número actualizado, todos los días,
            en la pantalla de quien lo necesita.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap flex flex-col gap-8 py-16">
          <SectionHead
            eyebrow="POR QUÉ FALLA"
            title="Por qué el BI no funciona en muchas pymes."
            lead="El problema casi nunca es la herramienta. Es lo que pasa antes de que el dato llegue al tablero."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="card">
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="que-incluye" className="wrap flex scroll-mt-20 flex-col gap-8 py-16">
        <SectionHead
          eyebrow="QUÉ INCLUYE"
          title="Nuestro servicio de business intelligence."
          lead="Un proyecto de punta a punta: desde el dato en su origen hasta la decisión en la gerencia."
        />
        <CheckList items={includes} />
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap flex flex-col gap-8 py-16">
          <SectionHead
            eyebrow="SOLUCIONES DE BI"
            title="Business intelligence aplicado a problemas concretos."
            lead="Cada solución es una pieza de un sistema de BI completo. Se puede empezar por una y sumar las demás por fases."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {solutionCards.map((s) => (
              <ServiceCard key={s.id} s={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="wrap flex flex-col gap-8 py-16">
        <SectionHead
          eyebrow="POR INDUSTRIA"
          title="Business intelligence para industria, tecnología y retail."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {verticals.map((v) => (
            <Link key={v.slug} href={v.href} className="card flex flex-col gap-2 text-ink no-underline hover:shadow-lg">
              <h3 className="text-xl font-bold">BI para {v.navLabel.toLowerCase()}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{v.short}</p>
              <span className="mt-auto text-[15px] font-semibold text-accent-ink">Ver más →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <SectionHead eyebrow="DÓNDE TRABAJAMOS" title="Consultora de BI en Corrientes, para el NEA y Argentina." />
            <p className="lead">
              Estamos en Corrientes y trabajamos con empresas de Corrientes, Resistencia, Posadas y Formosa, y con
              clientes del resto de Argentina y del exterior. Conocemos la realidad de las plantas del NEA: redes de
              producción sin internet, sistemas heredados y equipos chicos que no pueden dedicar una persona a
              armar reportes.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <SectionHead eyebrow="LO QUE QUEDA" title="Lo que construimos es tuyo." />
            <p className="lead">
              Código, datos, modelos y documentación quedan en manos del cliente, instalados en su infraestructura.
              Sin licencias que renovar ni dependencia de un proveedor: si mañana querés seguir solo, podés.
            </p>
          </div>
        </div>
      </section>

      <WorkSteps title="Un proyecto de BI por fases, cada una cerrada antes de seguir." />

      {notas.length > 0 && (
        <section className="wrap flex flex-col gap-6 pb-4 pt-16">
          <SectionHead eyebrow="NOTAS" title="Para seguir leyendo." />
          <ul className="flex flex-col gap-3">
            {notas.map((n) => (
              <li key={n.slug}>
                <Link href={`/notas/${n.slug}`} className="link text-[17px]">
                  {n.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Faq items={faq} title="Preguntas frecuentes sobre business intelligence." />
      <CtaBand
        title="¿Querés saber por dónde empezar con BI?"
        text="Contanos cómo se arman hoy los reportes en tu empresa. En una primera reunión revisamos las fuentes de datos y te proponemos un primer paso concreto."
      />
      <JsonLd data={service} />
    </>
  );
}
