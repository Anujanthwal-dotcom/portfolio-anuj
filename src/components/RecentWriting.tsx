"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { recentWriting } from "@/lib/data";

export default function RecentWriting() {
  return (
    <section id="blog" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-mono text-xs text-section-label mb-1">
            Recent Writing
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            From the blog
          </h2>
        </div>
        <a
          href="#"
          className="flex items-center gap-1 text-sm text-accent transition-colors hover:text-accent-hover"
        >
          View all <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {recentWriting.map((post, i) => (
          <motion.a
            key={post.slug}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="font-mono">{post.date}</span>
              <span>&middot;</span>
              <span>{post.category}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-snug group-hover:text-accent transition-colors">
              {post.title}
            </h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
