import { ArrowUpRightIcon, CodeXmlIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import type { Language, Project } from "@/lib/portfolio-data"
import { ui } from "@/lib/portfolio-data"

type ProjectCardProps = {
  project: Project
  index: number
  language: Language
}

const statusStyles: Record<Project["status"], string> = {
  live: "border-primary text-primary",
  "in-progress": "border-secondary text-secondary",
  planned: "border-muted-foreground text-muted-foreground",
}

export function ProjectCard({ project, index, language }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <article
      className={cn(
        "panel-border group relative flex min-h-80 flex-col justify-between gap-6 bg-card p-6 transition-colors duration-200 hover:border-foreground md:min-h-96 md:p-8",
        project.featured && "md:col-span-2"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="panel-border inline-flex size-7 items-center justify-center">
            {number}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 border px-2.5 py-1 font-medium tracking-wide",
              statusStyles[project.status]
            )}
          >
            {project.status === "live" && (
              <span className="status-dot size-1.5 rounded-full bg-current" aria-hidden="true" />
            )}
            {ui.status[project.status][language]}
          </span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6">
        <div className="flex flex-col gap-4">
          {project.featured && (
            <span className="w-fit border border-primary px-2.5 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-primary">
              {ui.labels.featured[language]}
            </span>
          )}
          <div className="flex flex-col gap-3">
            <h3 className="text-balance font-display text-2xl font-bold uppercase leading-tight tracking-tight md:text-3xl">
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
                className="border border-border px-2.5 py-1 font-mono text-xs text-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-5 border-t border-border pt-5">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <CodeXmlIcon aria-hidden="true" className="size-4" />
              {ui.labels.repo[language]}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {ui.labels.demo[language]}
              <ArrowUpRightIcon aria-hidden="true" className="size-4" />
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
