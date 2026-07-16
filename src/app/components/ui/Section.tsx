import React from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  /** Optional short line under the heading. */
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Consistent section shell: anchor target, max-width container, and an
 * animated heading. Used by About, Experience, Skills, Projects, Contact.
 */
export default function Section({ id, title, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-20 md:py-28 ${className ?? ""}`}>
      <Reveal>
        <div className="mb-12 flex flex-col items-center text-center">
          {eyebrow && (
            <span className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-400">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
          <span className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-500 to-accent-700" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
