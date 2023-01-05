export const electricista = [
  {
    id: "CBC66",
    materia: "Análisis Matemático A",
    creditos: 9,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC62",
    materia: "Álgebra A",
    creditos: 9,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC24",
    materia: "Introducción al Conocimiento de la Sociedad y el Estado",
    creditos: 4,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC3",
    materia: "Física",
    creditos: 6,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC5",
    materia: "Química",
    creditos: 6,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC40",
    materia: "Introducción al Pensamiento Científico",
    creditos: 4,
    categoria: "*CBC",
    level: -1,
  },
  {
    id: "CBC",
    materia: "Ciclo Básico Común",
    creditos: 0,
    categoria: "CBC",
    level: 0,
    correlativas: "CBC66-CBC62-CBC3-CBC5-CBC24-CBC40",
  },
  {
    id: "81.01",
    materia: "Análisis Matemático II",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "82.01",
    materia: "Física I",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "87.13",
    materia: "Medios de Representación",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "85.01",
    materia: "Introducción a la Ingeniería Electricista",
    creditos: 2,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "95.01",
    materia: "Computación",
    creditos: 4,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "81.03",
    materia: "Probabilidad y Estadística A",
    creditos: 4,
    correlativas: "81.01",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "82.02",
    materia: "Física II",
    creditos: 8,
    correlativas: "81.01-82.01",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "81.02",
    materia: "Álgebra II",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "83.01",
    materia: "Química",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "81.05",
    materia: "Análisis Matemático III A",
    creditos: 6,
    correlativas: "81.01-81.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "87.09",
    materia: "Termodinámica y Mecánica de Fluidos",
    creditos: 6,
    correlativas: "82.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "85.02",
    materia: "Electrotecnia",
    creditos: 8,
    correlativas: "82.02-85.01",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "95.04",
    materia: "Análisis Numérico I",
    creditos: 6,
    correlativas: "81.01-81.02-95.01",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "84.05",
    materia: "Estática y Resistencia de Materiales",
    creditos: 6,
    correlativas: "81.01-87.13-82.01",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "85.05",
    materia: "Medidas Eléctricas",
    creditos: 6,
    correlativas: "85.02",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "82.03",
    materia: "Física III",
    creditos: 6,
    correlativas: "81.02-82.02-83.01",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "85.03",
    materia: "Teoría de Circuitos y Sistemas",
    creditos: 6,
    correlativas: "81.05-85.02",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "85.06",
    materia: "Máquinas Eléctricas I",
    creditos: 8,
    correlativas: "85.05",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "85.08",
    materia: "Tecnología de Materiales Eléctricos",
    creditos: 6,
    correlativas: "82.03-85.05",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "86.33",
    materia: "Electrónica",
    creditos: 6,
    correlativas: "85.02",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "85.04",
    materia: "Campos Electromagnéticos",
    creditos: 6,
    correlativas: "81.05-85.02",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "85.09",
    materia: "Diagnósticos Eléctricos y Ensayos",
    creditos: 4,
    correlativas: "81.03-85.08-85.06",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "85.16",
    materia: "Electrónica de Potencia",
    creditos: 6,
    correlativas: "82.03-85.06-86.33",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "85.07",
    materia: "Máquinas Eléctricas II",
    creditos: 6,
    correlativas: "85.03-85.06",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "87.07",
    materia: "Fuentes y Máquinas Energéticas",
    creditos: 6,
    correlativas: "87.09",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "85.15",
    materia: "Protecciones Eléctricas y Equipos de Maniobra",
    creditos: 6,
    correlativas: "85.05",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "97.02",
    materia: "Seguridad Ambiental y del Trabajo B",
    creditos: 4,
    correlativas: "85.02-83.01",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "85.12",
    materia: "Sistemas Eléctricos de Potencia",
    creditos: 6,
    correlativas: "85.04-85.07",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "85.13",
    materia: "Centrales Eléctricas",
    creditos: 6,
    correlativas: "87.07",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "85.11",
    materia: "Instalaciones de Baja Tensión y Luminotecnia",
    creditos: 4,
    correlativas: "85.09-97.02",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "85.14",
    materia: "Transmisión y Distribución de la Energía Eléctrica",
    creditos: 6,
    correlativas: "85.12",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "87.06",
    materia: "Mecánica Aplicada",
    creditos: 4,
    correlativas: "84.05",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "91.13",
    materia: "Organización de la Producción",
    creditos: 6,
    requiere: 100,
    requiereCBC: undefined,
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "91.15",
    materia:
      "Legislación y Ejercicio Profesional de la Ingeniería Electricista",
    creditos: 4,
    requiere: 100,
    requiereCBC: undefined,
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "85.10",
    materia: "Construcciones Electromecánicas",
    creditos: 6,
    correlativas: "85.09-87.06",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "85.17",
    materia: "Economía de la Energía Eléctrica",
    creditos: 4,
    correlativas: "91.13",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "82.04",
    materia: "Mecánica Racional",
    creditos: 4,
    correlativas: "81.05-82.01",
    categoria: "Materias Electivas",
  },
  {
    id: "86.01",
    materia: "Técnica Digital",
    creditos: 6,
    correlativas: "81.02-95.01",
    categoria: "Materias Electivas",
  },
  {
    id: "86.08",
    materia: "Control Automático I",
    creditos: 6,
    correlativas: "85.03",
    categoria: "Materias Electivas",
  },
  {
    id: "86.15",
    materia: "Robótica",
    creditos: 6,
    correlativas: "82.04-86.08",
    categoria: "Materias Electivas",
  },
  {
    id: "87.08",
    materia: "Tecnología Mecánica B",
    creditos: 4,
    correlativas: "84.05",
    categoria: "Materias Electivas",
  },
  {
    id: "91.24",
    materia: "Macroeconomía y Estructura Económica Argentina",
    creditos: 6,
    correlativas: "91.13",
    categoria: "Materias Electivas",
  },
  {
    id: "91.36",
    materia: "Gestión de la Calidad",
    creditos: 4,
    correlativas: "81.03-85.09",
    categoria: "Materias Electivas",
  },
  {
    id: "91.17",
    materia: "Recursos Humanos",
    creditos: 4,
    requiere: 120,
    requiereCBC: undefined,
    categoria: "Materias Electivas",
  },
  {
    id: "85.18",
    materia: "Accionamientos Eléctricos",
    creditos: 4,
    correlativas: "85.07-85.16",
    categoria: "Materias Electivas",
  },
  {
    id: "85.19",
    materia: "Luminotecnia",
    creditos: 4,
    correlativas: "85.11",
    categoria: "Materias Electivas",
  },
  {
    id: "85.20",
    materia: "Energías Renovables",
    creditos: 4,
    correlativas: "87.07",
    categoria: "Materias Electivas",
  },
  {
    id: "85.21",
    materia: "Uso Eficiente de la Energía Eléctrica",
    creditos: 4,
    correlativas: "85.06-85.11",
    categoria: "Materias Electivas",
  },
  {
    id: "85.22",
    materia: "Metrología y Técnicas de Calibración Eléctrica",
    creditos: 4,
    correlativas: "85.05",
    categoria: "Materias Electivas",
  },
  {
    id: "85.23",
    materia: "Medición de Magnitudes Físicas por Medios Eléctricos",
    creditos: 4,
    correlativas: "85.05",
    categoria: "Materias Electivas",
  },
  {
    id: "85.24",
    materia: "Mediciones en AT",
    creditos: 4,
    correlativas: "85.09",
    categoria: "Materias Electivas",
  },
  {
    id: "85.25",
    materia: "Estaciones Transformadoras y de Distribución",
    creditos: 4,
    correlativas: "85.14",
    categoria: "Materias Electivas",
  },
  {
    id: "85.26",
    materia: "Dinámica de SEP",
    creditos: 4,
    correlativas: "85.12",
    categoria: "Materias Electivas",
  },
  {
    id: "85.27",
    materia: "Comunicaciones y Telecontrol",
    creditos: 4,
    correlativas: "85.05",
    categoria: "Materias Electivas",
  },
  {
    id: "85.28",
    materia: "Seminario de Ingeniería Electricista I",
    creditos: 2,
    correlativas: "85.02",
    categoria: "Materias Electivas",
  },
  {
    id: "85.29",
    materia: "Seminario de Ingeniería Electricista II",
    creditos: 4,
    correlativas: "85.02",
    categoria: "Materias Electivas",
  },
  {
    id: "85.30",
    materia: "Proyecto de Centrales Hidroeléctricas",
    creditos: 4,
    correlativas: "85.13",
    categoria: "Materias Electivas",
  },
  {
    id: "85.31",
    materia: "Proyecto de Centrales Termoeléctricas",
    creditos: 4,
    correlativas: "85.13",
    categoria: "Materias Electivas",
  },
  {
    id: "85.32",
    materia: "Proyecto de Centrales Fotovoltaicas y Eólicas",
    creditos: 4,
    correlativas: "85.13",
    categoria: "Materias Electivas",
  },
  {
    id: "85.33",
    materia: "Abastecimiento Auxiliar de la Energía Eléctrica",
    creditos: 4,
    correlativas: "85.16",
    categoria: "Materias Electivas",
  },
  {
    id: "85.34",
    materia: "Regulación de Servicios Públicos",
    creditos: 4,
    correlativas: "85.17",
    categoria: "Materias Electivas",
  },
  {
    id: "85.00",
    materia: "Tesis de Ingeniería Electricista",
    creditos: 20,
    requiere: 140,
    requiereCBC: undefined,
    categoria: "Fin de Carrera",
  },
  {
    id: "85.99",
    materia: "Trabajo Profesional de Ingeniería Electricista ",
    creditos: 14,
    requiere: 140,
    requiereCBC: undefined,
    categoria: "Fin de Carrera",
  },
];
