"use client";

import React from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Section from "@/app/components/ui/Section";
import { projects } from "@/app/data/content";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Things I've Built" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -8 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-ink-800/50 p-6 shadow-card transition-colors hover:border-accent-500/50"
          >
            <div className="mb-3 flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  project.context === "Personal"
                    ? "bg-accent-500/15 text-accent-300"
                    : "bg-emerald-500/15 text-emerald-300"
                }`}
              >
                {project.context}
              </span>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} repository`}
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  <FaGithub className="text-xl" />
                </a>
              )}
            </div>

            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200"
              >
                View Repository
                <HiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
