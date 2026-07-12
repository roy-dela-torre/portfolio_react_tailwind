import type { IconType } from "react-icons";
import {
  SiWordpress,
  SiPhp,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiWoocommerce,
  SiElementor,
  SiBootstrap,
  SiMysql,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFigma,
  SiYoast,
  SiGooglesearchconsole,
  SiVercel,
} from "react-icons/si";
import { FaPuzzlePiece, FaPalette, FaFrog, FaLinkedin, FaGithub } from "react-icons/fa";

export const siteConfig = {
  name: "Roy De La Torre",
  shortName: "Roy",
  title: "Roy De La Torre — WordPress Developer & SEO Specialist | Philippines",
  description:
    "Roy De La Torre is a WordPress developer and SEO specialist based in the Philippines, building fast, accessible, custom WordPress and WooCommerce sites and driving organic growth through technical SEO.",
  url: "https://roydetorre.com",
  location: "Metro Manila, Philippines",
  googleAnalyticsId: "G-WDV14PZ98M",
  social: {
    linkedin: "https://www.linkedin.com/in/roy-dela-torre/",
    github: "https://github.com/roy-dela-torre",
    // Placeholder — replace with the real profile URL, then it'll be picked
    // up automatically by the Person sameAs array in app/layout.tsx.
    upwork: "https://www.upwork.com/freelancers/REPLACE_ME",
    // Placeholder — replace with the real profile URL, then it'll be picked
    // up automatically by the Person sameAs array in app/layout.tsx.
    onlinejobsph: "https://www.onlinejobs.ph/jobseekers/info/REPLACE_ME",
  },
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
];

export const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "WordPress Development", href: "/services/wordpress-development" },
  { label: "SEO Services", href: "/services/seo" },
  { label: "Experience", href: "/experience" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Pricing", href: "/pricing" },
];

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: siteConfig.social.github, Icon: FaGithub },
];

export const hero = {
  eyebrow: "Available for work",
  headingLines: ["A WordPress developer", "& SEO specialist"],
  paragraph:
    "I'm a WordPress developer and SEO specialist who designs and builds custom WordPress themes and WooCommerce stores, then optimizes them with technical SEO so they actually get found. Based in Metro Manila, Philippines, I partner with local and international clients to ship fast, accessible, search-friendly sites.",
  resumeLabel: "My Resume",
  resumeHref: "/resume.pdf",
};

export const skills: { name: string; Icon: IconType }[] = [
  { name: "WordPress", Icon: SiWordpress },
  { name: "PHP", Icon: SiPhp },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "ACF", Icon: FaPuzzlePiece },
  { name: "WooCommerce", Icon: SiWoocommerce },
  { name: "Elementor", Icon: SiElementor },
  { name: "Divi", Icon: FaPalette },
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "MySQL", Icon: SiMysql },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Python", Icon: SiPython },
  { name: "Figma", Icon: SiFigma },
  { name: "Yoast SEO", Icon: SiYoast },
  { name: "Google Search Console", Icon: SiGooglesearchconsole },
  { name: "Screaming Frog", Icon: FaFrog },
  { name: "Vercel", Icon: SiVercel },
];

export type PerformanceScore = {
  device: string;
  image: string;
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
};

