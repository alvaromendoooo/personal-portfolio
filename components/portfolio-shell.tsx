"use client"

import { useState } from "react"
import {
  ArrowUpRightIcon,
  AtSignIcon,
  BriefcaseBusinessIcon,
  CheckIcon,
  CodeXmlIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import type { Language } from "@/lib/portfolio-data"
import { profile, projects, services, skills, stats, ui, whyHireMe } from "@/lib/portfolio-data"
import { ProjectCard } from "@/components/project-card"

const navKeys = ["services", "projects", "about", "skills", "contact"] as const

export function PortfolioShell() {
  const [language, setLanguage] = useState<Language>("es")
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"))
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="grid-surface relative min-h-screen overflow-x-hidden text-foreground">
      {/* -------------------------------------------------------------- Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a
            href="#top"
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <MarkBadge />
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
                    className="block border-b border-border py-4 font-display text-xl font-bold uppercase tracking-tight transition-colors hover:text-primary"
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
        <section className="flex flex-col gap-10 py-16 md:py-24">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
              <span className="panel-border inline-flex items-center gap-2 px-3 py-1.5 text-primary">
                <span className="status-dot size-1.5 rounded-full bg-current" aria-hidden="true" />
                {profile.availability[language]}
              </span>
              <span className="text-muted-foreground">{profile.location[language]}</span>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm font-bold uppercase tracking-widest text-primary sm:text-base">
                {profile.role[language]}
              </p>
              <h1 className="max-w-4xl text-balance font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                {profile.headline[language]}
              </h1>
            </div>

            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {profile.intro[language]}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center gap-2 bg-primary px-6 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {ui.labels.getInTouch[language]}
                <ArrowUpRightIcon aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#projects"
                className="panel-border-strong inline-flex min-h-12 items-center gap-2 px-6 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {ui.labels.viewProjects[language]}
              </a>
              <SocialLinks />
            </div>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label.en} className="flex flex-col gap-1">
                <dt className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                  {stat.value}
                </dt>
                <dd className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label[language]}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* -------------------------------------------------------- Services */}
        <section id="services" className="scroll-mt-24 border-t border-border py-14 md:py-20">
          <SectionHeading
            kicker={ui.sections.servicesKicker[language]}
            title={ui.sections.servicesTitle[language]}
            subtitle={ui.sections.servicesSubtitle[language]}
          />
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col gap-4 bg-background p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-muted-foreground">
                    {service.code}
                  </span>
                  <span className="status-dot size-1.5 rounded-full bg-primary text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl">
                  {service.title[language]}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                  {service.description[language]}
                </p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.tech.map((item) => (
                    <li
                      key={item}
                      className="border border-border px-2 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------------------------------------------- Why hire */}
        <section className="border-t border-border py-14 md:py-20">
          <SectionHeading
            kicker={ui.sections.whyKicker[language]}
            title={ui.sections.whyTitle[language]}
          />
          <div className="grid gap-8 md:grid-cols-3">
            {whyHireMe.map((item) => (
              <div key={item.title.en} className="flex flex-col gap-3">
                <span className="inline-flex size-8 items-center justify-center border border-primary text-primary">
                  <CheckIcon aria-hidden="true" className="size-4" />
                </span>
                <h3 className="font-display text-lg font-bold uppercase leading-snug tracking-tight">
                  {item.title[language]}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description[language]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------- About */}
        <section id="about" className="scroll-mt-24 border-t border-border py-14 md:py-20">
          <SectionHeading
            kicker={ui.sections.aboutKicker[language]}
            title={ui.sections.aboutTitle[language]}
          />
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
            <div className="corner-frame mx-auto w-36 shrink-0 border border-border sm:w-44 md:mx-0">
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
                <li className="panel-border inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {ui.labels.availability[language]}: {profile.availability[language]}
                </li>
                <li className="panel-border inline-flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-widest">
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
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-primary">
                  {group.label[language]}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="panel-border bg-card px-3 py-2 font-sans text-sm font-medium transition-colors duration-150 hover:border-foreground"
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
          <div className="grid gap-6 md:grid-cols-2">
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
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              {ui.sections.contactText[language]}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex w-fit items-center gap-3 border-b-2 border-foreground font-display text-2xl font-bold uppercase tracking-tight transition-colors hover:border-primary hover:text-primary sm:text-3xl md:text-5xl"
            >
              <MailIcon aria-hidden="true" className="shrink-0" />
              <span>{profile.email}</span>
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
                "panel-border inline-flex min-h-11 items-center gap-2 px-3 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                !withLabels && "size-11 justify-center px-0"
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
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

/** Monograma cuadrado con las iniciales, usado como firma/logo */
function MarkBadge() {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <span className="mark-badge size-9 text-xs" aria-hidden="true">
      {initials}
    </span>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      {children}
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
      className="panel-border inline-flex min-h-9 items-center gap-1 px-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
        {kicker}
      </span>
      <h2 className="max-w-3xl text-balance font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
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
