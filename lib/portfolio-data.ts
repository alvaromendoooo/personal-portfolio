/**
 * =============================================================================
 *  PORTFOLIO DATA  ·  DATOS DEL PORTFOLIO
 * =============================================================================
 *
 *  ESPAÑOL:
 *  Este es el ÚNICO archivo que necesitas editar para actualizar tu portfolio.
 *  - Cambia tus datos personales en `profile`.
 *  - Ajusta tu propuesta de valor en `services` y `whyHireMe`.
 *  - Añade o edita habilidades en `skills`.
 *  - Añade proyectos al array `projects`. Copia un objeto existente y modifícalo.
 *  No hace falta tocar el resto del código.
 *
 *  ENGLISH:
 *  This is the ONLY file you need to edit to update your portfolio.
 *  - Change your personal info in `profile`.
 *  - Adjust your value proposition in `services` and `whyHireMe`.
 *  - Add or edit skills in `skills`.
 *  - Add projects to the `projects` array. Copy an existing object and tweak it.
 *  No need to touch the rest of the code.
 * =============================================================================
 */

export type Language = "es" | "en"

/** Texto que existe en los dos idiomas / Text available in both languages */
export type Localized = Record<Language, string>

export type ProjectStatus = "live" | "in-progress" | "planned"

export type Project = {
  /** Identificador único / Unique id (usado como key) */
  id: string
  /** Título del proyecto / Project title */
  title: string
  /** Estado actual / Current status */
  status: ProjectStatus
  /** Año o rango / Year or range (ej: "2025", "2024 – 2025") */
  year: string
  /** Descripción corta bilingüe / Short bilingual description */
  description: Localized
  /** Tecnologías usadas / Technologies used */
  tech: string[]
  /** Enlace al repositorio (opcional) / Repository link (optional) */
  repo?: string
  /** Enlace a la demo en vivo (opcional) / Live demo link (optional) */
  demo?: string
  /** Marca el proyecto como destacado / Mark project as featured */
  featured?: boolean
}

export type SkillGroup = {
  label: Localized
  items: string[]
}

export type Service = {
  /** Identificador único / Unique id */
  id: string
  /** Código corto tipo módulo, ej. "01" / Short module-style code */
  code: string
  /** Título del servicio / Service title */
  title: Localized
  /** Descripción de lo que resuelve para el cliente / What it solves for the client */
  description: Localized
  /** Tecnologías representativas / Representative technologies */
  tech: string[]
}

// -----------------------------------------------------------------------------
// PERFIL PERSONAL  ·  PERSONAL PROFILE
// -----------------------------------------------------------------------------