export const performanceScores: PerformanceScore[] = [
  {
    device: "Desktop",
    image: "/assets/img/desktop.jpg",
    performance: 100,
    accessibility: 100,
    bestPractices: 100,
    seo: 100,
  },
  {
    device: "Mobile",
    image: "/assets/img/mobile.jpg",
    performance: 98,
    accessibility: 100,
    bestPractices: 100,
    seo: 100,
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Clarvida Global Business Center",
    role: "Web Developer",
    dates: "May 5, 2026 — Present",
    description:
      "Building and maintaining custom WordPress sites while leading on-page and technical SEO to grow organic traffic.",
  },
  {
    company: "Teqon Web Solutions B.V.",
    role: "WordPress Developer (Part-time)",
    dates: "Nov 2025 — Feb 2026",
    description:
      "Built and maintained WordPress sites for a Rotterdam, Netherlands-based agency, working fully remote on site builds and WordPress development.",
  },
  // {
  //   company: "FMO Media",
  //   role: "Web Developer (agency projects)",
  //   dates: "Jan 2022 — Jul 2022",
  //   description:
  //     "Developed custom WordPress themes and landing pages for agency clients across multiple industries.",
  // },
  {
    company: "SEO Hacker",
    role: "Web Client Success Engineer",
    dates: "Aug 1, 2022 — Dec 5, 2025",
    description:
      "Managed technical SEO implementation and WordPress development for client accounts, translating audits into shipped fixes.",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Strategize",
    description:
      "Understand the business goals, target keywords, and audience before a single line of code is written.",
  },
  {
    index: "02",
    title: "Wireframe",
    description:
      "Map out layout, content hierarchy, and user flow so the structure supports both usability and SEO.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "Craft a clean, on-brand visual design that balances aesthetics with performance and accessibility.",
  },
  {
    index: "04",
    title: "Development",
    description:
      "Build a custom WordPress theme or app with clean, maintainable code and Core Web Vitals in mind.",
  },
  {
    index: "05",
    title: "Quality Assurance",
    description:
      "Test across devices and browsers, run SEO and accessibility audits, and fix issues before launch.",
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Divine King",
    description:
      "Custom WordPress site for a Philippine chemical company specializing in organic chemicals and pest control equipment.",
    imageUrl: "/assets/img/divineking.jpg",
    liveUrl: "https://divineking.com/",
  },
  {
    id: 2,
    title: "First Fil-Bio",
    description:
      "WordPress site showcasing veterinary pharmaceutical products and diagnostic services for poultry and swine.",
    imageUrl: "/assets/img/firstfilbio.jpg",
    liveUrl: "https://firstfilbio.com/",
  },
  {
    id: 3,
    title: "Actuate Builder",
    description:
      "Custom WordPress theme for a design-and-build firm offering architectural design and construction services.",
    imageUrl: "/assets/img/actuate_builder.jpg",
    liveUrl: "https://abi-ph.com/",
  },
  {
    id: 4,
    title: "Bonavita",
    description:
      "WordPress site for Bonavita Philippines, built to communicate the brand's mission and connect with customers.",
    imageUrl: "/assets/img/bonavita.jpg",
    liveUrl: "https://bonavita.ph/",
  },
  {
    id: 5,
    title: "TCG",
    description:
      "Corporate WordPress site with a focus on clean navigation and fast page loads.",
    imageUrl: "/assets/img/tcg.jpg",
    liveUrl: "https://tcg.ph/",
  },
  {
    id: 6,
    title: "PDAX",
    description:
      "Marketing pages supporting a platform to buy, sell, and trade top cryptocurrencies at competitive rates.",
    imageUrl: "/assets/img/pdax.jpg",
    liveUrl: "https://pdax.ph/",
  },
  {
    id: 8,
    title: "Mosaic Solution",
    description:
      "WordPress site for a leading POS supplier in the Philippines, built around clear product presentation.",
    imageUrl: "/assets/img/mosaic.jpg",
    liveUrl: "https://www.mosaic-solutions.com/",
  },
  {
    id: 9,
    title: "Flasked",
    description:
      "WooCommerce store for alcoholic and non-alcoholic beverages with instant delivery.",
    imageUrl: "/assets/img/flasked.jpg",
    liveUrl: "https://www.flasked.ph/",
  },
  {
    id: 10,
    title: "Chevrolet Philippines",
    description:
      "Site for the exclusive importer and distributor of Chevrolet vehicles and parts in the Philippines.",
    imageUrl: "/assets/img/chevrolet.jpg",
    liveUrl: "https://chevrolet.com.ph/",
  },
  {
    id: 11,
    title: "Shang Summit",
    description:
      "Luxury residential development site featuring panoramic views and world-class amenities.",
    imageUrl: "/assets/img/shang-summit.jpg",
    liveUrl: "https://shangsummit.com",
  },
  {
    id: 12,
    title: "Gus Tambunting — Official Website",
    description:
      "Official site for a Philippine congressman, showcasing projects and advocacies for constituents.",
    imageUrl: "/assets/img/gustambunting.jpg",
    liveUrl: "https://gustambunting.com/",
  },
  {
    id: 13,
    title: "Bank of Makati",
    description:
      "Site for a bank with 60+ years of service, focused on empowering MSMEs across the Philippines.",
    imageUrl: "/assets/img/bankofmakati.jpg",
    liveUrl: "https://bankofmakati.innovnational.com/",
  },
  {
    id: 14,
    title: "Sparkyes",
    description:
      "Site for a subscription-based, data-driven coaching and learning platform for multi-generational teams.",
    imageUrl: "/assets/img/sparkyes.jpg",
    liveUrl: "bankofmakati.com.ph",
  },
];

