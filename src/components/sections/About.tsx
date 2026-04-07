"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden"
    >
      {/* Background blob */}
      <div className="blob-orange absolute w-[500px] h-[500px] -right-60 top-1/2 -translate-y-1/2 opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left — Premium Image */}
          <FadeIn direction="left" className="w-full max-w-sm mx-auto lg:mx-0 lg:w-1/2">
            <div className="relative aspect-square sm:aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-2xl group border border-gray-200 dark:border-gray-800">
              <Image
                src="/profile.png"
                alt="Meet Pithadiya"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized={true}
              />
              {/* Modern inner glow and overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] rounded-[2rem] pointer-events-none" />
            </div>
          </FadeIn>

          {/* Right — Content */}
          <div className="flex-1 lg:w-1/2">
            <FadeIn>
              <span className="section-tag">
                <span>👋</span> About Me
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Passionate about{" "}
                <span className="gradient-text">building</span> things
                <br className="hidden sm:block" />
                that solve real problems
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Hi! I&apos;m <strong className="text-gray-900 dark:text-white">Meet Pithadiya</strong>, a
                  full-stack developer from India currently pursuing my engineering
                  degree. I specialize in building modern, scalable web applications using
                  React, Next.js, Node.js, and TypeScript.
                </p>
                <p>
                  I enjoy turning academic concepts into real-world applications through full-stack and AI-powered projects. Every project helps me improve problem-solving, system design, and development skills while building solutions that create{" "}
                  <span className="text-orange-500 font-semibold">
                    real impact.
                  </span>
                </p>
                <p>
                  Beyond the editor, I enjoy exploring new AI tools, contributing to open-source, and keeping up with the fast-paced developer community to continuously refine my craft.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
