"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "motion/react";
import { HiArrowLeft } from "react-icons/hi";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const RESUME_FILE = "/William_Soksoda_Resume.pdf";

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);

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
          <Document
            file={RESUME_FILE}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={<p className="py-20 text-slate-400">Loading résumé…</p>}
            error={<p className="py-20 text-red-400">Failed to load résumé.</p>}
          >
            {Array.from({ length: numPages }, (_, index) => (
              <div
                key={`page_${index + 1}`}
                className="mb-6 overflow-hidden rounded-xl shadow-card ring-1 ring-white/10"
              >
                <Page
                  pageNumber={index + 1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={800}
                />
              </div>
            ))}
          </Document>
        </motion.div>
      </div>
    </main>
  );
}
