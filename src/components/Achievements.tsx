"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-8">
        <p className="font-mono text-xs text-section-label mb-1">Hall of Fame</p>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Achievements
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group overflow-hidden rounded-xl border border-card-border bg-card"
          >
            {(item as Record<string, unknown>).link ? (
              <a
                href={(item as Record<string, string>).link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative min-h-[200px] bg-card-border p-4">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-auto w-full object-contain"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Trophy size={32} className="text-muted/30" />
                    </div>
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-white">
                    {item.badge}
                  </span>
                </div>
              </a>
            ) : (
              <div className="relative min-h-[200px] bg-card-border p-4">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="h-auto w-full object-contain"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy size={32} className="text-muted/30" />
                  </div>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-white">
                  {item.badge}
                </span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <p className="mt-3 font-mono text-[10px] text-section-label">
                {item.organizer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
