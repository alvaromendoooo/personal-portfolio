"use client"

import { useState } from "react"
import {
  ArrowUpRightIcon,
  AtSignIcon,
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import type { Language } from "@/lib/portfolio-data"
import { profile, projects, skills, stats, ui } from "@/lib/portfolio-data"
import { ProjectCard } from "@/components/project-card"

const navKeys = ["about", "skills", "projects", "contact"] as const

export function PortfolioShell() {
  const [language, setLanguage] = useState<Language>("es")
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"))
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="wall-bg relative min-h-screen overflow-x-hidden text-foreground">
      {/* Grano de pared / cinta sobre toda la pagina */}
      <div className="grain-overlay" />

      {/* Capas urbanas decorativas, reducidas al minimo tras retirar el mural */}
      <div aria-hidden="true" className="urban-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="urban-side-tag urban-side-tag--left">FLOW / CODE</div>
        <div className="urban-side-tag urban-side-tag--right">BUILD / REPEAT</div>
      </div>

      {/* -------------------------------------------------------------- Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a
            href="#top"
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <TagBadge />
            <span className="hidden font-mono text-xs font-bold uppercase tracking-widest sm:inline">
              {profile.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {navKeys.map((key) => (
              <NavLink key={key} href={`#${key}`}>
                {ui.nav[key][language]}
              </NavLink>
            ))}
            <LanguageToggle language={language} onToggle={toggleLanguage} />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle language={language} onToggle={toggleLanguage} />
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {menuOpen ? <XIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="border-t border-border bg-background md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
              {navKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    onClick={closeMenu}
                    className="block border-b border-border py-4 font-display text-2xl uppercase tracking-tight transition-colors hover:text-primary"
                  >
                    {ui.nav[key][language]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        {/* ------------------------------------------------------------ Hero */}
        <section className="relative flex flex-col gap-10 overflow-hidden py-16 md:py-28">
          <TagBadge
            size="lg"
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-0 -z-10 opacity-[0.06] md:-right-16 md:top-4"
          />

          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
              <span className="stencil-border inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                <span className="size-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
                {profile.availability[language]}
              </span>
              <span className="text-muted-foreground">{profile.location[language]}</span>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-tag text-lg text-primary sm:text-xl">
                {profile.role[language]} · @{profile.githubHandle}
              </p>
              <h1 className="max-w-4xl text-balance font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                {profile.headline[language]}
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {profile.intro[language]}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center gap-2 bg-primary px-6 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {ui.labels.viewProjects[language]}
                <ArrowUpRightIcon aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="stencil-border inline-flex min-h-12 items-center gap-2 px-6 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {ui.labels.getInTouch[language]}
              </a>
              <SocialLinks />
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label.en} className="flex flex-col gap-1">
                <dt className="font-display text-3xl uppercase tracking-tight md:text-5xl">
                  {stat.value}
                </dt>
                <dd className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label[language]}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ----------------------------------------------------------- About */}
        <section id="about" className="scroll-mt-24 border-t border-border py-14 md:py-20">
          <SectionHeading
            kicker={ui.sections.aboutKicker[language]}
            title={ui.sections.aboutTitle[language]}
          />
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
            <div className="tape-frame mx-auto w-36 shrink-0 border-2 border-foreground/70 sm:w-44 md:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/perfil.png"
                alt={profile.name}
                className="aspect-square w-full object-cover grayscale contrast-125"
              />
            </div>

            <div className="flex flex-col gap-5">
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                {profile.bio[language]}
              </p>
              <ul className="flex flex-wrap gap-3">
                <li className="stencil-border inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {ui.labels.availability[language]}: {profile.availability[language]}
                </li>
                <li className="stencil-border inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest">
                  {ui.labels.location[language]}: {profile.location[language]}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- Skills */}
        <section id="skills" className="scroll-mt-24 border-t border-border py-14 md:py-20">
          <SectionHeading
            kicker={ui.sections.skillsKicker[language]}
            title={ui.sections.skillsTitle[language]}
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.label.en} className="flex flex-col gap-4">
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
                  {group.label[language]}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="stencil-border bg-background/40 px-3 py-2 font-sans text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------- Projects */}
        <section id="projects" className="scroll-mt-24 border-t border-border py-14 md:py-20">
          <SectionHeading
            kicker={ui.sections.projectsKicker[language]}
            title={ui.sections.projectsTitle[language]}
            subtitle={ui.sections.projectsSubtitle[language]}
          />
          <div className="grid gap-x-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                language={language}
              />
            ))}
          </div>
        </section>

        {/* --------------------------------------------------------- Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-border py-16 md:py-24">
          <SectionHeading
            kicker={ui.sections.contactKicker[language]}
            title={ui.sections.contactTitle[language]}
          />
          <div className="flex flex-col gap-8">
            <p className="max-w-2xl text-pretty text-xl leading-relaxed md:text-2xl">
              {ui.sections.contactText[language]}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group spray-underline inline-flex w-fit items-center gap-3 font-display text-2xl uppercase tracking-tight transition-colors hover:text-primary sm:text-4xl md:text-6xl"
            >
              <MailIcon aria-hidden="true" className="shrink-0" />
              <span>{profile.email}</span>
              <SprayStroke className="text-primary" />
            </a>
            <SocialLinks withLabels />
          </div>
        </section>
      </main>

      {/* -------------------------------------------------------------- Footer */}
      <footer className="relative z-10 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex-row md:items-center md:px-8">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{ui.footer.built[language]}</span>
          <a
            href="#top"
            className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {ui.labels.backToTop[language]} ↑
          </a>
        </div>
      </footer>
    </div>
  )

  function SocialLinks({ withLabels = false }: { withLabels?: boolean }) {
    const socials = [
      { key: "github", href: profile.links.github, icon: CodeXmlIcon, label: "GitHub" },
      {
        key: "linkedin",
        href: profile.links.linkedin,
        icon: BriefcaseBusinessIcon,
        label: "LinkedIn",
      },
      { key: "twitter", href: profile.links.twitter, icon: AtSignIcon, label: "Twitter" },
    ].filter((s) => s.href)

    return (
      <ul className="flex flex-wrap items-center gap-3">
        {socials.map(({ key, href, icon: Icon, label }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "stencil-border inline-flex min-h-11 items-center gap-2 px-3 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                !withLabels && "size-11 justify-center px-0"
              )}
            >
              <Icon aria-hidden="true" />
              {withLabels ? (
                <span className="font-mono text-xs uppercase tracking-widest">{label}</span>
              ) : (
                <span className="sr-only">{label}</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    )
  }
}

/** Insignia tipo boquilla de spray con las iniciales, usada como firma/logo */
function TagBadge({
  size = "sm",
  className,
  ...rest
}: {
  size?: "sm" | "lg"
  className?: string
  "aria-hidden"?: boolean | "true" | "false"
}) {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <span
      {...rest}
      className={cn(
        "tag-badge select-none",
        size === "sm" ? "size-9 text-xs" : "size-48 text-7xl md:size-64 md:text-9xl",
        className
      )}
    >
      {initials}
    </span>
  )
}

/** Trazo dibujado a mano, fino y controlado, reutilizado como subrayado */
function SprayStroke({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 8 C 30 4, 55 11, 85 7 S 140 4, 170 8 S 195 9 198 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <span className="spray-underline">
        {children}
        <SprayStroke className="text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </span>
    </a>
  )
}

function LanguageToggle({
  language,
  onToggle,
}: {
  language: Language
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
      className="stencil-border inline-flex min-h-9 items-center gap-1 px-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span className={cn(language === "es" ? "text-foreground" : "text-muted-foreground")}>
        ES
      </span>
      <span className="text-border">/</span>
      <span className={cn(language === "en" ? "text-foreground" : "text-muted-foreground")}>
        EN
      </span>
    </button>
  )
}

function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:mb-14">
      <span className="font-tag text-sm text-primary sm:text-base">{kicker}</span>
      <h2 className="max-w-3xl text-balance font-display text-3xl uppercase leading-none tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
