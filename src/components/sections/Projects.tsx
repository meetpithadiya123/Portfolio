"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import FadeIn from "@/components/FadeIn";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  stars: number;
  score: number;
  stats: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "AI Answer Generator",
    description:
      "AI-powered Q&A generator project that creates smart, fast answers from user prompts with a clean and responsive interface.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "GROQ API"],
    github:
      "https://github.com/meetpithadiya123/Q-A-generator-project-live_render-REPO",
    demo: "https://q-a-generator-project-live-render-repo.onrender.com",
    stars: 0,
    score: 96,
    stats: "AI POWERED, LIVE ON RENDER",
  },
  {
    id: "project-2",
    title: "Expense Tracker",
    description:
      "A clean expense tracking app to add, categorize, and monitor daily spending with a simple and responsive user interface.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/meetpithadiya123/Expenses",
    demo: "https://expenses-ftfd.onrender.com",
    stars: 0,
    score: 92,
    stats: "PERSONAL FINANCE, LIVE ON RENDER",
  },
  {
    id: "project-3",
    title: "Weather Checker",
    description:
      "A real-time weather application that provides accurate weather updates and forecasts based on search or location.",
    tags: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/meetpithadiya123/Weather-App/",
    demo: "https://weather-app-jz8q.onrender.com",
    stars: 0,
    score: 94,
    stats: "REAL-TIME UPDATES, LIVE ON RENDER",
  },
{
  id: "project-4",
  title: "Book Management",
  description:
    "A full-stack book management application built with React and Express.js, featuring CRUD operations with a RESTful API backend.",
  tags: ["React", "Express", "Node.js", "JavaScript"],
  github: "https://github.com/meetpithadiya123/Practical_13_AWT",
  demo: "https://book-manage-todo.vercel.app/",
  stars: 0,
  score: 97,
  stats: "FULL-STACK, LIVE ON VERCEL",
},
{
  id: "project-5",
  title: "Shop Invoice Generator",
  description:
    "A full-stack invoice management application built with React and Express.js, featuring CRUD operations to create, view, and manage shop invoices with a RESTful API backend.",
  tags: ["React", "Express", "Node.js", "MongoDB", "JavaScript"],
  github: "https://github.com/meetpithadiya123/shop-bill-manage_AWT14",
  demo: "https://shop-bill-manage.vercel.app/",
  stars: 0,
  score: 99,
  stats: "FULL-STACK, LIVE ON VERCEL",
},
];

// No helper needed anymore

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const radiusOuter = 46;
  const radiusInner = 36;
  const circumferenceOuter = 2 * Math.PI * radiusOuter;
  const circumferenceInner = 2 * Math.PI * radiusInner;
  const outerOffset = circumferenceOuter - (project.score / 100) * circumferenceOuter * 0.75; // 75% max arc
  const innerOffset = circumferenceInner - (project.score / 100) * circumferenceInner * 0.65; // 65% max arc

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      id={project.id}
      className="group relative glass bg-white/80 dark:bg-[#151515]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-500 hover:border-orange-500/40 hover:shadow-[0_10px_40px_rgba(249,115,22,0.15)] flex flex-col sm:flex-row items-center gap-6"
    >
      {/* Radiant Glow Behind Card on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />

      {/* Left Axis: Radial Progress */}
      <div className="relative shrink-0 w-36 h-36 flex items-center justify-center">
        {/* Dual Arcs */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-[135deg]">
          {/* Outer Track */}
          <circle cx="72" cy="72" r={radiusOuter} strokeWidth="8" className="stroke-gray-200 dark:stroke-gray-800" fill="transparent" strokeDasharray={circumferenceOuter} strokeDashoffset={circumferenceOuter * 0.25} strokeLinecap="round" />
          {/* Outer Filled Arc */}
          <motion.circle
            initial={{ strokeDashoffset: circumferenceOuter }}
            whileInView={{ strokeDashoffset: outerOffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="72" cy="72" r={radiusOuter} strokeWidth="8" className="stroke-orange-500" strokeDasharray={circumferenceOuter} fill="transparent" strokeLinecap="round"
          />
          {/* Inner Track */}
          <circle cx="72" cy="72" r={radiusInner} strokeWidth="3" className="stroke-gray-300 dark:stroke-gray-700" fill="transparent" strokeDasharray={circumferenceInner} strokeDashoffset={circumferenceInner * 0.35} strokeLinecap="round" />
          {/* Inner Filled Arc */}
          <motion.circle
            initial={{ strokeDashoffset: circumferenceInner }}
            whileInView={{ strokeDashoffset: innerOffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            cx="72" cy="72" r={radiusInner} strokeWidth="3" className="stroke-amber-400" strokeDasharray={circumferenceInner} fill="transparent" strokeLinecap="round"
          />
        </svg>

        {/* Center Percentage */}
        <div className="flex flex-col items-center z-10">
          <span className="text-2xl font-black text-gray-900 dark:text-white drop-shadow-md">{project.score}%</span>
        </div>
      </div>

      {/* Right Axis: Project Info */}
      <div className="flex-1 flex flex-col justify-center text-center sm:text-left z-10 w-full sm:w-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wide mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="skill-badge text-[11px] px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Stats & Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-gray-200 dark:border-white/10 pt-4 gap-4">
          <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400/80 tracking-widest uppercase">
            {project.stats}
          </span>

          <div className="flex items-center justify-center sm:justify-end gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-orange-500 transition-all shadow-sm"
            >
              <GithubIcon size={14} />
            </a>
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-orange-500 transition-all shadow-sm"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-gray-50 dark:bg-[#060606] overflow-hidden"
    >
      <div className="blob-orange absolute w-[500px] h-[500px] -right-40 bottom-0 opacity-20 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-xs font-bold text-gray-600 dark:text-gray-300 tracking-widest uppercase mb-6 shadow-sm">
            <span className="text-orange-500 mr-2">✦</span> Projects
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-widest uppercase mb-4 drop-shadow-[0_0_15px_rgba(249,115,22,0.05)]">
            Engineering & <span className="text-orange-500">Live Projects</span>
          </h2>

        </FadeIn>

        {/* Projects Grid (Dual Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