export type Stat = {
  label: string;
  value: number;
  suffix: string;
};

export const stats: Stat[] = [
  { label: "Client Projects", value: 10, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Pages Optimized for SEO", value: 130, suffix: "+" },
];

export const cta = {
  eyebrow: "Available for work",
  heading: "Let's create your next big idea.",
  buttonLabel: "Contact Me",
};

export type PricingTier = {
  label: string;
  rate: string;
  note?: string;
  highlight?: boolean;
};

export const pricing = {
  intro:
    "Rates depend on scope, client location, and engagement length. These ranges reflect the type of work in my portfolio — from landing pages to full CRM-integrated rebuilds.",
  hourly: [
    {
      label: "Local PH Clients",
      rate: "₱500–₱900/hr (~$9–16)",
    },
    {
      label: "International Clients (US/AU/UK, direct)",
      rate: "$15–30/hr",
      note: "CRM integrations, serverless functions, and site migrations justify the upper end of this range.",
    },
    {
      label: "Agencies / Platforms (Upwork, OnlineJobs.ph)",
      rate: "$8–15/hr",
      note: "Typical range for these platforms, priced above junior-level work.",
    },
  ] satisfies PricingTier[],
  retainers: [
    {
      label: "Part-time (20 hrs/week), International",
      rate: "$1,200–2,400/month (~₱68k–135k)",
    },
    {
      label: "Part-time, PH-based Company",
      rate: "₱25k–45k/month",
    },
    {
      label: "Maintenance / Support Retainer, per Site",
      rate: "$150–400/month",
      note: "Updates, backups, security monitoring, and minor fixes.",
    },
  ] satisfies PricingTier[],
  projects: [
    {
      label: "Landing Page / Temporary Homepage",
      rate: "$300–600",
    },
    {
      label: "Standard Business Site (Elementor/Divi)",
      rate: "$600–1,500",
    },
    {
      label: "Custom Theme with ACF Flexible Content",
      rate: "$1,500–4,000",
      note: "Custom-built themes, not page-builder templates.",
      highlight: true,
    },
    {
      label: "WooCommerce Store",
      rate: "$1,500–5,000",
    },
    {
      label: "Site Migration + Rebuild",
      rate: "$2,000–5,000+",
      note: "CRM integrations, DNS/SSL cutover, serverless forms.",
    },
    {
      label: "Malware Cleanup + Hardening",
      rate: "$300–800",
    },
    {
      label: "Technical SEO Audit + Implementation",
      rate: "$400–1,000",
    },
    {
      label: "PageSpeed / Performance Optimization",
      rate: "$250–600",
    },
  ] satisfies PricingTier[],
};

// Extracts a USD min/max from a rate string, e.g. "$1,500–4,000" -> {min: 1500, max: 4000}.
// Returns null for strings that mix currencies (e.g. "₱500–₱900/hr (~$9–16)"), since
// there's no reliable way to isolate a single-currency numeric range from those.
export function parsePriceRange(rate: string): { minPrice: number; maxPrice: number } | null {
  if (rate.includes("₱")) return null;
  const match = rate.match(/\$([\d,]+)(?:\s*[–-]\s*\$?([\d,]+))?/);
  if (!match) return null;
  const minPrice = Number(match[1].replace(/,/g, ""));
  const maxPrice = match[2] ? Number(match[2].replace(/,/g, "")) : minPrice;
  return { minPrice, maxPrice };
}

// Maps each dedicated service page to the pricing.projects tiers it should
// surface as Offers in that page's Service schema.
export const serviceOfferLabels: Record<string, string[]> = {
  "wordpress-development": [
    "Landing Page / Temporary Homepage",
    "Standard Business Site (Elementor/Divi)",
    "Custom Theme with ACF Flexible Content",
    "WooCommerce Store",
    "Site Migration + Rebuild",
    "Malware Cleanup + Hardening",
  ],
  seo: ["Technical SEO Audit + Implementation", "PageSpeed / Performance Optimization"],
};

// rating badge removed — it showed an unsourced "5.0 Client Satisfaction"
// claim with no linkable review. Bring it back once a real, citable rating
// (e.g. an Upwork Job Success Score or Google review link) exists.

// DRAFT copy — review before relying on it for anything besides the
// homepage Services section. Descriptions are first-person and honest based
// on the real skills/experience/pricing already in this file.
export type Service = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    description:
      "As a WordPress developer in the Philippines, I design and build custom WordPress websites for local and international clients — from simple business sites to WooCommerce stores. I write clean, maintainable code using ACF and custom themes, not just page-builder templates, so your site stays fast and easy to manage long after launch.",
    href: "/services/wordpress-development",
  },
  {
    slug: "seo",
    title: "SEO Services",
    description:
      "As an SEO specialist, I help your WordPress site actually get found — through technical SEO audits, on-page optimization, and fixes that improve Core Web Vitals and search visibility. I use tools like Yoast SEO, Google Search Console, and Screaming Frog to find what's holding your site back and fix it.",
    href: "/services/seo",
  },
  {
    slug: "maintenance",
    title: "Website Maintenance & Support",
    description:
      "Launch day isn't the finish line. I offer ongoing WordPress maintenance and support — updates, backups, security monitoring, and small fixes — so your site stays fast, secure, and online. Pricing for this is on my rate card, alongside everything else I offer.",
    href: "/pricing",
  },
];

