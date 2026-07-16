"use client";

import React from "react";
import { motion } from "motion/react";
import Section from "@/app/components/ui/Section";
import { experience } from "@/app/data/content";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Where I've Worked" title="Experience">
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical spine */}
        <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-accent-500/60 via-white/10 to-transparent md:left-1/2" />

        <div className="flex flex-col gap-12">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative pl-12 md:pl-0"
            >
              {/* Node */}
              <span className="absolute left-1.5 top-1.5 h-4 w-4 rounded-full border-2 border-accent-400 bg-ink-950 md:left-1/2 md:-translate-x-1/2" />

              <div
                className={`rounded-2xl border border-white/10 bg-ink-800/50 p-6 shadow-card transition-colors hover:border-accent-500/40 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:ml-auto" : ""
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{job.role}</h3>
                  <span className="text-sm font-medium text-accent-300">{job.period}</span>
                </div>
                <p className="mt-1 font-semibold text-slate-300">{job.company}</p>
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm text-slate-400 marker:text-accent-500">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
