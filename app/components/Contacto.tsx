const contactLinks = [
  {
    label: "Email",
    valor: "gaston.rai28@gmail.com",
    href: "mailto:gaston.rai28@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    valor: "gaston-raimundo-3a287a213",
    href: "https://linkedin.com/in/gaston-raimundo-3a287a213/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Ubicación",
    valor: "Corrientes, Argentina",
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-surface/20">
      <div className="section">
        <h2 className="section-title">Contacto</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              ¿Tenés datos sin explotar, reportes manuales o necesitás visibilidad
              gerencial centralizada?{" "}
              <span className="text-white font-semibold">Hablemos.</span>
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Puedo ayudarte a diseñar una solución analítica a medida — desde
              automatizar tus reportes de producción en Excel hasta implementar
              dashboards Power BI conectados a tus datos de planta.
            </p>

            {/* Links de contacto */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <div key={link.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-900/40 border border-primary-800
                                  flex items-center justify-center text-primary-400 shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                      {link.label}
                    </p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary-400 transition-colors font-medium"
                      >
                        {link.valor}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{link.valor}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA box */}
          <div className="card border-primary-800 bg-gradient-to-br from-primary-900/30 to-surface text-center py-10">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-white font-bold text-xl mb-3">
              ¿Listo para transformar tus datos?
            </h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Escribime y en 24 hs te respondo con una propuesta inicial sin costo.
            </p>
            <a
              href="mailto:gaston.rai28@gmail.com?subject=Consulta%20de%20servicios%20BI"
              className="btn-primary w-full justify-center"
            >
              Escribirme ahora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
