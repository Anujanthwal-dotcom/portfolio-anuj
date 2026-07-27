"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "./SocialIcons";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-8">
        <p className="font-mono text-xs text-section-label mb-1">
          Work & Projects
        </p>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          What I&apos;ve built
        </h2>
      </div>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-xl border bg-card p-6 md:p-8 transition-colors hover:border-accent/50"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                {project.featured && (
                  <span className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
                    Featured
                  </span>
                )}
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 max-w-2xl text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="ml-4 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                  aria-label={`${project.title} GitHub`}
                >
                  <GithubIcon className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>

            {project.metrics && (
              <div className="mt-6 flex gap-6 border-t border-card-border pt-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-xs text-muted">{m.label}</div>
                    <div className="mt-0.5 text-sm font-semibold">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-card-border/50 px-3 py-1 font-mono text-xs text-muted"
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
