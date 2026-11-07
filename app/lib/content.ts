/**
 * Contenido del sitio BI Insights, centralizado.
 * Fuente de verdad: ../specs (fase-01 fundamentos, fase-02 catálogo,
 * fase-03 casos, fase-04 verticales).
 *
 * Reglas de redacción (SPEC.md):
 *  - Voz de empresa (decisión 2026-11-07): primera persona del plural
 *    ("implementamos"); impersonal para el sistema. Nunca "yo".
 *  - Nunca "Excel" ni "planillas": "hojas de cálculo".
 *  - Casos anonimizados. Sin precios.
 */

export const site = {
  name: "BI Insights",
  url: "https://www.biinsights.com.ar",
  tagline: "Tus datos, trabajando.",
  description:
    "Implementamos sistemas de datos que reemplazan hojas de cálculo y cargas manuales por información en tiempo real, sobre infraestructura que es del cliente. Corrientes, Argentina.",
  email: "contacto@biinsights.com.ar",
  linkedin: "https://linkedin.com/in/gaston-raimundo-3a287a213/",
  location: "Corrientes, Argentina",
  founder: "Gastón P. Raimundo",
} as const;

export type ServiceId = "S1" | "S2" | "S3" | "S4" | "S5";
export type CaseId = "C1" | "C2" | "C3" | "C4";

export interface Service {
  id: ServiceId;
  slug: string;
  href: string;
  title: string;
  /** Texto corto para tarjetas. */
  short: string;
  tag?: string;
  hero: { title: string; text: string };
  forWho: string;
  symptoms: { title: string; text: string }[];
  deliverables: string[];
  /** Diagrama simple de flujo (de izquierda a derecha). */
  flow: string[];
  flowNote: string;
  /** Detalle técnico plegable. */
  technical: string[];
  caseId?: CaseId;
  extra?: { title: string; text: string; href?: string; cta?: string };
  limits?: string;
}

