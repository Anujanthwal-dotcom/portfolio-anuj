"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, MailIcon } from "./SocialIcons";
import { siteConfig, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  LeetCode: LeetCodeIcon,
  Email: MailIcon,
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-8">
        <p className="font-mono text-xs text-section-label mb-1">Contact</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-card-border bg-card p-8 md:p-12"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s work together.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Open to new opportunities and interesting projects. I reply within
              24 hours.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <a
              href={siteConfig.socials.email}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <MailIcon className="h-4 w-4" />
              Get in touch
            </a>

            <div className="flex gap-4">
              {socialLinks.map(({ href, label }) => {
                const Icon = iconMap[label];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
