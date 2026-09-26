"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "./SocialIcons";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 pb-20">
      <div id="work" className="mb-8">
        <p className="font-mono text-xs text-section-label mb-1">
          Work & Projects
        </p>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          What I&apos;ve built.
        </h2>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`group rounded-xl border bg-card p-6 md:p-8 transition-colors ${
              project.featured
                ? "border-accent/40 shadow-sm"
                : "border-card-border hover:border-accent/40"
            }`}
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {project.featured && (
                    <span className="inline-block rounded-full bg-accent/15 px-3 py-0.5 font-mono text-[11px] font-medium text-accent">
                      Featured Platform
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted">
                    {project.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center gap-3 self-start">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-card-border bg-card-border/30 p-2 text-muted transition-colors hover:border-accent hover:text-foreground"
                  aria-label={`${project.title} GitHub`}
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-5 border-t border-card-border pt-4">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                  Key Technical Highlights
                </p>
                <ul className="space-y-2">
                  {project.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.metrics && (
              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-card-border pt-4 sm:grid-cols-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-[10px] text-muted">{m.label}</div>
                    <div className="mt-0.5 text-xs sm:text-sm font-semibold text-foreground">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-card-border/50 px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
