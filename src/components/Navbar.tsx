"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={cn(
              "flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300",
              scrolled
                ? "glass shadow-glass dark:shadow-glass-dark"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 font-bold text-xl"
              id="nav-logo"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="gradient-text">Meet Pithadiya</span>
            </motion.a>

            {/* Desktop Nav — pill style */}
            <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    activeSection === link.href
                      ? "bg-orange-500 text-white shadow-orange"
                      : "text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right — Theme Toggle + CTA */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="/resume?download=true"
                id="nav-cta-btn"
                className="hidden md:flex btn-primary text-sm py-2 px-5"
              >
                Download CV
              </motion.a>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2 rounded-lg"
                onClick={() => setMobileOpen(!mobileOpen)}
                id="mobile-menu-btn"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? (
                  <X size={20} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu size={20} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-4 right-4 z-50 glass rounded-2xl p-4 shadow-glass dark:shadow-glass-dark"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-200 block"
              >
                {link.label}
              </motion.button>
            ))}
            <a
              href="/resume?download=true"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center mt-3 text-sm py-2.5"
            >
              Download CV
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary w-full justify-center mt-3 text-sm py-2.5"
            >
              Contact Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
