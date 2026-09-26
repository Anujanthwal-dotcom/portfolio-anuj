"use client";

import { motion } from "framer-motion";
import { Trophy, GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { achievements, education, certifications } from "@/lib/data";

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-8">
        <p className="font-mono text-xs text-section-label mb-1">Recognition</p>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Achievements & Credentials
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-xl border border-card-border bg-card"
          >
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative h-48 bg-card-border/30 p-4">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Trophy size={32} className="text-muted/30" />
                    </div>
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-medium text-white shadow-sm">
                    {item.badge}
                  </span>
                </div>
              </a>
            ) : (
              <div className="relative h-48 bg-card-border/30 p-4">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy size={32} className="text-muted/30" />
                  </div>
                )}
                <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-medium text-white shadow-sm">
                  {item.badge}
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h3 className="text-base font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              <p className="mt-4 font-mono text-[10px] text-section-label">
                {item.organizer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Certifications */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-card-border bg-card p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-card-border/60 text-muted">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                Education
              </p>
              <h3 className="text-sm font-bold">{education.institution}</h3>
            </div>
          </div>
          <p className="text-sm font-medium text-foreground">
            {education.degree}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {education.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {education.location}
            </span>
          </div>
        </motion.div>

        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border border-card-border bg-card p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    Certification
                  </p>
                  <h3 className="text-sm font-bold">{cert.issuer}</h3>
                </div>
              </div>
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] text-accent font-medium">
                {cert.badge}
              </span>
            </div>
            <p className="text-sm font-medium text-foreground">{cert.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {cert.description}
            </p>
            <div className="mt-3 font-mono text-xs text-muted">
              Issued: {cert.date}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
