"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-8">
        <p className="font-mono text-xs text-section-label mb-1">Experience</p>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Where I&apos;ve contributed.
        </h2>
      </div>

      <div className="space-y-4">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-xl border bg-card p-6 md:p-8 ${
              job.type === "main"
                ? "border-accent/30"
                : "border-card-border"
            }`}
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card-border font-serif text-sm font-bold text-muted">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{job.role}</h3>
                  <p className="text-sm text-muted">{job.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-card-border/50 px-3 py-1 font-mono text-[10px] text-muted">
                  {job.badge}
                </span>
                <span className="font-mono text-xs text-muted">
                  {job.period}
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              {job.description}
            </p>

            {job.metrics && (
              <div className="mt-5 flex gap-6 border-t border-card-border pt-4">
                {job.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-mono text-[10px] text-muted">
                      {m.label}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold">{m.value}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                  What I did
                </p>
                <ul className="space-y-1.5">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-card-border/50 px-2.5 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
