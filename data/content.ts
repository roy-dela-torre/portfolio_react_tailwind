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
  url: "https://chuseikokoro.com",
  location: "Philippines",
  social: {
    linkedin: "https://www.linkedin.com/in/roy-dela-torre/",
    github: "https://github.com/roy-dela-torre",
  },
};

export const navLinks = [
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: siteConfig.social.github, Icon: FaGithub },
];

export const hero = {
  eyebrow: "Available for work",
  headingLines: ["A WordPress developer", "& SEO specialist"],
  paragraph:
    "I'm a WordPress developer and SEO specialist who designs and builds custom WordPress themes and WooCommerce stores, then optimizes them with technical SEO so they actually get found. Based in the Philippines, I partner with agencies and businesses to ship fast, accessible, search-friendly sites.",
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

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Clarvida Global Business Center",
    role: "Web Developer / SEO Specialist",
    dates: "May 2026 — Present",
    description:
      "Building and maintaining custom WordPress sites while leading on-page and technical SEO to grow organic traffic.",
  },
  {
    company: "FMO Media",
    role: "Web Developer (agency projects)",
    dates: "Jan 2022 — Jul 2022",
    description:
      "Developed custom WordPress themes and landing pages for agency clients across multiple industries.",
  },
  {
    company: "SEO Hacker",
    role: "Web Client Success Engineer",
    dates: "Aug 2022 — Dec 2025",
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
    id: 7,
    title: "Ocfireworks",
    description:
      "WooCommerce store for wholesale fireworks with free shipping and financing options.",
    imageUrl: "/assets/img/ocfireworks.jpg",
    liveUrl: "https://ocfireworks.innovnational.com/",
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
    liveUrl: "https://sparkyes.innovnational.com",
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
