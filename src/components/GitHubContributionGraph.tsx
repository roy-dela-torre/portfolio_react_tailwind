import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "roy-dela-torre";
const GITHUB_TOKEN = "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"; // Never commit this in production!

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface RepoContribution {
  repository: {
    nameWithOwner: string;
    url: string;
  };
  contributions: {
    totalCount: number;
  };
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: Week[];
}

interface ContributionBreakdown {
  type: string;
  repos: RepoContribution[];
}

interface GitHubContributionGraphProps {
  year?: number;
}

function getDates(year: number) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;
  return { from, to };
}

const GitHubContributionGraph: React.FC<GitHubContributionGraphProps> = ({
  year = new Date().getFullYear(),
}) => {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [breakdown, setBreakdown] = useState<ContributionBreakdown[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { from, to } = getDates(year);
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
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
    `;
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((data) => {
        const coll = data.data.user.contributionsCollection;
        setCalendar(coll.contributionCalendar);
        setBreakdown([
          { type: "Commits", repos: coll.commitContributionsByRepository },
          { type: "Pull Requests", repos: coll.pullRequestContributionsByRepository },
          { type: "Issues", repos: coll.issueContributionsByRepository },
          { type: "Reviews", repos: coll.pullRequestReviewContributionsByRepository },
        ]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [year]);

  if (loading || !calendar)
    return <p className="text-center">Loading contributions...</p>;

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">
        GitHub Contribution Graph
      </h3>
      <div className="flex flex-col items-center">
        <div className="flex">
          {calendar.weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col">
              {week.contributionDays.map((day, di) => (
                <div
                  key={di}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  style={{
                    width: 12,
                    height: 12,
                    margin: 1,
                    background: day.color,
                    borderRadius: 2,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          {calendar.totalContributions} contributions in {year}
        </p>
      </div>
      <div className="mt-8 max-w-3xl mx-auto">
        <h4 className="text-xl font-bold mb-2 text-blue-300 text-center">Contribution Breakdown by Type & Repository</h4>
        {breakdown.map((typeBlock) => (
          <div key={typeBlock.type} className="mb-6">
            <h5 className="text-lg font-semibold mb-1">{typeBlock.type}</h5>
            {typeBlock.repos.length === 0 ? (
              <p className="text-gray-500">No contributions.</p>
            ) : (
              <table className="w-full text-sm bg-gray-800 rounded mb-2">
                <thead>
                  <tr className="text-blue-200">
                    <th className="py-1 text-left">Repository</th>
                    <th className="py-1 text-left">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {typeBlock.repos.map((r) => (
                    <tr key={r.repository.nameWithOwner}>
                      <td className="py-1">
                        <a
                          href={r.repository.url}
                          className="text-blue-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {r.repository.nameWithOwner}
                        </a>
                      </td>
                      <td className="py-1">{r.contributions.totalCount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributionGraph;