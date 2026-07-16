"use client";

import React from "react";
import { motion } from "motion/react";
import { HiAcademicCap, HiLocationMarker } from "react-icons/hi";
import Section from "@/app/components/ui/Section";
import Reveal from "@/app/components/ui/Reveal";
import { achievements, education, profile, strengths } from "@/app/data/content";

export default function About() {
  return (
    <Section id="about" eyebrow="Who I Am" title="About Me">
      <div className="grid gap-12 md:grid-cols-5">
        {/* Summary + facts */}
        <Reveal direction="right" className="md:col-span-3">
          <p className="text-lg leading-relaxed text-slate-300">{profile.summary}</p>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-slate-300">
              <HiLocationMarker className="text-xl text-accent-400" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <HiAcademicCap className="text-xl text-accent-400" />
              <span>
                {education.degree}, {education.school}{" "}
                <span className="italic text-accent-300">({education.honors})</span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Core strengths */}
        <Reveal direction="left" className="md:col-span-2">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-400">
            Core Strengths
          </h3>
          <ul className="flex flex-col gap-3">
            {strengths.map((strength, i) => (
              <motion.li
                key={strength}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition-colors hover:border-accent-500/40 hover:bg-accent-500/5"
              >
                {strength}
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Achievement stats */}
      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-ink-800/50 p-6 text-center shadow-card transition-transform hover:-translate-y-1"
          >
            <div className="text-gradient text-4xl font-extrabold">{a.value}</div>
            <div className="mt-1 font-semibold text-white">{a.label}</div>
            <p className="mt-2 text-sm text-slate-400">{a.detail}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
