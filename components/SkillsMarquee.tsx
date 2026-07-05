import { skills } from "@/data/content";
import Marquee from "./Marquee";

function SkillPill({ name, Icon }: (typeof skills)[number]) {
  return (
    <span className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm text-white/80 transition-colors hover:border-accent/50 hover:text-white">
      <Icon aria-hidden="true" className="h-5 w-5" />
      {name}
    </span>
  );
}

export default function SkillsMarquee() {
  const half = Math.ceil(skills.length / 2);
  const rowA = skills.slice(0, half);
  const rowB = skills.slice(half);

  return (
    <div aria-label="Technical skills" className="flex flex-col gap-4">
      <Marquee duration={40}>
        {rowA.map((skill) => (
          <SkillPill key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee duration={40} reverse>
        {rowB.map((skill) => (
          <SkillPill key={skill.name} {...skill} />
        ))}
      </Marquee>
    </div>
  );
}
