"use client";

import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Section from "@/app/components/ui/Section";
import Reveal from "@/app/components/ui/Reveal";
import Button from "@/app/components/ui/Button";
import { profile } from "@/app/data/content";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: HiMail },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: profile.github, icon: FaGithub },
];

export default function Socials() {
  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's Connect">
      <Reveal>
        <p className="mx-auto max-w-xl text-center text-slate-400">
          I&#39;m always open to discussing new opportunities, interesting projects, or just
          talking shop. Reach out through any of the channels below.
        </p>
      </Reveal>

      <div className="mt-10 flex justify-center gap-6">
        {links.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-ink-800/50 text-2xl text-slate-300 shadow-card transition-colors hover:border-accent-500/50 hover:text-accent-300"
            >
              <Icon />
            </motion.a>
          );
        })}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button href={profile.resume}>View My Résumé</Button>
          <Button href={profile.sourceRepo} variant="outline" external>
            Source Code for This Site
          </Button>
        </div>
      </Reveal>

      <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
        © {profile.name}. Built with Next.js, Tailwind CSS & Framer Motion.
      </footer>
    </Section>
  );
}
