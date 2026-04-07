"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: FadeInProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-50px" });

  const hiddenState = {
    opacity: 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
  };

  const visibleState = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const transition: any = {
    duration: 0.6,
    delay,
    ease: [0.25, 0.1, 0.25, 1],
  };

  useEffect(() => {
    if (inView) {
      controls.start({ ...visibleState, transition });
    } else if (!once) {
      controls.start(hiddenState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
