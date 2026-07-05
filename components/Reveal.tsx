"use client";

import { Children, ElementType, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
  },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  as?: ElementType;
  stagger?: boolean;
};

export default function Reveal({
  children,
  className,
  itemClassName,
  as: Tag = "div",
  stagger = true,
}: RevealProps) {
  const MotionTag = motion(Tag as ElementType);

  if (!stagger) {
    return (
      <MotionTag
        className={className}
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {Children.map(children, (child, i) => (
        <motion.div className={itemClassName} variants={item} key={i}>
          {child}
        </motion.div>
      ))}
    </MotionTag>
  );
}
