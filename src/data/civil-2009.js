export const civil = [
  {
    id: "CBC28",
    materia: "Análisis Matemático",
    creditos: 9,
    categoria: "*CBC",
    level: -2,
  },
  {
    id: "CBC27",
    materia: "Álgebra",
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
    correlativas: "CBC28-CBC27-CBC3-CBC5-CBC24-CBC40",
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
    id: "81.01",
    materia: "Análisis Matemático II",
    creditos: 8,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "84.01",
    materia: "Introducción a la Ingeniería Civil",
    creditos: 2,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
  },
  {
    id: "87.11",
    materia: "Medios de Representación A",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 1,
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
    id: "84.02",
    materia: "Estabilidad I",
    creditos: 6,
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
    id: "81.03",
    materia: "Probabilidad y Estadística A",
    creditos: 4,
    correlativas: "81.01-84.01",
    categoria: "Materias Obligatorias",
    level: 2,
  },
  {
    id: "83.01",
    materia: "Química",
    creditos: 6,
    correlativas: "CBC",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "84.03",
    materia: "Estabilidad II",
    creditos: 8,
    correlativas: "81.02-84.01-84.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "89.01",
    materia: "Hidráulica General",
    creditos: 6,
    correlativas: "81.01-82.01",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "84.11",
    materia: "Seguridad estructural",
    creditos: 2,
    correlativas: "81.03-84.02",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "88.09",
    materia: "Análisis de sistemas de transporte",
    creditos: 4,
    correlativas: "81.03",
    categoria: "Materias Obligatorias",
    level: 3,
  },
  {
    id: "84.04",
    materia: "Comportamiento de Materiales",
    creditos: 8,
    correlativas: "83.01-84.03",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "84.06",
    materia: "Estabilidad III",
    creditos: 8,
    correlativas: "84.03",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "95.10",
    materia: "Modelación numérica",
    creditos: 6,
    correlativas: "81.01-84.03",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "91.09",
    materia: "Economía",
    creditos: 4,
    correlativas: "84.01",
    categoria: "Materias Obligatorias",
    level: 4,
  },
  {
    id: "94.01",
    materia: "Hormigón I",
    creditos: 8,
    correlativas: "84.04-84.06",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "94.03",
    materia: "Construcciones",
    creditos: 6,
    correlativas: "82.02-84.04-91.09",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "84.07",
    materia: "Mecánica de Suelos y Geología",
    creditos: 8,
    correlativas: "84.03-89.01",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "89.09",
    materia: "Hidráulica Aplicada",
    creditos: 4,
    correlativas: "89.01",
    categoria: "Materias Obligatorias",
    level: 5,
  },
  {
    id: "94.10",
    materia: "Estructuras Metálicas I",
    creditos: 6,
    correlativas: "84.04-84.06-94.01",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "94.12",
    materia: "Tecnología del Hormigón",
    creditos: 4,
    correlativas: "84.04",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "94.09",
    materia: "Geotecnia Aplicada",
    creditos: 4,
    correlativas: "84.07-94.01",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "89.05",
    materia: "Hidrología",
    creditos: 4,
    correlativas: "84.07-84.11-89.01-95.10",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "90.01",
    materia: "Topografía y Geodesia",
    creditos: 4,
    correlativas: "81.03-82.01-87.11",
    categoria: "Materias Obligatorias",
    level: 6,
  },
  {
    id: "94.04",
    materia: "Hormigón II",
    creditos: 8,
    correlativas: "94.01-94.12",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "88.10",
    materia: "Caminos",
    creditos: 4,
    correlativas: "88.09-84.07-94.01",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "89.10",
    materia: "Aprovechamientos hidráulicos",
    creditos: 4,
    correlativas: "89.05-89.09-94.09",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "89.11",
    materia: "Ingeniería Sanitaria I",
    creditos: 4,
    correlativas: "89.05-89.09",
    categoria: "Materias Obligatorias",
    level: 7,
  },
  {
    id: "88.11",
    materia: "Aeropuertos A",
    creditos: 2,
    correlativas: "84.07-88.09-94.01",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "88.12",
    materia: "Ferrocarriles A",
    creditos: 2,
    correlativas: "84.07-88.09-94.01",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "94.05",
    materia: "Instalaciones en Obras Civiles I",
    creditos: 6,
    correlativas: "89.11-94.03",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "88.13",
    materia: "Puertos y Vías Navegables A",
    creditos: 4,
    correlativas: "84.07-88.09-94.01",
    categoria: "Materias Obligatorias",
    level: 8,
  },
  {
    id: "88.14",
    materia: "Evaluación de proyectos",
    creditos: 4,
    correlativas: "88.09-89.09-94.03",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "91.16",
    materia: "Legislación y Ejercicio Profesional de la Ingeniería Civil",
    creditos: 6,
    correlativas: "88.14-91.02",
    categoria: "Materias Obligatorias",
    level: 10,
  },
  {
    id: "91.02",
    materia: "Gerenciamiento y Organización de Obras Civiles",
    creditos: 4,
    correlativas: "88.10-89.09-94.03",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "94.02",
    materia: "Arquitectura y Planificación Urbana",
    creditos: 6,
    correlativas: "88.09-89.10-94.05",
    categoria: "Materias Obligatorias",
    level: 9,
  },
  {
    id: "97.03",
    materia: "Higiene y Seguridad en Obras Civiles",
    creditos: 3,
    correlativas: "88.10-89.09-94.03",
    categoria: "Materias Obligatorias",
    level: 10,
  },
  {
    id: "89.12",
    materia: "Gestión Ambiental en Ingeniería Civil",
    creditos: 3,
    correlativas: "88.10-89.09-94.03",
    categoria: "Materias Obligatorias",
    level: 10,
  },
  {
    id: "81.06",
    materia: "Análisis Matemático III B",
    creditos: 6,
    correlativas: "81.01-81.02",
    categoria: "Materias Electivas",
  },
  {
    id: "84.08",
    materia: "Estabilidad IV",
    creditos: 8,
    correlativas: "84.06",
    categoria: "Materias Electivas",
  },
  {
    id: "84.09",
    materia: "Método de los Elementos Finitos",
    creditos: 4,
    correlativas: "84.06",
    categoria: "Materias Electivas",
  },
  {
    id: "84.10",
    materia: "Análisis Experimental de Tensiones",
    creditos: 2,
    correlativas: "84.06",
    categoria: "Materias Electivas",
  },
  {
    id: "84.12",
    materia: "Dinámica de las estructuras",
    creditos: 4,
    correlativas: "95.10-84.03",
    categoria: "Materias Electivas",
  },
  {
    id: "84.13",
    materia: "Dinámica de las estructuras II",
    creditos: 3,
    correlativas: "95.10-84.03",
    categoria: "Materias Electivas",
  },
  {
    id: "84.14",
    materia: "Análisis sísmico",
    creditos: 4,
    correlativas: "94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "85.35",
    materia: "Electrotecnia General C",
    creditos: 4,
    correlativas: "81.02-84.02",
    categoria: "Materias Electivas",
  },
  {
    id: "87.02",
    materia: "Termodinámica I A",
    creditos: 8,
    correlativas: "82.02-81.02",
    categoria: "Materias Electivas",
  },
  {
    id: "88.01",
    materia: "Construcción de carreteras",
    creditos: 6,
    correlativas: "88.09-84.07-94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "88.02",
    materia: "Diseño y operación de caminos",
    creditos: 6,
    correlativas: "88.09-84.07-94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "88.03",
    materia: "Puertos y Vías Navegables B",
    creditos: 2,
    correlativas: "88.09-84.07-94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "88.04",
    materia: "Ferrocarriles B",
    creditos: 4,
    correlativas: "88.09-84.07-94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "88.05",
    materia: "Aeropuertos B",
    creditos: 4,
    correlativas: "88.09-84.07-94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "88.06",
    materia: "Planeamiento del Transporte",
    creditos: 6,
    correlativas: "88.09",
    categoria: "Materias Electivas",
  },
  {
    id: "88.07",
    materia: "Tránsito",
    creditos: 4,
    correlativas: "88.10",
    categoria: "Materias Electivas",
  },
  {
    id: "88.08",
    materia: "Ingeniería Territorial",
    creditos: 4,
    correlativas: "88.09",
    categoria: "Materias Electivas",
  },
  {
    id: "89.03",
    materia: "Centrales Hidráulicas",
    creditos: 6,
    correlativas: "89.10",
    categoria: "Materias Electivas",
  },
  {
    id: "89.04",
    materia: "Modelos Hidráulicos",
    creditos: 4,
    correlativas: "89.10",
    categoria: "Materias Electivas",
  },
  {
    id: "89.06",
    materia: "Planificación de Recursos Hidráulicos",
    creditos: 4,
    correlativas: "89.10",
    categoria: "Materias Electivas",
  },
  {
    id: "89.07",
    materia: "Construcciones Hidráulicas",
    creditos: 4,
    correlativas: "89.10",
    categoria: "Materias Electivas",
  },
  {
    id: "89.08",
    materia: "Gestión Ambiental de los Recursos Hídricos",
    creditos: 4,
    correlativas: "89.10",
    categoria: "Materias Electivas",
  },
  {
    id: "89.13",
    materia: "Hidráulica Fluvial",
    creditos: 4,
    correlativas: "84.07-89.09",
    categoria: "Materias Electivas",
  },
  {
    id: "89.14",
    materia: "Hidráulica Marítima",
    creditos: 4,
    correlativas: "84.07-89.09",
    categoria: "Materias Electivas",
  },
  {
    id: "89.15",
    materia: "Laboratorio de Hidráulica",
    creditos: 4,
    correlativas: "89.10",
    categoria: "Materias Electivas",
  },
  {
    id: "89.16",
    materia: "Ingeniería Sanitaria II",
    creditos: 4,
    correlativas: "89.11",
    categoria: "Materias Electivas",
  },
  {
    id: "94.06",
    materia: "Presas",
    creditos: 6,
    correlativas: "89.10",
    categoria: "Materias Electivas",
  },
  {
    id: "94.07",
    materia: "Maquinarias de la Construcción",
    creditos: 4,
    correlativas: "94.03",
    categoria: "Materias Electivas",
  },
  {
    id: "94.08",
    materia: "Urbanismo",
    creditos: 6,
    correlativas: "94.02",
    categoria: "Materias Electivas",
  },
  {
    id: "94.11",
    materia: "Estructuras Metálicas II",
    creditos: 6,
    correlativas: "94.10",
    categoria: "Materias Electivas",
  },
  {
    id: "94.13",
    materia: "Patología de la Construcción",
    creditos: 4,
    correlativas: "94.03-94.04-94.10",
    categoria: "Materias Electivas",
  },
  {
    id: "94.14",
    materia: "Estructuras de Madera",
    creditos: 4,
    correlativas: "84.06-84.04-94.03",
    categoria: "Materias Electivas",
  },
  {
    id: "94.15",
    materia: "Sistemas Constructivos",
    creditos: 4,
    correlativas: "91.09-94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "94.16",
    materia: "Sistemas Estructurales",
    creditos: 6,
    correlativas: "94.01-94.09-94.10",
    categoria: "Materias Electivas",
  },
  {
    id: "94.17",
    materia: "Diseño Estructural",
    creditos: 6,
    correlativas: "84.07-94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "94.18",
    materia: "Inspección y Ejecución de Estructuras de Hormigón",
    creditos: 6,
    correlativas: "94.01",
    categoria: "Materias Electivas",
  },
  {
    id: "94.19",
    materia: "Materiales no tradicionales en la construcción",
    creditos: 4,
    correlativas: "84.06-94.12",
    categoria: "Materias Electivas",
  },
  {
    id: "94.20",
    materia: "Instalaciones en Obras Civiles II",
    creditos: 4,
    correlativas: "94.05",
    categoria: "Materias Electivas",
  },
  {
    id: "95.04",
    materia: "Análisis Numérico I",
    creditos: 6,
    correlativas: "95.10",
    categoria: "Materias Electivas",
  },
  {
    id: "84.99",
    materia: "Trabajo Profesional de Ingeniería Civil",
    creditos: 13,
    requiere: 200,
    requiereCBC: false,
    correlativas: "88.14",
    categoria: "Fin de Carrera (Obligatorio)",
  },
];