export const services: Service[] = [
  {
    id: "S1",
    slug: "faktori",
    href: "/faktori",
    tag: "FAKTORI",
    title: "Monitoreo de planta en tiempo real",
    short:
      "PLCs y sensores conectados a un tablero web, una app móvil y pantallas de planta, con alertas automáticas.",
    hero: {
      title: "Ver lo que pasa en la planta mientras pasa.",
      text: "Faktori conecta los PLCs y sensores que ya tenés con un tablero web, una app móvil y pantallas de planta. La gerencia deja de esperar el informe del día siguiente.",
    },
    forWho:
      "Gerencias de producción y mantenimiento con PLCs y sensores cuyos datos hoy no ve nadie hasta que llega el informe.",
    symptoms: [
      {
        title: "Los datos están, pero nadie los ve",
        text: "Los equipos registran todo, pero la información queda en la pantalla de la máquina o en una hoja de cálculo que se arma a fin de turno.",
      },
      {
        title: "Las alertas llegan tarde",
        text: "Una temperatura fuera de rango o una línea sin datos se descubren cuando el problema ya costó producción.",
      },
      {
        title: "Cada informe es trabajo manual",
        text: "Alguien junta datos de varias fuentes para armar el reporte. Si falta, el reporte no sale.",
      },
    ],
    deliverables: [
      "Ingesta automática de PLCs y sensores (OPC UA / MQTT).",
      "Tablero web y app móvil con KPIs, telemetría en vivo y estado de líneas.",
      "Alertas automáticas: temperatura, vibración, falta de datos.",
      "Modo kiosco para pantallas de planta.",
      "Histórico para reportes y análisis.",
    ],
    flow: ["PLC / OPC UA", "Kafka", "Spark", "Cassandra", "App y tablero"],
    flowNote:
      "El sistema lee los equipos, procesa los datos en tiempo real y los muestra a cada rol. No escribe nada en los PLCs.",
    technical: [
      "Ingesta: OPC UA y MQTT hacia Apache Kafka.",
      "Procesamiento: Spark Structured Streaming (normalización, KPIs, deduplicación).",
      "Almacenamiento: Cassandra para el estado actual y Parquet para el histórico.",
      "Acceso: API REST y WebSocket; app web y móvil (React Native).",
      "Despliegue on-premise o híbrido con Docker y Kubernetes.",
    ],
    caseId: "C3",
    limits:
      "Faktori es de visibilidad, no de control: no escribe setpoints ni reemplaza un SCADA. Lee sus datos y los lleva a la gerencia.",
  },
  {
    id: "S2",
    slug: "programacion-produccion",
    href: "/soluciones/programacion-produccion",
    title: "Programación de producción",
    short:
      "Una aplicación con base de datos reemplaza las hojas de cálculo de programación: teórico vs. real, histórico e inventario.",
    hero: {
      title: "La programación de producción, fuera de las hojas de cálculo.",
      text: "Llevamos la lógica de tus hojas de programación a una aplicación con base de datos: misma forma de trabajar, sin fórmulas rotas ni versiones por mail.",
    },
    forWho:
      "Gerencias de producción que planifican en hojas de cálculo y comparan a mano lo teórico contra lo real.",
    symptoms: [
      {
        title: "Fórmulas frágiles",
        text: "Una celda mal copiada cambia el plan entero y nadie sabe desde cuándo.",
      },
      {
        title: "Versiones por mail",
        text: "Cada área trabaja sobre su copia. La versión correcta es la que tiene la persona que no está.",
      },
      {
        title: "Sin histórico confiable",
        text: "Comparar este mes con el mismo mes del año pasado implica buscar archivos y rearmar cálculos.",
      },
    ],
    deliverables: [
      "Aplicación web con base de datos que reemplaza las hojas de cálculo de programación.",
      "Motor de fórmulas configurable: la lógica de la hoja, auditada y documentada.",
      "Teórico vs. real, tablero y reportes con gráficos.",
      "Análisis histórico, inventario e importación por CSV.",
      "Usuarios con roles y autogestión de contraseñas.",
      "Manual de usuario y despliegue en tus servidores.",
    ],
    flow: ["Carga e importación CSV", "Motor de fórmulas", "Base de datos", "Tablero y reportes"],
    flowNote:
      "Los datos se cargan una vez; el sistema calcula el plan, guarda el histórico y arma los reportes.",
    technical: [
      "Aplicación web con base de datos relacional (SQL Server o PostgreSQL).",
      "Motor de fórmulas parametrizable, con pruebas sobre los cálculos originales.",
      "Despliegue en los servidores del cliente (por ejemplo IIS + SQL Server).",
      "Roles y permisos por usuario; auditoría de cambios.",
    ],
    caseId: "C1",
  },
  {
    id: "S3",
    slug: "captura-datos",
    href: "/soluciones/captura-datos",
    title: "Captura de datos de planta",
    short:
      "Un servicio desatendido toma los registros de los equipos y los entrega por minuto al ERP, sin carga manual.",
    hero: {
      title: "Los tiempos de cada máquina, sin cargarlos a mano.",
      text: "Implementamos un servicio que lee los registros que tus equipos ya guardan y genera los datos de proceso por máquina y por minuto, en el formato que pide tu ERP u OEE.",
    },
    forWho:
      "Plantas donde los equipos ya registran eventos en una base local, pero esos datos no llegan al ERP u OEE o se pasan a mano.",
    symptoms: [
      {
        title: "Carga manual",
        text: "Alguien transcribe tiempos de proceso desde una pantalla o un papel. Los errores aparecen semanas después.",
      },
      {
        title: "Datos por día, no por minuto",
        text: "El ERP recibe un total diario. No se puede saber cuánto tiempo estuvo parada cada máquina ni por qué.",
      },
      {
        title: "Servidores sin internet",
        text: "La red de planta está aislada y las soluciones en la nube no son una opción.",
      },
    ],
    deliverables: [
      "Servicio desatendido que lee la base de los equipos (por ejemplo SQL Server).",
      "Datos de proceso por máquina y por minuto, en el formato del ERP u OEE.",
      "Funcionamiento 100 % offline, reinicio automático y registro de actividad.",
      "Runbook de puesta en marcha y de operación.",
    ],
    flow: ["Base de los equipos", "Servicio de captura", "Archivo o tabla de proceso", "ERP / OEE"],
    flowNote:
      "El servicio consulta la base cada minuto, arma el registro por fase de proceso y lo deja donde el ERP lo toma.",
    technical: [
      "Lectura directa de SQL Server, sin tocar la configuración de los equipos.",
      "Servicio en contenedor Docker con reinicio automático y tarea programada del sistema operativo.",
      "Instalación sin internet: dependencias empaquetadas y procedimiento documentado.",
      "Pruebas automáticas y validación contra una base de muestra.",
    ],
    caseId: "C2",
    extra: {
      title: "La puerta de entrada a Faktori",
      text: "Con los datos de proceso ya capturados, el paso siguiente es verlos en tiempo real: tablero, alertas y pantallas de planta.",
      href: "/faktori",
      cta: "Conocer Faktori",
    },
  },
  {
    id: "S4",
    slug: "gestion-kpis",
    href: "/soluciones/gestion-kpis",
    title: "Gestión de KPIs",
    short:
      "Carga diaria de indicadores, cumplimiento del plan y tareas demoradas a la vista, por área o por sucursal.",
    hero: {
      title: "El plan de gestión, cumplido a la vista de todos.",
      text: "Implementamos una web donde cada área carga sus indicadores del día y la dirección ve en tiempo real cuánto se cumplió, qué está demorado y por qué.",
    },
    forWho:
      "Direcciones y mandos medios que implementan un sistema de gestión (MOS, lean, tablero de KPIs) y lo siguen en presentaciones y hojas de cálculo.",
    symptoms: [
      {
        title: "El plan vive en un documento",
        text: "Se define con cuidado y después nadie lo vuelve a abrir hasta la próxima reunión.",
      },
      {
        title: "Las demoras se descubren tarde",
        text: "Una tarea vencida aparece cuando ya afectó al resto del plan.",
      },
      {
        title: "Cada área reporta distinto",
        text: "Los números llegan en formatos diferentes y consolidarlos lleva días.",
      },
    ],
    deliverables: [
      "Web de carga diaria de KPIs por criterio (por ejemplo, los 8 criterios MOS).",
      "Porcentaje de cumplimiento del plan en tiempo real.",
      "Tareas cumplidas y demoradas, con justificación.",
      "Avance contra el plazo del plan.",
      "Vistas por rol: dirección, jefes de área.",
    ],
    flow: ["Carga diaria por área", "Base de KPIs", "Cálculo de cumplimiento", "Vista por rol"],
    flowNote:
      "Cada responsable carga lo suyo; el sistema calcula el avance y muestra a cada rol lo que necesita.",
    technical: [
      "Aplicación web con base de datos y autenticación por rol.",
      "Criterios, metas y plazos configurables.",
      "Exportación de reportes para reuniones de seguimiento.",
    ],
    caseId: "C4",
    extra: {
      title: "También para cadenas multisucursal",
      text: "La misma base sirve para seguir ventas, ticket promedio, quiebres de stock y objetivos por sucursal, con ranking y alertas.",
      href: "/retail",
      cta: "Ver retail y distribución",
    },
  },
  {
    id: "S5",
    slug: "plataforma-datos",
    href: "/soluciones/plataforma-datos",
    title: "Plataforma de datos distribuida",
    short:
      "Pipelines con Kafka, Spark y Cassandra, observabilidad con Grafana y despliegue on-premise o en Kubernetes.",
    hero: {
      title: "Procesar más datos, más rápido, sin atarte a un proveedor.",
      text: "Diseñamos e implementamos plataformas de datos open-source, en tus servidores o en un esquema híbrido, y dejamos a tu equipo en condiciones de operarlas.",
    },
    forWho:
      "Empresas tecnológicas o industriales que necesitan procesar volumen o eventos en tiempo real y no quieren depender de un proveedor cloud.",
    symptoms: [
      {
        title: "Datos dispersos",
        text: "Cada sistema guarda lo suyo y cruzar información requiere exportaciones manuales.",
      },
      {
        title: "Procesos batch nocturnos",
        text: "Los datos de hoy se ven mañana, y si el proceso falla de noche se ven pasado mañana.",
      },
      {
        title: "Costos cloud que crecen",
        text: "La factura sube con cada nuevo caso de uso y migrar se vuelve cada vez más caro.",
      },
    ],
    deliverables: [
      "Diseño e implementación de pipelines: Kafka, Spark (batch y streaming), Cassandra, Parquet / Delta.",
      "Orquestación con Airflow.",
      "Observabilidad con Prometheus y Grafana.",
      "Despliegue on-premise o híbrido: Docker, Kubernetes (k3s), GitOps.",
      "Documentación de arquitectura (ADR) y traspaso al equipo.",
    ],
    flow: ["Fuentes", "Kafka", "Spark", "Cassandra / Parquet", "APIs y tableros"],
    flowNote:
      "Arquitectura por capas: cada pieza se puede escalar o reemplazar sin rehacer el resto.",
    technical: [
      "Streaming: Apache Kafka y Spark Structured Streaming.",
      "Almacenamiento: Cassandra (baja latencia) y Parquet / Delta Lake (histórico).",
      "Orquestación: Apache Airflow.",
      "Infraestructura: Docker, Kubernetes (k3s), GitOps; Prometheus y Grafana.",
      "Formato de trabajo: proyecto cerrado o acompañamiento al equipo interno.",
    ],
    caseId: "C3",
    extra: {
      title: "Un laboratorio propio",
      text: "Probamos cada arquitectura en nuestro laboratorio (Proxmox, Docker, Kubernetes, Kafka, Spark, Grafana) antes de llevarla a un cliente.",
      href: "/tecnologia",
      cta: "Ver la página para empresas de tecnología",
    },
  },
];

