// ─────────────────────────────────────────────────────────────────
// Ilustraciones SVG para cada servicio
// Inspiradas en el estilo hand-drawn de Excalidraw
// ViewBox: 0 0 400 240 — fondo oscuro #12122a
// ─────────────────────────────────────────────────────────────────

// ── 1. Dashboards Power BI ─────────────────────────────────────
export function IlustracionPowerBI() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#12122a" rx="10" />

      {/* Título */}
      <text x="200" y="20" fill="#e5e5e5" fontSize={14} fontFamily="monospace" textAnchor="middle" fontWeight="600">
        Dashboard Ejecutivo
      </text>

      {/* KPI card 1 — Ventas */}
      <rect x="10" y="30" width="155" height="80" rx="8" fill="#1e3a5f" stroke="#4a9eed" strokeWidth="1" />
      <text x="22" y="50" fill="#a0a0a0" fontSize={10} fontFamily="monospace">Ventas Mes</text>
      <text x="22" y="74" fill="#4a9eed" fontSize={20} fontFamily="monospace" fontWeight="700">$2.4M</text>
      <text x="22" y="96" fill="#22c55e" fontSize={10} fontFamily="monospace">▲ +12% vs mes ant.</text>

      {/* KPI card 2 — Eficiencia */}
      <rect x="175" y="30" width="155" height="80" rx="8" fill="#2d1b69" stroke="#8b5cf6" strokeWidth="1" />
      <text x="187" y="50" fill="#a0a0a0" fontSize={10} fontFamily="monospace">Eficiencia Línea</text>
      <text x="187" y="74" fill="#8b5cf6" fontSize={20} fontFamily="monospace" fontWeight="700">87.3%</text>
      <text x="187" y="96" fill="#ef4444" fontSize={10} fontFamily="monospace">▼ -2.1% vs meta</text>

      {/* Badge RLS + DAX */}
      <rect x="340" y="30" width="52" height="36" rx="6" fill="#1e3a5f" stroke="#4a9eed" strokeWidth="1" />
      <text x="366" y="45" fill="#4a9eed" fontSize={9} fontFamily="monospace" textAnchor="middle">RLS</text>
      <text x="366" y="58" fill="#4a9eed" fontSize={9} fontFamily="monospace" textAnchor="middle">activo</text>
      <rect x="340" y="74" width="52" height="36" rx="6" fill="#2d1b69" stroke="#8b5cf6" strokeWidth="1" />
      <text x="366" y="89" fill="#8b5cf6" fontSize={9} fontFamily="monospace" textAnchor="middle">DAX</text>
      <text x="366" y="102" fill="#8b5cf6" fontSize={9} fontFamily="monospace" textAnchor="middle">avanzado</text>

      {/* Área del gráfico de barras */}
      <rect x="10" y="122" width="322" height="106" rx="8" fill="#0d0d1f" stroke="#333355" strokeWidth="1" />
      <text x="22" y="138" fill="#a0a0a0" fontSize={10} fontFamily="monospace">Producción por línea</text>

      {/* Barras */}
      <rect x="30"  y="182" width="28" height="38" rx="3" fill="#4a9eed" />
      <rect x="73"  y="168" width="28" height="52" rx="3" fill="#8b5cf6" />
      <rect x="116" y="192" width="28" height="28" rx="3" fill="#22c55e" />
      <rect x="159" y="174" width="28" height="46" rx="3" fill="#f59e0b" />
      <rect x="202" y="196" width="28" height="24" rx="3" fill="#ec4899" />
      <rect x="245" y="162" width="28" height="58" rx="3" fill="#06b6d4" />

      {/* Labels barras */}
      {["L1","L2","L3","L4","L5","L6"].map((l, i) => (
        <text key={l} x={44 + i * 43} y="228" fill="#555577" fontSize={9} fontFamily="monospace" textAnchor="middle">{l}</text>
      ))}
    </svg>
  );
}

