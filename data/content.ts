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
  SiGravatar,
  SiShopify,
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
  areaServed: ["Metro Manila, Philippines", "Philippines", "Worldwide"],
  formspreeEndpoint: "https://formspree.io/f/movkbjan",
  keywords: [
    "WordPress developer Philippines",
    "WordPress developer Metro Manila",
    "freelance WordPress developer Philippines",
    "SEO specialist Philippines",
    "Shopify developer Philippines",
    "WooCommerce developer Philippines",
    "technical SEO Philippines",
  ],
  googleAnalyticsId: "G-WDV14PZ98M",
  social: {
    linkedin: "https://www.linkedin.com/in/roy-dela-torre/",
    github: "https://github.com/roy-dela-torre",
    gravatar: "https://gravatar.com/roydelatorre14",
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
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export const sitemapLinks = [
  { label: "Home", href: "/" },
  { label: "WordPress Development", href: "/services/wordpress-development" },
  { label: "Shopify Development", href: "/services/shopify-development" },
  { label: "SEO Services", href: "/services/seo" },
  { label: "WordPress Maintenance & Security", href: "/services/wordpress-maintenance" },
  { label: "Experience", href: "/experience" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
];

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: siteConfig.social.github, Icon: FaGithub },
  { label: "Gravatar", href: siteConfig.social.gravatar, Icon: SiGravatar },
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
  { name: "Shopify", Icon: SiShopify },
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

// Separate rate card for Shopify work — international and local PH rates for
// Shopify sit well above the WordPress figures above, since custom Liquid
// theme and headless Shopify work commands a different market rate than
// page-builder WordPress sites.
export const shopifyPricing = {
  intro:
    "Shopify rates reflect custom Liquid theme development, Shopify Plus/headless builds, and app/API integration work — positioned as performance and theme engineering rather than templated store setup.",
  hourly: [
    {
      label: "International Clients (US/EU/AU, Direct)",
      rate: "$45–$75/hr",
      note: "Custom Liquid sections, Core Web Vitals optimization, and custom UX built without stacking heavy apps.",
    },
  ] satisfies PricingTier[],
  retainers: [
    {
      label: "International Retainer (20–30 hrs/week)",
      rate: "$2,500–$4,500/month",
      note: "Ongoing feature development, technical SEO maintenance, and performance optimization.",
    },
    {
      label: "Full-Time, PH Agencies/Corporate (BGC/Makati)",
      rate: "₱85,000–₱130,000+/month",
      note: "For local agencies or multinational hubs — custom-coding and SEO skillset above standard local WordPress developer salaries (~₱40k–60k).",
    },
  ] satisfies PricingTier[],
  projects: [
    {
      label: "Custom Shopify Store Build (from Figma/Adobe design)",
      rate: "$3,000–$8,000+",
      note: "Charge higher for headless architecture (Next.js/React frontend + Shopify backend) or custom Shopify Functions.",
      highlight: true,
    },
    {
      label: "Local Freelance Shopify Build (PH Brands)",
      rate: "₱80,000–₱180,000+",
      note: "For local mid-sized brands transitioning to custom Shopify — clean UI conversion, essential SEO markup, and GTM/GA4 analytics setup.",
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
  ],
  seo: ["Technical SEO Audit + Implementation", "PageSpeed / Performance Optimization"],
  "wordpress-maintenance": ["Malware Cleanup + Hardening", "Maintenance / Support Retainer, per Site"],
  "shopify-development": [
    "Custom Shopify Store Build (from Figma/Adobe design)",
    "Local Freelance Shopify Build (PH Brands)",
  ],
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
      "As a freelance WordPress developer based in Metro Manila, I design and build custom WordPress websites for local and international clients — from simple business sites to WooCommerce stores. I write clean, maintainable code using ACF and custom themes, not just page-builder templates, so your site stays fast and easy to manage long after launch.",
    href: "/services/wordpress-development",
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    description:
      "As a Shopify developer based in the Philippines, I build custom Liquid themes, Shopify Plus and headless storefronts (Next.js/React frontend with a Shopify backend), and Shopify API and app integrations — for Philippine brands moving off generic templates and international clients who want a store engineered around Core Web Vitals, not stacked with apps.",
    href: "/services/shopify-development",
  },
  {
    slug: "seo",
    title: "SEO Services",
    description:
      "As an SEO specialist serving clients across Metro Manila and the wider Philippines, I help your WordPress site actually get found — through technical SEO audits, on-page optimization, and fixes that improve Core Web Vitals and search visibility. I use tools like Yoast SEO, Google Search Console, and Screaming Frog to find what's holding your site back and fix it.",
    href: "/services/seo",
  },
  {
    slug: "maintenance",
    title: "WordPress Security & Maintenance",
    description:
      "WordPress security is the job, not an afterthought. I harden sites against malware and brute-force attacks, clean up sites that are already compromised, and keep them updated and backed up — for businesses in Metro Manila and beyond.",
    href: "/services/wordpress-maintenance",
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
    link: { label: "See maintenance & security services", href: "/services/wordpress-maintenance" },
  },
  {
    question: "Are you a freelance WordPress developer, or do you work through an agency?",
    answer:
      "I take on freelance/independent client work alongside my day-to-day role, so you're working directly with me rather than being routed through account managers. I'm based in Metro Manila and take on projects both locally and internationally.",
  },
  {
    question: "Do you work with small businesses in Metro Manila, or only large companies?",
    answer:
      "Small businesses, mostly. Landing pages and standard business sites for local Metro Manila businesses make up a good share of my project work — you don't need an enterprise budget to work with me.",
    link: { label: "See project rates", href: "/pricing" },
  },
];

export type ServiceDetailData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
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
    keywords: [
      "WordPress developer Philippines",
      "freelance WordPress developer Metro Manila",
      "custom WordPress theme developer Philippines",
      "WooCommerce developer Philippines",
      "hire WordPress developer Philippines",
      "affordable WordPress developer for small business",
    ],
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
      {
        question: "Do you work with small businesses in Metro Manila?",
        answer:
          "Yes — a good share of my WordPress project work is for small and mid-sized businesses in Metro Manila, alongside international clients. You don't need an enterprise budget to work with me directly.",
      },
      {
        question: "Can I hire you for a one-off project, or only ongoing retainers?",
        answer:
          "One-off projects are the norm — most clients hire me for a single site build or migration, then optionally move to a maintenance retainer afterward. There's no minimum ongoing commitment to get a project started.",
        link: { label: "See project pricing", href: "/pricing" },
      },
    ],
  },
  seo: {
    slug: "seo",
    title: "SEO Services",
    metaTitle: "SEO Services Philippines | Roy De La Torre — SEO Specialist",
    metaDescription:
      "SEO specialist in the Philippines offering technical SEO audits, on-page optimization, and Core Web Vitals fixes for WordPress and custom sites.",
    keywords: [
      "SEO specialist Philippines",
      "technical SEO audit Philippines",
      "local SEO services Philippines",
      "freelance SEO consultant Metro Manila",
      "Core Web Vitals optimization Philippines",
      "affordable SEO services for small business Philippines",
    ],
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
      {
        question: "What's the difference between technical SEO and local SEO?",
        answer:
          "Technical SEO fixes the foundation — crawlability, site speed, structured data — that every site needs regardless of who it's targeting. Local SEO layers on top of that for businesses targeting a specific area, like Metro Manila: things like Google Business Profile optimization and location-specific content. My focus is the technical layer, which local SEO also depends on.",
      },
      {
        question: "Do you offer SEO services for small businesses in Metro Manila?",
        answer:
          "Yes — I work with small and mid-sized businesses in Metro Manila as well as international clients. A technical SEO audit is usually the right starting point regardless of business size.",
      },
    ],
  },
  "shopify-development": {
    slug: "shopify-development",
    title: "Shopify Development",
    metaTitle: "Shopify Developer Philippines | Custom Shopify Theme Development | Roy De La Torre",
    metaDescription:
      "Shopify developer in the Philippines building custom Liquid themes, Shopify Plus and headless Shopify storefronts, and Shopify API/app integrations for local and international brands.",
    keywords: [
      "Shopify developer Philippines",
      "freelance Shopify developer Metro Manila",
      "custom Shopify theme developer Philippines",
      "headless Shopify developer Philippines",
      "Shopify store migration Philippines",
    ],
    h1: "Shopify Development Services in the Philippines",
    intro:
      "I'm Roy De La Torre, a Shopify developer based in Metro Manila, Philippines, working in Liquid, Shopify Plus, headless Shopify, and Shopify's API and app ecosystem. I build stores engineered around Core Web Vitals and custom UX rather than stacked on top of heavy apps. Local Philippine builds typically run ₱80,000–₱180,000+; international clients direct run $45–$75/hr or $3,000–$8,000+ per build.",
    whatsIncluded: [
      "Custom Shopify theme development in Liquid, built for speed instead of relying on heavy apps",
      "Shopify API and third-party app integrations",
      "Shopify Plus and headless Shopify builds (Next.js/React frontend with a Shopify backend)",
      "Custom Shopify Functions for advanced store and checkout logic",
      "Store performance optimization and Core Web Vitals tuning",
      "Analytics setup (GTM/GA4) and essential SEO markup for local Philippine brands moving to custom Shopify",
    ],
    faqs: [
      {
        question: "Do you build custom Shopify themes, or just customize existing ones?",
        answer:
          "Both, depending on scope and budget — fully custom Liquid themes built from a Figma/Adobe design for clients who want something tailored, or theme customization on top of an existing Shopify theme for a faster, smaller-budget turnaround.",
        link: { label: "About Liquid", href: "https://shopify.dev/docs/api/liquid" },
      },
      {
        question: "What's headless Shopify, and do I need it?",
        answer:
          "Headless Shopify pairs a Next.js/React frontend with Shopify as the backend — it's worth the extra cost when you need custom UX or performance a standard theme can't deliver. For most standard stores, a well-built custom Liquid theme is the more cost-effective choice.",
      },
      {
        question: "Do you have example Shopify stores I can look at?",
        answer:
          "My public portfolio here is mostly WordPress and WooCommerce case studies so far — Shopify work is newer. I'm happy to walk through my Shopify experience and approach directly on a call rather than pointing you to a placeholder link.",
        link: { label: "See my WordPress projects", href: "/projects" },
      },
      {
        question: "Can you migrate my store from WooCommerce (or another platform) to Shopify?",
        answer:
          "Yes — since I work in both WordPress/WooCommerce and Shopify, I can plan a migration that carries over your product catalog, content, and SEO equity rather than starting from zero.",
        link: { label: "Compare with WordPress development", href: "/services/wordpress-development" },
      },
      {
        question: "Do you work with small Philippine brands, or only large ones?",
        answer:
          "Both — the Shopify pricing tiers I quote cover small-to-mid-sized local brands moving off a template as well as larger builds with headless or Shopify Plus requirements. I'll size the scope to fit your brand's stage rather than defaulting to the biggest package.",
        link: { label: "See Shopify pricing", href: "/pricing" },
      },
    ],
  },
  "wordpress-maintenance": {
    slug: "wordpress-maintenance",
    title: "WordPress Security & Hardening",
    metaTitle: "WordPress Security Hardening Philippines | Roy De La Torre",
    metaDescription:
      "WordPress security hardening, malware cleanup, and ongoing monitoring for businesses in the Philippines — stop attacks before they cost you customers.",
    keywords: [
      "WordPress security services Philippines",
      "WordPress security audit Philippines",
      "WordPress malware removal Philippines",
      "WordPress hardening Philippines",
      "WordPress firewall setup Philippines",
      "WooCommerce security Philippines",
    ],
    h1: "WordPress Security & Hardening Services in the Philippines",
    intro:
      "I'm Roy De La Torre, a WordPress developer based in Metro Manila, Philippines, specializing in WordPress security — hardening sites before they're attacked, and cleaning up the ones that already have been. Most WordPress compromises trace back to one of three things: an outdated plugin, a weak admin password, or an unpatched core file — closing that specific gap matters more than just wiping the infection and hoping it doesn't come back. Malware cleanup runs $300–800; ongoing security and maintenance retainers run $150–400/month per site.",
    whatsIncluded: [
      "Security audits that identify the specific entry point — outdated plugin, weak credentials, or exposed file permissions — before it's exploited",
      "Malware removal and infected-file cleanup for sites that are already compromised",
      "Security hardening — login rate-limiting, two-factor authentication, file integrity monitoring, and firewall rules",
      "WordPress core, theme, and plugin updates, kept current without breaking a live site",
      "Automated backups with tested disaster recovery, not backups that have never been restored",
      "Uptime and intrusion monitoring, with priority response for retainer clients",
    ],
    faqs: [
      {
        question: "My WordPress site was hacked or has malware — can you fix it?",
        answer:
          "Yes — I'll clean the infected files, close the vulnerability that let it in, and harden the site so it doesn't happen again. This is priced separately from the monthly retainer, typically $300–800 depending on how bad the infection is.",
        link: { label: "See malware cleanup pricing", href: "/pricing" },
      },
      {
        question: "How do you harden WordPress security beyond just installing a plugin?",
        answer:
          "A single security plugin doesn't close every gap, so hardening also means server- and config-level changes: disabling file editing from wp-admin, restricting XML-RPC and the REST API where they're not needed, enforcing strong unique credentials with login rate-limiting, and locking down file permissions. A firewall plugin is one layer of that, not the whole strategy.",
      },
      {
        question: "What's included in a WordPress security audit?",
        answer:
          "An audit checks the three most common entry points first — outdated plugins/themes, weak admin credentials, and file permission issues — then reviews your backups, uptime monitoring, and firewall rules. You get a prioritized list of what to fix, not just a pass/fail score.",
        link: { label: "See audit pricing", href: "/pricing" },
      },
      {
        question: "What's included in the monthly maintenance retainer?",
        answer:
          "Core, theme, and plugin updates, automated backups, uptime monitoring, security hardening, and small content or bug fixes — so you're not stuck troubleshooting a broken update or a slow site on your own.",
        link: { label: "See retainer pricing", href: "/pricing" },
      },
      {
        question: "Do I need this if my site isn't built by you?",
        answer:
          "No — I take on security and maintenance retainers for WordPress sites I didn't originally build, as long as I can get a look at the current setup first.",
      },
      {
        question: "How fast can you respond if my site goes down?",
        answer:
          "Retainer clients get priority response on uptime and security incidents rather than being queued behind new project work — the specifics depend on your retainer tier, which we'd agree on upfront.",
      },
      {
        question: "Do you support small business WordPress sites in Metro Manila?",
        answer:
          "Yes — retainers are sized per site, not per company size, so a single small business site in Metro Manila is a normal engagement, not just larger multi-site accounts.",
      },
    ],
  },
};

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  publishedDate: string;
  content: BlogContentBlock[];
};

