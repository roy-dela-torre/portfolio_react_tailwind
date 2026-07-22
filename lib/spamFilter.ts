// Keyword-based screening for the contact form, so obvious spam/scam
// submissions get blocked client-side before they ever reach Formspree
// (and therefore before they land in an inbox as email).
const SPAM_KEYWORDS = [
  // Advance-fee / inheritance scams
  "wire transfer",
  "inheritance",
  "next of kin",
  "lottery winner",
  "you have won",
  "claim your prize",
  "risk free investment",
  "double your money",
  "guaranteed profit",
  "guaranteed returns",
  "million dollars",
  "nigerian prince",
  "beneficiary of",
  "unclaimed funds",
  "advance fee",
  "western union",
  "moneygram",

  // Crypto / trading investment pitches
  "bitcoin investment",
  "crypto investment",
  "invest in bitcoin",
  "forex signals",
  "binary options",
  "high roi",
  "passive income opportunity",
  "trading bot",

  // Pharma / adult spam
  "viagra",
  "cialis",
  "weight loss pills",
  "penis enlargement",
  "hot singles",
  "adult dating",

  // Backlink / SEO outreach spam — common against developer & agency contact forms
  "buy backlinks",
  "link building service",
  "guest post opportunity",
  "improve your seo ranking",
  "increase your website ranking",
  "boost your rankings",
  "we noticed your website",
  "we found your website",
  "top of google",
  "page one of google",
  "cheap seo services",
  "guaranteed organic traffic",

  // Generic phishing / scam phrasing
  "dear sir/madam",
  "dear beneficiary",
  "kindly respond",
  "urgent business proposal",
  "congratulations you have been selected",
  "verify your account",
  "suspended account",
  "click here to claim",
] as const;

export function containsSpamKeywords(text: string): boolean {
  const normalized = text.toLowerCase();
  return SPAM_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

// 3+ links in a short message is a strong link-spam signal (backlink
// outreach bots pad messages with several URLs).
export function hasExcessiveLinks(text: string): boolean {
  const matches = text.match(/https?:\/\/|www\./gi);
  return (matches?.length ?? 0) >= 3;
}
