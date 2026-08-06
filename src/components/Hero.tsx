"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, MailIcon } from "./SocialIcons";
import { siteConfig, stats, tags, socialLinks } from "@/lib/data";
import { useLeetCode } from "@/lib/useLeetCode";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  LeetCode: LeetCodeIcon,
  Email: MailIcon,
};

const hoverClassMap: Record<string, string> = {
  GitHub: "hover:text-social-github",
  LinkedIn: "hover:text-social-linkedin",
  LeetCode: "hover:text-yellow-500",
  Email: "hover:text-social-email",
};

export default function Hero() {
  const { data: leetCodeData } = useLeetCode();

  const liveStats = stats.map((stat) =>
    stat.label === "DSA problems solved"
      ? { ...stat, value: leetCodeData ? String(leetCodeData.totalSolved) : "…" }
      : stat
  );

  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 pt-24 md:pt-32">
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-3 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse-dot" />
            <span className="font-mono text-xs text-muted">
              {siteConfig.role}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold leading-tight tracking-tight md:text-6xl md:leading-tight"
          >
            Building products{" "}
            <span className="font-serif italic font-normal">
              people actually use.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-card-border bg-card px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex gap-4"
          >
            {socialLinks.map(({ href, label }) => {
              const Icon = iconMap[label];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-muted transition-colors ${hoverClassMap[label]}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="shrink-0"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-card-border bg-card md:h-72 md:w-72">
            <Image
              src={siteConfig.portrait}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 grid grid-cols-3 gap-4 border-t border-card-border pt-8"
      >
        {liveStats.map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl font-bold tracking-tight md:text-3xl">
              {stat.value}
            </div>
            <div className="mt-1 font-mono text-xs text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