// ── 2. Automatización en Excel ─────────────────────────────────
export function IlustracionExcel() {
  const colores = ["#5c3d1a","#3a2a12","#5c3d1a","#3a2a12","#5c3d1a"];
  const coloresG = ["#1a4d2e","#0a2a12","#1a4d2e","#0a2a12","#1a4d2e"];

  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#12122a" rx="10" />

      <text x="200" y="20" fill="#e5e5e5" fontSize={14} fontFamily="monospace" textAnchor="middle" fontWeight="600">
        Automatización Excel
      </text>

      {/* Tabla manual (izquierda) */}
      <rect x="10" y="32" width="108" height="140" rx="8" fill="#2a1a0a" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="64" y="50" fill="#f59e0b" fontSize={10} fontFamily="monospace" textAnchor="middle">Planilla Manual</text>
      {colores.map((c, i) => (
        <rect key={i} x="18" y={62 + i * 18} width="92" height="13" rx="2" fill={c} />
      ))}
      <text x="64" y="170" fill="#ef4444" fontSize={10} fontFamily="monospace" textAnchor="middle">sin formato</text>

      {/* Flecha izq → PQ */}
      <line x1="118" y1="102" x2="148" y2="102" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="148,98 156,102 148,106" fill="#f59e0b" />

      {/* Power Query */}
      <rect x="156" y="80" width="88" height="44" rx="8" fill="#1a4d2e" stroke="#22c55e" strokeWidth="2" />
      <text x="200" y="98" fill="#22c55e" fontSize={11} fontFamily="monospace" textAnchor="middle" fontWeight="700">Power Query</text>
      <text x="200" y="114" fill="#22c55e" fontSize={10} fontFamily="monospace" textAnchor="middle">M Transform</text>

      {/* Flecha PQ → derecha */}
      <line x1="244" y1="102" x2="274" y2="102" stroke="#22c55e" strokeWidth="2" />
      <polygon points="274,98 282,102 274,106" fill="#22c55e" />

      {/* Tabla automatizada (derecha) */}
      <rect x="282" y="32" width="108" height="140" rx="8" fill="#0a2a12" stroke="#22c55e" strokeWidth="1.5" />
      <text x="336" y="50" fill="#22c55e" fontSize={10} fontFamily="monospace" textAnchor="middle">Reporte Auto</text>
      {/* Header */}
      <rect x="290" y="56" width="92" height="13" rx="2" fill="#22c55e" />
      <text x="336" y="66" fill="#0a2a12" fontSize={8} fontFamily="monospace" textAnchor="middle">Fecha · Prod · KPI</text>
      {coloresG.map((c, i) => (
        <rect key={i} x="290" y={73 + i * 16} width="92" height="11" rx="2" fill={c} />
      ))}
      <text x="336" y="170" fill="#22c55e" fontSize={10} fontFamily="monospace" textAnchor="middle">KPIs automáticos</text>

      {/* VBA badge */}
      <rect x="145" y="195" width="110" height="30" rx="15" fill="#1e3a5f" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="200" y="215" fill="#4a9eed" fontSize={12} fontFamily="monospace" textAnchor="middle" fontWeight="600">VBA + Macros</text>
    </svg>
  );
}

// ── 3. Modelado y Consultas SQL ────────────────────────────────
export function IlustracionSQL() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#12122a" rx="10" />

      <text x="200" y="20" fill="#e5e5e5" fontSize={14} fontFamily="monospace" textAnchor="middle" fontWeight="600">
        SQL Avanzado
      </text>

      {/* Tabla ventas */}
      <rect x="10" y="32" width="150" height="110" rx="8" fill="#1e3a5f" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="85" y="50" fill="#4a9eed" fontSize={12} fontFamily="monospace" textAnchor="middle" fontWeight="700">ventas</text>
      <line x1="18" y1="56" x2="152" y2="56" stroke="#4a9eed" strokeWidth="0.5" strokeOpacity="0.5" />
      {[
        ["id_venta", "INT PK"],
        ["fecha", "DATE"],
        ["monto", "DECIMAL"],
        ["id_cliente", "INT FK"],
      ].map(([col, tipo], i) => (
        <g key={col}>
          <text x="22" y={72 + i * 18} fill={tipo === "INT FK" ? "#f59e0b" : "#a0a0a0"} fontSize={10} fontFamily="monospace">{col}</text>
          <text x="148" y={72 + i * 18} fill={tipo === "INT FK" ? "#f59e0b" : "#666688"} fontSize={10} fontFamily="monospace" textAnchor="end">{tipo}</text>
        </g>
      ))}

      {/* JOIN arrow */}
      <line x1="160" y1="88" x2="240" y2="88" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="240,84 248,88 240,92" fill="#f59e0b" />
      <text x="200" y="80" fill="#f59e0b" fontSize={10} fontFamily="monospace" textAnchor="middle" fontWeight="700">INNER JOIN</text>

      {/* Tabla clientes */}
      <rect x="248" y="32" width="142" height="110" rx="8" fill="#1a4d2e" stroke="#22c55e" strokeWidth="1.5" />
      <text x="319" y="50" fill="#22c55e" fontSize={12} fontFamily="monospace" textAnchor="middle" fontWeight="700">clientes</text>
      <line x1="256" y1="56" x2="382" y2="56" stroke="#22c55e" strokeWidth="0.5" strokeOpacity="0.5" />
      {[
        ["id_cliente", "INT PK"],
        ["nombre", "VARCHAR"],
        ["region", "VARCHAR"],
        ["segmento", "VARCHAR"],
      ].map(([col, tipo], i) => (
        <g key={col}>
          <text x="258" y={72 + i * 18} fill={tipo === "INT PK" ? "#f59e0b" : "#a0a0a0"} fontSize={10} fontFamily="monospace">{col}</text>
          <text x="382" y={72 + i * 18} fill={tipo === "INT PK" ? "#f59e0b" : "#666688"} fontSize={10} fontFamily="monospace" textAnchor="end">{tipo}</text>
        </g>
      ))}

      {/* Flecha hacia resultado */}
      <line x1="200" y1="142" x2="200" y2="162" stroke="#8b5cf6" strokeWidth="2" />
      <polygon points="196,162 200,170 204,162" fill="#8b5cf6" />

      {/* Resultado */}
      <rect x="30" y="170" width="340" height="58" rx="8" fill="#1a1a2e" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="48" y="186" fill="#8b5cf6" fontSize={10} fontFamily="monospace">Resultado: CTE + Subquery + Window</text>
      <text x="48" y="202" fill="#666688" fontSize={10} fontFamily="monospace">nombre  │  region  │  total_ventas  │  rank</text>
      <text x="48" y="218" fill="#22c55e" fontSize={10} fontFamily="monospace">Perez   │  NOA     │  $184.200      │   1</text>
    </svg>
  );
}

