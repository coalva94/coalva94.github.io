/**
 * Blog Feed Data Simulating LinkedIn API feed.
 * Includes unique ID, corporate publication date, hook/title, extract (max 3 lines),
 * tech tags/hashtags, and mock LinkedIn target URL.
 */
export const blogPosts = [
  {
    id: "post-001",
    title: "Optimización de Procesos de Negocio: Integración de SAP ERP con Sistemas de Terceros",
    publishDate: "2026-05-15",
    formattedDate: "15 de mayo de 2026",
    extract: "La sincronización en tiempo real entre SAP y plataformas externas suele ser un cuello de botella. Implementamos una arquitectura dirigida por eventos utilizando mensajería asíncrona que redujo la latencia de sincronización en un 85% y eliminó fallos de transaccionalidad.",
    tags: ["SAP", "EnterpriseIntegration", "CloudArchitecture", "EventDriven"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7123456789012345678"
  },
  {
    id: "post-002",
    title: "Modernización del Puesto de Trabajo Digital: Portales en SharePoint Modern Experience",
    publishDate: "2026-05-02",
    formattedDate: "2 de mayo de 2026",
    extract: "Migrar intranets heredadas de SharePoint Classic a SharePoint Modern Experience no es solo un cambio estético, es un rediseño de usabilidad y rendimiento. Diseñamos componentes SPFx personalizados optimizando el tiempo de carga del portal corporativo en un 40%.",
    tags: ["SharePoint", "SPFx", "Microsoft365", "UX"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7123456789012345679"
  },
  {
    id: "post-003",
    title: "Inteligencia Artificial Aplicada a Operaciones: Agentes de IA en Flujos de Aprobación",
    publishDate: "2026-04-20",
    formattedDate: "20 de abril de 2026",
    extract: "Implementamos agentes inteligentes para auditar facturas comerciales antes de pasar a la firma ejecutiva. El agente analiza inconsistencias contractuales, reduciendo el ciclo de aprobación de 5 días a solo 3 horas y disminuyendo errores humanos.",
    tags: ["IA", "AIOps", "Automation", "WorkflowEngine"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7123456789012345680"
  },
  {
    id: "post-004",
    title: "Estrategias de Migración Multi-Cloud para Infraestructuras Críticas de Gobierno",
    publishDate: "2026-04-05",
    formattedDate: "5 de abril de 2026",
    extract: "Detalle técnico de cómo estructurar una estrategia multicloud híbrida garantizando soberanía de datos y resiliencia extrema. Balanceadores dinámicos de tráfico y bases de datos distribuidas con conmutación por error en milisegundos.",
    tags: ["CloudComputing", "Security", "DevOps", "InfrastructureAsCode"],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7123456789012345681"
  }
];
