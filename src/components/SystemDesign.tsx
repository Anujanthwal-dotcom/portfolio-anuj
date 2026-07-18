"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { systemDesign } from "@/lib/data";

export default function SystemDesign() {
  return (
    <section id="system-design" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-mono text-xs text-section-label mb-1">
            System Design
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Designing at Scale
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-hover"
        >
          View all <ArrowRight size={14} />
        </a>
      </div>

      <div className="space-y-4">
        {systemDesign.map((item, i) => (
          <motion.a
            key={item.slug}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group block rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50 md:p-8"
          >
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="font-mono">{item.date}</span>
              <span>&middot;</span>
              <span className="rounded-md bg-card-border/50 px-2 py-0.5 font-mono text-xs">
                {item.category}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
