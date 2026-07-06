"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { TeamMember } from "@/data/content";
import TeamCard from "./TeamCard";

export default function TeamCarousel({ members }: { members: TeamMember[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const directionRef = useRef<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let rafId: number;
    const step = () => {
      if (!paused) {
        const { scrollLeft, scrollWidth, clientWidth } = scroller;
        const max = scrollWidth - clientWidth;
        if (scrollLeft >= max - 1) directionRef.current = -1;
        if (scrollLeft <= 1) directionRef.current = 1;
        scroller.scrollLeft += directionRef.current * 0.6;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused]);

  const scrollByCards = (dir: 1 | -1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector("article");
    const amount = card ? card.clientWidth + 24 : 300;
    scroller.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    draggingRef.current = true;
    setPaused(true);
    dragStartRef.current = { x: e.clientX, scrollLeft: scroller.scrollLeft };
    scroller.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollLeft = dragStartRef.current.scrollLeft - (e.clientX - dragStartRef.current.x);
  };

  const endDrag = () => {
    draggingRef.current = false;
    setPaused(false);
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        role="region"
        aria-label="People I work with"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          if (!draggingRef.current) setPaused(false);
        }}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 py-2 [scrollbar-width:none] cursor-grab [-ms-overflow-style:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        {members.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        aria-label="Scroll to previous people"
        className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black text-white transition-colors hover:border-accent/50 hover:text-accent md:flex"
      >
        <FaChevronLeft aria-hidden="true" className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        aria-label="Scroll to next people"
        className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-black text-white transition-colors hover:border-accent/50 hover:text-accent md:flex"
      >
        <FaChevronRight aria-hidden="true" className="h-4 w-4" />
      </button>
    </div>
  );
}
