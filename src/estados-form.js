export const formFields = {
  exploracion: [
    {
      title: "fechaActualizacion",
      name: "Fecha Actualización",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      title: "financiacionInstitucionalOFinanciacionPrivada",
      name: "Financiación Institucional o Financiación privada?",
      type: "select",
      required: true,
      visible: true,
      options: ["","Privada", "Institucional"]
    },
    {
      title: "publicadaPorElFinanciador",
      name: "Publicada por el financiador? (Sí/no)",
      type: "checkbox",
      required: true,
      visible: true,
      options: []
    },
    {
      title: "pais",
      name: "País",
      type: "select",
      required: false,
      visible: true,
      options: [
        "",
        "Bolivia",
        "Colombia",
        "El Salvador",
        "Nicaragua",
        "Honduras",
        "México",
        "Costa Rica ",
        "Guatemala",
        "Ecuador",
        "Perú",
        "Etiopía",
        "Níger",
        "Mali",
        "Uganda",
        "Mozambique",
        "Regional Sudamérica (elegir países)",
        "Regional Centroamérica (elegir países)",
        "Regional Africa (Elegir países) ",
        "Multipaís (cualquier combinación es posible)"
      ]
    },
    {
      title: "tipoDeFuente",
      name: "Tipo de fuente",
      type: "select",
      required: true,
      visible: true,
      options: ["","Internacional", "Española", "Privada", "Local"]
    },
    {
      title: "financiador",
      name: "Financiador",
      type: "select",
      required: true,
      visible: true,
      options: ["","Financiador 1", "Financiador 2", "Financiador 3"]
    },
    {
      title: "nombreConvocatoria",
      name: "Nombre convocatoria (puede ser indicativo)",
      type: "text",
      required: true,
      visible: true,
      options: []
    },
    {
      title: "proyecto",
      name: "Proyecto (PAC)",
      type: "select",
      required: true,
      visible: true,
      options: ["","Proyecto 1", "proyecto 2", "proyecto 3"]
    },
    {
      title: "tituloProyecto",
      name: "Título Proyecto (puede ser indicativo)",
      type: "text",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "gaps",
      name: "GAPS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: [
        "GENERAR OPORTUNIDADES",
        "ADAPTAR PARA EL CAMBIO CLIMÁTICO",
        "PROTEGER DE VIOLENCIA / INTOLERANCIA",
        "SALVAR VIDAS"
      ]
    },
    {
      title: "lineasEstrategicas",
      name: "Líneas estratégicas (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: [
        "PROMOVER EDUCACIÓN DE CALIDAD",
        "DESARROLLAR CADENAS DE VALOR SOSTENIBLES",
        "FOMENTAR EMPLEO Y EMPRENDIMIENTO",
        "GARANTIZAR ACCESO SOSTENIBLE A ALIMENTOS",
        "PROMOVER ACCESO SOSTENIBLE A AGUA POTABLE",
        "ACOMPAÑAR TRANSICIÓN JUSTA E INCLUSIVA",
        "PROMOVER SISTEMAS DE PROTECCIÓN Y ATENCIÓN",
        "RECONOCER PAPEL FUNDAMENTAL DE LAS MUJERES",
        "IMPULSAR LA SOLIDARIDAD Y LA CULTURA DE PAZ",
        "PROPORCIONAR RESPUESTA HUMANITARIA EFECTIVA",
        "APOYAR POBLACIÓN DESPLAZADA Y REFUGIADA",
        "PROMOVER GESTIÓN DE RIESGOS ANTE DESASTRES"
      ]
    },
    {
      title: "ods",
      name: "ODS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: false,
      options: ["ODS 1", "ODS 2", "ODS3"]
    },
    {
      title: "duracionEstimadaEnMeses",
      name: "Duración estimada en meses",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "especificarMonedaDeConvocatoria",
      name: "Especificar moneda de convocatoria",
      type: "select",
      required: true,
      visible: true,
      options: ["","COP", "USD", "EUR"]
    },
    {
      title: "importeSolicitado",
      name: "Importe solicitado (o a solicitar) en euros",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      title: "monedaLocal",
      name:
        "Si la convocatoria no es en euros, indicar importe en moneda de la convocatoria",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      title: "fechaEstimadaDePublicacion",
      name: "Fecha estimada de publicación",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      title: "equipoTecnicoDeFormulacion",
      name: "Equipo técnico de formulación (listado)",
      type: "multi select",
      required: false,
      visible: true,
      options: ["Usuario 1", "Usuario 2", "Usuario 3 "]
    },
    {
      title: "preinversionNecesaria",
      name: "Preinversión necesaria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "fechaDePresentacion",
      name: "Fecha de presentación",
      type: "date",
      required: true,
      visible: true,
      options: []
    },
    {
      title: "probabilidadDeAprobacion",
      name: "Probabilidad de aprobación",
      type: "number",
      required: true,
      visible: true,
      options: []
    },
    {
      title: "fechaEstimadaDeResolucion",
      name: "Fecha Estimada de resolución (para no resueltos)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      title: "fechaDeResolucion",
      name: "Fecha de resolución (solo resoluciones en firme)",
      type: "date",
      required: false,
      visible: false,
      options: []
    },
    {
      title: "importeAprobadoEnEuros",
      name: "Importe aprobado en euros",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    {
      title: "importeAprobadoEnMonedaLocal",
      name:
        "Importe aprobado en moneda local (o divisa oficial de la convocatoria)",
      type: "number",
      required: false,
      visible: false,
      options: []
    },
    {
      title: "blog",
      name: "BLOG",
      type: "text",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "razonesDescarteODenegacion",
      name: " Razones descarte o denegación (adjuntar resolución)",
      type: "note",
      required: false,
      visible: false,
      options: []
    },
    {
      title: "fechaEstimadaDeInicioDeEjecucion",
      name: "Fecha estimada de inicio de ejecución",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "donativoOSubvencion",
      name: "Donativo o subvención?",
      type: "checkbox",
      required: false,
      visible: false,
      options: []
    },
    {
      title: "indirectosImporteAno",
      name: "Indirectos Año 1 (importe)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "personalEnSedeImporteAno",
      name: "Personal en  sede Año 1 (importe) ",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "",
      name: "NICRA (%)",
      type: "number",
      required: false,
      visible: true,
      options: []
    }
  ],
  soloVista: [
    {
      title: "fechaActualizacion",
      name: "Fecha Actualización",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "financiacionInstitucionalOFinanciacionPrivada",
      name: "Financiación Institucional o Financiación privada?",
      type: "select",
      required: false,
      visible: true,
      options: ["","Privada", "Institucional"]
    },
    {
      title: "publicadaPorElFinanciador",
      name: "Publicada por el financiador? (Sí/no)",
      type: "checkbox",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "pais",
      name: "País",
      type: "select",
      required: false,
      visible: true,
      options: [
        "",
        "Bolivia",
        "Colombia",
        "El Salvador",
        "Nicaragua",
        "Honduras",
        "México",
        "Costa Rica ",
        "Guatemala",
        "Ecuador",
        "Perú",
        "Etiopía",
        "Níger",
        "Mali",
        "Uganda",
        "Mozambique",
        "Regional Sudamérica (elegir países)",
        "Regional Centroamérica (elegir países)",
        "Regional Africa (Elegir países) ",
        "Multipaís (cualquier combinación es posible)"
      ]
    },
    {
      title: "tipoDeFuente",
      name: "Tipo de fuente",
      type: "select",
      required: false,
      visible: true,
      options: ["","Internacional", "Española", "Privada", "Local"]
    },
    {
      title: "financiador",
      name: "Financiador",
      type: "select",
      required: false,
      visible: true,
      options: ["","Financiador 1", "Financiador 2", "Financiador 3"]
    },
    {
      title: "nombreConvocatoria",
      name: "Nombre convocatoria (puede ser indicativo)",
      type: "text",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "proyecto",
      name: "Proyecto (PAC)",
      type: "select",
      required: false,
      visible: true,
      options: ["","Proyecto 1", "proyecto 2", "proyecto 3"]
    },
    {
      title: "tituloProyecto",
      name: "Título Proyecto (puede ser indicativo)",
      type: "text",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "gaps",
      name: "GAPS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: [
        "GENERAR OPORTUNIDADES",
        "ADAPTAR PARA EL CAMBIO CLIMÁTICO",
        "PROTEGER DE VIOLENCIA / INTOLERANCIA",
        "SALVAR VIDAS"
      ]
    },
    {
      title: "lineasEstrategicas",
      name: "Líneas estratégicas (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: [
        "PROMOVER EDUCACIÓN DE CALIDAD",
        "DESARROLLAR CADENAS DE VALOR SOSTENIBLES",
        "FOMENTAR EMPLEO Y EMPRENDIMIENTO",
        "GARANTIZAR ACCESO SOSTENIBLE A ALIMENTOS",
        "PROMOVER ACCESO SOSTENIBLE A AGUA POTABLE",
        "ACOMPAÑAR TRANSICIÓN JUSTA E INCLUSIVA",
        "PROMOVER SISTEMAS DE PROTECCIÓN Y ATENCIÓN",
        "RECONOCER PAPEL FUNDAMENTAL DE LAS MUJERES",
        "IMPULSAR LA SOLIDARIDAD Y LA CULTURA DE PAZ",
        "PROPORCIONAR RESPUESTA HUMANITARIA EFECTIVA",
        "APOYAR POBLACIÓN DESPLAZADA Y REFUGIADA",
        "PROMOVER GESTIÓN DE RIESGOS ANTE DESASTRES"
      ]
    },
    {
      title: "ods",
      name: "ODS (se pueden elegir varios)",
      type: "multi select",
      required: false,
      visible: true,
      options: ["ODS 1", "ODS 2", "ODS3"]
    },
    {
      title: "duracionEstimadaEnMeses",
      name: "Duración estimada en meses",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "especificarMonedaDeConvocatoria",
      name: "Especificar moneda de convocatoria",
      type: "select",
      required: false,
      visible: true,
      options: ["","COP", "USD", "EUR"]
    },
    {
      title: "importeSolicitado",
      name: "Importe solicitado (o a solicitar) en euros",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "monedaLocal",
      name:
        "Si la convocatoria no es en euros, indicar importe en moneda de la convocatoria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "fechaEstimadaDePublicacion",
      name: "Fecha estimada de publicación",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "equipoTecnicoDeFormulacion",
      name: "Equipo técnico de formulación (listado)",
      type: "multi select",
      required: false,
      visible: true,
      options: ["Usuario 1", "Usuario 2", "Usuario 3 "]
    },
    {
      title: "preinversionNecesaria",
      name: "Preinversión necesaria",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "fechaDePresentacion",
      name: "Fecha de presentación",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "probabilidadDeAprobacion",
      name: "Probabilidad de aprobación",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "fechaEstimadaDeResolucion",
      name: "Fecha Estimada de resolución (para no resueltos)",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "fechaDeResolucion",
      name: "Fecha de resolución (solo resoluciones en firme)",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "importeAprobadoEnEuros",
      name: "Importe aprobado en euros",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "importeAprobadoEnMonedaLocal",
      name:
        "Importe aprobado en moneda local (o divisa oficial de la convocatoria)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "blog",
      name: "BLOG",
      type: "text",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "razonesDescarteODenegacion",
      name: " Razones descarte o denegación (adjuntar resolución)",
      type: "note",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "fechaEstimadaDeInicioDeEjecucion",
      name: "Fecha estimada de inicio de ejecución",
      type: "date",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "donativoOSubvencion",
      name: "Donativo o subvención?",
      type: "checkbox",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "indirectosImporteAno",
      name: "Indirectos Año 1 (importe)",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "personalEnSedeImporteAno",
      name: "Personal en  sede Año 1 (importe) ",
      type: "number",
      required: false,
      visible: true,
      options: []
    },
    {
      title: "nicra",
      name: "NICRA (%)",
      type: "number",
      required: false,
      visible: true,
      options: []
    }
  ]
};