// ── 4. KPIs de Producción ──────────────────────────────────────
export function IlustracionKPIs() {
  // Arco del OEE: 84.2% sobre un círculo de r=60
  const r = 60;
  const cx = 100;
  const cy = 118;
  const pct = 0.842;
  const angle = pct * 2 * Math.PI - Math.PI / 2;
  const x1 = cx + r * Math.cos(-Math.PI / 2);
  const y1 = cy + r * Math.sin(-Math.PI / 2);
  const x2 = cx + r * Math.cos(angle);
  const y2 = cy + r * Math.sin(angle);
  const largeArc = pct > 0.5 ? 1 : 0;

  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#12122a" rx="10" />

      <text x="200" y="20" fill="#e5e5e5" fontSize={14} fontFamily="monospace" textAnchor="middle" fontWeight="600">
        KPIs de Producción
      </text>

      {/* OEE ring */}
      {/* Track */}
      <circle cx={cx} cy={cy} r={r} fill="#1a4d2e" stroke="#1a4d2e" strokeWidth="1" />
      {/* Arco de progreso */}
      <path
        d={`M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`}
        fill="none" stroke="#22c55e" strokeWidth="10" strokeLinecap="round"
      />
      {/* Inner circle */}
      <circle cx={cx} cy={cy} r={r - 14} fill="#12122a" />
      <text x={cx} y={cx + 6} fill="#a0a0a0" fontSize={12} fontFamily="monospace" textAnchor="middle">OEE</text>
      <text x={cx} y={cx + 26} fill="#22c55e" fontSize={18} fontFamily="monospace" textAnchor="middle" fontWeight="700">84.2%</text>

      {/* MTBF */}
      <rect x="188" y="32" width="200" height="68" rx="8" fill="#1e3a5f" stroke="#4a9eed" strokeWidth="1.5" />
      <text x="200" y="52" fill="#a0a0a0" fontSize={10} fontFamily="monospace">Tiempo medio entre fallas</text>
      <text x="200" y="52" fill="#a0a0a0" fontSize={10} fontFamily="monospace" />
      <text x="200" y="68" fill="#4a9eed" fontSize={11} fontFamily="monospace" fontWeight="700">MTBF</text>
      <text x="348" y="80" fill="#4a9eed" fontSize={22} fontFamily="monospace" fontWeight="700" textAnchor="end">142 hs</text>
      <text x="200" y="92" fill="#555577" fontSize={10} fontFamily="monospace">Tiempo entre paros no planificados</text>

      {/* MTTR */}
      <rect x="188" y="110" width="200" height="68" rx="8" fill="#2d1b69" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="200" y="130" fill="#a0a0a0" fontSize={10} fontFamily="monospace">Tiempo medio de reparación</text>
      <text x="200" y="146" fill="#8b5cf6" fontSize={11} fontFamily="monospace" fontWeight="700">MTTR</text>
      <text x="348" y="158" fill="#8b5cf6" fontSize={22} fontFamily="monospace" fontWeight="700" textAnchor="end">3.8 hs</text>
      <text x="200" y="170" fill="#555577" fontSize={10} fontFamily="monospace">Velocidad de respuesta de mantenimiento</text>

      {/* Disponibilidad */}
      <rect x="10" y="192" width="186" height="40" rx="8" fill="#1a4d4d" stroke="#06b6d4" strokeWidth="1.5" />
      <text x="30" y="208" fill="#a0a0a0" fontSize={10} fontFamily="monospace">Disponibilidad</text>
      <text x="178" y="224" fill="#06b6d4" fontSize={16} fontFamily="monospace" fontWeight="700" textAnchor="end">91.5%</text>

      {/* Rendimiento */}
      <rect x="206" y="192" width="182" height="40" rx="8" fill="#3a1a1a" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="226" y="208" fill="#a0a0a0" fontSize={10} fontFamily="monospace">Rendimiento</text>
      <text x="378" y="224" fill="#f59e0b" fontSize={16} fontFamily="monospace" fontWeight="700" textAnchor="end">92.1%</text>
    </svg>
  );
}

