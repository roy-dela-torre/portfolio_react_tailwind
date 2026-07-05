import { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  speedUpOnHover?: boolean;
  className?: string;
  decorative?: boolean;
};

export default function Marquee({
  children,
  duration = 30,
  reverse = false,
  speedUpOnHover = false,
  className = "",
  decorative = false,
}: MarqueeProps) {
  return (
    <div
      className={`marquee-row group relative flex overflow-hidden ${className}`}
      data-hover-speed={speedUpOnHover ? "true" : "false"}
      aria-hidden={decorative ? "true" : undefined}
    >
      <div
        className="marquee-track flex shrink-0 items-center gap-8"
        data-direction={reverse ? "reverse" : "forward"}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {children}
      </div>
      <div
        className="marquee-track flex shrink-0 items-center gap-8"
        data-direction={reverse ? "reverse" : "forward"}
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
