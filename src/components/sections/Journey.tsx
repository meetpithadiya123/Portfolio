"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

type TimelineItem = {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "project" | "achievement" | "internship";
  icon: string;
};

const timeline: TimelineItem[] = [
  {
    id: "tl-1",
    year: "2024 – Present",
    title: "B.Tech in Computer Engineering",
    organization: "Marwadi University",
    description:
      "Transitioned into B.Tech to deepen my expertise in software engineering, distributed systems, and modern web architectures. Focusing heavily on building scalable real-world applications.",
    type: "education",
    icon: "🎓",
  },
  {
    id: "tl-2",
    year: "2021 – 2024",
    title: "Diploma in Computer Engineering",
    organization: "Marwadi University",
    description:
      "Built a strong foundational knowledge in programming, data structures, and core computer science concepts. This is where I discovered my deep passion for coding.",
    type: "education",
    icon: "🚀",
  },
  {
    id: "tl-3",
    year: "2020",
    title: "Secondary School (10th Standard)",
    organization: "State Board of Secondary Education",
    description:
      "Completed my secondary education with a strong inclination towards mathematics, logic, and technology, officially kicking off my engineering roadmap.",
    type: "education",
    icon: "🏫",
  },
];

const typeColors = {
  education: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
  project: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
  achievement: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
  internship: "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
};

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-24 bg-white dark:bg-[#080808] overflow-hidden"
    >
      <div className="blob-amber absolute w-[400px] h-[400px] right-0 top-1/3 opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="section-tag">
            <span>🗺️</span> My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            Journey Through <span className="gradient-text">Learning & Building</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg">
            A timeline of my education, projects, and milestones as I grow into
            a full-stack developer.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-300 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-16"
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="absolute left-0 top-4 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-orange-400 flex items-center justify-center text-lg shadow-orange"
                >
                  {item.icon}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="glass rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-glass dark:shadow-glass-dark"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-base">
                        {item.title}
                      </h3>
                      <p className="text-orange-500 text-sm font-medium">
                        {item.organization}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${typeColors[item.type]}`}
                      >
                        {item.type}
                      </span>
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400 font-mono">
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
