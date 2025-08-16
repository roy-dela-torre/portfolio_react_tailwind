import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { year, username } = req.query;
  const token = process.env.GITHUB_TOKEN; // Only server can access this!
  if (!token) return res.status(500).json({ error: "Token missing" });

  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection(from: "${from}", to: "${to}") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                color
              }
            }
            commitContributionsByRepository {
              repository { nameWithOwner url }
              contributions { totalCount }
            }
            pullRequestContributionsByRepository {
              repository { nameWithOwner url }
              contributions { totalCount }
            }
            issueContributionsByRepository {
              repository { nameWithOwner url }
              contributions { totalCount }
            }
            pullRequestReviewContributionsByRepository {
              repository { nameWithOwner url }
              contributions { totalCount }
            }
          }
        }
      }
    }
  `;
  const githubRes = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });
  const data = await githubRes.json();
  res.status(200).json(data);
}