// DRAFT copy, honest based on the real experience/pricing data already in
// this file. One thing to double-check: the title says "4 Years of Agency
// Work" — the experience list + stats.ts currently add up to "3+ Years
// Experience." Confirm the rounding/timeframe you want before this is final.
export const blogPosts: BlogPost[] = [
  {
    slug: "custom-themes-vs-page-builders",
    title: "WordPress Custom Themes vs Page Builders: What 4 Years of Agency Work Taught Me",
    metaTitle:
      "WordPress Custom Themes vs Page Builders | Roy De La Torre",
    metaDescription:
      "A WordPress developer's honest breakdown of when to use Elementor or Divi versus a custom ACF theme, with real cost and timeline ranges.",
    keywords: [
      "WordPress page builder vs custom theme",
      "Elementor vs custom WordPress theme",
      "ACF WordPress theme cost",
      "WordPress developer Philippines",
    ],
    excerpt:
      "Page builders get a site live faster and cheaper; custom ACF themes cost more and take longer but pay off in speed and long-term flexibility. Here's how I actually decide between them.",
    publishedDate: "2026-07-13",
    content: [
      {
        type: "paragraph",
        text: "Page builders like Elementor and Divi get a project live faster and cost less upfront; custom WordPress themes built with ACF cost more and take longer, but pay off in load speed, long-term maintainability, and how easily a site can grow. Here's how I actually decide between them on client work.",
      },
      { type: "heading", text: "What's actually different between a page builder and a custom theme?" },
      {
        type: "paragraph",
        text: "Page builders like Elementor Pro and Divi generate their own markup and CSS on top of WordPress, and give you a visual, drag-and-drop editor. A custom theme built with Advanced Custom Fields (ACF) has hand-written templates and only ships the CSS and JS the site actually needs — nothing extra just because the builder might need it for some other page.",
      },
      { type: "heading", text: "When a page builder is the right call" },
      {
        type: "list",
        items: [
          "Budget is tight and the site needs to launch fast — a builder gets simple sites live in days, not weeks",
          "The client (or their team) wants to edit pages themselves after launch, without touching code",
          "The site is mostly static marketing pages without complex custom functionality",
          "It's a landing page or temporary homepage that's likely to be redesigned again soon anyway",
        ],
      },
      { type: "heading", text: "When a custom ACF theme is worth the extra cost" },
      {
        type: "list",
        items: [
          "Page speed and Core Web Vitals matter — no page builder ships as little code as a hand-built theme",
          "The site needs custom content structures (flexible content blocks, repeaters) that a generic builder handles awkwardly",
          "It's a WooCommerce store or has other complex functionality where builder overhead compounds",
          "The client plans to keep and grow the site for years, not months",
        ],
      },
      { type: "heading", text: "Page builder vs. custom theme, side by side" },
      {
        type: "table",
        headers: ["", "Page Builder (Elementor/Divi)", "Custom ACF Theme"],
        rows: [
          ["Typical cost", "$600–1,500", "$1,500–4,000"],
          ["Turnaround", "Usually under 2 weeks", "Usually 4–8 weeks"],
          ["Page speed ceiling", "Good, capped by builder overhead", "Higher — only ships what the site needs"],
          [
            "Best for",
            "Small sites, self-editing clients, quick launches",
            "WooCommerce stores, custom content needs, long-term sites",
          ],
        ],
      },
      { type: "heading", text: "What I actually recommend to clients" },
      {
        type: "paragraph",
        text: "I don't default to one or the other — I ask about budget, timeline, and how long the client plans to keep the site before recommending a page builder build or a custom ACF theme. Most of my work spans both: Elementor Pro and Divi when speed or budget calls for it, fully custom themes when performance or long-term flexibility matters more. If you're not sure which fits your project, that's the first thing I sort out on a call.",
      },
    ],
  },
  {
    slug: "wordpress-developer-cost-philippines",
    title: "How Much Does a WordPress Developer Cost in the Philippines? (2026 Rates)",
    metaTitle: "How Much Does a WordPress Developer Cost in the Philippines? | Roy De La Torre",
    metaDescription:
      "Real 2026 hourly, retainer, and per-project rate ranges for hiring a WordPress developer in the Philippines, for both local and international clients.",
    keywords: [
      "WordPress developer cost Philippines",
      "WordPress developer rates Philippines",
      "how much does a WordPress website cost Philippines",
      "freelance WordPress developer pricing Philippines",
      "hire WordPress developer Philippines",
    ],
    excerpt:
      "Real rate ranges for hiring a WordPress developer in the Philippines in 2026 — hourly, retainer, and per-project — broken down by whether you're a local business or hiring internationally.",
    publishedDate: "2026-07-21",
    content: [
      {
        type: "paragraph",
        text: "\"How much does a WordPress developer cost?\" is one of the first questions I get from prospective clients, and the honest answer is: it depends on where you're based, how you're hiring, and what you need built. Below are the actual rate ranges I quote in 2026, broken out by engagement type, so you can budget before we even get on a call.",
      },
      { type: "heading", text: "Hourly rates" },
      {
        type: "table",
        headers: ["Client type", "Rate"],
        rows: [
          ["Local PH clients", "₱500–₱900/hr (~$9–16)"],
          ["International clients (US/AU/UK, direct)", "$15–30/hr"],
          ["Agencies / platforms (Upwork, OnlineJobs.ph)", "$8–15/hr"],
        ],
      },
      {
        type: "paragraph",
        text: "International direct clients pay more per hour than platform-sourced work, mainly because platform fees and client acquisition risk get priced in on marketplaces like Upwork.",
      },
      { type: "heading", text: "Per-project rates" },
      {
        type: "table",
        headers: ["Project type", "Rate"],
        rows: [
          ["Landing page / temporary homepage", "$300–600"],
          ["Standard business site (Elementor/Divi)", "$600–1,500"],
          ["Custom theme with ACF flexible content", "$1,500–4,000"],
          ["WooCommerce store", "$1,500–5,000"],
          ["Site migration + rebuild", "$2,000–5,000+"],
          ["Technical SEO audit + implementation", "$400–1,000"],
        ],
      },
      { type: "heading", text: "Monthly retainer rates" },
      {
        type: "list",
        items: [
          "Part-time (20 hrs/week), international: $1,200–2,400/month (~₱68k–135k)",
          "Part-time, PH-based company: ₱25k–45k/month",
          "Maintenance / support retainer, per site: $150–400/month",
        ],
      },
      { type: "heading", text: "What actually moves the price" },
      {
        type: "list",
        items: [
          "Custom ACF theme vs. page builder — custom code costs more upfront but ships less bloat long-term",
          "WooCommerce or other complex functionality vs. a static business site",
          "Whether you're hiring locally in the Philippines, hiring an international freelancer direct, or sourcing through a platform",
          "One-off project vs. ongoing retainer — retainers are priced for predictable monthly work, not per-task",
        ],
      },
      { type: "heading", text: "My honest take" },
      {
        type: "paragraph",
        text: "If a quote for a standard WordPress business site comes in well under $600 or ₱25,000, ask what's being cut — usually it's either a page builder stretched past what it's good at, or no real testing or SEO setup before launch. On the other end, a five-figure quote for a simple brochure site is a sign you're paying for agency overhead rather than the actual build. These ranges reflect what real projects in my portfolio cost, not a rate card built to look competitive.",
      },
    ],
  },
];

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
