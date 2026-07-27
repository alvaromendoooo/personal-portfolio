/**
 * =============================================================================
 *  PORTFOLIO DATA  ·  DATOS DEL PORTFOLIO
 * =============================================================================
 *
 *  ESPAÑOL:
 *  Este es el ÚNICO archivo que necesitas editar para actualizar tu portfolio.
 *  - Cambia tus datos personales en `profile`.
 *  - Añade o edita habilidades en `skills`.
 *  - Añade proyectos al array `projects`. Copia un objeto existente y modifícalo.
 *  No hace falta tocar el resto del código.
 *
 *  ENGLISH:
 *  This is the ONLY file you need to edit to update your portfolio.
 *  - Change your personal info in `profile`.
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
    es: "Ingeniero de Software",
    en: "Software Engineer",
  } satisfies Localized,
  /** Titular grande del hero / Big hero headline */
  headline: {
    es: "Construyo para aprender, desarrollar habilidades y perfeccionarlas",
    en: "I build software to learn, build new skills and improve them",
  } satisfies Localized,
  /** Presentación breve / Short intro */
  intro: {
    es: "Ingeniero informático centrado en el desarrollo full-stack y automatización de tareas. Me gusta satisfacer las necesidades de los clientes, consiguiendo un resultado limpio y mantenible.",
    en: "Computer engineer focused on full-stack development and tasks automation. I like to satisfy clients' needs, achieving clean results and sustainable. ",
  } satisfies Localized,
  /** Biografía más larga para la sección Sobre mí / Longer bio for the About section */
  bio: {
    es: "Recién egresado en Ingeniería Informática. Me muevo bien entre frontend y backend, con una obsesión por el detalle y el buen gusto en cada proyecto que construyo.",
    en: "Recent Computer Engineering graduate. I move comfortably between frontend and backend, with an obsession for detail and good taste in every project I build.",
  } satisfies Localized,
  /** Ubicación / Location */
  location: {
    es: "Plasencia, España",
    en: "Plasencia, Spain",
  } satisfies Localized,
  /** Estado de disponibilidad / Availability status */
  availability: {
    es: "Disponible para proyectos en remoto",
    en: "Available for remote projects",
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
  { value: "5+", label: { es: "Años programando", en: "Years coding" } },
  { value: "2+", label: { es: "Proyectos entregados", en: "Projects shipped" } },
  { value: "∞", label: { es: "Dolores de cabeza", en: "Headaches" } },
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
    items: ["Flask", "Django", "PostgreSQL", "Redis", "RavenDB", "REST", "RabbitMQ", "Celery", "FastMCP", "Spring Boot"],
  },
  {
    label: { es: "Herramientas", en: "Tools" },
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
    id: "tree-detector",
    title: "Tree Detector",
    status: "in-progress",
    year: "2026",
    featured: true,
    description: {
      es: "Un sistema detector de tipos de árboles y plantas utilizando una cámara en tiempo real.",
      en: "A system for identifying tree and plants species using a real-time camera.",
    },
    tech: ["Python", "YOLOv11", "TensorFlow", "Roboflow", "Lua"],
    repo: "https://github.com/alvaromendoooo/Tree-Detector",
  },
  {
    id: "paw-meet-backend",
    title: "Paw Meet Backend",
    status: "live",
    year: "2026",
    featured: true,
    description: {
      es: "Infraestructura servidora para la aplicación Paw Meet.",
      en: "Paw-Meet's server infraestructure.",
    },
    tech: ["Python", "Django", "Docker", "Celery", "Resend"],
    repo: "https://github.com/alvaromendoooo/paw-meet-backend",
  },
  {
    id: "clip-studio",
    title: "ClipStudio",
    status: "live",
    year: "2026",
    description: {
      es: "Repositorio con documentación detallada sobre el contexto de edición y creación de vídeos.",
      en: "A repository with spanish detailed documentation about editing and creating videos.",
    },
    tech: ["LaTeX"],
    repo: "https://github.com/alvaromendoooo/ClipStudio",
  },
  {
    id: "agro-predict",
    title: "AgroPredict",
    status: "live",
    year: "2026",
    description: {
      es: "Infraestructura servidora para el análisis de riesgos climáticos sobre cultivos.",
      en: "Service infraestructre for the analysis of climate risks to crops.",
    },
    tech: ["Python", "ReportLab", "Java", "Spring-Boot", "Flask", "Elixir", "Docker", "Terraform", "Celery", "MariaDB", "FastMCP", "RabbitMQ", "OLLAMA", "..."],
    repo: "https://github.com/agro-predict-tfg-2026"
  },
]

// -----------------------------------------------------------------------------
// TEXTOS DE LA INTERFAZ  ·  UI STRINGS  (normalmente no hace falta tocarlos)
// -----------------------------------------------------------------------------

export const ui = {
  nav: {
    about: { es: "Sobre mí", en: "About" },
    skills: { es: "Habilidades", en: "Skills" },
    projects: { es: "Proyectos", en: "Projects" },
    contact: { es: "Contacto", en: "Contact" },
  },
  sections: {
    aboutKicker: { es: "Sobre mí", en: "About" },
    aboutTitle: { es: "Un poco de contexto", en: "A bit of context" },
    skillsKicker: { es: "Habilidades", en: "Skills" },
    skillsTitle: { es: "Con lo que trabajo", en: "What I work with" },
    projectsKicker: { es: "Proyectos", en: "Projects" },
    projectsTitle: { es: "Cosas que he construido", en: "Things I've built" },
    projectsSubtitle: {
      es: "Una selección de proyectos actuales y otros que quiero construir.",
      en: "A selection of current projects and others I want to build.",
    },
    contactKicker: { es: "Contacto", en: "Contact" },
    contactTitle: { es: "¿Construimos algo juntos?", en: "Let's build something?" },
    contactText: {
      es: "Estoy abierto a colaboraciones, proyectos freelance y buenas conversaciones sobre código.",
      en: "I'm open to collaborations, freelance projects and good conversations about code.",
    },
  },
  labels: {
    availability: { es: "Disponibilidad", en: "Availability" },
    location: { es: "Ubicación", en: "Location" },
    viewProjects: { es: "Ver proyectos", en: "View projects" },
    getInTouch: { es: "Escríbeme", en: "Get in touch" },
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
      es: "Aspirando a mejorar mi futuro.",
      en: "Hoping to improve my future.",
    },
  },
}