export type FaqEntry = {
  question: string;
  answer: string;
  link?: { label: string; href: string };
};

// DRAFT answers, written honestly from the real experience/pricing data in
// this file. The one exception is the timeline question below — that range
// is a reasonable estimate, not a quoted commitment.
export const homepageFaqs: FaqEntry[] = [
  {
    question: "How much does a WordPress website cost in the Philippines?",
    answer:
      "It depends on scope, but here's a general idea from my own rate card: a landing page runs $300–600, a standard business site with a page builder is $600–1,500, and a custom WordPress theme with ACF starts around $1,500–4,000. WooCommerce stores and full site migrations run higher depending on complexity.",
    link: { label: "See the full rate card", href: "/pricing" },
  },
  {
    question: "What are your rates — hourly or per project?",
    answer:
      "Both, depending on the engagement. For ongoing or part-time work I bill hourly — ₱500–900/hr for local clients, $15–30/hr for international clients direct, or $8–15/hr through platforms like Upwork. For a defined website build, I usually quote a flat per-project rate instead, since it's easier for you to budget around.",
    link: { label: "See the full rate card", href: "/pricing" },
  },
  {
    question: "Do you work with Elementor / page builders or custom themes?",
    answer:
      "Both. I build with Elementor Pro and Divi for clients who want a faster turnaround or a smaller budget, and fully custom WordPress themes with ACF for clients who want something more tailored and performant. I'll tell you honestly which one fits your project instead of upselling you into the more expensive option.",
    link: { label: "About Elementor", href: "https://elementor.com/" },
  },
  {
    question: "How do I know you're a reliable developer?",
    answer:
      "The most honest way is to look at the actual work — my portfolio has real, mostly-still-live client sites, not mockups, so you can see what I've shipped. I also follow the same documented five-step process on every project, so you know what to expect at each stage instead of guessing.",
    link: { label: "See my projects", href: "/projects" },
  },
  {
    // TODO(Roy): confirm these are the timelines you actually quote clients.
    question: "How long does it take to build a WordPress website?",
    answer:
      "Most standard WordPress business sites take about 2–4 weeks from kickoff to launch, depending on how quickly I get content and feedback from you. Landing pages can be faster, often under a week, while custom builds with ACF or WooCommerce stores typically take 4–8 weeks.",
  },
  {
    question: "Do you work with international clients or only in the Philippines?",
    answer:
      "Both. I work with clients across the Philippines as well as internationally, mostly in the US, Australia, and the UK. I'm based in Metro Manila, so a lot of my client calls happen in the evening Philippine time to line up with US business hours, but that's never been a blocker for a good working relationship.",
  },
  {
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes — ongoing maintenance and support after launch, including plugin and core updates, backups, uptime monitoring, and small content or bug fixes. It's available as a monthly retainer, so you're not stuck troubleshooting problems on your own once the site is live.",
    link: { label: "View maintenance pricing", href: "/pricing" },
  },
];

