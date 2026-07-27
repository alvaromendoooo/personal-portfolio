import { ArrowUpRightIcon, CodeXmlIcon, RadioIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Language, Project } from "@/lib/portfolio-data"
import { ui } from "@/lib/portfolio-data"

type ProjectCardProps = {
  project: Project
  index: number
  language: Language
}

const statusStyles: Record<Project["status"], string> = {
  live: "border-accent text-accent",
  "in-progress": "border-secondary text-secondary",
  planned: "border-muted-foreground text-muted-foreground",
}

export function ProjectCard({ project, index, language }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <article
      className={cn(
        "group relative flex min-h-80 flex-col justify-between overflow-hidden pt-7 pb-6 transition-colors duration-300 md:min-h-96 md:pt-8 md:pb-8",
        project.featured && "md:col-span-2"
      )}
    >
      {/* franja de spray en vez de un simple hairline */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="stencil-border inline-flex size-7 items-center justify-center">
            {number}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border-2 border-dashed px-3 py-1 font-medium tracking-wide",
              statusStyles[project.status]
            )}
          >
            {project.status === "live" && <RadioIcon aria-hidden="true" />}
            {ui.status[project.status][language]}
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
      </div>

      <div className="flex flex-col gap-5">
        {project.featured && (
          <span className="font-tag w-fit -rotate-3 bg-primary px-3 py-1 text-sm text-primary-foreground">
            {ui.labels.featured[language]}
          </span>
        )}
        <div className="flex flex-col gap-3">
          <h3 className="text-balance font-display text-3xl uppercase leading-none tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">
            {project.title}
          </h3>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.description[language]}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="stencil-border px-3 py-1 font-mono text-xs text-foreground"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-5">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest underline decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <CodeXmlIcon aria-hidden="true" />
              {ui.labels.repo[language]}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest underline decoration-2 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {ui.labels.demo[language]}
              <ArrowUpRightIcon aria-hidden="true" />
            </a>
          )}
          {!project.repo && !project.demo && (
            <span className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {ui.labels.comingSoon[language]}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
