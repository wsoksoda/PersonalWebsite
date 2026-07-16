// Central résumé-derived content. Keeping it here keeps the section
// components declarative and makes future updates a one-file change.

export const profile = {
  name: "William Soksoda",
  role: "Software Engineer",
  location: "Fargo, ND",
  email: "w.soksoda@gmail.com",
  phone: "(530) 395-9025",
  linkedin: "https://www.linkedin.com/in/william-soksoda/",
  github: "https://github.com/wsoksoda",
  sourceRepo: "https://github.com/wsoksoda/PersonalWebsite",
  resume: "/resume",
  summary:
    "Software Engineer with 2+ years of experience building production full-stack web and mobile applications using C#, Kotlin, React, Flutter, and Azure. I own customer-facing products, design secure backend services, ship production APIs, review 100+ pull requests, and deliver software from design through deployment.",
  tagline:
    "I build production full-stack web & mobile applications — from secure backend APIs to polished front ends.",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const strengths: string[] = [
  "Full-Stack Web & Mobile Development",
  "Secure Backend & API Design",
  "Cloud-Native Applications",
  "CI/CD & DevOps Automation",
  "Agile Collaboration & Communication",
];

export type Achievement = {
  value: string;
  label: string;
  detail: string;
};

export const achievements: Achievement[] = [
  {
    value: "100+",
    label: "Pull Requests",
    detail: "Reviewed and merged across multiple teams.",
  },
  {
    value: "Prod",
    label: "Production Ready",
    detail: "Deployed and maintained apps via Azure Pipelines and best practices.",
  },
  {
    value: "24/7",
    label: "On-Call Contributor",
    detail: "Participated in on-call rotations ensuring high system reliability.",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "FarmQA",
    role: "Software Engineer",
    period: "Feb 2025 — Present",
    highlights: [
      "Own QAfarmer and designed the Agronomy reporting feature end to end.",
      "Build production web and mobile apps with C#, Flutter, Aurelia, SQL Server, PostgreSQL, and Azure.",
      "Integrated external APIs and deployed via Azure Pipelines.",
    ],
  },
  {
    company: "Marvin",
    role: "Associate Systems Programmer",
    period: "Oct 2024 — Feb 2025",
    highlights: [
      "Developed manufacturing workflows with Ignition.",
      "Built internal web applications supporting production operations.",
    ],
  },
  {
    company: "Bushel",
    role: "Software Engineer",
    period: "Jan 2024 — Aug 2024",
    highlights: [
      "Built production REST APIs and owned the location service.",
      "Implemented Keycloak authentication and authorization middleware.",
      "Monitored production services for reliability.",
    ],
  },
  {
    company: "Bushel",
    role: "Software Engineer Intern",
    period: "May 2023 — Dec 2023",
    highlights: [
      "Built production REST APIs.",
      "Developed unit and integration tests.",
      "Deployed releases via Azure Pipelines.",
    ],
  },
];

export const education = {
  school: "North Dakota State University",
  degree: "Bachelor of Science in Computer Science",
  honors: "Cum Laude",
};

export type SkillCategory = { title: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  { title: "Languages", skills: ["C#", "Kotlin", "SQL", "JavaScript", "TypeScript"] },
  { title: "Frontend", skills: ["React", "Next.js", "Aurelia", "Flutter"] },
  { title: "Backend", skills: ["ASP.NET", "Spring Boot", "REST APIs", "Keycloak"] },
  { title: "Databases", skills: ["PostgreSQL", "SQL Server"] },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Azure Pipelines", "Docker", "Kubernetes", "Liquibase", "Datadog", "Rancher"],
  },
];

// Highlighted "core stack" logos (existing PNGs in /public).
export type CoreTech = { name: string; src: string };

export const coreStack: CoreTech[] = [
  { name: "React", src: "/react.png" },
  { name: "Kotlin", src: "/kotlin.png" },
  { name: "Spring", src: "/spring.png" },
  { name: ".NET", src: "/dotnet.png" },
  { name: "Flutter", src: "/flutter.png" },
  { name: "Kubernetes", src: "/kubernetes.png" },
  { name: "Keycloak", src: "/keycloak.png" },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  context: "Personal" | "Professional";
};

export const projects: Project[] = [
  {
    title: "QAFarmer",
    context: "Professional",
    description:
      "Full-stack application built from scratch for farmers, handling weather, grain prices, bin storage, rain gauges, and agronomic information — with app-to-app data transfer and notifications.",
    tech: ["C#", "Flutter", "Aurelia", "Azure"],
  },
  {
    title: "Nutrient Blender",
    context: "Professional",
    description:
      "Full-stack application built from scratch for agronomists that calculates nutrient requirements for fields.",
    tech: ["C#", "SQL Server", "Azure"],
  },
  {
    title: "Location Service",
    context: "Professional",
    description:
      "Backend service for managing grain elevator locations with secure Keycloak authentication and authorization middleware.",
    tech: ["Kotlin", "REST APIs", "Keycloak"],
  },
];
