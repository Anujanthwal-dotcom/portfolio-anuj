"use client";

import { useEffect, useState } from "react";

export interface LeetCodeData {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number;
  totalBadges: number;
  languages: { name: string; count: number }[];
  topics: { name: string; count: number }[];
  fallback?: boolean;
  fetchedAt?: string;
}

const FALLBACK: LeetCodeData = {
  totalSolved: 400,
  easy: 141,
  medium: 216,
  hard: 43,
  ranking: 310914,
  totalBadges: 4,
  languages: [
    { name: "Java", count: 354 },
    { name: "C++", count: 50 },
    { name: "JavaScript", count: 1 },
  ],
  topics: [
    { name: "Dynamic Programming", count: 80 },
    { name: "Hash Table", count: 64 },
    { name: "Tree", count: 63 },
    { name: "Binary Tree", count: 59 },
    { name: "Union-Find", count: 19 },
    { name: "Backtracking", count: 14 },
  ],
  fallback: true,
};

export function useLeetCode() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((json: LeetCodeData) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setData(FALLBACK);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading };
}
