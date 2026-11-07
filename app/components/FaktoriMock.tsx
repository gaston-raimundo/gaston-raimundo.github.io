/** Vista de ejemplo de Faktori con datos sintéticos (no es una captura real). */
const lines = [
  { name: "Línea 1", value: "86 °C", state: "En marcha", dot: "#22C55E" },
  { name: "Línea 2", value: "72 °C", state: "En marcha", dot: "#22C55E" },
  { name: "Línea 3", value: "—", state: "Sin datos", dot: "#E87722" },
];

export function FaktoriMark({ size = 18, stroke = 7 }: { size?: number; stroke?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <polygon points="74,40 57,69.4 23,69.4 6,40 23,10.6 57,10.6" fill="#FFFFFF" />
      <path
        d="M 21,64 L 37,64 L 37,43 L 53,43 L 53,20"
        stroke="#E87722"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function FaktoriMock() {
  return (
    <figure className="m-0 flex flex-col gap-2.5">
      <div className="flex flex-col gap-3.5 rounded-card border border-ink-line bg-ink-2 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold">
            <FaktoriMark />
            Faktori · Planta
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none" />
            en vivo
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          {lines.map((ln) => (
            <div key={ln.name} className="flex min-w-0 flex-col gap-1.5 rounded-[10px] bg-ink p-3">
              <div className="text-xs text-slate-400">{ln.name}</div>
              <div className="font-mono text-lg font-medium sm:text-[22px]">{ln.value}</div>
              <div className="flex items-center gap-1.5 text-xs text-onink">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: ln.dot }} />
                <span className="truncate">{ln.state}</span>
              </div>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 400 90" width="100%" height="90" role="img" aria-label="Gráfico de ejemplo de temperatura de proceso">
          <polyline points="0,75 400,75" fill="none" stroke="#24406E" strokeWidth="1" />
          <polyline
            points="0,60 40,55 80,58 120,40 160,46 200,30 240,36 280,22 320,28 360,18 400,24"
            fill="none"
            stroke="#E87722"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <figcaption className="text-xs text-slate-400">Vista de ejemplo de Faktori con datos sintéticos.</figcaption>
    </figure>
  );
}