/** Funciones de Faktori (página /faktori y ficha de 2 páginas). */
export const faktoriFeatures = [
  {
    title: "Tablero web",
    text: "KPIs, telemetría en vivo y estado de cada línea para la gerencia y los supervisores.",
  },
  {
    title: "App móvil",
    text: "La misma información en el teléfono, con notificaciones cuando algo sale de rango.",
  },
  {
    title: "Modo kiosco",
    text: "Pantallas de planta que muestran el estado de las líneas sin que nadie tenga que operar nada.",
  },
  {
    title: "Alertas automáticas",
    text: "Temperatura, vibración o falta de datos: el sistema avisa antes de que el problema cueste producción.",
  },
  {
    title: "Histórico",
    text: "Cada dato queda guardado para reportes, análisis de tendencias y auditoría.",
  },
  {
    title: "En tu infraestructura",
    text: "Stack open-source en tus servidores. El código y los datos quedan en tus manos.",
  },
];

export const serviceById = (id: ServiceId) =>
  services.find((s) => s.id === id) as Service;
export const solutionServices = services.filter((s) => s.id !== "S1");

export interface Case {
  id: CaseId;
  service: ServiceId;
  where: string;
  title: string;
  short: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
}

// Casos anonimizados (fase 3 §3.1). Decisión 2026-11-07: todos los casos se
// presentan como producto, sin mencionar su estado (producción, piloto, demo).
export const cases: Case[] = [
  {
    id: "C1",
    service: "S2",
    where: "Planta frutícola multinacional · Corrientes",
    title: "Programación de producción",
    short: "De hojas de cálculo a una aplicación en los servidores del cliente.",
    context:
      "Planta de una empresa multinacional del rubro frutícola. La gerencia de producción programaba en hojas de cálculo con años de lógica acumulada.",
    challenge:
      "Fórmulas difíciles de auditar, comparación manual entre lo programado y lo producido y ningún histórico confiable.",
    solution:
      "Una aplicación web con base de datos que replica la lógica de programación en un motor de fórmulas configurable, con teórico vs. real, inventario, análisis histórico e importación por CSV.",
    result:
      "La programación pasa a tener una sola fuente de datos, con teórico vs. real, histórico e inventario en la misma aplicación, instalada en los servidores del cliente.",
    stack: ["Aplicación web", "SQL Server", "IIS", "Motor de fórmulas"],
  },
  {
    id: "C2",
    service: "S3",
    where: "Línea de envasado · Corrientes",
    title: "Captura automática de tiempos de proceso",
    short: "Datos por máquina y por minuto para el ERP, sin internet en planta.",
    context:
      "Línea de envasado en la misma planta. Los equipos registran cada evento en una base local que nadie consultaba.",
    challenge:
      "Los tiempos de proceso se cargaban a mano y llegaban al ERP como totales. El servidor de planta no tiene internet.",
    solution:
      "Un servicio desatendido que lee la base de los equipos cada minuto y genera los datos de proceso por máquina en el formato que pide el ERP. Se instala sin conexión y se reinicia solo.",
    result:
      "El total cargado a mano se reemplaza por un registro automático por máquina y por minuto, sin depender de internet.",
    stack: ["SQL Server", "Python", "Docker", "Instalación offline"],
  },
  {
    id: "C3",
    service: "S1",
    where: "Planta frutícola · EE.UU.",
    title: "Monitoreo en tiempo real",
    short: "Pipeline de datos industriales y app con alertas y modo kiosco.",
    context:
      "Planta frutícola en Estados Unidos con PLCs y sensores en varias líneas.",
    challenge:
      "Dar a supervisores y gerencia una vista en vivo del estado de las líneas sin reemplazar los equipos ni el sistema de control existente.",
    solution:
      "Pipeline OPC UA → Kafka → Spark → Cassandra, con histórico en Parquet, y una app web y móvil con KPIs, alertas automáticas y modo kiosco para pantallas de planta.",
    result:
      "La operación se sigue en tiempo real desde la planta, la oficina o el teléfono, con alertas cuando algo sale de rango.",
    stack: ["OPC UA", "Kafka", "Spark", "Cassandra", "React Native"],
  },
  {
    id: "C4",
    service: "S4",
    where: "Planta frutícola · EE.UU.",
    title: "Seguimiento de un plan de gestión",
    short: "KPIs diarios, cumplimiento y demoras de un plan de 180 días.",
    context:
      "La planta implementa un sistema de gestión operativa (MOS) con un plan de 180 días y 8 criterios.",
    challenge:
      "Seguir el avance del plan sin depender de presentaciones y hojas de cálculo que se actualizan una vez por semana.",
    solution:
      "Una web de carga diaria de KPIs por criterio, con porcentaje de cumplimiento, tareas demoradas con justificación y avance contra el plazo.",
    result:
      "Dirección y jefes de área ven el mismo número, el mismo día, y las demoras quedan explicadas.",
    stack: ["Aplicación web", "Base de datos", "Vistas por rol"],
  },
];

