import { NextResponse } from "next/server";
import { randomBytes } from "crypto";

const LEETCODE_API = "https://leetcode.com/graphql";
const USERNAME = "Strika_24";

const FALLBACK = {
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

async function fetchLeetCode<T>(query: string): Promise<T> {
  const csrfToken = randomBytes(16).toString("hex");
  const res = await fetch(LEETCODE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      "Origin": "https://leetcode.com",
      "Referer": "https://leetcode.com/",
      "X-CSRFToken": csrfToken,
      "Cookie": `csrftoken=${csrfToken}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 21600 },
  });

  if (!res.ok) throw new Error(`LeetCode API error: ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(`LeetCode GraphQL error: ${json.errors[0].message}`);
  return json.data;
}

interface SubmitStats {
  matchedUser: {
    submitStatsGlobal: {
      acSubmissionNum: { difficulty: string; count: number }[];
    };
    profile: { ranking: number };
    badges: { id: string }[];
  };
}

interface LanguageStats {
  matchedUser: {
    languageProblemCount: { languageName: string; problemsSolved: number }[];
  };
}

interface TopicStats {
  matchedUser: {
    tagProblemCounts: {
      advanced: { tagName: string; problemsSolved: number }[];
      intermediate: { tagName: string; problemsSolved: number }[];
      fundamental: { tagName: string; problemsSolved: number }[];
    };
  };
}

export const revalidate = 21600;

export async function GET() {
  try {
    const [stats, languages, topics] = await Promise.all([
      fetchLeetCode<SubmitStats>(`
        {
          matchedUser(username: "${USERNAME}") {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
            profile {
              ranking
            }
            badges {
              id
            }
          }
        }
      `),
      fetchLeetCode<LanguageStats>(`
        {
          matchedUser(username: "${USERNAME}") {
            languageProblemCount {
              languageName
              problemsSolved
            }
          }
        }
      `),
      fetchLeetCode<TopicStats>(`
        {
          matchedUser(username: "${USERNAME}") {
            tagProblemCounts {
              advanced { tagName problemsSolved }
              intermediate { tagName problemsSolved }
              fundamental { tagName problemsSolved }
            }
          }
        }
      `),
    ]);

    const user = stats?.matchedUser;
    if (!user) throw new Error("No user data");

    const acNums = user.submitStatsGlobal?.acSubmissionNum ?? [];
    const totalSolved = acNums.find((s) => s.difficulty === "All")?.count ?? 0;
    const easy = acNums.find((s) => s.difficulty === "Easy")?.count ?? 0;
    const medium = acNums.find((s) => s.difficulty === "Medium")?.count ?? 0;
    const hard = acNums.find((s) => s.difficulty === "Hard")?.count ?? 0;

    const languageMap = new Map<string, number>();
    languages?.matchedUser?.languageProblemCount?.forEach((l) => {
      languageMap.set(l.languageName, l.problemsSolved);
    });
    const languageList = Array.from(languageMap, ([name, count]) => ({ name, count })).sort(
      (a, b) => b.count - a.count
    );

    const topicList: { name: string; count: number }[] = [];
    const tagGroups = topics?.matchedUser?.tagProblemCounts;
    if (tagGroups) {
      Object.values(tagGroups).forEach((group) => {
        group?.forEach((t) => {
          if (t.problemsSolved > 0) topicList.push({ name: t.tagName, count: t.problemsSolved });
        });
      });
    }
    topicList.sort((a, b) => b.count - a.count);

    return NextResponse.json({
      totalSolved,
      easy,
      medium,
      hard,
      ranking: user.profile?.ranking ?? 0,
      totalBadges: user.badges?.length ?? 0,
      languages: languageList.slice(0, 5),
      topics: topicList.slice(0, 6),
      fallback: false,
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(FALLBACK, { status: 200 });
  }
}