// ── 5. Integración de datos PLC ────────────────────────────────
export function IlustracionPLC() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#12122a" rx="10" />

      <text x="200" y="20" fill="#e5e5e5" fontSize={14} fontFamily="monospace" textAnchor="middle" fontWeight="600">
        Integración PLC → BI
      </text>

      {/* PLC */}
      <rect x="10" y="38" width="90" height="108" rx="8" fill="#2a1a0a" stroke="#f59e0b" strokeWidth="2" />
      <text x="55" y="58" fill="#f59e0b" fontSize={14} fontFamily="monospace" textAnchor="middle" fontWeight="700">PLC</text>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="18" y={66 + i * 16} width="74" height="10" rx="2" fill={i % 2 === 0 ? "#5c3d1a" : "#3a2a12"} />
      ))}
      <text x="55" y="158" fill="#a0a0a0" fontSize={9} fontFamily="monospace" textAnchor="middle">datos raw</text>

      {/* Flecha PLC → ETL */}
      <line x1="100" y1="92" x2="128" y2="92" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="128,88 136,92 128,96" fill="#f59e0b" />
      <text x="118" y="108" fill="#f59e0b" fontSize={9} fontFamily="monospace" textAnchor="middle">extrae</text>

      {/* ETL */}
      <rect x="136" y="38" width="128" height="108" rx="8" fill="#2d1b69" stroke="#8b5cf6" strokeWidth="2" />
      <text x="200" y="60" fill="#8b5cf6" fontSize={14} fontFamily="monospace" textAnchor="middle" fontWeight="700">ETL Pipeline</text>
      <text x="200" y="80" fill="#a0a0a0" fontSize={10} fontFamily="monospace" textAnchor="middle">SQL + .NET</text>
      <text x="200" y="96" fill="#a0a0a0" fontSize={10} fontFamily="monospace" textAnchor="middle">Limpieza</text>
      <text x="200" y="112" fill="#a0a0a0" fontSize={10} fontFamily="monospace" textAnchor="middle">Normalización</text>
      <text x="200" y="128" fill="#a0a0a0" fontSize={10} fontFamily="monospace" textAnchor="middle">Carga incremental</text>

      {/* Flecha ETL → Dashboard */}
      <line x1="264" y1="92" x2="292" y2="92" stroke="#8b5cf6" strokeWidth="2" />
      <polygon points="292,88 300,92 292,96" fill="#8b5cf6" />
      <text x="282" y="108" fill="#8b5cf6" fontSize={9} fontFamily="monospace" textAnchor="middle">carga</text>

      {/* Dashboard */}
      <rect x="300" y="38" width="90" height="108" rx="8" fill="#1e3a5f" stroke="#4a9eed" strokeWidth="2" />
      <text x="345" y="58" fill="#4a9eed" fontSize={12} fontFamily="monospace" textAnchor="middle" fontWeight="700">Power BI</text>
      <rect x="308" y="66" width="74" height="10" rx="2" fill="#4a9eed" />
      <rect x="308" y="82" width="52" height="10" rx="2" fill="#8b5cf6" />
      <rect x="308" y="98" width="62" height="10" rx="2" fill="#22c55e" />
      <rect x="308" y="114" width="40" height="10" rx="2" fill="#f59e0b" />
      <text x="345" y="154" fill="#a0a0a0" fontSize={9} fontFamily="monospace" textAnchor="middle">Dashboard</text>

      {/* DB centralizada */}
      <rect x="30" y="162" width="340" height="60" rx="8" fill="#1a1a2e" stroke="#333355" strokeWidth="1" />
      <text x="200" y="180" fill="#a0a0a0" fontSize={11} fontFamily="monospace" textAnchor="middle">Base de datos centralizada</text>
      <text x="90" y="200" fill="#4a9eed" fontSize={10} fontFamily="monospace" textAnchor="middle">Histórico</text>
      <text x="200" y="200" fill="#8b5cf6" fontSize={10} fontFamily="monospace" textAnchor="middle">Tiempo real</text>
      <text x="310" y="200" fill="#22c55e" fontSize={10} fontFamily="monospace" textAnchor="middle">KPIs</text>
      <line x1="140" y1="194" x2="140" y2="206" stroke="#333355" strokeWidth="1" />
      <line x1="260" y1="194" x2="260" y2="206" stroke="#333355" strokeWidth="1" />
      <text x="200" y="216" fill="#555577" fontSize={9} fontFamily="monospace" textAnchor="middle">Producción · Compras · Mantenimiento</text>
    </svg>
  );
}

