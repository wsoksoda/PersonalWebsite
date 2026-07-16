"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import Button from "@/app/components/ui/Button";
import { profile } from "@/app/data/content";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Title() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated backdrop */}
      <div className="bg-grid absolute inset-0 -z-10" />
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/3 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-600/20 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-ink-950" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex max-w-3xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300"
        >
          {profile.location} · Available for opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Hi, I&#39;m <span className="text-gradient">William Soksoda</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl font-semibold text-slate-200 sm:text-2xl"
        >
          {profile.role}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#projects">View My Work</Button>
          <Button href={profile.resume} variant="outline">
            View Résumé
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-6 text-2xl text-slate-400">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl text-slate-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <HiArrowDown />
      </motion.a>
    </section>
  );
}