export const caseById = (id: CaseId) => cases.find((c) => c.id === id) as Case;

export const pillars = [
  {
    n: "01",
    title: "Nacido en la planta",
    text: "Cada solución resuelve un problema concreto de una operación industrial.",
  },
  {
    n: "02",
    title: "Sin vendor lock-in",
    text: "Stack open-source. Código, datos e infraestructura quedan en tus manos.",
  },
  {
    n: "03",
    title: "Por fases verificables",
    text: "Arrancamos chico y cerramos cada fase con entregables antes de seguir.",
  },
];

export const workSteps = [
  {
    n: "1",
    title: "Diagnóstico",
    text: "Relevamos procesos, datos y sistemas. Entregamos un mapa de lo que hay y una propuesta de por dónde empezar.",
  },
  {
    n: "2",
    title: "Implementación",
    text: "Ponemos en marcha la solución elegida, a medida, en tus servidores y con tu equipo.",
  },
  {
    n: "3",
    title: "Evolución",
    text: "Mantenimiento, soporte y nuevas funciones a medida que la operación crece.",
  },
];

export type VerticalSlug = "industria" | "tecnologia" | "retail";

export interface Vertical {
  slug: VerticalSlug;
  href: string;
  title: string;
  navLabel: string;
  pain: string;
  short: string;
  hero: { eyebrow: string; title: string; text: string };
  audience: string;
  services: { id: ServiceId; text: string; label?: string }[];
  path?: { title: string; text: string }[];
  /** Preguntas frecuentes (se publican también como FAQPage). */
  faqs: { q: string; a: string }[];
  proof: { title: string; text: string };
  caseIds: CaseId[];
}

