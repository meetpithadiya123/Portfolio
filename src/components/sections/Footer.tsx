"use client";

import { motion } from "framer-motion";
import { Mail, Heart, Code2, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const links = {
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: GithubIcon, href: "https://github.com/meetpithadiya123", label: "GitHub", id: "footer-github" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/meet-pithadiya?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn", id: "footer-linkedin" },
    { icon: Mail, href: "mailto:meet.temp123@gmail.com", label: "Email", id: "footer-email" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Meet Pithadiya</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full-stack developer passionate about building products that
              matter. Open to exciting opportunities and collaborations.
            </p>
            <div className="flex gap-3 mt-5">
              {links.social.map((s) => (
                <motion.a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:bg-orange-900/20 transition-all duration-200"
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.nav.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hire Me card */}
          <div>
            <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 p-5">
              <h3 className="font-bold text-white mb-2">Available for Work</h3>
              <p className="text-gray-400 text-sm mb-4">
                Looking for internships, full-time roles, or exciting freelance
                projects.
              </p>
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                id="footer-hire-btn"
                className="btn-primary text-sm py-2 px-5"
              >
                <Mail size={14} />
                Let&apos;s Talk
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <span>Made By</span>
            <Heart size={14} className="text-orange-500 fill-orange-500 animate-pulse" />
            <span className="gradient-text font-semibold">Meet Pithadiya</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="hidden sm:flex items-center justify-center">
            <span className="text-gray-500 text-sm tracking-wide uppercase">Thank You</span>
          </div>

          <div className="flex items-center justify-center sm:justify-end">
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              id="scroll-to-top-btn"
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 hover:bg-orange-500/20 transition-all duration-200"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
