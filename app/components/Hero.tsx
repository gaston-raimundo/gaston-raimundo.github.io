export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con gradiente y grilla */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-surface to-dark" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow central */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 section text-center animate-fade-in">
        {/* Badge intro */}
        <span className="badge mb-6 inline-flex">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none">
          Gaston
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent">
            Raimundo
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-3">
          Data Analyst Senior
        </p>
        <p className="text-slate-500 mb-8 flex items-center justify-center gap-2 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          Corrientes, Argentina · Remoto disponible
        </p>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformo datos crudos en{" "}
          <span className="text-white font-semibold">decisiones estratégicas</span>.
          Especialista en Power BI, SQL y automatización de reportes para
          gerencias de producción, compras y mantenimiento.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#servicios" className="btn-primary">
            Ver servicios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/gaston-raimundo-3a287a213/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {/* LinkedIn icon */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Flecha scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