export const profile = {
  /** Tu nombre / Your name */
  name: "Álvaro Mendo Martín",
  /** Usuario de GitHub para el @handle / GitHub username for the @handle */
  githubHandle: "alvaromendoooo",
  /** Rol / Role */
  role: {
    es: "Ingeniero de Software · Backend & Infraestructura",
    en: "Software Engineer · Backend & Infrastructure",
  } satisfies Localized,
  /** Titular grande del hero / Big hero headline */
  headline: {
    es: "Construyo el software que hace funcionar tu negocio",
    en: "I build the software that keeps your business running",
  } satisfies Localized,
  /** Presentación breve / Short intro */
  intro: {
    es: "Diseño y desarrollo backends, automatizaciones e infraestructura fiables para empresas que necesitan sistemas que funcionen sin sorpresas. Full-stack cuando el proyecto lo pide, siempre con código limpio, documentado y listo para escalar.",
    en: "I design and build reliable backends, automations and infrastructure for businesses that need systems that just work. Full-stack when the project calls for it, always with clean, documented, scalable code.",
  } satisfies Localized,
  /** Biografía más larga para la sección Sobre mí / Longer bio for the About section */
  bio: {
    es: "Ingeniero informático recién egresado, especializado en desarrollo backend, automatización de procesos e infraestructura cloud. Durante mi formación y en proyectos reales he construido APIs, pipelines de despliegue y sistemas distribuidos para casos de uso concretos: desde infraestructura servidora para aplicaciones móviles hasta plataformas de análisis de datos para el sector agrícola. Me muevo con soltura entre frontend y backend, pero mi foco está en la parte que sostiene el producto: la que no se ve, pero es la que no puede fallar. Trabajo con metodología, comunico avances con claridad y entrego código pensado para que otro equipo pueda mantenerlo el día de mañana.",
    en: "Recent Computer Engineering graduate, specialized in backend development, process automation and cloud infrastructure. Through my studies and real projects I've built APIs, deployment pipelines and distributed systems for concrete use cases: from server infrastructure for mobile apps to data analysis platforms for agriculture. I move comfortably between frontend and backend, but my focus is on the part that holds the product up: the part you don't see, but that can't fail. I work with method, communicate progress clearly, and deliver code built so another team can maintain it down the line.",
  } satisfies Localized,
  /** Ubicación / Location */
  location: {
    es: "Plasencia, España",
    en: "Plasencia, Spain",
  } satisfies Localized,
  /** Estado de disponibilidad / Availability status */
  availability: {
    es: "Disponible para proyectos freelance",
    en: "Available for freelance projects",
  } satisfies Localized,
  /** Correo de contacto / Contact email */
  email: "alvaromendobusiness@gmail.com",
  /** Enlaces sociales. Deja "" para ocultar / Social links. Leave "" to hide */
  links: {
    github: "https://github.com/alvaromendoooo",
    linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-mendo-418042333/",
    twitter: "https://x.com/alvaromendoooo",
  },
}

// -----------------------------------------------------------------------------
// DATOS DESTACADOS  ·  QUICK STATS
// -----------------------------------------------------------------------------

export const stats: { value: string; label: Localized }[] = [
  { value: "4", label: { es: "Áreas de especialización", en: "Specialization areas" } },
  { value: "10+", label: { es: "Tecnologías en producción", en: "Technologies shipped" } },
  { value: "100%", label: { es: "Trabajo remoto", en: "Remote-ready" } },
  { value: "0+", label: { es: "Años de experiencia laboral", en: "Years of working experience" }},
]

// -----------------------------------------------------------------------------
// SERVICIOS / ESPECIALIZACIÓN  ·  SERVICES / SPECIALIZATION
// -----------------------------------------------------------------------------
// Responde directamente a "¿en qué te especializas?" — lo primero que un
// cliente potencial necesita saber.
// -----------------------------------------------------------------------------

export const services: Service[] = [
  {
    id: "backend",
    code: "01",
    title: { es: "Desarrollo backend", en: "Backend development" },
    description: {
      es: "APIs REST robustas, modelado de datos y lógica de negocio construida para durar. Diseño sistemas que soportan carga real, no solo la demo.",
      en: "Robust REST APIs, data modeling and business logic built to last. I design systems that hold up under real load, not just the demo.",
    },
    tech: ["Django", "Flask", "Spring Boot", "PostgreSQL", "Celery"],
  },
  {
    id: "frontend",
    code: "02",
    title: { es: "Desarrollo frontend", en: "Frontend development" },
    description: {
      es: "Interfaces claras y rápidas conectadas a un backend sólido. Priorizo la experiencia de usuario sin sacrificar mantenibilidad.",
      en: "Clear, fast interfaces connected to a solid backend. I prioritize user experience without sacrificing maintainability.",
    },
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "automation",
    code: "03",
    title: { es: "Automatización de procesos", en: "Process automation" },
    description: {
      es: "Elimino tareas manuales y repetitivas con scripts, colas de trabajo y pipelines que corren solos y avisan cuando algo falla.",
      en: "I remove manual, repetitive work with scripts, job queues and pipelines that run unattended and alert you when something breaks.",
    },
    tech: ["Python", "Celery", "RabbitMQ", "GitHub Actions"],
  },
  {
    id: "infra",
    code: "04",
    title: { es: "Infraestructura y despliegue", en: "Infrastructure & deployment" },
    description: {
      es: "Infraestructura como código, contenedores y despliegues reproducibles. Tu sistema en producción, documentado y sin dependencias ocultas.",
      en: "Infrastructure as code, containers and reproducible deployments. Your system in production, documented, with no hidden dependencies.",
    },
    tech: ["Docker", "Terraform", "AWS", "Azure"],
  },
]

