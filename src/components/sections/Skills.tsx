"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { GithubIcon } from "@/components/SocialIcons";

type Skill = {
  name: string;
  score: number;
  maxScore?: number;
  icon: string | React.ReactNode;
};

const skillsData: {
  category: string;
  icon: string | React.ReactNode;
  tilt: string;
  skills: Skill[];
}[] = [
  {
    category: "Frontend",
    icon: "🎨",
    tilt: "rotateY(12deg) rotateX(2deg)",
    skills: [
      { name: "React.js", score: 9.0, icon: "⚛️" },
      { name: "Next.js", score: 8.8, icon: "▲" },
      { name: "TypeScript", score: 8.7, icon: "🔷" },
      { name: "Tailwind CSS", score: 9.7, icon: "🌊" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    tilt: "rotateY(4deg) rotateX(1deg)",
    skills: [
      { name: "Node.js", score: 8.0, icon: "🟢" },
      { name: "Express", score: 7.8, icon: "🚂" },
      { name: "MongoDB", score: 7.5, maxScore: 10, icon: "🍃" },
      { name: "PostgreSQL", score: 7.0, maxScore: 10, icon: "🐘" },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    tilt: "rotateY(-4deg) rotateX(1deg)",
    skills: [
      { name: "Git & GitHub", score: 8.8, icon: <GithubIcon size={14} /> },
      { name: "Docker", score: 6.5, icon: "🐳" },
      { name: "Vercel", score: 9.0, icon: "▲" },
      { name: "AWS Basics", score: 5.5, icon: "☁️" },
    ],
  },
  {
    category: "Languages",
    icon: "💻",
    tilt: "rotateY(-12deg) rotateX(2deg)",
    skills: [
      { name: "JavaScript", score: 9.2, icon: "🟨" },
      { name: "Python", score: 7.5, maxScore: 10, icon: "🐍" },
      { name: "Java", score: 7.0, maxScore: 10, icon: "☕" },
      { name: "C/C++", score: 6.5, maxScore: 10, icon: "⚡" },
    ],
  },
];

const extraSkills = [
  "Redux", "GraphQL", "Prisma", "Firebase", "shadcn/ui",
  "Framer Motion", "Jest", "REST APIs", "Figma", "Linux", "Nginx", "Redis"
];

function DotGauge({ score }: { score: number }) {
  const maxDots = 6;
  const filledDots = Math.round((score / 10) * maxDots);
  
  return (
    <div className="flex gap-1.5 items-center">
      {[...Array(maxDots)].map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i < filledDots
              ? "bg-orange-500 dark:bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.6)]"
              : "bg-gray-200 dark:bg-gray-600/40"
          }`}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-white dark:bg-[#080808] overflow-hidden"
    >
      <div className="blob-amber absolute w-[400px] h-[400px] -left-40 top-1/4 opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-widest uppercase mb-3 drop-shadow-[0_0_15px_rgba(249,115,22,0.05)]">
            My Tech Stack
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl font-medium tracking-wide">
            Explore Meet Pithadiya&apos;s Technical Expertise
          </p>
        </FadeIn>

        {/* 3D Perspective Grid */}
        <div 
          className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-6 w-full perspective-[2000px]"
          style={{ perspectiveOrigin: "50% 50%" }}
        >
          {skillsData.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[320px] xl:w-[280px] shrink-0 transform-gpu group cursor-default"
              style={{
                transform: `scale(1) ${cat.tilt}`,
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: "0deg",
                rotateX: "0deg",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Stacked background sheets for 3D effect */}
              <div 
                className="absolute inset-0 bg-gray-100 dark:bg-[#1c1c1e] rounded-2xl border border-gray-200 dark:border-white/5 opacity-80 dark:opacity-40 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                style={{ transform: "translateZ(-30px) translateY(-15px) scale(0.95)" }}
              />
              <div 
                className="absolute inset-0 bg-gray-50 dark:bg-[#232326] rounded-2xl border border-gray-200 dark:border-white/5 opacity-90 dark:opacity-60 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                style={{ transform: "translateZ(-15px) translateY(-8px) scale(0.98)" }}
              />

              {/* Main Card */}
              <div 
                className="relative glass bg-white/80 dark:bg-[#151515]/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-xl dark:shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-orange-500/30 group-hover:bg-white dark:group-hover:bg-[#151515]/95 group-hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-sm shadow-inner group-hover:border-orange-500/50 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg tracking-wide group-hover:text-black dark:group-hover:text-white transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between group/skill">
                      <div className="flex items-center gap-2">
                        <span className="w-5 flex justify-center text-sm opacity-80 group-hover/skill:opacity-100 transition-opacity">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <DotGauge score={skill.score} />
                        <div className="text-[11px] font-mono text-gray-400 dark:text-gray-500 group-hover/skill:text-orange-500 dark:group-hover/skill:text-orange-400 transition-colors min-w-[42px] text-right">
                          <span className="text-gray-700 dark:text-gray-300 font-bold">{skill.score.toFixed(1)}</span>
                          <span className="opacity-50">/{skill.maxScore || 10}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Info Pills */}
        <FadeIn delay={0.6} className="mt-28 w-full max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-semibold tracking-widest uppercase">
            Also Proficient In:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {extraSkills.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2 rounded-full glass bg-white/60 dark:bg-[#151515]/60 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-orange-500/50 hover:text-orange-600 dark:hover:text-white hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all cursor-default shadow-sm dark:shadow-lg"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
