import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { TeamMember } from "@/data/content";
import TeamAvatarPlaceholder from "./TeamAvatarPlaceholder";

const socialIcons = {
  linkedin: { Icon: FaLinkedin, label: "LinkedIn" },
  twitter: { Icon: FaXTwitter, label: "X (Twitter)" },
  instagram: { Icon: FaInstagram, label: "Instagram" },
  github: { Icon: FaGithub, label: "GitHub" },
} as const;

export default function TeamCard({ name, role, website, socials }: TeamMember) {
  const socialEntries = (Object.keys(socialIcons) as (keyof typeof socialIcons)[]).filter(
    (key) => socials[key],
  );

  return (
    <article className="flex h-full w-[85%] shrink-0 snap-start flex-col items-center rounded-2xl border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 sm:w-[46%] lg:w-[30%]">
      <TeamAvatarPlaceholder name={name} />
      <h2 className="mt-5 text-lg font-semibold text-white">{name}</h2>
      <p className="mt-1 text-sm text-white/60">{role}</p>

      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs text-white/70 transition-colors hover:border-accent/50 hover:text-accent"
      >
        <FaGlobe aria-hidden="true" className="h-3.5 w-3.5" />
        Website
      </a>

      {socialEntries.length > 0 && (
        <ul className="mt-4 flex items-center gap-3">
          {socialEntries.map((key) => {
            const { Icon, label } = socialIcons[key];
            return (
              <li key={key}>
                <a
                  href={socials[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on ${label}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition-colors hover:text-accent"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}
