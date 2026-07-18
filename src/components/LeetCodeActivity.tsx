"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LeetCodeData {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number;
  totalBadges: number;
  acceptanceRate: number;
  fallback?: boolean;
}

export default function LeetCodeActivity() {
  const [data, setData] = useState<LeetCodeData | null>(null);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then(setData)
      .catch(() =>
        setData({
          totalSolved: 397,
          easy: 0,
          medium: 0,
          hard: 0,
          ranking: 314560,
          totalBadges: 4,
          acceptanceRate: 0,
        })
      );
  }, []);

  const stats = data ?? {
    totalSolved: 397,
    easy: 0,
    medium: 0,
    hard: 0,
    ranking: 314560,
    totalBadges: 4,
    acceptanceRate: 0,
  };

  const difficultyData = [
    { label: "Easy", count: stats.easy, color: "bg-green-500" },
    { label: "Medium", count: stats.medium, color: "bg-yellow-500" },
    { label: "Hard", count: stats.hard, color: "bg-red-500" },
  ];

  const topics = [
    { name: "Arrays", count: 221 },
    { name: "Dynamic Programming", count: 77 },
    { name: "Binary Search", count: 71 },
    { name: "Depth-First Search", count: 71 },
    { name: "String", count: 68 },
    { name: "Hash Table", count: 63 },
  ];
  const maxCount = Math.max(...topics.map((t) => t.count));

  return (
    <section id="dsa" className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-8">
        <p className="font-mono text-xs text-section-label mb-1">
          LeetCode Activity
        </p>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          DSA in motion.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-card-border bg-card p-6 text-center"
        >
          <div className="text-3xl font-bold">{stats.totalSolved}</div>
          <div className="mt-1 font-mono text-xs text-muted">Total Solved</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-xl border border-card-border bg-card p-6 text-center"
        >
          <div className="text-3xl font-bold">
            #{stats.ranking.toLocaleString()}
          </div>
          <div className="mt-1 font-mono text-xs text-muted">Ranking</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-xl border border-card-border bg-card p-6 text-center"
        >
          <div className="text-3xl font-bold">{stats.totalBadges}</div>
          <div className="mt-1 font-mono text-xs text-muted">Badges</div>
        </motion.div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-xl border border-card-border bg-card p-6"
        >
          <h3 className="mb-4 font-mono text-[10px] uppercase tracking-wider text-muted">
            Difficulty Breakdown
          </h3>
          <div className="space-y-3">
            {difficultyData.map((d) => (
              <div key={d.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{d.label}</span>
                  <span className="font-mono text-xs text-muted">{d.count}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-card-border">
                  <motion.div
                    className={`h-full rounded-full ${d.color}`}
                    initial={{ width: 0 }}
                    whileInView={{
                      width: stats.totalSolved > 0
                        ? `${(d.count / stats.totalSolved) * 100}%`
                        : "0%",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
          {stats.acceptanceRate > 0 && (
            <div className="mt-4 font-mono text-xs text-muted">
              Acceptance: {stats.acceptanceRate}%
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="rounded-xl border border-card-border bg-card p-6"
        >
          <h3 className="mb-4 font-mono text-[10px] uppercase tracking-wider text-muted">
            Languages
          </h3>
          <div className="space-y-3">
            {[
              { name: "Java", count: 354 },
              { name: "C++", count: 42 },
              { name: "JavaScript", count: 1 },
            ].map((l) => (
              <div key={l.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="font-mono text-xs text-muted">{l.count}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-card-border">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${(l.count / 397) * 100}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="rounded-xl border border-card-border bg-card p-6"
        >
          <h3 className="mb-4 font-mono text-[10px] uppercase tracking-wider text-muted">
            Topic Coverage
          </h3>
          <div className="space-y-3">
            {topics.map((t) => (
              <div key={t.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="font-mono text-xs text-muted">{t.count}</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-card-border">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${(t.count / maxCount) * 100}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-4 rounded-xl border border-card-border bg-card p-6 text-center"
      >
        <a
          href="https://leetcode.com/u/Strika_24/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-accent hover:underline"
        >
          View full LeetCode profile &rarr;
        </a>
      </motion.div>
    </section>
  );
}
