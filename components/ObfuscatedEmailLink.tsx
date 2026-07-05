"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

const USER = "boydelatorre.73";
const DOMAIN = "gmail.com";

type ObfuscatedEmailLinkProps = {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
};

export default function ObfuscatedEmailLink({ children, className, ...rest }: ObfuscatedEmailLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.href = `mailto:${USER}@${DOMAIN}`;
    }
  }, []);

  return (
    <a ref={ref} href="#contact" rel="nofollow" className={className} {...rest}>
      {children}
    </a>
  );
}
