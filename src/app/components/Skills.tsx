"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Section from "@/app/components/ui/Section";
import Reveal from "@/app/components/ui/Reveal";
import { coreStack, skillCategories } from "@/app/data/content";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="What I Work With" title="Skills & Tech">
      {/* Core stack logos */}
      <Reveal>
        <div className="mb-14 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {coreStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={72}
                height={72}
                className="h-16 w-16 object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.25)]"
              />
              <span className="text-xs text-slate-400">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* Categorized skill tags */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-ink-800/40 p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-400">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 transition-colors hover:border-accent-500/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
