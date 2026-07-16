"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { HiArrowLeft } from "react-icons/hi";


const RESUME_FILE = "/William_Soksoda_Resume.pdf";

export default function Resume() {

  return (
    <main className="min-h-screen bg-ink-950 px-6 py-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-accent-500/50 px-5 py-2.5 text-sm font-semibold text-accent-300 transition-all hover:border-accent-400 hover:bg-accent-500/10"
        >
          <HiArrowLeft /> Back to site
        </Link>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-bold text-white">Résumé</h1>
          <a
            href={RESUME_FILE}
            download
            className="rounded-full bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-accent-500"
          >
            Download PDF
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col items-center gap-6"
        >
          <iframe
              src="/William_Soksoda_Resume.pdf"
              className="h-[1000px] w-full rounded-xl"
          />
        </motion.div>
      </div>
    </main>
  );
}