export type ServiceDetailData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whatsIncluded: string[];
  faqs: FaqEntry[];
};

// DRAFT copy for the two dedicated service pages. Honest based on real
// skills/pricing in this file, except the SEO timeline question (flagged
// below), which is an estimate.
export const serviceDetails: Record<string, ServiceDetailData> = {
  "wordpress-development": {
    slug: "wordpress-development",
    title: "WordPress Development",
    metaTitle: "WordPress Development Services Philippines | Roy De La Torre",
    metaDescription:
      "WordPress developer in the Philippines building custom themes, WooCommerce stores, and site migrations for local and international clients.",
    h1: "WordPress Development Services in the Philippines",
    intro:
      "I'm Roy De La Torre, a WordPress developer based in Metro Manila, Philippines. I build custom WordPress websites for businesses that want a site that's fast, easy to manage, and actually built around how they work, not a generic template stretched to fit. Projects typically run $300 to $5,000 depending on scope.",
    whatsIncluded: [
      "Custom WordPress theme development with ACF, for clients who want something fully tailored",
      "Elementor Pro and Divi builds, for clients who want a faster turnaround or a smaller budget",
      "Advanced Custom Fields (ACF) flexible content for easy content management",
      "WooCommerce store setup and customization",
      "Site migrations and rebuilds, including CRM integrations and DNS/SSL cutover",
      "Ongoing WordPress maintenance and support",
    ],
    faqs: [
      {
        question: "Do you build with page builders like Elementor or Divi, or custom code?",
        answer:
          "Both — it depends on your budget and needs. I build fully custom WordPress themes with ACF for clients who want a unique, fast, easy-to-maintain site, but I also work with Elementor Pro and Divi for smaller budgets or faster turnarounds. I'll recommend whichever fits your project honestly.",
      },
      {
        question: "Can you redesign my existing WordPress site instead of starting from scratch?",
        answer:
          "Yes. I can redesign or rebuild an existing WordPress site without necessarily losing your content, URLs, or SEO rankings — I map out what needs to carry over before I touch anything.",
      },
      {
        question: "Do you build WooCommerce stores?",
        answer:
          "Yes, WooCommerce store setup and customization is part of what I do — product catalogs, payment gateways, shipping rules, and store performance tuning.",
        link: { label: "About WooCommerce", href: "https://woocommerce.com/" },
      },
      {
        question: "What do I need to provide to get started?",
        answer:
          "Just your content (or a plan for getting it), your goals for the site, and any brand assets like a logo. I'll help you fill in gaps in strategy and content structure along the way.",
        link: { label: "See my process", href: "/process" },
      },
    ],
  },
  seo: {
    slug: "seo",
    title: "SEO Services",
    metaTitle: "SEO Services Philippines | Roy De La Torre — SEO Specialist",
    metaDescription:
      "SEO specialist in the Philippines offering technical SEO audits, on-page optimization, and Core Web Vitals fixes for WordPress and custom sites.",
    h1: "SEO Services in the Philippines",
    intro:
      "I'm Roy De La Torre, an SEO specialist based in Metro Manila, Philippines. I help WordPress and custom-built sites get found through technical fixes, on-page optimization, and the same Core Web Vitals work I apply to my own projects. Audits and optimization work typically run $250 to $1,000.",
    whatsIncluded: [
      "Technical SEO audits (crawlability, indexing, site structure)",
      "On-page SEO (titles, meta descriptions, header hierarchy, internal linking)",
      "Core Web Vitals and page speed optimization",
      "Structured data / schema markup implementation",
      "Google Search Console setup and ongoing monitoring",
    ],
    faqs: [
      {
        question: "Do you only do SEO for WordPress sites?",
        answer:
          "No — most of my SEO work happens to be on WordPress sites since that's what I build, but the technical SEO process (audits, Core Web Vitals, structured data) applies to any site, WordPress or not.",
        link: { label: "Learn about Core Web Vitals", href: "https://web.dev/articles/vitals" },
      },
      {
        // TODO(Roy): confirm these are the timelines you actually quote clients.
        question: "How long until I see SEO results?",
        answer:
          "Technical fixes like site speed and crawlability issues can show up in Search Console within weeks, but meaningful ranking movement for competitive keywords usually takes a few months. I don't promise overnight results — anyone who does is probably not being straight with you.",
      },
      {
        question: "Do you do keyword research and content strategy, or just technical SEO?",
        answer:
          "My focus is technical SEO and on-page optimization — site structure, speed, schema, crawlability — rather than content writing or link building. I can point you toward what content gaps exist, but I'm not a full-service content agency.",
      },
      {
        question: "Can you audit my site before I commit to anything?",
        answer:
          "Yes, that's usually how I start: a technical SEO audit up front so you know exactly what's wrong and what it'll take to fix, before committing to ongoing work.",
        link: { label: "See audit pricing", href: "/pricing" },
      },
    ],
  },
};

// PLACEHOLDER — every name, role pairing, website, and social link below is
// a template stand-in. Replace with real people, real URLs, and swap
// TeamAvatarPlaceholder for a real next/image photo per person before this
// page is linked from anywhere public.
export type TeamMember = {
  name: string;
  role: string;
  website: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    name: "Maria Santos",
    role: "Designer",
    website: "https://example.com",
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Carlo Reyes",
    role: "Account Manager",
    website: "https://example.com",
    socials: { linkedin: "#" },
  },
  {
    name: "Angela Cruz",
    role: "SEO Specialist",
    website: "https://example.com",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Miguel Torres",
    role: "Project Manager",
    website: "https://example.com",
    socials: { linkedin: "#" },
  },
  {
    name: "Diego Ramos",
    role: "Backlinks/Outreach Specialist",
    website: "https://example.com",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Patricia Lim",
    role: "Accountant",
    website: "https://example.com",
    socials: { linkedin: "#" },
  },
  {
    name: "Sophia Garcia",
    role: "Writer",
    website: "https://example.com",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Daniel Aquino",
    role: "Developer",
    website: "https://example.com",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Rafael Bautista",
    role: "Developer",
    website: "https://example.com",
    socials: { linkedin: "#", github: "#" },
  },
];
