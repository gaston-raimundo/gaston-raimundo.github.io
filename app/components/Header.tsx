"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "../lib/content";

type Menu = "soluciones" | "industrias" | null;

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className="ml-1">
      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Dropdown({
  id,
  label,
  items,
  open,
  onToggle,
}: {
  id: Exclude<Menu, null>;
  label: string;
  items: { href: string; label: string }[];
  open: boolean;
  onToggle: (m: Menu) => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`menu-${id}`}
        onClick={() => onToggle(open ? null : id)}
        className="inline-flex min-h-[44px] items-center text-[15px] text-line hover:text-white"
      >
        {label}
        <Chevron />
      </button>
      {open && (
        <ul
          id={`menu-${id}`}
          className="absolute left-0 top-full z-50 mt-1 w-72 rounded-card border border-ink-line bg-ink-2 p-2 shadow-xl"
        >
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="block rounded-lg px-3 py-2.5 text-[15px] text-line hover:bg-ink hover:text-white"
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Cerrar menús al navegar.
  useEffect(() => {
    setMenu(null);
    setMobile(false);
  }, [pathname]);

  // Cerrar desplegables con clic afuera o Escape.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setMobile(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const plain = [
    { href: "/faktori", label: "Faktori" },
    { href: "/casos", label: "Casos" },
    { href: "/nosotros", label: "Nosotros" },
  ];

  return (
    <header ref={ref} className="on-ink sticky top-0 z-40 border-b border-ink-line bg-ink text-white">
      <nav aria-label="Principal" className="wrap flex min-h-[68px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="BI Insights, inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo_horizontal_negativo.svg" alt="BI Insights" width={152} height={40} />
        </Link>

        {/* Escritorio */}
        <div className="hidden items-center gap-6 lg:flex">
          <Dropdown id="soluciones" label="Soluciones" items={nav.soluciones} open={menu === "soluciones"} onToggle={setMenu} />
          <Link href="/faktori" className="text-[15px] text-line hover:text-white">
            Faktori
          </Link>
          <Dropdown id="industrias" label="Industrias" items={nav.industrias} open={menu === "industrias"} onToggle={setMenu} />
          <Link href="/casos" className="text-[15px] text-line hover:text-white">
            Casos
          </Link>
          <Link href="/nosotros" className="text-[15px] text-line hover:text-white">
            Nosotros
          </Link>
          <Link href="/contacto" className="btn min-h-[44px] px-4 text-[15px]">
            Contactar
          </Link>
        </div>

        {/* Móvil */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-line lg:hidden"
          aria-expanded={mobile}
          aria-controls="menu-movil"
          aria-label={mobile ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobile((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {mobile ? (
              <path d="M5 5l12 12M17 5 5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {mobile && (
        <div id="menu-movil" className="border-t border-ink-line lg:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            <p className="eyebrow px-1 pb-1 pt-2">Soluciones</p>
            {nav.soluciones.map((it) => (
              <Link key={it.href} href={it.href} className="rounded-lg px-1 py-2.5 text-line hover:text-white">
                {it.label}
              </Link>
            ))}
            <p className="eyebrow px-1 pb-1 pt-4">Industrias</p>
            {nav.industrias.map((it) => (
              <Link key={it.href} href={it.href} className="rounded-lg px-1 py-2.5 text-line hover:text-white">
                {it.label}
              </Link>
            ))}
            <div className="my-3 border-t border-ink-line" />
            {plain.map((it) => (
              <Link key={it.href} href={it.href} className="rounded-lg px-1 py-2.5 font-semibold text-white">
                {it.label}
              </Link>
            ))}
            <Link href="/contacto" className="btn mt-3">
              Contactar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