export const verticals: Vertical[] = [
  {
    slug: "industria",
    href: "/industria",
    title: "Industria",
    navLabel: "Industria",
    pain: "“Me entero tarde de lo que pasa en la planta.”",
    short:
      "Producción, mantenimiento y operaciones: programación, captura de datos, monitoreo y KPIs.",
    hero: {
      eyebrow: "INDUSTRIA",
      title: "Saber qué pasa en la planta hoy, no la semana que viene.",
      text: "Trabajamos con gerencias de producción, mantenimiento, calidad y operaciones de plantas de alimentos, bebidas, frutícolas, frigoríficas y farmacéuticas.",
    },
    audience:
      "Gerencias de producción, mantenimiento, calidad y operaciones.",
    services: [
      {
        id: "S2",
        text: "La programación sale de las hojas de cálculo y pasa a una aplicación con histórico.",
      },
      {
        id: "S3",
        text: "Los tiempos de cada máquina llegan solos al ERP, por minuto.",
      },
      {
        id: "S1",
        text: "Tablero, app y pantallas de planta con datos en vivo y alertas.",
      },
      {
        id: "S4",
        text: "El plan de gestión con su cumplimiento diario a la vista.",
      },
    ],
    path: [
      { title: "Diagnóstico", text: "Relevamiento de procesos, datos y equipos." },
      {
        title: "Programación o captura",
        text: "Un primer resultado visible, rápido y de bajo riesgo.",
      },
      { title: "Faktori", text: "Los datos de planta en tiempo real." },
      { title: "Gestión de KPIs", text: "El plan de gestión sobre esos datos." },
    ],
    faqs: [
      {
        q: "Ya tenemos SCADA. ¿Para qué sirve esto?",
        a: "Faktori no reemplaza al SCADA ni lo toca: lee sus datos y los lleva a la gerencia, al teléfono y a las pantallas de planta. El control sigue donde está.",
      },
      {
        q: "¿Hay que cambiar PLCs o comprar equipos nuevos?",
        a: "No. El sistema se conecta a los equipos que ya existen por OPC UA o MQTT, o lee la base de datos donde los equipos ya registran sus eventos.",
      },
      {
        q: "¿Funciona si el servidor de planta no tiene internet?",
        a: "Sí. Las soluciones se instalan sin conexión, con todas sus dependencias empaquetadas, y se reinician solas si el servidor se reinicia.",
      },
      {
        q: "¿De quién es lo que se desarrolla?",
        a: "Del cliente: código, datos, documentación e infraestructura. No hay licencias que renovar.",
      },
    ],
    proof: {
      title: "Casos en plantas de Argentina y EE.UU.",
      text: "Las cuatro soluciones industriales tienen un caso detrás, en Argentina y en Estados Unidos.",
    },
    caseIds: ["C1", "C2", "C3", "C4"],
  },
  {
    slug: "tecnologia",
    href: "/tecnologia",
    title: "Empresas de tecnología",
    navLabel: "Tecnología",
    pain: "“Necesitamos procesar más datos sin que el costo se dispare.”",
    short:
      "Diseño e implementación de plataformas de datos distribuidas, on-premise o híbridas.",
    hero: {
      eyebrow: "EMPRESAS DE TECNOLOGÍA",
      title: "Plataformas de datos que escalan sin que la cuenta cloud se dispare.",
      text: "Para CTOs y líderes de datos de empresas de software, fintech, logística o e-commerce que necesitan streaming, volumen y control sobre su infraestructura.",
    },
    audience:
      "CTOs y líderes de datos o plataforma de empresas de software, fintech, logística o e-commerce.",
    services: [
      {
        id: "S5",
        text: "Diseño e implementación de pipelines batch y streaming, observabilidad y despliegue en Kubernetes.",
      },
      {
        id: "S1",
        label: "Ejemplo construido",
        text: "Faktori es una instancia completa de esta arquitectura: de los sensores a la app, en tiempo real.",
      },
    ],
    path: [
      {
        title: "Proyecto cerrado",
        text: "Diseño, implementación y traspaso de una plataforma o un pipeline concreto.",
      },
      {
        title: "Acompañamiento",
        text: "Trabajo junto a tu equipo interno en decisiones de arquitectura e implementación.",
      },
    ],
    faqs: [
      {
        q: "¿Por qué on-premise y no un servicio administrado en la nube?",
        a: "No siempre conviene. En el diagnóstico comparamos costo, volumen y equipo disponible. Cuando el volumen es estable y alto, una plataforma propia u híbrida suele salir más barata y evita depender de un proveedor.",
      },
      {
        q: "¿Trabajan con nuestro equipo o por su cuenta?",
        a: "Las dos formas: como proyecto cerrado con traspaso al final, o acompañando a tu equipo interno en las decisiones de arquitectura y la implementación.",
      },
      {
        q: "¿Qué queda documentado al terminar?",
        a: "Las decisiones de arquitectura (ADR), los procedimientos de despliegue y operación, y el código en tu repositorio.",
      },
    ],
    proof: {
      title: "Arquitectura probada",
      text: "La arquitectura de monitoreo industrial y nuestro laboratorio propio son la prueba: cada decisión se valida antes de llevarla a un cliente.",
    },
    caseIds: ["C3"],
  },
  {
    slug: "retail",
    href: "/retail",
    title: "Retail y distribución",
    navLabel: "Retail y distribución",
    pain: "“Los números de todas las sucursales llegan tarde.”",
    short: "Ventas, stock y vencimientos consolidados, con KPIs y alertas por sucursal.",
    hero: {
      eyebrow: "RETAIL Y DISTRIBUCIÓN",
      title: "Toda la cadena en un solo número, todos los días.",
      text: "Para cadenas multisucursal y distribuidoras (farmacias, droguerías, supermercados regionales) donde cada sucursal reporta distinto y el consolidado llega tarde.",
    },
    audience:
      "Cadenas multisucursal y distribuidoras: farmacias, droguerías, supermercados regionales.",
    services: [
      {
        id: "S4",
        label: "KPIs por sucursal",
        text: "Ventas, ticket promedio, quiebres de stock y cumplimiento de objetivos, con ranking y alertas.",
      },
      {
        id: "S5",
        label: "Consolidación de datos",
        text: "Ventas, stock y vencimientos de todas las sucursales en una sola base, en tiempo real o casi real.",
      },
      {
        id: "S3",
        label: "Captura desde el punto de venta",
        text: "Los datos se toman del sistema de cada sucursal, sin cargas manuales.",
      },
    ],
    faqs: [
      {
        q: "¿Se integra con nuestro sistema de gestión?",
        a: "Depende del sistema. En el diagnóstico revisamos cómo guarda los datos y definimos la forma de leerlos. No prometemos una integración antes de conocerlo.",
      },
      {
        q: "¿Hay que cambiar el sistema de las sucursales?",
        a: "No. Los datos se toman del sistema que cada sucursal ya usa; el personal sigue trabajando igual.",
      },
      {
        q: "¿Por dónde se empieza?",
        a: "Por un diagnóstico y un primer indicador que toda la cadena necesite, por ejemplo ventas y quiebres de stock por sucursal. Sobre esa base se suman los demás.",
      },
    ],
    proof: {
      title: "La misma tecnología, otro rubro",
      text: "Usamos la misma base técnica de los casos industriales: captura automática, consolidación y KPIs en tiempo real. La integración con tu sistema de gestión se define en el diagnóstico.",
    },
    caseIds: ["C2", "C4"],
  },
];

