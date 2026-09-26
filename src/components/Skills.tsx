"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { Sparkles, Code2, Layers, Database, Wrench, GitFork } from "lucide-react";

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Languages: Code2,
  "Frameworks & Libraries": Layers,
  "Agentic AI": Sparkles,
  "Databases & Cloud": Database,
  "Tools & Platforms": Wrench,
  "Concepts & Architecture": GitFork,
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-8">
        <p className="font-mono text-xs text-section-label mb-1">
          Technical Arsenal
        </p>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Skills & Technologies
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = categoryIconMap[cat.category] || Code2;
          const isAgentic = cat.category === "Agentic AI";

          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className={`rounded-xl border bg-card p-5 transition-all ${
                isAgentic
                  ? "border-accent/40 shadow-sm ring-1 ring-accent/20"
                  : "border-card-border hover:border-accent/30"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    isAgentic
                      ? "bg-accent/15 text-accent"
                      : "bg-card-border/60 text-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight">
                    {cat.category}
                  </h3>
                  {isAgentic && (
                    <span className="font-mono text-[10px] text-accent font-medium">
                      Specialized Focus
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
                      isAgentic
                        ? "bg-accent/10 text-foreground border border-accent/20 font-medium"
                        : "bg-card-border/40 text-muted border border-card-border/50 hover:text-foreground"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
