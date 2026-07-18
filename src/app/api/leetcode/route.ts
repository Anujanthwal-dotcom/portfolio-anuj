import { NextResponse } from "next/server";

const LEETCODE_API = "https://leetcode.com/graphql";

async function fetchLeetCode<T>(query: string): Promise<T> {
  const res = await fetch(LEETCODE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Referer: "https://leetcode.com",
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error(`LeetCode API error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function GET() {
  try {
    const data = await fetchLeetCode<{
      matchedUser: {
        submitStatsGlobal: {
          acSubmissionNum: { difficulty: string; count: number }[];
          totalAcceptedRaw: number;
          totalSubmissionsRaw: number;
        };
        profile: { ranking: number };
        badges: { id: string }[];
      };
    }>(`
      {
        matchedUser(username: "Strika_24") {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
            totalAcceptedRaw
            totalSubmissionsRaw
          }
          profile {
            ranking
          }
          badges {
            id
          }
        }
      }
    `);

    const user = data?.matchedUser;
    if (!user) throw new Error("No user data");

    const acNums = user.submitStatsGlobal?.acSubmissionNum ?? [];
    const totalSolved = acNums.find((s) => s.difficulty === "All")?.count ?? 0;
    const easy = acNums.find((s) => s.difficulty === "Easy")?.count ?? 0;
    const medium = acNums.find((s) => s.difficulty === "Medium")?.count ?? 0;
    const hard = acNums.find((s) => s.difficulty === "Hard")?.count ?? 0;
    const ranking = user.profile?.ranking ?? 0;
    const totalBadges = user.badges?.length ?? 0;
    const totalAccepted = user.submitStatsGlobal?.totalAcceptedRaw ?? 0;
    const totalSubmissions = user.submitStatsGlobal?.totalSubmissionsRaw ?? 0;
    const acceptanceRate =
      totalSubmissions > 0
        ? Math.round((totalAccepted / totalSubmissions) * 100)
        : 0;

    return NextResponse.json({
      totalSolved,
      easy,
      medium,
      hard,
      ranking,
      totalBadges,
      acceptanceRate,
    });
  } catch {
    return NextResponse.json(
      {
        totalSolved: 392,
        easy: 142,
        medium: 210,
        hard: 40,
        ranking: 314560,
        totalBadges: 4,
        acceptanceRate: 0,
      },
      { status: 200 }
    );
  }
}