export const verticalBySlug = (slug: VerticalSlug) =>
  verticals.find((v) => v.slug === slug) as Vertical;

export const nav = {
  soluciones: [
    { href: "/soluciones/programacion-produccion", label: "Programación de producción" },
    { href: "/soluciones/captura-datos", label: "Captura de datos de planta" },
    { href: "/soluciones/gestion-kpis", label: "Gestión de KPIs" },
    { href: "/soluciones/plataforma-datos", label: "Plataforma de datos distribuida" },
  ],
  industrias: verticals.map((v) => ({ href: v.href, label: v.navLabel })),
};

/**
 * Metadatos para buscadores (fase 9 §9.2). Decisión 2026-11-07: "Excel" y
 * "planillas" se permiten SOLO acá (meta description y keywords), nunca en el
 * texto visible ni en Open Graph (que se ve al compartir en redes).
 */
export const searchMeta: Record<string, { description: string; keywords: string[] }> = {
  "/": {
    description:
      "Implementamos sistemas que reemplazan Excel, hojas de cálculo y cargas manuales por información en tiempo real, sobre infraestructura del cliente. Corrientes, Argentina.",
    keywords: ["reemplazar Excel", "automatización de datos", "consultor de datos Corrientes", "sistemas de datos industria", "datos en tiempo real", "NEA"],
  },
  "/soluciones/programacion-produccion": {
    description:
      "Reemplazamos el Excel de programación de producción por una aplicación con base de datos: teórico vs. real, histórico e inventario, en tus servidores.",
    keywords: ["reemplazar Excel de producción", "planilla de producción", "software de programación de producción", "planificación de producción", "teórico vs real"],
  },
  "/soluciones/captura-datos": {
    description:
      "Captura automática de tiempos de máquina para el ERP u OEE, sin planillas ni carga manual en Excel, incluso con el servidor de planta sin internet.",
    keywords: ["captura automática de datos de producción", "tiempos de máquina", "OEE", "integración ERP", "planilla de producción"],
  },
  "/soluciones/gestion-kpis": {
    description:
      "Seguimiento diario de KPIs y del plan de gestión (MOS) en una web, en lugar de planillas de Excel y presentaciones.",
    keywords: ["seguimiento de KPIs", "tablero de indicadores", "MOS", "planilla de KPIs Excel", "cumplimiento del plan"],
  },
  "/industria": {
    description:
      "Programación de producción, captura de datos, monitoreo en tiempo real y KPIs para plantas que hoy dependen de Excel y planillas.",
    keywords: ["digitalización de planta", "reemplazar Excel en producción", "industria 4.0 pymes", "datos de producción"],
  },
  "/retail": {
    description:
      "KPIs por sucursal y consolidación de ventas, stock y vencimientos de toda la cadena, sin juntar planillas de Excel de cada sucursal.",
    keywords: ["KPIs por sucursal", "consolidación de ventas multisucursal", "planillas Excel sucursales", "cadenas de farmacias"],
  },
};
