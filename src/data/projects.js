export const projects = [
  {
    title: "Validación de plantillas de migración a SAP con agentes de IA",
    tags: ["Claude", "agentes", "SAP S/4HANA"],
    description:
      "Flujos de agentes que revisan cada plantilla de migración antes de cargarla en SAP S/4HANA: consultan la documentación de SAP y aprenden de los errores de cargas anteriores. Elijo el modelo y el nivel de esfuerzo de cada paso según coste y eficiencia, y cuando una carga falla analizo los logs con IA.",
  },
  {
    title: "SONDA",
    tags: ["IA generativa", "Next.js", "TypeScript", "Supabase"],
    description:
      "Aplicación interna con IA generativa para monitorizar el sector HORECA. Ya la utilizan los usuarios de la empresa y no es accesible desde fuera.",
  },
  {
    title: "Aplicación propia de migración a SAP S/4HANA",
    tags: ["Python", "Flask", "SQL Server", "pandas"],
    description:
      "Panel web multiusuario que lee SQL Server, Excel o Access, valida tipo, longitud, decimales, NIF, CP e IBAN antes de exportar y genera ficheros validados para SAP Migration Cockpit. Unos 650 tests automáticos; exportación por lotes 9,4 veces más rápida tras optimizarla con pandas.",
  },
  {
    title: "Migración del servidor de ficheros a SharePoint Online",
    tags: ["SharePoint Online", "PowerShell", "React", "Supabase"],
    description:
      "Migración por áreas de negocio con cuatro herramientas encadenadas: limpieza por capas, etiquetado de metadatos, subida con simulación previa y reanudación, y trazabilidad con controles de integridad.",
  },
  {
    title: "Intranet corporativa en SharePoint Online",
    tags: ["SharePoint Online", "Microsoft Entra ID", "adopción"],
    description:
      "Arquitectura de la intranet para más de 300 usuarios (hub sites, metadatos y permisos por grupos de seguridad) y plan de adopción con materiales y sesiones de formación para dirección y equipos no técnicos.",
  },
];
