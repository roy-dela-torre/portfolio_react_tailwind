"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { FaqEntry } from "@/data/content";

function FaqItem({ question, answer, link }: FaqEntry) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const buttonId = `faq-button-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <div className="border-b border-white/10 py-6">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 text-left text-base font-medium text-white transition-colors hover:text-accent md:text-lg"
        >
          {question}
          <span
            className={`shrink-0 text-xl text-accent transition-transform duration-300 ${open ? "rotate-45" : ""}`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-white/60 md:text-base">{answer}</p>
          {link &&
            (link.href.startsWith("http") ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-accent"
              >
                {link.label} →
              </a>
            ) : (
              <Link href={link.href} className="mt-3 inline-block text-sm text-accent">
                {link.label} →
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ faqs }: { faqs: FaqEntry[] }) {
  return (
    <div>
      {faqs.map((faq) => (
        <FaqItem key={faq.question} {...faq} />
      ))}
    </div>
  );
}
