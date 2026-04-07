"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import Image from "next/image";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUpVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-white dark:bg-[#080808]"
    >
      {/* Premium subtle grid background */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Background glowing blobs */}
      <div className="absolute w-[800px] h-[800px] bg-orange-400/20 dark:bg-orange-500/10 rounded-full blur-[100px] -top-60 -right-20 mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] bg-amber-300/20 dark:bg-amber-500/10 rounded-full blur-[100px] top-40 -left-60 mix-blend-multiply dark:mix-blend-screen pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left pt-10 lg:pt-0">
            {/* Massive Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-8"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Ideas Into</span>
              <br className="hidden lg:block" /> Real-World Projects.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              Passionate about <strong className="text-gray-900 dark:text-gray-100 font-semibold">Full Stack Development</strong>, AI tools, and scalable web applications. Turning complex problems into elegant, fast, and user-friendly solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 group flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/resume"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-orange-500 transition-all duration-300 group flex items-center justify-center gap-2"
              >
                <Download size={18} className="group-hover:-translate-y-1 transition-transform text-gray-500 dark:text-gray-400 group-hover:text-orange-500" />
                View Resume
              </Link>
            </motion.div>
          </div>

          {/* Right Image/Bento Container */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 max-w-md mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative w-full aspect-[4/5] sm:h-[550px] rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl group"
            >
              <Image
                src="/profile.png"
                alt="Meet Pithadiya"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
                unoptimized={true}
              />
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent pointer-events-none" />

              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 p-5 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-white font-extrabold text-xl tracking-tight">Meet Pithadiya</p>
                    <p className="text-white/80 text-sm font-medium mt-0.5">Gujarat, India 🇮🇳</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://github.com/meetpithadiya123" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all">
                      <GithubIcon size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/meet-pithadiya?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all">
                      <LinkedinIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
