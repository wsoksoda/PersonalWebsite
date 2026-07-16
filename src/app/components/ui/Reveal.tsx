"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = 24;

const buildVariants = (direction: Direction): Variants => {
  const hidden: { opacity: number; x?: number; y?: number } = { opacity: 0 };
  if (direction === "up") hidden.y = offset;
  if (direction === "down") hidden.y = -offset;
  if (direction === "left") hidden.x = offset;
  if (direction === "right") hidden.x = -offset;

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Slide direction as the element fades in. */
  direction?: Direction;
  /** Delay in seconds before the animation begins. */
  delay?: number;
};

/**
 * Scroll-triggered fade/slide reveal. Animates once when it enters the
 * viewport. Reduced-motion users get an instant, motion-free reveal
 * (Framer Motion honors prefers-reduced-motion automatically, and the
 * global CSS guard zeroes out transition durations).
 */
export default function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
}: RevealProps) {
  const variants = buildVariants(direction);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