// ── 6. Propuestas y Consultoría BI ─────────────────────────────
export function IlustracionConsultoria() {
  const fases = [
    { n: "1", titulo: "Diagnóstico", desc1: "Mapeo de fuentes", desc2: "y gaps de datos", color: "#4a9eed", bg: "#1e3a5f", x: 10 },
    { n: "2", titulo: "Diseño",      desc1: "KPIs + modelo", desc2: "de datos",         color: "#8b5cf6", bg: "#2d1b69", x: 145 },
    { n: "3", titulo: "Implementar", desc1: "Excel · SQL",    desc2: "Power BI",          color: "#22c55e", bg: "#1a4d2e", x: 270 },
  ];

  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#12122a" rx="10" />

      <text x="200" y="20" fill="#e5e5e5" fontSize={14} fontFamily="monospace" textAnchor="middle" fontWeight="600">
        Roadmap de Consultoría
      </text>

      {/* Fases 1-3 */}
      {fases.map((f, i) => (
        <g key={f.n}>
          <rect x={f.x} y="30" width={i === 1 ? 115 : 120} height="100" rx="8" fill={f.bg} stroke={f.color} strokeWidth="2" />
          {/* Número */}
          <circle cx={f.x + 16} cy={46} r={10} fill={f.color} />
          <text x={f.x + 16} y={50} fill="#0a0a1a" fontSize={11} fontFamily="monospace" textAnchor="middle" fontWeight="700">{f.n}</text>
          <text x={f.x + 16 + (i === 1 ? 41 : 44)} y={50} fill={f.color} fontSize={11} fontFamily="monospace" fontWeight="700">{f.titulo}</text>
          <text x={f.x + 12} y={76} fill="#a0a0a0" fontSize={10} fontFamily="monospace">{f.desc1}</text>
          <text x={f.x + 12} y={92} fill="#a0a0a0" fontSize={10} fontFamily="monospace">{f.desc2}</text>
        </g>
      ))}

      {/* Flechas entre fases */}
      <polygon points="133,78 143,82 133,86" fill="#555577" />
      <polygon points="258,78 268,82 258,86" fill="#555577" />

      {/* Fase 4 — Evolución continua */}
      <rect x="10" y="148" width="380" height="58" rx="8" fill="#1a4d4d" stroke="#06b6d4" strokeWidth="1.5" />
      <circle cx={28} cy={165} r={10} fill="#06b6d4" />
      <text x={28} y={169} fill="#0a0a1a" fontSize={11} fontFamily="monospace" textAnchor="middle" fontWeight="700">4</text>
      <text x={48} y={169} fill="#06b6d4" fontSize={12} fontFamily="monospace" fontWeight="700">Evolución continua</text>
      <text x={28} y={192} fill="#a0a0a0" fontSize={10} fontFamily="monospace">Monitoreo  ·  Expansión de módulos  ·  Escalado BI</text>

      {/* Nota */}
      <text x="200" y="224" fill="#444466" fontSize={10} fontFamily="monospace" textAnchor="middle">
        Adaptado a cada cliente — sin sobreingeniería
      </text>
    </svg>
  );
}
