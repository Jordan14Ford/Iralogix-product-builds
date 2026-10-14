"use client";

import { motion } from "motion/react";
import { useLayoutEffect, useState } from "react";
import { panelTransition, usePrefersReducedMotion } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = usePrefersReducedMotion();
  const [travel, setTravel] = useState(false);
  const [settled, setSettled] = useState(false);

  useLayoutEffect(() => {
    if (!reduce) setTravel(true);
  }, [reduce]);

  if (reduce || !travel) {
    return <div data-step-settled="true">{children}</div>;
  }

  return (
    <motion.div
      data-step-settled={settled ? "true" : "false"}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={panelTransition}
      onAnimationComplete={() => setSettled(true)}
    >
      {children}
    </motion.div>
  );
}
