import Link from "next/link";
import { nav, site } from "../lib/content";

export default function Footer() {
  return (
    <footer className="on-ink border-t border-ink-line bg-ink text-white">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo_horizontal_negativo.svg" alt="BI Insights" width={152} height={40} />
          <p className="text-sm leading-relaxed text-onink">
            Sistemas de datos para la industria, las empresas de tecnología y el retail. {site.location}.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Soluciones</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/faktori" className="text-onink hover:text-white">
                Faktori · Monitoreo en tiempo real
              </Link>
            </li>
            {nav.soluciones.map((it) => (
              <li key={it.href}>
                <Link href={it.href} className="text-onink hover:text-white">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Industrias</p>
          <ul className="flex flex-col gap-2 text-sm">
            {nav.industrias.map((it) => (
              <li key={it.href}>
                <Link href={it.href} className="text-onink hover:text-white">
                  {it.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/casos" className="text-onink hover:text-white">
                Casos
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="text-onink hover:text-white">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/notas" className="text-onink hover:text-white">
                Notas
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Contacto</p>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="font-mono text-onink hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-onink hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <Link href="/contacto" className="text-onink hover:text-white">
                Agendar un diagnóstico
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <div className="wrap flex flex-wrap justify-between gap-3 py-5 text-sm text-slate-400">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.founder}
          </span>
          <span>Los casos se publican sin nombrar al cliente.</span>
        </div>
      </div>
    </footer>
  );
}