// -----------------------------------------------------------------------------
// POR QUÉ CONTRATARME  ·  WHY HIRE ME
// -----------------------------------------------------------------------------

export const whyHireMe: { title: Localized; description: Localized }[] = [
  {
    title: { es: "Entrego software listo para producción", en: "I ship production-ready software" },
    description: {
      es: "No solo prototipos: mis proyectos incluyen contenedores, CI/CD e infraestructura definida como código desde el primer commit.",
      en: "Not just prototypes: my projects include containers, CI/CD and infrastructure as code from the first commit.",
    },
  },
  {
    title: { es: "Comunicación constante", en: "Constant communication" },
    description: {
      es: "Actualizaciones de progreso claras y frecuentes, para que sepas en todo momento en qué punto está tu proyecto.",
      en: "Clear, frequent progress updates, so you always know exactly where your project stands.",
    },
  },
  {
    title: { es: "Código pensado para mantenimiento a futuro", en: "Code built for future manteninance" },
    description: {
      es: "Documentación, pruebas y una estructura clara para que tu equipo (o el siguiente freelancer) pueda continuar sin problema.",
      en: "Documentation, tests and a clear structure so your team (or the next freelancer) can pick it up without problems.",
    },
  },
]

// -----------------------------------------------------------------------------
// HABILIDADES  ·  SKILLS
// -----------------------------------------------------------------------------

export const skills: SkillGroup[] = [
  {
    label: { es: "Lenguajes", en: "Languages" },
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HCL"],
  },
  {
    label: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "Tailwind CSS", "Vue", "React Native", "Qwik"],
  },
  {
    label: { es: "Backend", en: "Backend" },
    items: ["Flask", "Django", "PostgreSQL", "Redis", "RavenDB", "REST", "RabbitMQ", "Celery", "FastMCP", "Spring Boot", "NestJS"],
  },
  {
    label: { es: "Infraestructura", en: "Infrastructure" },
    items: ["Git", "Docker", "Vercel", "AWS", "Azure", "Render", "Resend", "Terraform", "Github Actions"],
  },
]

// -----------------------------------------------------------------------------
// PROYECTOS  ·  PROJECTS
// -----------------------------------------------------------------------------
// status: "live" = en producción / live, "in-progress" = en desarrollo,
//         "planned" = idea futura / future idea
// -----------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "agro-predict",
    title: "AgroPredict",
    status: "live",
    year: "2026",
    featured: true,
    description: {
      es: "Plataforma de infraestructura servidora para el análisis de riesgos climáticos sobre cultivos: ingesta de datos, procesamiento distribuido y generación automática de informes.",
      en: "Server infrastructure platform for climate-risk analysis on crops: data ingestion, distributed processing and automated report generation.",
    },
    tech: ["Python", "Spring Boot", "Flask", "Docker", "Terraform", "Celery", "MariaDB", "RabbitMQ"],
    repo: "https://github.com/agro-predict-tfg-2026",
  },
  {
    id: "paw-meet-backend",
    title: "Paw Meet Backend",
    status: "live",
    year: "2026",
    featured: true,
    description: {
      es: "Infraestructura servidora completa para la aplicación Paw Meet: API, tareas en segundo plano y envío de notificaciones, contenerizada y lista para desplegar.",
      en: "Full server infrastructure for the Paw Meet app: API, background jobs and notification delivery, containerized and deploy-ready.",
    },
    tech: ["Python", "Django", "Docker", "Celery", "Resend"],
    repo: "https://github.com/alvaromendoooo/paw-meet-backend",
  },
  {
    id: "tree-detector",
    title: "Tree Detector",
    status: "in-progress",
    year: "2026",
    description: {
      es: "Sistema de detección de especies de árboles y plantas en tiempo real a partir de vídeo, usando visión por computador entrenada con datos propios.",
      en: "Real-time tree and plant species detection system from live video, using computer vision trained on custom data.",
    },
    tech: ["Python", "YOLOv11", "TensorFlow", "Roboflow"],
    repo: "https://github.com/alvaromendoooo/Tree-Detector",
  },
  {
    id: "clip-studio",
    title: "ClipStudio",
    status: "live",
    year: "2026",
    description: {
      es: "Documentación técnica detallada sobre flujos de edición y creación de vídeo, estructurada como referencia reutilizable.",
      en: "Detailed technical documentation on video editing and creation workflows, structured as a reusable reference.",
    },
    tech: ["LaTeX"],
    repo: "https://github.com/alvaromendoooo/ClipStudio",
  },
]

