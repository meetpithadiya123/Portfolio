"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  Download,
  ArrowLeft,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import Link from "next/link";

function ResumeContent() {
  const searchParams = useSearchParams();

  const handleDownload = () => {
    window.print();
  };

  // Auto-trigger download when ?download=true
  useEffect(() => {
    if (searchParams.get("download") === "true") {
      // Small delay to let the page render fully before printing
      const timer = setTimeout(() => {
        window.print();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-zinc-900 print:bg-white print:min-h-0">

      {/* Top Controls — hidden when printing */}
      <div className="flex justify-between items-center max-w-[210mm] mx-auto py-6 px-4 print:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-lg font-bold transition-all active:scale-95"
        >
          <Download size={18} />
          Download CV
        </button>
      </div>

      {/* A4 Resume Paper — Single Page */}
      <div className="resume-paper max-w-[210mm] mx-auto bg-[#f8f9fa] shadow-2xl overflow-hidden flex flex-col sm:flex-row print:shadow-none print:max-w-none print:m-0 print:rounded-none rounded-lg mb-8">

        {/* ═══════ LEFT SIDEBAR ═══════ */}
        <div
          className="w-full sm:w-[34%] text-white px-6 py-8 flex flex-col items-center shrink-0 print:py-6"
          style={{
            backgroundColor: "#1c2331",
            WebkitPrintColorAdjust: "exact",
            printColorAdjust: "exact" as never,
          }}
        >

          {/* Profile Circle */}
          <div className="w-36 h-36 rounded-full border-[3px] border-[#a7ccce] shadow-lg overflow-hidden flex-shrink-0 relative mx-auto">
            <Image
              src="/profile.png"
              alt="Pithadiya Meet"
              fill
              className="object-cover object-center"
              sizes="144px"
              priority
              unoptimized={true}
            />
          </div>

          {/* Name */}
          <div className="text-center w-full mt-4 mb-6">
            <h2 className="text-xl font-bold tracking-wide leading-tight">Pithadiya Meet</h2>
            <p className="text-gray-300 text-xs mt-1">Rajkot, Gujarat, India</p>
          </div>

          {/* CONTACT */}
          <SidebarSection icon={<MapPin size={16} className="text-[#a7ccce]" />} title="Contact">
            <div className="space-y-2 text-xs text-gray-200">
              <div className="flex items-center gap-2">
                <Phone size={13} className="shrink-0" />
                <span className="break-all">9016227628</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="shrink-0" />
                <span className="break-all">meet.temp123@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="shrink-0"><GithubIcon size={13} /></span>
                <span className="break-all">github.com/meetpithadiya123</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="shrink-0"><LinkedinIcon size={13} /></span>
                <span className="break-all">linkedin.com/in/meet-pithadiya</span>
              </div>
            </div>
          </SidebarSection>

          {/* EXPERTISE */}
          <SidebarSection icon={<Code2 size={16} className="text-[#a7ccce]" />} title="Expertise">
            <div className="flex flex-wrap gap-1.5">
              {[
                "HTML/CSS", "JavaScript", "React.js", "Tailwind CSS",
                "Node.js", "REST APIs", "Python", "GROQ API",
                "Git/GitHub", "VS Code", "More ..."
              ].map(skill => (
                <span
                  key={skill}
                  className="font-bold text-[10px] px-2.5 py-1 rounded-full leading-tight"
                  style={{
                    backgroundColor: "#a7ccce",
                    color: "#1c2331",
                    WebkitPrintColorAdjust: "exact",
                    printColorAdjust: "exact" as never,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </SidebarSection>

          {/* EDUCATION */}
          <SidebarSection icon={<GraduationCap size={16} className="text-[#a7ccce]" />} title="Education">
            <ul className="space-y-2.5 text-xs text-gray-200 list-disc pl-4">
              <li>
                <span className="font-semibold text-white leading-tight block">B.Tech in Computer Engineering</span>
              </li>
              <li>
                <span className="font-semibold text-white leading-tight block">Diploma in Computer Engineering</span>
              </li>
              <li>
                <span className="font-semibold text-white leading-tight block">Secondary School (10th Standard)</span>
              </li>
            </ul>
          </SidebarSection>
        </div>

        {/* ═══════ RIGHT CONTENT ═══════ */}
        <div className="w-full sm:w-[66%] px-8 py-8 flex flex-col print:py-6">

          {/* Big Name */}
          <h1 className="text-4xl sm:text-5xl font-black text-[#4b4f54] uppercase tracking-tight mb-2 leading-none">
            Pithadiya Meet
          </h1>
          <p className="text-xs text-gray-600 mb-6 leading-relaxed">
            Passionate about Full Stack Development, AI tools, and scalable web applications. Turning complex problems into elegant, fast, and user-friendly solutions.
          </p>

          {/* EXPERIENCE */}
          <div className="mb-5">
            <h3 className="text-base font-bold flex items-center gap-2 uppercase tracking-widest mb-3 text-[#1c2331]">
              <Briefcase size={18} className="text-[#4b4f54]" />
              EDUCATION
            </h3>

            <div className="space-y-2.5">
              <ExpCard
                year="2024 - Present"
                title="B.Tech in Computer Engineering"
                org="Marwadi University"
                desc="Transitioned into B.Tech to deepen in software engineering, distributed systems, and modern web architectures while building real-world applications."
              />
              <ExpCard
                year="2021 - 2024"
                title="Diploma in Computer Engineering"
                org="Marwadi University"
                desc="Built a strong foundation in programming, data structures, and core computer science concepts, strengthening practical coding and problem-solving skills."
              />
              <ExpCard
                year="2020"
                title="Secondary School (10th Standard)"
                org="State Board of Secondary Education"
                desc="Completed secondary education with a strong focus on mathematics, logic, and technology."
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-200 flex items-center justify-center">Loading Resume...</div>}>
      <ResumeContent />
    </Suspense>
  );
}

/* ── Reusable Sidebar Section ─────────────── */
function SidebarSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="w-full mb-5">
      <h3 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest mb-3">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ── Reusable Experience Card ─────────────── */
function ExpCard({ year, title, org, desc }: { year: string; title: string; org: string; desc: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
      <div className="mb-1 flex flex-wrap items-center gap-x-2 text-xs">
        <span className="text-[#a98f58] font-bold">{year}</span>
        <span className="text-gray-400">|</span>
        <span className="font-bold text-[#1c2331]">{title}</span>
      </div>
      <div className="text-gray-500 text-[11px] font-medium mb-1">{org}</div>
      <p className="text-[11px] text-gray-600 leading-snug">{desc}</p>
    </div>
  );
}
