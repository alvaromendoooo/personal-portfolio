"use client"

import { useState } from "react"
import { ArrowUpRightIcon, BriefcaseBusinessIcon, CodeXmlIcon, MailIcon, MenuIcon, RssIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/portfolio-data"
import { currentFocus, profile, projects, services, stats, ui, writing } from "@/lib/portfolio-data"

const navKeys = ["about", "projects", "writing", "contact"] as const

export function PortfolioShell() {
  const [language, setLanguage] = useState<Language>("es")
  const [menuOpen, setMenuOpen] = useState(false)
  const t = (value: { es: string; en: string }) => value[language]
  const toggleLanguage = () => setLanguage(language === "es" ? "en" : "es")

  return (
    <div className="site-shell min-h-screen">
      <header className="site-header">
        <div className="site-container flex h-20 items-center justify-between">
          <a href="#top" className="brand"><span className="brand-mark">AM</span><span className="hidden sm:inline">Álvaro Mendo</span></a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navKeys.map((key) => <a key={key} href={`#${key}`} className="nav-link">{ui.nav[key][language]}</a>)}
            <LanguageToggle language={language} onToggle={toggleLanguage} />
          </nav>
          <div className="flex items-center gap-2 md:hidden"><LanguageToggle language={language} onToggle={toggleLanguage} /><button type="button" className="icon-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <XIcon /> : <MenuIcon />}</button></div>
        </div>
        {menuOpen && <nav className="mobile-nav md:hidden" aria-label="Mobile navigation">{navKeys.map((key) => <a key={key} href={`#${key}`} onClick={() => setMenuOpen(false)}>{ui.nav[key][language]}</a>)}</nav>}
      </header>

      <main id="top" className="site-container">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> {profile.availability[language]} · {profile.location[language]}</p>
            <p className="role-label">{profile.role[language]}</p>
            <h1>{profile.headline[language]}</h1>
            <p className="hero-intro">{profile.intro[language]}</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">{ui.labels.viewProjects[language]} <ArrowUpRightIcon /></a><a className="text-link" href={`mailto:${profile.email}`}>{ui.labels.getInTouch[language]} <ArrowUpRightIcon /></a></div>
            <SocialLinks />
          </div>
          <aside className="focus-note"><span className="note-label">{language === "es" ? "Ahora mismo" : "Right now"}</span><p>{t(currentFocus)}</p><span className="note-line" /><span className="note-meta">{language === "es" ? "Construyendo · aprendiendo · documentando" : "Building · learning · documenting"}</span></aside>
        </section>

        <section className="stats-row" aria-label="Portfolio highlights">{stats.map((stat) => <div key={stat.label.en}><strong>{stat.value}</strong><span>{t(stat.label)}</span></div>)}</section>

        <section id="about" className="content-section about-section"><SectionIntro label={t(ui.sections.aboutKicker)} title={language === "es" ? "Un poco de contexto" : "A little context"} /><div className="about-grid"><div className="portrait-wrap"><img src="/perfil.png" alt={profile.name} /></div><div className="about-copy"><p>{profile.bio[language]}</p><div className="about-details"><span>{profile.location[language]}</span><span>{language === "es" ? "Abierto a oportunidades" : "Open to opportunities"}</span></div></div></div></section>

        <section id="services" className="content-section focus-section"><SectionIntro label={t(ui.sections.servicesKicker)} title={t(ui.sections.servicesTitle)} /><div className="focus-grid">{services.slice(0, 3).map((service) => <article key={service.id} className="focus-card"><span className="focus-number">{service.code}</span><h3>{t(service.title)}</h3><p>{t(service.description)}</p><span className="focus-tech">{service.tech.slice(0, 3).join(" · ")}</span></article>)}</div></section>

        <section id="projects" className="content-section"><SectionIntro label={t(ui.sections.projectsKicker)} title={t(ui.sections.projectsTitle)} subtitle={t(ui.sections.projectsSubtitle)} /><div className="project-list">{projects.slice(0, 3).map((project, index) => <article key={project.id} className="project-row"><span className="project-index">0{index + 1}</span><div className="project-main"><div className="project-heading"><h3>{project.title}</h3><span>{project.year}</span></div><p>{t(project.description)}</p><div className="project-tech">{project.tech.slice(0, 6).map((item) => <span key={item}>{item}</span>)}</div></div><div className="project-links">{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`}><CodeXmlIcon /></a>}<ArrowUpRightIcon className="project-arrow" /></div></article>)}</div></section>

        <section id="writing" className="content-section writing-section"><SectionIntro label={language === "es" ? "Notas" : "Writing"} title={language === "es" ? "Pensando en voz alta" : "Thinking out loud"} subtitle={language === "es" ? "Notas sobre backend, sistemas y el proceso de aprender construyendo." : "Notes on backend, systems and learning by building."} /><div className="writing-list">{writing.map((post) => <a className="writing-row" key={post.slug} href={`/writing/${post.slug}`}><div><span className="post-date">{post.date} · {post.readingTime}</span><h3>{t(post.title)}</h3><p>{t(post.excerpt)}</p></div><ArrowUpRightIcon /></a>)}</div></section>

        <section id="contact" className="contact-section"><p className="eyebrow">{t(ui.sections.contactKicker)}</p><h2>{language === "es" ? "¿Construimos algo con sentido?" : "Want to build something useful?"}</h2><p>{t(ui.sections.contactText)}</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRightIcon /></a><SocialLinks withLabels /></section>
      </main>
      <footer className="site-footer"><div className="site-container"><span>© {new Date().getFullYear()} {profile.name}</span><span>{ui.footer.built[language]}</span><a href="#top">↑ {ui.labels.backToTop[language]}</a></div></footer>
    </div>
  )
}

function SectionIntro({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) { return <div className="section-intro"><p className="eyebrow">{label}</p><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div> }
function LanguageToggle({ language, onToggle }: { language: Language; onToggle: () => void }) { return <button className="language-toggle" type="button" onClick={onToggle} aria-label="Change language">{language === "es" ? "ES / EN" : "EN / ES"}</button> }
function SocialLinks({ withLabels = false }: { withLabels?: boolean }) {
  const socials = [{ href: profile.links.github, label: "GitHub", icon: CodeXmlIcon }, { href: profile.links.linkedin, label: "LinkedIn", icon: BriefcaseBusinessIcon }].filter((item) => item.href)
  return <ul className={cn("social-links", withLabels && "social-links-labeled")}>{socials.map(({ href, label, icon: Icon }) => <li key={label}><a href={href} target="_blank" rel="noreferrer"><Icon />{withLabels && <span>{label}</span>}</a></li>)}<li><a href={`mailto:${profile.email}`}><MailIcon />{withLabels && <span>Email</span>}</a></li>{!withLabels && <li><a href="#writing" aria-label="Writing"><RssIcon /></a></li>}</ul>
}
