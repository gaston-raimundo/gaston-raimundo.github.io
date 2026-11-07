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
