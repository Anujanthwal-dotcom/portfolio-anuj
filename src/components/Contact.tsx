"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, MailIcon } from "./SocialIcons";
import { siteConfig, socialLinks } from "@/lib/data";
import { Phone, MapPin, FileText } from "lucide-react";

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
        <p className="font-mono text-xs text-section-label mb-1">Get in touch</p>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Contact
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-card-border bg-card p-8 md:p-12"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Let&apos;s build something great.
            </h2>
            <p className="mt-4 max-w-md text-sm sm:text-base text-muted leading-relaxed">
              Open to Software Engineering roles, full-stack development, and Agentic AI engineering.
              Feel free to reach out directly.
            </p>

            <div className="mt-6 flex flex-col gap-2 font-mono text-xs text-muted">
              <a
                href={siteConfig.socials.email}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <MailIcon className="h-4 w-4 text-accent" />
                {siteConfig.email}
              </a>
              {"phone" in siteConfig && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {siteConfig.phone}
                </a>
              )}
              {"location" in siteConfig && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  {siteConfig.location}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.socials.email}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              >
                <MailIcon className="h-4 w-4" />
                Email me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-5 py-2.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <FileText className="h-4 w-4" />
                Resume PDF
              </a>
            </div>

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

      <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-card-border/60 pt-8 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline decoration-dotted underline-offset-4"
          >
            llms.txt
          </a>
          <span className="text-card-border">•</span>
          <a
            href="/robots.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline decoration-dotted underline-offset-4"
          >
            robots.txt
          </a>
          <span className="text-card-border">•</span>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors underline decoration-dotted underline-offset-4"
          >
            sitemap.xml
          </a>
        </div>
      </footer>
    </section>
  );
}
