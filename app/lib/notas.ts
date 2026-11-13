/**
 * Notas (fase 9 §9.3): artículos cortos en voz de empresa (plural), sin nombrar clientes.
 * Cada nota enlaza a su solución y termina con el CTA de diagnóstico.
 */
import type { ServiceId } from "./content";

export interface Nota {
  slug: string;
  title: string;
  description: string;
  date: string; // AAAA-MM-DD
  service: ServiceId;
  sections: { h?: string; p: string[]; list?: string[] }[];
}

export const notas: Nota[] = [
  {
    slug: "que-es-business-intelligence-pymes",
    title: "Qué es business intelligence y cuándo lo necesita una pyme",
    description:
      "Qué es business intelligence (BI), qué capas tiene un sistema de inteligencia de negocios y cinco señales de que una pyme industrial o de retail ya lo necesita.",
    date: "2026-11-13",
    service: "S4",
    sections: [
      {
        p: [
          "Business intelligence (BI), o inteligencia de negocios, es el conjunto de procesos y herramientas que convierten los datos que una empresa ya genera en información para decidir: indicadores, tableros de control y reportes que cada persona consulta sin tener que pedírselos a nadie.",
          "Durante años se asoció a grandes corporaciones con equipos de analistas. Hoy cualquier pyme genera suficientes datos (ventas, producción, stock, tiempos de máquina, costos) como para que el BI deje de ser un lujo y pase a ser la forma de no perder horas armando reportes a mano.",
        ],
      },
      {
        h: "Las cuatro capas de un sistema de BI",
        p: ["Un sistema de business intelligence completo tiene cuatro capas. Si falla una, fallan las de arriba:"],
        list: [
          "Captura: los datos se registran en su origen (ERP, equipos de planta, sistemas de venta), idealmente sin carga manual.",
          "Integración: las fuentes distintas se juntan y se limpian de forma automática, todos los días o en tiempo real.",
          "Modelo de datos: una base única, con definiciones acordadas para cada indicador, que guarda el histórico.",
          "Visualización: tableros, reportes y alertas por rol, desde el operario hasta la dirección.",
        ],
      },
      {
        h: "Por qué muchos proyectos de BI fracasan",
        p: [
          "La mayoría de los proyectos empiezan por la última capa: se elige una herramienta de visualización y se arma un tablero. Pero si los datos que lo alimentan siguen llegando por mail y se cargan a mano, el tablero muestra números atrasados o equivocados, y a los pocos meses nadie lo mira.",
          "Por eso en nuestros proyectos empezamos por la captura y la integración. El tablero es la parte más visible, pero no la más importante.",
        ],
      },
      {
        h: "Cinco señales de que tu pyme necesita BI",
        p: ["Estas son las situaciones que más vemos en los diagnósticos:"],
        list: [
          "Cerrar el mes lleva días de juntar archivos de distintas áreas.",
          "Dos áreas presentan el mismo indicador con números distintos.",
          "Para saber cómo viene la producción o las ventas de hoy hay que preguntarle a alguien.",
          "Comparar con el año anterior implica buscar archivos viejos y rehacer cálculos.",
          "Una o dos personas son las únicas que saben cómo se arma cada reporte.",
        ],
      },
      {
        h: "Por dónde empezar",
        p: [
          "No hace falta un proyecto enorme. Recomendamos elegir un proceso que duela (la programación de producción, los KPIs de un área, la consolidación de sucursales) y automatizarlo de punta a punta. Con un primer resultado visible es mucho más fácil decidir el paso siguiente.",
          "En nuestra página de business intelligence explicamos cómo trabajamos un proyecto completo, por fases.",
        ],
      },
    ],
  },
  {
    slug: "kpis-de-produccion-que-medir",
    title: "KPIs de producción: los indicadores que toda planta debería medir",
    description:
      "Los KPIs de producción más útiles para una planta industrial (cumplimiento del plan, OEE, paradas, rendimiento y calidad) y cómo obtenerlos de forma automática.",
    date: "2026-11-13",
    service: "S4",
    sections: [
      {
        p: [
          "Medir la producción no es difícil. Lo difícil es medir lo que sirve para decidir, con datos que lleguen a tiempo y en los que todos confíen. Estos son los indicadores que recomendamos como punto de partida para una planta industrial.",
        ],
      },
      {
        h: "1. Cumplimiento del plan (teórico vs. real)",
        p: [
          "Compara lo programado con lo producido, por línea, por producto y por turno. Es el indicador que más rápido muestra dónde está el problema, y el que más se pierde cuando la programación vive en un archivo y la producción real en otro.",
        ],
      },
      {
        h: "2. OEE (eficiencia general de los equipos)",
        p: [
          "Combina disponibilidad, rendimiento y calidad en un solo número. Su valor no está en el porcentaje final sino en el desglose: indica si se pierde tiempo por paradas, por velocidad o por producto fuera de especificación.",
        ],
      },
      {
        h: "3. Tiempo de parada y sus causas",
        p: [
          "Cuánto estuvo parada cada máquina y por qué. Con el dato por minuto se puede separar una parada planificada de una falla, y detectar las causas que se repiten.",
        ],
      },
      {
        h: "4. Rendimiento de materia prima",
        p: [
          "Cuánto producto terminado sale por cada unidad de materia prima. En plantas de alimentos, frutícolas y frigoríficas es uno de los indicadores con más impacto económico directo.",
        ],
      },
      {
        h: "5. Calidad y reprocesos",
        p: [
          "Porcentaje de producto rechazado o reprocesado, por línea y por lote. Cruzado con los datos de proceso permite encontrar qué condición de operación genera los desvíos.",
        ],
      },
      {
        h: "Cómo obtenerlos sin carga manual",
        p: [
          "Todos estos indicadores se pueden calcular de forma automática si los datos se capturan en su origen: el plan desde la aplicación de programación, los tiempos desde los equipos de planta y los resultados desde el ERP. El trabajo consiste en integrarlos en una base única y definir cada fórmula una sola vez, para que todas las áreas vean el mismo número.",
          "Con esa base, el seguimiento deja de ser un informe semanal y pasa a ser un tablero que se consulta todos los días, con alertas cuando algo se sale de rango.",
        ],
      },
    ],
  },
  {
    slug: "como-calcular-oee-automaticamente",
    title: "Cómo calcular el OEE de forma automática con los datos de tus máquinas",
    description:
      "Qué es el OEE, cómo se calcula (disponibilidad × rendimiento × calidad) y cómo obtenerlo automáticamente a partir de los datos que ya registran los equipos de planta.",
    date: "2026-11-13",
    service: "S3",
    sections: [
      {
        p: [
          "El OEE (Overall Equipment Effectiveness, o eficiencia general de los equipos) es el indicador más usado para medir qué tan bien se aprovecha una línea de producción. Muchas plantas lo calculan, pero pocas lo calculan bien: los tiempos se cargan a mano al final del turno y el resultado llega días después.",
        ],
      },
      {
        h: "La fórmula",
        p: ["El OEE es el producto de tres factores:"],
        list: [
          "Disponibilidad: tiempo en que el equipo produjo, dividido el tiempo planificado de producción.",
          "Rendimiento: producción real, dividida la producción que se habría logrado a la velocidad nominal en ese tiempo.",
          "Calidad: unidades buenas, divididas las unidades totales producidas.",
        ],
      },
      {
        p: [
          "OEE = Disponibilidad × Rendimiento × Calidad. Una línea con 90 % de disponibilidad, 95 % de rendimiento y 99 % de calidad tiene un OEE cercano al 85 %, un valor que suele tomarse como referencia de clase mundial.",
        ],
      },
      {
        h: "Por qué el cálculo manual no alcanza",
        p: [
          "Con datos cargados a mano, las paradas cortas no se registran, los horarios se redondean y las causas se completan de memoria. El OEE resultante suele ser más alto que el real y, sobre todo, no explica dónde se pierde el tiempo.",
        ],
      },
      {
        h: "De dónde salen los datos automáticamente",
        p: [
          "En la mayoría de las plantas los equipos ya registran cada evento (arranque, parada, cambio de fase, conteo) en un PLC, un SCADA o una base de datos local. El trabajo consiste en leer esos eventos, sin modificar nada en el sistema original, y transformarlos en tiempos por máquina y por minuto.",
          "Esto funciona incluso cuando la red de planta no tiene internet: el servicio de captura corre dentro de la planta y entrega los datos al ERP o al sistema de OEE en el formato que ya saben leer.",
        ],
      },
      {
        h: "Qué se gana",
        p: [
          "Un OEE calculado con datos de máquina suele ser más bajo que el manual, pero es real. Y permite ver el desglose por turno, por producto y por causa de parada, que es donde aparecen las mejoras concretas.",
        ],
      },
    ],
  },
  {
    slug: "programacion-produccion-hojas-de-calculo",
    title: "Cómo saber si la programación de producción ya superó a las hojas de cálculo",
    description:
      "Cinco señales de que la programación de producción necesita una aplicación con base de datos, y cómo hacer el cambio sin perder la lógica que ya funciona.",
    date: "2026-11-06",
    service: "S2",
    sections: [
      {
        p: [
          "Casi todas las plantas que conocemos programan la producción en hojas de cálculo. No es un error: la hoja de cálculo es flexible, todos la saben usar y permite arrancar en una tarde. El problema aparece cuando la planta crece y la hoja se convierte en el sistema de programación sin que nadie lo haya decidido.",
          "Estas son las señales que revisamos en un diagnóstico para saber si llegó el momento de cambiar.",
        ],
      },
      {
        h: "1. Una sola persona entiende las fórmulas",
        p: [
          "Si la programación depende de que una persona esté disponible para corregir una fórmula, el riesgo ya no es técnico: es operativo. Las vacaciones o una licencia frenan la planta.",
        ],
      },
      {
        h: "2. Hay más de una versión vigente",
        p: [
          "Cuando circulan copias por mail o en carpetas compartidas, cada área termina trabajando sobre un plan distinto. El error no se ve hasta que lo programado y lo producido no coinciden.",
        ],
      },
      {
        h: "3. Comparar lo teórico con lo real lleva horas",
        p: [
          "Si cada semana alguien cruza a mano lo que se programó con lo que se produjo, ese tiempo se puede recuperar. Y lo que es más importante: la comparación puede estar disponible todos los días, no una vez por semana.",
        ],
      },
      {
        h: "4. El histórico no es confiable",
        p: [
          "Las hojas de cálculo guardan el estado actual, no la historia. Comparar con el mismo mes del año anterior implica buscar archivos viejos y rehacer cálculos que quizás cambiaron.",
        ],
      },
      {
        h: "5. El archivo tarda en abrir",
        p: [
          "Parece un detalle, pero es el síntoma de que la hoja está haciendo el trabajo de una base de datos.",
        ],
      },
      {
        h: "Cómo hacemos el cambio",
        p: [
          "El objetivo no es tirar la hoja de cálculo sino llevar su lógica a un lugar más seguro. Trabajamos en tres pasos:",
        ],
        list: [
          "Relevamos las fórmulas y las documentamos: qué calcula cada una, de dónde sale cada dato y quién lo carga.",
          "Implementamos esa lógica en un motor de fórmulas configurable dentro de una aplicación web con base de datos, y la probamos contra los resultados de la hoja original.",
          "Sumamos lo que la hoja no podía hacer bien: teórico vs. real diario, histórico, inventario, usuarios con roles e importación por CSV.",
        ],
      },
      {
        p: [
          "El resultado es la misma forma de programar, con una sola fuente de datos, sin fórmulas que se rompen y con un histórico que se puede consultar en segundos. Y queda instalado en los servidores de la planta.",
        ],
      },
    ],
  },
  {
    slug: "datos-de-proceso-sin-internet",
    title: "Datos de proceso por minuto en una planta sin internet: cómo se hace",
    description:
      "Cómo capturar los tiempos de cada máquina y entregarlos al ERP u OEE de forma automática cuando el servidor de planta no tiene conexión a internet.",
    date: "2026-11-06",
    service: "S3",
    sections: [
      {
        p: [
          "Muchas plantas tienen la red de producción aislada de internet, y está bien que así sea. Pero eso deja afuera a casi todas las soluciones de captura de datos, que asumen una conexión a la nube. Mientras tanto, los tiempos de proceso se siguen cargando a mano.",
          "La buena noticia es que, en la mayoría de los casos, los datos ya existen: los equipos registran cada evento en una base de datos local. El trabajo consiste en leerlos y entregarlos donde se necesitan.",
        ],
      },
      {
        h: "Dónde están los datos",
        p: [
          "Los equipos modernos de envasado y de proceso suelen guardar sus eventos (inicio, fin, paradas, cambios de producto) en una base SQL Server u otra base local. Lo primero que hacemos es identificar qué tabla registra cada fase del proceso y cómo se relacionan los registros con el lote o el producto.",
        ],
      },
      {
        h: "Cómo se arma el servicio",
        p: ["El servicio de captura tiene pocas piezas y cada una es simple:"],
        list: [
          "Una consulta que lee los eventos de los equipos cada minuto, sin modificar nada en la base original.",
          "Una transformación que arma un registro por máquina, por lote y por fase, con su inicio y su fin.",
          "Una salida en el formato que pide el ERP u OEE: un archivo o una tabla que el sistema ya sabe leer.",
          "Un contenedor que se reinicia solo y una tarea programada del sistema operativo que lo vigila.",
        ],
      },
      {
        h: "La instalación sin conexión",
        p: [
          "Como el servidor no tiene internet, todo lo que el servicio necesita viaja empaquetado: la imagen del contenedor, las dependencias y el driver de la base de datos. La instalación se hace con un procedimiento documentado paso a paso, que puede seguir alguien de sistemas de la planta.",
        ],
      },
      {
        h: "Qué cambia",
        p: [
          "El ERP deja de recibir un total diario cargado a mano y pasa a recibir el detalle por máquina y por minuto. Con eso se puede calcular cuánto tiempo estuvo parada cada máquina, en qué fase se pierde tiempo y cómo se compara un turno con otro.",
          "Y es el primer paso para lo siguiente: con los datos ya capturados, verlos en tiempo real en un tablero o en las pantallas de planta.",
        ],
      },
    ],
  },
];

export const notaBySlug = (slug: string) => notas.find((n) => n.slug === slug);

export function formatDate(d: string) {
  const [y, m, day] = d.split("-").map(Number);
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  return `${day} de ${meses[m - 1]} de ${y}`;
}
