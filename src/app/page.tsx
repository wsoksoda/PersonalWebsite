import React from "react";
import Navbar from "@/app/components/Navbar";
import Title from "@/app/components/Title";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Socials from "@/app/components/Socials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-ink-950">
        <Title />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Socials />
      </main>
    </>
  );
}
