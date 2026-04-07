"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
      style={{
        background:
          theme === "dark"
            ? "rgba(249,115,22,0.12)"
            : "rgba(249,115,22,0.08)",
        border: "1px solid rgba(249,115,22,0.2)",
      }}
      aria-label="Toggle theme"
      id="theme-toggle-btn"
    >
      {theme === "dark" ? (
        <Sun size={16} className="text-orange-400" />
      ) : (
        <Moon size={16} className="text-orange-500" />
      )}
    </motion.button>
  );
}