// -----------------------------------------------------------------------------
// TEXTOS DE LA INTERFAZ  ·  UI STRINGS  (normalmente no hace falta tocarlos)
// -----------------------------------------------------------------------------

export const ui = {
  nav: {
    services: { es: "Especialización", en: "Specialization" },
    about: { es: "Sobre mí", en: "About" },
    skills: { es: "Stack", en: "Stack" },
    projects: { es: "Proyectos", en: "Projects" },
    contact: { es: "Contacto", en: "Contact" },
  },
  sections: {
    servicesKicker: { es: "En qué te puedo ayudar", en: "How I can help" },
    servicesTitle: { es: "Especialización", en: "Specialization" },
    servicesSubtitle: {
      es: "Cuatro áreas donde puedo asumir tu proyecto de principio a fin, o encajar dentro de un equipo ya existente.",
      en: "Four areas where I can own your project end to end, or fit into an existing team.",
    },
    whyKicker: { es: "Por qué trabajar conmigo", en: "Why work with me" },
    whyTitle: { es: "Lo que te llevas al contratarme", en: "What you get when you hire me" },
    aboutKicker: { es: "Sobre mí", en: "About" },
    aboutTitle: { es: "Un poco de contexto", en: "A bit of context" },
    skillsKicker: { es: "Stack técnico", en: "Technical stack" },
    skillsTitle: { es: "Con lo que trabajo", en: "What I work with" },
    projectsKicker: { es: "Proyectos", en: "Projects" },
    projectsTitle: { es: "Trabajo realizado", en: "Work delivered" },
    projectsSubtitle: {
      es: "Una selección de proyectos actuales, con foco en backend, automatización e infraestructura.",
      en: "A selection of current projects, with a focus on backend, automation and infrastructure.",
    },
    contactKicker: { es: "Contacto", en: "Contact" },
    contactTitle: { es: "¿Hablamos de tu proyecto?", en: "Let's talk about your project" },
    contactText: {
      es: "Cuéntame qué necesitas construir. Respondo en menos de 24 horas.",
      en: "Tell me what you need to build. I reply within 24 hours.",
    },
  },
  labels: {
    availability: { es: "Disponibilidad", en: "Availability" },
    location: { es: "Ubicación", en: "Location" },
    viewProjects: { es: "Ver proyectos", en: "View projects" },
    getInTouch: { es: "Hablemos de tu proyecto", en: "Let's talk" },
    repo: { es: "Código", en: "Code" },
    demo: { es: "Demo", en: "Demo" },
    comingSoon: { es: "Próximamente", en: "Coming soon" },
    featured: { es: "Destacado", en: "Featured" },
    emailMe: { es: "Enviar correo", en: "Email me" },
    backToTop: { es: "Volver arriba", en: "Back to top" },
  },
  status: {
    live: { es: "En producción", en: "Live" },
    "in-progress": { es: "En desarrollo", en: "In progress" },
    planned: { es: "Planeado", en: "Planned" },
  } as Record<ProjectStatus, Localized>,
  footer: {
    built: {
      es: "Construyendo sistemas en los que se puede confiar.",
      en: "Building systems you can rely on.",
    },
  },
}
